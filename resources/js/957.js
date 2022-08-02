"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[957],{957:(t,e,s)=>{s.r(e),s.d(e,{spec:()=>m});var a=s(1550),n=s(4088);let i,c,o,r,l=0;const h=.5;class f{constructor(t,e){if(this.slices=[new a.p2(1),new a.p2(1)],this.has_charge=t.has_charge,this.deviation=t.deviation,this.coeff=new a.V([0,0,t.coeff]),this.has_charge){const t=a.ay.Ball(.02,0),e=a.ay.Ball(.02,2),s=n.iC.Delta_Rho_max(this.deviation);t.position.z=-s,e.position.z=s}const s=[[],[]],f=[[],[]],d=a.ay.Arrow(0),u=a.ay.Arrow(1);for(let t=0;t<441;t++)for(let e=0;e<2;e++)s[e].push(0===t?d:d.createInstance("E"+t+e)),f[e].push(0===t?u:u.createInstance("B"+t+e));this.draw=t=>{i=l>0||!(l<0)&&i,this.slices[0].setEnabled(!0),this.slices[1].setEnabled(c),this.slices[0].setDirection(i?2:0),this.slices[1].setDirection(i?0:1),c?(this.slices[0].setOffset(i?[-.5+l,0,-l]:[-l,-.5-l,0]),this.slices[1].setOffset(i?[l,0,h-l]:[-.5-l,-l,0])):this.slices[0].setOffset(i?[0,0,-l]:[-l,0,0]),this.slices.forEach(((e,i)=>{e.getPos(21).forEach(((c,l)=>{if(s[i][l].setEnabled(e.frame.isEnabled()&&o),f[i][l].setEnabled(e.frame.isEnabled()&&r),!e.frame.isEnabled())return;const[h,d]=((t,e,s,a,i)=>{let[c,o]=n.iC.EB_Delta(t,e,s,a);if(!i){const e=n.iC.E_Delta_infty(t,s,a.negate123());c=c.plus(e)}return[c,o]})(c,t,this.deviation,this.coeff,this.has_charge);a.ay.Set_ArrowPosition(s[i][l],c,h,1),a.ay.Set_ArrowPosition(f[i][l],c,d,n.c)}))}));this.slices.forEach((t=>{if(!t.frame.isEnabled())return;const e=t.getPos(71),s=t.getDat(71);e.forEach(((t,e)=>{const a=this.has_charge?n.iC.Delta_Rho(t,this.deviation,this.coeff):0;n.iC.SetRGBA(s,e,(a+2.5)/5)})),t.updateDat()}))}}}let d;const u=()=>{void 0!==d&&(d.value=l.toString())},m={title:"電磁場の時間発展（電流なし）",comment:"電荷は＋が赤、-が青<br>１辺の長さ: 1m",cases:[{title:"z軸に平行な初期電場",setup:u,init:[{has_charge:!0,deviation:5,coeff:.03}]},{title:"電荷なし",setup:u,init:[{has_charge:!1,deviation:5,coeff:.03}]}],config:{time_multiplier:5e-10,start_wait:.2,restart_time:8},init:()=>{a.jG.set_3D(2,1.3,.35,!0),l=0,i=!0,o=!0,r=!0,l=0,c=!0,d=void 0},controls:[{type:"label",text:"電磁場"},[{type:"radio",name:"EB",text:"電場",checked:()=>o&&!r,changedToChecked:()=>[o,r]=[!0,!1],color:"#ff0000"},{type:"radio",name:"EB",text:"磁場",checked:()=>!o&&r,changedToChecked:()=>[o,r]=[!1,!0],color:"#00b700"},{type:"radio",name:"EB",text:"両方",checked:()=>o&&r,changedToChecked:()=>[o,r]=[!0,!0]}],{type:"label",text:"スライス"},[{type:"radio",name:"slice",text:"1面",checked:()=>!c,changedToChecked:()=>c=!1},{type:"radio",name:"slice",text:"2面",checked:()=>c,changedToChecked:()=>c=!0}],{type:"slider",text:"位置",value:()=>({value:l,min:-.5,max:h,step:.025}),input:(t,e)=>{l=t,d=e},change:()=>{}}],generator:(t,e)=>new f(t,e)}},4088:(t,e,s)=>{s.d(e,{c:()=>i,Zy:()=>c,f7:()=>o,fC:()=>r,iC:()=>l});var a=s(1008),n=s(1550);const i=299792458,c=8854187817e-21,o=2*Math.PI,r=Math.sqrt(2);class l{static EB_Delta(t,e,s,n){const c=t.len3();if(c<1e-5){const t=Math.tanh(s*i*e);return[n.scale(-1/o*-s*s*s*(1+2*(1-3*t*t)*(1-t*t))/3),a.V.Zero(3)]}const r=Math.tanh(s*c),l=Math.tanh(s*(c+i*e)),h=Math.tanh(s*(c-i*e)),f=.5*s*(1-l*l),d=.5*s*(1-h*h),u=-s*s*r*(1-r*r),m=-s*s*l*(1-l*l),_=-s*s*h*(1-h*h),p=u/c,E=-(m-2*u+_)/(2*c),g=(.5*(1+l)-2*(.5*(1+r))+.5*(1+h))/(2*c*c*c)-(f-2*(.5*s*(1-r*r))+d)/(2*c*c);return[n.scale(p-E+g).plus(t.scale((E-3*g)*n.dot36(t)/(c*c))).scale(-1/o),t.cross3(n).scale(-1/i*-1/o*(-(f-d)/c+(m-_))/(2*c*c))]}static E_Delta_init(t,e,s){const a=t.len3(),n=Math.tanh(e*a);if(a<1e-5)return s.scale(e*e*e/o);{const t=-e*e*n*(1-n*n);return s.scale(-1/o/a*t)}}static E_Delta_infty(t,e,s){const a=t.len3();if(a<1e-5)return s.scale(-1/o*-e*e*e/3);const n=Math.tanh(e*a),i=-e*e*n*(1-n*n),c=((.5*(1+n)-.5)/a-.5*e*(1-n*n))/a;return t.scale(s.dot36(t)/(a*a)).scale((3*c+i)/a).minus(s.scale(c/a)).scale(-1/o)}static Delta_Rho(t,e,s){const a=t.len3();if(a<1e-5)return 0;if(a>3/e)return 0;const n=Math.tanh(e*a);return t.dot36(s)/(o*a*a)*(-e*e*n*(1-n*n)/a- -e*e*e*(1-3*n*n)*(1-n*n))}static Delta_Rho_max(t){const e=e=>{const s=1e-5,n=l.Delta_Rho(new a.V([0,0,e]),t,new a.V([0,0,1]));return(l.Delta_Rho(new a.V([0,0,e+s]),t,new a.V([0,0,1]))-n)/s};let s=0,n=3/t;for(let t=0;t<20;t++){const t=(s+n)/2;console.log(t,e(t)),e(t)>0?n=t:s=t}return-e(s)<e(n)?s:n}static Delta(t,e){const s=t.len3();if(s<1e-5)return 2/o*e*e*e;if(s>3/e)return 0;const a=Math.tanh(e*s);return-2*(-e*e*a*(1-a*a))/(o*s)}static E_static_Delta(t,e,s){const n=t.len3();if(n<1e-5)return a.V.Zero(3);{const a=Math.tanh(e*n),i=.5*(1+a),r=.5*e*(1-a*a);return t.scale(s/(o*c)*(i-.5-n*r)/(n*n*n))}}static EB_LienardWiechert(t,e,s,n,r){const l=1/(2*o*c),h=1/i,f=h*h,d=t.minus(e),u=d.len3();if(u<1e-5)return[a.V.Zero(3),a.V.Zero(3)];const m=d.scale(1/u),_=m.minus(s.scale(h)),p=1/(1-f*s.sq3()),E=p*u*u*Math.pow(1-h*s.dot36(m),3),g=_.minus(d.scale(p*f).cross3(n.cross3(_))).scale(r*l/E);return[g,m.cross3(g).scale(h)]}static EB_ByParticle(t,e,s,n,c,o){let r=0,h=0,f=e;for(let s=0;s<10&&(h=e-1e-10*Math.pow(10,s),r=t.minus(n(h)).len3()-i*(e-h),!(r<0));s++){if(9==s)return{E:a.V.Zero(3),B:a.V.Zero(3),G:0};f=h}for(let s=0;s<10;s++){const s=(f+h)/2;r=t.minus(n(s)).len3()-i*(e-s),r<0?h=s:f=s}h=(h+f)/2;for(let s=0;s<5;s++){const s=n(h);r=t.minus(s).len3()-i*(e-h),h+=-r/(-t.minus(s).unit3().dot36(c(h))+i)}const[d,u]=l.EB_LienardWiechert(t,n(h),c(h),o(h),s);return{E:d,B:u,G:Math.abs(r)}}}l.SetRGBA=(t,e,s)=>{const a=s<.5?2*s:1,n=s<.5?2*s:2-2*s,i=s<.5?1:2-2*s,c=t=>Math.max(0,Math.min(1,t)),o=t=>Math.floor(255*c(t));t[4*e+0]=o(a),t[4*e+1]=o(n),t[4*e+2]=o(i),t[4*e+3]=o(.5-.5*c(n))},l.SetBallColor=(t,e)=>{const s=e<.5?2*e:1,a=e<.5?2*e:2-2*e,i=e<.5?1:2-2*e,c=t=>Math.max(0,Math.min(1,t)),o=t.material;o.ambientColor=new n.Wo(c(s),c(a),c(i)),o.alpha=1-o.ambientColor.g}}}]);