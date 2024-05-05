function e(e,o,i,s){Object.defineProperty(e,o,{get:i,set:s,enumerable:!0,configurable:!0})}var o=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire6158;o.register("iJDAn",(function(i,s){e(i.exports,"Collider",(()=>a));var t=o("i0lBz"),n=o("1GU8y");class a extends t.ParticlesInteractorBase{constructor(e){super(e)}clear(){}init(){}interact(e,o){if(e.destroyed||e.spawning)return;const i=this.container,s=e.getPosition(),a=e.getRadius(),r=i.particles.quadTree.queryCircle(s,2*a);for(const l of r){if(e===l||!l.options.collisions.enable||e.options.collisions.mode!==l.options.collisions.mode||l.destroyed||l.spawning)continue;const r=l.getPosition(),c=l.getRadius();if(Math.abs(Math.round(s.z)-Math.round(r.z))>a+c)continue;(0,t.getDistance)(s,r)>a+c||(0,n.resolveCollision)(e,l,o,i.retina.pixelRatio)}}isEnabled(e){return e.options.collisions.enable}reset(){}}})),o.register("1GU8y",(function(i,s){e(i.exports,"resolveCollision",(()=>r));var t=o("1C9HK"),n=o("arap5"),a=o("ex5aW");function r(e,o,i,s){switch(e.options.collisions.mode){case"absorb":(0,t.absorb)(e,o,i,s);break;case"bounce":(0,n.bounce)(e,o);break;case"destroy":(0,a.destroy)(e,o)}}})),o.register("1C9HK",(function(i,s){e(i.exports,"absorb",(()=>a));var t=o("i0lBz");function n(e,o,i,s,n,a){const r=(0,t.clamp)(e.options.collisions.absorb.speed*n.factor/10,0,s);e.size.value+=.5*r,i.size.value-=r,s<=a&&(i.size.value=0,i.destroy())}function a(e,o,i,s){const t=e.getRadius(),a=o.getRadius();void 0===t&&void 0!==a?e.destroy():void 0!==t&&void 0===a?o.destroy():void 0!==t&&void 0!==a&&(t>=a?n(e,0,o,a,i,s):n(o,0,e,t,i,s))}})),o.register("arap5",(function(i,s){e(i.exports,"bounce",(()=>a));var t=o("i0lBz");const n=e=>{void 0===e.collisionMaxSpeed&&(e.collisionMaxSpeed=(0,t.getRangeValue)(e.options.collisions.maxSpeed)),e.velocity.length>e.collisionMaxSpeed&&(e.velocity.length=e.collisionMaxSpeed)};function a(e,o){(0,t.circleBounce)((0,t.circleBounceDataFromParticle)(e),(0,t.circleBounceDataFromParticle)(o)),n(e),n(o)}})),o.register("ex5aW",(function(i,s){e(i.exports,"destroy",(()=>n));var t=o("arap5");function n(e,o){if(e.unbreakable||o.unbreakable||(0,t.bounce)(e,o),void 0===e.getRadius()&&void 0!==o.getRadius())e.destroy();else if(void 0!==e.getRadius()&&void 0===o.getRadius())o.destroy();else if(void 0!==e.getRadius()&&void 0!==o.getRadius()){(e.getRadius()>=o.getRadius()?o:e).destroy()}}}));
//# sourceMappingURL=Collider.b2627948.js.map
