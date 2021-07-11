import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonList,
  IonAvatar,
  IonItem,
  IonButton,
  IonIcon,
} from "@ionic/react";
import "./Page.css";

import {
  wugniu_zaonhe_getPhinin,
  playAudio,
} from "../scripts/process_wugniu_zaonhe.js";

import { useState } from "react";
import { Storage } from "@ionic/storage";

import { playOutline } from "ionicons/icons";

const storage = new Storage();
storage.create();

const Voice: React.FC = () => {
  const [searchText, setSearchText] = useState("");

  let searchTextSplitted = searchText.split("");
  let tuinzys: string[][] = [];
  for (let zyindex in searchTextSplitted) {
    let phinins_zy: string[] = [];
    let faewes = wugniu_zaonhe_getPhinin(searchTextSplitted[zyindex]);
    for (let index in faewes) {
      phinins_zy[index] = faewes[index][0];
    }
    phinins_zy.push(searchTextSplitted[zyindex]);
    tuinzys[zyindex] = phinins_zy;
  }

  const [dohins, setDohins] = useState([""]);
  function setDohinIndex(index: string, naiyou: string) {
    let tmp = Array.from(dohins);
    tmp[parseInt(index)] = naiyou;
    setDohins(tmp);
  }
  function tuinzyEntry(tuinzys: string[][]) {
    let toReturn = [];
    for (let zyindex in tuinzys) {
      let tuinzy = tuinzys[zyindex];
      let zy = tuinzy.pop();
      let zyghehdohins = [];
      for (let dohin of tuinzy) {
        zyghehdohins.push(
          <IonSegmentButton value={dohin} key={dohin}>
            {dohin}
          </IonSegmentButton>
        );
      }
      // setDohinIndex(zyindex, tuinzy[0]); // too many renders
      toReturn.push(
        <IonItem key={zyindex}>
          <IonAvatar class="selectAvatar">{zy}</IonAvatar>
          <IonSegment
            // value={tuinzy[0]}
            onIonChange={(e) => {
              setDohinIndex(zyindex, e.detail.value!);
              // console.log(dohins);
            }}
            scrollable
            class="dohinSiezeh"
          >
            {zyghehdohins}
          </IonSegment>
        </IonItem>
      );
    }
    return toReturn;
  }

  let audios: HTMLAudioElement[] = [];
  for (let dohin of dohins) {
    let audio = new Audio("assets/audios/" + dohin + ".mp3");
    audios.push(audio);
  }



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="title">語音</IonTitle>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonButtons slot="end">
            <IonButton
              onClick={(e) => {
                let timeOut = 0;
                for (let audioIndex in audios) {
                  (function (timeOut) {
                    setTimeout(function () {
                      playAudio(audios[audioIndex]);
                    }, timeOut * 1000);
                  })(timeOut);
                  timeOut += audios[audioIndex].duration;
                }
              }}
            >
              <IonIcon icon={playOutline} size="large" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonToolbar className="searchbar-toolbar">
          <IonSearchbar
            className="searchbar-input"
            value={searchText}
            onIonChange={(e) => {
              setSearchText(e.detail.value!);
              // dohins = [];
            }}
            onKeyUp={(e: any) => {
              if (e.key === "Enter") {
                storage.set("searchText", e.detail.value!);
                // Keyboard.hide(); // not implemented on Web
              }
            }}
            showCancelButton="never"
            placeholder="今朝想讀眼啥字呢？"
            animated
          ></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class="ion-padding">
        <h1>多音字讀音選擇</h1>

        <span id="test">
          <audio src="assets/audios/a1.mp3"></audio>
        </span>

        <IonList>{tuinzyEntry(tuinzys)}</IonList>
        {/*  */}
      </IonContent>
    </IonPage>
  );
};

export default Voice;
