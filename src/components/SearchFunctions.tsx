// 组织搜索结果
import { query字頭, 音韻地位 } from "qieyun";
import { zaonhe } from "../scripts/zaonhe_built.js";
import {
  wugniu_zaonhe_getPhinin,
  wugniu2IPA,
  phinin2PlayAudio,
} from "../scripts/process_wugniu_zaonhe.js";
import "./ZyEntry.css";

const AFHConvert = require("ascii-fullwidth-halfwidth-convert");
const converter = new AFHConvert();

function zaonhe_slashes(
  音韻地位_: any,
  字頭?: string | undefined,
  選項?: Object | undefined
) {
  return "/" + zaonhe(音韻地位_, 字頭, 選項) + "/";
}

function zaonhe_tsonpha(zy: string) {
  var result = [];
  var query = query字頭(zy);

  for (var zydeu of query) {
    var dohin = [];
    if (
      zaonhe(zydeu.音韻地位, zy, { 標調方式: "數字" }) ===
      zaonhe(zydeu.音韻地位, zy, { 標調方式: "數字", 文白讀: "僅白讀" })
    ) {
      dohin.push(zaonhe_slashes(zydeu.音韻地位, zy, { 標調方式: "數字" }));
    } else {
      if (
        zaonhe(zydeu.音韻地位, zy, {
          標調方式: "數字",
          文白讀: "主流層",
        }) === zaonhe(zydeu.音韻地位, zy, { 標調方式: "數字" })
      ) {
        dohin.push(
          <span key={zy + zydeu.音韻地位.描述 + "venbahdoh"}>
            <span className="jiansy" key={zy + zydeu.音韻地位.描述 + "vendoh"}>
              {zaonhe_slashes(zydeu.音韻地位, zy, { 標調方式: "數字" })}
              <sub>文</sub>&nbsp;&nbsp;
              <span className="zahsy" key={zy + zydeu.音韻地位.描述 + "bahdoh"}>
                {zaonhe_slashes(zydeu.音韻地位, zy, {
                  標調方式: "數字",
                  文白讀: "僅白讀",
                })}
                <sub>白</sub>
              </span>
            </span>
          </span>
        );
      } else {
        dohin.push(
          <span key={zy + zydeu.音韻地位.描述 + "venbahdoh"}>
            <span className="zahsy" key={zy + zydeu.音韻地位.描述 + "vendoh"}>
              {zaonhe_slashes(zydeu.音韻地位, zy, { 標調方式: "數字" })}
              <sub>文</sub>&nbsp;&nbsp;
            </span>
            <span className="jiansy" key={zy + zydeu.音韻地位.描述 + "bahdoh"}>
              {zaonhe_slashes(zydeu.音韻地位, zy, {
                標調方式: "數字",
                文白讀: "僅白讀",
              })}
              <sub>白</sub>
            </span>
          </span>
        );
      }
    }
    result.push([
      <span key={zy + zydeu.音韻地位.描述}>{dohin}</span>,
      <span className="kaseh" key={zy + zydeu.音韻地位.描述 + "kaseh"}>
        {converter.toFullWidth(zydeu.音韻地位.描述)}・{zydeu.音韻地位.反切(zy)}
        切・
        {zydeu.解釋}
      </span>,
    ]);
  }
  return result;
}

function wugniu_zaonhe(zy: string) {
  var returned = wugniu_zaonhe_getPhinin(zy);
  var result = [];
  for (let [phinin, kaseh, yithi, yithiType, venbahType] of returned) {
    var result_zydeu = [];
    var yithiShiezy = (
      <span key={zy + phinin + "yithi"} className="yithi"></span>
    );

    if (yithi !== "") {
      yithiShiezy = (
        <span key={zy + phinin + "yithi"} className="yithi">
          （{yithi}
          <sub>{yithiType}</sub>）
        </span>
      );
    }
    result_zydeu.push(
      <span
        key={zy + phinin}
        className="wugniuEntry"
        onClick={(e) => phinin2PlayAudio(phinin)}
      >
        {phinin}
        <sub>{venbahType}</sub>
        {yithiShiezy}　{wugniu2IPA(phinin)}
        <br />
      </span>
    );
    if (kaseh !== "") {
      result_zydeu.push(
        <span className="kaseh" key={zy + phinin + "kaseh"}>
          {kaseh}
        </span>
      );
    }
    result.push(result_zydeu);
  }
  return result;
}

export { zaonhe_tsonpha, wugniu_zaonhe };
