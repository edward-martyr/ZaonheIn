import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonSearchbar,
  IonItem,
  IonLabel,
  IonListHeader,
  IonList,
  IonIcon,
  IonSelect,
  IonSelectOption,
  IonFab,
  IonFabButton,
  IonFabList,
} from "@ionic/react";
import { Keyboard } from "@capacitor/keyboard";
import ZyEntry from "../components/ZyEntry";
import "./Page.css";

import { useState } from "react";
import { Storage } from "@ionic/storage";

import "../components/Accordian.css";
import {
  chevronDownSharp,
  chevronUpSharp,
  chevronBackOutline,
  helpOutline,
  volumeHighOutline,
  informationSharp,
} from "ionicons/icons";

import { phinins2zys } from "../scripts/process_wugniu_zaonhe.js";

import { useIonRouter } from "@ionic/react";
import { Plugins } from "@capacitor/core";
const { App } = Plugins;

const Yitizi = require("yitizi");

const storage = new Storage();
storage.create();

// (async () => {
//   await storage.clear(); // debug storage
// })();

const Home: React.FC = () => {
  const ionRouter = useIonRouter();
  document.addEventListener("backButton", () => {
    if (!ionRouter.canGoBack()) {
      App.exitApp();
    }
  });

  const [searchText, setSearchText] = useState("");
  const [seusohBy, setSeusohBy] = useState("byZy");
  const [yithiOn, setYithiOn] = useState("弗轉換");
  if (searchText === "") {
    (async () => {
      let seusohByProto = await storage.get("seusohBy");
      if (seusohByProto) setSeusohBy(seusohByProto);
    })();
    (async () => {
      let yithiOnProto = await storage.get("yithiOn");
      if (yithiOnProto) setYithiOn(yithiOnProto);
    })();
    (async () => {
      let searchTextProto = await storage.get("searchText");
      if (searchTextProto) setSearchText(searchTextProto);
    })();
  }

  const [seusohSieghaon, setSeusohSieghaon] = useState([<span key=""></span>]);

  const [搜索方式Clicked, set搜索方式Clicked] = useState(0);

  const [chevron, setChevron] = useState(chevronDownSharp);

  var entries;

  if (searchText) {
    if (seusohBy === "byZy") {
      if (yithiOn === "返回所有異體字") {
        let searchTextVar = searchText.split("");
        let searchTextYithi = searchTextVar;
        searchTextVar.forEach(function (part, index, theArray) {
          searchTextYithi = searchTextYithi.concat(Yitizi.get(theArray[index]));
        });
        let newSearchText = searchTextYithi.join("");
        entries = ZyEntry(newSearchText);
      } else if (yithiOn === "弗轉換") {
        entries = ZyEntry(searchText);
      }
    } else {
      if (yithiOn === "返回所有異體字") {
        let searchTextVar = phinins2zys(searchText).split("");
        let searchTextYithi = searchTextVar;
        searchTextVar.forEach(function (part, index, theArray) {
          searchTextYithi = searchTextYithi.concat(Yitizi.get(theArray[index]));
        });
        let newSearchText = searchTextYithi.join("");
        entries = ZyEntry(newSearchText);
      } else if (yithiOn === "弗轉換") {
        entries = ZyEntry(phinins2zys(searchText));
      }
    }
  } else {
    // entries = <IonImg src={"assets/bg.png"} />;
  }

  const sieghaonWhenShown = [
    <IonItem key="seusohBy" lines="inset" class="selectItem">
      <IonLabel>搜索方式</IonLabel>
      <IonSelect
        // class="ripple"
        interface="popover"
        value={seusohBy}
        onIonChange={(e) => {
          setSeusohBy(e.detail.value);
          storage.set("seusohBy", e.detail.value!);
        }}
      >
        <IonSelectOption value="byZy">漢字</IonSelectOption>
        <IonSelectOption value="byPhinin">學堂式吳拼</IonSelectOption>
      </IonSelect>
    </IonItem>,
    //
    <IonItem key="異體" lines="none" class="selectItem">
      <IonLabel>異體</IonLabel>
      <IonSelect
        // class="ripple"
        interface="popover"
        value={yithiOn}
        onIonChange={(e) => {
          setYithiOn(e.detail.value!)
          storage.set("yithiOn", e.detail.value!);
        }}
      >
        <IonSelectOption value="弗轉換">弗轉換</IonSelectOption>
        <IonSelectOption value="返回所有異體字">返回所有異體字</IonSelectOption>
      </IonSelect>
    </IonItem>,
  ];

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
            onIonChange={(e) => {
              setSearchText(e.detail.value!);
              storage.set("searchText", e.detail.value!);
            }}
            onKeyUp={(e: any) => {
              if (e.key === "Enter") {
                // setSearchText(e.target.value!);
                // Keyboard.hide(); // not implemented on Web
              }
            }}
            showCancelButton="never"
            placeholder="今朝想搜眼啥字呢？"
            animated
          ></IonSearchbar>
        </IonToolbar>

        <IonToolbar class="accordianList">
          <IonList>
            <IonListHeader
              class="ripple"
              onMouseUp={(e: any) => {
                if (搜索方式Clicked === 1) {
                  setSeusohSieghaon([<span key=""></span>]);
                  set搜索方式Clicked(0);
                  setChevron(chevronDownSharp);
                } else {
                  setSeusohSieghaon(sieghaonWhenShown);
                  set搜索方式Clicked(1);
                  setChevron(chevronUpSharp);
                }
              }}
            >
              選項　
              <IonIcon icon={chevron} />
            </IonListHeader>
            {seusohSieghaon}
          </IonList>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class="ion-padding">
        {entries}
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton translucent={true} size="small">
            <IonIcon icon={chevronBackOutline} />
          </IonFabButton>
          <IonFabList side="start">
            <IonFabButton
              href="/about"
              translucent={true}
              size="small"
              routerDirection="forward"
            >
              <IonIcon icon={helpOutline} />
            </IonFabButton>
            <IonFabButton
              href="/Acknowledgement"
              translucent={true}
              size="small"
            >
              <IonIcon icon={informationSharp} />
            </IonFabButton>
            <IonFabButton href="/about" translucent={true} size="small">
              <IonIcon icon={volumeHighOutline} />
            </IonFabButton>
          </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
