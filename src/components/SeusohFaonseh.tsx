import {
  IonToolbar,
  IonRadioGroup,
  IonRadio,
  IonItem,
  IonLabel,
  IonListHeader,
  IonList,
  IonIcon,
} from "@ionic/react";
import { useState } from "react";
import "./Accordian.css";
import { chevronDownSharp, chevronUpSharp } from "ionicons/icons";

const SeusohFaonseh: React.FC = () => {
  const [seusohFaonsehRadios, setseusohFaonsehRadios] = useState([
    <span key=""></span>,
  ]);

  const [搜索方式Clicked, set搜索方式Clicked] = useState(0);

  const [chevron, setChevron] = useState(chevronDownSharp);

  const [seusohBy, setSeusohBy] = useState("byZy");

  return (
    <IonToolbar class="accordianList">
      <IonList>
        <IonRadioGroup value={seusohBy}>
          <IonListHeader
            class="accordianTitle"
            onMouseUp={(e: any) => {
              if (搜索方式Clicked === 1) {
                setseusohFaonsehRadios([<span key=""></span>]);
                set搜索方式Clicked(0);
                setChevron(chevronDownSharp);
              } else {
                setseusohFaonsehRadios([
                  <IonItem
                    key="byZy"
                    hidden={false}
                    onMouseUp={(e: any) => {
                      setSeusohBy("byZy");
                    }}
                  >
                    <IonLabel>漢字</IonLabel>
                    <IonRadio value="byZy" />
                  </IonItem>,
                  <IonItem
                    key="byPhinin"
                    hidden={false}
                    onMouseUp={(e: any) => {
                      setSeusohBy("byPhinin");
                    }}
                  >
                    <IonLabel>吳拼</IonLabel>
                    <IonRadio value="byPhinin" />
                  </IonItem>,
                ]);
                set搜索方式Clicked(1);
                setChevron(chevronUpSharp);
              }
            }}
          >
            搜索方式　
            <IonIcon icon={chevron} />
          </IonListHeader>
          {seusohFaonsehRadios}
        </IonRadioGroup>
      </IonList>
    </IonToolbar>
  );
};

export { SeusohFaonseh,  };
