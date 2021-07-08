import { query字頭, 音韻地位 } from "qieyun";
import { zaonhe } from "../scripts/zaonhe_built.js";
import { wugniu_zaonhe_getPhinin } from "../scripts/process_wugniu_zaonhe";
import "./ZyEntry.css";

function zaonhe_tsonpha(zy: string) {
  var result = [];
  var query = query字頭(zy);

  for (var zydeu of query) {
    var dohin = [];
    if (
      zaonhe(zydeu.音韻地位, zy, { 標調方式: "數字" }) ===
      zaonhe(zydeu.音韻地位, zy, { 標調方式: "數字", 文白讀: "僅白讀" })
    ) {
      dohin.push(zaonhe(zydeu.音韻地位, zy, { 標調方式: "數字" }));
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
              {zaonhe(zydeu.音韻地位, zy, { 標調方式: "數字" })}
              <sub>文</sub>&nbsp;&nbsp;
              <span className="zahsy" key={zy + zydeu.音韻地位.描述 + "bahdoh"}>
                {zaonhe(zydeu.音韻地位, zy, {
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
              {zaonhe(zydeu.音韻地位, zy, { 標調方式: "數字" })}
              <sub>文</sub>&nbsp;&nbsp;
            </span>
            <span className="jiansy" key={zy + zydeu.音韻地位.描述 + "bahdoh"}>
              {zaonhe(zydeu.音韻地位, zy, {
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
        {zydeu.音韻地位.描述}・{zydeu.音韻地位.反切(zy)}切・
        {zydeu.解釋}
      </span>,
    ]);
  }
  return result;
}

function wugniu_zaonhe(zy: string) {
  var returned = wugniu_zaonhe_getPhinin(zy);
  var result = [];
  for (var [phinin, kaseh, yithi, yithiType, venbahType] of returned) {
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
      <span key={zy + phinin}>
        {phinin}
        <sub>{venbahType}</sub>
        {yithiShiezy}
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
