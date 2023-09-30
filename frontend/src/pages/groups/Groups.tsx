import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar, IonItem, IonThumbnail, IonLabel, IonGrid, IonCol, IonRow, IonIcon, IonList, IonButton } from '@ionic/react';
import React from 'react';

import './Groups.css';
import { peopleOutline, peopleSharp, wallet, walletOutline, walletSharp } from 'ionicons/icons';
import { GroupProvider } from '../../provider/GroupProvider';
import { GroupModel } from '@/model/Group';
  
const groupList: GroupModel[]  = GroupProvider.groupList;

const Groups: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Groups</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen className="group-content">
          <IonTitle className="group-page-title" size="large">Explore the groups below</IonTitle>
          <IonText className="group-description-text">Join the groups with your interest</IonText>

        <IonList>
        {groupList.map((group, index) => {
            return (
                <IonItem>
                <IonThumbnail slot="start">
                  <img alt={"Image " + index} src={group.imageUrl}/>
                </IonThumbnail>
                <IonLabel>
                  <IonGrid>
                    <IonRow>
                      <IonCol size="12">
                        <IonTitle size="medium">{group.title}</IonTitle>
                        <IonText className="group-description-text">{group.description}</IonText>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="1">
                        <IonIcon className="group-description-text" aria-hidden="true" ios={group.members.iosIcon} md={group.members.mdIcon} />
                      </IonCol>
                      <IonCol size="11">
                        <IonText>{group.members.text}</IonText>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="1">
                        <IonIcon className="group-description-text" aria-hidden="true" ios={group.funds.iosIcon} md={group.funds.mdIcon} />
                      </IonCol>
                      <IonCol size="11">
                      <IonText>{group.funds.text}</IonText>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonLabel>
                <IonButton fill="outline" routerLink={"/groups/" + group.id}>View</IonButton>
              </IonItem>
            );
          })}
      </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Groups;