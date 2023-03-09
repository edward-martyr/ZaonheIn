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

import useStateRef from "../scripts/useStateRef";
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

// storage.clear(); // debug storage

(async () => {
  let ifOpened = await storage.get("ifOpened");
  if (ifOpened !== "opened") {
    window.location.assign("#/orientation");
  }
})();

const Home: React.FC = () => {
  const ionRouter = useIonRouter();
  document.addEventListener("ionBackButton", () => {
    if (!ionRouter.canGoBack()) {
      App.exitApp();
    }
  });

  const [searchText, setSearchText, searchTextRef] = useStateRef("");
  const [seusohBy, setSeusohBy, seusohByRef] = useStateRef("漢字");
  const [yithiOn, setYithiOn, yithiOnRef] = useStateRef("弗轉換");
  if (searchTextRef.current === "") {
    (async () => {
      let seusohByProto = await storage.get("seusohBy");
      if (seusohByProto) setSeusohBy(seusohByProto);
    })();
    (async () => {
      let yithiOnProto = await storage.get("yithiOn");
      if (yithiOnProto) setYithiOn(yithiOnProto);
    })();
    (async () => {
      (function () {
        setTimeout(function () {
          let searchTextProtoPromise = storage.get("searchText");
          searchTextProtoPromise.then((chi) => {
            setSearchText(chi!);
          });
        }, 100);
      })();
    })();
  }

  const [seusohSieghaon, setSeusohSieghaon, seusohSieghaonRef] = useStateRef([
    <span key=""></span>,
  ]);

  const [搜索方式Clicked, set搜索方式Clicked, 搜索方式ClickedRef] =
    useStateRef(0);

  const [chevron, setChevron, chevronRef] = useStateRef(chevronDownSharp);

  var entries;

  if (searchTextRef.current) {
    if (seusohByRef.current === "漢字") {
      if (yithiOnRef.current === "返回所有異體字") {
        let searchTextVar = searchTextRef.current.split("");
        let searchTextYithi = searchTextVar;
        searchTextVar.forEach(function (part: any, index: any, theArray: any) {
          searchTextYithi = searchTextYithi.concat(Yitizi.get(theArray[index]));
        });
        let newSearchText = searchTextYithi.join("");
        entries = ZyEntry(newSearchText);
      } else if (yithiOnRef.current === "弗轉換") {
        entries = ZyEntry(searchTextRef.current);
      }
    } else {
      if (yithiOnRef.current === "返回所有異體字") {
        let searchTextVar = phinins2zys(searchTextRef.current).split("");
        let searchTextYithi = searchTextVar;
        searchTextVar.forEach(function (part, index, theArray) {
          searchTextYithi = searchTextYithi.concat(Yitizi.get(theArray[index]));
        });
        let newSearchText = searchTextYithi.join("");
        entries = ZyEntry(newSearchText);
      } else if (yithiOnRef.current === "弗轉換") {
        entries = ZyEntry(phinins2zys(searchTextRef.current));
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
        value={seusohByRef.current}
        onIonChange={(e) => {
          setSeusohBy(e.detail.value);
          storage.set("seusohBy", e.detail.value!);
        }}
      >
        <IonSelectOption value="漢字">漢字</IonSelectOption>
        <IonSelectOption value="學堂式吳拼">學堂式吳拼</IonSelectOption>
      </IonSelect>
    </IonItem>,
    //
    <IonItem key="異體" lines="none" class="selectItem">
      <IonLabel>異體</IonLabel>
      <IonSelect
        // class="ripple"
        interface="popover"
        value={yithiOnRef.current}
        onIonChange={(e) => {
          setYithiOn(e.detail.value!);
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
            value={searchTextRef.current}
            onIonChange={(e) => {
              setSearchText(e.detail.value!);
              storage.set("searchText", e.detail.value!);
            }}
            onKeyUp={(e: any) => {
              if (e.key === "Enter") {
                // storage.set("searchText", e.detail.value!);
                // setSearchText(e.target.value!);
                Keyboard.hide(); // not implemented on Web
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
                if (搜索方式ClickedRef.current === 1) {
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
              <IonIcon icon={chevronRef.current} />　
              <span className="tsyseh">
                {seusohByRef.current}・{yithiOnRef.current}
              </span>
            </IonListHeader>
            {seusohSieghaonRef.current}
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
              routerLink="/about"
              translucent={true}
              size="small"
              routerDirection="forward"
            >
              <IonIcon icon={helpOutline} />
            </IonFabButton>
            <IonFabButton
              routerLink="/Acknowledgement"
              translucent={true}
              size="small"
            >
              <IonIcon icon={informationSharp} />
            </IonFabButton>
            <IonFabButton routerLink="/voice" translucent={true} size="small">
              <IonIcon icon={volumeHighOutline} />
            </IonFabButton>
          </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
