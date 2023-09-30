import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';

// Pages
import Home from './pages/Home';
import Groups from './pages/groups/Groups';
import GroupDetails from './pages/groups/details/GroupDetails';
import Events from './pages/events/Events';
import EventDetails from './pages/events/details/EventDetails';
import People from './pages/people/People';
import PeopleDetails from './pages/people/details/PeopleDetails';
import Funds from './pages/funds/Funds';
import Profile from './pages/Profile';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true} component={Home} />
            <Route path="/groups" exact={true} component={Groups} />
            <Route exact path="/groups/:id" component={GroupDetails}/>
            <Route path="/events" exact={true} component={Events} />
            <Route path="/events/:id" exact={true} component={EventDetails} />
            <Route path="/people" exact={true} component={People} />
            <Route path="/people/:id" exact={true} component={PeopleDetails} />
            <Route path="/funds" exact={true} component={Funds} />
            <Route path="/profile" exact={true} component={Profile} />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
