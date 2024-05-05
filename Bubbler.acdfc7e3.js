// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9mIr6":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "125cfc6eacdfc7e3";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"he25O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Bubbler", ()=>Bubbler);
var _engine = require("@tsparticles/engine");
var _bubbleJs = require("./Options/Classes/Bubble.js");
var _utilsJs = require("./Utils.js");
const bubbleMode = "bubble", minDistance = 0, defaultClickTime = 0, double = 2, defaultOpacity = 1, ratioOffset = 1, defaultBubbleValue = 0, minRatio = 0, half = 0.5, defaultRatio = 1;
class Bubbler extends (0, _engine.ExternalInteractorBase) {
    constructor(container){
        super(container);
        this._clickBubble = ()=>{
            const container = this.container, options = container.actualOptions, mouseClickPos = container.interactivity.mouse.clickPosition, bubbleOptions = options.interactivity.modes.bubble;
            if (!bubbleOptions || !mouseClickPos) return;
            if (!container.bubble) container.bubble = {};
            const distance = container.retina.bubbleModeDistance;
            if (!distance || distance < minDistance) return;
            const query = container.particles.quadTree.queryCircle(mouseClickPos, distance, (p)=>this.isEnabled(p)), { bubble  } = container;
            for (const particle of query){
                if (!bubble.clicking) continue;
                particle.bubble.inRange = !bubble.durationEnd;
                const pos = particle.getPosition(), distMouse = (0, _engine.getDistance)(pos, mouseClickPos), timeSpent = (new Date().getTime() - (container.interactivity.mouse.clickTime ?? defaultClickTime)) / (0, _engine.millisecondsToSeconds);
                if (timeSpent > bubbleOptions.duration) bubble.durationEnd = true;
                if (timeSpent > bubbleOptions.duration * double) {
                    bubble.clicking = false;
                    bubble.durationEnd = false;
                }
                const sizeData = {
                    bubbleObj: {
                        optValue: container.retina.bubbleModeSize,
                        value: particle.bubble.radius
                    },
                    particlesObj: {
                        optValue: (0, _engine.getRangeMax)(particle.options.size.value) * container.retina.pixelRatio,
                        value: particle.size.value
                    },
                    type: "size"
                };
                this._process(particle, distMouse, timeSpent, sizeData);
                const opacityData = {
                    bubbleObj: {
                        optValue: bubbleOptions.opacity,
                        value: particle.bubble.opacity
                    },
                    particlesObj: {
                        optValue: (0, _engine.getRangeMax)(particle.options.opacity.value),
                        value: particle.opacity?.value ?? defaultOpacity
                    },
                    type: "opacity"
                };
                this._process(particle, distMouse, timeSpent, opacityData);
                if (!bubble.durationEnd && distMouse <= distance) this._hoverBubbleColor(particle, distMouse);
                else delete particle.bubble.color;
            }
        };
        this._hoverBubble = ()=>{
            const container = this.container, mousePos = container.interactivity.mouse.position, distance = container.retina.bubbleModeDistance;
            if (!distance || distance < minDistance || !mousePos) return;
            const query = container.particles.quadTree.queryCircle(mousePos, distance, (p)=>this.isEnabled(p));
            for (const particle of query){
                particle.bubble.inRange = true;
                const pos = particle.getPosition(), pointDistance = (0, _engine.getDistance)(pos, mousePos), ratio = ratioOffset - pointDistance / distance;
                if (pointDistance <= distance) {
                    if (ratio >= minRatio && container.interactivity.status === (0, _engine.mouseMoveEvent)) {
                        this._hoverBubbleSize(particle, ratio);
                        this._hoverBubbleOpacity(particle, ratio);
                        this._hoverBubbleColor(particle, ratio);
                    }
                } else this.reset(particle);
                if (container.interactivity.status === (0, _engine.mouseLeaveEvent)) this.reset(particle);
            }
        };
        this._hoverBubbleColor = (particle, ratio, divBubble)=>{
            const options = this.container.actualOptions, bubbleOptions = divBubble ?? options.interactivity.modes.bubble;
            if (!bubbleOptions) return;
            if (!particle.bubble.finalColor) {
                const modeColor = bubbleOptions.color;
                if (!modeColor) return;
                const bubbleColor = (0, _engine.itemFromSingleOrMultiple)(modeColor);
                particle.bubble.finalColor = (0, _engine.rangeColorToHsl)(bubbleColor);
            }
            if (!particle.bubble.finalColor) return;
            if (bubbleOptions.mix) {
                particle.bubble.color = undefined;
                const pColor = particle.getFillColor();
                particle.bubble.color = pColor ? (0, _engine.rgbToHsl)((0, _engine.colorMix)(pColor, particle.bubble.finalColor, ratioOffset - ratio, ratio)) : particle.bubble.finalColor;
            } else particle.bubble.color = particle.bubble.finalColor;
        };
        this._hoverBubbleOpacity = (particle, ratio, divBubble)=>{
            const container = this.container, options = container.actualOptions, modeOpacity = divBubble?.opacity ?? options.interactivity.modes.bubble?.opacity;
            if (!modeOpacity) return;
            const optOpacity = particle.options.opacity.value, pOpacity = particle.opacity?.value ?? defaultOpacity, opacity = (0, _utilsJs.calculateBubbleValue)(pOpacity, modeOpacity, (0, _engine.getRangeMax)(optOpacity), ratio);
            if (opacity !== undefined) particle.bubble.opacity = opacity;
        };
        this._hoverBubbleSize = (particle, ratio, divBubble)=>{
            const container = this.container, modeSize = divBubble?.size ? divBubble.size * container.retina.pixelRatio : container.retina.bubbleModeSize;
            if (modeSize === undefined) return;
            const optSize = (0, _engine.getRangeMax)(particle.options.size.value) * container.retina.pixelRatio, pSize = particle.size.value, size = (0, _utilsJs.calculateBubbleValue)(pSize, modeSize, optSize, ratio);
            if (size !== undefined) particle.bubble.radius = size;
        };
        this._process = (particle, distMouse, timeSpent, data)=>{
            const container = this.container, bubbleParam = data.bubbleObj.optValue, options = container.actualOptions, bubbleOptions = options.interactivity.modes.bubble;
            if (!bubbleOptions || bubbleParam === undefined) return;
            const bubbleDuration = bubbleOptions.duration, bubbleDistance = container.retina.bubbleModeDistance, particlesParam = data.particlesObj.optValue, pObjBubble = data.bubbleObj.value, pObj = data.particlesObj.value ?? defaultBubbleValue, type = data.type;
            if (!bubbleDistance || bubbleDistance < minDistance || bubbleParam === particlesParam) return;
            if (!container.bubble) container.bubble = {};
            if (container.bubble.durationEnd) {
                if (pObjBubble) {
                    if (type === "size") delete particle.bubble.radius;
                    if (type === "opacity") delete particle.bubble.opacity;
                }
            } else if (distMouse <= bubbleDistance) {
                const obj = pObjBubble ?? pObj;
                if (obj !== bubbleParam) {
                    const value = pObj - timeSpent * (pObj - bubbleParam) / bubbleDuration;
                    if (type === "size") particle.bubble.radius = value;
                    if (type === "opacity") particle.bubble.opacity = value;
                }
            } else {
                if (type === "size") delete particle.bubble.radius;
                if (type === "opacity") delete particle.bubble.opacity;
            }
        };
        this._singleSelectorHover = (delta, selector, div)=>{
            const container = this.container, selectors = document.querySelectorAll(selector), bubble = container.actualOptions.interactivity.modes.bubble;
            if (!bubble || !selectors.length) return;
            selectors.forEach((item)=>{
                const elem = item, pxRatio = container.retina.pixelRatio, pos = {
                    x: (elem.offsetLeft + elem.offsetWidth * half) * pxRatio,
                    y: (elem.offsetTop + elem.offsetHeight * half) * pxRatio
                }, repulseRadius = elem.offsetWidth * half * pxRatio, area = div.type === "circle" ? new (0, _engine.Circle)(pos.x, pos.y, repulseRadius) : new (0, _engine.Rectangle)(elem.offsetLeft * pxRatio, elem.offsetTop * pxRatio, elem.offsetWidth * pxRatio, elem.offsetHeight * pxRatio), query = container.particles.quadTree.query(area, (p)=>this.isEnabled(p));
                for (const particle of query){
                    if (!area.contains(particle.getPosition())) continue;
                    particle.bubble.inRange = true;
                    const divs = bubble.divs, divBubble = (0, _engine.divMode)(divs, elem);
                    if (!particle.bubble.div || particle.bubble.div !== elem) {
                        this.clear(particle, delta, true);
                        particle.bubble.div = elem;
                    }
                    this._hoverBubbleSize(particle, defaultRatio, divBubble);
                    this._hoverBubbleOpacity(particle, defaultRatio, divBubble);
                    this._hoverBubbleColor(particle, defaultRatio, divBubble);
                }
            });
        };
        if (!container.bubble) container.bubble = {};
        this.handleClickMode = (mode)=>{
            if (mode !== bubbleMode) return;
            if (!container.bubble) container.bubble = {};
            container.bubble.clicking = true;
        };
    }
    clear(particle, delta, force) {
        if (particle.bubble.inRange && !force) return;
        delete particle.bubble.div;
        delete particle.bubble.opacity;
        delete particle.bubble.radius;
        delete particle.bubble.color;
    }
    init() {
        const container = this.container, bubble = container.actualOptions.interactivity.modes.bubble;
        if (!bubble) return;
        container.retina.bubbleModeDistance = bubble.distance * container.retina.pixelRatio;
        if (bubble.size !== undefined) container.retina.bubbleModeSize = bubble.size * container.retina.pixelRatio;
    }
    interact(delta) {
        const options = this.container.actualOptions, events = options.interactivity.events, onHover = events.onHover, onClick = events.onClick, hoverEnabled = onHover.enable, hoverMode = onHover.mode, clickEnabled = onClick.enable, clickMode = onClick.mode, divs = events.onDiv;
        if (hoverEnabled && (0, _engine.isInArray)(bubbleMode, hoverMode)) this._hoverBubble();
        else if (clickEnabled && (0, _engine.isInArray)(bubbleMode, clickMode)) this._clickBubble();
        else (0, _engine.divModeExecute)(bubbleMode, divs, (selector, div)=>this._singleSelectorHover(delta, selector, div));
    }
    isEnabled(particle) {
        const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = (particle?.interactivity ?? options.interactivity).events, { onClick , onDiv , onHover  } = events, divBubble = (0, _engine.isDivModeEnabled)(bubbleMode, onDiv);
        if (!(divBubble || onHover.enable && !!mouse.position || onClick.enable && mouse.clickPosition)) return false;
        return (0, _engine.isInArray)(bubbleMode, onHover.mode) || (0, _engine.isInArray)(bubbleMode, onClick.mode) || divBubble;
    }
    loadModeOptions(options, ...sources) {
        if (!options.bubble) options.bubble = new (0, _bubbleJs.Bubble)();
        for (const source of sources)options.bubble.load(source?.bubble);
    }
    reset(particle) {
        particle.bubble.inRange = false;
    }
}

},{"@tsparticles/engine":"ahMVX","./Options/Classes/Bubble.js":"lRPHR","./Utils.js":"icTFQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"icTFQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calculateBubbleValue", ()=>calculateBubbleValue);
var _engine = require("@tsparticles/engine");
function calculateBubbleValue(particleValue, modeValue, optionsValue, ratio) {
    if (modeValue >= optionsValue) {
        const value = particleValue + (modeValue - optionsValue) * ratio;
        return (0, _engine.clamp)(value, particleValue, modeValue);
    } else if (modeValue < optionsValue) {
        const value1 = particleValue - (optionsValue - modeValue) * ratio;
        return (0, _engine.clamp)(value1, modeValue, particleValue);
    }
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["9mIr6"], null, "parcelRequire6158")

//# sourceMappingURL=Bubbler.acdfc7e3.js.map
