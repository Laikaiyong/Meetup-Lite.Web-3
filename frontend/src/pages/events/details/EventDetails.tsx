import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar, IonItem, IonThumbnail, IonLabel, IonGrid, IonCol, IonRow, IonIcon, IonList, IonButton } from '@ionic/react';
import React from 'react';

import './EventDetails.css';
import { GroupProvider } from '../../../provider/GroupProvider';
import { GroupModel } from '@/model/Group';

import { useParams } from 'react-router';
import { EventModel } from '@/model/Event';
import { EventProvider } from '../../../provider/EventProvider';
  
const eventList: EventModel[]  = EventProvider.eventList;



const GroupDetails: React.FC = () => {
  const { id } = useParams<{ id: string; }>();
  const selectedEvent = eventList.filter(event => event.id == (id as unknown as number))[0];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Event | {selectedEvent.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="event-content">
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