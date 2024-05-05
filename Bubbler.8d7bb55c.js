function e(e,i,t,o){Object.defineProperty(e,i,{get:t,set:o,enumerable:!0,configurable:!0})}var i=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire6158;i.register("iDO4t",(function(t,o){e(t.exports,"Bubbler",(()=>s));var b=i("i0lBz"),l=i("7EJzR"),n=i("2D8Ht");const a="bubble";class s extends b.ExternalInteractorBase{constructor(e){super(e),this._clickBubble=()=>{const e=this.container,i=e.actualOptions,t=e.interactivity.mouse.clickPosition,o=i.interactivity.modes.bubble;if(!o||!t)return;e.bubble||(e.bubble={});const l=e.retina.bubbleModeDistance;if(!l||l<0)return;const n=e.particles.quadTree.queryCircle(t,l,(e=>this.isEnabled(e))),{bubble:a}=e;for(const i of n){if(!a.clicking)continue;i.bubble.inRange=!a.durationEnd;const n=i.getPosition(),s=(0,b.getDistance)(n,t),r=((new Date).getTime()-(e.interactivity.mouse.clickTime??0))/b.millisecondsToSeconds;r>o.duration&&(a.durationEnd=!0),r>2*o.duration&&(a.clicking=!1,a.durationEnd=!1);const u={bubbleObj:{optValue:e.retina.bubbleModeSize,value:i.bubble.radius},particlesObj:{optValue:(0,b.getRangeMax)(i.options.size.value)*e.retina.pixelRatio,value:i.size.value},type:"size"};this._process(i,s,r,u);const c={bubbleObj:{optValue:o.opacity,value:i.bubble.opacity},particlesObj:{optValue:(0,b.getRangeMax)(i.options.opacity.value),value:i.opacity?.value??1},type:"opacity"};this._process(i,s,r,c),!a.durationEnd&&s<=l?this._hoverBubbleColor(i,s):delete i.bubble.color}},this._hoverBubble=()=>{const e=this.container,i=e.interactivity.mouse.position,t=e.retina.bubbleModeDistance;if(!t||t<0||!i)return;const o=e.particles.quadTree.queryCircle(i,t,(e=>this.isEnabled(e)));for(const l of o){l.bubble.inRange=!0;const o=l.getPosition(),n=(0,b.getDistance)(o,i),a=1-n/t;n<=t?a>=0&&e.interactivity.status===b.mouseMoveEvent&&(this._hoverBubbleSize(l,a),this._hoverBubbleOpacity(l,a),this._hoverBubbleColor(l,a)):this.reset(l),e.interactivity.status===b.mouseLeaveEvent&&this.reset(l)}},this._hoverBubbleColor=(e,i,t)=>{const o=this.container.actualOptions,l=t??o.interactivity.modes.bubble;if(l){if(!e.bubble.finalColor){const i=l.color;if(!i)return;const t=(0,b.itemFromSingleOrMultiple)(i);e.bubble.finalColor=(0,b.rangeColorToHsl)(t)}if(e.bubble.finalColor)if(l.mix){e.bubble.color=void 0;const t=e.getFillColor();e.bubble.color=t?(0,b.rgbToHsl)((0,b.colorMix)(t,e.bubble.finalColor,1-i,i)):e.bubble.finalColor}else e.bubble.color=e.bubble.finalColor}},this._hoverBubbleOpacity=(e,i,t)=>{const o=this.container.actualOptions,l=t?.opacity??o.interactivity.modes.bubble?.opacity;if(!l)return;const a=e.options.opacity.value,s=e.opacity?.value??1,r=(0,n.calculateBubbleValue)(s,l,(0,b.getRangeMax)(a),i);void 0!==r&&(e.bubble.opacity=r)},this._hoverBubbleSize=(e,i,t)=>{const o=this.container,l=t?.size?t.size*o.retina.pixelRatio:o.retina.bubbleModeSize;if(void 0===l)return;const a=(0,b.getRangeMax)(e.options.size.value)*o.retina.pixelRatio,s=e.size.value,r=(0,n.calculateBubbleValue)(s,l,a,i);void 0!==r&&(e.bubble.radius=r)},this._process=(e,i,t,o)=>{const b=this.container,l=o.bubbleObj.optValue,n=b.actualOptions.interactivity.modes.bubble;if(!n||void 0===l)return;const a=n.duration,s=b.retina.bubbleModeDistance,r=o.particlesObj.optValue,u=o.bubbleObj.value,c=o.particlesObj.value??0,d=o.type;if(s&&!(s<0)&&l!==r)if(b.bubble||(b.bubble={}),b.bubble.durationEnd)u&&("size"===d&&delete e.bubble.radius,"opacity"===d&&delete e.bubble.opacity);else if(i<=s){if((u??c)!==l){const i=c-t*(c-l)/a;"size"===d&&(e.bubble.radius=i),"opacity"===d&&(e.bubble.opacity=i)}}else"size"===d&&delete e.bubble.radius,"opacity"===d&&delete e.bubble.opacity},this._singleSelectorHover=(e,i,t)=>{const o=this.container,l=document.querySelectorAll(i),n=o.actualOptions.interactivity.modes.bubble;n&&l.length&&l.forEach((i=>{const l=i,a=o.retina.pixelRatio,s={x:(l.offsetLeft+.5*l.offsetWidth)*a,y:(l.offsetTop+.5*l.offsetHeight)*a},r=.5*l.offsetWidth*a,u="circle"===t.type?new(0,b.Circle)(s.x,s.y,r):new(0,b.Rectangle)(l.offsetLeft*a,l.offsetTop*a,l.offsetWidth*a,l.offsetHeight*a),c=o.particles.quadTree.query(u,(e=>this.isEnabled(e)));for(const i of c){if(!u.contains(i.getPosition()))continue;i.bubble.inRange=!0;const t=n.divs,o=(0,b.divMode)(t,l);i.bubble.div&&i.bubble.div===l||(this.clear(i,e,!0),i.bubble.div=l),this._hoverBubbleSize(i,1,o),this._hoverBubbleOpacity(i,1,o),this._hoverBubbleColor(i,1,o)}}))},e.bubble||(e.bubble={}),this.handleClickMode=i=>{i===a&&(e.bubble||(e.bubble={}),e.bubble.clicking=!0)}}clear(e,i,t){e.bubble.inRange&&!t||(delete e.bubble.div,delete e.bubble.opacity,delete e.bubble.radius,delete e.bubble.color)}init(){const e=this.container,i=e.actualOptions.interactivity.modes.bubble;i&&(e.retina.bubbleModeDistance=i.distance*e.retina.pixelRatio,void 0!==i.size&&(e.retina.bubbleModeSize=i.size*e.retina.pixelRatio))}interact(e){const i=this.container.actualOptions.interactivity.events,t=i.onHover,o=i.onClick,l=t.enable,n=t.mode,s=o.enable,r=o.mode,u=i.onDiv;l&&(0,b.isInArray)(a,n)?this._hoverBubble():s&&(0,b.isInArray)(a,r)?this._clickBubble():(0,b.divModeExecute)(a,u,((i,t)=>this._singleSelectorHover(e,i,t)))}isEnabled(e){const i=this.container,t=i.actualOptions,o=i.interactivity.mouse,l=(e?.interactivity??t.interactivity).events,{onClick:n,onDiv:s,onHover:r}=l,u=(0,b.isDivModeEnabled)(a,s);return!!(u||r.enable&&o.position||n.enable&&o.clickPosition)&&((0,b.isInArray)(a,r.mode)||(0,b.isInArray)(a,n.mode)||u)}loadModeOptions(e,...i){e.bubble||(e.bubble=new(0,l.Bubble));for(const t of i)e.bubble.load(t?.bubble)}reset(e){e.bubble.inRange=!1}}})),i.register("2D8Ht",(function(t,o){e(t.exports,"calculateBubbleValue",(()=>l));var b=i("i0lBz");function l(e,i,t,o){if(i>=t){const l=e+(i-t)*o;return(0,b.clamp)(l,e,i)}if(i<t){const l=e-(t-i)*o;return(0,b.clamp)(l,i,e)}}}));
//# sourceMappingURL=Bubbler.8d7bb55c.js.map
