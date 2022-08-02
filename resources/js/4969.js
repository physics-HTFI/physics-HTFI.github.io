"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[4969],{2755:(t,e,i)=>{i.d(e,{j:()=>d});i(4012);var s=i(3339),a=i(4391),r=i(4808),n=i(8362),h=i(7659),c=i(3839),o=i(8259),m=(i(1762),i(786)),u=i(8363);const d=new class{constructor(){this.is_3D=!0,this.engine=new s.D(u.D.canvas,!0,{preserveDrawingBuffer:!0,stencil:!0}),this.scene=new a.x(this.engine),this.scene.useRightHandedSystem=!0,this.scene.clearColor=new n.HE(1,1,1,1),this.scene.ambientColor=n.Wo.White(),this.camera=new c.Y("camera",0,0,10,r.P.Zero(),this.scene),this.camera.upVector=new r.P(0,0,1),this.camera.panningInertia=0,this.camera.panningSensibility=0,this.camera.mode=h.V.PERSPECTIVE_CAMERA;const t=new o.O("light",new r.P(0,0,-1),this.scene);t.position=new r.P(0,0,10),t.intensity=0,this.shadow_generator=new m.u(1024,t),this.shadow_generator.useExponentialShadowMap=!0,this.shadow_generator.setDarkness(.9),this.engine.runRenderLoop((()=>{this.scene.render()})),window.addEventListener("resize",(()=>{this.engine.resize()}))}set_2D(t,e){this.camera.target=null!=e?e:r.P.Zero(),this.camera.detachControl(u.D.canvas),this.camera.minZ=.01*t,this.camera.maxZ=100*t,this.camera.radius=t,this.camera.alpha=Math.PI/2,this.camera.beta=Math.PI/2,this.camera.lowerRadiusLimit=this.camera.radius/3,this.camera.upperRadiusLimit=3*this.camera.radius,this.camera.useAutoRotationBehavior=!1,this.is_3D=!1}set_3D(t,e,i,s,a){this.camera.attachControl(u.D.canvas,!0),this.camera.inertia=0,this.camera.angularSensibilityX=300,this.camera.angularSensibilityY=300,this.camera.target=null!=a?a:r.P.Zero(),this.camera.minZ=.01*t,this.camera.maxZ=100*t,this.camera.radius=t,this.camera.alpha=e*Math.PI,this.camera.beta=i*Math.PI,this.camera.lowerRadiusLimit=this.camera.radius/3,this.camera.upperRadiusLimit=3*this.camera.radius,this.autoRotation(null!=s&&s),this.is_3D=!0}autoRotation(t,e){this.camera.useAutoRotationBehavior=!1,t&&(this.camera.useAutoRotationBehavior=!0,this.camera.autoRotationBehavior.idleRotationSpeed=null!=e?e:.2,this.camera.autoRotationBehavior.idleRotationWaitTime=Number.MAX_SAFE_INTEGER)}}},4969:(t,e,i)=>{i.r(e),i.d(e,{Scheduler:()=>s.b});var s=i(7341)},7341:(t,e,i)=>{i.d(e,{b:()=>m,c:()=>o});var s=i(2755);const a=()=>Date.now()/1e3;class r{constructor(t,e){this.t=0,this.then=a(),this.is_incremental=t,this.start_wait=e}update(){const t=this.then;this.then=a();const e=this.then-t;if(0<this.start_wait)return this.start_wait-=e,0;const i=this.is_incremental?Math.min(e,1/30):e;return this.t+=i,i}}var n=i(6411);const h={dt:.001,start_wait:0,time_multiplier:1,restart_time:void 0,shows_time:!0};function c(){for(;0!=s.j.scene.meshes.length;)s.j.scene.meshes[0].dispose();for(;0!=s.j.scene.materials.length;)s.j.scene.materials[0].dispose();o.map((t=>t()))}let o=[];class m{static Start(t,e){e&&s.j.scene.registerBeforeRender(this.Proceed),this.spec=t,void 0!==this.spec.init&&this.spec.init(),this.current=-1,this.Switch(0),this.stop=!1}static Switch(t){if(this.current!=t){this.current=t,c();const e=this.spec.cases[this.current];e.setup(),this.models=e.init.map(((t,e)=>this.spec.generator(t,e))),n.SimulationWindow.SetControls(this.spec,this.current,(t=>this.Switch(t)))}else this.models.map((t=>{t.reset&&t.reset()}));this.config=Object.assign(Object.assign(Object.assign({},h),this.spec.config),this.spec.cases[this.current].config),this.dt=void 0===this.models[0].proceed?void 0:this.config.dt*this.config.time_multiplier,this.timer=new r(void 0!==this.dt,this.config.start_wait),this.Draw(0)}static Stop(){s.j.scene.unregisterBeforeRender(this.Proceed),c(),this.stop=!0}static Restart(){this.Switch(this.current)}static Proceed(){if(m.stop)return;if(m.config.restart_time&&m.config.restart_time<m.timer.t)return void m.Restart();const t=m.timer.t*m.config.time_multiplier,e=m.timer.update()*m.config.time_multiplier;m.Proceed_by(t,e)}static Draw(t){this.models.forEach((e=>e.draw(t)))}static Proceed_by(t,e){if(void 0!==this.dt){const i=Math.ceil(e/this.dt),s=e/i;for(let e=0;e<i;e++)this.models.forEach((e=>e.proceed(t,s))),t+=s}if(this.Draw(t),this.config.shows_time){let e;if(this.config.time_multiplier&&this.config.time_multiplier<1e-8){const i=t.toFixed(12),s=i.length;e=`t = ${i.substring(0,s-9)} ${i.substring(s-9,s-6)} ${i.substring(s-6,s-3)} ${i.substring(s-3,s)} sec`}else e=`t = ${t.toFixed(2)} sec`;n.SimulationWindow.SetTime(e)}}}m.stop=!0}}]);