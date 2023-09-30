import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar, IonItem, IonThumbnail, IonLabel, IonGrid, IonCol, IonRow, IonIcon, IonList, IonButton, IonImg, IonListHeader, IonAvatar } from '@ionic/react';
import React from 'react';

import './EventDetails.css';
import { useParams } from 'react-router';
import { EventModel } from '@/model/Event';
import { EventProvider } from '../../../provider/EventProvider';
  
const eventList: EventModel[]  = EventProvider.eventList;

const EventDetails: React.FC = () => {
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
        <IonItem>
            <IonImg
                alt="Event banner"
                src={selectedEvent.imageUrl}
            />
        </IonItem>
        <IonItem routerLink={"/groups/" + selectedEvent.organizer.id}>
          <IonThumbnail slot="start">
            <img src={selectedEvent.organizer.imageUrl} alt="Organizing Group Image" />
          </IonThumbnail>
          <IonLabel>{selectedEvent.organizer.title}</IonLabel>
        </IonItem>
        <IonList>
          <IonListHeader>
            <IonLabel>Event Details</IonLabel>
          </IonListHeader>
            <IonItem>
              <IonLabel>{"Date time: " + selectedEvent.dateTime.text}</IonLabel>
              <IonLabel>{"Allocated budget: " + selectedEvent.allocatedFunds.text}</IonLabel>
            </IonItem>
        </IonList>
        <IonList>
          <IonListHeader>
            <IonLabel>Participants</IonLabel>
          </IonListHeader>
          {selectedEvent.participants.map((member, index) => (
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

export default EventDetails;