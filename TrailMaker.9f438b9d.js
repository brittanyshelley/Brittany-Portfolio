var i=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire6158;i.register("5Gi8l",(function(t,e){var n,o,s,a;n=t.exports,o="TrailMaker",s=()=>d,Object.defineProperty(n,o,{get:s,set:a,enumerable:!0,configurable:!0});var r=i("i0lBz"),l=i("6ALmi");const c="trail";class d extends r.ExternalInteractorBase{constructor(i){super(i),this._delay=0}clear(){}init(){}interact(i){const t=this.container,{interactivity:e}=t;if(!t.retina.reduceFactor)return;const n=t.actualOptions.interactivity.modes.trail;if(!n)return;const o=n.delay*r.millisecondsToSeconds/this.container.retina.reduceFactor;if(this._delay<o&&(this._delay+=i.value),this._delay<o)return;const s=!(n.pauseOnStop&&(e.mouse.position===this._lastPosition||e.mouse.position?.x===this._lastPosition?.x&&e.mouse.position?.y===this._lastPosition?.y)),a=t.interactivity.mouse.position;a?this._lastPosition={...a}:delete this._lastPosition,s&&t.particles.push(n.quantity,t.interactivity.mouse,n.particles),this._delay-=o}isEnabled(i){const t=this.container,e=t.actualOptions,n=t.interactivity.mouse,o=(i?.interactivity??e.interactivity).events;return n.clicking&&n.inside&&!!n.position&&(0,r.isInArray)(c,o.onClick.mode)||n.inside&&!!n.position&&(0,r.isInArray)(c,o.onHover.mode)}loadModeOptions(i,...t){i.trail||(i.trail=new(0,l.Trail));for(const e of t)i.trail.load(e?.trail)}reset(){}}}));
//# sourceMappingURL=TrailMaker.9f438b9d.js.map
