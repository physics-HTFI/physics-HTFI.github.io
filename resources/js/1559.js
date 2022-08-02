"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[1559],{1559:(t,s,e)=>{e.r(s),e.d(s,{spec:()=>x});var i=e(1550);const[n,h]=[2,1],a={num_constraints:1,M:new i.V([h,h,h]),G:(t,s,e)=>{const i=e.first_half();return{G:n-i.len3(),G_t:0,G_x:i.unit3().negate123()}}};class c{constructor(t,s){this.reset=()=>this.X=this.X0.clone(),this.draw=t=>this.ball.position=this.X.to_Vector3(),this.proceed=(t,s)=>this.X=i.ME.RK4_collision(t,this.X,i.ME.dXdt_g,s,a),this.E=t=>(0,i.uZ)(this.X,h),this.ball=i.ay.Ball(.15,s),this.X0=new i.V([...t.x0,...t.v0]),this.X=this.reset()}}const o=()=>{i.jG.set_2D(7),i.ay.Ground(2),i.ay.Circle(n)},v=()=>{i.jG.set_3D(6,0,.35),i.ay.SphereGround(n,.5,10,20)},x={title:"球面との衝突",comment:`半径 ${n}m`,cases:[{title:"3次元（高速）",setup:v,init:[{x0:[.3,0,.9],v0:[0,4,0]},{x0:[.3,0,.6],v0:[0,4,0]},{x0:[.3,0,.3],v0:[0,4,0]},{x0:[.3,0,0],v0:[0,4,0]}]},{title:"同（低速）",setup:v,init:[{x0:[-.9*n*Math.sin(.2),0,-.9*n*Math.cos(.2)],v0:[0,4,0]},{x0:[-.9*n*Math.sin(.4),0,-.9*n*Math.cos(.4)],v0:[0,4,0]},{x0:[-.9*n*Math.sin(.6),0,-.9*n*Math.cos(.6)],v0:[0,4,0]},{x0:[-.9*n*Math.sin(.8),0,-.9*n*Math.cos(.8)],v0:[0,4,0]}]},{title:"2次元（同じ高さ）",setup:o,init:[{x0:[.05,0,.3],v0:[0,0,0]},{x0:[.1,0,.3],v0:[0,0,0]},{x0:[.15,0,.3],v0:[0,0,0]},{x0:[.2,0,.3],v0:[0,0,0]},{x0:[.25,0,.3],v0:[0,0,0]},{x0:[.3,0,.3],v0:[0,0,0]}]},{title:"同（異なる高さ）",setup:o,init:[{x0:[.1,0,.75],v0:[0,0,0]},{x0:[.1,0,.5],v0:[0,0,0]},{x0:[.1,0,.25],v0:[0,0,0]},{x0:[.1,0,0],v0:[0,0,0]},{x0:[.1,0,-.25],v0:[0,0,0]},{x0:[.1,0,-.5],v0:[0,0,0]}]}],generator:(t,s)=>new c(t,s)}}}]);