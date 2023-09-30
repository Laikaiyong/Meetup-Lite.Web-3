import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar, IonItem, IonThumbnail, IonLabel, IonGrid, IonCol, IonRow, IonIcon, IonList, IonButton } from '@ionic/react';
import React from 'react';

import './PeopleDetails.css';
import { PeopleProvider } from '../../../provider/PeopleProvider';
import { PeopleModel } from '@/model/People';

import { useParams } from 'react-router';
import { EventModel } from '@/model/Event';
import { EventProvider } from '../../../provider/EventProvider';
  
const eventList: EventModel[]  = EventProvider.eventList;

const PeopleDetails: React.FC = () => {
  const { id } = useParams<{ id: string; }>();
  const selectedEvent = eventList.filter(event => event.id == (id as unknown as number))[0];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>People | {selectedEvent.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen className="group-content">
        <IonHeader collapse="condense">
            <IonTitle size="large">Explore the groups below</IonTitle>
            <IonText>Join the groups with your interest</IonText>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default PeopleDetails;