"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[2034],{2034:(t,s,i)=>{i.r(s),i.d(s,{spec:()=>x});var e=i(1550);let n;const[o,a]=[.3,5],h=t=>o*Math.cos(a*t),c=t=>-o*a*Math.sin(a*t),r=t=>-o*a*a*Math.cos(a*t),l={M:new e.V([1,1,1]),F_ext:(t,s)=>e.g.scale(1),diff_G:(t,s)=>{const[i,n]=s.split3(),o=new e.V([0,0,h(t)]),a=new e.V([0,0,c(t)]),l=new e.V([0,0,r(t)]),d=i.minus(o).scale(1),w=n.minus(a).scale(1);return{G_x:new e.M(1,3,d.dat),ddt_G_t:new e.V([-w.dot36(a)-d.dot36(l)]),ddt_G_x:new e.M(1,3,w.dat),G_xx:void 0,G_tt:void 0,G_tx:void 0}}};class d{constructor(t,s){this.dXdt=(t,s)=>(0,e.iO)(s,this.F(t,s),1),this.line=e.ay.Curve(0,1,2),this.arrow_g=e.ay.Arrow(0),this.arrow_c=e.ay.Arrow(0),this.reset=()=>this.X=this.X0.clone(),this.proceed=(t,s)=>this.X=e.ME.RK4_free(t,this.X,this.dXdt,s),this.E=t=>this.X.slice3(0).minus(new e.V([0,0,h(t)])).len3(),this.X0=new e.V([...t.x0,...t.v0]),this.X=this.reset(),this.F=e.ME.F_constrained(l),this.ball=e.ay.Ball(.1,s,!1)}draw(t){const s=this.X.slice3(0);this.ball.position=s.to_Vector3(),this.arrow_g.setEnabled(n),this.arrow_c.setEnabled(n);const i=e.g.scale(1),o=this.F(t,this.X).minus(i);e.ay.Set_ArrowPosition(this.arrow_g,s,i,.01),e.ay.Set_ArrowPosition(this.arrow_c,s,o,.01);const a=h(t);e.ay.UpdateCurve(this.line,[0,0,a,...this.X.slice3(0).dat]),w.position.z=a,null!==_&&(_.position.z=a)}}let w,_=null;const u=()=>{e.jG.set_2D(4),e.ay.Ground(2),_=null,w=e.ay.FixedPoint(.04,!1)},x={title:"強制振り子",comment:"球の半径: 1m",cases:[{title:"3次元",setup:()=>{e.jG.set_3D(3.5,0,.4),_=e.ay.SphereGround(1,.5,10,20),w=e.ay.FixedPoint(.05,!0)},init:[{x0:[1*Math.cos(1.1),0,1*-Math.sin(1.1)+o],v0:[0,1,0]},{x0:[1*Math.cos(1.2),0,1*-Math.sin(1.2)+o],v0:[0,1,0]},{x0:[1*Math.cos(1.3),0,1*-Math.sin(1.3)+o],v0:[0,1,0]},{x0:[1*Math.cos(1.4),0,1*-Math.sin(1.4)+o],v0:[0,1,0]},{x0:[1*Math.cos(1.5),0,1*-Math.sin(1.5)+o],v0:[0,1,0]}]},{title:"2次元",setup:u,init:[{x0:[0,0,-1+o],v0:[.1,0,0]},{x0:[0,0,-1+o],v0:[.3,0,0]},{x0:[0,0,-1+o],v0:[.5,0,0]}]},{title:"同（長さが異なると共振しない）",setup:u,init:[{x0:[0,0,-1+o],v0:[.5,0,0]},{x0:[0,0,-.5],v0:[.5,0,0]}]}],init:()=>n=!1,controls:[{type:"check",text:"力を表示",checked:()=>n,change:t=>n=t,color:"#f00"}],generator:(t,s)=>new d(t,s)}}}]);