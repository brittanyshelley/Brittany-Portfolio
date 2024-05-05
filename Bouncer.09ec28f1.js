function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire6158;t.register("hJssx",(function(n,o){e(n.exports,"Bouncer",(()=>a));var i=t("i0lBz"),c=t("gl8lZ"),s=t("aq4jI");const r="bounce";class a extends i.ExternalInteractorBase{constructor(e){super(e)}clear(){}init(){const e=this.container,t=e.actualOptions.interactivity.modes.bounce;t&&(e.retina.bounceModeDistance=t.distance*e.retina.pixelRatio)}interact(){const e=this.container,t=e.actualOptions.interactivity.events,n=e.interactivity.status===i.mouseMoveEvent,o=t.onHover.enable,s=t.onHover.mode,a=t.onDiv;n&&o&&(0,i.isInArray)(r,s)?(0,c.mouseBounce)(this.container,(e=>this.isEnabled(e))):(0,c.divBounce)(this.container,a,r,(e=>this.isEnabled(e)))}isEnabled(e){const t=this.container,n=t.actualOptions,o=t.interactivity.mouse,c=(e?.interactivity??n.interactivity).events,s=c.onDiv;return!!o.position&&c.onHover.enable&&(0,i.isInArray)(r,c.onHover.mode)||(0,i.isDivModeEnabled)(r,s)}loadModeOptions(e,...t){e.bounce||(e.bounce=new(0,s.Bounce));for(const n of t)e.bounce.load(n?.bounce)}reset(){}}})),t.register("gl8lZ",(function(n,o){e(n.exports,"divBounce",(()=>a)),e(n.exports,"mouseBounce",(()=>l));var i=t("i0lBz");const c=.5,s=Math.PI*c;function r(e,t,n,o,c){const r=e.particles.quadTree.query(o,c);for(const e of r)o instanceof i.Circle?(0,i.circleBounce)((0,i.circleBounceDataFromParticle)(e),{position:t,radius:n,mass:n**2*s,velocity:i.Vector.origin,factor:i.Vector.origin}):o instanceof i.Rectangle&&(0,i.rectBounce)(e,(0,i.calculateBounds)(t,n))}function a(e,t,n,o){(0,i.divModeExecute)(n,t,((t,n)=>function(e,t,n,o){const s=document.querySelectorAll(t);s.length&&s.forEach((t=>{const s=t,r=e.retina.pixelRatio,a={x:(s.offsetLeft+s.offsetWidth*c)*r,y:(s.offsetTop+s.offsetHeight*c)*r},l=s.offsetWidth*c*r,u=10*r,f="circle"===n.type?new(0,i.Circle)(a.x,a.y,l+u):new(0,i.Rectangle)(s.offsetLeft*r-u,s.offsetTop*r-u,s.offsetWidth*r+2*u,s.offsetHeight*r+2*u);o(a,l,f)}))}(e,t,n,((t,n,i)=>r(e,t,n,i,o)))))}function l(e,t){const n=10*e.retina.pixelRatio,o=e.interactivity.mouse.position,c=e.retina.bounceModeDistance;!c||c<0||!o||r(e,o,c,new(0,i.Circle)(o.x,o.y,c+n),t)}}));
//# sourceMappingURL=Bouncer.09ec28f1.js.map
