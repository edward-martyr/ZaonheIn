import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonFab,
  IonFabButton,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import "./Page.css";
import { homeOutline } from "ionicons/icons";

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="title">關於上海音</IonTitle>
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
          項目下頭個拼音或者ＩＰＡ，就可以聽着發音𡂿〜
        </p>
        <p>
          選擇<span className="bf">學堂式吳拼</span>
          搜索方式個辰光，可以用空格分開需要同時搜索個幾隻拼音。如果搜索個拼音對應個漢字忒多，根據儂手機個情況可能有卡頓出現。用該選項還需要儂使用區分聲調個吳語學堂式拼音。聲調用數字對應八調，箇能標就來事哉：
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
        <h1>資料來源</h1>
        <p>
          <span className="bf">推導</span>部分來自我（Nyoeghau）個
          <a href="https://zhuanlan.zhihu.com/p/386456940">
            切韻音系自動推導器・推導上海話
          </a>
          。
        </p>
        <p>
          <span className="bf">學堂</span>部分來自
          <a href="https://www.wugniu.com/">吳語學堂</a>個「上海閒話」版塊。感謝
          <a href="https://www.zhihu.com/people/PapaFrita">飛德</a>
          對吳語學堂所公開個上海閑話音頻資源個使用許可。
        </p>
        {/* <h1>使用注意</h1>
        <p>
          請<ruby>弗要<rt>viau</rt></ruby>直接拉取軟件包裏向個<span className="bf">學堂</span>資料。使用前頭還請儂搭渠拉先溝通。
        </p> */}
        <h1>ＦＡＱｓ</h1>
        <p>
          <span className="bf">學堂</span>部分個ＩＰＡ顯示字體、大小儕弗大一樣？⸺是個。因爲吳語學堂提供個是 .ｓｖｇ 格式個圖片文件，而弗是ＩＰＡ字符。
        </p>
        <p>
          <span className="bf">學堂</span>部分有一些音頻播放弗出？⸺是個。因爲吳語學堂並嘸沒提供字典裏向每一個音個音頻文件。
        </p>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton href="/home" routerDirection="root">
            <IonIcon icon={homeOutline} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default About;
