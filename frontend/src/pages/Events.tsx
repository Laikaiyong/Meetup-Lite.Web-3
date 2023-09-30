import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar, IonItem, IonThumbnail, IonLabel, IonGrid, IonCol, IonRow, IonIcon, IonList, IonButton } from '@ionic/react';
import React from 'react';

import './Events.css';
import { peopleOutline, peopleSharp, wallet, walletOutline, walletSharp } from 'ionicons/icons';
import { EventProvider } from '@/provider/EventProvider';

const eventList = EventProvider.eventList;

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
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Explore the events below</IonTitle>
            <IonText>Join the events that interest you</IonText>
          </IonToolbar>
        </IonHeader>

        <IonList>
        {eventList.map((event, index) => {
            retur routerLink={"/groups/" + event.id}n (
                <IonItem key={event.id}>
                <IonThumbnail slot="start">
                  <img alt={"Image " + index} src={event.imageUrl}/>
                </IonThumbnail>
                <IonLabel>
                  <IonGrid>
                    <IonRow>
                      <IonCol size="12">
                        <IonTitle size="medium">{event.title}</IonTitle>
                        <IonText>{event.description}</IonText>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="1">
                        <IonIcon aria-hidden="true" ios={event.date.iosIcon} md={event.date.mdIcon} />
                      </IonCol>
                      <IonCol size="11">
                        <IonText>{event.date.text}</IonText>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="1">
                        <IonIcon aria-hidden="true" ios={event.funds.iosIcon} md={event.funds.mdIcon} />
                      </IonCol>
                      <IonCol size="11">
                      <IonText>{event.funds.text}</IonText>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonLabel>
                <IonButton fill="outline">View</IonButton>
              </IonItem>
            );
          })}
      </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Events;