"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[4339],{4339:(t,e,s)=>{s.r(e),s.d(e,{spec:()=>u});var i=s(1550),h=s(2866);const a=(t,e,s,i)=>{const a=2*Math.PI/i;return t<2.3*i?Math.sin(a*t)*s.h*h.i.Delta(e,s.w):0},r=(t,e,s,i)=>t<i?s.h*h.i.Delta(e,s.w):0;class n{constructor(t,e){this.line=i.ay.Curve(-c,c,100,0),this.arrow=[],this.draw=t=>{i.ay.UpdateZ(this.line,((e,s)=>this.z+(0==this.type?((t,e,s,i,a)=>{const r=(Math.min(t,2.3*a)-0)/100,n=2*Math.PI/a;let o=0;for(let a=0;a<=100;a++){const c=0+a*r;o+=r*Math.sin(n*c)*.5*i.h/s*(h.i.Delta_i(e+s*(t-c),i.w)-h.i.Delta_i(e-s*(t-c),i.w))}return o})(t,e,this.v,this.source,this.T):((t,e,s,i,a)=>{let r=0;const n=.5/(s*s)*i.h,o=t-Math.min(t,a);return r+=n*(h.i.Delta_ii(e-i.x+s*t,i.w)+h.i.Delta_ii(e-i.x-s*t,i.w)),r+=-n*(h.i.Delta_ii(e-i.x+s*o,i.w)+h.i.Delta_ii(e-i.x-s*o,i.w)),r})(t,e,this.v,this.source,this.T))));for(let e=0;e<l;e++){const s=2*c*e/(l-1)-c,h=0==this.type?a(t,s,this.source,this.T):r(t,s,this.source,this.T);i.ay.Set_ArrowPosition(this.arrow[e],new i.V([s,0,this.z]),new i.V([0,0,h]),.7)}},this.z=t.z,this.v=t.v,this.type=t.type,this.source=t.source,this.T=t.T;for(let t=0;t<l;t++)this.arrow.push(i.ay.Arrow(2))}}const o=()=>{i.jG.set_2D(2*c),i.ay.Ground(2)},c=.5,l=80,u={title:"横波の伝播（外力あり）",comment:"青矢印は外力",cases:[{title:"周期的な外力",setup:o,init:[{z:0,v:.1,type:0,source:{x:0,h:c/20,w:10/c},T:1.5}],config:{restart_time:8}},{title:"時間変化しない外力",setup:o,init:[{z:0,v:.1,type:1,source:{x:0,h:c/20,w:10/c},T:1.5}],config:{restart_time:7}}],generator:(t,e)=>new n(t,e)}},2866:(t,e,s)=>{s.d(e,{i:()=>i});class i{}i.Delta_ii=(t,e)=>.5*(1/e*Math.log(Math.cosh(e*t))+t),i.Delta_i=(t,e)=>.5*(1+Math.tanh(e*t)),i.Delta=(t,e)=>{const s=Math.tanh(e*t);return e/2*(1-s*s)},i.Delta_d=(t,e)=>{const s=Math.tanh(e*t);return-e*e*s*(1-s*s)},i.Delta_dd=(t,e)=>{const s=Math.tanh(e*t);return-e*e*e*(1-3*s*s)*(1-s*s)},i.Delta_ddd=(t,e)=>{const s=Math.tanh(e*t);return 4*e*e*e*e*s*(2-3*s*s)*(1-s*s)},i.SetRGB=(t,e,s)=>{const i=s<.5?2*s:1,h=s<.5?2*s:2-2*s,a=s<.5?1:2-2*s,r=t=>Math.max(0,Math.min(255,Math.floor(256*t)));t[3*e+0]=r(i),t[3*e+1]=r(h),t[3*e+2]=r(a)}}}]);