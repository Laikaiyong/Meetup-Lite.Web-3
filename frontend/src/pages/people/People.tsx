import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonButton, IonAvatar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { findCommonParticipants } from '../../services/ai-recommendation'; // Import the function
import { PeopleProvider, PeopleModel } from '../../provider/PeopleProvider'; // Import the mock data

const People: React.FC = () => {
  const [similarUsers, setSimilarUsers] = useState<PeopleModel[]>([]); // State to hold similar users

  useEffect(() => {
    const users = findCommonParticipants("user6", PeopleProvider.userList); // Replace "user6" with your actual user ID
    setSimilarUsers(users);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>People | Recommended for you</IonTitle>

        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">People</IonTitle>
            <IonText>Bond together for a better Web3 Space</IonText>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {similarUsers.map((user, index) => {
            return (
              <IonItem key={index}>
                <IonAvatar slot="start">
                  <img src="https://via.placeholder.com/150" alt="Profile" />
                </IonAvatar>
                <IonLabel>
                  <h2>{user.name}</h2>
                  <h3>{user.subtitle}</h3>
                  <p>{user.bio}</p>
                </IonLabel>
                <IonButton fill="outline" routerLink={"/people/" + user.id}>View</IonButton>
              </IonItem>
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default People;
