// 根据搜索内容输出字及所有解释
import "./ZyEntry.css";
import { IonItem, IonLabel, IonAvatar, IonList } from "@ionic/react";

import { zaonhe_tsonpha, wugniu_zaonhe } from "./SearchFunctions";

const ZyEntry = (zys: string) => {
  var entries = [];
  var uniqZys = [...new Set(Array.from(zys))];
  uniqZys = uniqZys.filter((char) => /\p{Script=Han}/u.test(char));

  for (var zy of uniqZys) {
    //
    var zaonhe_tsonpha_cihku;
    if (zaonhe_tsonpha(zy).length > 0) {
      zaonhe_tsonpha_cihku = (
        <IonItem key={"zaonhe_tsonpha_cihku_" + zy} class="zytieFaewe">
          <span key={"推導" + zy} className="lenyoe">
            推導
          </span>
          <IonLabel className="dictResults" text-wrap>
            {zaonhe_tsonpha(zy)}
          </IonLabel>
        </IonItem>
      );
    } else {
      zaonhe_tsonpha_cihku = "";
    }

    var wugniu_zaonhe_cihku;
    if (wugniu_zaonhe(zy).length > 0) {
      wugniu_zaonhe_cihku = (
        <IonItem key={"wugniu_zaonhe_cihku" + zy} class="zytieFaewe">
          <span key={"學堂" + zy} className="lenyoe">
            學堂
          </span>
          <IonLabel className="dictResults" text-wrap>
            {wugniu_zaonhe(zy)}
          </IonLabel>
        </IonItem>
      );
    } else {
      wugniu_zaonhe_cihku = "";
    }

    var lenyoe_cihku = [];
    var cihku_Key = 0;
    for (var cihku of [zaonhe_tsonpha_cihku, wugniu_zaonhe_cihku]) {
      if (cihku !== "") {
        lenyoe_cihku.push(<IonItem key={cihku_Key}>{cihku}</IonItem>);
      }
      cihku_Key += 1;
    }

    if (lenyoe_cihku.length > 0) {
      entries.push([
        <IonItem className="container" key={zy}>
          <IonAvatar className="zydeu" key={"zydeu_" + zy}>
            {zy}
          </IonAvatar>
          <IonList lines="none">{lenyoe_cihku}</IonList>
        </IonItem>,
      ]);
    }
  }
  if (entries.length === 0) {
    entries.push([
      <IonItem key="vu" class="vucihku">
        無結果
      </IonItem>,
    ]);
  }
  return <IonList>{entries}</IonList>;
};

export default ZyEntry;
