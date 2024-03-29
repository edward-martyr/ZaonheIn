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
import { Keyboard } from "@capacitor/keyboard";

import {
  wugniu_zaonhe_getPhinin,
  playAudio,
} from "../scripts/process_wugniu_zaonhe.js";

import useStateRef from "../scripts/useStateRef";
import { Storage } from "@ionic/storage";

import { playOutline } from "ionicons/icons";

const storage = new Storage();
storage.create();

const Voice: React.FC = () => {
  const [searchText, setSearchText, searchTextRef] = useStateRef("");
  if (searchTextRef.current === "") {
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

  let searchTextSplitted;
  if (searchTextRef.current) {
    searchTextSplitted = searchTextRef.current.split("");
  } else {
    searchTextSplitted = [""];
  }
  let tuinzys: string[][] = [];
  let firstIns: string[] = [];
  for (let zyindex in searchTextSplitted) {
    let phinins_zy: string[] = [];
    let faewes = wugniu_zaonhe_getPhinin(searchTextSplitted[zyindex]);
    try {
      firstIns.push(faewes[0][0]);
    } catch (error) {
      firstIns.push("");
    }
    for (let index in faewes) {
      phinins_zy[index] = faewes[index][0];
    }
    phinins_zy.push(searchTextSplitted[zyindex]);
    tuinzys[parseInt(zyindex)] = phinins_zy;
  }

  const [dohins, setDohins, dohinsRef] = useStateRef(firstIns);
  function setDohinIndex(index: string, naiyou: string) {
    let tmp = Array.from(dohinsRef.current);
    tmp[parseInt(index)] = naiyou;
    setDohins(tmp);
  }
  function tuinzyEntry(tuinzys: string[][]) {
    // [['1']]
    let toReturn = [];
    for (let zyindex in tuinzys) {
      let tuinzy = tuinzys[zyindex];
      let zy = tuinzy.pop();
      let zyghehdohins = [];
      for (let dohinIndex in tuinzy) {
        zyghehdohins.push(
          <IonSegmentButton value={tuinzy[dohinIndex]} key={dohinIndex}>
            {tuinzy[dohinIndex]}
          </IonSegmentButton>
        );
      }
      // setDohinIndex(zyindex, tuinzy[0]); // too many renders
      toReturn.push(
        <IonItem key={zyindex}>
          <IonAvatar class="selectAvatar">{zy}</IonAvatar>
          <IonSegment
            value={dohinsRef.current[zyindex]}
            onIonChange={(e) => {
              setDohinIndex(zyindex, e.detail.value!);
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
  for (let index in firstIns) {
    let audio;
    if (dohinsRef.current[index]) {
      audio = new Audio("assets/audios/" + dohinsRef.current[index] + ".mp3");
    } else {
      audio = new Audio("assets/audios/" + firstIns[index] + ".mp3");
    }
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
                  if (audios[audioIndex].duration) {
                    (function (timeOut) {
                      setTimeout(function () {
                        playAudio(audios[audioIndex]);
                      }, timeOut * 1000);
                    })(timeOut);
                    timeOut += audios[audioIndex].duration;
                  }
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
            value={searchTextRef.current}
            onIonChange={(e) => {
              setSearchText(e.detail.value!);
              setDohins([""]);
              storage.set("searchText", e.detail.value!);
            }}
            onKeyUp={(e: any) => {
              if (e.key === "Enter") {
                // storage.set("searchText", e.detail.value!);
                setDohins([""]);
                Keyboard.hide(); // not implemented on Web
              }
            }}
            showCancelButton="never"
            placeholder="今朝想讀眼啥字呢？"
            animated
          ></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class="ion-padding">
        {/* <h1>多音字讀音選擇</h1> */}
        <IonButton // unable to function with one click
          expand="full"
          onClick={(e) => {
            while (dohinsRef.current !== firstIns) {
              setDohins(firstIns);
            }
          }}
        >
          儕揀排名第一個讀音
        </IonButton>
        {/*  */}
        <IonList>{tuinzyEntry(tuinzys)}</IonList>
        {/*  */}
      </IonContent>
    </IonPage>
  );
};

export default Voice;
