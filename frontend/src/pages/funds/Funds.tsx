import React, { useState, useEffect, useCallback } from "react";
import {
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonInput,
    IonToast,
    IonList,
    IonThumbnail,
    IonModal,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    IonButtons,
    IonMenuButton,
} from "@ionic/react";
import {
    checkmarkCircleOutline,
    checkmarkCircleSharp,
    closeCircleOutline,
    closeCircleSharp,
    walletOutline,
    walletSharp,
} from "ionicons/icons";

import { GroupProvider } from "../../provider/GroupProvider";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import "./Funds.css";
import {
    clusterApiUrl,
    Transaction,
    SystemProgram,
    Keypair,
    LAMPORTS_PER_SOL,
    PublicKey,
} from "@solana/web3.js";

import { actions, utils, programs, NodeWallet, Connection } from "@metaplex/js";
import { Wallet } from "../../components/funds/ConnectWalletContext";
import axios from "axios";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";

const Funds: React.FC = () => {
    const transactionState = 0;
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();
    const [solAmount, setSolAmount] = useState<number | null>(null);
    const [otherAmount, setOtherAmount] = useState<number | null>(null);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [inputToken, setInputToken] = useState(
        "2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk"
    ); // Default to ETH
    const outputToken = "So11111111111111111111111111111111111111112";
    const [inputSide, setInputSide] = useState("SOL"); // Default to SOL

    async function gnosisTransactionValidator(transaction: string) {
        const apiKey = "3JQMC1836DIPQQV3Q37E7U1UGC7HFG7AAJ";
        const apiUri =
            "https://api.gnosisscan.io/api?module=transaction&action=gettxreceiptstatus&txhash=" +
            transaction +
            "&apikey=" +
            apiKey;

        const apiResult = await axios.get(apiUri);
        return apiResult.data.status as number;
    }

    const transactionCode =
        "0x734b306be08378fb972e1a15020cb198fc4511775b84880ab15eef5fd24b2503";

    const onClick = useCallback(async () => {
        if (!publicKey) throw new WalletNotConnectedError();

        // 890880 lamports as of 2022-09-01
        const lamports = await connection.getMinimumBalanceForRentExemption(0);

        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey: Keypair.generate().publicKey,
                lamports,
            })
        );

        const {
            context: { slot: minContextSlot },
            value: { blockhash, lastValidBlockHeight },
        } = await connection.getLatestBlockhashAndContext();

        const signature = await sendTransaction(transaction, connection, {
            minContextSlot,
        });

        await connection.confirmTransaction({
            blockhash,
            lastValidBlockHeight,
            signature,
        });
    }, [publicKey, sendTransaction, connection]);

    // Function to fetch quote in real-time
    const fetchQuote = async (
        inputMint: string,
        outputMint: string,
        amount: number | null
    ) => {
        if (amount === null) return;
        const res = await fetch(
            `https://quote-api.jup.ag/v6/quote?inputMint=${inputMint}&outputMint=${outputMint}&amount=${amount}&slippageBps=1`
        );
        const data = await res.json();
        return data.otherAmountThreshold;
    };

    // Real-time quote fetching
    useEffect(() => {
        let inputMint, outputMint, amount;

        if (inputSide === "SOL") {
            inputMint = outputToken;
            outputMint = inputToken;
            amount = solAmount;
        } else {
            inputMint = inputToken;
            outputMint = outputToken;
            amount = otherAmount;
        }

        fetchQuote(inputMint, outputMint, amount).then(
            (otherAmountThreshold) => {
                if (inputSide === "SOL") {
                    setOtherAmount(otherAmountThreshold);
                } else {
                    setSolAmount(otherAmountThreshold);
                }
            }
        );
    }, [solAmount, otherAmount, inputSide]);

    const handleFund = useCallback(async () => {
        if (!publicKey) {
            setToastMessage("Wallet not connected");
            setShowToast(true);
            return;
        }

        // Fetch quote
        const quoteResponse = await fetch(
            `https://quote-api.jup.ag/v6/quote?inputMint=${inputToken}&outputMint=${outputToken}&amount=${solAmount}&slippageBps=1`
        ).then((res) => res.json());

        // Fetch serialized transactions for the swap
        const { swapTransaction } = await fetch(
            "https://quote-api.jup.ag/v6/swap",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    quoteResponse,
                    userPublicKey: publicKey.toString(),
                    wrapAndUnwrapSol: true,
                }),
            }
        ).then((res) => res.json());

        // Deserialize and sign the transaction
        const transaction = Transaction.from(
            Buffer.from(swapTransaction, "base64")
        );
        transaction.feePayer = publicKey;
        const signedTransaction = await sendTransaction(
            transaction,
            connection
        );

        // Execute the transaction
        const confirmation = await connection.confirmTransaction(
            signedTransaction
        );
        if (confirmation) {
            setToastMessage("Swap successful");
            // Existing code for transferring funds to the group starts here
            const lamports = await connection.getMinimumBalanceForRentExemption(
                0
            );
            const transferTransaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: publicKey,
                    toPubkey: new PublicKey(
                        "41qKP55XMiS4EVFPaNwKiMP4yPd9sxJjpdyEjHU617S4"
                    ), // Replace with your actual group public key
                    lamports,
                })
            );
            const transferSignature = await sendTransaction(
                transferTransaction,
                connection
            );
            const transferConfirmation = await connection.confirmTransaction(
                transferSignature
            );
            if (transferConfirmation) {
                setToastMessage("Payment and Swap successful");
            } else {
                setToastMessage("Payment failed after successful swap");
            }
            // Existing code for transferring funds to the group ends here
        } else {
            setToastMessage("Swap failed");
        }
        setShowToast(true);
    }, [publicKey, sendTransaction, connection]);

    return (
        <Wallet>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton />
                        </IonButtons>
                        <IonTitle>Funds</IonTitle>
                        <IonButtons slot="primary">
                            <WalletMultiButton />
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        {GroupProvider.groupList.map((group) => (
                            <IonItem key={group.id}>
                                <IonThumbnail slot="start">
                                    <img
                                        src={group.imageUrl}
                                        alt={group.title}
                                    />
                                </IonThumbnail>
                                <IonLabel>
                                    <h2>{group.title}</h2>
                                    <p>{group.description}</p>
                                    <IonGrid>
                                        <IonRow>
                                            <IonCol size="1">
                                                <IonIcon icon={peopleOutline} />
                                            </IonCol>
                                            <IonCol size="11">
                                                <IonLabel>
                                                    {group.members.text}
                                                </IonLabel>
                                            </IonCol>
                                        </IonRow>
                                        <IonRow>
                                            <IonCol size="1">
                                                <IonIcon icon={walletOutline} />
                                            </IonCol>
                                            <IonCol size="11">
                                                <IonLabel>
                                                    {group.funds.text}
                                                </IonLabel>
                                            </IonCol>
                                        </IonRow>
                                    </IonGrid>
                                </IonLabel>
                                <IonButton onClick={() => setShowModal(true)}>
                                    Fund This Group
                                </IonButton>
                            </IonItem>
                        ))}
                    </IonList>
                    <IonModal isOpen={showModal} backdropDismiss={false}>
                        <IonHeader>
                            <IonToolbar>
                                <IonTitle>Fund Group</IonTitle>
                            </IonToolbar>
                        </IonHeader>
                        <IonContent>
                            <IonItem>
                                <IonLabel>Input Side</IonLabel>
                                <IonSelect
                                    value={inputSide}
                                    onIonChange={(e) =>
                                        setInputSide(e.detail.value)
                                    }
                                >
                                    <IonSelectOption value="SOL">
                                        SOL
                                    </IonSelectOption>
                                    <IonSelectOption value="OTHER">
                                        ETH/MATIC
                                    </IonSelectOption>
                                </IonSelect>
                            </IonItem>
                            <IonItem>
                                <IonLabel>Input Token</IonLabel>
                                <IonSelect
                                    value={inputToken}
                                    onIonChange={(e) =>
                                        setInputToken(e.detail.value)
                                    }
                                >
                                    <IonSelectOption value="2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk">
                                        ETH
                                    </IonSelectOption>
                                    <IonSelectOption value="Gz7VkD4MacbEB6yC5XD3HcumEiYx2EtDYYrfikGsvopG">
                                        MATIC
                                    </IonSelectOption>
                                </IonSelect>
                            </IonItem>
                            <IonItem>
                                <IonLabel>SOL</IonLabel>
                                <IonInput
                                    value={solAmount}
                                    onIonChange={(e) => {
                                        setInputSide("SOL");
                                        setSolAmount(Number(e.detail.value));
                                    }}
                                />
                                <IonLabel>=</IonLabel>
                                <IonLabel>:</IonLabel>
                                <IonInput
                                    value={otherAmount}
                                    onIonChange={(e) => {
                                        setInputSide("OTHER");
                                        setOtherAmount(Number(e.detail.value));
                                    }}
                                />
                            </IonItem>
                            <IonButton onClick={handleFund}>Confirm</IonButton>
                            <IonButton onClick={() => setShowModal(false)}>
                                Cancel
                            </IonButton>
                        </IonContent>
                    </IonModal>
                    <IonToast
                        isOpen={showToast}
                        onDidDismiss={() => setShowToast(false)}
                        message={toastMessage}
                        duration={2000}
                    />

                    <IonList inset={true}>
                        <IonItem
                            button
                            onClick={gnosisTransactionValidator(
                                transactionCode
                            )}
                        >
                            <IonLabel>{transactionCode}</IonLabel>
                            <IonLabel>
                                {!transactionState == 1 ? (
                                    <IonIcon
                                        aria-hidden="true"
                                        ios={checkmarkCircleOutline}
                                        md={checkmarkCircleSharp}
                                    />
                                ) : (
                                    <IonIcon
                                        aria-hidden="true"
                                        ios={closeCircleOutline}
                                        md={closeCircleSharp}
                                    />
                                )}
                            </IonLabel>
                            <IonLabel>Click to Revalidate</IonLabel>
                        </IonItem>
                    </IonList>
                </IonContent>
            </IonPage>
        </Wallet>
    );
};

export default Funds;
