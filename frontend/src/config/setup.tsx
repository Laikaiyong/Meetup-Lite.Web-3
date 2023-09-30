import { Dispatch, SetStateAction } from "react";
import Wallet from "@/components/Wallet";
import {
  Connection,
  Keypair,
  PublicKey,
  SystemProgram,
  TransactionMessage,
  VersionedTransaction,
} from "@solana/web3.js";
import React, { useEffect, useState } from "react";

const Exercise1GenerateKeypairs: React.FC<{
  keypair: Keypair | null;
  setKeypair: Dispatch<SetStateAction<Keypair | null>>;
}> = ({ keypair, setKeypair }) => {
  /** Exercise 1, use the Keypair class to generate a Keypair for yourself */
  const generateKeypair = () => {
    const keypair = Keypair.generate();
    setKeypair(keypair);
  };
  /** End of exercise 1 */

  return (
    <div className="max-w-full ">
      <p className="font-semibold">Your Keypair</p>
      <p style={{ wordBreak: "break-all" }}>
        PublicKey: {keypair?.publicKey?.toString()}
      </p>
      <div className="mt-4">
        <button
          type="button"
          onClick={generateKeypair}
          className="text-black backdrop-blur-2xl rounded-xl px-4 py-2 bg-white"
        >
          Generate Keypair
        </button>
      </div>

      {keypair?.publicKey?.toString() ? (
        <div className="flex mt-4">
          <a
            href={`https://explorer.solana.com/address/${keypair?.publicKey?.toString()}?cluster=devnet`}
            target="_blank"
            className="text-black backdrop-blur-2xl rounded-xl px-4 py-2 bg-white"
          >
            Open Explorer
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default Exercise1GenerateKeypairs;

/** Answers
const generateKeypair = () => {
  const newKP = Keypair.generate();
  setKeypair(newKP);
};
*/


export const task2 = "Lesson 2 - Airdrop. Fund your wallet.";

const Exercise2Airdropping: React.FC<{
  keypair: Keypair | null;
  connection: Connection;
}> = ({ keypair, connection }) => {
  const [airdropped, setAirdropped] = useState<boolean>(false);
  const [airdropping, setAirdropping] = useState<boolean>(false);

  const onClickAirdrop = async () => {
    if (!keypair?.publicKey) return;

    setAirdropping(true);
    setAirdropped(true);

    try {
      /** Exercise 2, use the connection object to request an airdrop to your Keypair */
      const txid = await connection.requestAirdrop(
        keypair?.publicKey,
        1_000_000_000
      );

      const result = await connection.confirmTransaction(txid);
      /** End of exercise 2 */

      if ("err" in result) {
        console.error(result.err);
        throw new Error("Failed to airdrop");
      }
    } catch (error) {
      // ignore
    } finally {
      setAirdropping(false);
    }
  };

  return (
    <>
      {keypair && <Wallet keypair={keypair} />}
      <div className="mt-6">
        <p className="font-semibold">Airdop</p>
        <div className="mt-4">
          {(() => {
            if (airdropping) {
              return (
                <button
                  type="button"
                  disabled
                  className="cursor-not-allowed opacity-50 text-black backdrop-blur-2xl rounded-xl px-4 py-2 bg-white"
                >
                  Airdropping...
                </button>
              );
            }

            if (airdropped) {
              return (
                <button
                  type="button"
                  disabled
                  className="cursor-not-allowed opacity-50 text-black backdrop-blur-2xl rounded-xl px-4 py-2 bg-white"
                >
                  Already Airdropped
                </button>
              );
            }

            return (
              <button
                type="button"
                onClick={onClickAirdrop}
                className="text-black backdrop-blur-2xl rounded-xl px-4 py-2 bg-white"
              >
                Click to Airdrop
              </button>
            );
          })()}
        </div>
      </div>
    </>
  );
};

export Exercise2Airdropping;

/** Answers
const txid = await connection.requestAirdrop(
  keypair?.publicKey,
  1_000_000_000
);
const result = await connection.confirmTransaction(txid);
*/

export const task = "Lesson 3 - Get your wallet balance.";

const Exercise3GettingBalance: React.FC<{
  keypair: Keypair | null;
  connection: Connection;
}> = ({ keypair, connection }) => {
  const [balance, setBalance] = useState<string>("0");
  useEffect(() => {
    const fetchSOLBalance = async () => {
      if (!keypair?.publicKey) return;

      try {
        /** Exercise 3, use the connection object to fetch the account's balance */
        const solBalance = await connection.getBalance(keypair.publicKey);
        setBalance((solBalance / 10 ** 9).toFixed(9));
        /** End of exercise 3 */
      } catch (error) {
        console.error(error);
      }
    };

    fetchSOLBalance();
    const intervalId = setInterval(fetchSOLBalance, 2_000);

    return () => {
      clearInterval(intervalId);
    };
  }, [connection, keypair]);

  return (
    <>
      {keypair && <Wallet keypair={keypair} />}
      <div className="mt-6">
        <p className="font-semibold">Balance</p>
        <div className="mt-4">{balance} SOL</div>
      </div>
    </>
  );
};

export default Exercise3GettingBalance;

/** Answers
const solBalance = await connection.getBalance(keypair.publicKey);
setBalance((solBalance / 10 ** 9).toFixed(9));
*/

export const task = "Lesson 4 - Understanding websocket";

const Exercise4ReadingRealtimeBlocks: React.FC<{
  connection: Connection;
  keypair: Keypair | null;
}> = ({ connection, keypair }) => {
  const [currentBlock, setCurrentBlock] = useState<number>(0);

  useEffect(() => {
    /** Exercise 4: Use the websocket listener from the connection object to fetch the latest block */
    const id = connection.onRootChange(setCurrentBlock);
    return () => {
      connection.removeRootChangeListener(id);
    };
    /** End of exercise 4 */
  }, [connection]);

  return (
    <>
      {keypair && <Wallet keypair={keypair} />}
      <div className="mt-6">
        <p className="font-semibold">Current block</p>
        <div className="mt-4">{currentBlock}</div>
      </div>
    </>
  );
};

export default Exercise4ReadingRealtimeBlocks;

/** Answers
const id = connection.onRootChange(setCurrentBlock);
  return () => {
  connection.removeRootChangeListener(id);
};
*/

export const task = "Lesson 5 - Create a transaction to send SOL";

const Exercise5SendingTokens: React.FC<{
  keypair: Keypair | null;
  connection: Connection;
}> = ({ keypair, connection }) => {
  const [txid, setTxid] = useState<string>("");
  const [recipient, setRecipient] = useState<string>("");
  const [amountToTransfer, setAmountToTransfer] = useState<number>(0);
  const [isSending, setIsSending] = useState<boolean>(false);

  const onClickTransfer = async () => {
    if (!keypair?.publicKey) return;

    /** Exercise 5.1: To verify if the PublicKey is valid */
    try {
      new PublicKey(recipient);
    } catch (error) {
      alert("Invalid Public Key");
      return;
    }
    /** End of exercise 5.1 section */

    setIsSending(true);

    /** Exercise 5.2: To Craft a Transaction that sends SOL to the recipient
     * craft a TransactionInstruction
     * craft a TransactionMessage
     * craft a VersionedTransaction
     * Finally, send the transaction
     * */
    try {
      const ix = SystemProgram.transfer({
        fromPubkey: keypair?.publicKey,
        toPubkey: new PublicKey(recipient),
        lamports: amountToTransfer,
      });

      const { blockhash } = await connection.getLatestBlockhash();
      const messageV0 = new TransactionMessage({
        payerKey: keypair.publicKey,
        recentBlockhash: blockhash,
        instructions: [ix],
      }).compileToV0Message();

      const verTx = new VersionedTransaction(messageV0);
      verTx.sign([keypair]);
      const txid = await connection.sendTransaction(verTx);
      setTxid(txid);

      /** End of exercise 5.2 section */
    } catch (error) {
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {keypair && <Wallet keypair={keypair} />}
      <div className="mt-6">
        <p className="font-semibold">Transfer SOL</p>
        <div className="mt-4">
          Recipient:{" "}
          <input
            value={recipient}
            className="text-black rounded-lg border border-black/10 px-2 py-1 w-full max-w-[480px]"
            onChange={(e) => {
              setRecipient(e.target.value);
            }}
          />
        </div>
        <div className="mt-4">
          Amount to transfer:{" "}
          <input
            className="text-black rounded-lg border border-black/10 px-2 py-1"
            value={amountToTransfer}
            onChange={(e) => {
              setAmountToTransfer(e.target.valueAsNumber);
            }}
            type="number"
          />
        </div>

        {isSending ? (
          <button
            type="button"
            disabled
            className="text-black backdrop-blur-2xl rounded-xl px-4 py-2 bg-white mt-4 cursor-not-allowed opacity-50"
          >
            Sending...
          </button>
        ) : (
          <button
            type="button"
            onClick={onClickTransfer}
            className="text-black backdrop-blur-2xl rounded-xl px-4 py-2 bg-white mt-4"
          >
            Transfer
          </button>
        )}
      </div>

      <div className="mt-6">
        <p className="font-semibold">Transaction ID:</p>
        <div className="mt-4 text-xs">{txid}</div>

        <div className="flex mt-4">
          {txid ? (
            <a
              href={`https://explorer.solana.com/tx/${txid}?cluster=devnet`}
              target="_blank"
              className="text-black backdrop-blur-2xl rounded-xl px-4 py-2 bg-white"
            >
              Open Explorer
            </a>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Exercise5SendingTokens;

/** Answers 1
try {
  new PublicKey(recipient);
} catch (error) {
  alert("Invalid Public Key");
  return;
}
*/

/** Answers 2
const ix = SystemProgram.transfer({
  fromPubkey: keypair?.publicKey,
  toPubkey: new PublicKey(recipient),
  lamports: amountToTransfer,
});

const { blockhash } = await connection.getLatestBlockhash();
const messageV0 = new TransactionMessage({
  payerKey: keypair.publicKey,
  recentBlockhash: blockhash,
  instructions: [ix],
}).compileToV0Message();

const verTx = new VersionedTransaction(messageV0);
verTx.sign([keypair]);
const txid = await connection.sendTransaction(verTx);
setTxid(txid);
*/
