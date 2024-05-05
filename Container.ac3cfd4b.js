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
})({"8vgpO":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "9023aa9bac3cfd4b";
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

},{}],"4i0Qd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Container", ()=>Container);
var _constantsJs = require("./Utils/Constants.js");
var _utilsJs = require("../Utils/Utils.js");
var _canvasJs = require("./Canvas.js");
var _eventListenersJs = require("./Utils/EventListeners.js");
var _optionsJs = require("../Options/Classes/Options.js");
var _particlesJs = require("./Particles.js");
var _retinaJs = require("./Retina.js");
var _numberUtilsJs = require("../Utils/NumberUtils.js");
var _optionsUtilsJs = require("../Utils/OptionsUtils.js");
function guardCheck(container) {
    return container && !container.destroyed;
}
const defaultFps = 60;
function initDelta(value, fpsLimit = defaultFps, smooth = false) {
    return {
        value,
        factor: smooth ? defaultFps / fpsLimit : defaultFps * value / (0, _constantsJs.millisecondsToSeconds)
    };
}
function loadContainerOptions(engine, container, ...sourceOptionsArr) {
    const options = new (0, _optionsJs.Options)(engine, container);
    (0, _optionsUtilsJs.loadOptions)(options, ...sourceOptionsArr);
    return options;
}
class Container {
    constructor(engine, id, sourceOptions){
        this._intersectionManager = (entries)=>{
            if (!guardCheck(this) || !this.actualOptions.pauseOnOutsideViewport) return;
            for (const entry of entries){
                if (entry.target !== this.interactivity.element) continue;
                if (entry.isIntersecting) this.play();
                else this.pause();
            }
        };
        this._nextFrame = (timestamp)=>{
            try {
                if (!this._smooth && this._lastFrameTime !== undefined && timestamp < this._lastFrameTime + (0, _constantsJs.millisecondsToSeconds) / this.fpsLimit) {
                    this.draw(false);
                    return;
                }
                this._lastFrameTime ??= timestamp;
                const delta = initDelta(timestamp - this._lastFrameTime, this.fpsLimit, this._smooth);
                this.addLifeTime(delta.value);
                this._lastFrameTime = timestamp;
                if (delta.value > (0, _constantsJs.millisecondsToSeconds)) {
                    this.draw(false);
                    return;
                }
                this.particles.draw(delta);
                if (!this.alive()) {
                    this.destroy();
                    return;
                }
                if (this.animationStatus) this.draw(false);
            } catch (e) {
                (0, _utilsJs.getLogger)().error(`${(0, _constantsJs.errorPrefix)} in animation loop`, e);
            }
        };
        this._engine = engine;
        this.id = Symbol(id);
        this.fpsLimit = 120;
        this._smooth = false;
        this._delay = 0;
        this._duration = 0;
        this._lifeTime = 0;
        this._firstStart = true;
        this.started = false;
        this.destroyed = false;
        this._paused = true;
        this._lastFrameTime = 0;
        this.zLayers = 100;
        this.pageHidden = false;
        this._sourceOptions = sourceOptions;
        this._initialSourceOptions = sourceOptions;
        this.retina = new (0, _retinaJs.Retina)(this);
        this.canvas = new (0, _canvasJs.Canvas)(this);
        this.particles = new (0, _particlesJs.Particles)(this._engine, this);
        this.pathGenerators = new Map();
        this.interactivity = {
            mouse: {
                clicking: false,
                inside: false
            }
        };
        this.plugins = new Map();
        this.effectDrawers = new Map();
        this.shapeDrawers = new Map();
        this._options = loadContainerOptions(this._engine, this);
        this.actualOptions = loadContainerOptions(this._engine, this);
        this._eventListeners = new (0, _eventListenersJs.EventListeners)(this);
        this._intersectionObserver = (0, _utilsJs.safeIntersectionObserver)((entries)=>this._intersectionManager(entries));
        this._engine.dispatchEvent("containerBuilt", {
            container: this
        });
    }
    get animationStatus() {
        return !this._paused && !this.pageHidden && guardCheck(this);
    }
    get options() {
        return this._options;
    }
    get sourceOptions() {
        return this._sourceOptions;
    }
    addClickHandler(callback) {
        if (!guardCheck(this)) return;
        const el = this.interactivity.element;
        if (!el) return;
        const clickOrTouchHandler = (e, pos, radius)=>{
            if (!guardCheck(this)) return;
            const pxRatio = this.retina.pixelRatio, posRetina = {
                x: pos.x * pxRatio,
                y: pos.y * pxRatio
            }, particles = this.particles.quadTree.queryCircle(posRetina, radius * pxRatio);
            callback(e, particles);
        };
        const clickHandler = (e)=>{
            if (!guardCheck(this)) return;
            const mouseEvent = e, pos = {
                x: mouseEvent.offsetX || mouseEvent.clientX,
                y: mouseEvent.offsetY || mouseEvent.clientY
            }, radius = 1;
            clickOrTouchHandler(e, pos, radius);
        };
        const touchStartHandler = ()=>{
            if (!guardCheck(this)) return;
            touched = true;
            touchMoved = false;
        };
        const touchMoveHandler = ()=>{
            if (!guardCheck(this)) return;
            touchMoved = true;
        };
        const touchEndHandler = (e)=>{
            if (!guardCheck(this)) return;
            if (touched && !touchMoved) {
                const touchEvent = e;
                const lengthOffset = 1;
                let lastTouch = touchEvent.touches[touchEvent.touches.length - lengthOffset];
                if (!lastTouch) {
                    lastTouch = touchEvent.changedTouches[touchEvent.changedTouches.length - lengthOffset];
                    if (!lastTouch) return;
                }
                const element = this.canvas.element, canvasRect = element ? element.getBoundingClientRect() : undefined, minCoordinate = 0, pos = {
                    x: lastTouch.clientX - (canvasRect ? canvasRect.left : minCoordinate),
                    y: lastTouch.clientY - (canvasRect ? canvasRect.top : minCoordinate)
                };
                clickOrTouchHandler(e, pos, Math.max(lastTouch.radiusX, lastTouch.radiusY));
            }
            touched = false;
            touchMoved = false;
        };
        const touchCancelHandler = ()=>{
            if (!guardCheck(this)) return;
            touched = false;
            touchMoved = false;
        };
        let touched = false, touchMoved = false;
        el.addEventListener("click", clickHandler);
        el.addEventListener("touchstart", touchStartHandler);
        el.addEventListener("touchmove", touchMoveHandler);
        el.addEventListener("touchend", touchEndHandler);
        el.addEventListener("touchcancel", touchCancelHandler);
    }
    addLifeTime(value) {
        this._lifeTime += value;
    }
    addPath(key, generator, override = false) {
        if (!guardCheck(this) || !override && this.pathGenerators.has(key)) return false;
        this.pathGenerators.set(key, generator);
        return true;
    }
    alive() {
        return !this._duration || this._lifeTime <= this._duration;
    }
    destroy() {
        if (!guardCheck(this)) return;
        this.stop();
        this.particles.destroy();
        this.canvas.destroy();
        for (const [, effectDrawer] of this.effectDrawers)effectDrawer.destroy?.(this);
        for (const [, shapeDrawer] of this.shapeDrawers)shapeDrawer.destroy?.(this);
        for (const key of this.effectDrawers.keys())this.effectDrawers.delete(key);
        for (const key1 of this.shapeDrawers.keys())this.shapeDrawers.delete(key1);
        this._engine.clearPlugins(this);
        this.destroyed = true;
        const mainArr = this._engine.dom(), idx = mainArr.findIndex((t)=>t === this), minIndex = 0;
        if (idx >= minIndex) {
            const deleteCount = 1;
            mainArr.splice(idx, deleteCount);
        }
        this._engine.dispatchEvent("containerDestroyed", {
            container: this
        });
    }
    draw(force) {
        if (!guardCheck(this)) return;
        let refreshTime = force;
        const frame = (timestamp)=>{
            if (refreshTime) {
                this._lastFrameTime = undefined;
                refreshTime = false;
            }
            this._nextFrame(timestamp);
        };
        this._drawAnimationFrame = requestAnimationFrame((timestamp)=>frame(timestamp));
    }
    async export(type, options = {}) {
        for (const [, plugin] of this.plugins){
            if (!plugin.export) continue;
            const res = await plugin.export(type, options);
            if (!res.supported) continue;
            return res.blob;
        }
        (0, _utilsJs.getLogger)().error(`${(0, _constantsJs.errorPrefix)} - Export plugin with type ${type} not found`);
    }
    handleClickMode(mode) {
        if (!guardCheck(this)) return;
        this.particles.handleClickMode(mode);
        for (const [, plugin] of this.plugins)plugin.handleClickMode?.(mode);
    }
    async init() {
        if (!guardCheck(this)) return;
        const effects = this._engine.getSupportedEffects();
        for (const type of effects){
            const drawer = this._engine.getEffectDrawer(type);
            if (drawer) this.effectDrawers.set(type, drawer);
        }
        const shapes = this._engine.getSupportedShapes();
        for (const type1 of shapes){
            const drawer1 = this._engine.getShapeDrawer(type1);
            if (drawer1) this.shapeDrawers.set(type1, drawer1);
        }
        await this.particles.initPlugins();
        this._options = loadContainerOptions(this._engine, this, this._initialSourceOptions, this.sourceOptions);
        this.actualOptions = loadContainerOptions(this._engine, this, this._options);
        const availablePlugins = await this._engine.getAvailablePlugins(this);
        for (const [id, plugin] of availablePlugins)this.plugins.set(id, plugin);
        this.retina.init();
        await this.canvas.init();
        this.updateActualOptions();
        this.canvas.initBackground();
        this.canvas.resize();
        this.zLayers = this.actualOptions.zLayers;
        this._duration = (0, _numberUtilsJs.getRangeValue)(this.actualOptions.duration) * (0, _constantsJs.millisecondsToSeconds);
        this._delay = (0, _numberUtilsJs.getRangeValue)(this.actualOptions.delay) * (0, _constantsJs.millisecondsToSeconds);
        this._lifeTime = 0;
        const defaultFpsLimit = 120, minFpsLimit = 0;
        this.fpsLimit = this.actualOptions.fpsLimit > minFpsLimit ? this.actualOptions.fpsLimit : defaultFpsLimit;
        this._smooth = this.actualOptions.smooth;
        for (const [, drawer2] of this.effectDrawers)await drawer2.init?.(this);
        for (const [, drawer3] of this.shapeDrawers)await drawer3.init?.(this);
        for (const [, plugin1] of this.plugins)await plugin1.init?.();
        this._engine.dispatchEvent("containerInit", {
            container: this
        });
        await this.particles.init();
        this.particles.setDensity();
        for (const [, plugin2] of this.plugins)plugin2.particlesSetup?.();
        this._engine.dispatchEvent("particlesSetup", {
            container: this
        });
    }
    async loadTheme(name) {
        if (!guardCheck(this)) return;
        this._currentTheme = name;
        await this.refresh();
    }
    pause() {
        if (!guardCheck(this)) return;
        if (this._drawAnimationFrame !== undefined) {
            cancelAnimationFrame(this._drawAnimationFrame);
            delete this._drawAnimationFrame;
        }
        if (this._paused) return;
        for (const [, plugin] of this.plugins)plugin.pause?.();
        if (!this.pageHidden) this._paused = true;
        this._engine.dispatchEvent("containerPaused", {
            container: this
        });
    }
    play(force) {
        if (!guardCheck(this)) return;
        const needsUpdate = this._paused || force;
        if (this._firstStart && !this.actualOptions.autoPlay) {
            this._firstStart = false;
            return;
        }
        if (this._paused) this._paused = false;
        if (needsUpdate) {
            for (const [, plugin] of this.plugins)if (plugin.play) plugin.play();
        }
        this._engine.dispatchEvent("containerPlay", {
            container: this
        });
        this.draw(needsUpdate ?? false);
    }
    async refresh() {
        if (!guardCheck(this)) return;
        this.stop();
        return this.start();
    }
    async reset() {
        if (!guardCheck(this)) return;
        this._initialSourceOptions = undefined;
        this._options = loadContainerOptions(this._engine, this);
        this.actualOptions = loadContainerOptions(this._engine, this, this._options);
        return this.refresh();
    }
    async start() {
        if (!guardCheck(this) || this.started) return;
        await this.init();
        this.started = true;
        await new Promise((resolve)=>{
            const start = async ()=>{
                this._eventListeners.addListeners();
                if (this.interactivity.element instanceof HTMLElement && this._intersectionObserver) this._intersectionObserver.observe(this.interactivity.element);
                for (const [, plugin] of this.plugins)await plugin.start?.();
                this._engine.dispatchEvent("containerStarted", {
                    container: this
                });
                this.play();
                resolve();
            };
            this._delayTimeout = setTimeout(()=>void start(), this._delay);
        });
    }
    stop() {
        if (!guardCheck(this) || !this.started) return;
        if (this._delayTimeout) {
            clearTimeout(this._delayTimeout);
            delete this._delayTimeout;
        }
        this._firstStart = true;
        this.started = false;
        this._eventListeners.removeListeners();
        this.pause();
        this.particles.clear();
        this.canvas.stop();
        if (this.interactivity.element instanceof HTMLElement && this._intersectionObserver) this._intersectionObserver.unobserve(this.interactivity.element);
        for (const [, plugin] of this.plugins)plugin.stop?.();
        for (const key of this.plugins.keys())this.plugins.delete(key);
        this._sourceOptions = this._options;
        this._engine.dispatchEvent("containerStopped", {
            container: this
        });
    }
    updateActualOptions() {
        this.actualOptions.responsive = [];
        const newMaxWidth = this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options);
        this.actualOptions.setTheme(this._currentTheme);
        if (this._responsiveMaxWidth === newMaxWidth) return false;
        this._responsiveMaxWidth = newMaxWidth;
        return true;
    }
}

},{"./Utils/Constants.js":"9fra9","../Utils/Utils.js":"17M4n","./Canvas.js":"b5oGg","./Utils/EventListeners.js":"dCar4","../Options/Classes/Options.js":"gH477","./Particles.js":"a0Lei","./Retina.js":"q7xVz","../Utils/NumberUtils.js":"c9eVN","../Utils/OptionsUtils.js":"eM9C9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b5oGg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Canvas", ()=>Canvas);
var _canvasUtilsJs = require("../Utils/CanvasUtils.js");
var _utilsJs = require("../Utils/Utils.js");
var _colorUtilsJs = require("../Utils/ColorUtils.js");
var _constantsJs = require("./Utils/Constants.js");
function setTransformValue(factor, newFactor, key) {
    const newValue = newFactor[key], defaultValue = 1;
    if (newValue !== undefined) factor[key] = (factor[key] ?? defaultValue) * newValue;
}
function setStyle(canvas, style, important = false) {
    if (!style) return;
    const element = canvas;
    if (!element) return;
    const elementStyle = element.style;
    if (!elementStyle) return;
    for(const key in style){
        const value = style[key];
        if (!value) continue;
        elementStyle.setProperty(key, value, important ? "important" : "");
    }
}
class Canvas {
    constructor(container){
        this.container = container;
        this._applyPostDrawUpdaters = (particle)=>{
            for (const updater of this._postDrawUpdaters)updater.afterDraw?.(particle);
        };
        this._applyPreDrawUpdaters = (ctx, particle, radius, zOpacity, colorStyles, transform)=>{
            for (const updater of this._preDrawUpdaters){
                if (updater.getColorStyles) {
                    const { fill , stroke  } = updater.getColorStyles(particle, ctx, radius, zOpacity);
                    if (fill) colorStyles.fill = fill;
                    if (stroke) colorStyles.stroke = stroke;
                }
                if (updater.getTransformValues) {
                    const updaterTransform = updater.getTransformValues(particle);
                    for(const key in updaterTransform)setTransformValue(transform, updaterTransform, key);
                }
                updater.beforeDraw?.(particle);
            }
        };
        this._applyResizePlugins = ()=>{
            for (const plugin of this._resizePlugins)plugin.resize?.();
        };
        this._getPluginParticleColors = (particle)=>{
            let fColor, sColor;
            for (const plugin of this._colorPlugins){
                if (!fColor && plugin.particleFillColor) fColor = (0, _colorUtilsJs.rangeColorToHsl)(plugin.particleFillColor(particle));
                if (!sColor && plugin.particleStrokeColor) sColor = (0, _colorUtilsJs.rangeColorToHsl)(plugin.particleStrokeColor(particle));
                if (fColor && sColor) break;
            }
            return [
                fColor,
                sColor
            ];
        };
        this._initCover = async ()=>{
            const options = this.container.actualOptions, cover = options.backgroundMask.cover, color = cover.color;
            if (color) {
                const coverRgb = (0, _colorUtilsJs.rangeColorToRgb)(color);
                if (coverRgb) {
                    const coverColor = {
                        ...coverRgb,
                        a: cover.opacity
                    };
                    this._coverColorStyle = (0, _colorUtilsJs.getStyleFromRgb)(coverColor, coverColor.a);
                }
            } else await new Promise((resolve, reject)=>{
                if (!cover.image) return;
                const img = document.createElement("img");
                img.addEventListener("load", ()=>{
                    this._coverImage = {
                        image: img,
                        opacity: cover.opacity
                    };
                    resolve();
                });
                img.addEventListener("error", (evt)=>{
                    reject(evt.error);
                });
                img.src = cover.image;
            });
        };
        this._initStyle = ()=>{
            const element = this.element, options = this.container.actualOptions;
            if (!element) return;
            if (this._fullScreen) {
                this._originalStyle = (0, _utilsJs.deepExtend)({}, element.style);
                this._setFullScreenStyle();
            } else this._resetOriginalStyle();
            for(const key in options.style){
                if (!key || !options.style) continue;
                const value = options.style[key];
                if (!value) continue;
                element.style.setProperty(key, value, "important");
            }
        };
        this._initTrail = async ()=>{
            const options = this.container.actualOptions, trail = options.particles.move.trail, trailFill = trail.fill;
            if (!trail.enable) return;
            const factorNumerator = 1, opacity = factorNumerator / trail.length;
            if (trailFill.color) {
                const fillColor = (0, _colorUtilsJs.rangeColorToRgb)(trailFill.color);
                if (!fillColor) return;
                this._trailFill = {
                    color: {
                        ...fillColor
                    },
                    opacity
                };
            } else await new Promise((resolve, reject)=>{
                if (!trailFill.image) return;
                const img = document.createElement("img");
                img.addEventListener("load", ()=>{
                    this._trailFill = {
                        image: img,
                        opacity
                    };
                    resolve();
                });
                img.addEventListener("error", (evt)=>{
                    reject(evt.error);
                });
                img.src = trailFill.image;
            });
        };
        this._paintBase = (baseColor)=>{
            this.draw((ctx)=>(0, _canvasUtilsJs.paintBase)(ctx, this.size, baseColor));
        };
        this._paintImage = (image, opacity)=>{
            this.draw((ctx)=>(0, _canvasUtilsJs.paintImage)(ctx, this.size, image, opacity));
        };
        this._repairStyle = ()=>{
            const element = this.element;
            if (!element) return;
            this._safeMutationObserver((observer)=>observer.disconnect());
            this._initStyle();
            this.initBackground();
            this._safeMutationObserver((observer)=>observer.observe(element, {
                    attributes: true
                }));
        };
        this._resetOriginalStyle = ()=>{
            const element = this.element, originalStyle = this._originalStyle;
            if (!(element && originalStyle)) return;
            setStyle(element, originalStyle);
        };
        this._safeMutationObserver = (callback)=>{
            if (!this._mutationObserver) return;
            callback(this._mutationObserver);
        };
        this._setFullScreenStyle = ()=>{
            const element = this.element;
            if (!element) return;
            const radix = 10;
            setStyle(element, {
                position: "fixed",
                zIndex: this.container.actualOptions.fullScreen.zIndex.toString(radix),
                top: "0",
                left: "0",
                width: "100%",
                height: "100%"
            }, true);
        };
        this.size = {
            height: 0,
            width: 0
        };
        this._context = null;
        this._generated = false;
        this._preDrawUpdaters = [];
        this._postDrawUpdaters = [];
        this._resizePlugins = [];
        this._colorPlugins = [];
    }
    get _fullScreen() {
        return this.container.actualOptions.fullScreen.enable;
    }
    clear() {
        const options = this.container.actualOptions, trail = options.particles.move.trail, trailFill = this._trailFill, minimumLength = 0;
        if (options.backgroundMask.enable) this.paint();
        else if (trail.enable && trail.length > minimumLength && trailFill) {
            if (trailFill.color) this._paintBase((0, _colorUtilsJs.getStyleFromRgb)(trailFill.color, trailFill.opacity));
            else if (trailFill.image) this._paintImage(trailFill.image, trailFill.opacity);
        } else if (options.clear) this.draw((ctx)=>{
            (0, _canvasUtilsJs.clear)(ctx, this.size);
        });
    }
    destroy() {
        this.stop();
        if (this._generated) {
            const element = this.element;
            element?.remove();
        } else this._resetOriginalStyle();
        this._preDrawUpdaters = [];
        this._postDrawUpdaters = [];
        this._resizePlugins = [];
        this._colorPlugins = [];
    }
    draw(cb) {
        const ctx = this._context;
        if (!ctx) return;
        return cb(ctx);
    }
    drawAsync(cb) {
        const ctx = this._context;
        if (!ctx) return undefined;
        return cb(ctx);
    }
    drawParticle(particle, delta) {
        if (particle.spawning || particle.destroyed) return;
        const radius = particle.getRadius(), minimumSize = 0;
        if (radius <= minimumSize) return;
        const pfColor = particle.getFillColor(), psColor = particle.getStrokeColor() ?? pfColor;
        let [fColor, sColor] = this._getPluginParticleColors(particle);
        if (!fColor) fColor = pfColor;
        if (!sColor) sColor = psColor;
        if (!fColor && !sColor) return;
        this.draw((ctx)=>{
            const container = this.container, options = container.actualOptions, zIndexOptions = particle.options.zIndex, zIndexFactorOffset = 1, zIndexFactor = zIndexFactorOffset - particle.zIndexFactor, zOpacityFactor = zIndexFactor ** zIndexOptions.opacityRate, defaultOpacity = 1, opacity = (particle.bubble.opacity ?? particle.opacity?.value) ?? defaultOpacity, strokeOpacity = particle.strokeOpacity ?? opacity, zOpacity = opacity * zOpacityFactor, zStrokeOpacity = strokeOpacity * zOpacityFactor, transform = {}, colorStyles = {
                fill: fColor ? (0, _colorUtilsJs.getStyleFromHsl)(fColor, zOpacity) : undefined
            };
            colorStyles.stroke = sColor ? (0, _colorUtilsJs.getStyleFromHsl)(sColor, zStrokeOpacity) : colorStyles.fill;
            this._applyPreDrawUpdaters(ctx, particle, radius, zOpacity, colorStyles, transform);
            (0, _canvasUtilsJs.drawParticle)({
                container,
                context: ctx,
                particle,
                delta,
                colorStyles,
                backgroundMask: options.backgroundMask.enable,
                composite: options.backgroundMask.composite,
                radius: radius * zIndexFactor ** zIndexOptions.sizeRate,
                opacity: zOpacity,
                shadow: particle.options.shadow,
                transform
            });
            this._applyPostDrawUpdaters(particle);
        });
    }
    drawParticlePlugin(plugin, particle, delta) {
        this.draw((ctx)=>(0, _canvasUtilsJs.drawParticlePlugin)(ctx, plugin, particle, delta));
    }
    drawPlugin(plugin, delta) {
        this.draw((ctx)=>(0, _canvasUtilsJs.drawPlugin)(ctx, plugin, delta));
    }
    async init() {
        this._safeMutationObserver((obs)=>obs.disconnect());
        this._mutationObserver = (0, _utilsJs.safeMutationObserver)((records)=>{
            for (const record of records)if (record.type === "attributes" && record.attributeName === "style") this._repairStyle();
        });
        this.resize();
        this._initStyle();
        await this._initCover();
        try {
            await this._initTrail();
        } catch (e) {
            (0, _utilsJs.getLogger)().error(e);
        }
        this.initBackground();
        this._safeMutationObserver((obs)=>{
            if (!this.element) return;
            obs.observe(this.element, {
                attributes: true
            });
        });
        this.initUpdaters();
        this.initPlugins();
        this.paint();
    }
    initBackground() {
        const options = this.container.actualOptions, background = options.background, element = this.element;
        if (!element) return;
        const elementStyle = element.style;
        if (!elementStyle) return;
        if (background.color) {
            const color = (0, _colorUtilsJs.rangeColorToRgb)(background.color);
            elementStyle.backgroundColor = color ? (0, _colorUtilsJs.getStyleFromRgb)(color, background.opacity) : "";
        } else elementStyle.backgroundColor = "";
        elementStyle.backgroundImage = background.image || "";
        elementStyle.backgroundPosition = background.position || "";
        elementStyle.backgroundRepeat = background.repeat || "";
        elementStyle.backgroundSize = background.size || "";
    }
    initPlugins() {
        this._resizePlugins = [];
        for (const [, plugin] of this.container.plugins){
            if (plugin.resize) this._resizePlugins.push(plugin);
            if (plugin.particleFillColor ?? plugin.particleStrokeColor) this._colorPlugins.push(plugin);
        }
    }
    initUpdaters() {
        this._preDrawUpdaters = [];
        this._postDrawUpdaters = [];
        for (const updater of this.container.particles.updaters){
            if (updater.afterDraw) this._postDrawUpdaters.push(updater);
            if ((updater.getColorStyles ?? updater.getTransformValues) ?? updater.beforeDraw) this._preDrawUpdaters.push(updater);
        }
    }
    loadCanvas(canvas) {
        if (this._generated && this.element) this.element.remove();
        this._generated = canvas.dataset && (0, _constantsJs.generatedAttribute) in canvas.dataset ? canvas.dataset[0, _constantsJs.generatedAttribute] === "true" : this._generated;
        this.element = canvas;
        this.element.ariaHidden = "true";
        this._originalStyle = (0, _utilsJs.deepExtend)({}, this.element.style);
        this.size.height = canvas.offsetHeight;
        this.size.width = canvas.offsetWidth;
        this._context = this.element.getContext("2d");
        this._safeMutationObserver((obs)=>{
            if (!this.element) return;
            obs.observe(this.element, {
                attributes: true
            });
        });
        this.container.retina.init();
        this.initBackground();
    }
    paint() {
        const options = this.container.actualOptions;
        this.draw((ctx)=>{
            if (options.backgroundMask.enable && options.backgroundMask.cover) {
                (0, _canvasUtilsJs.clear)(ctx, this.size);
                if (this._coverImage) this._paintImage(this._coverImage.image, this._coverImage.opacity);
                else if (this._coverColorStyle) this._paintBase(this._coverColorStyle);
                else this._paintBase();
            } else this._paintBase();
        });
    }
    resize() {
        if (!this.element) return false;
        const container = this.container, pxRatio = container.retina.pixelRatio, size = container.canvas.size, newSize = {
            width: this.element.offsetWidth * pxRatio,
            height: this.element.offsetHeight * pxRatio
        };
        if (newSize.height === size.height && newSize.width === size.width && newSize.height === this.element.height && newSize.width === this.element.width) return false;
        const oldSize = {
            ...size
        };
        this.element.width = size.width = this.element.offsetWidth * pxRatio;
        this.element.height = size.height = this.element.offsetHeight * pxRatio;
        if (this.container.started) container.particles.setResizeFactor({
            width: size.width / oldSize.width,
            height: size.height / oldSize.height
        });
        return true;
    }
    stop() {
        this._safeMutationObserver((obs)=>obs.disconnect());
        this._mutationObserver = undefined;
        this.draw((ctx)=>(0, _canvasUtilsJs.clear)(ctx, this.size));
    }
    async windowResize() {
        if (!this.element || !this.resize()) return;
        const container = this.container, needsRefresh = container.updateActualOptions();
        container.particles.setDensity();
        this._applyResizePlugins();
        if (needsRefresh) await container.refresh();
    }
}

},{"../Utils/CanvasUtils.js":"8COXr","../Utils/Utils.js":"17M4n","../Utils/ColorUtils.js":"9NWNO","./Utils/Constants.js":"9fra9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dCar4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EventListeners", ()=>EventListeners);
var _utilsJs = require("../../Utils/Utils.js");
var _constantsJs = require("./Constants.js");
var _typeUtilsJs = require("../../Utils/TypeUtils.js");
const double = 2;
function manageListener(element, event, handler, add, options) {
    if (add) {
        let addOptions = {
            passive: true
        };
        if ((0, _typeUtilsJs.isBoolean)(options)) addOptions.capture = options;
        else if (options !== undefined) addOptions = options;
        element.addEventListener(event, handler, addOptions);
    } else {
        const removeOptions = options;
        element.removeEventListener(event, handler, removeOptions);
    }
}
class EventListeners {
    constructor(container){
        this.container = container;
        this._doMouseTouchClick = (e)=>{
            const container = this.container, options = container.actualOptions;
            if (this._canPush) {
                const mouseInteractivity = container.interactivity.mouse, mousePos = mouseInteractivity.position;
                if (!mousePos) return;
                mouseInteractivity.clickPosition = {
                    ...mousePos
                };
                mouseInteractivity.clickTime = new Date().getTime();
                const onClick = options.interactivity.events.onClick;
                (0, _utilsJs.executeOnSingleOrMultiple)(onClick.mode, (mode)=>this.container.handleClickMode(mode));
            }
            if (e.type === "touchend") {
                const touchDelay = 500;
                setTimeout(()=>this._mouseTouchFinish(), touchDelay);
            }
        };
        this._handleThemeChange = (e)=>{
            const mediaEvent = e, container = this.container, options = container.options, defaultThemes = options.defaultThemes, themeName = mediaEvent.matches ? defaultThemes.dark : defaultThemes.light, theme = options.themes.find((theme)=>theme.name === themeName);
            if (theme && theme.default.auto) container.loadTheme(themeName);
        };
        this._handleVisibilityChange = ()=>{
            const container = this.container, options = container.actualOptions;
            this._mouseTouchFinish();
            if (!options.pauseOnBlur) return;
            if (document && document.hidden) {
                container.pageHidden = true;
                container.pause();
            } else {
                container.pageHidden = false;
                if (container.animationStatus) container.play(true);
                else container.draw(true);
            }
        };
        this._handleWindowResize = ()=>{
            if (this._resizeTimeout) {
                clearTimeout(this._resizeTimeout);
                delete this._resizeTimeout;
            }
            const handleResize = async ()=>{
                const canvas = this.container.canvas;
                await canvas?.windowResize();
            };
            this._resizeTimeout = setTimeout(()=>void handleResize(), this.container.actualOptions.interactivity.events.resize.delay * (0, _constantsJs.millisecondsToSeconds));
        };
        this._manageInteractivityListeners = (mouseLeaveTmpEvent, add)=>{
            const handlers = this._handlers, container = this.container, options = container.actualOptions;
            const interactivityEl = container.interactivity.element;
            if (!interactivityEl) return;
            const html = interactivityEl, canvasEl = container.canvas.element;
            if (canvasEl) canvasEl.style.pointerEvents = html === canvasEl ? "initial" : "none";
            if (!(options.interactivity.events.onHover.enable || options.interactivity.events.onClick.enable)) return;
            manageListener(interactivityEl, (0, _constantsJs.mouseMoveEvent), handlers.mouseMove, add);
            manageListener(interactivityEl, (0, _constantsJs.touchStartEvent), handlers.touchStart, add);
            manageListener(interactivityEl, (0, _constantsJs.touchMoveEvent), handlers.touchMove, add);
            if (!options.interactivity.events.onClick.enable) manageListener(interactivityEl, (0, _constantsJs.touchEndEvent), handlers.touchEnd, add);
            else {
                manageListener(interactivityEl, (0, _constantsJs.touchEndEvent), handlers.touchEndClick, add);
                manageListener(interactivityEl, (0, _constantsJs.mouseUpEvent), handlers.mouseUp, add);
                manageListener(interactivityEl, (0, _constantsJs.mouseDownEvent), handlers.mouseDown, add);
            }
            manageListener(interactivityEl, mouseLeaveTmpEvent, handlers.mouseLeave, add);
            manageListener(interactivityEl, (0, _constantsJs.touchCancelEvent), handlers.touchCancel, add);
        };
        this._manageListeners = (add)=>{
            const handlers = this._handlers, container = this.container, options = container.actualOptions, detectType = options.interactivity.detectsOn, canvasEl = container.canvas.element;
            let mouseLeaveTmpEvent = (0, _constantsJs.mouseLeaveEvent);
            if (detectType === "window") {
                container.interactivity.element = window;
                mouseLeaveTmpEvent = (0, _constantsJs.mouseOutEvent);
            } else if (detectType === "parent" && canvasEl) container.interactivity.element = canvasEl.parentElement ?? canvasEl.parentNode;
            else container.interactivity.element = canvasEl;
            this._manageMediaMatch(add);
            this._manageResize(add);
            this._manageInteractivityListeners(mouseLeaveTmpEvent, add);
            if (document) manageListener(document, (0, _constantsJs.visibilityChangeEvent), handlers.visibilityChange, add, false);
        };
        this._manageMediaMatch = (add)=>{
            const handlers = this._handlers, mediaMatch = (0, _utilsJs.safeMatchMedia)("(prefers-color-scheme: dark)");
            if (!mediaMatch) return;
            if (mediaMatch.addEventListener !== undefined) {
                manageListener(mediaMatch, "change", handlers.themeChange, add);
                return;
            }
            if (mediaMatch.addListener === undefined) return;
            if (add) mediaMatch.addListener(handlers.oldThemeChange);
            else mediaMatch.removeListener(handlers.oldThemeChange);
        };
        this._manageResize = (add)=>{
            const handlers = this._handlers, container = this.container, options = container.actualOptions;
            if (!options.interactivity.events.resize) return;
            if (typeof ResizeObserver === "undefined") {
                manageListener(window, (0, _constantsJs.resizeEvent), handlers.resize, add);
                return;
            }
            const canvasEl = container.canvas.element;
            if (this._resizeObserver && !add) {
                if (canvasEl) this._resizeObserver.unobserve(canvasEl);
                this._resizeObserver.disconnect();
                delete this._resizeObserver;
            } else if (!this._resizeObserver && add && canvasEl) {
                this._resizeObserver = new ResizeObserver((entries)=>{
                    const entry = entries.find((e)=>e.target === canvasEl);
                    if (!entry) return;
                    this._handleWindowResize();
                });
                this._resizeObserver.observe(canvasEl);
            }
        };
        this._mouseDown = ()=>{
            const { interactivity  } = this.container;
            if (!interactivity) return;
            const { mouse  } = interactivity;
            mouse.clicking = true;
            mouse.downPosition = mouse.position;
        };
        this._mouseTouchClick = (e)=>{
            const container = this.container, options = container.actualOptions, { mouse  } = container.interactivity;
            mouse.inside = true;
            let handled = false;
            const mousePosition = mouse.position;
            if (!mousePosition || !options.interactivity.events.onClick.enable) return;
            for (const [, plugin] of container.plugins){
                if (!plugin.clickPositionValid) continue;
                handled = plugin.clickPositionValid(mousePosition);
                if (handled) break;
            }
            if (!handled) this._doMouseTouchClick(e);
            mouse.clicking = false;
        };
        this._mouseTouchFinish = ()=>{
            const interactivity = this.container.interactivity;
            if (!interactivity) return;
            const mouse = interactivity.mouse;
            delete mouse.position;
            delete mouse.clickPosition;
            delete mouse.downPosition;
            interactivity.status = (0, _constantsJs.mouseLeaveEvent);
            mouse.inside = false;
            mouse.clicking = false;
        };
        this._mouseTouchMove = (e)=>{
            const container = this.container, options = container.actualOptions, interactivity = container.interactivity, canvasEl = container.canvas.element;
            if (!interactivity?.element) return;
            interactivity.mouse.inside = true;
            let pos;
            if (e.type.startsWith("pointer")) {
                this._canPush = true;
                const mouseEvent = e;
                if (interactivity.element === window) {
                    if (canvasEl) {
                        const clientRect = canvasEl.getBoundingClientRect();
                        pos = {
                            x: mouseEvent.clientX - clientRect.left,
                            y: mouseEvent.clientY - clientRect.top
                        };
                    }
                } else if (options.interactivity.detectsOn === "parent") {
                    const source = mouseEvent.target, target = mouseEvent.currentTarget;
                    if (source && target && canvasEl) {
                        const sourceRect = source.getBoundingClientRect(), targetRect = target.getBoundingClientRect(), canvasRect = canvasEl.getBoundingClientRect();
                        pos = {
                            x: mouseEvent.offsetX + double * sourceRect.left - (targetRect.left + canvasRect.left),
                            y: mouseEvent.offsetY + double * sourceRect.top - (targetRect.top + canvasRect.top)
                        };
                    } else pos = {
                        x: mouseEvent.offsetX ?? mouseEvent.clientX,
                        y: mouseEvent.offsetY ?? mouseEvent.clientY
                    };
                } else if (mouseEvent.target === canvasEl) pos = {
                    x: mouseEvent.offsetX ?? mouseEvent.clientX,
                    y: mouseEvent.offsetY ?? mouseEvent.clientY
                };
            } else {
                this._canPush = e.type !== "touchmove";
                if (canvasEl) {
                    const touchEvent = e, lengthOffset = 1, lastTouch = touchEvent.touches[touchEvent.touches.length - lengthOffset], canvasRect1 = canvasEl.getBoundingClientRect(), defaultCoordinate = 0;
                    pos = {
                        x: lastTouch.clientX - (canvasRect1.left ?? defaultCoordinate),
                        y: lastTouch.clientY - (canvasRect1.top ?? defaultCoordinate)
                    };
                }
            }
            const pxRatio = container.retina.pixelRatio;
            if (pos) {
                pos.x *= pxRatio;
                pos.y *= pxRatio;
            }
            interactivity.mouse.position = pos;
            interactivity.status = (0, _constantsJs.mouseMoveEvent);
        };
        this._touchEnd = (e)=>{
            const evt = e, touches = Array.from(evt.changedTouches);
            for (const touch of touches)this._touches.delete(touch.identifier);
            this._mouseTouchFinish();
        };
        this._touchEndClick = (e)=>{
            const evt = e, touches = Array.from(evt.changedTouches);
            for (const touch of touches)this._touches.delete(touch.identifier);
            this._mouseTouchClick(e);
        };
        this._touchStart = (e)=>{
            const evt = e, touches = Array.from(evt.changedTouches);
            for (const touch of touches)this._touches.set(touch.identifier, performance.now());
            this._mouseTouchMove(e);
        };
        this._canPush = true;
        this._touches = new Map();
        this._handlers = {
            mouseDown: ()=>this._mouseDown(),
            mouseLeave: ()=>this._mouseTouchFinish(),
            mouseMove: (e)=>this._mouseTouchMove(e),
            mouseUp: (e)=>this._mouseTouchClick(e),
            touchStart: (e)=>this._touchStart(e),
            touchMove: (e)=>this._mouseTouchMove(e),
            touchEnd: (e)=>this._touchEnd(e),
            touchCancel: (e)=>this._touchEnd(e),
            touchEndClick: (e)=>this._touchEndClick(e),
            visibilityChange: ()=>this._handleVisibilityChange(),
            themeChange: (e)=>this._handleThemeChange(e),
            oldThemeChange: (e)=>this._handleThemeChange(e),
            resize: ()=>{
                this._handleWindowResize();
            }
        };
    }
    addListeners() {
        this._manageListeners(true);
    }
    removeListeners() {
        this._manageListeners(false);
    }
}

},{"../../Utils/Utils.js":"17M4n","./Constants.js":"9fra9","../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a0Lei":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Particles", ()=>Particles);
var _utilsJs = require("../Utils/Utils.js");
var _interactionManagerJs = require("./Utils/InteractionManager.js");
var _particleJs = require("./Particle.js");
var _pointJs = require("./Utils/Point.js");
var _quadTreeJs = require("./Utils/QuadTree.js");
var _rangesJs = require("./Utils/Ranges.js");
var _constantsJs = require("./Utils/Constants.js");
const qTreeCapacity = 4, squareExp = 2, defaultRemoveQuantity = 1;
const qTreeRectangle = (canvasSize)=>{
    const { height , width  } = canvasSize, posOffset = -0.25, sizeFactor = 1.5;
    return new (0, _rangesJs.Rectangle)(posOffset * width, posOffset * height, sizeFactor * width, sizeFactor * height);
};
class Particles {
    constructor(engine, container){
        this._addToPool = (...particles)=>{
            for (const particle of particles)this._pool.push(particle);
        };
        this._applyDensity = (options, manualCount, group)=>{
            const numberOptions = options.number;
            if (!options.number.density?.enable) {
                if (group === undefined) this._limit = numberOptions.limit.value;
                else if (numberOptions.limit) this._groupLimits.set(group, numberOptions.limit.value);
                return;
            }
            const densityFactor = this._initDensityFactor(numberOptions.density), optParticlesNumber = numberOptions.value, minLimit = 0, optParticlesLimit = numberOptions.limit.value > minLimit ? numberOptions.limit.value : optParticlesNumber, particlesNumber = Math.min(optParticlesNumber, optParticlesLimit) * densityFactor + manualCount, particlesCount = Math.min(this.count, this.filter((t)=>t.group === group).length);
            if (group === undefined) this._limit = numberOptions.limit.value * densityFactor;
            else this._groupLimits.set(group, numberOptions.limit.value * densityFactor);
            if (particlesCount < particlesNumber) this.push(Math.abs(particlesNumber - particlesCount), undefined, options, group);
            else if (particlesCount > particlesNumber) this.removeQuantity(particlesCount - particlesNumber, group);
        };
        this._initDensityFactor = (densityOptions)=>{
            const container = this._container, defaultFactor = 1;
            if (!container.canvas.element || !densityOptions.enable) return defaultFactor;
            const canvas = container.canvas.element, pxRatio = container.retina.pixelRatio;
            return canvas.width * canvas.height / (densityOptions.height * densityOptions.width * pxRatio ** squareExp);
        };
        this._pushParticle = (position, overrideOptions, group, initializer)=>{
            try {
                let particle = this._pool.pop();
                if (!particle) particle = new (0, _particleJs.Particle)(this._engine, this._container);
                particle.init(this._nextId, position, overrideOptions, group);
                let canAdd = true;
                if (initializer) canAdd = initializer(particle);
                if (!canAdd) return;
                this._array.push(particle);
                this._zArray.push(particle);
                this._nextId++;
                this._engine.dispatchEvent("particleAdded", {
                    container: this._container,
                    data: {
                        particle
                    }
                });
                return particle;
            } catch (e) {
                (0, _utilsJs.getLogger)().warning(`${(0, _constantsJs.errorPrefix)} adding particle: ${e}`);
            }
        };
        this._removeParticle = (index, group, override)=>{
            const particle = this._array[index];
            if (!particle || particle.group !== group) return false;
            const zIdx = this._zArray.indexOf(particle), deleteCount = 1;
            this._array.splice(index, deleteCount);
            this._zArray.splice(zIdx, deleteCount);
            particle.destroy(override);
            this._engine.dispatchEvent("particleRemoved", {
                container: this._container,
                data: {
                    particle
                }
            });
            this._addToPool(particle);
            return true;
        };
        this._engine = engine;
        this._container = container;
        this._nextId = 0;
        this._array = [];
        this._zArray = [];
        this._pool = [];
        this._limit = 0;
        this._groupLimits = new Map();
        this._needsSort = false;
        this._lastZIndex = 0;
        this._interactionManager = new (0, _interactionManagerJs.InteractionManager)(engine, container);
        this._pluginsInitialized = false;
        const canvasSize = container.canvas.size;
        this.quadTree = new (0, _quadTreeJs.QuadTree)(qTreeRectangle(canvasSize), qTreeCapacity);
        this.movers = [];
        this.updaters = [];
    }
    get count() {
        return this._array.length;
    }
    addManualParticles() {
        const container = this._container, options = container.actualOptions;
        for (const particle of options.manualParticles)this.addParticle(particle.position ? (0, _utilsJs.getPosition)(particle.position, container.canvas.size) : undefined, particle.options);
    }
    addParticle(position, overrideOptions, group, initializer) {
        const limitOptions = this._container.actualOptions.particles.number.limit, limit = group === undefined ? this._limit : this._groupLimits.get(group) ?? this._limit, currentCount = this.count, minLimit = 0;
        if (limit > minLimit) {
            if (limitOptions.mode === "delete") {
                const countOffset = 1, minCount = 0, countToRemove = currentCount + countOffset - limit;
                if (countToRemove > minCount) this.removeQuantity(countToRemove);
            } else if (limitOptions.mode === "wait") {
                if (currentCount >= limit) return;
            }
        }
        return this._pushParticle(position, overrideOptions, group, initializer);
    }
    clear() {
        this._array = [];
        this._zArray = [];
        this._pluginsInitialized = false;
    }
    destroy() {
        this._array = [];
        this._zArray = [];
        this.movers = [];
        this.updaters = [];
    }
    draw(delta) {
        const container = this._container, canvas = container.canvas;
        canvas.clear();
        this.update(delta);
        for (const [, plugin] of container.plugins)canvas.drawPlugin(plugin, delta);
        for (const p of this._zArray)p.draw(delta);
    }
    filter(condition) {
        return this._array.filter(condition);
    }
    find(condition) {
        return this._array.find(condition);
    }
    get(index) {
        return this._array[index];
    }
    handleClickMode(mode) {
        this._interactionManager.handleClickMode(mode);
    }
    async init() {
        const container = this._container, options = container.actualOptions;
        this._lastZIndex = 0;
        this._needsSort = false;
        await this.initPlugins();
        let handled = false;
        for (const [, plugin] of container.plugins){
            if (plugin.particlesInitialization !== undefined) handled = plugin.particlesInitialization();
            if (handled) break;
        }
        this.addManualParticles();
        if (!handled) {
            const particlesOptions = options.particles, groups = particlesOptions.groups;
            for(const group in groups){
                const groupOptions = groups[group];
                for(let i = this.count, j = 0; j < groupOptions.number?.value && i < particlesOptions.number.value; i++, j++)this.addParticle(undefined, groupOptions, group);
            }
            for(let i1 = this.count; i1 < particlesOptions.number.value; i1++)this.addParticle();
        }
    }
    async initPlugins() {
        if (this._pluginsInitialized) return;
        const container = this._container;
        this.movers = await this._engine.getMovers(container, true);
        this.updaters = await this._engine.getUpdaters(container, true);
        await this._interactionManager.init();
        for (const [, pathGenerator] of container.pathGenerators)pathGenerator.init(container);
    }
    push(nb, mouse, overrideOptions, group) {
        for(let i = 0; i < nb; i++)this.addParticle(mouse?.position, overrideOptions, group);
    }
    async redraw() {
        this.clear();
        await this.init();
        this.draw({
            value: 0,
            factor: 0
        });
    }
    remove(particle, group, override) {
        this.removeAt(this._array.indexOf(particle), undefined, group, override);
    }
    removeAt(index, quantity = defaultRemoveQuantity, group, override) {
        const minIndex = 0;
        if (index < minIndex || index > this.count) return;
        let deleted = 0;
        for(let i = index; deleted < quantity && i < this.count; i++)if (this._removeParticle(i--, group, override)) deleted++;
    }
    removeQuantity(quantity, group) {
        const defaultIndex = 0;
        this.removeAt(defaultIndex, quantity, group);
    }
    setDensity() {
        const options = this._container.actualOptions, groups = options.particles.groups, manualCount = 0;
        for(const group in groups)this._applyDensity(groups[group], manualCount, group);
        this._applyDensity(options.particles, options.manualParticles.length);
    }
    setLastZIndex(zIndex) {
        this._lastZIndex = zIndex;
        this._needsSort = this._needsSort || this._lastZIndex < zIndex;
    }
    setResizeFactor(factor) {
        this._resizeFactor = factor;
    }
    update(delta) {
        const container = this._container, particlesToDelete = new Set();
        this.quadTree = new (0, _quadTreeJs.QuadTree)(qTreeRectangle(container.canvas.size), qTreeCapacity);
        for (const [, pathGenerator] of container.pathGenerators)pathGenerator.update();
        for (const [, plugin] of container.plugins)plugin.update?.(delta);
        const resizeFactor = this._resizeFactor;
        for (const particle of this._array){
            if (resizeFactor && !particle.ignoresResizeRatio) {
                particle.position.x *= resizeFactor.width;
                particle.position.y *= resizeFactor.height;
                particle.initialPosition.x *= resizeFactor.width;
                particle.initialPosition.y *= resizeFactor.height;
            }
            particle.ignoresResizeRatio = false;
            this._interactionManager.reset(particle);
            for (const [, plugin1] of this._container.plugins){
                if (particle.destroyed) break;
                plugin1.particleUpdate?.(particle, delta);
            }
            for (const mover of this.movers)if (mover.isEnabled(particle)) mover.move(particle, delta);
            if (particle.destroyed) {
                particlesToDelete.add(particle);
                continue;
            }
            this.quadTree.insert(new (0, _pointJs.Point)(particle.getPosition(), particle));
        }
        if (particlesToDelete.size) {
            const checkDelete = (p)=>!particlesToDelete.has(p);
            this._array = this.filter(checkDelete);
            this._zArray = this._zArray.filter(checkDelete);
            for (const particle1 of particlesToDelete)this._engine.dispatchEvent("particleRemoved", {
                container: this._container,
                data: {
                    particle: particle1
                }
            });
            this._addToPool(...particlesToDelete);
        }
        this._interactionManager.externalInteract(delta);
        for (const particle2 of this._array){
            for (const updater of this.updaters)updater.update(particle2, delta);
            if (!particle2.destroyed && !particle2.spawning) this._interactionManager.particlesInteract(particle2, delta);
        }
        delete this._resizeFactor;
        if (this._needsSort) {
            const zArray = this._zArray;
            zArray.sort((a, b)=>b.position.z - a.position.z || a.id - b.id);
            const lengthOffset = 1;
            this._lastZIndex = zArray[zArray.length - lengthOffset].position.z;
            this._needsSort = false;
        }
    }
}

},{"../Utils/Utils.js":"17M4n","./Utils/InteractionManager.js":"aNeHA","./Particle.js":"gILLP","./Utils/Point.js":"iGxI4","./Utils/QuadTree.js":"kT9VC","./Utils/Ranges.js":"7Uilo","./Utils/Constants.js":"9fra9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aNeHA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InteractionManager", ()=>InteractionManager);
class InteractionManager {
    constructor(engine, container){
        this.container = container;
        this._engine = engine;
        this._interactors = [];
        this._externalInteractors = [];
        this._particleInteractors = [];
    }
    externalInteract(delta) {
        for (const interactor of this._externalInteractors)if (interactor.isEnabled()) interactor.interact(delta);
    }
    handleClickMode(mode) {
        for (const interactor of this._externalInteractors)interactor.handleClickMode?.(mode);
    }
    async init() {
        this._interactors = await this._engine.getInteractors(this.container, true);
        this._externalInteractors = [];
        this._particleInteractors = [];
        for (const interactor of this._interactors){
            switch(interactor.type){
                case "external":
                    this._externalInteractors.push(interactor);
                    break;
                case "particles":
                    this._particleInteractors.push(interactor);
                    break;
            }
            interactor.init();
        }
    }
    particlesInteract(particle, delta) {
        for (const interactor of this._externalInteractors)interactor.clear(particle, delta);
        for (const interactor1 of this._particleInteractors)if (interactor1.isEnabled(particle)) interactor1.interact(particle, delta);
    }
    reset(particle) {
        for (const interactor of this._externalInteractors)if (interactor.isEnabled()) interactor.reset(particle);
        for (const interactor1 of this._particleInteractors)if (interactor1.isEnabled(particle)) interactor1.reset(particle);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gILLP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Particle", ()=>Particle);
var _vectorsJs = require("./Utils/Vectors.js");
var _numberUtilsJs = require("../Utils/NumberUtils.js");
var _utilsJs = require("../Utils/Utils.js");
var _constantsJs = require("./Utils/Constants.js");
var _colorUtilsJs = require("../Utils/ColorUtils.js");
var _interactivityJs = require("../Options/Classes/Interactivity/Interactivity.js");
var _canvasUtilsJs = require("../Utils/CanvasUtils.js");
var _optionsUtilsJs = require("../Utils/OptionsUtils.js");
const defaultRetryCount = 0, double = 2, half = 0.5, squareExp = 2;
function loadEffectData(effect, effectOptions, id, reduceDuplicates) {
    const effectData = effectOptions.options[effect];
    if (!effectData) return;
    return (0, _utilsJs.deepExtend)({
        close: effectOptions.close,
        fill: effectOptions.fill
    }, (0, _utilsJs.itemFromSingleOrMultiple)(effectData, id, reduceDuplicates));
}
function loadShapeData(shape, shapeOptions, id, reduceDuplicates) {
    const shapeData = shapeOptions.options[shape];
    if (!shapeData) return;
    return (0, _utilsJs.deepExtend)({
        close: shapeOptions.close,
        fill: shapeOptions.fill
    }, (0, _utilsJs.itemFromSingleOrMultiple)(shapeData, id, reduceDuplicates));
}
function fixOutMode(data) {
    if (!(0, _utilsJs.isInArray)(data.outMode, data.checkModes)) return;
    const diameter = data.radius * double;
    if (data.coord > data.maxCoord - diameter) data.setCb(-data.radius);
    else if (data.coord < diameter) data.setCb(data.radius);
}
class Particle {
    constructor(engine, container){
        this.container = container;
        this._calcPosition = (container, position, zIndex, tryCount = defaultRetryCount)=>{
            for (const [, plugin] of container.plugins){
                const pluginPos = plugin.particlePosition !== undefined ? plugin.particlePosition(position, this) : undefined;
                if (pluginPos) return (0, _vectorsJs.Vector3d).create(pluginPos.x, pluginPos.y, zIndex);
            }
            const canvasSize = container.canvas.size, exactPosition = (0, _numberUtilsJs.calcExactPositionOrRandomFromSize)({
                size: canvasSize,
                position: position
            }), pos = (0, _vectorsJs.Vector3d).create(exactPosition.x, exactPosition.y, zIndex), radius = this.getRadius(), outModes = this.options.move.outModes, fixHorizontal = (outMode)=>{
                fixOutMode({
                    outMode,
                    checkModes: [
                        "bounce"
                    ],
                    coord: pos.x,
                    maxCoord: container.canvas.size.width,
                    setCb: (value)=>pos.x += value,
                    radius
                });
            }, fixVertical = (outMode)=>{
                fixOutMode({
                    outMode,
                    checkModes: [
                        "bounce"
                    ],
                    coord: pos.y,
                    maxCoord: container.canvas.size.height,
                    setCb: (value)=>pos.y += value,
                    radius
                });
            };
            fixHorizontal(outModes.left ?? outModes.default);
            fixHorizontal(outModes.right ?? outModes.default);
            fixVertical(outModes.top ?? outModes.default);
            fixVertical(outModes.bottom ?? outModes.default);
            if (this._checkOverlap(pos, tryCount)) {
                const increment = 1;
                return this._calcPosition(container, undefined, zIndex, tryCount + increment);
            }
            return pos;
        };
        this._calculateVelocity = ()=>{
            const baseVelocity = (0, _numberUtilsJs.getParticleBaseVelocity)(this.direction), res = baseVelocity.copy(), moveOptions = this.options.move;
            if (moveOptions.direction === "inside" || moveOptions.direction === "outside") return res;
            const rad = (0, _numberUtilsJs.degToRad)((0, _numberUtilsJs.getRangeValue)(moveOptions.angle.value)), radOffset = (0, _numberUtilsJs.degToRad)((0, _numberUtilsJs.getRangeValue)(moveOptions.angle.offset)), range = {
                left: radOffset - rad * half,
                right: radOffset + rad * half
            };
            if (!moveOptions.straight) res.angle += (0, _numberUtilsJs.randomInRange)((0, _numberUtilsJs.setRangeValue)(range.left, range.right));
            if (moveOptions.random && typeof moveOptions.speed === "number") res.length *= (0, _numberUtilsJs.getRandom)();
            return res;
        };
        this._checkOverlap = (pos, tryCount = defaultRetryCount)=>{
            const collisionsOptions = this.options.collisions, radius = this.getRadius();
            if (!collisionsOptions.enable) return false;
            const overlapOptions = collisionsOptions.overlap;
            if (overlapOptions.enable) return false;
            const retries = overlapOptions.retries, minRetries = 0;
            if (retries >= minRetries && tryCount > retries) throw new Error(`${(0, _constantsJs.errorPrefix)} particle is overlapping and can't be placed`);
            return !!this.container.particles.find((particle)=>(0, _numberUtilsJs.getDistance)(pos, particle.position) < radius + particle.getRadius());
        };
        this._getRollColor = (color)=>{
            if (!color || !this.roll || !this.backColor && !this.roll.alter) return color;
            const rollFactor = 1, none = 0, backFactor = this.roll.horizontal && this.roll.vertical ? double * rollFactor : rollFactor, backSum = this.roll.horizontal ? Math.PI * half : none, rolled = Math.floor(((this.roll.angle ?? none) + backSum) / (Math.PI / backFactor)) % double;
            if (!rolled) return color;
            if (this.backColor) return this.backColor;
            if (this.roll.alter) return (0, _canvasUtilsJs.alterHsl)(color, this.roll.alter.type, this.roll.alter.value);
            return color;
        };
        this._initPosition = (position)=>{
            const container = this.container, zIndexValue = (0, _numberUtilsJs.getRangeValue)(this.options.zIndex.value), minZ = 0;
            this.position = this._calcPosition(container, position, (0, _numberUtilsJs.clamp)(zIndexValue, minZ, container.zLayers));
            this.initialPosition = this.position.copy();
            const canvasSize = container.canvas.size, defaultRadius = 0;
            this.moveCenter = {
                ...(0, _utilsJs.getPosition)(this.options.move.center, canvasSize),
                radius: this.options.move.center.radius ?? defaultRadius,
                mode: this.options.move.center.mode ?? "percent"
            };
            this.direction = (0, _numberUtilsJs.getParticleDirectionAngle)(this.options.move.direction, this.position, this.moveCenter);
            switch(this.options.move.direction){
                case "inside":
                    this.outType = "inside";
                    break;
                case "outside":
                    this.outType = "outside";
                    break;
            }
            this.offset = (0, _vectorsJs.Vector).origin;
        };
        this._engine = engine;
    }
    destroy(override) {
        if (this.unbreakable || this.destroyed) return;
        this.destroyed = true;
        this.bubble.inRange = false;
        this.slow.inRange = false;
        const container = this.container, pathGenerator = this.pathGenerator, shapeDrawer = container.shapeDrawers.get(this.shape);
        shapeDrawer?.particleDestroy?.(this);
        for (const [, plugin] of container.plugins)plugin.particleDestroyed?.(this, override);
        for (const updater of container.particles.updaters)updater.particleDestroyed?.(this, override);
        pathGenerator?.reset(this);
        this._engine.dispatchEvent("particleDestroyed", {
            container: this.container,
            data: {
                particle: this
            }
        });
    }
    draw(delta) {
        const container = this.container, canvas = container.canvas;
        for (const [, plugin] of container.plugins)canvas.drawParticlePlugin(plugin, this, delta);
        canvas.drawParticle(this, delta);
    }
    getFillColor() {
        return this._getRollColor(this.bubble.color ?? (0, _colorUtilsJs.getHslFromAnimation)(this.color));
    }
    getMass() {
        return this.getRadius() ** squareExp * Math.PI * half;
    }
    getPosition() {
        return {
            x: this.position.x + this.offset.x,
            y: this.position.y + this.offset.y,
            z: this.position.z
        };
    }
    getRadius() {
        return this.bubble.radius ?? this.size.value;
    }
    getStrokeColor() {
        return this._getRollColor(this.bubble.color ?? (0, _colorUtilsJs.getHslFromAnimation)(this.strokeColor));
    }
    init(id, position, overrideOptions, group) {
        const container = this.container, engine = this._engine;
        this.id = id;
        this.group = group;
        this.effectClose = true;
        this.effectFill = true;
        this.shapeClose = true;
        this.shapeFill = true;
        this.pathRotation = false;
        this.lastPathTime = 0;
        this.destroyed = false;
        this.unbreakable = false;
        this.rotation = 0;
        this.misplaced = false;
        this.retina = {
            maxDistance: {}
        };
        this.outType = "normal";
        this.ignoresResizeRatio = true;
        const pxRatio = container.retina.pixelRatio, mainOptions = container.actualOptions, particlesOptions = (0, _optionsUtilsJs.loadParticlesOptions)(this._engine, container, mainOptions.particles), effectType = particlesOptions.effect.type, shapeType = particlesOptions.shape.type, { reduceDuplicates  } = particlesOptions;
        this.effect = (0, _utilsJs.itemFromSingleOrMultiple)(effectType, this.id, reduceDuplicates);
        this.shape = (0, _utilsJs.itemFromSingleOrMultiple)(shapeType, this.id, reduceDuplicates);
        const effectOptions = particlesOptions.effect, shapeOptions = particlesOptions.shape;
        if (overrideOptions) {
            if (overrideOptions.effect?.type) {
                const overrideEffectType = overrideOptions.effect.type, effect = (0, _utilsJs.itemFromSingleOrMultiple)(overrideEffectType, this.id, reduceDuplicates);
                if (effect) {
                    this.effect = effect;
                    effectOptions.load(overrideOptions.effect);
                }
            }
            if (overrideOptions.shape?.type) {
                const overrideShapeType = overrideOptions.shape.type, shape = (0, _utilsJs.itemFromSingleOrMultiple)(overrideShapeType, this.id, reduceDuplicates);
                if (shape) {
                    this.shape = shape;
                    shapeOptions.load(overrideOptions.shape);
                }
            }
        }
        this.effectData = loadEffectData(this.effect, effectOptions, this.id, reduceDuplicates);
        this.shapeData = loadShapeData(this.shape, shapeOptions, this.id, reduceDuplicates);
        particlesOptions.load(overrideOptions);
        const effectData = this.effectData;
        if (effectData) particlesOptions.load(effectData.particles);
        const shapeData = this.shapeData;
        if (shapeData) particlesOptions.load(shapeData.particles);
        const interactivity = new (0, _interactivityJs.Interactivity)(engine, container);
        interactivity.load(container.actualOptions.interactivity);
        interactivity.load(particlesOptions.interactivity);
        this.interactivity = interactivity;
        this.effectFill = effectData?.fill ?? particlesOptions.effect.fill;
        this.effectClose = effectData?.close ?? particlesOptions.effect.close;
        this.shapeFill = shapeData?.fill ?? particlesOptions.shape.fill;
        this.shapeClose = shapeData?.close ?? particlesOptions.shape.close;
        this.options = particlesOptions;
        const pathOptions = this.options.move.path;
        this.pathDelay = (0, _numberUtilsJs.getRangeValue)(pathOptions.delay.value) * (0, _constantsJs.millisecondsToSeconds);
        if (pathOptions.generator) {
            this.pathGenerator = this._engine.getPathGenerator(pathOptions.generator);
            if (this.pathGenerator && container.addPath(pathOptions.generator, this.pathGenerator)) this.pathGenerator.init(container);
        }
        container.retina.initParticle(this);
        this.size = (0, _utilsJs.initParticleNumericAnimationValue)(this.options.size, pxRatio);
        this.bubble = {
            inRange: false
        };
        this.slow = {
            inRange: false,
            factor: 1
        };
        this._initPosition(position);
        this.initialVelocity = this._calculateVelocity();
        this.velocity = this.initialVelocity.copy();
        const decayOffset = 1;
        this.moveDecay = decayOffset - (0, _numberUtilsJs.getRangeValue)(this.options.move.decay);
        const particles = container.particles;
        particles.setLastZIndex(this.position.z);
        this.zIndexFactor = this.position.z / container.zLayers;
        this.sides = 24;
        let effectDrawer = container.effectDrawers.get(this.effect);
        if (!effectDrawer) {
            effectDrawer = this._engine.getEffectDrawer(this.effect);
            if (effectDrawer) container.effectDrawers.set(this.effect, effectDrawer);
        }
        if (effectDrawer?.loadEffect) effectDrawer.loadEffect(this);
        let shapeDrawer = container.shapeDrawers.get(this.shape);
        if (!shapeDrawer) {
            shapeDrawer = this._engine.getShapeDrawer(this.shape);
            if (shapeDrawer) container.shapeDrawers.set(this.shape, shapeDrawer);
        }
        if (shapeDrawer?.loadShape) shapeDrawer.loadShape(this);
        const sideCountFunc = shapeDrawer?.getSidesCount;
        if (sideCountFunc) this.sides = sideCountFunc(this);
        this.spawning = false;
        this.shadowColor = (0, _colorUtilsJs.rangeColorToRgb)(this.options.shadow.color);
        for (const updater of particles.updaters)updater.init(this);
        for (const mover of particles.movers)mover.init?.(this);
        effectDrawer?.particleInit?.(container, this);
        shapeDrawer?.particleInit?.(container, this);
        for (const [, plugin] of container.plugins)plugin.particleCreated?.(this);
    }
    isInsideCanvas() {
        const radius = this.getRadius(), canvasSize = this.container.canvas.size, position = this.position;
        return position.x >= -radius && position.y >= -radius && position.y <= canvasSize.height + radius && position.x <= canvasSize.width + radius;
    }
    isVisible() {
        return !this.destroyed && !this.spawning && this.isInsideCanvas();
    }
    reset() {
        for (const updater of this.container.particles.updaters)updater.reset?.(this);
    }
}

},{"./Utils/Vectors.js":"3N0C5","../Utils/NumberUtils.js":"c9eVN","../Utils/Utils.js":"17M4n","./Utils/Constants.js":"9fra9","../Utils/ColorUtils.js":"9NWNO","../Options/Classes/Interactivity/Interactivity.js":"48Zpu","../Utils/CanvasUtils.js":"8COXr","../Utils/OptionsUtils.js":"eM9C9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kT9VC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "QuadTree", ()=>QuadTree);
var _rangesJs = require("./Ranges.js");
var _numberUtilsJs = require("../../Utils/NumberUtils.js");
const half = 0.5, double = 2, subdivideCount = 4;
class QuadTree {
    constructor(rectangle, capacity){
        this.rectangle = rectangle;
        this.capacity = capacity;
        this._subdivide = ()=>{
            const { x , y  } = this.rectangle.position, { width , height  } = this.rectangle.size, { capacity  } = this;
            for(let i = 0; i < subdivideCount; i++){
                const fixedIndex = i % double;
                this._subs.push(new QuadTree(new (0, _rangesJs.Rectangle)(x + width * half * fixedIndex, y + height * half * (Math.round(i * half) - fixedIndex), width * half, height * half), capacity));
            }
            this._divided = true;
        };
        this._points = [];
        this._divided = false;
        this._subs = [];
    }
    insert(point) {
        if (!this.rectangle.contains(point.position)) return false;
        if (this._points.length < this.capacity) {
            this._points.push(point);
            return true;
        }
        if (!this._divided) this._subdivide();
        return this._subs.some((sub)=>sub.insert(point));
    }
    query(range, check) {
        const res = [];
        if (!range.intersects(this.rectangle)) return [];
        for (const p of this._points){
            if (!range.contains(p.position) && (0, _numberUtilsJs.getDistance)(range.position, p.position) > p.particle.getRadius() && (!check || check(p.particle))) continue;
            res.push(p.particle);
        }
        if (this._divided) for (const sub of this._subs)res.push(...sub.query(range, check));
        return res;
    }
    queryCircle(position, radius, check) {
        return this.query(new (0, _rangesJs.Circle)(position.x, position.y, radius), check);
    }
    queryRectangle(position, size, check) {
        return this.query(new (0, _rangesJs.Rectangle)(position.x, position.y, size.width, size.height), check);
    }
}

},{"./Ranges.js":"7Uilo","../../Utils/NumberUtils.js":"c9eVN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"q7xVz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Retina", ()=>Retina);
var _numberUtilsJs = require("../Utils/NumberUtils.js");
var _utilsJs = require("../Utils/Utils.js");
const defaultRatio = 1, defaultReduceFactor = 1;
class Retina {
    constructor(container){
        this.container = container;
        this.pixelRatio = defaultRatio;
        this.reduceFactor = defaultReduceFactor;
    }
    init() {
        const container = this.container, options = container.actualOptions;
        this.pixelRatio = !options.detectRetina || (0, _utilsJs.isSsr)() ? defaultRatio : window.devicePixelRatio;
        this.reduceFactor = defaultReduceFactor;
        const ratio = this.pixelRatio, canvas = container.canvas;
        if (canvas.element) {
            const element = canvas.element;
            canvas.size.width = element.offsetWidth * ratio;
            canvas.size.height = element.offsetHeight * ratio;
        }
        const particles = options.particles, moveOptions = particles.move;
        this.maxSpeed = (0, _numberUtilsJs.getRangeValue)(moveOptions.gravity.maxSpeed) * ratio;
        this.sizeAnimationSpeed = (0, _numberUtilsJs.getRangeValue)(particles.size.animation.speed) * ratio;
    }
    initParticle(particle) {
        const options = particle.options, ratio = this.pixelRatio, moveOptions = options.move, moveDistance = moveOptions.distance, props = particle.retina;
        props.moveDrift = (0, _numberUtilsJs.getRangeValue)(moveOptions.drift) * ratio;
        props.moveSpeed = (0, _numberUtilsJs.getRangeValue)(moveOptions.speed) * ratio;
        props.sizeAnimationSpeed = (0, _numberUtilsJs.getRangeValue)(options.size.animation.speed) * ratio;
        const maxDistance = props.maxDistance;
        maxDistance.horizontal = moveDistance.horizontal !== undefined ? moveDistance.horizontal * ratio : undefined;
        maxDistance.vertical = moveDistance.vertical !== undefined ? moveDistance.vertical * ratio : undefined;
        props.maxSpeed = (0, _numberUtilsJs.getRangeValue)(moveOptions.gravity.maxSpeed) * ratio;
    }
}

},{"../Utils/NumberUtils.js":"c9eVN","../Utils/Utils.js":"17M4n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["8vgpO"], null, "parcelRequire6158")

//# sourceMappingURL=Container.ac3cfd4b.js.map
