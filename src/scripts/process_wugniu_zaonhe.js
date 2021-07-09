import wugniu_zaonhe_data from "../data/wugniu/wugniu_zaonhe_data";
import IPA_svg_data from "../data/wugniu/IPA.svg";
import "../data/wugniu/IPA.css";
import { Toast } from "@capacitor/toast";

function wugniu_zaonhe_getPhinin(zy) {
  var tshubu = [];
  for (var [vaethi, ciethi, phinin, kaseh] of wugniu_zaonhe_data) {
    if (zy === vaethi) {
      if (vaethi === ciethi) {
        tshubu.push([phinin, kaseh, "", ""]);
      } else {
        tshubu.push([phinin, kaseh, ciethi, "簡"]);
      }
    } else if (zy === ciethi) {
      tshubu.push([phinin, kaseh, vaethi, "繁"]);
    }
  }
  tshubu.forEach(function (part, index, theArray) {
    if (theArray[index][1].slice(-1) === "文") {
      theArray[index].push("文");
      theArray[index][1] = theArray[index][1].slice(0, -1);
    } else if (theArray[index][1].slice(-1) === "白") {
      theArray[index].push("白");
      theArray[index][1] = theArray[index][1].slice(0, -1);
    } else theArray[index].push("");
  });
  return [...new Set(Array.from(tshubu))];
}

function phinins2zys(rawPhinins) {
  var phinins = rawPhinins.split(" ");
  var zys = [];
  for (var phininInput of phinins) {
    for (var [vaethi, ciethi, phinin, kaseh] of wugniu_zaonhe_data) {
      if (phininInput === phinin) {
        zys.push(vaethi);
        zys.push(ciethi);
      }
    }
  }
  return [...new Set(Array.from(zys))].join("");
}

function phinin2IPA(phinin) {
  try {
    return (
      <svg
        className="wugniuIPA"
        height="1em"
        width="3.5em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={IPA_svg_data[phinin]}></path>
      </svg>
    );
  } catch (error) {
    return (
      <svg
        className="wugniuIPA"
        height="1em"
        width="3.5em"
        xmlns="http://www.w3.org/2000/svg"
      ></svg>
    );
  }
}

function phinin2PlayAudio(phinin) {
  var audio = new Audio("assets/audios/" + phinin + ".mp3");
  var playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise
      .then(function () {
        // Pufaon
      })
      .catch(function (error) {
        // const [present, dismiss] = useIonToast();
        Toast.show({
          text: "吳語學堂嘸沒提供箇隻錄音",
          // duration: "long",
        });
      });
  }
}

export { wugniu_zaonhe_getPhinin, phinins2zys, phinin2IPA, phinin2PlayAudio };
