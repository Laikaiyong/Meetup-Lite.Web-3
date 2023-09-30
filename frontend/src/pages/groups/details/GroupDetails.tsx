import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar, IonItem, IonThumbnail, IonLabel, IonGrid, IonCol, IonRow, IonIcon, IonList, IonListHeader, IonAvatar, IonSelect, IonSelectOption } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { GroupProvider } from '../../../provider/GroupProvider';
import { GroupModel } from '@/model/Group';

const groupList: GroupModel[] = GroupProvider.groupList;

const GroupDetails: React.FC = () => {
  const { id } = useParams<{ id: string; }>();
  const selectedGroup = groupList.filter(group => group.id == (id as unknown as number))[0];
  const [convertedAmount, setConvertedAmount] = useState<string | null>(null);
const [selectedCurrency, setSelectedCurrency] = useState<'USDC' | 'ETH' | 'MATIC'>('USDC');

  const pastEvents = [
    { name: "Hackathon 2022", date: "2022-05-20" },
    { name: "Blockchain Webinar", date: "2022-03-15" },
  ];

  const members = [
    { name: "Alice" },
    { name: "Bob" },
  ];

  const currencyDetails = {
    'USDC': { mint: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v', decimals: 6 },
    'ETH': { mint: '2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk', decimals: 18 },
    'MATIC': { mint: 'Gz7VkD4MacbEB6yC5XD3HcumEiYx2EtDYYrfikGsvopG', decimals: 18 }
  };

  useEffect(() => {
    const inputMint = 'So11111111111111111111111111111111111111112';
    const outputMint = currencyDetails[selectedCurrency as keyof typeof currencyDetails].mint;
    const outputDecimals = currencyDetails[selectedCurrency as keyof typeof currencyDetails].decimals;



    const fundsArray = selectedGroup.funds.text.split(" ");
    const amountHumanReadable = parseFloat(fundsArray[0]);
    const amountInSmallestUnit = amountHumanReadable * Math.pow(10, 9);
    const slippageBps = 1;

    const fetchConversionRate = async () => {
      const url = `https://quote-api.jup.ag/v6/quote?inputMint=${inputMint}&outputMint=${outputMint}&amount=${amountInSmallestUnit}&slippageBps=${slippageBps}`;
      const response = await fetch(url);
      const data = await response.json();


      const amountInHumanReadable = (data.outAmount / Math.pow(10, outputDecimals)).toString();
setConvertedAmount(amountInHumanReadable);
    };

    fetchConversionRate();
  }, [selectedGroup, selectedCurrency]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Group | {selectedGroup.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="group-content">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{selectedGroup.title}</IonTitle>
            <IonText>{selectedGroup.description}</IonText>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <IonThumbnail slot="start">
            <img src={selectedGroup.imageUrl} alt="Group Image" />
          </IonThumbnail>
          <IonLabel>About This Group</IonLabel>
        </IonItem>
        <IonList>
          <IonItem>
            <IonLabel>{selectedGroup.description}</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Currency</IonLabel>
            <IonSelect value={selectedCurrency} placeholder="Select Currency" onIonChange={e => setSelectedCurrency(e.detail.value)}>
              <IonSelectOption value="USDC">USDC</IonSelectOption>
              <IonSelectOption value="ETH">ETH</IonSelectOption>
              <IonSelectOption value="MATIC">MATIC</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>{selectedGroup.funds.text} = {convertedAmount} {selectedCurrency}</IonLabel>
          </IonItem>
        </IonList>
        <IonList>
          <IonListHeader>
            <IonLabel>Past Events</IonLabel>
          </IonListHeader>
          {pastEvents.map((event, index) => (
            <IonItem key={index}>
              <IonLabel>{event.name}</IonLabel>
              <IonLabel slot="end">{event.date}</IonLabel>
            </IonItem>
          ))}
        </IonList>
        <IonList>
          <IonListHeader>
            <IonLabel>Members</IonLabel>
          </IonListHeader>
          {members.map((member, index) => (
            <IonItem key={index}>
              <IonAvatar slot="start">
                <img src="https://via.placeholder.com/64" alt="Member" />
              </IonAvatar>
              <IonLabel>{member.name}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default GroupDetails;
