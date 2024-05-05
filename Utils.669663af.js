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
})({"iQ3dG":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "1b3b15bf669663af";
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

},{}],"icRPA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getGIFLoopAmount", ()=>getGIFLoopAmount);
parcelHelpers.export(exports, "decodeGIF", ()=>decodeGIF);
parcelHelpers.export(exports, "drawGif", ()=>drawGif);
parcelHelpers.export(exports, "loadGifImage", ()=>loadGifImage);
var _constantsJs = require("./Constants.js");
var _byteStreamJs = require("./ByteStream.js");
const origin = {
    x: 0,
    y: 0
}, defaultFrame = 0, half = 0.5, initialTime = 0, firstIndex = 0, defaultLoopCount = 0;
function parseColorTable(byteStream, count) {
    const colors = [];
    for(let i = 0; i < count; i++){
        colors.push({
            r: byteStream.data[byteStream.pos],
            g: byteStream.data[byteStream.pos + 1],
            b: byteStream.data[byteStream.pos + 2]
        });
        byteStream.pos += 3;
    }
    return colors;
}
function parseExtensionBlock(byteStream, gif, getFrameIndex, getTransparencyIndex) {
    switch(byteStream.nextByte()){
        case 249:
            {
                const frame = gif.frames[getFrameIndex(false)];
                byteStream.pos++;
                const packedByte = byteStream.nextByte();
                frame.GCreserved = (packedByte & 0xe0) >>> 5;
                frame.disposalMethod = (packedByte & 0x1c) >>> 2;
                frame.userInputDelayFlag = (packedByte & 2) === 2;
                const transparencyFlag = (packedByte & 1) === 1;
                frame.delayTime = byteStream.nextTwoBytes() * 0xa;
                const transparencyIndex = byteStream.nextByte();
                if (transparencyFlag) getTransparencyIndex(transparencyIndex);
                byteStream.pos++;
                break;
            }
        case 255:
            {
                byteStream.pos++;
                const applicationExtension = {
                    identifier: byteStream.getString(8),
                    authenticationCode: byteStream.getString(3),
                    data: byteStream.readSubBlocksBin()
                };
                gif.applicationExtensions.push(applicationExtension);
                break;
            }
        case 254:
            gif.comments.push([
                getFrameIndex(false),
                byteStream.readSubBlocks()
            ]);
            break;
        case 1:
            if (gif.globalColorTable.length === 0) throw new EvalError("plain text extension without global color table");
            byteStream.pos++;
            gif.frames[getFrameIndex(false)].plainTextData = {
                left: byteStream.nextTwoBytes(),
                top: byteStream.nextTwoBytes(),
                width: byteStream.nextTwoBytes(),
                height: byteStream.nextTwoBytes(),
                charSize: {
                    width: byteStream.nextTwoBytes(),
                    height: byteStream.nextTwoBytes()
                },
                foregroundColor: byteStream.nextByte(),
                backgroundColor: byteStream.nextByte(),
                text: byteStream.readSubBlocks()
            };
            break;
        default:
            byteStream.skipSubBlocks();
            break;
    }
}
async function parseImageBlock(byteStream, gif, avgAlpha, getFrameIndex, getTransparencyIndex, progressCallback) {
    const frame = gif.frames[getFrameIndex(true)];
    frame.left = byteStream.nextTwoBytes();
    frame.top = byteStream.nextTwoBytes();
    frame.width = byteStream.nextTwoBytes();
    frame.height = byteStream.nextTwoBytes();
    const packedByte = byteStream.nextByte(), localColorTableFlag = (packedByte & 0x80) === 0x80, interlacedFlag = (packedByte & 0x40) === 0x40;
    frame.sortFlag = (packedByte & 0x20) === 0x20;
    frame.reserved = (packedByte & 0x18) >>> 3;
    const localColorCount = 1 << (packedByte & 7) + 1;
    if (localColorTableFlag) frame.localColorTable = parseColorTable(byteStream, localColorCount);
    const getColor = (index)=>{
        const { r , g , b  } = (localColorTableFlag ? frame.localColorTable : gif.globalColorTable)[index];
        if (index !== getTransparencyIndex(null)) return {
            r,
            g,
            b,
            a: 255
        };
        return {
            r,
            g,
            b,
            a: avgAlpha ? ~~((r + g + b) / 3) : 0
        };
    };
    const image = (()=>{
        try {
            return new ImageData(frame.width, frame.height, {
                colorSpace: "srgb"
            });
        } catch (error) {
            if (error instanceof DOMException && error.name === "IndexSizeError") return null;
            throw error;
        }
    })();
    if (image == null) throw new EvalError("GIF frame size is to large");
    const minCodeSize = byteStream.nextByte(), imageData = byteStream.readSubBlocksBin(), clearCode = 1 << minCodeSize;
    const readBits = (pos, len)=>{
        const bytePos = pos >>> 3, bitPos = pos & 7;
        return (imageData[bytePos] + (imageData[bytePos + 1] << 8) + (imageData[bytePos + 2] << 16) & (1 << len) - 1 << bitPos) >>> bitPos;
    };
    if (interlacedFlag) {
        for(let code = 0, size = minCodeSize + 1, pos = 0, dic = [
            [
                0
            ]
        ], pass = 0; pass < 4; pass++){
            if ((0, _constantsJs.InterlaceOffsets)[pass] < frame.height) {
                let pixelPos = 0, lineIndex = 0, exit = false;
                while(!exit){
                    const last = code;
                    code = readBits(pos, size);
                    pos += size + 1;
                    if (code === clearCode) {
                        size = minCodeSize + 1;
                        dic.length = clearCode + 2;
                        for(let i = 0; i < dic.length; i++)dic[i] = i < clearCode ? [
                            i
                        ] : [];
                    } else {
                        if (code >= dic.length) dic.push(dic[last].concat(dic[last][0]));
                        else if (last !== clearCode) dic.push(dic[last].concat(dic[code][0]));
                        for (const item of dic[code]){
                            const { r , g , b , a  } = getColor(item);
                            image.data.set([
                                r,
                                g,
                                b,
                                a
                            ], (0, _constantsJs.InterlaceOffsets)[pass] * frame.width + (0, _constantsJs.InterlaceSteps)[pass] * lineIndex + pixelPos % (frame.width * 4));
                            pixelPos += 4;
                        }
                        if (dic.length === 1 << size && size < 0xc) size++;
                    }
                    if (pixelPos === frame.width * 4 * (lineIndex + 1)) {
                        lineIndex++;
                        if ((0, _constantsJs.InterlaceOffsets)[pass] + (0, _constantsJs.InterlaceSteps)[pass] * lineIndex >= frame.height) exit = true;
                    }
                }
            }
            progressCallback?.(byteStream.pos / (byteStream.data.length - 1), getFrameIndex(false) + 1, image, {
                x: frame.left,
                y: frame.top
            }, {
                width: gif.width,
                height: gif.height
            });
        }
        frame.image = image;
        frame.bitmap = await createImageBitmap(image);
    } else {
        let code1 = 0, size1 = minCodeSize + 1, pos1 = 0, pixelPos1 = -4, exit1 = false;
        const dic1 = [
            [
                0
            ]
        ];
        while(!exit1){
            const last1 = code1;
            code1 = readBits(pos1, size1);
            pos1 += size1;
            if (code1 === clearCode) {
                size1 = minCodeSize + 1;
                dic1.length = clearCode + 2;
                for(let i1 = 0; i1 < dic1.length; i1++)dic1[i1] = i1 < clearCode ? [
                    i1
                ] : [];
            } else {
                if (code1 === clearCode + 1) {
                    exit1 = true;
                    break;
                }
                if (code1 >= dic1.length) dic1.push(dic1[last1].concat(dic1[last1][0]));
                else if (last1 !== clearCode) dic1.push(dic1[last1].concat(dic1[code1][0]));
                for (const item1 of dic1[code1]){
                    const { r: r1 , g: g1 , b: b1 , a: a1  } = getColor(item1);
                    image.data.set([
                        r1,
                        g1,
                        b1,
                        a1
                    ], pixelPos1 += 4);
                }
                if (dic1.length >= 1 << size1 && size1 < 0xc) size1++;
            }
        }
        frame.image = image;
        frame.bitmap = await createImageBitmap(image);
        progressCallback?.((byteStream.pos + 1) / byteStream.data.length, getFrameIndex(false) + 1, frame.image, {
            x: frame.left,
            y: frame.top
        }, {
            width: gif.width,
            height: gif.height
        });
    }
}
async function parseBlock(byteStream, gif, avgAlpha, getFrameIndex, getTransparencyIndex, progressCallback) {
    switch(byteStream.nextByte()){
        case 59:
            return true;
        case 44:
            await parseImageBlock(byteStream, gif, avgAlpha, getFrameIndex, getTransparencyIndex, progressCallback);
            break;
        case 33:
            parseExtensionBlock(byteStream, gif, getFrameIndex, getTransparencyIndex);
            break;
        default:
            throw new EvalError("undefined block found");
    }
    return false;
}
function getGIFLoopAmount(gif) {
    for (const extension of gif.applicationExtensions){
        if (extension.identifier + extension.authenticationCode !== "NETSCAPE2.0") continue;
        return extension.data[1] + (extension.data[2] << 8);
    }
    return NaN;
}
async function decodeGIF(gifURL, progressCallback, avgAlpha) {
    if (!avgAlpha) avgAlpha = false;
    const res = await fetch(gifURL);
    if (!res.ok && res.status === 404) throw new EvalError("file not found");
    const buffer = await res.arrayBuffer();
    const gif = {
        width: 0,
        height: 0,
        totalTime: 0,
        colorRes: 0,
        pixelAspectRatio: 0,
        frames: [],
        sortFlag: false,
        globalColorTable: [],
        backgroundImage: new ImageData(1, 1, {
            colorSpace: "srgb"
        }),
        comments: [],
        applicationExtensions: []
    }, byteStream = new (0, _byteStreamJs.ByteStream)(new Uint8ClampedArray(buffer));
    if (byteStream.getString(6) !== "GIF89a") throw new Error("not a supported GIF file");
    gif.width = byteStream.nextTwoBytes();
    gif.height = byteStream.nextTwoBytes();
    const packedByte = byteStream.nextByte(), globalColorTableFlag = (packedByte & 0x80) === 0x80;
    gif.colorRes = (packedByte & 0x70) >>> 4;
    gif.sortFlag = (packedByte & 8) === 8;
    const globalColorCount = 1 << (packedByte & 7) + 1, backgroundColorIndex = byteStream.nextByte();
    gif.pixelAspectRatio = byteStream.nextByte();
    if (gif.pixelAspectRatio !== 0) gif.pixelAspectRatio = (gif.pixelAspectRatio + 0xf) / 0x40;
    if (globalColorTableFlag) gif.globalColorTable = parseColorTable(byteStream, globalColorCount);
    const backgroundImage = (()=>{
        try {
            return new ImageData(gif.width, gif.height, {
                colorSpace: "srgb"
            });
        } catch (error) {
            if (error instanceof DOMException && error.name === "IndexSizeError") return null;
            throw error;
        }
    })();
    if (backgroundImage == null) throw new Error("GIF frame size is to large");
    const { r , g , b  } = gif.globalColorTable[backgroundColorIndex];
    backgroundImage.data.set(globalColorTableFlag ? [
        r,
        g,
        b,
        255
    ] : [
        0,
        0,
        0,
        0
    ]);
    for(let i = 4; i < backgroundImage.data.length; i *= 2)backgroundImage.data.copyWithin(i, 0, i);
    gif.backgroundImage = backgroundImage;
    let frameIndex = -1, incrementFrameIndex = true, transparencyIndex = -1;
    const getframeIndex = (increment)=>{
        if (increment) incrementFrameIndex = true;
        return frameIndex;
    };
    const getTransparencyIndex = (newValue)=>{
        if (newValue != null) transparencyIndex = newValue;
        return transparencyIndex;
    };
    try {
        do if (incrementFrameIndex) {
            gif.frames.push({
                left: 0,
                top: 0,
                width: 0,
                height: 0,
                disposalMethod: 0,
                image: new ImageData(1, 1, {
                    colorSpace: "srgb"
                }),
                plainTextData: null,
                userInputDelayFlag: false,
                delayTime: 0,
                sortFlag: false,
                localColorTable: [],
                reserved: 0,
                GCreserved: 0
            });
            frameIndex++;
            transparencyIndex = -1;
            incrementFrameIndex = false;
        }
        while (!await parseBlock(byteStream, gif, avgAlpha, getframeIndex, getTransparencyIndex, progressCallback));
        gif.frames.length--;
        for (const frame of gif.frames){
            if (frame.userInputDelayFlag && frame.delayTime === 0) {
                gif.totalTime = Infinity;
                break;
            }
            gif.totalTime += frame.delayTime;
        }
        return gif;
    } catch (error) {
        if (error instanceof EvalError) throw new Error(`error while parsing frame ${frameIndex} "${error.message}"`);
        throw error;
    }
}
function drawGif(data) {
    const { context , radius , particle , delta  } = data, image = particle.image;
    if (!image?.gifData || !image.gif) return;
    const offscreenCanvas = new OffscreenCanvas(image.gifData.width, image.gifData.height), offscreenContext = offscreenCanvas.getContext("2d");
    if (!offscreenContext) throw new Error("could not create offscreen canvas context");
    offscreenContext.imageSmoothingQuality = "low";
    offscreenContext.imageSmoothingEnabled = false;
    offscreenContext.clearRect(origin.x, origin.y, offscreenCanvas.width, offscreenCanvas.height);
    if (particle.gifLoopCount === undefined) particle.gifLoopCount = image.gifLoopCount ?? defaultLoopCount;
    let frameIndex = particle.gifFrame ?? defaultFrame;
    const pos = {
        x: -image.gifData.width * half,
        y: -image.gifData.height * half
    }, frame = image.gifData.frames[frameIndex];
    if (particle.gifTime === undefined) particle.gifTime = initialTime;
    if (!frame.bitmap) return;
    context.scale(radius / image.gifData.width, radius / image.gifData.height);
    switch(frame.disposalMethod){
        case 4:
        case 5:
        case 6:
        case 7:
        case 0:
            offscreenContext.drawImage(frame.bitmap, frame.left, frame.top);
            context.drawImage(offscreenCanvas, pos.x, pos.y);
            offscreenContext.clearRect(origin.x, origin.y, offscreenCanvas.width, offscreenCanvas.height);
            break;
        case 1:
            offscreenContext.drawImage(frame.bitmap, frame.left, frame.top);
            context.drawImage(offscreenCanvas, pos.x, pos.y);
            break;
        case 2:
            offscreenContext.drawImage(frame.bitmap, frame.left, frame.top);
            context.drawImage(offscreenCanvas, pos.x, pos.y);
            offscreenContext.clearRect(origin.x, origin.y, offscreenCanvas.width, offscreenCanvas.height);
            if (!image.gifData.globalColorTable.length) offscreenContext.putImageData(image.gifData.frames[firstIndex].image, pos.x + frame.left, pos.y + frame.top);
            else offscreenContext.putImageData(image.gifData.backgroundImage, pos.x, pos.y);
            break;
        case 3:
            {
                const previousImageData = offscreenContext.getImageData(origin.x, origin.y, offscreenCanvas.width, offscreenCanvas.height);
                offscreenContext.drawImage(frame.bitmap, frame.left, frame.top);
                context.drawImage(offscreenCanvas, pos.x, pos.y);
                offscreenContext.clearRect(origin.x, origin.y, offscreenCanvas.width, offscreenCanvas.height);
                offscreenContext.putImageData(previousImageData, origin.x, origin.y);
            }
            break;
    }
    particle.gifTime += delta.value;
    if (particle.gifTime > frame.delayTime) {
        particle.gifTime -= frame.delayTime;
        if (++frameIndex >= image.gifData.frames.length) {
            if (--particle.gifLoopCount <= defaultLoopCount) return;
            frameIndex = firstIndex;
            offscreenContext.clearRect(origin.x, origin.y, offscreenCanvas.width, offscreenCanvas.height);
        }
        particle.gifFrame = frameIndex;
    }
    context.scale(image.gifData.width / radius, image.gifData.height / radius);
}
async function loadGifImage(image) {
    if (image.type !== "gif") {
        const { loadImage  } = await require("8304f4867f9a3e6c");
        await loadImage(image);
        return;
    }
    image.loading = true;
    try {
        image.gifData = await decodeGIF(image.source);
        image.gifLoopCount = getGIFLoopAmount(image.gifData) ?? defaultLoopCount;
        if (!image.gifLoopCount) image.gifLoopCount = Infinity;
    } catch  {
        image.error = true;
    }
    image.loading = false;
}

},{"./Constants.js":"aJL3W","./ByteStream.js":"8Ux2Q","8304f4867f9a3e6c":"hQQ8E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aJL3W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InterlaceOffsets", ()=>InterlaceOffsets);
parcelHelpers.export(exports, "InterlaceSteps", ()=>InterlaceSteps);
const InterlaceOffsets = [
    0,
    4,
    2,
    1
];
const InterlaceSteps = [
    8,
    8,
    4,
    2
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Ux2Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ByteStream", ()=>ByteStream);
class ByteStream {
    constructor(bytes){
        this.pos = 0;
        this.data = new Uint8ClampedArray(bytes);
    }
    getString(count) {
        const slice = this.data.slice(this.pos, this.pos + count);
        this.pos += slice.length;
        return slice.reduce((acc, curr)=>acc + String.fromCharCode(curr), "");
    }
    nextByte() {
        return this.data[this.pos++];
    }
    nextTwoBytes() {
        const increment = 2, previous = 1, shift = 8;
        this.pos += increment;
        return this.data[this.pos - increment] + (this.data[this.pos - previous] << shift);
    }
    readSubBlocks() {
        let blockString = "", size = 0;
        const minCount = 0, emptySize = 0;
        do {
            size = this.data[this.pos++];
            for(let count = size; --count >= minCount; blockString += String.fromCharCode(this.data[this.pos++]));
        }while (size !== emptySize);
        return blockString;
    }
    readSubBlocksBin() {
        let size = this.data[this.pos], len = 0;
        const emptySize = 0, increment = 1;
        for(let offset = 0; size !== emptySize; offset += size + increment, size = this.data[this.pos + offset])len += size;
        const blockData = new Uint8Array(len);
        size = this.data[this.pos++];
        for(let i = 0; size !== emptySize; size = this.data[this.pos++]){
            for(let count = size; --count >= emptySize; blockData[i++] = this.data[this.pos++]);
        }
        return blockData;
    }
    skipSubBlocks() {
        for(const increment = 1, noData = 0; this.data[this.pos] !== noData; this.pos += this.data[this.pos] + increment);
        this.pos++;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hQQ8E":[function(require,module,exports) {
module.exports = Promise.resolve(module.bundle.root("i16sx"));

},{}]},["iQ3dG"], null, "parcelRequire6158")

//# sourceMappingURL=Utils.669663af.js.map
