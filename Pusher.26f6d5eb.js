var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire6158;e.register("1loNC",(function(t,i){var n,r,o,s;n=t.exports,r="Pusher",o=()=>l,Object.defineProperty(n,r,{get:o,set:s,enumerable:!0,configurable:!0});var a=e("i0lBz"),u=e("6xH4w");class l extends a.ExternalInteractorBase{constructor(e){super(e),this.handleClickMode=e=>{if("push"!==e)return;const t=this.container,i=t.actualOptions.interactivity.modes.push;if(!i)return;const n=(0,a.getRangeValue)(i.quantity);if(n<=0)return;const r=(0,a.itemFromArray)([void 0,...i.groups]),o=void 0!==r?t.actualOptions.particles.groups[r]:void 0;t.particles.push(n,t.interactivity.mouse,o,r)}}clear(){}init(){}interact(){}isEnabled(){return!0}loadModeOptions(e,...t){e.push||(e.push=new(0,u.Push));for(const i of t)e.push.load(i?.push)}reset(){}}}));
//# sourceMappingURL=Pusher.26f6d5eb.js.map
