"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[4032],{4032:(t,s,e)=>{e.r(s),e.d(s,{spec:()=>X});var a=e(1550);let c,i;const[o,r,n,h,l]=[1,2,.1,1.6,3];class b{constructor(t,s){this.arrow_w=a.ay.Arrow(3),this.arrow_L=a.ay.Arrow(5),this.reset=()=>this.X=this.X0.clone(),this.proceed=(t,s)=>this.X=a.ME.RK4_free(t,this.X,this.dXdt,s),this.E=t=>(0,a.xV)(this.X,this.I0,1),this.X0=a.V.concat(new a.V(t.xg0),new a.V([1,0,0,0,1,0,0,0,1]),new a.V(t.vg0),new a.V(t.w0),new a.V(t.xc0)),this.abc=t.abc;const[e,c,i]=t.abc;this.I0=new a.M(3,3,[c*c+i*i,0,0,0,i*i+e*e,0,0,0,e*e+c*c]).scale3x3(.2),this.ball=a.ay.CollisionBall3D(1,t.color),this.ball.scaling=new a.V(t.abc).to_Vector3(),this.ball.bakeCurrentTransformIntoVertices(),this.contact=a.ay.Ball(.02,1),this.dXdt=a.ME.dXdt_roll(1,this.I0,this.abc,d,x,p,M),this.X=this.reset()}draw(t){(Math.abs(this.X.dat[0])>5||Math.abs(this.X.dat[1])>5)&&this.reset();const{x:s,R:e,w:o,I:r}=(0,a.fN)(this.X,this.I0),n=this.X.slice3(18);this.ball.setPreTransformMatrix(e.to_Matrix()),this.ball.position=s.to_Vector3(),this.contact.position=n.to_Vector3(),this.arrow_w.setEnabled(c),this.arrow_L.setEnabled(i),a.ay.Set_ArrowPosition(this.arrow_w,s,o,.25),a.ay.Set_ArrowPosition(this.arrow_L,s,r.vec(o),5)}}let w=0;const g=(t,s,e)=>0==e?0:-o*t*t*Math.exp(-r*t*t)+n*s*s,d=(t,s)=>0==w?[0,0]:[-2*o*(t-r*t*t*t)*Math.exp(-r*t*t),2*n*s],x=(t,s)=>0==w?[0,0,0,0]:[-2*o*(1-(3*r+2*r)*t*t+2*r*r*t*t*t*t)*Math.exp(-r*t*t),0,0,2*n],M=(t,s)=>{const e=s.dat;return new a.M(3,6,[1,0,0,0,-e[2],e[1],0,1,0,e[2],0,-e[0],0,0,1,-e[1],e[0],0])},p=(t,s,e,c)=>{const i=c.dat;return new a.M(3,6,[0,0,0,0,-i[2],i[1],0,0,0,i[2],0,-i[0],0,0,0,-i[1],i[0],0])},_=t=>()=>{if(w=t,0==w)a.jG.set_3D(8,1.75,.4,!0),a.ay.Ground(3);else{a.jG.set_3D(5,1.75,.4,!0);a.ay.Surface([-h,-l],[h,l],[Math.floor(20*h),Math.floor(20*l)]).getChildMeshes().forEach((t=>a.ay.UpdateZ(t,((t,s)=>((t,s)=>g(t,s,w))(t,s)))))}},f=(t,s)=>{const e=(s<0?-1:1)*Math.sqrt(1/r),a=g(e,0,2);return{xg0:[e,0,a+t],R0:[0,0,0],xc0:[e,0,a]}},V=(t,s)=>({vg0:s,w0:new a.V(s).cross3(new a.V([0,0,-t])).scale(1/Math.pow(t,2)).dat}),X={title:"床の上を転がる運動",comment:"緑点は床との接点<br>床の太いグリッドの間隔: 1m",cases:[{title:"曲面（球、楕円体）",init:[Object.assign(Object.assign(Object.assign({},f(.3,1)),V(.3,[1,-2.5,0])),{abc:[.25,.27,.3],color:2}),Object.assign(Object.assign(Object.assign({},f(.25,-1)),V(.25,[1.5,-2.5,0])),{abc:[.25,.25,.25],color:0})],setup:_(1)},{title:"平面（同上）",init:[Object.assign(Object.assign({xg0:[0,0,.4],R0:[0,0,0]},V(.4,[-.01,.01,0])),{xc0:[0,0,0],abc:[.35,.3,.4],color:2}),{xg0:[-1,-3,.3],R0:[0,0,0],vg0:[0,1,0],w0:[-1/.3,0,5],xc0:[-1,-3,0],abc:[.3,.3,.3],color:0},Object.assign(Object.assign({xg0:[-2,-3,.3],R0:[0,0,0]},V(.3,[0,1,0])),{xc0:[-2,-3,0],abc:[.3,.3,.3],color:0})],setup:_(0)}],init:()=>{c=!1,i=!1},controls:[{type:"check",text:"角速度",checked:()=>c,change:t=>c=t,color:"#ff9b38"},{type:"check",text:"角運動量",checked:()=>i,change:t=>i=t,color:"#b76eff"}],generator:(t,s)=>new b(t,s)}}}]);