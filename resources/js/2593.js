"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[2593],{2593:(t,s,a)=>{a.r(s),a.d(s,{spec:()=>u});var e=a(1550);const i=(t,s)=>Math.tanh(s[2]*Math.cos(s[3]*t)),h=(t,s)=>-s[2]*s[3]*Math.sin(s[3]*t)/Math.pow(Math.cosh(s[2]*Math.cos(s[3]*t)),2),n=(t,s,a,e)=>e[0]*Math.sin(e[1]*t)*i(s,e)*i(a,e),o=(t,s,a,e)=>e[0]*e[1]*Math.cos(e[1]*t)*i(s,e)*i(a,e),c=(t,s,a,e)=>{const n=e[0]*Math.sin(e[1]*t);return[n*h(s,e)*i(a,e),n*i(s,e)*h(a,e)]};class r{constructor(t,s){this.Gs={num_constraints:5,M:new e.V([1,1,1]),G:(t,s,a)=>((t,s,a,i)=>{const[h,r,x]=a.dat;return 0==t?{G:x-n(s,h,r,i),G_t:-o(s,h,r,i),G_x:new e.V([...c(s,h,r,i).map((t=>-t)),1])}:1==t?{G:h+2,G_t:0,G_x:new e.V([1,0,0])}:2==t?{G:2-h,G_t:0,G_x:new e.V([-1,0,0])}:3==t?{G:r+2,G_t:0,G_x:new e.V([0,1,0])}:4==t?{G:2-r,G_t:0,G_x:new e.V([0,-1,0])}:void 0})(t,s,a,this.a)},this.reset=()=>this.X=this.X0.clone(),this.proceed=(t,s)=>this.X=e.ME.RK4_collision(t,this.X,e.ME.dXdt_g,s,this.Gs),this.E=t=>(0,e.uZ)(this.X,1),this.a=t.a,this.ball=e.ay.Ball(.1,s),this.is_master=0==s,this.X0=new e.V([...t.x0,...t.v0]),this.X=this.reset()}draw(t){this.ball.position=this.X.to_Vector3(),this.is_master&&x.forEach((s=>e.ay.UpdateZ(s,((s,a)=>n(t,s,a,this.a)))))}}let x;const G=()=>{e.jG.set_2D(4.6,new e.V([0,0,1]).to_Vector3()),e.ay.Ground(2),x=[e.ay.Curve(-2,2,200)]},v=()=>{e.jG.set_3D(6,.4,.4),x=e.ay.Surface([-2,-2],[2,2],[30,30],8).getChildMeshes().map((t=>t))},l=[.1,6,2,Math.PI],_=[.15,2,10,Math.PI],u={title:"変形する床との衝突",comment:"太いグリッドの間隔: 1m",cases:[{title:"3次元（滑らか）",setup:v,init:[{x0:[-.9,0,.8],v0:[.1,.1,0],a:l},{x0:[-.3,0,.8],v0:[.1,.1,0],a:l},{x0:[.3,0,.8],v0:[.1,.1,0],a:l},{x0:[.9,0,.8],v0:[.1,.1,0],a:l}]},{title:"同（角ばった）",setup:v,init:[{x0:[-.9,0,.8],v0:[.1,.1,0],a:_},{x0:[-.3,0,.8],v0:[.1,.1,0],a:_},{x0:[.3,0,.8],v0:[.1,.1,0],a:_},{x0:[.9,0,.8],v0:[.1,.1,0],a:_}]},{title:"2次元（滑らか）",setup:G,init:[{x0:[-.9,0,.8],v0:[.1,0,0],a:l},{x0:[-.3,0,.8],v0:[.1,0,0],a:l},{x0:[.3,0,.8],v0:[.1,0,0],a:l},{x0:[.9,0,.8],v0:[.1,0,0],a:l}]},{title:"同（角ばった）",setup:G,init:[{x0:[-.9,0,.8],v0:[.1,0,0],a:_},{x0:[-.3,0,.8],v0:[.1,0,0],a:_},{x0:[.3,0,.8],v0:[.1,0,0],a:_},{x0:[.9,0,.8],v0:[.1,0,0],a:_}]}],generator:(t,s)=>new r(t,s)}}}]);