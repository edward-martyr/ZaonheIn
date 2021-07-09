import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonRadioGroup,
  IonRadio,
  IonItem,
  IonLabel,
  IonListHeader,
  IonList,
  IonIcon,
} from "@ionic/react";
import { Keyboard } from "@capacitor/keyboard";
import ZyEntry from "../components/ZyEntry";
// import { SeusohFaonseh } from "../components/SeusohFaonseh";
import "./Page.css";

import { useState } from "react";

import "../components/Accordian.css";
import { chevronDownSharp, chevronUpSharp } from "ionicons/icons";

import { phinins2zys } from "../scripts/process_wugniu_zaonhe";

const Yitizi = require("yitizi");

const Home: React.FC = () => {
  const [searchText, setSearchText] = useState("");

  const [seusohSieghaon, setSeusohSieghaon] = useState([<span key=""></span>]);

  const [搜索方式Clicked, set搜索方式Clicked] = useState(0);

  const [chevron, setChevron] = useState(chevronDownSharp);

  const [seusohBy, setSeusohBy] = useState("byZy");

  const [yithiOn, setYithiOn] = useState("弗轉換");

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

        <IonToolbar class="accordianList">
          <IonList>
            <IonListHeader
              class="accordianTitle"
              onMouseUp={(e: any) => {
                if (搜索方式Clicked === 1) {
                  setSeusohSieghaon([<span key=""></span>]);
                  set搜索方式Clicked(0);
                  setChevron(chevronDownSharp);
                } else {
                  setSeusohSieghaon([
                    <IonRadioGroup value={seusohBy} key="seusohBy">
                      <IonListHeader class="accordianSubTitle">搜索方式</IonListHeader>
                      <IonItem
                        hidden={false}
                        onMouseUp={(e: any) => {
                          setSeusohBy("byZy");
                        }}
                      >
                        <IonLabel>漢字</IonLabel>
                        <IonRadio value="byZy" />
                      </IonItem>
                      <IonItem
                        hidden={false}
                        onMouseUp={(e: any) => {
                          setSeusohBy("byPhinin");
                        }}
                      >
                        <IonLabel>
                          吳拼
                          <span className="tsyseh">
                            （用空格分隔，區分聲調）
                          </span>
                        </IonLabel>
                        <IonRadio value="byPhinin" />
                      </IonItem>
                    </IonRadioGroup>,
                    //
                    <IonRadioGroup value={yithiOn} key="弗轉換">
                      <IonListHeader class="accordianSubTitle">異體</IonListHeader>
                      <IonItem
                        hidden={false}
                        onMouseUp={(e: any) => {
                          setYithiOn("弗轉換");
                        }}
                      >
                        <IonLabel>弗轉換</IonLabel>
                        <IonRadio value="弗轉換" />
                      </IonItem>
                      <IonItem
                        hidden={false}
                        onMouseUp={(e: any) => {
                          setYithiOn("返回所有異體字");
                        }}
                      >
                        <IonLabel>返回所有異體字</IonLabel>
                        <IonRadio value="返回所有異體字" />
                      </IonItem>
                    </IonRadioGroup>,
                  ]);
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
        {/*  */}
      </IonHeader>
      <IonContent fullscreen class="ion-padding">
        {entries}
      </IonContent>
    </IonPage>
  );
};

export default Home;
