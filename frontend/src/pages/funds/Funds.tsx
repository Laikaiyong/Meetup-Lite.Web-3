import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { walletOutline, walletSharp } from 'ionicons/icons';

import { WalletAdapterNetwork, WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider, useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Button } from '@solana/wallet-adapter-react-ui/lib/types/Button';

import {
    CloverWalletAdapter,
    LedgerWalletAdapter,
    PhantomWalletAdapter,
    SolflareWalletAdapter,
    TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import fs from "fs";

import { clusterApiUrl, Transaction, SystemProgram, Keypair, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import React, { FC, ReactNode, useMemo, useCallback, useState } from 'react';

import { actions, utils, programs, NodeWallet, Connection} from '@metaplex/js'; 
import { Wallet } from '../../components/funds/ConnectWalletContext';


const Funds: React.FC = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

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
      </IonContent>
    </IonPage>
    </Wallet>
  );
};

export default Funds;