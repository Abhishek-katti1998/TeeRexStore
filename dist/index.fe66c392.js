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
})({"fs1We":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "4c53e1bcfe66c392";
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
        console.log("[parcel] \u2728 Error resolved");
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
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
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

},{}],"jeUzS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _productsView = require("../view/productsView");
var _productsViewDefault = parcelHelpers.interopDefault(_productsView);
var _btnView = require("../view/btnView");
var _btnViewDefault = parcelHelpers.interopDefault(_btnView);
var _model = require("../model/model");
var _cartView = require("../view/cartView");
var _cartViewDefault = parcelHelpers.interopDefault(_cartView);
var _filterView = require("../view/filterView");
var _filterViewDefault = parcelHelpers.interopDefault(_filterView);
var _precheckoutCart = require("../view/precheckoutCart");
var _precheckoutCartDefault = parcelHelpers.interopDefault(_precheckoutCart);
var _navView = require("../view/navView");
var _navViewDefault = parcelHelpers.interopDefault(_navView);
var _searchView = require("../view/searchView");
var _searchViewDefault = parcelHelpers.interopDefault(_searchView);
var _helper = require("../helper");
/////////////////////////////////////////////////////
// precheckout page selector
const preChekOutHedEl = document.getElementsByClassName("cart-precheckout--heading")[0];
/// //////////////////////////////////////////////////
//globals
let btnView;
const products = new (0, _productsViewDefault.default)();
let cartView = new (0, _cartViewDefault.default)();
let filterView = new (0, _filterViewDefault.default)();
let navView = new (0, _navViewDefault.default)();
const cartPreCheckout = new (0, _precheckoutCartDefault.default)();
const searchView = new (0, _searchViewDefault.default)();
///////////////////////////////////////
//Fetch products from API
const init = ()=>(0, _model.fetchProducts)();
// Navigation handlers
const productNavHandler = ()=>{
    (0, _helper.navigateToProductPage)();
    (0, _model.state).preCheckoutPageActive = false;
    btnView.render((0, _model.state));
    cartView.render((0, _model.state).cart);
};
//add to cart handler
const addToCartHandler = (e1)=>{
    let freshCartItem = true;
    if (e1.target.textContent === "Add to Cart") (0, _model.state).increment = true;
    else if (Array.from(e1.target.classList).includes("plus--icon") || e1.target.attributes.name?.value === "plus--icon") (0, _model.state).increment = true;
    else if (Array.from(e1.target.classList).includes("add") || Array.from(e1.target.parentElement?.classList).includes("add") || Array.from(e1.target.parentElement?.classList).includes("arrow-up")) {
        //add from preCheckout page
        (0, _model.state).increment = true;
        (0, _model.state).renderPrechkoutPage = true;
    } else if (Array.from(e1.target.classList).includes("minus--icon") || e1.target.attributes.name?.value === "minus--icon") (0, _model.state).increment = false;
    else return;
    let cartObj = (0, _model.createCartObject)((0, _model.state).data.filter((el)=>Number(el.id) === Number(e1.target.id))[0]);
    //delete from cart if product quantity is 0
    if (cartObj && cartObj.quantity === 0) {
        let updatedCart = (0, _model.state).cart.filter((e)=>e.id !== cartObj.id);
        (0, _model.state).cart = updatedCart;
    } else if ((0, _model.state).cart.length === 0) (0, _model.state).cart.push(cartObj);
    else {
        for(let i = 0; i < (0, _model.state).cart.length; i++)if ((0, _model.state).cart[i]?.id === cartObj.id) {
            (0, _model.state).cart[i] = cartObj;
            freshCartItem = false;
        }
        if (freshCartItem) (0, _model.state).cart.push(cartObj);
    }
    // calculate cart total amount
    (0, _helper.calcCartTotal)((0, _model.state), (0, _model.state).cart);
    cartView.render((0, _model.state).cart);
    if ((0, _model.state).preCheckoutPageActive) {
        cartPreCheckout.update((0, _model.state).cart);
        return;
    }
    btnView.render((0, _model.state));
};
//delete cart item handler from precheckoutCart view
const deleteCartItemHandler = (event)=>{
    if (event.target.textContent === "Delete") {
        const updatedCart = (0, _model.state).cart.filter((el)=>Number(el.id) !== Number(event.target.id));
        (0, _model.state).cart = updatedCart;
        (0, _helper.calcCartTotal)((0, _model.state), (0, _model.state).cart);
        cartPreCheckout.render((0, _model.state).cart);
    }
};
// cart click handler(navigate to pre checkout page)
const cartBtnClickHandler = (e)=>{
    e.preventDefault();
    (0, _helper.navigateToCheckout)();
    preChekOutHedEl.style.display = "block";
    (0, _model.state).preCheckoutPageActive = true;
    cartPreCheckout.render((0, _model.state).cart);
    cartPreCheckout.addToCartHandlerRender(addToCartHandler);
    cartPreCheckout.deleteCartItemHandlerRender(deleteCartItemHandler);
};
//filter helper
const findItemfromFilter = (filterName, genre)=>{
    if ((0, _model.state).filter.find((e)=>e[genre] === filterName)) {
        let temp = (0, _model.state).filter.filter((e)=>e[genre] !== filterName);
        (0, _model.state).filter = temp;
    } else (0, _model.state).filter.push({
        [genre]: filterName
    });
};
// ///////////////////
//filter handler
const filterHandler = (e2)=>{
    let filterName = e2.target.value;
    if (filterName === "Red" || filterName === "Blue" || filterName === "Green") findItemfromFilter(filterName, "color");
    if (filterName === "Men" || filterName === "Women") findItemfromFilter(filterName, "gender");
    if (filterName === "Polo" || filterName === "Hoodie" || filterName === "Basic") findItemfromFilter(filterName, "type", (0, _model.state));
    if (filterName === "0-\u20B9250" || filterName === "\u20B9251-\u20B9450" || filterName === "\u20B9450") findItemfromFilter(filterName, "price");
    let curFilter = (0, _model.state).filter[(0, _model.state).filter.length - 1];
    let prevFilter = (0, _model.state).filter.length > 1 ? (0, _model.state).filter[(0, _model.state).filter.length - 2] : null;
    let filterCriteria = (0, _model.state).filter.map((e)=>{
        if (Object.keys(e).includes("color") || Object.keys(e).includes("type") || Object.keys(e).includes("price") || Object.keys(e).includes("gender")) return Object.values(e)[0];
    });
    let tempFilterdData = [];
    let filterToApply = (0, _model.state).searchFilterData.length > 0 ? (0, _model.state).searchFilterData : prevFilter && (0, _model.state).filterData.length > 0 && Object.keys(curFilter)[0] !== Object.keys(prevFilter)[0] ? (0, _model.state).filterData : (0, _model.state).data;
    //if the applied filters are of the same genre
    if (prevFilter && Object.keys(curFilter)[0] === Object.keys(prevFilter)[0]) for(let i = 0; i < filterCriteria.length; i++){
        for(let j = 0; j < filterToApply.length; j++)if (Object.values(filterToApply[j]).includes(filterCriteria[i])) tempFilterdData.push(filterToApply[j]);
    }
    else if (curFilter) {
        for(let j = 0; j < filterToApply.length; j++)if (Object.values(filterToApply[j]).includes(Object.values(curFilter)[0])) tempFilterdData.push(filterToApply[j]);
    }
    if (filterCriteria.includes("0-\u20B9250")) {
        let filterByPrice = filterToApply.filter((e)=>e.price <= 250);
        tempFilterdData = [
            ...tempFilterdData,
            ...filterByPrice
        ];
    }
    if (filterCriteria.includes("\u20B9251-\u20B9450")) {
        let filterByPrice = filterToApply.filter((e)=>e.price > 250 && e.price <= 450);
        tempFilterdData = [
            ...tempFilterdData,
            ...filterByPrice
        ];
    }
    if (filterCriteria.includes("\u20B9450")) {
        let filterByPrice = filterToApply.filter((e)=>e.price > 450);
        tempFilterdData = [
            ...tempFilterdData,
            ...filterByPrice
        ];
    }
    (0, _model.state).filterData = tempFilterdData;
    //reset to original state if there are no filters
    if ((0, _model.state).filterData.length === 0) {
        btnView.render();
        return;
    }
    filterView.render((0, _model.state).filterData);
};
//mobile filter btn click handler
const filterBtnClickHandler = ()=>{
    document.getElementsByClassName("section-filter")[0].classList.add("section-filter--active");
};
// close mobile filter
const filterCloseHandler = ()=>{
    document.getElementsByClassName("section-filter")[0].classList.remove("section-filter--active");
};
//search query
const searchIpHandler = (event)=>{
    //debounce function decorator declared in helper.js
    (0, _model.state).queryString = event.target.value;
    (0, _helper.deBounceFunc)(event, (0, _model.state), searchView);
};
// searchView;
init().then((el)=>{
    const { data  } = (0, _model.state);
    if (data.length > 0) products.render(data.slice(0, 6));
    btnView = new (0, _btnViewDefault.default)();
    btnView.addToBtnHandlerRender(addToCartHandler);
    filterView.filterSelectHandlerRender(filterHandler);
    filterView.mobileFilterBtnHandler(filterBtnClickHandler);
    filterView.mobileFilterCloseHandler(filterCloseHandler);
    cartView.cartBtnHandlerRedner(cartBtnClickHandler);
    navView.productViewLinkHandlerRender(productNavHandler);
    searchView.searchHandlerRender(searchIpHandler);
});

},{"../view/productsView":"KaZjk","../view/btnView":"2JTLb","../model/model":"fApl5","../view/cartView":"TMgMq","../view/filterView":"bvYNc","../view/precheckoutCart":"3z4pc","../view/navView":"9E767","../view/searchView":"jWH0p","../helper":"3WEdG","@parcel/transformer-js/src/esmodule-helpers.js":"9FYyo"}],"KaZjk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _runtime = require("regenerator-runtime/runtime");
class ProductView extends (0, _viewDefault.default) {
    constructor(){
        super();
        this._parentElement = document.getElementsByClassName("section-products-catalog")[0];
    }
    generateMarkup() {
        if (this._data.length === 0) return [
            `<p class="noresults--message">No results found :(</p>`
        ];
        else return this._data.map((el)=>{
            return ` <article class="product-card">
                        <div class="product">
                            <p class="product-name">${el.name}</p>
                            <img  class="product-image" src=${el.imageURL} alt=${el.name}image>
                        
                        </div>
                        <div class="product-description">
                            <p class="product-price">₹ ${el.price}</p>
                            <button class="add--btn" id=${el.id}>
                               <p class="primary--content" id=${el.id}>Add to Cart</p>
                            </button>
                        </div>
               </article>`;
        });
    }
}
exports.default = ProductView;

},{"./view":"gxKv6","regenerator-runtime/runtime":"dXNgZ","@parcel/transformer-js/src/esmodule-helpers.js":"9FYyo"}],"gxKv6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    render(data, render = true) {
        // debugger;
        this._data = data;
        const markup = this.generateMarkup().join("");
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    update(data) {
        this._data = data;
        const newMarkup = this.generateMarkup();
        const newDOM = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDOM.querySelectorAll("*"));
        const curElements = Array.from(this._parentElement.querySelectorAll("*"));
        newElements.forEach((newEl, i)=>{
            const curEl = curElements[i];
            // console.log(curEl, newEl.isEqualNode(curEl));
            // Updates changed TEXT
            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== "") // console.log('💥', newEl.firstChild.nodeValue.trim());
            curEl.textContent = newEl.textContent;
            // Updates changed ATTRIBUES
            if (!newEl.isEqualNode(curEl)) Array.from(newEl.attributes).forEach((attr)=>curEl?.setAttribute(attr.name, attr.value));
        });
    }
    _clear() {
        this._parentElement.innerHTML = "";
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"9FYyo"}],"9FYyo":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"dXNgZ":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    "use strict";
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err1) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    define(Gp, "constructor", GeneratorFunctionPrototype);
    define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value1 = result.value;
                if (value1 && typeof value1 === "object" && hasOwn.call(value1, "__await")) return PromiseImpl.resolve(value1.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value1).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        this._invoke = enqueue;
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;
            if (context.method === "throw") {
                // Note: ["return"] must be used for ES3 parsing compatibility.
                if (delegate.iterator["return"]) {
                    // If the delegate iterator has a return method, give it a
                    // chance to clean up.
                    context.method = "return";
                    context.arg = undefined;
                    maybeInvokeDelegate(delegate, context);
                    if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                }
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(object) {
        var keys = [];
        for(var key1 in object)keys.push(key1);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next1 = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next1.next = next1;
            }
        }
        // Return an iterator with no values.
        return {
            next: doneResult
        };
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(module.exports);
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
    else Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"2JTLb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _regeneratorRuntime = require("regenerator-runtime");
var _model = require("../model/model");
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
class BtnView extends (0, _viewDefault.default) {
    constructor(){
        super();
        this._parentElement = document.getElementsByClassName("section-products-catalog")[0];
    }
    addToBtnHandlerRender(handler) {
        this._parentElement.addEventListener("click", handler);
    }
    generateMarkup() {
        let markup = [];
        let itr = (0, _model.state).searchFilterData.length > 0 ? (0, _model.state).searchFilterData : (0, _model.state).data.slice(0, 6);
        if ((0, _model.state).filterData.length) itr = (0, _model.state).filterData;
        if ((0, _model.state).queryString && (0, _model.state).searchFilterData.length === 0) {
            markup.push('<p class="noresults--message">No results found :(</p>');
            return markup;
        }
        itr.forEach((el)=>{
            let pushed = false;
            for(let i = 0; i < (0, _model.state).cart.length; i++)if (el.id === (0, _model.state).cart[i].id) {
                markup.push(` <article class="product-card">
                        <div class="product">
                            <p class="product-name">${el.name}</p>
                            <img  class="product-image" src=${el.imageURL} alt=${el.name}image>
                        
                        </div>
                        <div class="product-description">
                            <p class="product-price">₹ ${el.price}</p>
                            <button class="add--btn" id=${el.id}>
                                  ${(0, _model.state).cart[i]?.quantity ? `<div class="secondary--content" id=${el.id}> 
                                        <svg id=${el.id} class="plus--icon" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                         <path name="plus--icon" id=${el.id} fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                         </svg>
                                               <p class="btn-cart--quantity">${(0, _model.state).cart[i].quantity}</p>
                                    <svg id=${el.id} xmlns="http://www.w3.org/2000/svg" class="minus--icon" viewBox="0 0 20 20" fill="currentColor">
                                 <path id=${el.id} name ="minus--icon" fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                       </svg>                                              
                                        </div>` : `<p class="primary--content" id=${el.id}>Add to Cart</p>`}
                       
                            </button>
                        </div>
                        ${(0, _model.state).cart[i]?.cartQuantGrtProdQunt ? "<p class='errorMessage'>cart exceeds limit!</p>" : ""}
                        
               </article>`);
                pushed = true;
            }
            if (!pushed) markup.push(` <article class="product-card">
                        <div class="product">
                            <p class="product-name">${el.name}</p>
                            <img  class="product-image" src=${el.imageURL} alt=${el.name}image>
                        
                        </div>
                        <div class="product-description">
                            <p class="product-price">₹ ${el.price}</p>
                            <button class="add--btn" id=${el.id}>
                               <p class="primary--content" id=${el.id}>Add to Cart</p>
                            </button>
                        </div>
               </article>`);
        });
        return markup;
    }
}
exports.default = BtnView;

},{"regenerator-runtime":"dXNgZ","../model/model":"fApl5","./view":"gxKv6","@parcel/transformer-js/src/esmodule-helpers.js":"9FYyo"}],"fApl5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "fetchProducts", ()=>fetchProducts);
parcelHelpers.export(exports, "createCartObject", ()=>createCartObject);
var _runtime = require("regenerator-runtime/runtime");
const state = {
    data: [],
    cart: [],
    cartTotal: 0,
    increment: true,
    filter: [],
    filterData: [],
    searchFilterData: [],
    preCheckoutPageActive: false,
    queryString: ""
};
const fetchProducts = async ()=>{
    try {
        const promise = await fetch(` https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json `);
        const data = await promise.json();
        state.data = data;
    } catch (err) {
        alert("failed to fetch from the requested resource");
    // console.error(`${err}`);
    }
};
const createCartObject = (product)=>{
    let obj = {};
    if (state.cart.length === 0) return {
        quantity: 1,
        id: product.id,
        productName: product,
        cartQuantGrtProdQunt: product.quantity === 0 ? true : false
    };
    else {
        let cartItem = state.cart.find((e)=>e.id === product.id);
        if (cartItem) {
            obj.quantity = state.increment ? cartItem.quantity + 1 : cartItem.quantity - 1;
            obj.id = cartItem.id;
            obj.productName = cartItem.productName;
            obj.cartQuantGrtProdQunt = obj.quantity > product.quantity ? true : false;
        } else {
            obj.quantity = 1;
            obj.id = product.id;
            obj.productName = product;
            obj.cartQuantGrtProdQunt = product.quantity === 0 ? true : false;
        }
    }
    return obj;
};

},{"regenerator-runtime/runtime":"dXNgZ","@parcel/transformer-js/src/esmodule-helpers.js":"9FYyo"}],"TMgMq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
class CartView extends (0, _viewDefault.default) {
    constructor(){
        super();
        this._parentElement = document.getElementsByClassName("cart-icon-container")[0];
    }
    generateMarkup() {
        let cartCnt = this._data.length > 1 ? this._data.reduce((e, acc)=>e + acc.quantity, 0) : this._data[0]?.quantity ?? 0;
        return [
            `<svg xmlns="http://www.w3.org/2000/svg" class="cart-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
      <p class="cart-quantity">${cartCnt}</p>`, 
        ];
    }
    cartBtnHandlerRedner(handler) {
        document.getElementsByClassName("cart-icon-container")[0].addEventListener("click", handler);
    }
}
exports.default = CartView;

},{"./view":"gxKv6","@parcel/transformer-js/src/esmodule-helpers.js":"9FYyo"}],"bvYNc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// import ProductView from "./productsView";
var _btnView = require("./btnView");
var _btnViewDefault = parcelHelpers.interopDefault(_btnView);
class FilterView extends (0, _btnViewDefault.default) {
    constructor(){
        super();
        this._parentElement = document.getElementsByClassName("section-products-catalog")[0];
    }
    filterSelectHandlerRender(handler) {
        let doms = Array.from(document.querySelectorAll("input")).slice(1);
        doms.forEach((e)=>{
            e.addEventListener("change", handler);
        });
    }
    mobileFilterBtnHandler(handler) {
        const filterBtn = document.getElementsByClassName("filter-icon-container")[0];
        filterBtn.addEventListener("click", handler);
    }
    mobileFilterCloseHandler(handler) {
        document.getElementsByClassName("close-btn--container")[0].addEventListener("click", handler);
    }
}
exports.default = FilterView;

},{"./btnView":"2JTLb","@parcel/transformer-js/src/esmodule-helpers.js":"9FYyo"}],"3z4pc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _model = require("../model/model");
class CartPreCheckout extends (0, _viewDefault.default) {
    constructor(){
        super();
        this._parentElement = document.getElementsByClassName("section-cart--precheckout")[0];
    }
    configureListener(handler) {
        document.getElementsByClassName("section-cart--precheckout")[0].addEventListener("click", handler);
    }
    generateMarkup() {
        return this._data.map((e, index)=>{
            if (index === this._data.length - 1) return `
           <div class="cart-precheckout--container">
                <div class="cart-precheckout">
                    <img class="cart-precheckout--image" src="${e.productName.imageURL}">
                    <div class="cartprecheckout--description">
                        <p class="cartprecheckout--name">${e.productName.name}</p>
                        <p class="cartprecheckout--price">Rs ${e.productName.price}</p>
                    </div>
                
                    <div class="cartprechekout-btn--container">
                        <button class="cart-checkout--btn add" id=${e.productName.id}>
                            <p id=${e.productName.id}>Qty:${e.quantity}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" id=${e.productName.id} class="arrow-up" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path id=${e.productName.id} stroke-linecap="round" stroke-linejoin="round" d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
                            </svg>
                        </button>
                        <button id=${e.productName.id} class="cart-checkout--btn delete">Delete</button>
                    </div>
            </div>  
             <div class="price-total">
            <p class="total-price--heading">Total</p>
                <p class="total-amount">Rs ${(0, _model.state).cartTotal}</p>
                </div>
              
        </div> 
              `;
            else return `
           <div class="cart-precheckout--container">
                <div class="cart-precheckout">
                    <img class="cart-precheckout--image" src="${e.productName.imageURL}">
                    <div class="cartprecheckout--description">
                        <p class="cartprecheckout--name">${e.productName.name}</p>
                        <p class="cartprecheckout--price">Rs ${e.productName.price}</p>
                    </div>
                
                    <div class="cartprechekout-btn--container">
                        <button class="cart-checkout--btn add" id=${e.productName.id}>
                            <p id=${e.productName.id}>Qty:${e.quantity}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" id=${e.productName.id} class="arrow-up" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path id=${e.productName.id} stroke-linecap="round" stroke-linejoin="round" d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
                            </svg>
                        </button>
                        <button id=${e.productName.id} class="cart-checkout--btn delete">Delete</button>
                    </div>
            </div>  
              
        </div> 
              `;
        });
    }
    addToCartHandlerRender(handler) {
        this.configureListener(handler);
    }
    deleteCartItemHandlerRender(handler) {
        this.configureListener(handler);
    }
}
exports.default = CartPreCheckout;

},{"./view":"gxKv6","../model/model":"fApl5","@parcel/transformer-js/src/esmodule-helpers.js":"9FYyo"}],"9E767":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
class NavView extends (0, _viewDefault.default) {
    productViewLinkHandlerRender(handler) {
        document.getElementsByClassName("link")[0].addEventListener("click", handler);
    }
    shopingCartLinkHandlerRender(handler) {
        document.getElementsByClassName("link")[1].addEventListener("click", handler);
    }
}
exports.default = NavView;

},{"./view":"gxKv6","@parcel/transformer-js/src/esmodule-helpers.js":"9FYyo"}],"jWH0p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _productsView = require("./productsView");
var _productsViewDefault = parcelHelpers.interopDefault(_productsView);
var _btnView = require("./btnView");
var _btnViewDefault = parcelHelpers.interopDefault(_btnView);
class SearchView extends (0, _btnViewDefault.default) {
    constructor(){
        super();
        this._parentElement = document.getElementsByClassName("section-products-catalog")[0];
    }
    searchHandlerRender(handler) {
        document.getElementsByClassName("search-input")[0].addEventListener("keyup", handler);
    }
}
exports.default = SearchView;

},{"./productsView":"KaZjk","./btnView":"2JTLb","@parcel/transformer-js/src/esmodule-helpers.js":"9FYyo"}],"3WEdG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "navigateToProductPage", ()=>navigateToProductPage);
parcelHelpers.export(exports, "navigateToCheckout", ()=>navigateToCheckout);
parcelHelpers.export(exports, "deBounceFunc", ()=>deBounceFunc);
parcelHelpers.export(exports, "calcCartTotal", ()=>calcCartTotal);
//////////////////////////////////////////////////////
//DOM
// header
const navEl = document.getElementsByClassName("section-nav")[0].classList;
const secondaryTextEl = document.getElementsByClassName("secondary-logo-text")[0].classList;
const logoTextEl = document.getElementsByClassName("logo-text")[0].classList;
// ///////////////
const searchBarEl = document.getElementsByClassName("section-search-bar")[0].classList;
const filterEl = document.getElementsByClassName("section-filter")[0].classList;
const prodSectionEl = document.getElementsByClassName("section-products-catalog")[0].classList;
// Navigation
const cartEl = document.getElementsByClassName("cart-icon-container")[0].classList;
const prodlinkEl = document.getElementsByClassName("link")[0].classList;
const shopingCartEl = document.getElementsByClassName("link")[1].classList;
document.getElementsByClassName("link")[1].classList;
// precheckout page
const preChekOutHedEl = document.getElementsByClassName("cart-precheckout--heading")[0];
const precheckoutSectionEl = document.getElementsByClassName("section-cart--precheckout")[0].classList;
const navigateToProductPage = ()=>{
    preChekOutHedEl.style.display = "none";
    prodlinkEl.add("active");
    searchBarEl.remove("hide");
    filterEl.remove("hide");
    prodSectionEl.remove("hide");
    precheckoutSectionEl.add("hide");
    cartEl.remove("hide");
    shopingCartEl.add("hide");
    navEl.remove("checkout-active");
    //hide  secondary logo text
    logoTextEl.remove("hide");
    //show logo text
    secondaryTextEl.add("hide");
};
const navigateToCheckout = ()=>{
    // hide product page
    searchBarEl.add("hide");
    filterEl.add("hide");
    prodSectionEl.add("hide");
    //show precheckout page
    precheckoutSectionEl.remove("hide");
    cartEl.add("hide");
    prodlinkEl.remove("active");
    shopingCartEl.remove("hide");
    shopingCartEl.add("active");
    navEl.add("checkout-active");
    //hide logo text
    logoTextEl.add("hide");
    //show secondary logo text
    secondaryTextEl.remove("hide");
};
//Search functionality
//Debounce wrapper to handle search query
function DebounceWrapper(fun, delay) {
    let timer;
    return function inner(event, state, searchView) {
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fun(event, state, searchView);
        }, delay);
    };
}
const deBounceFunc = DebounceWrapper(function(event, state, searchView) {
    const queryLength = event.target.value.length;
    const query = event.target.value;
    if (query.length > 0) {
        const itr = state.filterData.length > 0 ? state.filterData : state.data;
        const searchFilterData = itr.filter((e)=>e.name.slice(0, queryLength).toLowerCase() === query.toLowerCase() || e.type.slice(0, queryLength).toLowerCase() === query.toLowerCase() || e.color.slice(0, queryLength).toLowerCase() === query.toLowerCase());
        state.searchFilterData = searchFilterData;
        searchView.render();
    } else {
        state.searchFilterData = [];
        searchView.render();
    }
}, 500);
const calcCartTotal = (state, cart)=>{
    let totalAmount = cart.reduce((acc, el)=>acc + el.productName.price * el.quantity, 0);
    state.cartTotal = totalAmount;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"9FYyo"}]},["fs1We","jeUzS"], "jeUzS", "parcelRequire32a8")

//# sourceMappingURL=index.fe66c392.js.map
