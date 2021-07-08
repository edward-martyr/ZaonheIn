import wugniu_zaonhe_data from "../data/wugniu/wugniu_zaonhe_data";

function wugniu_zaonhe_getPhinin(zy: string) {
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

function phinins2zys(rawPhinins: string) {
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

export { wugniu_zaonhe_getPhinin, phinins2zys };
