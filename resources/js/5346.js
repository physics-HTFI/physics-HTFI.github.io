"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[5346],{5346:(t,s,e)=>{e.r(s),e.d(s,{spec:()=>u});var a=e(1550);let c,o;const[r,i,n,h,l]=[1,2,.1,1.6,3];class w{constructor(t,s){this.arrow_w=a.ay.Arrow(3),this.arrow_L=a.ay.Arrow(5),this.reset=()=>this.X=this.X0.clone(),this.proceed=(t,s)=>this.X=a.ME.RK4_free(t,this.X,this.dXdt,s),this.E=t=>(0,a.xV)(this.X,this.I0,1),this.X0=a.V.concat(new a.V(t.xg0),new a.V([1,0,0,0,1,0,0,0,1]),new a.V(t.vg0),new a.V(t.w0),new a.V(t.xc0)),this.abc=t.abc;const[e,c,o]=t.abc;this.I0=new a.M(3,3,[c*c+o*o,0,0,0,o*o+e*e,0,0,0,e*e+c*c]).scale3x3(.2),this.ball=a.ay.CollisionBall3D(1,t.color),this.ball.scaling=new a.V(t.abc).to_Vector3(),this.ball.bakeCurrentTransformIntoVertices(),this.contact=a.ay.Ball(.02,1),this.X=this.reset(),this.dXdt=a.ME.dXdt_roll(1,this.I0,this.abc,x,g,p,M)}draw(t){const{x:s,R:e,w:r,I:i}=(0,a.fN)(this.X,this.I0),n=this.X.slice3(18);this.ball.setPreTransformMatrix(e.to_Matrix()),this.ball.position=s.to_Vector3(),this.contact.position=n.to_Vector3(),this.arrow_w.setEnabled(c),this.arrow_L.setEnabled(o),a.ay.Set_ArrowPosition(this.arrow_w,s,r,.2),a.ay.Set_ArrowPosition(this.arrow_L,s,i.vec(r),7)}}let b=0;const d=(t,s,e)=>0==e?0:-r*t*t*Math.exp(-i*t*t)+n*s*s,x=(t,s)=>0==b?[0,0]:[-2*r*(t-i*t*t*t)*Math.exp(-i*t*t),2*n*s],g=(t,s)=>0==b?[0,0,0,0]:[-2*r*(1-(3*i+2*i)*t*t+2*i*i*t*t*t*t)*Math.exp(-i*t*t),0,0,2*n],M=(t,s)=>{const e=s.cross3x3().dat;return new a.M(1,3,t.dat).mat(new a.M(3,6,[1,0,0,e[0],e[1],e[2],0,1,0,e[3],e[4],e[5],0,0,1,e[6],e[7],e[8]]))},p=(t,s,e,c)=>{const o=e.cross3x3().dat,r=c.cross3x3().dat,i=new a.M(3,6,[1,0,0,o[0],o[1],o[2],0,1,0,o[3],o[4],o[5],0,0,1,o[6],o[7],o[8]]),n=new a.M(3,6,[0,0,0,r[0],r[1],r[2],0,0,0,r[3],r[4],r[5],0,0,0,r[6],r[7],r[8]]);return new a.M(1,3,s.dat).mat(i).plus(new a.M(1,3,t.dat).mat(n))},f=t=>()=>{if(b=t,a.jG.set_3D(5,1.75,.4,!0),0==b)a.ay.Ground(3);else{a.ay.Surface([-h,-l],[h,l],[Math.floor(20*h),Math.floor(20*l)]).getChildMeshes().forEach((t=>a.ay.UpdateZ(t,((t,s)=>((t,s)=>d(t,s,b))(t,s)))))}},_=(t,s)=>{const e=(s<0?-1:1)*Math.sqrt(1/i),a=d(e,0,2);return{xg0:[e,0,a+t],R0:[0,0,0],xc0:[e,0,a]}},u={title:"床の上を滑る運動",comment:"緑点は床との接点<br>床の太いグリッドの間隔: 1m",cases:[{title:"曲面（球、楕円体）",init:[Object.assign(Object.assign({},_(.3,1)),{vg0:[1,-2.5,0],w0:[1,0,0],abc:[.25,.27,.3],color:2}),Object.assign(Object.assign({},_(.25,-1)),{vg0:[1.5,-2.5,0],w0:[0,0,3],abc:[.25,.25,.25],color:0})],setup:f(1)},{title:"平面（同上）",init:[{xg0:[1,0,.4],vg0:[0,0,0],R0:[0,0,0],w0:[.01,.01,0],xc0:[1,0,0],abc:[.35,.3,.4],color:2},{xg0:[-1,0,.3],vg0:[0,0,0],R0:[0,0,0],w0:[3,3,0],xc0:[-1,0,0],abc:[.3,.3,.3],color:0}],setup:f(0)}],init:()=>{c=!1,o=!1},controls:[{type:"check",text:"角速度",checked:()=>c,change:t=>c=t,color:"#ff9b38"},{type:"check",text:"角運動量",checked:()=>o,change:t=>o=t,color:"#b76eff"}],generator:(t,s)=>new w(t,s)}}}]);