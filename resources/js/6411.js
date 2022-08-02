"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[6411],{5897:(e,t,n)=>{n.d(t,{Z:()=>m});var i=n(8081),o=n.n(i),a=n(3645),s=n.n(a),r=n(1667),l=n.n(r),c=new URL(n(2301),n.b),d=s()(o()),u=l()(c);d.push([e.id,".noscroll{overflow:hidden}#simulation{visibility:hidden;position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.6);z-index:100;display:flex;justify-content:center;align-items:center}#simulation_foreground{width:calc(100vmin - 20px);height:calc(100vmin - 20px);position:relative;background:#fff;color:gray;white-space:nowrap;font-family:sans-serif;user-select:none}@media screen and (max-width: 650px){#simulation_foreground{width:100vmin;height:100vmin}}#simulation_loading{position:absolute;top:45vmin;display:block;width:100%;text-align:center;font-size:5vmin}#simulation_canvas{width:100%;height:100%;display:block}#simulation_canvas:focus{outline:none}.simulation_label{cursor:pointer;pointer-events:auto}.simulation_label input{cursor:pointer}.simulation_controls_label{align-self:center;font-weight:bold;text-decoration:underline}#simulation_topleft{position:absolute;top:0;left:0;padding:0 0 0 5px;pointer-events:none}#simulation_title{display:none !important;font-size:100%;display:inline-block}@media screen and (max-width: 650px){#simulation_title{font-size:90%}}#simulation_selector{display:flex;flex-direction:column;align-items:baseline}@media screen and (max-width: 650px){#simulation_selector{line-height:40px}}.simulation_selector_button{margin:5px 5px 0 0;font-size:120%}.simulation_selector_button_current{font-style:italic;font-weight:bold;text-decoration:underline;color:red}.simulation_span,#simulation_title,#simulation_comment{margin:5px 0 0 5px;font-size:90%;background:#ffffffa0}@media screen and (max-width: 650px){.simulation_span,#simulation_title,#simulation_comment{font-size:80%}}#simulation_time{font-size:3vmin;position:absolute;bottom:0;left:0;padding:0 0 0 1.5vmin;background:#ffffffa0}#simulation_controls{display:flex;flex-direction:column;align-items:end;pointer-events:none;position:absolute;top:70px;right:3px;line-height:40px;text-align:right}#simulation_close{cursor:pointer;position:absolute;top:0;right:0;padding:0;border:0;width:50px;height:50px;background:url("+u+") no-repeat center}#simulation_close:hover{opacity:60%}#simulation_message{font-size:90%;position:absolute;bottom:0;right:0;padding:0 5px 5px 0;background:#ffffffa0}",""]);const m=d},3645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(i)for(var r=0;r<this.length;r++){var l=this[r][0];null!=l&&(s[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);i&&s[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},1667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},8081:e=>{e.exports=function(e){return e[1]}},3379:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var a={},s=[],r=0;r<e.length;r++){var l=e[r],c=i.base?l[0]+i.base:l[0],d=a[c]||0,u="".concat(c," ").concat(d);a[c]=d+1;var m=n(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var f=o(p,i);i.byIndex=r,t.splice(r,0,{identifier:u,updater:f,references:1})}s.push(u)}return s}function o(e,t){var n=t.domAPI(t);n.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=i(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var r=n(a[s]);t[r].references--}for(var l=i(e,o),c=0;c<a.length;c++){var d=n(a[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=l}}},569:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},9216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},3565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},7795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,o&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},4589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},6411:(e,t,n)=>{n.r(t),n.d(t,{SimulationWindow:()=>i.D});var i=n(8363)},8363:(e,t,n)=>{n.d(t,{D:()=>S});var i=n(3379),o=n.n(i),a=n(7795),s=n.n(a),r=n(569),l=n.n(r),c=n(3565),d=n.n(c),u=n(9216),m=n.n(u),p=n(4589),f=n.n(p),h=n(5897),v={};v.styleTagTransform=f(),v.setAttributes=d(),v.insert=l().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=m();o()(h.Z,v);h.Z&&h.Z.locals&&h.Z.locals;var g,y=function(e,t,n,i){return new(n||(n=Promise))((function(o,a){function s(e){try{l(i.next(e))}catch(e){a(e)}}function r(e){try{l(i.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,r)}l((i=i.apply(e,t||[])).next())}))};const b=()=>{const e=document.createElement("label");return e.className="simulation_label",e},_=(e,t)=>{const n=document.createElement("span");return n.className="simulation_span",void 0!==t&&(n.style.color=t),n.textContent=e,n},x=e=>{const t=document.createElement("input");return t.type=e,t.name=e,t};class S{static Show(e){this.on_closed=e,document.querySelector("#simulation").style.visibility="visible",document.querySelector("#simulation_loading").style.visibility="visiblle",document.body.classList.add("noscroll")}static Loaded(){document.querySelector("#simulation_loading").style.visibility="hidden"}static SetControls(e,t,n){var i;S.selector.innerHTML="";for(let i=0;i<e.cases.length;i++){const o=b();{const e=x("button");e.value=(i+1).toString(),e.className="simulation_selector_button",e.addEventListener("click",(()=>n(i))),i==t&&(e.className+=" simulation_selector_button_current"),o.appendChild(e)}o.appendChild(_(e.cases[i].title)),S.selector.appendChild(o)}S.controls.innerHTML="",null===(i=e.controls)||void 0===i||i.forEach((e=>{const t=document.createElement("span");(Array.isArray(e)?e:[e]).forEach((e=>{var n;switch(e.type){case"label":const i=_(e.text);t.className="simulation_controls_label",i.className="",t.appendChild(i);break;case"check":{const n=b(),i=x("checkbox");i.addEventListener("change",(()=>e.change(i.checked))),i.checked=e.checked(),n.appendChild(_(e.text,e.color)),n.appendChild(i),t.appendChild(n);break}case"radio":{const n=b(),i=x("radio");i.checked=e.checked(),i.addEventListener("change",(()=>{i.checked&&e.changedToChecked()})),i.name=e.name,n.appendChild(_(e.text,e.color)),n.appendChild(i),t.appendChild(n);break}case"slider":{const i=Math.random().toFixed(5),o=b();{const t=x("range"),{value:a,min:s,max:r,step:l}=e.value();t.min=s.toString(),t.max=r.toString(),t.step=l.toString(),t.value=a.toString(),t.setAttribute("list",`${i}`),t.addEventListener("input",(()=>e.input(Number(t.value),t))),void 0!==e.change&&t.addEventListener("change",e.change),o.appendChild(_(null!==(n=e.text)&&void 0!==n?n:"",e.color)),o.appendChild(t)}S.controls.appendChild(o);const a=document.createElement("datalist");{a.id=`${i}`;const e=document.createElement("option");e.value="0",a.appendChild(e)}t.appendChild(a);break}}})),S.controls.appendChild(t)})),document.querySelector("#simulation_title").innerText=e.title,document.querySelector("#simulation_comment").innerHTML=e.comment}}g=S,S.SetTime=e=>g.time.innerText=e,S.SetMessage=e=>g.message.innerText=e;{const e=document.createElement("div");e.id="simulation",document.body.appendChild(e);const t="<span id='simulation_loading'>読み込み中...</span>",i=`<div id='simulation_topleft'>${"<div id='simulation_title'></div>"}${"<div id='simulation_selector'></div>"}${"<div id='simulation_comment'></div>"}</div>`,o="<canvas id='simulation_canvas' touch-action='none'></canvas>",a="<div id='simulation_time'></div>",s="<button id='simulation_close' type='button'></button>",r="<div id='simulation_controls'></div>",l="<div id='simulation_message'></div>";e.innerHTML=`<div id='simulation_foreground'>${t}${i}${o}${a}${s}${r}${l}</div>`,S.time=document.querySelector("#simulation_time"),S.message=document.querySelector("#simulation_message"),S.canvas=document.querySelector("#simulation_canvas"),S.selector=document.querySelector("#simulation_selector"),S.controls=document.querySelector("#simulation_controls"),S.comment=document.querySelector("#simulation_comment");const c=()=>y(void 0,void 0,void 0,(function*(){(yield Promise.all([n.e(9016),n.e(4969)]).then(n.bind(n,4969))).Scheduler.Stop(),e.style.visibility="hidden",document.body.classList.remove("noscroll"),S.selector.innerHTML="",S.controls.innerHTML="",S.comment.innerHTML="",S.SetTime(""),S.SetMessage(""),S.on_closed()}));document.querySelector("#simulation_close").addEventListener("click",c),document.querySelector("#simulation_foreground").addEventListener("click",(e=>{e.stopPropagation()}),!1),document.querySelector("#simulation_foreground").addEventListener("touchstart",(e=>{e.stopPropagation()}),!1),e.addEventListener("click",c,!1),e.addEventListener("touchstart",c,!1);const d=document.querySelector("#simulation_topleft"),u=document.querySelector("#simulation_close");S.canvas.addEventListener("pointerdown",(()=>{d.style.opacity=u.style.opacity=S.controls.style.opacity="0"})),S.canvas.addEventListener("pointerup",(()=>{d.style.opacity=u.style.opacity=S.controls.style.opacity="1.0"}))}},2301:e=>{e.exports="data:image/svg+xml,%3csvg width='41.329' height='41.329' viewBox='0 0 10.935 10.935' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1.5 9.435 9.435 1.5M1.5 1.5l7.935 7.935' fill='none' stroke='gray' stroke-linecap='round' stroke-width='1.323'/%3e%3c/svg%3e"}}]);