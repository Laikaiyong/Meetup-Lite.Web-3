import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import {
  bookmarkOutline,
  peopleOutline,
  homeOutline,
  homeSharp,
  peopleSharp,
  apertureOutline,
  apertureSharp,
  logoBitcoin,
  personCircleOutline,
  personCircleSharp,
  globeOutline,
  globeSharp
} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Groups',
    url: '/groups',
    iosIcon: peopleOutline,
    mdIcon: peopleSharp
  },
  {
    title: 'Events',
    url: '/events',
    iosIcon: globeOutline,
    mdIcon: globeSharp
  },
  {
    title: 'People',
    url: '/people',
    iosIcon: apertureOutline,
    mdIcon: apertureSharp
  },
  {
    title: 'Funds',
    url: '/funds',
    iosIcon: logoBitcoin,
    mdIcon: logoBitcoin
  },
  {
    title: 'Profile',
    url: '/profile',
    iosIcon: personCircleOutline,
    mdIcon: personCircleSharp
  },
];

const labels = ['Favorites'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Meetup Lite</IonListHeader>
          <IonNote>Web 3 Gathers & 'Fun'd</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Pin</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon aria-hidden="true" slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
