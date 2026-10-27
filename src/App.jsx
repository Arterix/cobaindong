import { Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Import halaman Tab1 */
import Tab1 from './pages/Tab1'; 

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

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Store from './pages/store';
import Province from './pages/province';


setupIonicReact();

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        
        <Route path="/" element={<Tab1 />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/home" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/province" element={<Province />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;