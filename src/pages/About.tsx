import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import "./Page.css";

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="title">關於上海音</IonTitle>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class="ion-padding">
        <h1>
          使用
          <ruby>
            貼補士<rt>ＴＩＰＳ</rt>
          </ruby>
        </h1>
        <p>
          點擊<span className="bf">學堂</span>
          項目下頭個拼音或者 IPA，就可以聽着發音𡂿〜
        </p>
        <p>
          選擇<span className="bf">學堂式吳拼</span>
          搜索方式個辰光，可以用空格分開需要同時搜索個幾隻拼音。如果搜索個拼音對應個漢字忒多，根據儂手機個情況可能有卡頓出現。用該選項還需要儂使用吳語學堂式拼音，如果儂沒標明音調就會得返回所有聲調個結果。聲調用數字對應八調，箇能標就來事哉：
          <IonGrid>
            <IonRow>
              <IonCol>陰平　１</IonCol>
            </IonRow>
            <IonRow>
              <IonCol>陰去　５</IonCol>
            </IonRow>
            <IonRow>
              <IonCol>陽去　６</IonCol>
            </IonRow>
            <IonRow>
              <IonCol>陰入　７</IonCol>
            </IonRow>
            <IonRow>
              <IonCol>陽入　８</IonCol>
            </IonRow>
          </IonGrid>
        </p>
        <h1>ＦＡＱｓ</h1>
        <p>
          <span className="bf">學堂</span>
          部分個 IPA 方案搭<span className="bf">推導</span>
          部分個弗一樣，外加有個別音節搭實際語音有眼搭弗上？⸺對個。
          <span className="bf">學堂</span>部分是基本按照吳語學堂個 IPA
          方案，僅僅是拿弗標準個字母轉成功標準 IPA
          字母了，並嘸沒改成功更加表音個方案。
        </p>
        <p>
          <span className="bf">學堂</span>
          部分有一些音頻播放弗出？⸺是個。因爲吳語學堂並嘸沒提供字典裏向每一個音個音頻文件。
        </p>
      </IonContent>
    </IonPage>
  );
};

export default About;
