(()=>{"use strict";var e,t,i={1862:(e,t,i)=>{i.d(t,{Z:()=>l});var n=i(8081),o=i.n(n),c=i(3645),r=i.n(c)()(o());r.push([e.id,"article{margin:50px auto;max-width:800px;width:90%}section{margin:0 10px 30px;line-height:50px;display:flex}section+h2{margin-top:50px}.chapter{padding:2px 10px;white-space:nowrap}.thumbnail_click_button{margin-left:15px;color:#fff;background:#20386d;border-radius:5px;border:1px solid #fff;padding:5px 10px;box-shadow:2px 2px 3px 0px #7687ad;height:40px}.thumbnail_click_button.visited{opacity:.5}.thumbnail_video,.thumbnail_click_button:after{display:none}",""]);const l=r},3645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i="",n=void 0!==t[5];return t[4]&&(i+="@supports (".concat(t[4],") {")),t[2]&&(i+="@media ".concat(t[2]," {")),n&&(i+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),i+=e(t),n&&(i+="}"),t[2]&&(i+="}"),t[4]&&(i+="}"),i})).join("")},t.i=function(e,i,n,o,c){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(n)for(var l=0;l<this.length;l++){var a=this[l][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);n&&r[d[0]]||(void 0!==c&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=c),i&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=i):d[2]=i),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},8081:e=>{e.exports=function(e){return e[1]}},3379:e=>{var t=[];function i(e){for(var i=-1,n=0;n<t.length;n++)if(t[n].identifier===e){i=n;break}return i}function n(e,n){for(var c={},r=[],l=0;l<e.length;l++){var a=e[l],s=n.base?a[0]+n.base:a[0],d=c[s]||0,u="".concat(s," ").concat(d);c[s]=d+1;var p=i(u),v={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==p)t[p].references++,t[p].updater(v);else{var m=o(v,n);n.byIndex=l,t.splice(l,0,{identifier:u,updater:m,references:1})}r.push(u)}return r}function o(e,t){var i=t.domAPI(t);i.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;i.update(e=t)}else i.remove()}}e.exports=function(e,o){var c=n(e=e||[],o=o||{});return function(e){e=e||[];for(var r=0;r<c.length;r++){var l=i(c[r]);t[l].references--}for(var a=n(e,o),s=0;s<c.length;s++){var d=i(c[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}c=a}}},569:e=>{var t={};e.exports=function(e,i){var n=function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}t[e]=i}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(i)}},9216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},3565:(e,t,i)=>{e.exports=function(e){var t=i.nc;t&&e.setAttribute("nonce",t)}},7795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(i){!function(e,t,i){var n="";i.supports&&(n+="@supports (".concat(i.supports,") {")),i.media&&(n+="@media ".concat(i.media," {"));var o=void 0!==i.layer;o&&(n+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),n+=i.css,o&&(n+="}"),i.media&&(n+="}"),i.supports&&(n+="}");var c=i.sourceMap;c&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,i)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},4589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var c=n[e]={id:e,exports:{}};return i[e](c,c.exports,o),c.exports}o.m=i,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,i)=>(o.f[i](e,t),t)),[])),o.u=e=>"resources/js/"+e+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="test:",o.l=(i,n,c,r)=>{if(e[i])e[i].push(n);else{var l,a;if(void 0!==c)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var u=s[d];if(u.getAttribute("src")==i||u.getAttribute("data-webpack")==t+c){l=u;break}}l||(a=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.setAttribute("data-webpack",t+c),l.src=i),e[i]=[n];var p=(t,n)=>{l.onerror=l.onload=null,clearTimeout(v);var o=e[i];if(delete e[i],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(n))),t)return t(n)},v=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),a&&document.head.appendChild(l)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../../"})(),(()=>{o.b=document.baseURI||self.location.href;var e={2141:0};o.f.j=(t,i)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)i.push(n[2]);else{var c=new Promise(((i,o)=>n=e[t]=[i,o]));i.push(n[2]=c);var r=o.p+o.u(t),l=new Error;o.l(r,(i=>{if(o.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var c=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.src;l.message="Loading chunk "+t+" failed.\n("+c+": "+r+")",l.name="ChunkLoadError",l.type=c,l.request=r,n[1](l)}}),"chunk-"+t,t)}};var t=(t,i)=>{var n,c,[r,l,a]=i,s=0;if(r.some((t=>0!==e[t]))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(a)a(o)}for(t&&t(i);s<r.length;s++)c=r[s],o.o(e,c)&&e[c]&&e[c][0](),e[c]=0},i=self.webpackChunktest=self.webpackChunktest||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),(()=>{var e=o(3379),t=o.n(e),i=o(7795),n=o.n(i),c=o(569),r=o.n(c),l=o(3565),a=o.n(l),s=o(9216),d=o.n(s),u=o(4589),p=o.n(u),v=o(1862),m={};m.styleTagTransform=p(),m.setAttributes=a(),m.insert=r().bind(null,"head"),m.domAPI=n(),m.insertStyleElement=d();t()(v.Z,m);v.Z&&v.Z.locals&&v.Z.locals;var h=function(e,t,i,n){return new(i||(i=Promise))((function(o,c){function r(e){try{a(n.next(e))}catch(e){c(e)}}function l(e){try{a(n.throw(e))}catch(e){c(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,l)}a((n=n.apply(e,t||[])).next())}))};const f={"classical_mechanics/01_N4s":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(7937)]).then(o.bind(o,7937))).spec})),title:"キャッチボール"},"classical_mechanics/03_o8c":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(2841)]).then(o.bind(o,2841))).spec})),title:"力が一定の場合"},"classical_mechanics/03_sHB":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(4109)]).then(o.bind(o,4109))).spec})),title:"力が1次関数の場合"},"classical_mechanics/04_jjA":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(5391)]).then(o.bind(o,5391))).spec})),title:"球面との衝突"},"classical_mechanics/04_vWA":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(7253)]).then(o.bind(o,7253))).spec})),title:"ゆがんだ床との衝突"},"classical_mechanics/05_nsn":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(441)]).then(o.bind(o,441))).spec})),title:"動く床との衝突"},"classical_mechanics/05_QJw":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(2593)]).then(o.bind(o,2593))).spec})),title:"変形する床との衝突"},"classical_mechanics/06_7NR":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(751)]).then(o.bind(o,751))).spec})),title:"質量が異なるボール同士の衝突"},"classical_mechanics/06_bC9":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(7062)]).then(o.bind(o,7062))).spec})),title:"重力下でのボール同士の衝突"},"classical_mechanics/07_j5x":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(8356)]).then(o.bind(o,8356))).spec})),title:"振り子"},"classical_mechanics/07_Nll":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(2387)]).then(o.bind(o,2387))).spec})),title:"曲面上の運動"},"classical_mechanics/07_Xps":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(2034)]).then(o.bind(o,2034))).spec})),title:"強制振り子"},"classical_mechanics/07_ZGK":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(2275)]).then(o.bind(o,2275))).spec})),title:"うねる曲面上の運動"},"classical_mechanics/08_cxb":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(9273)]).then(o.bind(o,9273))).spec})),title:"ディアボロ"},"classical_mechanics/08_FsZ":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(2404)]).then(o.bind(o,2404))).spec})),title:"振り子"},"classical_mechanics/08_rFZ":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(8346)]).then(o.bind(o,8346))).spec})),title:"シーソー"},"classical_mechanics/09_RFe":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(5014)]).then(o.bind(o,5014))).spec})),title:"ベジェ曲線"},"classical_mechanics/11_mbT":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(2033)]).then(o.bind(o,2033))).spec})),title:"剛体の自由回転の安定性"},"classical_mechanics/12_U56":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(3562)]).then(o.bind(o,3562))).spec})),title:"1点を固定した剛体"},"classical_mechanics/12_w8J":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(3206)]).then(o.bind(o,3206))).spec})),title:"2点を固定した剛体"},"classical_mechanics/13_N0P":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(5346)]).then(o.bind(o,5346))).spec})),title:"床の上を滑る剛体"},"classical_mechanics/13_r0X":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(4032)]).then(o.bind(o,4032))).spec})),title:"床の上を転がる剛体"},"classical_mechanics/13_ZZ0":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(1894)]).then(o.bind(o,1894))).spec})),title:"垂直円筒内を転がる球"},"classical_mechanics/15_59l":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(3649)]).then(o.bind(o,3649))).spec})),title:"可積分・非可積分"},"continuum_mechanics/07_2uv":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(6296)]).then(o.bind(o,6296))).spec})),title:"縦波の伝播"},"continuum_mechanics/07_RaT":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(2008)]).then(o.bind(o,2008))).spec})),title:"横波の伝播"},"continuum_mechanics/07_tke":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(3458)]).then(o.bind(o,3458))).spec})),title:"横波の伝播（外力あり）"},"continuum_mechanics/08_HzX":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(5080)]).then(o.bind(o,5080))).spec})),title:"ナヴィエ方程式の解"},"continuum_mechanics/08_N1C":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(8981)]).then(o.bind(o,8981))).spec})),title:"ナヴィエ方程式の解（外力あり）"},"continuum_mechanics/09_6lA":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(1446)]).then(o.bind(o,1446))).spec})),title:"3次元波動方程式の解"},"continuum_mechanics/09_OV3":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(5923)]).then(o.bind(o,5923))).spec})),title:"3次元波動方程式の解（周期的な外力）"},"electrodynamics/01_f9B":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(8099)]).then(o.bind(o,8099))).spec})),title:"クーロン力"},"electrodynamics/03_rkK":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(2976)]).then(o.bind(o,2976))).spec})),title:"一様磁場中のローレンツ力"},"electrodynamics/10_4gX":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(957)]).then(o.bind(o,957))).spec})),title:"電磁場の時間発展（電流なし）"},"electrodynamics/10_Ied":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(8526)]).then(o.bind(o,8526))).spec})),title:"電気双極子放射"},"electrodynamics/10_NGT":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(9063)]).then(o.bind(o,9063))).spec})),title:"チェレンコフ放射"},"electrodynamics/10_t9w":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(1426)]).then(o.bind(o,1426))).spec})),title:"点電荷の等速直線運動"},"electrodynamics/10_u6l":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(252)]).then(o.bind(o,252))).spec})),title:"点電荷の単振動"},"electrodynamics/10_xDm":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(7641)]).then(o.bind(o,7641))).spec})),title:"点電荷の円運動"},"gravitation/01_24j":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(4724)]).then(o.bind(o,4724))).spec})),title:"重力（1体）"},"gravitation/01_CGY":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(950)]).then(o.bind(o,950))).spec})),title:"重力（2体）"},"gravitation/01_Re3":{spec:()=>h(void 0,void 0,void 0,(function*(){return(yield Promise.all([o.e(9016),o.e(6293),o.e(1550),o.e(3891)]).then(o.bind(o,3891))).spec})),title:"重力（3体）"}};window.button_names=f;var b=function(e,t,i,n){return new(i||(i=Promise))((function(o,c){function r(e){try{a(n.next(e))}catch(e){c(e)}}function l(e){try{a(n.throw(e))}catch(e){c(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,l)}a((n=n.apply(e,t||[])).next())}))};function y(){return Array.from(document.querySelectorAll("button.thumbnail_playpause_button"))}function _(){return Array.from(document.querySelectorAll("video.thumbnail_video"))}function g(){let e=null;for(let t of _())null==e&&(e=t.paused),e?t.play():t.pause();let t="thumbnail_playpause_pause",i="thumbnail_playpause_play";e&&([t,i]=[i,t]);for(let e of y())e.classList.add(i),e.classList.remove(t)}let P=!1,x=()=>{P=_()[0].paused,P||g()};window.onload=function(){!function(){var e,t;let i,n="",o="";for(let c in window.button_names){let r=c.split("/");if(n!==r[0]){n=r[0];const t=document.createElement("h2"),i=document.createElement("span");i.className="h2_name",i.textContent={classical_mechanics:"力学",continuum_mechanics:"連続体力学",electrodynamics:"電磁力学",gravitation:"重力理論",quantum_mechanics:"量子力学",quantum_field_theory:"場の量子論",thermodynamics:"熱力学",statistical_mechanics:"統計力学"}[n]+"編",t.appendChild(i),null===(e=document.querySelector("article"))||void 0===e||e.appendChild(t),o=""}const l=r[1].split("_")[0];if(o!==l){o=l;const e=document.createElement("a");e.className="chapter",e.textContent=`第${Number(o)}章`,e.href=`${n}/${(""+o).padStart(3,"0")}.html`;const c=document.createElement("section");c.appendChild(e),null===(t=document.querySelector("article"))||void 0===t||t.appendChild(c),i=document.createElement("div"),c.appendChild(i)}const a=document.createElement("button");a.name=c,a.type="button",a.onclick=()=>a.classList.add("visited"),a.className="thumbnail_click_button",a.textContent=window.button_names[c].title;const s=document.createElement("video");s.className="thumbnail_video",a.appendChild(s),null==i||i.appendChild(a)}}(),function(){{const e=document.querySelectorAll("button.thumbnail_click_button");for(let t of Array.from(e))t.addEventListener("click",(()=>b(this,void 0,void 0,(function*(){var e;gtag("event","simulation",{name:t.name});const i=(yield o.e(6411).then(o.bind(o,6411))).SimulationWindow;i.Show((()=>{P||g()})),x();const n=/(.*?)(_(\d))?$/.exec(t.name),c=yield f[n[1]].spec(),r=parseInt(null!==(e=n[3])&&void 0!==e?e:"0");(yield Promise.all([o.e(9016),o.e(8363)]).then(o.bind(o,4969))).Scheduler.Start(c,!0,r),i.Loaded()}))))}{const e=y();for(let t of e)t.addEventListener("click",(()=>g()))}}()}})()})();