"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[2306],{2306:(t,e,s)=>{s.r(e),s.d(e,{spec:()=>p});var a=s(1550),n=s(4088);let c,i,r,o,l=0;const h=.5,u=100;class d{constructor(t,e){this.G=0,this.slices=[new a.p2(1),new a.p2(1)],this.orbit=a.ay.Curve(0,0,u,12),this.E=t=>this.G,this.beta=t.beta,this.R=t.R;const s=(d=this.beta,f=this.R,t=>{const e=n.c*d/f;return new a.V([f*Math.cos(e*t),f*Math.sin(e*t),0])});var d,f;const m=((t,e)=>s=>{const c=n.c*t/e;return new a.V([-e*c*Math.sin(c*s),e*c*Math.cos(c*s),0])})(this.beta,this.R),p=((t,e)=>s=>{const c=n.c*t/e;return new a.V([-e*c*c*Math.cos(c*s),-e*c*c*Math.sin(c*s),0])})(this.beta,this.R),M=new Array(300);for(let t=0;t<u;t++){const e=2*Math.PI*t/99;M[3*t+0]=this.R*Math.cos(e),M[3*t+1]=this.R*Math.sin(e),M[3*t+2]=0}a.ay.UpdateCurve(this.orbit,M);const E=a.ay.Ball(.02,0),b=[[],[]],w=[[],[]],_=a.ay.Arrow(0),y=a.ay.Arrow(1);for(let t=0;t<961;t++)b[0].push(0===t?_:_.createInstance("hE"+t)),w[0].push(0===t?y:y.createInstance("hB"+t)),b[1].push(_.createInstance("vE"+t)),w[1].push(y.createInstance("vB"+t));this.draw=t=>{i=l>0||!(l<0)&&i,this.G=0;const e=s(t);E.position=e.to_Vector3(),this.slices[0].setEnabled(!0),this.slices[1].setEnabled(c),this.slices[0].setDirection(i?2:0),this.slices[1].setDirection(i?0:1),c?(this.slices[0].setOffset(i?[-.5+l,0,-l]:[-l,-.5-l,0]),this.slices[1].setOffset(i?[l,0,h-l]:[-.5-l,-l,0])):this.slices[0].setOffset(i?[0,0,l]:[-l,0,0]);this.slices.forEach(((c,i)=>{c.getPos(31).forEach(((l,h)=>{if(b[i][h].setEnabled(c.frame.isEnabled()&&r),w[i][h].setEnabled(c.frame.isEnabled()&&o),!c.frame.isEnabled())return;const{E:u,B:d,G:f}=e.minus(l).len3()<.08?{E:a.V.Zero(3),B:a.V.Zero(3),G:0}:n.iC.EB_ByParticle(l,t,6e-14,s,m,p);a.ay.Set_ArrowPosition(b[i][h],l,u,1),a.ay.Set_ArrowPosition(w[i][h],l,d,n.c),this.G+=f}))}))}}}let f;const m=()=>{void 0!==f&&(f.value=l.toString())},p={title:"点電荷の円運動",comment:"電荷の近傍は描画していない<br>1辺の長さ: 1m",cases:[{title:"速度: 光速の0.6倍、半径: 0.1m",setup:m,init:[{beta:.6,R:.1}]},{title:"速度: 光速の0.7倍、半径: 0.1m",setup:m,init:[{beta:.8,R:.1}]}],config:{time_multiplier:5e-10},init:()=>{a.jG.set_3D(2,1,.3,!0),l=0,c=!0,i=!0,r=!0,o=!0,f=void 0},controls:[{type:"label",text:"電磁場"},[{type:"radio",name:"EB",text:"電場",checked:()=>r&&!o,changedToChecked:()=>[r,o]=[!0,!1],color:"#ff0000"},{type:"radio",name:"EB",text:"磁場",checked:()=>!r&&o,changedToChecked:()=>[r,o]=[!1,!0],color:"#00b700"},{type:"radio",name:"EB",text:"両方",checked:()=>r&&o,changedToChecked:()=>[r,o]=[!0,!0]}],{type:"label",text:"スライス"},[{type:"radio",name:"slice",text:"1面",checked:()=>!c,changedToChecked:()=>c=!1},{type:"radio",name:"slice",text:"2面",checked:()=>c,changedToChecked:()=>c=!0}],{type:"slider",text:"位置",value:()=>({value:l,min:-.5,max:h,step:h/30}),input:(t,e)=>{l=t,f=e}}],generator:(t,e)=>new d(t,e)}},4088:(t,e,s)=>{s.d(e,{c:()=>c,Zy:()=>i,f7:()=>r,fC:()=>o,iC:()=>l});var a=s(1008),n=s(1550);const c=299792458,i=8854187817e-21,r=2*Math.PI,o=Math.sqrt(2);class l{static EB_Delta(t,e,s,n){const i=t.len3();if(i<1e-5){const t=Math.tanh(s*c*e);return[n.scale(-1/r*-s*s*s*(1+2*(1-3*t*t)*(1-t*t))/3),a.V.Zero(3)]}const o=Math.tanh(s*i),l=Math.tanh(s*(i+c*e)),h=Math.tanh(s*(i-c*e)),u=.5*s*(1-l*l),d=.5*s*(1-h*h),f=-s*s*o*(1-o*o),m=-s*s*l*(1-l*l),p=-s*s*h*(1-h*h),M=f/i,E=-(m-2*f+p)/(2*i),b=(.5*(1+l)-2*(.5*(1+o))+.5*(1+h))/(2*i*i*i)-(u-2*(.5*s*(1-o*o))+d)/(2*i*i);return[n.scale(M-E+b).plus(t.scale((E-3*b)*n.dot36(t)/(i*i))).scale(-1/r),t.cross3(n).scale(-1/c*-1/r*(-(u-d)/i+(m-p))/(2*i*i))]}static E_Delta_init(t,e,s){const a=t.len3(),n=Math.tanh(e*a);if(a<1e-5)return s.scale(e*e*e/r);{const t=-e*e*n*(1-n*n);return s.scale(-1/r/a*t)}}static E_Delta_infty(t,e,s){const a=t.len3();if(a<1e-5)return s.scale(-1/r*-e*e*e/3);const n=Math.tanh(e*a),c=-e*e*n*(1-n*n),i=((.5*(1+n)-.5)/a-.5*e*(1-n*n))/a;return t.scale(s.dot36(t)/(a*a)).scale((3*i+c)/a).minus(s.scale(i/a)).scale(-1/r)}static Delta_Rho(t,e,s){const a=t.len3();if(a<1e-5)return 0;if(a>3/e)return 0;const n=Math.tanh(e*a);return t.dot36(s)/(r*a*a)*(-e*e*n*(1-n*n)/a- -e*e*e*(1-3*n*n)*(1-n*n))}static Delta_Rho_max(t){const e=e=>{const s=1e-5,n=l.Delta_Rho(new a.V([0,0,e]),t,new a.V([0,0,1]));return(l.Delta_Rho(new a.V([0,0,e+s]),t,new a.V([0,0,1]))-n)/s};let s=0,n=3/t;for(let t=0;t<20;t++){const t=(s+n)/2;console.log(t,e(t)),e(t)>0?n=t:s=t}return-e(s)<e(n)?s:n}static Delta(t,e){const s=t.len3();if(s<1e-5)return 2/r*e*e*e;if(s>3/e)return 0;const a=Math.tanh(e*s);return-2*(-e*e*a*(1-a*a))/(r*s)}static E_static_Delta(t,e,s){const n=t.len3();if(n<1e-5)return a.V.Zero(3);{const a=Math.tanh(e*n),c=.5*(1+a),o=.5*e*(1-a*a);return t.scale(s/(r*i)*(c-.5-n*o)/(n*n*n))}}static EB_LienardWiechert(t,e,s,n,o){const l=1/(2*r*i),h=1/c,u=h*h,d=t.minus(e),f=d.len3();if(f<1e-5)return[a.V.Zero(3),a.V.Zero(3)];const m=d.scale(1/f),p=m.minus(s.scale(h)),M=1/(1-u*s.sq3()),E=M*f*f*Math.pow(1-h*s.dot36(m),3),b=p.minus(d.scale(M*u).cross3(n.cross3(p))).scale(o*l/E);return[b,m.cross3(b).scale(h)]}static EB_ByParticle(t,e,s,n,i,r){let o=0,h=0,u=e;for(let s=0;s<10&&(h=e-1e-10*Math.pow(10,s),o=t.minus(n(h)).len3()-c*(e-h),!(o<0));s++){if(9==s)return{E:a.V.Zero(3),B:a.V.Zero(3),G:0};u=h}for(let s=0;s<10;s++){const s=(u+h)/2;o=t.minus(n(s)).len3()-c*(e-s),o<0?h=s:u=s}h=(h+u)/2;for(let s=0;s<5;s++){const s=n(h);o=t.minus(s).len3()-c*(e-h),h+=-o/(-t.minus(s).unit3().dot36(i(h))+c)}const[d,f]=l.EB_LienardWiechert(t,n(h),i(h),r(h),s);return{E:d,B:f,G:Math.abs(o)}}}l.SetRGBA=(t,e,s)=>{const a=s<.5?2*s:1,n=s<.5?2*s:2-2*s,c=s<.5?1:2-2*s,i=t=>Math.max(0,Math.min(1,t)),r=t=>Math.floor(255*i(t));t[4*e+0]=r(a),t[4*e+1]=r(n),t[4*e+2]=r(c),t[4*e+3]=r(.5-.5*i(n))},l.SetBallColor=(t,e)=>{const s=e<.5?2*e:1,a=e<.5?2*e:2-2*e,c=e<.5?1:2-2*e,i=t=>Math.max(0,Math.min(1,t)),r=t.material;r.ambientColor=new n.Wo(i(s),i(a),i(c)),r.alpha=1-r.ambientColor.g}}}]);