import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
} from "@ionic/react";
import ZyEntry from "../components/ZyEntry";
import "./Page.css";

import { useState } from "react";

const Home: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  var entries;
  if (searchText) {
    entries = ZyEntry(searchText);
  } else {
    entries = "";
  }

  return (
    <IonPage>
      <IonHeader>
        {/* <IonToolbar>
          <IonTitle className="title">上海音</IonTitle>
        </IonToolbar> */}
        <IonToolbar className="searchbar-toolbar">
          <IonSearchbar
            className="searchbar-input"
            value={searchText}
            onIonChange={(e) => setSearchText(e.detail.value!)}
            showCancelButton="never"
            placeholder="今朝要搜眼啥字呢？"
            animated
          ></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class="ion-padding">
        {entries}
      </IonContent>
    </IonPage>
  );
};

export default Home;
