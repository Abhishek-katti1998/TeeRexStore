// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"scripts/view/view.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var View = /*#__PURE__*/function () {
  function View() {
    _classCallCheck(this, View);
  }

  _createClass(View, [{
    key: "render",
    value: function render(data) {
      var _render = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      // debugger;
      this._data = data;
      var markup = this.generateMarkup().join("");

      this._clear();

      this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
  }, {
    key: "update",
    value: function update(data) {
      this._data = data;
      var newMarkup = this.generateMarkup();
      var newDOM = document.createRange().createContextualFragment(newMarkup);
      var newElements = Array.from(newDOM.querySelectorAll("*"));
      var curElements = Array.from(this._parentElement.querySelectorAll("*"));
      newElements.forEach(function (newEl, i) {
        var _newEl$firstChild;

        var curEl = curElements[i]; // console.log(curEl, newEl.isEqualNode(curEl));
        // Updates changed TEXT

        if (!newEl.isEqualNode(curEl) && ((_newEl$firstChild = newEl.firstChild) === null || _newEl$firstChild === void 0 ? void 0 : _newEl$firstChild.nodeValue.trim()) !== "") {
          // console.log('💥', newEl.firstChild.nodeValue.trim());
          curEl.textContent = newEl.textContent;
        } // Updates changed ATTRIBUES


        if (!newEl.isEqualNode(curEl)) Array.from(newEl.attributes).forEach(function (attr) {
          return curEl === null || curEl === void 0 ? void 0 : curEl.setAttribute(attr.name, attr.value);
        });
      });
    }
  }, {
    key: "_clear",
    value: function _clear() {
      this._parentElement.innerHTML = "";
    }
  }]);

  return View;
}();

var _default = View;
exports.default = _default;
},{}],"node_modules/regenerator-runtime/runtime.js":[function(require,module,exports) {
var define;
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
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
  } catch (err) {
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
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
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
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
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
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
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

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
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
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

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

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
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

    if (! info) {
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

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

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
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

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
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
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
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
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
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

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

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

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
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
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

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

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
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

},{}],"scripts/view/productsView.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _view = _interopRequireDefault(require("./view"));

require("regenerator-runtime/runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ProductView = /*#__PURE__*/function (_View) {
  _inherits(ProductView, _View);

  var _super = _createSuper(ProductView);

  function ProductView() {
    var _this;

    _classCallCheck(this, ProductView);

    _this = _super.call(this);
    _this._parentElement = document.getElementsByClassName("section-products-catalog")[0];
    return _this;
  }

  _createClass(ProductView, [{
    key: "generateMarkup",
    value: function generateMarkup() {
      if (this._data.length === 0) {
        return ["<p class=\"noresults--message\">No results found :(</p>"];
      } else {
        return this._data.map(function (el) {
          return " <article class=\"product-card\">\n                        <div class=\"product\">\n                            <p class=\"product-name\">".concat(el.name, "</p>\n                            <img  class=\"product-image\" src=").concat(el.imageURL, " alt=").concat(el.name, "image>\n                        \n                        </div>\n                        <div class=\"product-description\">\n                            <p class=\"product-price\">\u20B9 ").concat(el.price, "</p>\n                            <button class=\"add--btn\" id=").concat(el.id, ">\n                               <p class=\"primary--content\" id=").concat(el.id, ">Add to Cart</p>\n                            </button>\n                        </div>\n               </article>");
        });
      }
    }
  }]);

  return ProductView;
}(_view.default);

var _default = ProductView;
exports.default = _default;
},{"./view":"scripts/view/view.js","regenerator-runtime/runtime":"node_modules/regenerator-runtime/runtime.js"}],"scripts/model/model.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCartObject = exports.fetchProducts = exports.state = void 0;

require("regenerator-runtime/runtime");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var state = {
  data: [],
  cart: [],
  cartTotal: 0,
  increment: true,
  filter: new Map(),
  filterData: [],
  searchFilterData: [],
  preCheckoutPageActive: false,
  queryString: ""
};
exports.state = state;

var fetchProducts = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var promise, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch(" https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json ");

          case 3:
            promise = _context.sent;
            _context.next = 6;
            return promise.json();

          case 6:
            data = _context.sent;
            state.data = data;
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            alert("failed to fetch from the requested resource"); // console.error(`${err}`);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function fetchProducts() {
    return _ref.apply(this, arguments);
  };
}();

exports.fetchProducts = fetchProducts;

var createCartObject = function createCartObject(product) {
  var obj = {};

  if (state.cart.length === 0) {
    return {
      quantity: 1,
      id: product.id,
      productName: product,
      cartQuantGrtProdQunt: product.quantity === 0 ? true : false
    };
  } else {
    var cartItem = state.cart.find(function (e) {
      return e.id === product.id;
    });

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

exports.createCartObject = createCartObject;
},{"regenerator-runtime/runtime":"node_modules/regenerator-runtime/runtime.js"}],"scripts/view/btnView.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regeneratorRuntime = require("regenerator-runtime");

var _model = require("../model/model");

var _view = _interopRequireDefault(require("./view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var BtnView = /*#__PURE__*/function (_View) {
  _inherits(BtnView, _View);

  var _super = _createSuper(BtnView);

  function BtnView() {
    var _this;

    _classCallCheck(this, BtnView);

    _this = _super.call(this);
    _this._parentElement = document.getElementsByClassName("section-products-catalog")[0];
    return _this;
  }

  _createClass(BtnView, [{
    key: "addToBtnHandlerRender",
    value: function addToBtnHandlerRender(handler) {
      this._parentElement.addEventListener("click", handler);
    }
  }, {
    key: "generateMarkup",
    value: function generateMarkup() {
      var markup = [];
      var itr = _model.state.searchFilterData.length > 0 ? _model.state.searchFilterData : _model.state.data.slice(0, 6);

      if (_model.state.filterData.length) {
        itr = _model.state.filterData;
      }

      if (_model.state.queryString && _model.state.searchFilterData.length === 0) {
        markup.push('<p class="noresults--message">No results found :(</p>');
        return markup;
      }

      itr.forEach(function (el) {
        var pushed = false;

        for (var i = 0; i < _model.state.cart.length; i++) {
          if (el.id === _model.state.cart[i].id) {
            var _state$cart$i, _state$cart$i2;

            markup.push(" <article class=\"product-card\">\n                        <div class=\"product\">\n                            <p class=\"product-name\">".concat(el.name, "</p>\n                            <img  class=\"product-image\" src=").concat(el.imageURL, " alt=").concat(el.name, "image>\n                        \n                        </div>\n                        <div class=\"product-description\">\n                            <p class=\"product-price\">\u20B9 ").concat(el.price, "</p>\n                            <button class=\"add--btn\" id=").concat(el.id, ">\n                                  ").concat((_state$cart$i = _model.state.cart[i]) !== null && _state$cart$i !== void 0 && _state$cart$i.quantity ? "<div class=\"secondary--content\" id=".concat(el.id, "> \n                                        <svg id=").concat(el.id, " class=\"plus--icon\" xmlns=\"http://www.w3.org/2000/svg\" class=\"h-5 w-5\" viewBox=\"0 0 20 20\" fill=\"currentColor\">\n                                         <path name=\"plus--icon\" id=").concat(el.id, " fill-rule=\"evenodd\" d=\"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z\" clip-rule=\"evenodd\" />\n                                         </svg>\n                                               <p class=\"btn-cart--quantity\">").concat(_model.state.cart[i].quantity, "</p>\n                                    <svg id=").concat(el.id, " xmlns=\"http://www.w3.org/2000/svg\" class=\"minus--icon\" viewBox=\"0 0 20 20\" fill=\"currentColor\">\n                                 <path id=").concat(el.id, " name =\"minus--icon\" fill-rule=\"evenodd\" d=\"M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z\" clip-rule=\"evenodd\" />\n                                       </svg>                                              \n                                        </div>") : "<p class=\"primary--content\" id=".concat(el.id, ">Add to Cart</p>"), "\n                       \n                            </button>\n                        </div>\n                        ").concat((_state$cart$i2 = _model.state.cart[i]) !== null && _state$cart$i2 !== void 0 && _state$cart$i2.cartQuantGrtProdQunt ? "<p class='errorMessage'>cart exceeds limit!</p>" : "", "\n                        \n               </article>"));
            pushed = true;
          }
        }

        if (!pushed) {
          markup.push(" <article class=\"product-card\">\n                        <div class=\"product\">\n                            <p class=\"product-name\">".concat(el.name, "</p>\n                            <img  class=\"product-image\" src=").concat(el.imageURL, " alt=").concat(el.name, "image>\n                        \n                        </div>\n                        <div class=\"product-description\">\n                            <p class=\"product-price\">\u20B9 ").concat(el.price, "</p>\n                            <button class=\"add--btn\" id=").concat(el.id, ">\n                               <p class=\"primary--content\" id=").concat(el.id, ">Add to Cart</p>\n                            </button>\n                        </div>\n               </article>"));
        }
      });
      return markup;
    }
  }]);

  return BtnView;
}(_view.default);

var _default = BtnView;
exports.default = _default;
},{"regenerator-runtime":"node_modules/regenerator-runtime/runtime.js","../model/model":"scripts/model/model.js","./view":"scripts/view/view.js"}],"scripts/view/cartView.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _view = _interopRequireDefault(require("./view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var CartView = /*#__PURE__*/function (_View) {
  _inherits(CartView, _View);

  var _super = _createSuper(CartView);

  function CartView() {
    var _this;

    _classCallCheck(this, CartView);

    _this = _super.call(this);
    _this._parentElement = document.getElementsByClassName("cart-icon-container")[0];
    return _this;
  }

  _createClass(CartView, [{
    key: "generateMarkup",
    value: function generateMarkup() {
      var _this$_data$0$quantit, _this$_data$;

      var cartCnt = this._data.length > 1 ? this._data.reduce(function (e, acc) {
        return e + acc.quantity;
      }, 0) : (_this$_data$0$quantit = (_this$_data$ = this._data[0]) === null || _this$_data$ === void 0 ? void 0 : _this$_data$.quantity) !== null && _this$_data$0$quantit !== void 0 ? _this$_data$0$quantit : 0;
      return ["<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"cart-icon\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"\n                    stroke-width=\"2\">\n                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                        d=\"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z\" />\n                </svg>\n      <p class=\"cart-quantity\">".concat(cartCnt, "</p>")];
    }
  }, {
    key: "cartBtnHandlerRedner",
    value: function cartBtnHandlerRedner(handler) {
      document.getElementsByClassName("cart-icon-container")[0].addEventListener("click", handler);
    }
  }]);

  return CartView;
}(_view.default);

var _default = CartView;
exports.default = _default;
},{"./view":"scripts/view/view.js"}],"scripts/view/filterView.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _btnView = _interopRequireDefault(require("./btnView"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var FilterView = /*#__PURE__*/function (_BtnView) {
  _inherits(FilterView, _BtnView);

  var _super = _createSuper(FilterView);

  function FilterView() {
    var _this;

    _classCallCheck(this, FilterView);

    _this = _super.call(this);
    _this._parentElement = document.getElementsByClassName("section-products-catalog")[0];
    return _this;
  }

  _createClass(FilterView, [{
    key: "filterSelectHandlerRender",
    value: function filterSelectHandlerRender(handler) {
      var doms = Array.from(document.querySelectorAll("input")).slice(1);
      doms.forEach(function (e) {
        e.addEventListener("change", handler);
      });
    }
  }, {
    key: "mobileFilterBtnHandler",
    value: function mobileFilterBtnHandler(handler) {
      var filterBtn = document.getElementsByClassName("filter-icon-container")[0];
      filterBtn.addEventListener("click", handler);
    }
  }, {
    key: "mobileFilterCloseHandler",
    value: function mobileFilterCloseHandler(handler) {
      document.getElementsByClassName("close-btn--container")[0].addEventListener("click", handler);
    }
  }]);

  return FilterView;
}(_btnView.default);

var _default = FilterView;
exports.default = _default;
},{"./btnView":"scripts/view/btnView.js"}],"scripts/view/precheckoutCart.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _view = _interopRequireDefault(require("./view"));

var _model = require("../model/model");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var CartPreCheckout = /*#__PURE__*/function (_View) {
  _inherits(CartPreCheckout, _View);

  var _super = _createSuper(CartPreCheckout);

  function CartPreCheckout() {
    var _this;

    _classCallCheck(this, CartPreCheckout);

    _this = _super.call(this);
    _this._parentElement = document.getElementsByClassName("section-cart--precheckout")[0];
    return _this;
  }

  _createClass(CartPreCheckout, [{
    key: "configureListener",
    value: function configureListener(handler) {
      document.getElementsByClassName("section-cart--precheckout")[0].addEventListener("click", handler);
    }
  }, {
    key: "generateMarkup",
    value: function generateMarkup() {
      var _this2 = this;

      return this._data.map(function (e, index) {
        if (index === _this2._data.length - 1) {
          return "\n           <div class=\"cart-precheckout--container\">\n                <div class=\"cart-precheckout\">\n                    <img class=\"cart-precheckout--image\" src=\"".concat(e.productName.imageURL, "\">\n                    <div class=\"cartprecheckout--description\">\n                        <p class=\"cartprecheckout--name\">").concat(e.productName.name, "</p>\n                        <p class=\"cartprecheckout--price\">Rs ").concat(e.productName.price, "</p>\n                    </div>\n                \n                    <div class=\"cartprechekout-btn--container\">\n                        <button class=\"cart-checkout--btn add\" id=").concat(e.productName.id, ">\n                            <p id=").concat(e.productName.id, ">Qty:").concat(e.quantity, "</p>\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" id=").concat(e.productName.id, " class=\"arrow-up\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\">\n                                <path id=").concat(e.productName.id, " stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7 11l5-5m0 0l5 5m-5-5v12\"></path>\n                            </svg>\n                        </button>\n                        <button id=").concat(e.productName.id, " class=\"cart-checkout--btn delete\">Delete</button>\n                    </div>\n            </div>  \n             <div class=\"price-total\">\n            <p class=\"total-price--heading\">Total</p>\n                <p class=\"total-amount\">Rs ").concat(_model.state.cartTotal, "</p>\n                </div>\n              \n        </div> \n              ");
        } else {
          return "\n           <div class=\"cart-precheckout--container\">\n                <div class=\"cart-precheckout\">\n                    <img class=\"cart-precheckout--image\" src=\"".concat(e.productName.imageURL, "\">\n                    <div class=\"cartprecheckout--description\">\n                        <p class=\"cartprecheckout--name\">").concat(e.productName.name, "</p>\n                        <p class=\"cartprecheckout--price\">Rs ").concat(e.productName.price, "</p>\n                    </div>\n                \n                    <div class=\"cartprechekout-btn--container\">\n                        <button class=\"cart-checkout--btn add\" id=").concat(e.productName.id, ">\n                            <p id=").concat(e.productName.id, ">Qty:").concat(e.quantity, "</p>\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" id=").concat(e.productName.id, " class=\"arrow-up\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\">\n                                <path id=").concat(e.productName.id, " stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7 11l5-5m0 0l5 5m-5-5v12\"></path>\n                            </svg>\n                        </button>\n                        <button id=").concat(e.productName.id, " class=\"cart-checkout--btn delete\">Delete</button>\n                    </div>\n            </div>  \n              \n        </div> \n              ");
        }
      });
    }
  }, {
    key: "addToCartHandlerRender",
    value: function addToCartHandlerRender(handler) {
      this.configureListener(handler);
    }
  }, {
    key: "deleteCartItemHandlerRender",
    value: function deleteCartItemHandlerRender(handler) {
      this.configureListener(handler);
    }
  }]);

  return CartPreCheckout;
}(_view.default);

var _default = CartPreCheckout;
exports.default = _default;
},{"./view":"scripts/view/view.js","../model/model":"scripts/model/model.js"}],"scripts/view/navView.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _view = _interopRequireDefault(require("./view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var NavView = /*#__PURE__*/function (_View) {
  _inherits(NavView, _View);

  var _super = _createSuper(NavView);

  function NavView() {
    _classCallCheck(this, NavView);

    return _super.apply(this, arguments);
  }

  _createClass(NavView, [{
    key: "productViewLinkHandlerRender",
    value: function productViewLinkHandlerRender(handler) {
      document.getElementsByClassName("link")[0].addEventListener("click", handler);
    }
  }, {
    key: "shopingCartLinkHandlerRender",
    value: function shopingCartLinkHandlerRender(handler) {
      document.getElementsByClassName("link")[1].addEventListener("click", handler);
    }
  }]);

  return NavView;
}(_view.default);

var _default = NavView;
exports.default = _default;
},{"./view":"scripts/view/view.js"}],"scripts/view/searchView.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _productsView = _interopRequireDefault(require("./productsView"));

var _btnView = _interopRequireDefault(require("./btnView"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var SearchView = /*#__PURE__*/function (_BtnView) {
  _inherits(SearchView, _BtnView);

  var _super = _createSuper(SearchView);

  function SearchView() {
    var _this;

    _classCallCheck(this, SearchView);

    _this = _super.call(this);
    _this._parentElement = document.getElementsByClassName("section-products-catalog")[0];
    return _this;
  }

  _createClass(SearchView, [{
    key: "searchHandlerRender",
    value: function searchHandlerRender(handler) {
      document.getElementsByClassName("search-input")[0].addEventListener("keyup", handler);
    }
  }]);

  return SearchView;
}(_btnView.default);

var _default = SearchView;
exports.default = _default;
},{"./productsView":"scripts/view/productsView.js","./btnView":"scripts/view/btnView.js"}],"scripts/helper.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calcCartTotal = exports.deBounceFunc = exports.navigateToCheckout = exports.navigateToProductPage = void 0;
//////////////////////////////////////////////////////
//DOM
// header
var navEl = document.getElementsByClassName("section-nav")[0].classList;
var secondaryTextEl = document.getElementsByClassName("secondary-logo-text")[0].classList;
var logoTextEl = document.getElementsByClassName("logo-text")[0].classList; // ///////////////

var searchBarEl = document.getElementsByClassName("section-search-bar")[0].classList;
var filterEl = document.getElementsByClassName("section-filter")[0].classList;
var prodSectionEl = document.getElementsByClassName("section-products-catalog")[0].classList; // Navigation

var cartEl = document.getElementsByClassName("cart-icon-container")[0].classList;
var prodlinkEl = document.getElementsByClassName("link")[0].classList;
var shopingCartEl = document.getElementsByClassName("link")[1].classList;
document.getElementsByClassName("link")[1].classList; // precheckout page

var preChekOutHedEl = document.getElementsByClassName("cart-precheckout--heading")[0];
var precheckoutSectionEl = document.getElementsByClassName("section-cart--precheckout")[0].classList;

var navigateToProductPage = function navigateToProductPage() {
  preChekOutHedEl.style.display = "none";
  prodlinkEl.add("active");
  searchBarEl.remove("hide");
  filterEl.remove("hide");
  prodSectionEl.remove("hide");
  precheckoutSectionEl.add("hide");
  cartEl.remove("hide");
  shopingCartEl.add("hide");
  navEl.remove("checkout-active"); //hide  secondary logo text

  logoTextEl.remove("hide"); //show logo text

  secondaryTextEl.add("hide");
};

exports.navigateToProductPage = navigateToProductPage;

var navigateToCheckout = function navigateToCheckout() {
  // hide product page
  searchBarEl.add("hide");
  filterEl.add("hide");
  prodSectionEl.add("hide"); //show precheckout page

  precheckoutSectionEl.remove("hide");
  cartEl.add("hide");
  prodlinkEl.remove("active");
  shopingCartEl.remove("hide");
  shopingCartEl.add("active");
  navEl.add("checkout-active"); //hide logo text

  logoTextEl.add("hide"); //show secondary logo text

  secondaryTextEl.remove("hide");
}; //Search functionality
//Debounce wrapper to handle search query


exports.navigateToCheckout = navigateToCheckout;

function DebounceWrapper(fun, delay) {
  var timer;
  return function inner(event, state, searchView) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      fun(event, state, searchView);
    }, delay);
  };
}

var deBounceFunc = DebounceWrapper(function (event, state, searchView) {
  var queryLength = event.target.value.length;
  var query = event.target.value;

  if (query.length > 0) {
    var itr = state.filterData.length > 0 ? state.filterData : state.data;
    var searchFilterData = itr.filter(function (e) {
      return e.name.slice(0, queryLength).toLowerCase() === query.toLowerCase() || e.type.slice(0, queryLength).toLowerCase() === query.toLowerCase() || e.color.slice(0, queryLength).toLowerCase() === query.toLowerCase();
    });
    state.searchFilterData = searchFilterData;
    searchView.render();
  } else {
    state.searchFilterData = [];
    searchView.render();
  }
}, 500); //calculate total amount of the cart items

exports.deBounceFunc = deBounceFunc;

var calcCartTotal = function calcCartTotal(state, cart) {
  var totalAmount = cart.reduce(function (acc, el) {
    return acc + el.productName.price * el.quantity;
  }, 0);
  state.cartTotal = totalAmount;
};

exports.calcCartTotal = calcCartTotal;
},{}],"scripts/controller/controller.js":[function(require,module,exports) {
"use strict";

var _productsView = _interopRequireDefault(require("../view/productsView"));

var _btnView = _interopRequireDefault(require("../view/btnView"));

var _model = require("../model/model");

var _cartView = _interopRequireDefault(require("../view/cartView"));

var _filterView = _interopRequireDefault(require("../view/filterView"));

var _precheckoutCart = _interopRequireDefault(require("../view/precheckoutCart"));

var _navView = _interopRequireDefault(require("../view/navView"));

var _searchView = _interopRequireDefault(require("../view/searchView"));

var _helper = require("../helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/////////////////////////////////////////////////////
// precheckout page selector
var preChekOutHedEl = document.getElementsByClassName("cart-precheckout--heading")[0]; /// //////////////////////////////////////////////////
//globals

var btnView;
var products = new _productsView.default();
var cartView = new _cartView.default();
var filterView = new _filterView.default();
var navView = new _navView.default();
var cartPreCheckout = new _precheckoutCart.default();
var searchView = new _searchView.default(); ///////////////////////////////////////
//Fetch products from API

var init = function init() {
  return (0, _model.fetchProducts)();
}; // Navigation handlers


var productNavHandler = function productNavHandler() {
  (0, _helper.navigateToProductPage)();
  _model.state.preCheckoutPageActive = false;
  btnView.render(_model.state);
  cartView.render(_model.state.cart);
}; //add to cart handler


var addToCartHandler = function addToCartHandler(e) {
  var _e$target$attributes$, _e$target$parentEleme, _e$target$parentEleme2, _e$target$attributes$2;

  var freshCartItem = true;

  if (e.target.textContent === "Add to Cart") {
    _model.state.increment = true;
  } else if (Array.from(e.target.classList).includes("plus--icon") || ((_e$target$attributes$ = e.target.attributes.name) === null || _e$target$attributes$ === void 0 ? void 0 : _e$target$attributes$.value) === "plus--icon") {
    _model.state.increment = true;
  } else if (Array.from(e.target.classList).includes("add") || Array.from((_e$target$parentEleme = e.target.parentElement) === null || _e$target$parentEleme === void 0 ? void 0 : _e$target$parentEleme.classList).includes("add") || Array.from((_e$target$parentEleme2 = e.target.parentElement) === null || _e$target$parentEleme2 === void 0 ? void 0 : _e$target$parentEleme2.classList).includes("arrow-up")) {
    //add from preCheckout page
    _model.state.increment = true;
    _model.state.renderPrechkoutPage = true;
  } else if (Array.from(e.target.classList).includes("minus--icon") || ((_e$target$attributes$2 = e.target.attributes.name) === null || _e$target$attributes$2 === void 0 ? void 0 : _e$target$attributes$2.value) === "minus--icon") {
    _model.state.increment = false;
  } else {
    return;
  }

  var cartObj = (0, _model.createCartObject)(_model.state.data.filter(function (el) {
    return Number(el.id) === Number(e.target.id);
  })[0]); //delete from cart if product quantity is 0

  if (cartObj && cartObj.quantity === 0) {
    var updatedCart = _model.state.cart.filter(function (e) {
      return e.id !== cartObj.id;
    });

    _model.state.cart = updatedCart;
  } //if user cart is empty
  else if (_model.state.cart.length === 0) {
      _model.state.cart.push(cartObj);
    } // if cart is filled
    else {
        for (var i = 0; i < _model.state.cart.length; i++) {
          var _state$cart$i;

          if (((_state$cart$i = _model.state.cart[i]) === null || _state$cart$i === void 0 ? void 0 : _state$cart$i.id) === cartObj.id) {
            _model.state.cart[i] = cartObj;
            freshCartItem = false;
          }
        }

        if (freshCartItem) {
          _model.state.cart.push(cartObj);
        }
      } // calculate cart total amount


  (0, _helper.calcCartTotal)(_model.state, _model.state.cart);
  cartView.render(_model.state.cart);

  if (_model.state.preCheckoutPageActive) {
    cartPreCheckout.update(_model.state.cart);
    return;
  }

  btnView.render(_model.state);
}; //delete cart item handler from precheckoutCart view


var deleteCartItemHandler = function deleteCartItemHandler(event) {
  if (event.target.textContent === "Delete") {
    var updatedCart = _model.state.cart.filter(function (el) {
      return Number(el.id) !== Number(event.target.id);
    });

    _model.state.cart = updatedCart;
    (0, _helper.calcCartTotal)(_model.state, _model.state.cart);
    cartPreCheckout.render(_model.state.cart);
  }
}; // cart click handler(navigate to pre checkout page)


var cartBtnClickHandler = function cartBtnClickHandler(e) {
  e.preventDefault();
  (0, _helper.navigateToCheckout)();
  preChekOutHedEl.style.display = "block";
  _model.state.preCheckoutPageActive = true;
  cartPreCheckout.render(_model.state.cart);
  cartPreCheckout.addToCartHandlerRender(addToCartHandler);
  cartPreCheckout.deleteCartItemHandlerRender(deleteCartItemHandler);
}; //filter handler


var filterHandler = function filterHandler(e) {
  if (!_model.state.filter.has(e.target.value)) {
    _model.state.filter.set(e.target.value, 1);
  } else {
    _model.state.filter.delete(e.target.value);
  }

  var filterCriteria = Array.from(_model.state.filter.keys());
  var tempFilterdData = [];
  var filterToApply = _model.state.searchFilterData.length > 0 ? _model.state.searchFilterData : _model.state.data;

  for (var i = 0; i < filterCriteria.length; i++) {
    for (var j = 0; j < filterToApply.length; j++) {
      if (Object.values(filterToApply[j]).includes(filterCriteria[i])) {
        tempFilterdData.push(filterToApply[j]);
      }
    }
  }

  if (filterCriteria.includes("0-₹250")) {
    var filterByPrice = filterToApply.filter(function (e) {
      return e.price <= 250;
    });
    tempFilterdData = [].concat(_toConsumableArray(tempFilterdData), _toConsumableArray(filterByPrice));
  }

  if (filterCriteria.includes("₹251-₹450")) {
    var _filterByPrice = filterToApply.filter(function (e) {
      return e.price > 250 && e.price <= 450;
    });

    tempFilterdData = [].concat(_toConsumableArray(tempFilterdData), _toConsumableArray(_filterByPrice));
  }

  if (filterCriteria.includes("₹450")) {
    var _filterByPrice2 = filterToApply.filter(function (e) {
      return e.price > 450;
    });

    tempFilterdData = [].concat(_toConsumableArray(tempFilterdData), _toConsumableArray(_filterByPrice2));
  }

  _model.state.filterData = tempFilterdData;
  filterView.render(_model.state.filterData); //reset to original state if there are no filters

  if (_model.state.filter.size === 0) {
    btnView.render();
    return;
  }
}; //mobile filter btn click handler


var filterBtnClickHandler = function filterBtnClickHandler() {
  document.getElementsByClassName("section-filter")[0].classList.add("section-filter--active");
}; // close mobile filter


var filterCloseHandler = function filterCloseHandler() {
  document.getElementsByClassName("section-filter")[0].classList.remove("section-filter--active");
}; //search query


var searchIpHandler = function searchIpHandler(event) {
  //debounce function decorator declared in helper.js
  _model.state.queryString = event.target.value;
  (0, _helper.deBounceFunc)(event, _model.state, searchView);
};

searchView;
init().then(function (el) {
  var data = _model.state.data;

  if (data.length > 0) {
    products.render(data.slice(0, 6));
  }

  btnView = new _btnView.default();
  btnView.addToBtnHandlerRender(addToCartHandler);
  filterView.filterSelectHandlerRender(filterHandler);
  filterView.mobileFilterBtnHandler(filterBtnClickHandler);
  filterView.mobileFilterCloseHandler(filterCloseHandler);
  cartView.cartBtnHandlerRedner(cartBtnClickHandler);
  navView.productViewLinkHandlerRender(productNavHandler);
  searchView.searchHandlerRender(searchIpHandler);
});
},{"../view/productsView":"scripts/view/productsView.js","../view/btnView":"scripts/view/btnView.js","../model/model":"scripts/model/model.js","../view/cartView":"scripts/view/cartView.js","../view/filterView":"scripts/view/filterView.js","../view/precheckoutCart":"scripts/view/precheckoutCart.js","../view/navView":"scripts/view/navView.js","../view/searchView":"scripts/view/searchView.js","../helper":"scripts/helper.js"}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59099" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/controller/controller.js"], null)
//# sourceMappingURL=/controller.5aa02827.js.map