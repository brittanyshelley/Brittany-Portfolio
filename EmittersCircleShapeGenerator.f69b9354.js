function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire6158;t.register("kmgvX",(function(n,i){e(n.exports,"EmittersCircleShapeGenerator",(()=>r));var a=t("cHzS4");class r{generate(e,t,n,i){return new(0,a.EmittersCircleShape)(e,t,n,i)}}})),t.register("cHzS4",(function(n,i){e(n.exports,"EmittersCircleShape",(()=>h));var a=t("cg8Ru"),r=t("i0lBz");const s=.25,o=2*Math.PI;class h extends a.EmitterShapeBase{constructor(e,t,n,i){super(e,t,n,i)}async init(){}randomPosition(){const e=this.size,t=this.fill,n=this.position,[i,a]=[.5*e.width,.5*e.height],h=((e,t)=>{const n=(0,r.getRandom)()*s,i=Math.atan(t/e*Math.tan(o*n)),a=(0,r.getRandom)();return a<s?i:a<.5?Math.PI-i:a<.75?Math.PI+i:-i})(i,a),c=(u=h,(d=i)*(f=a)/Math.sqrt((f*Math.cos(u))**2+(d*Math.sin(u))**2)),l=t?c*Math.sqrt((0,r.getRandom)()):c;var d,f,u;return{position:{x:n.x+l*Math.cos(h),y:n.y+l*Math.sin(h)}}}}}));
//# sourceMappingURL=EmittersCircleShapeGenerator.f69b9354.js.map
