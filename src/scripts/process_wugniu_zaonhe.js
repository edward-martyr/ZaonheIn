import wugniu_zaonhe_data from "../data/wugniu/wugniu_zaonhe_data";
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
  let phininSuzys = [];
  for (var phininInput of phinins) {
    if (!"15678".includes(phininInput.slice(-1))) {
      for (let suzy of "15678") {
        phininSuzys.push(phininInput + suzy);
      }
    } else {
      phininSuzys.push(phininInput);
    }
  }

  for (var phininSuzy of phininSuzys) {
    for (var [vaethi, ciethi, phinin, kaseh] of wugniu_zaonhe_data) {
      if (phininSuzy === phinin) {
        zys.push(vaethi);
        zys.push(ciethi);
      }
    }
  }
  return [...new Set(Array.from(zys))].join("");
}

// function phinin2IPA(phinin) {
//   try {
//     return (
//       <svg
//         className="wugniuIPA"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path d={IPA_svg_data[phinin]}></path>
//       </svg>
//     );
//   } catch (error) {
//     return (
//       <svg
//         className="wugniuIPA"
//         xmlns="http://www.w3.org/2000/svg"
//       ></svg>
//     );
//   }
// }

function wugniu2IPA(wugniu) {
  let result = wugniu;
  let pairs = [
    [/er/, "ɦəl"],
    [/^n(.)$/, "n̩$1"],
    [/^m(.)$/, "m̩$1"],
    [/^ng(.)$/, "ŋ̩$1"],
    [/y(.)$/, "z̩$1"],
    [/^sh/, "ɕ"],
    [/([ptskc])h/, "$1ʰ"],
    [/^gh/, "ɦ"],
    [/^gn/, "ɲi"],
    [/^ng/, "ŋ"],
    [/^zh/, "ʑ"],
    [/^c/, "tɕ"],
    [/^j/, "dʑ"],
    [/^y/, "ɦi"],
    [/^w/, "ɦu"],
    [/aon/, "ɑ̃"],
    [/ioe/, "yø"],
    [/iuq/, "yɪʔ"],
    [/iu/, "y"],
    [/au/, "ɔ"],
    [/eu/, "ɤ"],
    [/oe/, "ø"],
    [/an/, "ã"],
    [/en/, "ən"],
    [/on/, "oŋ"],
    [/eq/, "əʔ"],
    [/iq/, "iɪʔ"],
    [/q/, "ʔ"],
    [/ii/, "i"],
    [/iy/, "y"],
    [/uu/, "u"],
    [/1$/, "⁵³"],
    [/5$/, "³³⁴"],
    [/6$/, "¹¹³"],
    [/7$/, "⁵⁵"],
    [/8$/, "¹²"],
  ];
  for (let [zie, gheu] of pairs) {
    result = result.replace(zie, gheu);
  }
  return "/" + result + "/";
}

function playAudio(audio) {
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
function phinin2PlayAudio(phinin) {
  var audio = new Audio("assets/audios/" + phinin + ".mp3");
  playAudio(audio);
}

export {
  wugniu_zaonhe_getPhinin,
  phinins2zys,
  // phinin2IPA,
  phinin2PlayAudio,
  wugniu2IPA,
  playAudio,
};
