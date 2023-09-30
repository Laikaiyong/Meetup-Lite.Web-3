import { IonAvatar, IonButtons, IonButton, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonTextarea, IonToggle } from '@ionic/react';
import React, { useState } from 'react';
import './Profile.css';

const Profile: React.FC = () => {
  const [name, setName] = useState("Your Name");
  const [subtitle, setSubtitle] = useState("Web3 Enthusiast");
  const [bio, setBio] = useState("This is a short bio.");
  const [interests, setInterests] = useState("Web3, NFT, Crypto, Art");
  const [joinedGroups, setJoinedGroups] = useState("NFT, Crypto");
  const [eventHistory, setEventHistory] = useState([
    { name: "CryptoCon 2021", asset: "NFT Ticket" },
    { name: "Web3 Summit", asset: "Badge" },
  ]);
  const [privacy, setPrivacy] = useState(true);
  const [notifications, setNotifications] = useState(true);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen className="profile-content">
        <IonCard className="profile-card">
          <IonCardHeader>
            <IonAvatar className="profile-avatar">
              <img src="https://via.placeholder.com/150" alt="Profile" />
            </IonAvatar>
          <IonItem>
              <IonLabel position="stacked">Name</IonLabel>
              <IonInput value={name} onIonChange={e => setName(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Subtitle</IonLabel>
              <IonInput value={subtitle} onIonChange={e => setSubtitle(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Bio</IonLabel>
              <IonTextarea value={bio} onIonChange={e => setBio(e.detail.value!)}></IonTextarea>
            </IonItem>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonLabel position="stacked">Interests</IonLabel>
              <IonInput value={interests} onIonChange={e => setInterests(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Joined Groups</IonLabel>
              <IonInput value={joinedGroups} onIonChange={e => setJoinedGroups(e.detail.value!)}></IonInput>
            </IonItem>
            <IonList>
              <IonListHeader>
                <IonLabel>Event History</IonLabel>
              </IonListHeader>
              {eventHistory.map((event, index) => (
                <IonItem key={index}>
                  <IonLabel>{event.name}</IonLabel>
                  <IonLabel slot="end">{event.asset}</IonLabel>
                </IonItem>
              ))}
            </IonList>
          </IonCardContent>
        </IonCard>
        <IonCard className="profile-card">
          <IonCardHeader>
            <IonTitle>Settings</IonTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonLabel>Privacy</IonLabel>
              <IonToggle slot="end" checked={privacy} onIonChange={e => setPrivacy(e.detail.checked)} />
            </IonItem>
            <IonItem>
              <IonLabel>Notifications</IonLabel>
              <IonToggle slot="end" checked={notifications} onIonChange={e => setNotifications(e.detail.checked)} />
            </IonItem>
            <IonItem>
              <IonButton expand="block">Account Settings</IonButton>
            </IonItem>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
