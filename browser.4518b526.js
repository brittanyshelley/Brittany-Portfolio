function e(e,s,t,i){Object.defineProperty(e,s,{get:t,set:i,enumerable:!0,configurable:!0})}var s=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire6158;s.register("4h5XK",(function(t,i){async function n(e,t=!0){await e.addInteractor("externalRepulse",(async t=>{const{Repulser:i}=await s("4ZIP0");return new i(e,t)}),t)}e(t.exports,"loadExternalRepulseInteraction",(()=>n)),s("3iF2h"),s("aUs1k"),s("beZNd"),s("7kGnd"),s("bssoa"),s("3JbI5")})),s.register("3iF2h",(function(s,t){e(s.exports,"RepulseBase",(()=>i));class i{constructor(){this.distance=200,this.duration=.4,this.factor=100,this.speed=1,this.maxSpeed=50,this.easing="ease-out-quad"}load(e){e&&(void 0!==e.distance&&(this.distance=e.distance),void 0!==e.duration&&(this.duration=e.duration),void 0!==e.easing&&(this.easing=e.easing),void 0!==e.factor&&(this.factor=e.factor),void 0!==e.speed&&(this.speed=e.speed),void 0!==e.maxSpeed&&(this.maxSpeed=e.maxSpeed))}}})),s.register("aUs1k",(function(t,i){e(t.exports,"RepulseDiv",(()=>o));var n=s("3iF2h");class o extends n.RepulseBase{constructor(){super(),this.selectors=[]}load(e){super.load(e),e&&void 0!==e.selectors&&(this.selectors=e.selectors)}}})),s.register("beZNd",(function(t,i){e(t.exports,"Repulse",(()=>r));var n=s("i0lBz"),o=s("3iF2h"),a=s("aUs1k");class r extends o.RepulseBase{load(e){super.load(e),e&&(this.divs=(0,n.executeOnSingleOrMultiple)(e.divs,(e=>{const s=new(0,a.RepulseDiv);return s.load(e),s})))}}})),s.register("7kGnd",(function(e,s){})),s.register("bssoa",(function(e,s){})),s.register("3JbI5",(function(e,s){})),s.register("4ZIP0",(function(e,t){e.exports=import("./"+s("27Lyk").resolve("27MaO")).then((()=>s("7NI5a")))}));
//# sourceMappingURL=browser.4518b526.js.map
