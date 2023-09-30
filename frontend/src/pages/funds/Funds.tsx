import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';
import { checkmarkCircleOutline, checkmarkCircleSharp, closeCircleOutline, closeCircleSharp, walletOutline, walletSharp } from 'ionicons/icons';

import { WalletAdapterNetwork, WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider, useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';


import './Funds.css';
import { clusterApiUrl, Transaction, SystemProgram, Keypair, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import React, { FC, ReactNode, useMemo, useCallback, useState, useEffect } from 'react';

import { actions, utils, programs, NodeWallet, Connection} from '@metaplex/js'; 
import { Wallet } from '../../components/funds/ConnectWalletContext';
import axios from 'axios';

const Funds: React.FC = () => {
  const transactionState  = 0;
  // const [ transactionState, setTransactionState ] = useState(0);
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  async function gnosisTransactionValidator(transaction: string)
  {
    const apiKey = "3JQMC1836DIPQQV3Q37E7U1UGC7HFG7AAJ";
    const apiUri = "https://api.gnosisscan.io/api?module=transaction&action=gettxreceiptstatus&txhash=" + transaction + "&apikey=" + apiKey;

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
          value: { blockhash, lastValidBlockHeight }
      } = await connection.getLatestBlockhashAndContext();

      const signature = await sendTransaction(transaction, connection, { minContextSlot });

      await connection.confirmTransaction({ blockhash, lastValidBlockHeight, signature });
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
          <WalletMultiButton/>
        </IonButtons>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen className="funds-content">
        <IonTitle className='funds-page-title' size="large">Fund the group</IonTitle>
        <IonText className='funds-description-text'>Fund for your favorite groups</IonText>


        <IonList inset={true}>
              <IonItem button onClick={gnosisTransactionValidator(transactionCode)}>
              <IonLabel>{transactionCode}</IonLabel>
              <IonLabel>{(!transactionState == 1)
              ? <IonIcon aria-hidden="true" ios={checkmarkCircleOutline} md={checkmarkCircleSharp} />
              : <IonIcon aria-hidden="true" ios={closeCircleOutline} md={closeCircleSharp} />
            }</IonLabel>
              <IonLabel>Click to Revalidate</IonLabel>
            </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
    </Wallet>
  );
};

export default Funds;