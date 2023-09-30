import {
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonText,
  IonTitle,
  IonItem,
  IonGrid,
  IonCol,
  IonRow,
  IonIcon,
  IonButton,
  IonToolbar
} from "@ionic/react";
import React from "react";

import "./Home.css";
import {
  peopleOutline,
  peopleSharp,
  wallet,
  walletOutline,
  walletSharp,
} from "ionicons/icons";

// Events
import { EventProvider } from "../provider/EventProvider";
import { EventModel } from "@/model/Event";

const eventList: EventModel[] = EventProvider.eventList;

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen classname="home-content">
        <IonTitle className="home-page-title" size="large">
          Meetup Lite
        </IonTitle>
        <IonText className="home-description-text">
          Bond together for a better Web3 Space <br />
          <br />
          <br />
        </IonText>

        <IonItem>
          <IonGrid>
            <IonText className="home-section-title">Upcoming Events</IonText>
            <IonRow className="event-row-scroll">
              {eventList.map((event, index) => {
                return (
                  <IonCol className="event-card-item">
                    <IonCard className="event-card-content">
                      <img
                        class={"home-event-img"}
                        alt={"Image " + index}
                        src={event.imageUrl}
                      />
                      <IonCardHeader>
                        <IonCardTitle className="home-event-title">
                          {event.title}
                        </IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent className="event-description-text">
                        {event.description}
                        <IonRow>
                          <IonCol size="1">
                            <IonIcon
                              className="event-description-text"
                              aria-hidden="true"
                              ios={event.dateTime.iosIcon}
                              md={event.dateTime.mdIcon}
                            />
                          </IonCol>
                          <IonCol size="11">
                            <IonText>{event.dateTime.text}</IonText>
                          </IonCol>
                        </IonRow>
                        <IonRow>
                          <IonCol size="1">
                            <IonIcon
                              className="event-description-text"
                              aria-hidden="true"
                              ios={event.allocatedFunds.iosIcon}
                              md={event.allocatedFunds.mdIcon}
                            />
                          </IonCol>
                          <IonCol size="11">
                            <IonText>{event.allocatedFunds.text}</IonText>
                          </IonCol>
                        </IonRow>
                      </IonCardContent>
                      <IonButton
                        style={{
                          alignItem: "bottom",
                          color: "black",
                          padding: "12px",
                        }}
                        expand="block"
                        shape="round"
                        fill="solid"
                        routerLink={"/events/" + event.id}>
                        View Event
                      </IonButton>
                    </IonCard>
                  </IonCol>
                );
              })}
            </IonRow>
          </IonGrid>
        </IonItem>

        <IonItem>
          <IonGrid>
            <IonCard className="home-stats">
              <IonCardHeader>
                <IonCardTitle>Meetup Lite Stats</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonRow>
                  <IonCol className="stats-col">
                    <IonText className="stats-num">
                      1,847 <br />
                    </IonText>
                    <IonText>
                      Visitor Count <br />
                    </IonText>
                    <IonText>Since 30 September 2023</IonText>
                  </IonCol>
                  <IonCol>
                    <IonText className="stats-num">
                      $ 4,593
                      <br />
                    </IonText>
                    <IonText>
                      Total Funds Collected <br />
                    </IonText>
                    <IonText>Since 30 September 2023</IonText>
                  </IonCol>
                  <IonCol>
                    <IonText className="stats-num">
                      2,376
                      <br />
                    </IonText>
                    <IonText>
                      Page View Count <br />
                    </IonText>
                    <IonText>Since 30 September 2023</IonText>
                  </IonCol>
                </IonRow>
              </IonCardContent>
            </IonCard>
          </IonGrid>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Home;
