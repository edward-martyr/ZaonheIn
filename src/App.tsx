import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Acknowledgement from "./pages/Acknowledgement";
import Voice from "./pages/Voice";
import Orientation from "./pages/Orientation";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import useStateRef from "./scripts/useStateRef";
import { Storage } from "@ionic/storage";

const storage = new Storage();
storage.create();

// (async () => {
//   await storage.clear(); // debug storage
// })();

const App: React.FC = () => {
  const [ifOpened, setIfOpened, ifOpenedRef] = useStateRef(false);
  (async () => {
    let test = await storage.get("ifOpened");
    setIfOpened(!test);
  })();

  if (ifOpened) {
    return (
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/home">
              <Redirect to="/orientation" />
            </Route>
            <Route exact path="/">
              <Redirect to="/orientation" />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/acknowledgement">
              <Acknowledgement />
            </Route>
            <Route exact path="/voice">
              <Voice />
            </Route>
            <Route exact path="/orientation">
              <Orientation />
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    );
  } else {
    return (
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/acknowledgement">
              <Acknowledgement />
            </Route>
            <Route exact path="/voice">
              <Voice />
            </Route>
            <Route exact path="/orientation">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    );
  }
};

export default App;
