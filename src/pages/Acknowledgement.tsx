import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import "./Page.css";

const Acknowledgement: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="title">資料</IonTitle>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class="ion-padding">
        <h1>公開資料</h1>
        <p>
          <span className="bf">學堂</span>部分來自
          <a href="https://www.wugniu.com/">吳語學堂</a>個「上海閒話」版塊。感謝
          <a href="https://www.zhihu.com/people/PapaFrita">飛德</a>
          對吳語學堂所公開個上海閑話音頻資源個使用許可。
        </p>
        <h1>開源資料</h1>
        <p>
          <span className="bf">推導</span>部分來自我（Nyoeghau）個
          <a href="https://zhuanlan.zhihu.com/p/386456940">
            切韻音系自動推導器・推導上海話
          </a>
          、以及 <a href="https://github.com/nk2028">nk2028</a> 個 qieyun-js。
        </p>
        <p>
          <span className="bf">返回所有異體字</span>功能來自 <a href="https://github.com/nk2028">nk2028</a> 個 yitizi。
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Acknowledgement;
