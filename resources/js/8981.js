"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[8981],{8981:(t,e,s)=>{s.r(e),s.d(e,{spec:()=>d});var a=s(1550),i=s(2866);let l,c,h=0;const n=1/(4*Math.PI),r=new a.V([0,0,1]);class o{constructor(t,e){this.slices=[new a.p2(2),new a.p2(2)],this.vpara=t.vpara,this.vperp=t.vperp,this.type=t.type,this.source=t.source,this.T=t.T;const s=[[],[]],o=a.ay.Ball(.02,2);for(let t=0;t<441;t++)s[0].push(0===t?o:o.createInstance("ball_0"+t)),s[1].push(o.createInstance("ball_1"+t));this.draw=t=>{l=h>0||!(h<0)&&l,this.slices[0].setEnabled(!0),this.slices[1].setEnabled(c),this.slices[0].setDirection(l?2:0),this.slices[1].setDirection(l?0:1),c?(this.slices[0].setOffset(l?[-1+h,0,-h]:[-h,-1-h,0]),this.slices[1].setOffset(l?[h,0,1-h]:[-1-h,-h,0])):this.slices[0].setOffset(l?[0,0,h]:[-h,0,0]),this.slices.forEach(((e,l)=>{e.getPos(21).forEach(((c,h)=>{if(s[l][h].setEnabled(e.frame.isEnabled()),!e.frame.isEnabled())return;const o=((t,e,s,l,c,h,o)=>{const p=e.len3(),u=p<.001?a.V.Zero(3):e.unit3(),d=Math.max(0,t-(p+5/h.w)/l),w=(Math.min(t,t-(p-5/h.w)/l)-d)/30,D=2*Math.PI/o;let _=a.V.Zero(3);const f=0==c?s:l;for(let e=0;e<=30;e++){const a=d+e*w,o=Math.cos(D*a),v=t-a;if(0==c||1==c){let t=0;p<.001||(t+=h.h*w*o*n/(f*p*p)*(i.i.Delta(p+f*v,h.w)-i.i.Delta(p-f*v,h.w)),t+=-h.h*w*o*n/(f*p)*(i.i.Delta_d(p+f*v,h.w)-i.i.Delta_d(p-f*v,h.w))),_=0==c?_.plus(u.scale(t)):_.plus(r.cross3(u).scale(t))}else if(p<.001){const t=(i.i.Delta_d(s*v,h.w)/s+2*i.i.Delta_d(l*v,h.w)/l)/(-6*Math.PI);_=_.plus(r.scale(t*h.h*w*o))}else{let t=0,e=0,a=0,c=0;const d=p*p,D=d*p,f=(i.i.Delta_ii(p+s*v,h.w)-i.i.Delta_ii(p-s*v,h.w))/D,M=(i.i.Delta_i(p+s*v,h.w)-i.i.Delta_i(p-s*v,h.w))/d,m=(i.i.Delta(p+s*v,h.w)-i.i.Delta(p-s*v,h.w))/p,y=(i.i.Delta_ii(p+l*v,h.w)-i.i.Delta_ii(p-l*v,h.w))/D,b=(i.i.Delta_i(p+l*v,h.w)-i.i.Delta_i(p-l*v,h.w))/d,x=(i.i.Delta(p+l*v,h.w)-i.i.Delta(p-l*v,h.w))/p;e+=(-3*f+3*M-m)/s,e+=(3*y-3*b+x)/l,e*=h.h*w*o,c+=(f-M)/s,c+=(-y+b-x)/l,c*=h.h*w*o,_=_.plus(u.scale(n*(t+e)*u.dot36(r))).plus(r.scale(n*(a+c)))}}return _})(t,c,this.vpara,this.vperp,this.type,this.source,this.T);s[l][h].position=c.plus(o).to_Vector3()}))}))}}}let p;const u=()=>{a.jG.set_3D(3.5,.8,.35),h=0,l=!0,c=!0,void 0!==p&&(p.value=h.toString())},d={title:"ナヴィエ方程式の解（外力あり）",comment:"",cases:[{title:"周期的な外力（z方向）",setup:u,init:[{vpara:1,vperp:.5,type:2,source:{x:a.V.Zero(3),h:.3,w:5},T:1.5}]},{title:"同（縦波のみ）",setup:u,init:[{vpara:1,vperp:.5,type:0,source:{x:a.V.Zero(3),h:.3,w:3},T:1.5}]},{title:"同（横波のみ）",setup:u,init:[{vpara:1,vperp:.5,type:1,source:{x:a.V.Zero(3),h:.8,w:2},T:1.5}]}],init:()=>{p=void 0},controls:[{type:"label",text:"スライス"},[{type:"radio",name:"slice",text:"1面",checked:()=>!c,changedToChecked:()=>c=!1},{type:"radio",name:"slice",text:"2面",checked:()=>c,changedToChecked:()=>c=!0}],{type:"slider",text:"位置",value:()=>({value:h,min:-1,max:1,step:.05}),input:(t,e)=>{h=t,p=e}}],generator:(t,e)=>new o(t,e)}},2866:(t,e,s)=>{s.d(e,{i:()=>a});class a{}a.Delta_ii=(t,e)=>.5*(1/e*Math.log(Math.cosh(e*t))+t),a.Delta_i=(t,e)=>.5*(1+Math.tanh(e*t)),a.Delta=(t,e)=>{const s=Math.tanh(e*t);return e/2*(1-s*s)},a.Delta_d=(t,e)=>{const s=Math.tanh(e*t);return-e*e*s*(1-s*s)},a.Delta_dd=(t,e)=>{const s=Math.tanh(e*t);return-e*e*e*(1-3*s*s)*(1-s*s)},a.Delta_ddd=(t,e)=>{const s=Math.tanh(e*t);return 4*e*e*e*e*s*(2-3*s*s)*(1-s*s)},a.SetRGB=(t,e,s)=>{const a=s<.5?2*s:1,i=s<.5?2*s:2-2*s,l=s<.5?1:2-2*s,c=t=>Math.max(0,Math.min(255,Math.floor(256*t)));t[3*e+0]=c(a),t[3*e+1]=c(i),t[3*e+2]=c(l)}}}]);