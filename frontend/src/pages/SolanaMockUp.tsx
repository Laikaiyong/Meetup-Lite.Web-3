import { DEVNET_URL } from "@/constants";
import { useLocalStorage } from "@jup-ag/wallet-adapter";
import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import { useEffect, useMemo } from "react";

const inter = Inter({ subsets: ["latin"] });

export const WRAPPED_SOL_MINT = new PublicKey(
  "So11111111111111111111111111111111111111112"
);

function Home() {
  const [storedKeypair, setKeypair] = useLocalStorage<Keypair | null>(
    "local-keypair",
    null
  );

  const [task, setTask] = useLocalStorage("task-index", 0);

  // DO NOT DO THIS IN PRODUCTION, for demo purposes only
  useEffect(() => {
    if (keypair) {
      const sKeys = Uint8Array.from(
        Object.values((keypair as any)._keypair.secretKey) as any
      );
      console.log({ sKeys });
      const regenKeypair = Keypair.fromSecretKey(sKeys);
      setKeypair(regenKeypair);
    }
    // On startup only
  }, []);

  const keypair = useMemo(() => {
    if (storedKeypair) {
      const sKeys = Uint8Array.from(
        Object.values((storedKeypair as any)._keypair.secretKey) as any
      );
      return Keypair.fromSecretKey(sKeys);
    }
    return storedKeypair;
  }, [storedKeypair]);

  const connection = useMemo(() => new Connection(DEVNET_URL, "confirmed"), []);

  const taskReactNode = useMemo(() => {
    return [
      <Exercise1GenerateKeypairs
        key={0}
        keypair={keypair}
        setKeypair={setKeypair}
      />,
      <Exercise2Airdropping
        key={1}
        keypair={keypair}
        connection={connection}
      />,
      <Exercise3GettingBalance
        key={2}
        keypair={keypair}
        connection={connection}
      />,
      <Exercise4ReadingRealtimeBlocks
        key={3}
        keypair={keypair}
        connection={connection}
      />,
      <Exercise5SendingTokens
        key={4}
        keypair={keypair}
        connection={connection}
      />,
    ];
  }, [connection, keypair, setKeypair]);

  return (
    <main
      className={`flex max-w-screen overflow-x-hidden min-h-screen flex-col items-center justify-center p-4 lg:p-24 ${inter.className}`}
    >
      <Header />

      <div className="flex-1">
        <div className="border rounded-lg p-2 bg-slate-400 flex items-center space-x-3 mt-5">
          <button
            disabled={task === 0}
            onClick={() => {
              setTask((task) => task - 1);
            }}
            className="backdrop-blur-2xl rounded-xl px-4 py-2 bg-green-500 disabled:opacity-60"
          >
            Prev task
          </button>
          <span className="flex-1 text-center ">{tasks[task]}</span>
          <button
            disabled={task === tasks.length - 1}
            onClick={() => {
              setTask((task) => task + 1);
            }}
            className="backdrop-blur-2xl rounded-xl px-4 py-2 bg-green-500 disabled:opacity-60"
          >
            Next task
          </button>
        </div>

        <div className="mt-8 flex flex-col justify-center w-full max-w-2xl">
          {taskReactNode[task]}
        </div>
      </div>
    </main>
  );
}

export default dynamic(() => Promise.resolve(Home), { ssr: false });
