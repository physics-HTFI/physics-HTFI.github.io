"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[3178],{3178:(t,e,a)=>{a.r(e),a.d(e,{spec:()=>o});var i=a(1550),n=a(2866);let s=0;const h=71,r=1/(-4*Math.PI),u=(t,e,a,i,s)=>{let h=0;return i.forEach((i=>{const s=e.minus(i.x).len3();h+=s>.01?r*i.h/s*(n.i.Delta_d(s+a*t,i.w)+n.i.Delta_d(s-a*t,i.w)):r*i.h*(n.i.Delta_dd(s+a*t,i.w)+n.i.Delta_dd(s-a*t,i.w))})),s.forEach((i=>{const s=e.minus(i.x).len3();h+=s>.01?r*i.h/(s*a)*(n.i.Delta(s+a*t,i.w)-n.i.Delta(s-a*t,i.w)):r*i.h/a*(n.i.Delta_d(s+a*t,i.w)-n.i.Delta_d(s-a*t,i.w))})),h};class d{constructor(t,e){this.dat=new Uint8Array(15123),this.v=t.v,this.peak_u=t.peak_u,this.peak_dudt=t.peak_dudt,this.frame=i.ay.Curve(0,0,5);const a=1+1/70;i.ay.UpdateCurve(this.frame,[-a,-a,0,a,-a,0,a,a,0,-a,a,0,-a,-a,0]);const r=2/70,{plane:d,texture:l}=i.ay.RawTexturePlane(this.dat,2+r,2+r,h,h,i.V.Zero(3));this.draw=t=>{for(let e=0;e<5041;e++){const a=e%h*2/70-1,r=2*Math.floor(e/h)/70-1,d=s,l=u(t,new i.V([a,r,d]),this.v,this.peak_u,this.peak_dudt);n.i.SetRGB(this.dat,e,(l+3)/6)}this.frame.position.z=s,d.position.z=s,l.update(this.dat)}}}const l=()=>i.jG.set_3D(3,.5,.3),o={title:"3次元波動方程式の解",comment:"赤色は＋、青色は－",cases:[{title:"初期変位のみ（＋が1つ）",setup:l,init:[{v:.6,peak_u:[{x:new i.V([0,0,0]),h:.3,w:5}],peak_dudt:[]}],config:{restart_time:3.5}},{title:"同（＋が2つ）",setup:l,init:[{v:.6,peak_u:[{x:new i.V([-.5,.5,0]),h:.3,w:5},{x:new i.V([.5,-.5,0]),h:.3,w:5}],peak_dudt:[]}],config:{restart_time:4.5}},{title:"同（＋と－）",setup:l,init:[{v:.6,peak_u:[{x:new i.V([-.5,.5,0]),h:.3,w:5},{x:new i.V([.5,-.5,0]),h:-.3,w:5}],peak_dudt:[]}],config:{restart_time:4.5}},{title:"初期速度（＋が1つ）",setup:l,init:[{v:.6,peak_u:[],peak_dudt:[{x:new i.V([0,0,0]),h:.5,w:10}]}],config:{restart_time:3}},{title:"同（＋が2つ）",setup:l,init:[{v:.6,peak_u:[],peak_dudt:[{x:new i.V([-.5,.5,0]),h:.5,w:10},{x:new i.V([.5,-.5,0]),h:.5,w:10}]}],config:{restart_time:4}},{title:"同（＋と－）",setup:l,init:[{v:.6,peak_u:[],peak_dudt:[{x:new i.V([-.5,.5,0]),h:.5,w:10},{x:new i.V([.5,-.5,0]),h:-.5,w:10}]}],config:{restart_time:4}}],config:{start_wait:.2},init:()=>{s=0},controls:[{type:"slider",text:"スライス位置",value:()=>({value:s,min:0,max:1,step:1/70}),input:t=>s=t}],generator:(t,e)=>new d(t,e)}},2866:(t,e,a)=>{a.d(e,{i:()=>i});class i{}i.Delta_ii=(t,e)=>.5*(1/e*Math.log(Math.cosh(e*t))+t),i.Delta_i=(t,e)=>.5*(1+Math.tanh(e*t)),i.Delta=(t,e)=>{const a=Math.tanh(e*t);return e/2*(1-a*a)},i.Delta_d=(t,e)=>{const a=Math.tanh(e*t);return-e*e*a*(1-a*a)},i.Delta_dd=(t,e)=>{const a=Math.tanh(e*t);return-e*e*e*(1-3*a*a)*(1-a*a)},i.Delta_ddd=(t,e)=>{const a=Math.tanh(e*t);return 4*e*e*e*e*a*(2-3*a*a)*(1-a*a)},i.SetRGB=(t,e,a)=>{const i=a<.5?2*a:1,n=a<.5?2*a:2-2*a,s=a<.5?1:2-2*a,h=t=>Math.max(0,Math.min(255,Math.floor(256*t)));t[3*e+0]=h(i),t[3*e+1]=h(n),t[3*e+2]=h(s)}}}]);