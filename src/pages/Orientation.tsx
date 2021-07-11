import {
  IonContent,
  IonPage,
  IonButton,
  IonItem,
  IonSelectOption,
  IonLabel,
  IonSelect,
  IonList,
  IonAvatar,
  IonIcon,
  IonCheckbox,
} from "@ionic/react";
import "./Page.css";

import {} from "ionicons/icons";

import useStateRef from "../scripts/useStateRef";
import { Storage } from "@ionic/storage";

import {
  helpOutline,
  volumeHighOutline,
  informationSharp,
} from "ionicons/icons";

import { phinin2PlayAudio } from "../scripts/process_wugniu_zaonhe.js";

const storage = new Storage();
storage.create();
storage.set("ifOpened", "opened");

const Orientation: React.FC = () => {
  const [checked, setChecked, checkedRef] = useStateRef(false);

  return (
    <IonPage>
      <IonContent fullscreen class="ion-padding">
        <h1>歡迎使用「上海音」！</h1>
        <p>
          <ruby>
            在<rt>lɐʔ</rt>
          </ruby>
          本 App
          裏向，儂／𡢿（下稱「儂」）可以使用多種實用個功能，挨下來我來幫儂一一介紹。
        </p>

        <h1>首頁</h1>
        <p>
          <ruby>
            在<rt>lɐʔ</rt>
          </ruby>
          <ruby>
            墶<rt>lɐʔ</rt>
          </ruby>
          首頁，儂可以在搜索框裏向輸入搜索內容，再通過搜索選項個配置來獲取字條。
        </p>
        <p>
          下頭是儂可以配置個搜索選項，點點試試看伐。渠拉在儂退出「上海音」之後會得畀保存，下趟打開應用自動加載。
        </p>
        <span className="example">
          <IonList>
            <IonItem key="seusohBy" lines="inset" class="selectItem">
              <IonLabel>搜索方式</IonLabel>
              <IonSelect interface="popover" value="漢字">
                <IonSelectOption value="漢字">漢字</IonSelectOption>
                <IonSelectOption value="學堂式吳拼">學堂式吳拼</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem key="異體" lines="none" class="selectItem">
              <IonLabel>異體</IonLabel>
              <IonSelect interface="popover" value="弗轉換">
                <IonSelectOption value="弗轉換">弗轉換</IonSelectOption>
                <IonSelectOption value="返回所有異體字">
                  返回所有異體字
                </IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonList>
        </span>
        <p>
          下頭是返回字條個一隻實例。<span className="bf">學堂</span>個 IPA
          搭仔拼音儕是可以點擊個𡂿！現在就點擊試試看伐。
        </p>
        <IonItem class="container item md in-list ion-focusable hydrated">
          <IonAvatar class="zydeu md hydrated">上</IonAvatar>
          <IonList
            lines="none"
            class="md list-md list-lines-none list-md-lines-none hydrated"
          >
            <IonItem class="item md in-list ion-focusable hydrated">
              <IonItem class="zytieFaewe item md in-list ion-focusable hydrated item-label">
                <span className="lenyoe">推導</span>
                <IonLabel
                  text-wrap="true"
                  class="dictResults sc-IonLabel-md-h sc-IonLabel-md-s md hydrated"
                >
                  <span>/zɑ̃²³/</span>
                  <span className="kaseh">
                    常開三陽上・時掌切・登也升也時掌切又音尚二
                  </span>
                  <span>/zɑ̃²³/</span>
                  <span className="kaseh">
                    常開三陽去・時亮切・君也猶天子也又時兩切
                  </span>
                </IonLabel>
              </IonItem>
            </IonItem>
            <IonItem class="item md in-list ion-focusable hydrated">
              <IonItem class="zytieFaewe item md in-list ion-focusable hydrated item-label">
                <span className="lenyoe">學堂</span>
                <IonLabel
                  text-wrap="true"
                  class="dictResults sc-IonLabel-md-h sc-IonLabel-md-s md hydrated"
                >
                  <span
                    className="wugniuEntry"
                    onClick={(e) => phinin2PlayAudio("zaon6")}
                  >
                    /zɑ̃¹¹³/　zaon6<sub></sub>
                    <span className="yithi"></span>
                    <br />
                  </span>
                </IonLabel>
              </IonItem>
            </IonItem>
          </IonList>
        </IonItem>
        <p>在首頁個右下角，可以點圓圈來打開菜單，進入到其他頁面。</p>

        <h1>語音</h1>
        <p>
          語音頁面在菜單裏向個標識是 <IonIcon src={volumeHighOutline} />
          。在該頁面，儂可以讓程序按照吳語學堂個語音數據依次讀出搜索框中個漢字⸺用單字調。針對多音字，儂也可以揀適合語境個伊隻讀音。
        </p>
        <p>
          多音字個讀音選擇弗會得畀保存，因爲一個字在同一句閑話裏向好有幾種讀音。
        </p>

        <h1>資料</h1>
        <p>
          資料頁面在菜單裏向個標識是 <IonIcon src={informationSharp} />
          。該頁面列舉了本 App 個資料來源。
        </p>

        <h1>關於上海音</h1>
        <p>
          關於上海音在菜單裏向個標識是 <IonIcon src={helpOutline} />
          。該頁面介紹了 App 個基本使用方式搭仔需要注意個事體、一眼已知個問題。
        </p>

        <IonItem lines="none">
          <IonAvatar>
            <IonCheckbox
              checked={checked}
              onIonChange={(e) => setChecked(e.detail.checked)}
            />
          </IonAvatar>
          <span className="checkLabel">
            我同意弗去在本 App 之外隨意使用本 App 個非開源資料（吳語學堂音頻）。
          </span>
        </IonItem>

        <IonButton expand="full" href="/" disabled={!checked}>
          開始使用
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Orientation;
