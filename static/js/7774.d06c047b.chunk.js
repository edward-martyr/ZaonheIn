"use strict";(self.webpackChunkzaonhein=self.webpackChunkzaonhein||[]).push([[7774],{7774:function(n,e,t){t.r(e),t.d(e,{KEYBOARD_DID_CLOSE:function(){return r},KEYBOARD_DID_OPEN:function(){return i},copyVisualViewport:function(){return l},keyboardDidClose:function(){return g},keyboardDidOpen:function(){return p},keyboardDidResize:function(){return b},resetKeyboardAssist:function(){return f},setKeyboardClose:function(){return h},setKeyboardOpen:function(){return d},startKeyboardAssist:function(){return s},trackViewportChanges:function(){return y}});var i="ionKeyboardDidShow",r="ionKeyboardDidHide",o={},u={},a=!1,f=function(){o={},u={},a=!1},s=function(n){c(n),n.visualViewport&&(u=l(n.visualViewport),n.visualViewport.onresize=function(){y(n),p()||b(n)?d(n):g(n)&&h(n)})},c=function(n){n.addEventListener("keyboardDidShow",(function(e){return d(n,e)})),n.addEventListener("keyboardDidHide",(function(){return h(n)}))},d=function(n,e){w(n,e),a=!0},h=function(n){v(n),a=!1},p=function(){var n=(o.height-u.height)*u.scale;return!a&&o.width===u.width&&n>150},b=function(n){return a&&!g(n)},g=function(n){return a&&u.height===n.innerHeight},w=function(n,e){var t=e?e.keyboardHeight:n.innerHeight-u.height,r=new CustomEvent(i,{detail:{keyboardHeight:t}});n.dispatchEvent(r)},v=function(n){var e=new CustomEvent(r);n.dispatchEvent(e)},y=function(n){o=Object.assign({},u),u=l(n.visualViewport)},l=function(n){return{width:Math.round(n.width),height:Math.round(n.height),offsetTop:n.offsetTop,offsetLeft:n.offsetLeft,pageTop:n.pageTop,pageLeft:n.pageLeft,scale:n.scale}}}}]);
//# sourceMappingURL=7774.d06c047b.chunk.js.map