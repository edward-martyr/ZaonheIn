import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
} from "@ionic/react";
import { Keyboard } from "@capacitor/keyboard";
import ZyEntry from "../components/ZyEntry";
import { SeusohFaonseh } from "../components/SeusohFaonseh";
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
        <IonToolbar>
          <IonTitle className="title">上海音</IonTitle>
        </IonToolbar>
        <IonToolbar className="searchbar-toolbar">
          <IonSearchbar
            className="searchbar-input"
            value={searchText}
            onKeyUp={(e: any) => {
              if (e.key === "Enter") {
                setSearchText(e.target.value!);
                // Keyboard.hide(); // not implemented on Web
              }
            }}
            showCancelButton="never"
            placeholder="今朝想搜眼啥字呢？"
            animated
          ></IonSearchbar>
        </IonToolbar>
        <SeusohFaonseh />
      </IonHeader>
      <IonContent fullscreen class="ion-padding">
        {entries}
      </IonContent>
    </IonPage>
  );
};

export default Home;
