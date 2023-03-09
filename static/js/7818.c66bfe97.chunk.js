/*! For license information please see 7818.c66bfe97.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkzaonhein=self.webpackChunkzaonhein||[]).push([[7818],{7818:function(e,t,r){r.r(t),r.d(t,{scopeCss:function(){return z}});var n=r(9388),c="-shadowcsshost",s="-shadowcssslotted",o="-shadowcsscontext",i=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",u=new RegExp("("+c+i,"gim"),a=new RegExp("("+o+i,"gim"),l=new RegExp("("+s+i,"gim"),f=c+"-no-combinator",p=/-shadowcsshost-no-combinator([^\s]*)/,h=[/::shadow/g,/::content/g],g=/-shadowcsshost/gim,d=/:host/gim,v=/::slotted/gim,m=/:host-context/gim,x=/\/\*\s*[\s\S]*?\*\//g,_=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,w=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,b=/([{}])/g,S="%BLOCK%",W=function(e,t){var r=k(e),n=0;return r.escapedString.replace(w,(function(){for(var e=[],c=0;c<arguments.length;c++)e[c]=arguments[c];var s=e[2],o="",i=e[4],u="";i&&i.startsWith("{"+S)&&(o=r.blocks[n++],i=i.substring(S.length+1),u="{");var a=t({selector:s,content:o});return""+e[1]+a.selector+e[3]+u+a.content+i}))},k=function(e){for(var t=e.split(b),r=[],n=[],c=0,s=[],o=0;o<t.length;o++){var i=t[o];"}"===i&&c--,c>0?s.push(i):(s.length>0&&(n.push(s.join("")),r.push(S),s=[]),r.push(i)),"{"===i&&c++}return s.length>0&&(n.push(s.join("")),r.push(S)),{escapedString:r.join(""),blocks:n}},O=function(e,t,r){return e.replace(t,(function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(e[2]){for(var n=e[2].split(","),c=[],s=0;s<n.length;s++){var o=n[s].trim();if(!o)break;c.push(r(f,o,e[3]))}return c.join(",")}return f+e[3]}))},j=function(e,t,r){return e+t.replace(c,"")+r},E=function(e,t,r){return t.indexOf(c)>-1?j(e,t,r):e+t+r+", "+t+" "+e+r},R=function(e,t){var r=function(e){return e=e.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+e+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(t);return!r.test(e)},C=function(e,t,r){t=t.replace(/\[is=([^\]]*)\]/g,(function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return t[0]}));for(var n,c="."+t,s=function(e){var n=e.trim();if(!n)return"";if(e.indexOf(f)>-1)n=function(e,t,r){if(g.lastIndex=0,g.test(e)){var n="."+r;return e.replace(p,(function(e,t){return t.replace(/([^:]*)(:*)(.*)/,(function(e,t,r,c){return t+n+r+c}))})).replace(g,n+" ")}return t+" "+e}(e,t,r);else{var s=e.replace(g,"");if(s.length>0){var o=s.match(/([^:]*)(:*)(.*)/);o&&(n=o[1]+c+o[2]+o[3])}}return n},o=function(e){var t,r=[],n=0;return e=e.replace(/(\[[^\]]*\])/g,(function(e,t){var c="__ph-"+n+"__";return r.push(t),n++,c})),t=e.replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(e,t,c){var s="__ph-"+n+"__";return r.push(c),n++,t+s})),{content:t,placeholders:r}}(e),i="",u=0,a=/( |>|\+|~(?!=))\s*/g,l=!((e=o.content).indexOf(f)>-1);null!==(n=a.exec(e));){var h=n[1],d=e.slice(u,n.index).trim();i+=((l=l||d.indexOf(f)>-1)?s(d):d)+" "+h+" ",u=a.lastIndex}var v=e.substring(u);return i+=(l=l||v.indexOf(f)>-1)?s(v):v,function(e,t){return t.replace(/__ph-(\d+)__/g,(function(t,r){return e[+r]}))}(o.placeholders,i)},T=function e(t,r,n,c,s){return W(t,(function(t){var s=t.selector,o=t.content;return"@"!==t.selector[0]?s=function(e,t,r,n){return e.split(",").map((function(e){return n&&e.indexOf("."+n)>-1?e.trim():R(e,t)?C(e,t,r).trim():e.trim()})).join(", ")}(t.selector,r,n,c):(t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(o=e(t.content,r,n,c)),{selector:s.replace(/\s{2,}/g," ").trim(),content:o}}))},L=function(e,t,r,n,i){var p=function(e,t){var r="."+t+" > ",n=[];return e=e.replace(l,(function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(e[2]){for(var c=e[2].trim(),s=e[3],o=r+c+s,i="",u=e[4]-1;u>=0;u--){var a=e[5][u];if("}"===a||","===a)break;i=a+i}var l=i+o,p=""+i.trimRight()+o.trim();if(l.trim()!==p.trim()){var h=p+", "+l;n.push({orgSelector:l,updatedSelector:h})}return o}return f+e[3]})),{selectors:n,cssText:e}}(e=function(e){return O(e,a,E)}(e=function(e){return O(e,u,j)}(e=function(e){return e.replace(m,o).replace(d,c).replace(v,s)}(e))),n);return e=function(e){return h.reduce((function(e,t){return e.replace(t," ")}),e)}(e=p.cssText),t&&(e=T(e,t,r,n)),{cssText:(e=(e=e.replace(/-shadowcsshost-no-combinator/g,"."+r)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:p.selectors}},z=function(e,t,r){var c=t+"-h",s=t+"-s",o=function(e){return e.match(_)||[]}(e);e=function(e){return e.replace(x,"")}(e);var i=[];if(r){var u=function(e){var t="/*!@___"+i.length+"___*/",r="/*!@"+e.selector+"*/";return i.push({placeholder:t,comment:r}),e.selector=t+e.selector,e};e=W(e,(function(e){return"@"!==e.selector[0]?u(e):e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document")?(e.content=W(e.content,u),e):e}))}var a=L(e,t,c,s);return e=(0,n.ev)([a.cssText],o).join("\n"),r&&i.forEach((function(t){var r=t.placeholder,n=t.comment;e=e.replace(r,n)})),a.slottedSelectors.forEach((function(t){e=e.replace(t.orgSelector,t.updatedSelector)})),e}}}]);
//# sourceMappingURL=7818.c66bfe97.chunk.js.map