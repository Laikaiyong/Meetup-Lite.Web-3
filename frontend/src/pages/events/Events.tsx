import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar, IonItem, IonThumbnail, IonLabel, IonGrid, IonCol, IonRow, IonIcon, IonList, IonButton } from '@ionic/react';
import React from 'react';

import './Events.css';
import { calendarOutline, calendarSharp, wallet, walletOutline, walletSharp } from 'ionicons/icons';
import { EventModel } from '@/model/Event';
import { EventProvider } from '../../provider/EventProvider';
  
const events: EventModel[]  = EventProvider.eventList;


const Events: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Events</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen className="event-content">
        <IonTitle className="event-page-title" size="large">Explore the events below</IonTitle>
        <IonText className="event-description-text">Join the events that interest you</IonText>

        <IonList>
        {events.map((event, index) => {
            return (
                <IonItem key={event.id}>
                <IonThumbnail slot="start">
                  <img alt={"Image " + index} src={event.imageUrl}/>
                </IonThumbnail>
                <IonLabel>
                  <IonGrid>
                    <IonRow>
                      <IonCol size="12">
                        <IonTitle size="medium">{event.title}</IonTitle>
                        <IonText className="event-description-text">{event.organizer.title}</IonText>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="1">
                        <IonIcon  className="event-description-text" aria-hidden="true" ios={event.dateTime.iosIcon} md={event.dateTime.mdIcon} />
                      </IonCol>
                      <IonCol size="11">
                        <IonText>{event.dateTime.text}</IonText>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="1">
                        <IonIcon  className="event-description-text" aria-hidden="true" ios={event.allocatedFunds.iosIcon} md={event.allocatedFunds.mdIcon} />
                      </IonCol>
                      <IonCol size="11">
                      <IonText>{event.allocatedFunds.text}</IonText>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonLabel>
                <IonButton fill="outline" routerLink={"/events/" + event.id}>View</IonButton>
              </IonItem>
            );
          })}
      </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Events;
  