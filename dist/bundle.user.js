// ==UserScript==
// @namespace https://github.com/dotennin/baidu-pan-downloader
// @name 百度网盘下载管理器
// @description A download manager for Baidu Yun
// @version 1.4.3
// @author Dotennin
// @license MIT
// @compatible        chrome/83.0.4103.97 passed
// @compatible        edge/83.0.478.54 passed
// @compatible        opera untested
// @compatible        safari untested
// @include https://pan.baidu.com/disk/*
// @include https://yun.baidu.com/disk/*
// @include https://pan.baidu.com/s/*
// @include https://yun.baidu.com/s/*
// @connect baidu.com
// @connect qdall01.baidupcs.com
// @grant GM_xmlhttpRequest
// @grant GM_download
// @grant GM_notification
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_deleteValue
// @grant GM_addValueChangeListener
// @run-at document-idle
// ==/UserScript==

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(45);
} else {}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export $ */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return logError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return wrapSagaDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FORK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GET_CONTEXT; });
/* unused harmony export H */
/* unused harmony export I */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return JOIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return take; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return fork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return cancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return call; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return actionChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return PUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return sliding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return RACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return SELECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return TAKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return race; });
/* unused harmony export W */
/* unused harmony export X */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return put; });
/* unused harmony export Z */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return CPS; });
/* unused harmony export a0 */
/* unused harmony export a1 */
/* unused harmony export a2 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return select; });
/* unused harmony export a4 */
/* unused harmony export a5 */
/* unused harmony export a6 */
/* unused harmony export a7 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return check; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return ACTION_CHANNEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return expanding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return CANCELLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return FLUSH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return SET_CONTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return internalErr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return getMetaInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return kTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return createAllStyleChildCallbacks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return createEmptyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return none; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return assignWithSymbols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return makeIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return shouldComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return flatMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return getLocation; });
/* unused harmony export w */
/* unused harmony export x */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return shouldCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return shouldTerminate; });
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _redux_saga_delay_p__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);





var konst = function konst(v) {
  return function () {
    return v;
  };
};

var kTrue = /*#__PURE__*/konst(true);

var noop = function noop() {};

if (false) {}

var identity = function identity(v) {
  return v;
};

var hasSymbol = typeof Symbol === 'function';
var asyncIteratorSymbol = hasSymbol && Symbol.asyncIterator ? Symbol.asyncIterator : '@@asyncIterator';

function check(value, predicate, error) {
  if (!predicate(value)) {
    throw new Error(error);
  }
}

var assignWithSymbols = function assignWithSymbols(target, source) {
  Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(target, source);

  if (Object.getOwnPropertySymbols) {
    Object.getOwnPropertySymbols(source).forEach(function (s) {
      target[s] = source[s];
    });
  }
};

var flatMap = function flatMap(mapper, arr) {
  var _ref;

  return (_ref = []).concat.apply(_ref, arr.map(mapper));
};

function remove(array, item) {
  var index = array.indexOf(item);

  if (index >= 0) {
    array.splice(index, 1);
  }
}

function once(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }

    called = true;
    fn();
  };
}

var kThrow = function kThrow(err) {
  throw err;
};

var kReturn = function kReturn(value) {
  return {
    value: value,
    done: true
  };
};

function makeIterator(next, thro, name) {
  if (thro === void 0) {
    thro = kThrow;
  }

  if (name === void 0) {
    name = 'iterator';
  }

  var iterator = {
    meta: {
      name: name
    },
    next: next,
    throw: thro,
    return: kReturn,
    isSagaIterator: true
  };

  if (typeof Symbol !== 'undefined') {
    iterator[Symbol.iterator] = function () {
      return iterator;
    };
  }

  return iterator;
}

function logError(error, _ref2) {
  var sagaStack = _ref2.sagaStack;
  /*eslint-disable no-console*/

  console.error(error);
  console.error(sagaStack);
}

var internalErr = function internalErr(err) {
  return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: " + err + "\n");
};

var createSetContextWarning = function createSetContextWarning(ctx, props) {
  return (ctx ? ctx + '.' : '') + "setContext(props): argument " + props + " is not a plain object";
};

var FROZEN_ACTION_ERROR = "You can't put (a.k.a. dispatch from saga) frozen actions.\nWe have to define a special non-enumerable property on those actions for scheduling purposes.\nOtherwise you wouldn't be able to communicate properly between sagas & other subscribers (action ordering would become far less predictable).\nIf you are using redux and you care about this behaviour (frozen actions),\nthen you might want to switch to freezing actions in a middleware rather than in action creator.\nExample implementation:\n\nconst freezeActions = store => next => action => next(Object.freeze(action))\n"; // creates empty, but not-holey array

var createEmptyArray = function createEmptyArray(n) {
  return Array.apply(null, new Array(n));
};

var wrapSagaDispatch = function wrapSagaDispatch(dispatch) {
  return function (action) {
    if (false) {}

    return dispatch(Object.defineProperty(action, _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__[/* SAGA_ACTION */ "f"], {
      value: true
    }));
  };
};

var shouldTerminate = function shouldTerminate(res) {
  return res === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__[/* TERMINATE */ "k"];
};

var shouldCancel = function shouldCancel(res) {
  return res === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__[/* TASK_CANCEL */ "j"];
};

var shouldComplete = function shouldComplete(res) {
  return shouldTerminate(res) || shouldCancel(res);
};

function createAllStyleChildCallbacks(shape, parentCallback) {
  var keys = Object.keys(shape);
  var totalCount = keys.length;

  if (false) {}

  var completedCount = 0;
  var completed;
  var results = Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__[/* array */ "a"])(shape) ? createEmptyArray(totalCount) : {};
  var childCallbacks = {};

  function checkEnd() {
    if (completedCount === totalCount) {
      completed = true;
      parentCallback(results);
    }
  }

  keys.forEach(function (key) {
    var chCbAtKey = function chCbAtKey(res, isErr) {
      if (completed) {
        return;
      }

      if (isErr || shouldComplete(res)) {
        parentCallback.cancel();
        parentCallback(res, isErr);
      } else {
        results[key] = res;
        completedCount++;
        checkEnd();
      }
    };

    chCbAtKey.cancel = noop;
    childCallbacks[key] = chCbAtKey;
  });

  parentCallback.cancel = function () {
    if (!completed) {
      completed = true;
      keys.forEach(function (key) {
        return childCallbacks[key].cancel();
      });
    }
  };

  return childCallbacks;
}

function getMetaInfo(fn) {
  return {
    name: fn.name || 'anonymous',
    location: getLocation(fn)
  };
}

function getLocation(instrumented) {
  return instrumented[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__[/* SAGA_LOCATION */ "g"]];
}

var BUFFER_OVERFLOW = "Channel's Buffer overflow!";
var ON_OVERFLOW_THROW = 1;
var ON_OVERFLOW_DROP = 2;
var ON_OVERFLOW_SLIDE = 3;
var ON_OVERFLOW_EXPAND = 4;
var zeroBuffer = {
  isEmpty: kTrue,
  put: noop,
  take: noop
};

function ringBuffer(limit, overflowAction) {
  if (limit === void 0) {
    limit = 10;
  }

  var arr = new Array(limit);
  var length = 0;
  var pushIndex = 0;
  var popIndex = 0;

  var push = function push(it) {
    arr[pushIndex] = it;
    pushIndex = (pushIndex + 1) % limit;
    length++;
  };

  var take = function take() {
    if (length != 0) {
      var it = arr[popIndex];
      arr[popIndex] = null;
      length--;
      popIndex = (popIndex + 1) % limit;
      return it;
    }
  };

  var flush = function flush() {
    var items = [];

    while (length) {
      items.push(take());
    }

    return items;
  };

  return {
    isEmpty: function isEmpty() {
      return length == 0;
    },
    put: function put(it) {
      if (length < limit) {
        push(it);
      } else {
        var doubledLimit;

        switch (overflowAction) {
          case ON_OVERFLOW_THROW:
            throw new Error(BUFFER_OVERFLOW);

          case ON_OVERFLOW_SLIDE:
            arr[pushIndex] = it;
            pushIndex = (pushIndex + 1) % limit;
            popIndex = pushIndex;
            break;

          case ON_OVERFLOW_EXPAND:
            doubledLimit = 2 * limit;
            arr = flush();
            length = arr.length;
            pushIndex = arr.length;
            popIndex = 0;
            arr.length = doubledLimit;
            limit = doubledLimit;
            push(it);
            break;

          default: // DROP

        }
      }
    },
    take: take,
    flush: flush
  };
}

var none = function none() {
  return zeroBuffer;
};

var fixed = function fixed(limit) {
  return ringBuffer(limit, ON_OVERFLOW_THROW);
};

var dropping = function dropping(limit) {
  return ringBuffer(limit, ON_OVERFLOW_DROP);
};

var sliding = function sliding(limit) {
  return ringBuffer(limit, ON_OVERFLOW_SLIDE);
};

var expanding = function expanding(initialSize) {
  return ringBuffer(initialSize, ON_OVERFLOW_EXPAND);
};

var buffers = /*#__PURE__*/Object.freeze({
  __proto__: null,
  none: none,
  fixed: fixed,
  dropping: dropping,
  sliding: sliding,
  expanding: expanding
});
var TAKE = 'TAKE';
var PUT = 'PUT';
var ALL = 'ALL';
var RACE = 'RACE';
var CALL = 'CALL';
var CPS = 'CPS';
var FORK = 'FORK';
var JOIN = 'JOIN';
var CANCEL = 'CANCEL';
var SELECT = 'SELECT';
var ACTION_CHANNEL = 'ACTION_CHANNEL';
var CANCELLED = 'CANCELLED';
var FLUSH = 'FLUSH';
var GET_CONTEXT = 'GET_CONTEXT';
var SET_CONTEXT = 'SET_CONTEXT';
var effectTypes = /*#__PURE__*/Object.freeze({
  __proto__: null,
  TAKE: TAKE,
  PUT: PUT,
  ALL: ALL,
  RACE: RACE,
  CALL: CALL,
  CPS: CPS,
  FORK: FORK,
  JOIN: JOIN,
  CANCEL: CANCEL,
  SELECT: SELECT,
  ACTION_CHANNEL: ACTION_CHANNEL,
  CANCELLED: CANCELLED,
  FLUSH: FLUSH,
  GET_CONTEXT: GET_CONTEXT,
  SET_CONTEXT: SET_CONTEXT
});
var TEST_HINT = '\n(HINT: if you are getting these errors in tests, consider using createMockTask from @redux-saga/testing-utils)';

var makeEffect = function makeEffect(type, payload) {
  var _ref;

  return _ref = {}, _ref[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__[/* IO */ "c"]] = true, _ref.combinator = false, _ref.type = type, _ref.payload = payload, _ref;
};

var isForkEffect = function isForkEffect(eff) {
  return Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__[/* effect */ "c"])(eff) && eff.type === FORK;
};

var detach = function detach(eff) {
  if (false) {}

  return makeEffect(FORK, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, eff.payload, {
    detached: true
  }));
};

function take(patternOrChannel, multicastPattern) {
  if (patternOrChannel === void 0) {
    patternOrChannel = '*';
  }

  if (false) {}

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__[/* pattern */ "i"])(patternOrChannel)) {
    return makeEffect(TAKE, {
      pattern: patternOrChannel
    });
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__[/* multicast */ "f"])(patternOrChannel) && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__[/* notUndef */ "g"])(multicastPattern) && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__[/* pattern */ "i"])(multicastPattern)) {
    return makeEffect(TAKE, {
      channel: patternOrChannel,
      pattern: multicastPattern
    });
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__[/* channel */ "b"])(patternOrChannel)) {
    return makeEffect(TAKE, {
      channel: patternOrChannel
    });
  }

  if (false) {}
}

var takeMaybe = function takeMaybe() {
  var eff = take.apply(void 0, arguments);
  eff.payload.maybe = true;
  return eff;
};

function put(channel$1, action) {
  if (false) {}

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__[/* undef */ "n"])(action)) {
    action = channel$1; // `undefined` instead of `null` to make default parameter work

    channel$1 = undefined;
  }

  return makeEffect(PUT, {
    channel: channel$1,
    action: action
  });
}

var putResolve = function putResolve() {
  var eff = put.apply(void 0, arguments);
  eff.payload.resolve = true;
  return eff;
};

function all(effects) {
  var eff = makeEffect(ALL, effects);
  eff.combinator = true;
  return eff;
}

function race(effects) {
  var eff = makeEffect(RACE, effects);
  eff.combinator = true;
  return eff;
} // this match getFnCallDescriptor logic


var validateFnDescriptor = function validateFnDescriptor(effectName, fnDescriptor) {
  check(fnDescriptor, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__[/* notUndef */ "g"], effectName + ": argument fn is undefined or null");

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__[/* func */ "d"])(fnDescriptor)) {
    return;
  }

  var context = null;
  var fn;

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__[/* array */ "a"])(fnDescriptor)) {
    context = fnDescriptor[0];
    fn = fnDescriptor[1];
    check(fn, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__[/* notUndef */ "g"], effectName + ": argument of type [context, fn] has undefined or null `fn`");
  } else if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__[/* object */ "h"])(fnDescriptor)) {
    context = fnDescriptor.context;
    fn = fnDescriptor.fn;
    check(fn, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__[/* notUndef */ "g"], effectName + ": argument of type {context, fn} has undefined or null `fn`");
  } else {
    check(fnDescriptor, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__[/* func */ "d"], effectName + ": argument fn is not function");
    return;
  }

  if (context && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__[/* string */ "k"])(fn)) {
    check(context[fn], _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__[/* func */ "d"], effectName + ": context arguments has no such method - \"" + fn + "\"");
    return;
  }

  check(fn, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__[/* func */ "d"], effectName + ": unpacked fn argument (from [context, fn] or {context, fn}) is not a function");
};

function getFnCallDescriptor(fnDescriptor, args) {
  var context = null;
  var fn;

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__[/* func */ "d"])(fnDescriptor)) {
    fn = fnDescriptor;
  } else {
    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__[/* array */ "a"])(fnDescriptor)) {
      context = fnDescriptor[0];
      fn = fnDescriptor[1];
    } else {
      context = fnDescriptor.context;
      fn = fnDescriptor.fn;
    }

    if (context && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__[/* string */ "k"])(fn) && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__[/* func */ "d"])(context[fn])) {
      fn = context[fn];
    }
  }

  return {
    context: context,
    fn: fn,
    args: args
  };
}

var isNotDelayEffect = function isNotDelayEffect(fn) {
  return fn !== delay;
};

function call(fnDescriptor) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (false) { var arg0; }

  return makeEffect(CALL, getFnCallDescriptor(fnDescriptor, args));
}

function apply(context, fn, args) {
  if (args === void 0) {
    args = [];
  }

  var fnDescriptor = [context, fn];

  if (false) {}

  return makeEffect(CALL, getFnCallDescriptor([context, fn], args));
}

function cps(fnDescriptor) {
  if (false) {}

  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return makeEffect(CPS, getFnCallDescriptor(fnDescriptor, args));
}

function fork(fnDescriptor) {
  if (false) {}

  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  return makeEffect(FORK, getFnCallDescriptor(fnDescriptor, args));
}

function spawn(fnDescriptor) {
  if (false) {}

  for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }

  return detach(fork.apply(void 0, [fnDescriptor].concat(args)));
}

function join(taskOrTasks) {
  if (false) {}

  return makeEffect(JOIN, taskOrTasks);
}

function cancel(taskOrTasks) {
  if (taskOrTasks === void 0) {
    taskOrTasks = _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__[/* SELF_CANCELLATION */ "h"];
  }

  if (false) {}

  return makeEffect(CANCEL, taskOrTasks);
}

function select(selector) {
  if (selector === void 0) {
    selector = identity;
  }

  for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    args[_key5 - 1] = arguments[_key5];
  }

  if (false) {}

  return makeEffect(SELECT, {
    selector: selector,
    args: args
  });
}
/**
  channel(pattern, [buffer])    => creates a proxy channel for store actions
**/


function actionChannel(pattern$1, buffer$1) {
  if (false) {}

  return makeEffect(ACTION_CHANNEL, {
    pattern: pattern$1,
    buffer: buffer$1
  });
}

function cancelled() {
  return makeEffect(CANCELLED, {});
}

function flush(channel$1) {
  if (false) {}

  return makeEffect(FLUSH, channel$1);
}

function getContext(prop) {
  if (false) {}

  return makeEffect(GET_CONTEXT, prop);
}

function setContext(props) {
  if (false) {}

  return makeEffect(SET_CONTEXT, props);
}

var delay = /*#__PURE__*/call.bind(null, _redux_saga_delay_p__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return array; });
/* unused harmony export buffer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return channel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return effect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return func; });
/* unused harmony export iterable */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return iterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return multicast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return notUndef; });
/* unused harmony export number */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return object; });
/* unused harmony export observable */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return pattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return promise; });
/* unused harmony export sagaAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return stringableFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return symbol; });
/* unused harmony export task */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return undef; });
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);


var undef = function undef(v) {
  return v === null || v === undefined;
};

var notUndef = function notUndef(v) {
  return v !== null && v !== undefined;
};

var func = function func(f) {
  return typeof f === 'function';
};

var number = function number(n) {
  return typeof n === 'number';
};

var string = function string(s) {
  return typeof s === 'string';
};

var array = Array.isArray;

var object = function object(obj) {
  return obj && !array(obj) && typeof obj === 'object';
};

var promise = function promise(p) {
  return p && func(p.then);
};

var iterator = function iterator(it) {
  return it && func(it.next) && func(it.throw);
};

var iterable = function iterable(it) {
  return it && func(Symbol) ? func(it[Symbol.iterator]) : array(it);
};

var task = function task(t) {
  return t && t[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__[/* TASK */ "i"]];
};

var sagaAction = function sagaAction(a) {
  return Boolean(a && a[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__[/* SAGA_ACTION */ "f"]]);
};

var observable = function observable(ob) {
  return ob && func(ob.subscribe);
};

var buffer = function buffer(buf) {
  return buf && func(buf.isEmpty) && func(buf.take) && func(buf.put);
};

var pattern = function pattern(pat) {
  return pat && (string(pat) || symbol(pat) || func(pat) || array(pat) && pat.every(pattern));
};

var channel = function channel(ch) {
  return ch && func(ch.take) && func(ch.close);
};

var stringableFunc = function stringableFunc(f) {
  return func(f) && f.hasOwnProperty('toString');
};

var symbol = function symbol(sym) {
  return Boolean(sym) && typeof Symbol === 'function' && sym.constructor === Symbol && sym !== Symbol.prototype;
};

var multicast = function multicast(ch) {
  return channel(ch) && ch[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__[/* MULTICAST */ "e"]];
};

var effect = function effect(eff) {
  return eff && eff[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__[/* IO */ "c"]];
};



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StatusTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ValueTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderTypes; });
var StatusTypes;(function(StatusTypes){StatusTypes["downloading"]="DOWNLOADING";StatusTypes["stopped"]="STOPPED";StatusTypes["completed"]="COMPLETED";StatusTypes["inQueued"]="IN_QUEUED";StatusTypes["error"]="ERROR";StatusTypes["unknow"]="UNKONW";})(StatusTypes||(StatusTypes={}));var ValueTypes;(function(ValueTypes){ValueTypes["items"]="ITEM_LIST";ValueTypes["autoStart"]="AUTO_START";ValueTypes["maxDownloadCount"]="MAX_DOWNLOAD_COUNT";})(ValueTypes||(ValueTypes={}));var HeaderTypes;(function(HeaderTypes){HeaderTypes["userAgent"]="netdisk;P2SP;2.2.60.26";})(HeaderTypes||(HeaderTypes={}));

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHANNEL_END_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return IO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MATCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MULTICAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SAGA_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SAGA_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SELF_CANCELLATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return TASK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return TASK_CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return TERMINATE; });
var createSymbol = function createSymbol(name) {
  return "@@redux-saga/" + name;
};

var CANCEL = /*#__PURE__*/createSymbol('CANCEL_PROMISE');
var CHANNEL_END_TYPE = /*#__PURE__*/createSymbol('CHANNEL_END');
var IO = /*#__PURE__*/createSymbol('IO');
var MATCH = /*#__PURE__*/createSymbol('MATCH');
var MULTICAST = /*#__PURE__*/createSymbol('MULTICAST');
var SAGA_ACTION = /*#__PURE__*/createSymbol('SAGA_ACTION');
var SELF_CANCELLATION = /*#__PURE__*/createSymbol('SELF_CANCELLATION');
var TASK = /*#__PURE__*/createSymbol('TASK');
var TASK_CANCEL = /*#__PURE__*/createSymbol('TASK_CANCEL');
var TERMINATE = /*#__PURE__*/createSymbol('TERMINATE');
var SAGA_LOCATION = /*#__PURE__*/createSymbol('LOCATION');


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

!function (n, t) {
   true ? t(exports) : undefined;
}(this, function (n) {
  "use strict";

  function t(n, t) {
    return void 0 === t && (t = 1), null == n;
  }

  function r(n) {
    throw void 0 === n && (n = 1), new Error("Argument " + n + " is empty.");
  }

  function e(n) {
    return "function" == typeof n && "getType" in n;
  }

  function i(n) {
    throw void 0 === n && (n = 1), new Error("Argument " + n + ' is invalid, it should be an action-creator instance from "typesafe-actions"');
  }

  function o(n, t) {
    if (null == n) throw new Error("Argument contains array with empty element at index " + t);
    if (null == n.getType) throw new Error("Argument contains array with invalid element at index " + t + ', it should be an action-creator instance from "typesafe-actions"');
  }

  function u(n) {
    return "string" == typeof n || "symbol" == typeof n;
  }

  function c(n) {
    return !u(n);
  }

  function a(n) {
    throw void 0 === n && (n = 1), new Error("Argument " + n + " is invalid, it should be an action type of type: string | symbol");
  }

  function f(n, t) {
    if (null == n) throw new Error("Argument contains array with empty element at index " + t);
    if ("string" != typeof n && "symbol" != typeof n) throw new Error("Argument contains array with invalid element at index " + t + ", it should be of type: string | symbol");
  }

  function s(n, e, o, u) {
    return t(n) && r(1), c(n) && i(1), {
      type: n,
      payload: e,
      meta: o,
      error: u
    };
  }

  function y(n, e) {
    t(n) && r(1), c(n) && a(1);
    var i = null != e ? e(n) : function () {
      return {
        type: n
      };
    };
    return Object.assign(i, {
      getType: function getType() {
        return n;
      },
      toString: function toString() {
        return n;
      }
    });
  }

  function p(n) {
    return t(n) && r(1), c(n) && a(1), Object.assign(function () {
      return y(n, function (n) {
        return function (t, r) {
          return {
            type: n,
            payload: t,
            meta: r
          };
        };
      });
    }, {
      map: function map(t) {
        return y(n, function (n) {
          return function (r, e) {
            return Object.assign(t(r, e), {
              type: n
            });
          };
        });
      }
    });
  }

  function l(n) {
    return t(n) && r(1), e(n) || i(1), n.getType();
  }

  n.action = s, n.createAction = function (n, t) {
    var r = null == t ? function () {
      return s(n);
    } : t(s.bind(null, n));
    return Object.assign(r, {
      getType: function getType() {
        return n;
      },
      toString: function toString() {
        return n;
      }
    });
  }, n.createActionDeprecated = function (n, t) {
    var r;

    if (null != t) {
      if ("function" != typeof t) throw new Error("second argument is not a function");
      r = t;
    } else r = function r() {
      return {
        type: n
      };
    };

    if (null == n) throw new Error("first argument is missing");
    if ("string" != typeof n && "symbol" != typeof n) throw new Error("first argument should be type of: string | symbol");
    return r;
  }, n.createAsyncAction = function (n, t, r, e) {
    return [n, t, r].forEach(f), Object.assign(function () {
      return {
        request: p(n)(),
        success: p(t)(),
        failure: p(r)(),
        cancel: e && p(e)()
      };
    }, {});
  }, n.createCustomAction = y, n.createReducer = function n(t, r) {
    void 0 === r && (r = {});
    var i = Object.assign({}, r);
    return Object.assign(function (n, r) {
      if (void 0 === n && (n = t), i.hasOwnProperty(r.type)) {
        var e = i[r.type];
        if ("function" != typeof e) throw Error('Reducer under "' + r.type + '" key is not a valid reducer');
        return e(n, r);
      }

      return n;
    }, {
      handlers: Object.assign({}, i),
      handleAction: function handleAction(r, o) {
        var c = Array.isArray(r) ? r : [r],
            a = {};
        return c.map(function (n) {
          return e(n) ? l(n) : u(n) ? n : function (n) {
            throw void 0 === n && (n = 1), new Error("Argument " + n + ' is invalid, it should be an action-creator instance from "typesafe-actions" or action type of type: string | symbol');
          }();
        }).forEach(function (n) {
          return a[n] = o;
        }), n(t, Object.assign({}, i, a));
      }
    });
  }, n.createStandardAction = p, n.getType = l, n.isActionOf = function (n, e) {
    t(n) && r(1);
    var i = Array.isArray(n) ? n : [n];
    i.forEach(o);

    var u = function u(n) {
      return i.some(function (t) {
        return n.type === t.getType();
      });
    };

    return void 0 === e ? u : u(e);
  }, n.isOfType = function (n, e) {
    t(n) && r(1);
    var i = Array.isArray(n) ? n : [n];
    i.forEach(f);

    var o = function o(n) {
      return i.includes(n.type);
    };

    return void 0 === e ? o : o(e);
  };
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__);
var actionCreator={change:Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('DOWNLOAD_CHANGE_REQUEST','DOWNLOAD_CHANGE_SUCCESS','DOWNLOAD_CHANGE_FAILURE','DOWNLOAD_CHANGE_CANCEL')(),updateItem:Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createStandardAction"])('DOWNLOAD_UPDATE_ITEM')(),reset:Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createStandardAction"])('DOWNLOAD_RESET')(),downloadURL:Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('DOWNLOAD_URL_REQUEST','DOWNLOAD_URL_SUCCESS','DOWNLOAD_URL_FAILURE','DOWNLOAD_URL_CANCEL')(),downloadItem:Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('DOWNLOAD_ITEM_REQUEST','DOWNLOAD_ITEM_SUCCESS','DOWNLOAD_ITEM_FAILURE','DOWNLOAD_ITEM_CANCEL')()};/* harmony default export */ __webpack_exports__["a"] = (actionCreator);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ io_6de156f3["v" /* _ */]; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ io_6de156f3["l" /* N */]; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ io_6de156f3["k" /* M */]; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ io_6de156f3["j" /* L */]; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ io_6de156f3["u" /* Y */]; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ io_6de156f3["x" /* a3 */]; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ io_6de156f3["i" /* K */]; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ takeEvery$1; });

// UNUSED EXPORTS: actionChannel, apply, cancelled, cps, delay, effectTypes, flush, getContext, join, putResolve, race, setContext, spawn, takeMaybe, debounce, retry, takeLatest, takeLeading, throttle

// EXTERNAL MODULE: ./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js
var redux_saga_symbols_esm = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js
var redux_saga_is_esm = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@redux-saga/core/dist/io-6de156f3.js
var io_6de156f3 = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js
var redux_saga_delay_p_esm = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js







var done = function done(value) {
  return {
    done: true,
    value: value
  };
};

var qEnd = {};

function safeName(patternOrChannel) {
  if (Object(redux_saga_is_esm["b" /* channel */])(patternOrChannel)) {
    return 'channel';
  }

  if (Object(redux_saga_is_esm["l" /* stringableFunc */])(patternOrChannel)) {
    return String(patternOrChannel);
  }

  if (Object(redux_saga_is_esm["d" /* func */])(patternOrChannel)) {
    return patternOrChannel.name;
  }

  return String(patternOrChannel);
}

function fsmIterator(fsm, startState, name) {
  var stateUpdater,
      errorState,
      effect,
      nextState = startState;

  function next(arg, error) {
    if (nextState === qEnd) {
      return done(arg);
    }

    if (error && !errorState) {
      nextState = qEnd;
      throw error;
    } else {
      stateUpdater && stateUpdater(arg);
      var currentState = error ? fsm[errorState](error) : fsm[nextState]();
      nextState = currentState.nextState;
      effect = currentState.effect;
      stateUpdater = currentState.stateUpdater;
      errorState = currentState.errorState;
      return nextState === qEnd ? done(arg) : effect;
    }
  }

  return Object(io_6de156f3["N" /* q */])(next, function (error) {
    return next(null, error);
  }, name);
}

function takeEvery(patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = {
    done: false,
    value: Object(io_6de156f3["i" /* K */])(patternOrChannel)
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: io_6de156f3["j" /* L */].apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var action,
      setAction = function setAction(ac) {
    return action = ac;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yTake,
        stateUpdater: setAction
      };
    },
    q2: function q2() {
      return {
        nextState: 'q1',
        effect: yFork(action)
      };
    }
  }, 'q1', "takeEvery(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

function takeLatest(patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = {
    done: false,
    value: Object(io_6de156f3["i" /* K */])(patternOrChannel)
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: io_6de156f3["j" /* L */].apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var yCancel = function yCancel(task) {
    return {
      done: false,
      value: Object(io_6de156f3["k" /* M */])(task)
    };
  };

  var task, action;

  var setTask = function setTask(t) {
    return task = t;
  };

  var setAction = function setAction(ac) {
    return action = ac;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yTake,
        stateUpdater: setAction
      };
    },
    q2: function q2() {
      return task ? {
        nextState: 'q3',
        effect: yCancel(task)
      } : {
        nextState: 'q1',
        effect: yFork(action),
        stateUpdater: setTask
      };
    },
    q3: function q3() {
      return {
        nextState: 'q1',
        effect: yFork(action),
        stateUpdater: setTask
      };
    }
  }, 'q1', "takeLatest(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

function takeLeading(patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = {
    done: false,
    value: Object(io_6de156f3["i" /* K */])(patternOrChannel)
  };

  var yCall = function yCall(ac) {
    return {
      done: false,
      value: io_6de156f3["l" /* N */].apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var action;

  var setAction = function setAction(ac) {
    return action = ac;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yTake,
        stateUpdater: setAction
      };
    },
    q2: function q2() {
      return {
        nextState: 'q1',
        effect: yCall(action)
      };
    }
  }, 'q1', "takeLeading(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

function throttle(delayLength, pattern, worker) {
  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var action, channel;
  var yActionChannel = {
    done: false,
    value: Object(io_6de156f3["m" /* O */])(pattern, Object(io_6de156f3["o" /* Q */])(1))
  };

  var yTake = function yTake() {
    return {
      done: false,
      value: Object(io_6de156f3["i" /* K */])(channel)
    };
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: io_6de156f3["j" /* L */].apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var yDelay = {
    done: false,
    value: Object(io_6de156f3["s" /* U */])(delayLength)
  };

  var setAction = function setAction(ac) {
    return action = ac;
  };

  var setChannel = function setChannel(ch) {
    return channel = ch;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yActionChannel,
        stateUpdater: setChannel
      };
    },
    q2: function q2() {
      return {
        nextState: 'q3',
        effect: yTake(),
        stateUpdater: setAction
      };
    },
    q3: function q3() {
      return {
        nextState: 'q4',
        effect: yFork(action)
      };
    },
    q4: function q4() {
      return {
        nextState: 'q2',
        effect: yDelay
      };
    }
  }, 'q1', "throttle(" + safeName(pattern) + ", " + worker.name + ")");
}

function retry(maxTries, delayLength, fn) {
  var counter = maxTries;

  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var yCall = {
    done: false,
    value: io_6de156f3["l" /* N */].apply(void 0, [fn].concat(args))
  };
  var yDelay = {
    done: false,
    value: Object(io_6de156f3["s" /* U */])(delayLength)
  };
  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yCall,
        errorState: 'q10'
      };
    },
    q2: function q2() {
      return {
        nextState: qEnd
      };
    },
    q10: function q10(error) {
      counter -= 1;

      if (counter <= 0) {
        throw error;
      }

      return {
        nextState: 'q1',
        effect: yDelay
      };
    }
  }, 'q1', "retry(" + fn.name + ")");
}

function debounceHelper(delayLength, patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var action, raceOutput;
  var yTake = {
    done: false,
    value: Object(io_6de156f3["i" /* K */])(patternOrChannel)
  };
  var yRace = {
    done: false,
    value: Object(io_6de156f3["t" /* V */])({
      action: Object(io_6de156f3["i" /* K */])(patternOrChannel),
      debounce: Object(io_6de156f3["s" /* U */])(delayLength)
    })
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: io_6de156f3["j" /* L */].apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var yNoop = function yNoop(value) {
    return {
      done: false,
      value: value
    };
  };

  var setAction = function setAction(ac) {
    return action = ac;
  };

  var setRaceOutput = function setRaceOutput(ro) {
    return raceOutput = ro;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yTake,
        stateUpdater: setAction
      };
    },
    q2: function q2() {
      return {
        nextState: 'q3',
        effect: yRace,
        stateUpdater: setRaceOutput
      };
    },
    q3: function q3() {
      return raceOutput.debounce ? {
        nextState: 'q1',
        effect: yFork(action)
      } : {
        nextState: 'q2',
        effect: yNoop(raceOutput.action),
        stateUpdater: setAction
      };
    }
  }, 'q1', "debounce(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

var redux_saga_effects_esm_validateTakeEffect = function validateTakeEffect(fn, patternOrChannel, worker) {
  Object(io_6de156f3["z" /* c */])(patternOrChannel, redux_saga_is_esm["g" /* notUndef */], fn.name + " requires a pattern or channel");
  Object(io_6de156f3["z" /* c */])(worker, redux_saga_is_esm["g" /* notUndef */], fn.name + " requires a saga parameter");
};

function takeEvery$1(patternOrChannel, worker) {
  if (false) {}

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return io_6de156f3["j" /* L */].apply(void 0, [takeEvery, patternOrChannel, worker].concat(args));
}

function takeLatest$1(patternOrChannel, worker) {
  if (false) {}

  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  return io_6de156f3["j" /* L */].apply(void 0, [takeLatest, patternOrChannel, worker].concat(args));
}

function takeLeading$1(patternOrChannel, worker) {
  if (false) {}

  for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    args[_key3 - 2] = arguments[_key3];
  }

  return io_6de156f3["j" /* L */].apply(void 0, [takeLeading, patternOrChannel, worker].concat(args));
}

function throttle$1(ms, pattern, worker) {
  if (false) {}

  for (var _len4 = arguments.length, args = new Array(_len4 > 3 ? _len4 - 3 : 0), _key4 = 3; _key4 < _len4; _key4++) {
    args[_key4 - 3] = arguments[_key4];
  }

  return io_6de156f3["j" /* L */].apply(void 0, [throttle, ms, pattern, worker].concat(args));
}

function retry$1(maxTries, delayLength, worker) {
  for (var _len5 = arguments.length, args = new Array(_len5 > 3 ? _len5 - 3 : 0), _key5 = 3; _key5 < _len5; _key5++) {
    args[_key5 - 3] = arguments[_key5];
  }

  return io_6de156f3["l" /* N */].apply(void 0, [retry, maxTries, delayLength, worker].concat(args));
}

function debounce(delayLength, pattern, worker) {
  for (var _len6 = arguments.length, args = new Array(_len6 > 3 ? _len6 - 3 : 0), _key6 = 3; _key6 < _len6; _key6++) {
    args[_key6 - 3] = arguments[_key6];
  }

  return io_6de156f3["j" /* L */].apply(void 0, [debounceHelper, delayLength, pattern, worker].concat(args));
}


// CONCATENATED MODULE: ./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(44);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ store_store; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ storeSelector; });

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js
var redux_saga_symbols_esm = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js
var redux_saga_is_esm = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@redux-saga/core/dist/io-6de156f3.js
var io_6de156f3 = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@redux-saga/deferred/dist/redux-saga-deferred.esm.js
function deferred() {
  var def = {};
  def.promise = new Promise(function (resolve, reject) {
    def.resolve = resolve;
    def.reject = reject;
  });
  return def;
}

function arrayOfDeferred(length) {
  var arr = [];

  for (var i = 0; i < length; i++) {
    arr.push(deferred());
  }

  return arr;
}

/* harmony default export */ var redux_saga_deferred_esm = (deferred);

// EXTERNAL MODULE: ./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js
var redux_saga_delay_p_esm = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/@redux-saga/core/dist/redux-saga-core.esm.js










var redux_saga_core_esm_queue = [];
/**
  Variable to hold a counting semaphore
  - Incrementing adds a lock and puts the scheduler in a `suspended` state (if it's not
    already suspended)
  - Decrementing releases a lock. Zero locks puts the scheduler in a `released` state. This
    triggers flushing the queued tasks.
**/

var semaphore = 0;
/**
  Executes a task 'atomically'. Tasks scheduled during this execution will be queued
  and flushed after this task has finished (assuming the scheduler endup in a released
  state).
**/

function exec(task) {
  try {
    suspend();
    task();
  } finally {
    release();
  }
}
/**
  Executes or queues a task depending on the state of the scheduler (`suspended` or `released`)
**/


function asap(task) {
  redux_saga_core_esm_queue.push(task);

  if (!semaphore) {
    suspend();
    redux_saga_core_esm_flush();
  }
}
/**
 * Puts the scheduler in a `suspended` state and executes a task immediately.
 */


function immediately(task) {
  try {
    suspend();
    return task();
  } finally {
    redux_saga_core_esm_flush();
  }
}
/**
  Puts the scheduler in a `suspended` state. Scheduled tasks will be queued until the
  scheduler is released.
**/


function suspend() {
  semaphore++;
}
/**
  Puts the scheduler in a `released` state.
**/


function release() {
  semaphore--;
}
/**
  Releases the current lock. Executes all queued tasks if the scheduler is in the released state.
**/


function redux_saga_core_esm_flush() {
  release();
  var task;

  while (!semaphore && (task = redux_saga_core_esm_queue.shift()) !== undefined) {
    exec(task);
  }
}

var array = function array(patterns) {
  return function (input) {
    return patterns.some(function (p) {
      return redux_saga_core_esm_matcher(p)(input);
    });
  };
};

var predicate = function predicate(_predicate) {
  return function (input) {
    return _predicate(input);
  };
};

var string = function string(pattern) {
  return function (input) {
    return input.type === String(pattern);
  };
};

var symbol = function symbol(pattern) {
  return function (input) {
    return input.type === pattern;
  };
};

var redux_saga_core_esm_wildcard = function wildcard() {
  return io_6de156f3["H" /* k */];
};

function redux_saga_core_esm_matcher(pattern) {
  // prettier-ignore
  var matcherCreator = pattern === '*' ? redux_saga_core_esm_wildcard : Object(redux_saga_is_esm["k" /* string */])(pattern) ? string : Object(redux_saga_is_esm["a" /* array */])(pattern) ? array : Object(redux_saga_is_esm["l" /* stringableFunc */])(pattern) ? string : Object(redux_saga_is_esm["d" /* func */])(pattern) ? predicate : Object(redux_saga_is_esm["m" /* symbol */])(pattern) ? symbol : null;

  if (matcherCreator === null) {
    throw new Error("invalid pattern: " + pattern);
  }

  return matcherCreator(pattern);
}

var END = {
  type: redux_saga_symbols_esm["b" /* CHANNEL_END_TYPE */]
};

var redux_saga_core_esm_isEnd = function isEnd(a) {
  return a && a.type === redux_saga_symbols_esm["b" /* CHANNEL_END_TYPE */];
};

var CLOSED_CHANNEL_WITH_TAKERS = 'Cannot have a closed channel with pending takers';
var INVALID_BUFFER = 'invalid buffer passed to channel factory function';
var UNDEFINED_INPUT_ERROR = "Saga or channel was provided with an undefined action\nHints:\n  - check that your Action Creator returns a non-undefined value\n  - if the Saga was started using runSaga, check that your subscribe source provides the action to its listeners";

function redux_saga_core_esm_channel(buffer$1) {
  if (buffer$1 === void 0) {
    buffer$1 = Object(io_6de156f3["B" /* e */])();
  }

  var closed = false;
  var takers = [];

  if (false) {}

  function checkForbiddenStates() {
    if (closed && takers.length) {
      throw Object(io_6de156f3["F" /* i */])(CLOSED_CHANNEL_WITH_TAKERS);
    }

    if (takers.length && !buffer$1.isEmpty()) {
      throw Object(io_6de156f3["F" /* i */])('Cannot have pending takers with non empty buffer');
    }
  }

  function put(input) {
    if (false) {}

    if (closed) {
      return;
    }

    if (takers.length === 0) {
      return buffer$1.put(input);
    }

    var cb = takers.shift();
    cb(input);
  }

  function take(cb) {
    if (false) {}

    if (closed && buffer$1.isEmpty()) {
      cb(END);
    } else if (!buffer$1.isEmpty()) {
      cb(buffer$1.take());
    } else {
      takers.push(cb);

      cb.cancel = function () {
        Object(io_6de156f3["O" /* r */])(takers, cb);
      };
    }
  }

  function flush(cb) {
    if (false) {}

    if (closed && buffer$1.isEmpty()) {
      cb(END);
      return;
    }

    cb(buffer$1.flush());
  }

  function close() {
    if (false) {}

    if (closed) {
      return;
    }

    closed = true;
    var arr = takers;
    takers = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      var taker = arr[i];
      taker(END);
    }
  }

  return {
    take: take,
    put: put,
    flush: flush,
    close: close
  };
}

function eventChannel(subscribe, buffer) {
  if (buffer === void 0) {
    buffer = Object(io_6de156f3["K" /* n */])();
  }

  var closed = false;
  var unsubscribe;
  var chan = redux_saga_core_esm_channel(buffer);

  var close = function close() {
    if (closed) {
      return;
    }

    closed = true;

    if (Object(redux_saga_is_esm["d" /* func */])(unsubscribe)) {
      unsubscribe();
    }

    chan.close();
  };

  unsubscribe = subscribe(function (input) {
    if (redux_saga_core_esm_isEnd(input)) {
      close();
      return;
    }

    chan.put(input);
  });

  if (false) {}

  unsubscribe = Object(io_6de156f3["L" /* o */])(unsubscribe);

  if (closed) {
    unsubscribe();
  }

  return {
    take: chan.take,
    flush: chan.flush,
    close: close
  };
}

function multicastChannel() {
  var _ref;

  var closed = false;
  var currentTakers = [];
  var nextTakers = currentTakers;

  function checkForbiddenStates() {
    if (closed && nextTakers.length) {
      throw Object(io_6de156f3["F" /* i */])(CLOSED_CHANNEL_WITH_TAKERS);
    }
  }

  var ensureCanMutateNextTakers = function ensureCanMutateNextTakers() {
    if (nextTakers !== currentTakers) {
      return;
    }

    nextTakers = currentTakers.slice();
  };

  var close = function close() {
    if (false) {}

    closed = true;
    var takers = currentTakers = nextTakers;
    nextTakers = [];
    takers.forEach(function (taker) {
      taker(END);
    });
  };

  return _ref = {}, _ref[redux_saga_symbols_esm["e" /* MULTICAST */]] = true, _ref.put = function put(input) {
    if (false) {}

    if (closed) {
      return;
    }

    if (redux_saga_core_esm_isEnd(input)) {
      close();
      return;
    }

    var takers = currentTakers = nextTakers;

    for (var i = 0, len = takers.length; i < len; i++) {
      var taker = takers[i];

      if (taker[redux_saga_symbols_esm["d" /* MATCH */]](input)) {
        taker.cancel();
        taker(input);
      }
    }
  }, _ref.take = function take(cb, matcher) {
    if (matcher === void 0) {
      matcher = redux_saga_core_esm_wildcard;
    }

    if (false) {}

    if (closed) {
      cb(END);
      return;
    }

    cb[redux_saga_symbols_esm["d" /* MATCH */]] = matcher;
    ensureCanMutateNextTakers();
    nextTakers.push(cb);
    cb.cancel = Object(io_6de156f3["L" /* o */])(function () {
      ensureCanMutateNextTakers();
      Object(io_6de156f3["O" /* r */])(nextTakers, cb);
    });
  }, _ref.close = close, _ref;
}

function stdChannel() {
  var chan = multicastChannel();
  var put = chan.put;

  chan.put = function (input) {
    if (input[redux_saga_symbols_esm["f" /* SAGA_ACTION */]]) {
      put(input);
      return;
    }

    asap(function () {
      put(input);
    });
  };

  return chan;
}

var RUNNING = 0;
var CANCELLED = 1;
var ABORTED = 2;
var DONE = 3;

function resolvePromise(promise, cb) {
  var cancelPromise = promise[redux_saga_symbols_esm["a" /* CANCEL */]];

  if (Object(redux_saga_is_esm["d" /* func */])(cancelPromise)) {
    cb.cancel = cancelPromise;
  }

  promise.then(cb, function (error) {
    cb(error, true);
  });
}

var current = 0;

var nextSagaId = function nextSagaId() {
  return ++current;
};

var _effectRunnerMap;

function getIteratorMetaInfo(iterator, fn) {
  if (iterator.isSagaIterator) {
    return {
      name: iterator.meta.name
    };
  }

  return Object(io_6de156f3["G" /* j */])(fn);
}

function createTaskIterator(_ref) {
  var context = _ref.context,
      fn = _ref.fn,
      args = _ref.args; // catch synchronous failures; see #152 and #441

  try {
    var result = fn.apply(context, args); // i.e. a generator function returns an iterator

    if (Object(redux_saga_is_esm["e" /* iterator */])(result)) {
      return result;
    }

    var resolved = false;

    var next = function next(arg) {
      if (!resolved) {
        resolved = true; // Only promises returned from fork will be interpreted. See #1573

        return {
          value: result,
          done: !Object(redux_saga_is_esm["j" /* promise */])(result)
        };
      } else {
        return {
          value: arg,
          done: true
        };
      }
    };

    return Object(io_6de156f3["N" /* q */])(next);
  } catch (err) {
    // do not bubble up synchronous failures for detached forks
    // instead create a failed task. See #152 and #441
    return Object(io_6de156f3["N" /* q */])(function () {
      throw err;
    });
  }
}

function runPutEffect(env, _ref2, cb) {
  var channel = _ref2.channel,
      action = _ref2.action,
      resolve = _ref2.resolve;
  /**
   Schedule the put in case another saga is holding a lock.
   The put will be executed atomically. ie nested puts will execute after
   this put has terminated.
   **/

  asap(function () {
    var result;

    try {
      result = (channel ? channel.put : env.dispatch)(action);
    } catch (error) {
      cb(error, true);
      return;
    }

    if (resolve && Object(redux_saga_is_esm["j" /* promise */])(result)) {
      resolvePromise(result, cb);
    } else {
      cb(result);
    }
  }); // Put effects are non cancellables
}

function runTakeEffect(env, _ref3, cb) {
  var _ref3$channel = _ref3.channel,
      channel = _ref3$channel === void 0 ? env.channel : _ref3$channel,
      pattern = _ref3.pattern,
      maybe = _ref3.maybe;

  var takeCb = function takeCb(input) {
    if (input instanceof Error) {
      cb(input, true);
      return;
    }

    if (redux_saga_core_esm_isEnd(input) && !maybe) {
      cb(redux_saga_symbols_esm["k" /* TERMINATE */]);
      return;
    }

    cb(input);
  };

  try {
    channel.take(takeCb, Object(redux_saga_is_esm["g" /* notUndef */])(pattern) ? redux_saga_core_esm_matcher(pattern) : null);
  } catch (err) {
    cb(err, true);
    return;
  }

  cb.cancel = takeCb.cancel;
}

function runCallEffect(env, _ref4, cb, _ref5) {
  var context = _ref4.context,
      fn = _ref4.fn,
      args = _ref4.args;
  var task = _ref5.task; // catch synchronous failures; see #152

  try {
    var result = fn.apply(context, args);

    if (Object(redux_saga_is_esm["j" /* promise */])(result)) {
      resolvePromise(result, cb);
      return;
    }

    if (Object(redux_saga_is_esm["e" /* iterator */])(result)) {
      // resolve iterator
      proc(env, result, task.context, current, Object(io_6de156f3["G" /* j */])(fn),
      /* isRoot */
      false, cb);
      return;
    }

    cb(result);
  } catch (error) {
    cb(error, true);
  }
}

function runCPSEffect(env, _ref6, cb) {
  var context = _ref6.context,
      fn = _ref6.fn,
      args = _ref6.args; // CPS (ie node style functions) can define their own cancellation logic
  // by setting cancel field on the cb
  // catch synchronous failures; see #152

  try {
    var cpsCb = function cpsCb(err, res) {
      if (Object(redux_saga_is_esm["n" /* undef */])(err)) {
        cb(res);
      } else {
        cb(err, true);
      }
    };

    fn.apply(context, args.concat(cpsCb));

    if (cpsCb.cancel) {
      cb.cancel = cpsCb.cancel;
    }
  } catch (error) {
    cb(error, true);
  }
}

function runForkEffect(env, _ref7, cb, _ref8) {
  var context = _ref7.context,
      fn = _ref7.fn,
      args = _ref7.args,
      detached = _ref7.detached;
  var parent = _ref8.task;
  var taskIterator = createTaskIterator({
    context: context,
    fn: fn,
    args: args
  });
  var meta = getIteratorMetaInfo(taskIterator, fn);
  immediately(function () {
    var child = proc(env, taskIterator, parent.context, current, meta, detached, undefined);

    if (detached) {
      cb(child);
    } else {
      if (child.isRunning()) {
        parent.queue.addTask(child);
        cb(child);
      } else if (child.isAborted()) {
        parent.queue.abort(child.error());
      } else {
        cb(child);
      }
    }
  }); // Fork effects are non cancellables
}

function runJoinEffect(env, taskOrTasks, cb, _ref9) {
  var task = _ref9.task;

  var joinSingleTask = function joinSingleTask(taskToJoin, cb) {
    if (taskToJoin.isRunning()) {
      var joiner = {
        task: task,
        cb: cb
      };

      cb.cancel = function () {
        if (taskToJoin.isRunning()) Object(io_6de156f3["O" /* r */])(taskToJoin.joiners, joiner);
      };

      taskToJoin.joiners.push(joiner);
    } else {
      if (taskToJoin.isAborted()) {
        cb(taskToJoin.error(), true);
      } else {
        cb(taskToJoin.result());
      }
    }
  };

  if (Object(redux_saga_is_esm["a" /* array */])(taskOrTasks)) {
    if (taskOrTasks.length === 0) {
      cb([]);
      return;
    }

    var childCallbacks = Object(io_6de156f3["I" /* l */])(taskOrTasks, cb);
    taskOrTasks.forEach(function (t, i) {
      joinSingleTask(t, childCallbacks[i]);
    });
  } else {
    joinSingleTask(taskOrTasks, cb);
  }
}

function cancelSingleTask(taskToCancel) {
  if (taskToCancel.isRunning()) {
    taskToCancel.cancel();
  }
}

function runCancelEffect(env, taskOrTasks, cb, _ref10) {
  var task = _ref10.task;

  if (taskOrTasks === redux_saga_symbols_esm["h" /* SELF_CANCELLATION */]) {
    cancelSingleTask(task);
  } else if (Object(redux_saga_is_esm["a" /* array */])(taskOrTasks)) {
    taskOrTasks.forEach(cancelSingleTask);
  } else {
    cancelSingleTask(taskOrTasks);
  }

  cb(); // cancel effects are non cancellables
}

function runAllEffect(env, effects, cb, _ref11) {
  var digestEffect = _ref11.digestEffect;
  var effectId = current;
  var keys = Object.keys(effects);

  if (keys.length === 0) {
    cb(Object(redux_saga_is_esm["a" /* array */])(effects) ? [] : {});
    return;
  }

  var childCallbacks = Object(io_6de156f3["I" /* l */])(effects, cb);
  keys.forEach(function (key) {
    digestEffect(effects[key], effectId, childCallbacks[key], key);
  });
}

function runRaceEffect(env, effects, cb, _ref12) {
  var digestEffect = _ref12.digestEffect;
  var effectId = current;
  var keys = Object.keys(effects);
  var response = Object(redux_saga_is_esm["a" /* array */])(effects) ? Object(io_6de156f3["J" /* m */])(keys.length) : {};
  var childCbs = {};
  var completed = false;
  keys.forEach(function (key) {
    var chCbAtKey = function chCbAtKey(res, isErr) {
      if (completed) {
        return;
      }

      if (isErr || Object(io_6de156f3["P" /* s */])(res)) {
        // Race Auto cancellation
        cb.cancel();
        cb(res, isErr);
      } else {
        cb.cancel();
        completed = true;
        response[key] = res;
        cb(response);
      }
    };

    chCbAtKey.cancel = io_6de156f3["Q" /* t */];
    childCbs[key] = chCbAtKey;
  });

  cb.cancel = function () {
    // prevents unnecessary cancellation
    if (!completed) {
      completed = true;
      keys.forEach(function (key) {
        return childCbs[key].cancel();
      });
    }
  };

  keys.forEach(function (key) {
    if (completed) {
      return;
    }

    digestEffect(effects[key], effectId, childCbs[key], key);
  });
}

function runSelectEffect(env, _ref13, cb) {
  var selector = _ref13.selector,
      args = _ref13.args;

  try {
    var state = selector.apply(void 0, [env.getState()].concat(args));
    cb(state);
  } catch (error) {
    cb(error, true);
  }
}

function runChannelEffect(env, _ref14, cb) {
  var pattern = _ref14.pattern,
      buffer = _ref14.buffer;
  var chan = redux_saga_core_esm_channel(buffer);
  var match = redux_saga_core_esm_matcher(pattern);

  var taker = function taker(action) {
    if (!redux_saga_core_esm_isEnd(action)) {
      env.channel.take(taker, match);
    }

    chan.put(action);
  };

  var close = chan.close;

  chan.close = function () {
    taker.cancel();
    close();
  };

  env.channel.take(taker, match);
  cb(chan);
}

function runCancelledEffect(env, data, cb, _ref15) {
  var task = _ref15.task;
  cb(task.isCancelled());
}

function runFlushEffect(env, channel, cb) {
  channel.flush(cb);
}

function runGetContextEffect(env, prop, cb, _ref16) {
  var task = _ref16.task;
  cb(task.context[prop]);
}

function runSetContextEffect(env, props, cb, _ref17) {
  var task = _ref17.task;
  Object(io_6de156f3["M" /* p */])(task.context, props);
  cb();
}

var effectRunnerMap = (_effectRunnerMap = {}, _effectRunnerMap[io_6de156f3["r" /* T */]] = runTakeEffect, _effectRunnerMap[io_6de156f3["n" /* P */]] = runPutEffect, _effectRunnerMap[io_6de156f3["a" /* A */]] = runAllEffect, _effectRunnerMap[io_6de156f3["p" /* R */]] = runRaceEffect, _effectRunnerMap[io_6de156f3["c" /* C */]] = runCallEffect, _effectRunnerMap[io_6de156f3["w" /* a */]] = runCPSEffect, _effectRunnerMap[io_6de156f3["f" /* F */]] = runForkEffect, _effectRunnerMap[io_6de156f3["h" /* J */]] = runJoinEffect, _effectRunnerMap[io_6de156f3["y" /* b */]] = runCancelEffect, _effectRunnerMap[io_6de156f3["q" /* S */]] = runSelectEffect, _effectRunnerMap[io_6de156f3["A" /* d */]] = runChannelEffect, _effectRunnerMap[io_6de156f3["C" /* f */]] = runCancelledEffect, _effectRunnerMap[io_6de156f3["D" /* g */]] = runFlushEffect, _effectRunnerMap[io_6de156f3["g" /* G */]] = runGetContextEffect, _effectRunnerMap[io_6de156f3["E" /* h */]] = runSetContextEffect, _effectRunnerMap);
/**
 Used to track a parent task and its forks
 In the fork model, forked tasks are attached by default to their parent
 We model this using the concept of Parent task && main Task
 main task is the main flow of the current Generator, the parent tasks is the
 aggregation of the main tasks + all its forked tasks.
 Thus the whole model represents an execution tree with multiple branches (vs the
 linear execution tree in sequential (non parallel) programming)

 A parent tasks has the following semantics
 - It completes if all its forks either complete or all cancelled
 - If it's cancelled, all forks are cancelled as well
 - It aborts if any uncaught error bubbles up from forks
 - If it completes, the return value is the one returned by the main task
 **/

function forkQueue(mainTask, onAbort, cont) {
  var tasks = [];
  var result;
  var completed = false;
  addTask(mainTask);

  var getTasks = function getTasks() {
    return tasks;
  };

  function abort(err) {
    onAbort();
    cancelAll();
    cont(err, true);
  }

  function addTask(task) {
    tasks.push(task);

    task.cont = function (res, isErr) {
      if (completed) {
        return;
      }

      Object(io_6de156f3["O" /* r */])(tasks, task);
      task.cont = io_6de156f3["Q" /* t */];

      if (isErr) {
        abort(res);
      } else {
        if (task === mainTask) {
          result = res;
        }

        if (!tasks.length) {
          completed = true;
          cont(result);
        }
      }
    };
  }

  function cancelAll() {
    if (completed) {
      return;
    }

    completed = true;
    tasks.forEach(function (t) {
      t.cont = io_6de156f3["Q" /* t */];
      t.cancel();
    });
    tasks = [];
  }

  return {
    addTask: addTask,
    cancelAll: cancelAll,
    abort: abort,
    getTasks: getTasks
  };
} // there can be only a single saga error created at any given moment


function formatLocation(fileName, lineNumber) {
  return fileName + "?" + lineNumber;
}

function effectLocationAsString(effect) {
  var location = Object(io_6de156f3["S" /* v */])(effect);

  if (location) {
    var code = location.code,
        fileName = location.fileName,
        lineNumber = location.lineNumber;
    var source = code + "  " + formatLocation(fileName, lineNumber);
    return source;
  }

  return '';
}

function sagaLocationAsString(sagaMeta) {
  var name = sagaMeta.name,
      location = sagaMeta.location;

  if (location) {
    return name + "  " + formatLocation(location.fileName, location.lineNumber);
  }

  return name;
}

function cancelledTasksAsString(sagaStack) {
  var cancelledTasks = Object(io_6de156f3["R" /* u */])(function (i) {
    return i.cancelledTasks;
  }, sagaStack);

  if (!cancelledTasks.length) {
    return '';
  }

  return ['Tasks cancelled due to error:'].concat(cancelledTasks).join('\n');
}

var crashedEffect = null;
var redux_saga_core_esm_sagaStack = [];

var addSagaFrame = function addSagaFrame(frame) {
  frame.crashedEffect = crashedEffect;
  redux_saga_core_esm_sagaStack.push(frame);
};

var clear = function clear() {
  crashedEffect = null;
  redux_saga_core_esm_sagaStack.length = 0;
}; // this sets crashed effect for the soon-to-be-reported saga frame
// this slightly streatches the singleton nature of this module into wrong direction
// as it's even less obvious what's the data flow here, but it is what it is for now


var setCrashedEffect = function setCrashedEffect(effect) {
  crashedEffect = effect;
};
/**
  @returns {string}

  @example
  The above error occurred in task errorInPutSaga {pathToFile}
  when executing effect put({type: 'REDUCER_ACTION_ERROR_IN_PUT'}) {pathToFile}
      created by fetchSaga {pathToFile}
      created by rootSaga {pathToFile}
*/


var redux_saga_core_esm_toString = function toString() {
  var firstSaga = redux_saga_core_esm_sagaStack[0],
      otherSagas = redux_saga_core_esm_sagaStack.slice(1);
  var crashedEffectLocation = firstSaga.crashedEffect ? effectLocationAsString(firstSaga.crashedEffect) : null;
  var errorMessage = "The above error occurred in task " + sagaLocationAsString(firstSaga.meta) + (crashedEffectLocation ? " \n when executing effect " + crashedEffectLocation : '');
  return [errorMessage].concat(otherSagas.map(function (s) {
    return "    created by " + sagaLocationAsString(s.meta);
  }), [cancelledTasksAsString(redux_saga_core_esm_sagaStack)]).join('\n');
};

function newTask(env, mainTask, parentContext, parentEffectId, meta, isRoot, cont) {
  var _task;

  if (cont === void 0) {
    cont = io_6de156f3["Q" /* t */];
  }

  var status = RUNNING;
  var taskResult;
  var taskError;
  var deferredEnd = null;
  var cancelledDueToErrorTasks = [];
  var context = Object.create(parentContext);
  var queue = forkQueue(mainTask, function onAbort() {
    cancelledDueToErrorTasks.push.apply(cancelledDueToErrorTasks, queue.getTasks().map(function (t) {
      return t.meta.name;
    }));
  }, end);
  /**
   This may be called by a parent generator to trigger/propagate cancellation
   cancel all pending tasks (including the main task), then end the current task.
    Cancellation propagates down to the whole execution tree held by this Parent task
   It's also propagated to all joiners of this task and their execution tree/joiners
    Cancellation is noop for terminated/Cancelled tasks tasks
   **/

  function cancel() {
    if (status === RUNNING) {
      // Setting status to CANCELLED does not necessarily mean that the task/iterators are stopped
      // effects in the iterator's finally block will still be executed
      status = CANCELLED;
      queue.cancelAll(); // Ending with a TASK_CANCEL will propagate the Cancellation to all joiners

      end(redux_saga_symbols_esm["j" /* TASK_CANCEL */], false);
    }
  }

  function end(result, isErr) {
    if (!isErr) {
      // The status here may be RUNNING or CANCELLED
      // If the status is CANCELLED, then we do not need to change it here
      if (result === redux_saga_symbols_esm["j" /* TASK_CANCEL */]) {
        status = CANCELLED;
      } else if (status !== CANCELLED) {
        status = DONE;
      }

      taskResult = result;
      deferredEnd && deferredEnd.resolve(result);
    } else {
      status = ABORTED;
      addSagaFrame({
        meta: meta,
        cancelledTasks: cancelledDueToErrorTasks
      });

      if (task.isRoot) {
        var sagaStack = redux_saga_core_esm_toString(); // we've dumped the saga stack to string and are passing it to user's code
        // we know that it won't be needed anymore and we need to clear it

        clear();
        env.onError(result, {
          sagaStack: sagaStack
        });
      }

      taskError = result;
      deferredEnd && deferredEnd.reject(result);
    }

    task.cont(result, isErr);
    task.joiners.forEach(function (joiner) {
      joiner.cb(result, isErr);
    });
    task.joiners = null;
  }

  function setContext(props) {
    if (false) {}

    Object(io_6de156f3["M" /* p */])(context, props);
  }

  function toPromise() {
    if (deferredEnd) {
      return deferredEnd.promise;
    }

    deferredEnd = redux_saga_deferred_esm();

    if (status === ABORTED) {
      deferredEnd.reject(taskError);
    } else if (status !== RUNNING) {
      deferredEnd.resolve(taskResult);
    }

    return deferredEnd.promise;
  }

  var task = (_task = {}, _task[redux_saga_symbols_esm["i" /* TASK */]] = true, _task.id = parentEffectId, _task.meta = meta, _task.isRoot = isRoot, _task.context = context, _task.joiners = [], _task.queue = queue, _task.cancel = cancel, _task.cont = cont, _task.end = end, _task.setContext = setContext, _task.toPromise = toPromise, _task.isRunning = function isRunning() {
    return status === RUNNING;
  }, _task.isCancelled = function isCancelled() {
    return status === CANCELLED || status === RUNNING && mainTask.status === CANCELLED;
  }, _task.isAborted = function isAborted() {
    return status === ABORTED;
  }, _task.result = function result() {
    return taskResult;
  }, _task.error = function error() {
    return taskError;
  }, _task);
  return task;
}

function proc(env, iterator$1, parentContext, parentEffectId, meta, isRoot, cont) {
  if (false) {}

  var finalRunEffect = env.finalizeRunEffect(runEffect);
  /**
    Tracks the current effect cancellation
    Each time the generator progresses. calling runEffect will set a new value
    on it. It allows propagating cancellation to child effects
  **/

  next.cancel = io_6de156f3["Q" /* t */];
  /** Creates a main task to track the main flow */

  var mainTask = {
    meta: meta,
    cancel: cancelMain,
    status: RUNNING
  };
  /**
   Creates a new task descriptor for this generator.
   A task is the aggregation of it's mainTask and all it's forked tasks.
   **/

  var task = newTask(env, mainTask, parentContext, parentEffectId, meta, isRoot, cont);
  var executingContext = {
    task: task,
    digestEffect: digestEffect
  };
  /**
    cancellation of the main task. We'll simply resume the Generator with a TASK_CANCEL
  **/

  function cancelMain() {
    if (mainTask.status === RUNNING) {
      mainTask.status = CANCELLED;
      next(redux_saga_symbols_esm["j" /* TASK_CANCEL */]);
    }
  }
  /**
    attaches cancellation logic to this task's continuation
    this will permit cancellation to propagate down the call chain
  **/


  if (cont) {
    cont.cancel = task.cancel;
  } // kicks up the generator


  next(); // then return the task descriptor to the caller

  return task;
  /**
   * This is the generator driver
   * It's a recursive async/continuation function which calls itself
   * until the generator terminates or throws
   * @param {internal commands(TASK_CANCEL | TERMINATE) | any} arg - value, generator will be resumed with.
   * @param {boolean} isErr - the flag shows if effect finished with an error
   *
   * receives either (command | effect result, false) or (any thrown thing, true)
   */

  function next(arg, isErr) {
    try {
      var result;

      if (isErr) {
        result = iterator$1.throw(arg); // user handled the error, we can clear bookkept values

        clear();
      } else if (Object(io_6de156f3["T" /* y */])(arg)) {
        /**
          getting TASK_CANCEL automatically cancels the main task
          We can get this value here
           - By cancelling the parent task manually
          - By joining a Cancelled task
        **/
        mainTask.status = CANCELLED;
        /**
          Cancels the current effect; this will propagate the cancellation down to any called tasks
        **/

        next.cancel();
        /**
          If this Generator has a `return` method then invokes it
          This will jump to the finally block
        **/

        result = Object(redux_saga_is_esm["d" /* func */])(iterator$1.return) ? iterator$1.return(redux_saga_symbols_esm["j" /* TASK_CANCEL */]) : {
          done: true,
          value: redux_saga_symbols_esm["j" /* TASK_CANCEL */]
        };
      } else if (Object(io_6de156f3["U" /* z */])(arg)) {
        // We get TERMINATE flag, i.e. by taking from a channel that ended using `take` (and not `takem` used to trap End of channels)
        result = Object(redux_saga_is_esm["d" /* func */])(iterator$1.return) ? iterator$1.return() : {
          done: true
        };
      } else {
        result = iterator$1.next(arg);
      }

      if (!result.done) {
        digestEffect(result.value, parentEffectId, next);
      } else {
        /**
          This Generator has ended, terminate the main task and notify the fork queue
        **/
        if (mainTask.status !== CANCELLED) {
          mainTask.status = DONE;
        }

        mainTask.cont(result.value);
      }
    } catch (error) {
      if (mainTask.status === CANCELLED) {
        throw error;
      }

      mainTask.status = ABORTED;
      mainTask.cont(error, true);
    }
  }

  function runEffect(effect, effectId, currCb) {
    /**
      each effect runner must attach its own logic of cancellation to the provided callback
      it allows this generator to propagate cancellation downward.
       ATTENTION! effect runners must setup the cancel logic by setting cb.cancel = [cancelMethod]
      And the setup must occur before calling the callback
       This is a sort of inversion of control: called async functions are responsible
      of completing the flow by calling the provided continuation; while caller functions
      are responsible for aborting the current flow by calling the attached cancel function
       Library users can attach their own cancellation logic to promises by defining a
      promise[CANCEL] method in their returned promises
      ATTENTION! calling cancel must have no effect on an already completed or cancelled effect
    **/
    if (Object(redux_saga_is_esm["j" /* promise */])(effect)) {
      resolvePromise(effect, currCb);
    } else if (Object(redux_saga_is_esm["e" /* iterator */])(effect)) {
      // resolve iterator
      proc(env, effect, task.context, effectId, meta,
      /* isRoot */
      false, currCb);
    } else if (effect && effect[redux_saga_symbols_esm["c" /* IO */]]) {
      var effectRunner = effectRunnerMap[effect.type];
      effectRunner(env, effect.payload, currCb, executingContext);
    } else {
      // anything else returned as is
      currCb(effect);
    }
  }

  function digestEffect(effect, parentEffectId, cb, label) {
    if (label === void 0) {
      label = '';
    }

    var effectId = nextSagaId();
    env.sagaMonitor && env.sagaMonitor.effectTriggered({
      effectId: effectId,
      parentEffectId: parentEffectId,
      label: label,
      effect: effect
    });
    /**
      completion callback and cancel callback are mutually exclusive
      We can't cancel an already completed effect
      And We can't complete an already cancelled effectId
    **/

    var effectSettled; // Completion callback passed to the appropriate effect runner

    function currCb(res, isErr) {
      if (effectSettled) {
        return;
      }

      effectSettled = true;
      cb.cancel = io_6de156f3["Q" /* t */]; // defensive measure

      if (env.sagaMonitor) {
        if (isErr) {
          env.sagaMonitor.effectRejected(effectId, res);
        } else {
          env.sagaMonitor.effectResolved(effectId, res);
        }
      }

      if (isErr) {
        setCrashedEffect(effect);
      }

      cb(res, isErr);
    } // tracks down the current cancel


    currCb.cancel = io_6de156f3["Q" /* t */]; // setup cancellation logic on the parent cb

    cb.cancel = function () {
      // prevents cancelling an already completed effect
      if (effectSettled) {
        return;
      }

      effectSettled = true;
      currCb.cancel(); // propagates cancel downward

      currCb.cancel = io_6de156f3["Q" /* t */]; // defensive measure

      env.sagaMonitor && env.sagaMonitor.effectCancelled(effectId);
    };

    finalRunEffect(effect, effectId, currCb);
  }
}

var RUN_SAGA_SIGNATURE = 'runSaga(options, saga, ...args)';
var NON_GENERATOR_ERR = RUN_SAGA_SIGNATURE + ": saga argument must be a Generator function!";

function runSaga(_ref, saga) {
  var _ref$channel = _ref.channel,
      channel = _ref$channel === void 0 ? stdChannel() : _ref$channel,
      dispatch = _ref.dispatch,
      getState = _ref.getState,
      _ref$context = _ref.context,
      context = _ref$context === void 0 ? {} : _ref$context,
      sagaMonitor = _ref.sagaMonitor,
      effectMiddlewares = _ref.effectMiddlewares,
      _ref$onError = _ref.onError,
      onError = _ref$onError === void 0 ? io_6de156f3["b" /* B */] : _ref$onError;

  if (false) {}

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var iterator$1 = saga.apply(void 0, args);

  if (false) {}

  var effectId = nextSagaId();

  if (sagaMonitor) {
    // monitors are expected to have a certain interface, let's fill-in any missing ones
    sagaMonitor.rootSagaStarted = sagaMonitor.rootSagaStarted || io_6de156f3["Q" /* t */];
    sagaMonitor.effectTriggered = sagaMonitor.effectTriggered || io_6de156f3["Q" /* t */];
    sagaMonitor.effectResolved = sagaMonitor.effectResolved || io_6de156f3["Q" /* t */];
    sagaMonitor.effectRejected = sagaMonitor.effectRejected || io_6de156f3["Q" /* t */];
    sagaMonitor.effectCancelled = sagaMonitor.effectCancelled || io_6de156f3["Q" /* t */];
    sagaMonitor.actionDispatched = sagaMonitor.actionDispatched || io_6de156f3["Q" /* t */];
    sagaMonitor.rootSagaStarted({
      effectId: effectId,
      saga: saga,
      args: args
    });
  }

  if (false) { var MIDDLEWARE_TYPE_ERROR; }

  var finalizeRunEffect;

  if (effectMiddlewares) {
    var middleware = redux["d" /* compose */].apply(void 0, effectMiddlewares);

    finalizeRunEffect = function finalizeRunEffect(runEffect) {
      return function (effect, effectId, currCb) {
        var plainRunEffect = function plainRunEffect(eff) {
          return runEffect(eff, effectId, currCb);
        };

        return middleware(plainRunEffect)(effect);
      };
    };
  } else {
    finalizeRunEffect = io_6de156f3["e" /* E */];
  }

  var env = {
    channel: channel,
    dispatch: Object(io_6de156f3["d" /* D */])(dispatch),
    getState: getState,
    sagaMonitor: sagaMonitor,
    onError: onError,
    finalizeRunEffect: finalizeRunEffect
  };
  return immediately(function () {
    var task = proc(env, iterator$1, context, effectId, Object(io_6de156f3["G" /* j */])(saga),
    /* isRoot */
    true, undefined);

    if (sagaMonitor) {
      sagaMonitor.effectResolved(effectId, task);
    }

    return task;
  });
}

function sagaMiddlewareFactory(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$context = _ref.context,
      context = _ref$context === void 0 ? {} : _ref$context,
      _ref$channel = _ref.channel,
      channel = _ref$channel === void 0 ? stdChannel() : _ref$channel,
      sagaMonitor = _ref.sagaMonitor,
      options = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["context", "channel", "sagaMonitor"]);

  var boundRunSaga;

  if (false) {}

  function sagaMiddleware(_ref2) {
    var getState = _ref2.getState,
        dispatch = _ref2.dispatch;
    boundRunSaga = runSaga.bind(null, Object(esm_extends["a" /* default */])({}, options, {
      context: context,
      channel: channel,
      dispatch: dispatch,
      getState: getState,
      sagaMonitor: sagaMonitor
    }));
    return function (next) {
      return function (action) {
        if (sagaMonitor && sagaMonitor.actionDispatched) {
          sagaMonitor.actionDispatched(action);
        }

        var result = next(action); // hit reducers

        channel.put(action);
        return result;
      };
    };
  }

  sagaMiddleware.run = function () {
    if (false) {}

    return boundRunSaga.apply(void 0, arguments);
  };

  sagaMiddleware.setContext = function (props) {
    if (false) {}

    Object(io_6de156f3["M" /* p */])(context, props);
  };

  return sagaMiddleware;
}

/* harmony default export */ var redux_saga_core_esm = (sagaMiddlewareFactory);

// CONCATENATED MODULE: ./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js


/* harmony default export */ var redux_saga_core_npm_proxy_esm = (redux_saga_core_esm);
// EXTERNAL MODULE: ./src/store/download/index.ts + 2 modules
var download = __webpack_require__(15);

// EXTERNAL MODULE: ./src/store/Interface/index.ts
var Interface = __webpack_require__(14);

// CONCATENATED MODULE: ./src/store/rootReducer.ts
var combineReducer=Object(redux["c" /* combineReducers */])({download:download["b" /* downloadReducer */],interface:Interface["b" /* interfaceReducer */]});function createReducer(){return combineReducer;}
// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(8);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 5 modules
var toConsumableArray = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js + 1 modules
var redux_saga_effects_npm_proxy_esm = __webpack_require__(7);

// EXTERNAL MODULE: ./src/utils/nodeEnvIs/devNodeEnv/index.ts + 1 modules
var devNodeEnv = __webpack_require__(29);

// EXTERNAL MODULE: ./src/store/download/saga.ts + 1 modules
var download_saga = __webpack_require__(26);

// CONCATENATED MODULE: ./src/store/rootSaga.ts
var _marked=/*#__PURE__*/regenerator_default.a.mark(rootSaga);function rootSaga(){return regenerator_default.a.wrap(function rootSaga$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return Object(redux_saga_effects_npm_proxy_esm["a" /* all */])(Object(toConsumableArray["a" /* default */])(download_saga["a" /* default */]));case 2:case"end":return _context.stop();}}},_marked);}var sagas=[rootSaga];var CANCEL_SAGAS_HMR='CANCEL_SAGAS_HMR';function createAbortableSaga(saga){if(devNodeEnv["a" /* default */]){return/*#__PURE__*/regenerator_default.a.mark(function main(){var sagaTask;return regenerator_default.a.wrap(function main$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return Object(redux_saga_effects_npm_proxy_esm["d" /* fork */])(saga);case 2:sagaTask=_context2.sent;_context2.next=5;return Object(redux_saga_effects_npm_proxy_esm["g" /* take */])(CANCEL_SAGAS_HMR);case 5:_context2.next=7;return Object(redux_saga_effects_npm_proxy_esm["c" /* cancel */])(sagaTask);case 7:case"end":return _context2.stop();}}},main);});}return saga;}var sagaManager={startSaga:function startSaga(sagaMiddleware){sagas.map(createAbortableSaga).forEach(function(saga){return sagaMiddleware.run(saga);});},cancelSaga:function cancelSaga(store){store.dispatch({type:CANCEL_SAGAS_HMR});}};
// CONCATENATED MODULE: ./src/store/configureStore.ts
function configureStore(){var sagaMiddleware=redux_saga_core_npm_proxy_esm();var middlewares=[sagaMiddleware];var enhancers=[redux["a" /* applyMiddleware */].apply(void 0,middlewares)];var composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:true,traceLimit:10}):redux["d" /* compose */];var rootReducer=createReducer();var store=Object(redux["e" /* createStore */])(rootReducer,composeEnhancers.apply(void 0,enhancers));store.runSaga=sagaMiddleware.run;store.startAbortableSaga=function(){return sagaManager.startSaga(sagaMiddleware);};store.close=function(){return store.dispatch(END);};if(false){}sagaManager.startSaga(sagaMiddleware);return store;}
// CONCATENATED MODULE: ./src/store/index.ts
var store_store=configureStore();var storeSelector=function storeSelector(store){return store;};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ components_Provider; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ connect_connect; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ shallowEqual; });

// UNUSED EXPORTS: connectAdvanced, ReactReduxContext, batch, useDispatch, createDispatchHook, useSelector, createSelectorHook, useStore, createStoreHook

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(51);

// CONCATENATED MODULE: ./node_modules/react-redux/es/components/Context.js

var ReactReduxContext = /*#__PURE__*/react_default.a.createContext(null);

if (false) {}

/* harmony default export */ var components_Context = (ReactReduxContext);
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/batch.js
// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

var batch_batch = defaultNoopBatch; // Allow injecting another batching function later

var setBatch = function setBatch(newBatch) {
  return batch_batch = newBatch;
}; // Supply a getter just to skip dealing with ESM bindings

var getBatch = function getBatch() {
  return batch_batch;
};
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/Subscription.js
 // encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  var batch = getBatch();
  var first = null;
  var last = null;
  return {
    clear: function clear() {
      first = null;
      last = null;
    },
    notify: function notify() {
      batch(function () {
        var listener = first;

        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get: function get() {
      var listeners = [];
      var listener = first;

      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }

      return listeners;
    },
    subscribe: function subscribe(callback) {
      var isSubscribed = true;
      var listener = last = {
        callback: callback,
        next: null,
        prev: last
      };

      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }

      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;

        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }

        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}

var Subscription = /*#__PURE__*/function () {
  function Subscription(store, parentSub) {
    this.store = store;
    this.parentSub = parentSub;
    this.unsubscribe = null;
    this.listeners = nullListeners;
    this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
  }

  var _proto = Subscription.prototype;

  _proto.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  _proto.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  _proto.handleChangeWrapper = function handleChangeWrapper() {
    if (this.onStateChange) {
      this.onStateChange();
    }
  };

  _proto.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  _proto.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper);
      this.listeners = createListenerCollection();
    }
  };

  _proto.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();


// CONCATENATED MODULE: ./node_modules/react-redux/es/components/Provider.js





function Provider(_ref) {
  var store = _ref.store,
      context = _ref.context,
      children = _ref.children;
  var contextValue = Object(react["useMemo"])(function () {
    var subscription = new Subscription(store);
    subscription.onStateChange = subscription.notifyNestedSubs;
    return {
      store: store,
      subscription: subscription
    };
  }, [store]);
  var previousState = Object(react["useMemo"])(function () {
    return store.getState();
  }, [store]);
  Object(react["useEffect"])(function () {
    var subscription = contextValue.subscription;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return function () {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || ReactReduxContext;
  return react_default.a.createElement(Context.Provider, {
    value: contextValue
  }, children);
}

if (false) {}

/* harmony default export */ var components_Provider = (Provider);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(22);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);

// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is = __webpack_require__(21);

// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js
 // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react["useLayoutEffect"] : react["useEffect"];
// CONCATENATED MODULE: ./node_modules/react-redux/es/components/connectAdvanced.js







 // Define some constant arrays just to avoid re-creating these

var EMPTY_ARRAY = [];
var NO_SUBSCRIPTION_ARRAY = [null, null];

var stringifyComponent = function stringifyComponent(Comp) {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

function storeStateUpdatesReducer(state, action) {
  var updateCount = state[1];
  return [action.payload, updateCount + 1];
}

function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  useIsomorphicLayoutEffect(function () {
    return effectFunc.apply(void 0, effectArgs);
  }, dependencies);
}

function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs) {
  // We want to capture the wrapper props and child props we used for later comparisons
  lastWrapperProps.current = wrapperProps;
  lastChildProps.current = actualChildProps;
  renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
}

function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch) {
  // If we're not subscribed to the store, nothing to do here
  if (!shouldHandleStateChanges) return; // Capture values for checking if and when this component unmounts

  var didUnsubscribe = false;
  var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

  var checkForUpdates = function checkForUpdates() {
    if (didUnsubscribe) {
      // Don't run stale listeners.
      // Redux doesn't guarantee unsubscriptions happen until next dispatch.
      return;
    }

    var latestStoreState = store.getState();
    var newChildProps, error;

    try {
      // Actually run the selector with the most recent store state and wrapper props
      // to determine what the child props should be
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e) {
      error = e;
      lastThrownError = e;
    }

    if (!error) {
      lastThrownError = null;
    } // If the child props haven't changed, nothing to do here - cascade the subscription update


    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      // Save references to the new child props.  Note that we track the "child props from store update"
      // as a ref instead of a useState/useReducer because we need a way to determine if that value has
      // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
      // forcing another re-render, which we don't want.
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true; // If the child props _did_ change (or we caught an error), this wrapper component needs to re-render

      forceComponentUpdateDispatch({
        type: 'STORE_UPDATED',
        payload: {
          error: error
        }
      });
    }
  }; // Actually subscribe to the nearest connected ancestor (or store)


  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe(); // Pull data from the store after first render in case the store has
  // changed since we began.

  checkForUpdates();

  var unsubscribeWrapper = function unsubscribeWrapper() {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;

    if (lastThrownError) {
      // It's possible that we caught an error due to a bad mapState function, but the
      // parent re-rendered without this component and we're about to unmount.
      // This shouldn't happen as long as we do top-down subscriptions correctly, but
      // if we ever do those wrong, this throw will surface the error in our tests.
      // In that case, throw the error from here so it doesn't get lost.
      throw lastThrownError;
    }
  };

  return unsubscribeWrapper;
}

var initStateUpdates = function initStateUpdates() {
  return [null, 0];
};

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
      export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
    Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
    Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      _ref2$forwardRef = _ref2.forwardRef,
      forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,
      _ref2$context = _ref2.context,
      context = _ref2$context === void 0 ? ReactReduxContext : _ref2$context,
      connectOptions = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);

  if (false) { var customStoreWarningMessage; }

  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    if (false) {}

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = Object(esm_extends["a" /* default */])({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var pure = connectOptions.pure;

    function createChildSelector(store) {
      return selectorFactory(store.dispatch, selectorFactoryOptions);
    } // If we aren't running in "pure" mode, we don't want to memoize values.
    // To avoid conditionally calling hooks, we fall back to a tiny wrapper
    // that just executes the given callback immediately.


    var usePureOnlyMemo = pure ? react["useMemo"] : function (callback) {
      return callback();
    };

    function ConnectFunction(props) {
      var _useMemo = Object(react["useMemo"])(function () {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        var forwardedRef = props.forwardedRef,
            wrapperProps = Object(objectWithoutPropertiesLoose["a" /* default */])(props, ["forwardedRef"]);

        return [props.context, forwardedRef, wrapperProps];
      }, [props]),
          propsContext = _useMemo[0],
          forwardedRef = _useMemo[1],
          wrapperProps = _useMemo[2];

      var ContextToUse = Object(react["useMemo"])(function () {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && Object(react_is["isContextConsumer"])(react_default.a.createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      var contextValue = Object(react["useContext"])(ContextToUse); // The store _must_ exist as either a prop or in context.
      // We'll check to see if it _looks_ like a Redux store first.
      // This allows us to pass through a `store` prop that is just a plain value.

      var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);

      if (false) {} // Based on the previous check, one of these must be true


      var store = didStoreComeFromProps ? props.store : contextValue.store;
      var childPropsSelector = Object(react["useMemo"])(function () {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return createChildSelector(store);
      }, [store]);

      var _useMemo2 = Object(react["useMemo"])(function () {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        var subscription = new Subscription(store, didStoreComeFromProps ? null : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        var notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]),
          subscription = _useMemo2[0],
          notifyNestedSubs = _useMemo2[1]; // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.


      var overriddenContextValue = Object(react["useMemo"])(function () {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return Object(esm_extends["a" /* default */])({}, contextValue, {
          subscription: subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // We need to force this wrapper component to re-render whenever a Redux store update
      // causes a change to the calculated child component props (or we caught an error in mapState)

      var _useReducer = Object(react["useReducer"])(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates),
          _useReducer$ = _useReducer[0],
          previousStateUpdateResult = _useReducer$[0],
          forceComponentUpdateDispatch = _useReducer[1]; // Propagate any mapState/mapDispatch errors upwards


      if (previousStateUpdateResult && previousStateUpdateResult.error) {
        throw previousStateUpdateResult.error;
      } // Set up refs to coordinate values between the subscription effect and the render logic


      var lastChildProps = Object(react["useRef"])();
      var lastWrapperProps = Object(react["useRef"])(wrapperProps);
      var childPropsFromStoreUpdate = Object(react["useRef"])();
      var renderIsScheduled = Object(react["useRef"])(false);
      var actualChildProps = usePureOnlyMemo(function () {
        // Tricky logic here:
        // - This render may have been triggered by a Redux store update that produced new child props
        // - However, we may have gotten new wrapper props after that
        // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
        // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
        // So, we'll use the child props from store update only if the wrapper props are the same as last time.
        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
          return childPropsFromStoreUpdate.current;
        } // TODO We're reading the store directly in render() here. Bad idea?
        // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
        // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
        // to determine what the child props should be.


        return childPropsSelector(store.getState(), wrapperProps);
      }, [store, previousStateUpdateResult, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs]); // Our re-subscribe logic only runs when the store/subscription setup changes

      useIsomorphicLayoutEffectWithArgs(subscribeUpdates, [shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch], [store, subscription, childPropsSelector]); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      var renderedWrappedComponent = Object(react["useMemo"])(function () {
        return react_default.a.createElement(WrappedComponent, Object(esm_extends["a" /* default */])({}, actualChildProps, {
          ref: forwardedRef
        }));
      }, [forwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      var renderedChild = Object(react["useMemo"])(function () {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return react_default.a.createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    } // If we're in "pure" mode, ensure our wrapper component only re-renders when incoming props have changed.


    var Connect = pure ? react_default.a.memo(ConnectFunction) : ConnectFunction;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;

    if (forwardRef) {
      var forwarded = react_default.a.forwardRef(function forwardConnectRef(props, ref) {
        return react_default.a.createElement(Connect, Object(esm_extends["a" /* default */])({}, props, {
          forwardedRef: ref
        }));
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoist_non_react_statics_cjs_default()(forwarded, WrappedComponent);
    }

    return hoist_non_react_statics_cjs_default()(Connect, WrappedComponent);
  };
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/shallowEqual.js
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(16);

// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/isPlainObject.js
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  var baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/warning.js
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/verifyPlainObject.js


function verifyPlainObject(value, displayName, methodName) {
  if (!isPlainObject(value)) {
    warning(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/wrapMapToProps.js

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (false) {}
      return props;
    };

    return proxy;
  };
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mapDispatchToProps.js


function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? wrapMapToPropsFunc(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? wrapMapToPropsConstant(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? wrapMapToPropsConstant(function (dispatch) {
    return Object(redux["b" /* bindActionCreators */])(mapDispatchToProps, dispatch);
  }) : undefined;
}
/* harmony default export */ var connect_mapDispatchToProps = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mapStateToProps.js

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(function () {
    return {};
  }) : undefined;
}
/* harmony default export */ var connect_mapStateToProps = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mergeProps.js


function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return Object(esm_extends["a" /* default */])({}, ownProps, {}, stateProps, {}, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (false) {}
      }

      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}
/* harmony default export */ var connect_mergeProps = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/verifySubselectors.js


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
      warning("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/selectorFactory.js


function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (false) {}

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/connect.js








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? connectAdvanced : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? connect_mapStateToProps : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? connect_mapDispatchToProps : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? connect_mergeProps : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? finalPropsSelectorFactory : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? shallowEqual : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? shallowEqual : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? shallowEqual : _ref3$areMergedPropsE,
        extraOptions = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, Object(esm_extends["a" /* default */])({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}
/* harmony default export */ var connect_connect = (/*#__PURE__*/createConnect());
// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useReduxContext.js


/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */

function useReduxContext_useReduxContext() {
  var contextValue = Object(react["useContext"])(ReactReduxContext);

  if (false) {}

  return contextValue;
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useStore.js



/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function createStoreHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }

  var useReduxContext = context === ReactReduxContext ? useReduxContext_useReduxContext : function () {
    return Object(react["useContext"])(context);
  };
  return function useStore() {
    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store;

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

var useStore_useStore = /*#__PURE__*/createStoreHook();
// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useDispatch.js


/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }

  var useStore = context === ReactReduxContext ? useStore_useStore : createStoreHook(context);
  return function useDispatch() {
    var store = useStore();
    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

var useDispatch = /*#__PURE__*/createDispatchHook();
// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useSelector.js






var refEquality = function refEquality(a, b) {
  return a === b;
};

function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
  var _useReducer = Object(react["useReducer"])(function (s) {
    return s + 1;
  }, 0),
      forceRender = _useReducer[1];

  var subscription = Object(react["useMemo"])(function () {
    return new Subscription(store, contextSub);
  }, [store, contextSub]);
  var latestSubscriptionCallbackError = Object(react["useRef"])();
  var latestSelector = Object(react["useRef"])();
  var latestSelectedState = Object(react["useRef"])();
  var selectedState;

  try {
    if (selector !== latestSelector.current || latestSubscriptionCallbackError.current) {
      selectedState = selector(store.getState());
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    if (latestSubscriptionCallbackError.current) {
      err.message += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\n";
    }

    throw err;
  }

  useIsomorphicLayoutEffect(function () {
    latestSelector.current = selector;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = undefined;
  });
  useIsomorphicLayoutEffect(function () {
    function checkForUpdates() {
      try {
        var newSelectedState = latestSelector.current(store.getState());

        if (equalityFn(newSelectedState, latestSelectedState.current)) {
          return;
        }

        latestSelectedState.current = newSelectedState;
      } catch (err) {
        // we ignore all errors here, since when the component
        // is re-rendered, the selectors are called again, and
        // will throw again, if neither props nor store state
        // changed
        latestSubscriptionCallbackError.current = err;
      }

      forceRender({});
    }

    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    return function () {
      return subscription.tryUnsubscribe();
    };
  }, [store, subscription]);
  return selectedState;
}
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }

  var useReduxContext = context === ReactReduxContext ? useReduxContext_useReduxContext : function () {
    return Object(react["useContext"])(context);
  };
  return function useSelector(selector, equalityFn) {
    if (equalityFn === void 0) {
      equalityFn = refEquality;
    }

    if (false) {}

    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store,
        contextSub = _useReduxContext.subscription;

    return useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

var useSelector = /*#__PURE__*/createSelectorHook();
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(24);

// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/reactBatchedUpdates.js
/* eslint-disable import/no-unresolved */

// CONCATENATED MODULE: ./node_modules/react-redux/es/index.js










setBatch(react_dom["unstable_batchedUpdates"]);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GM; });
/* eslint-disable @typescript-eslint/no-explicit-any,no-undef */ /**
 * This section describes how the Tampermonkey API can be used
 * Application Programming Interface
 * @link https://www.tampermonkey.net/documentation.php
 */var GM={/**
   * Adds the given style to the document and returns the injected style element.
   * @param css
   */addStyle:function addStyle(css){// @ts-ignore
GM_addStyle(css);},/**
   * Deletes 'name' from storage.
   * @param name
   * @constructor
   */deleteValue:function deleteValue(name){// @ts-ignore
GM_deleteValue(name);},/**
   * List all names of the storage.
   */listValues:function listValues(){eval("GM_listValues()");},/**
   * Adds a change listener to the storage and returns the listener ID.
   * 'name' is the name of the observed variable.
   * The 'remote' argument of the callback function shows whether this value was modified from the instance of another tab (true) or within this script instance (false).
   * Therefore this functionality can be used by scripts of different browser tabs to communicate with each other.
   * @param name
   * @param callback
   * @return number
   */addValueChangeListener:function addValueChangeListener(name,callback){// @ts-ignore
return GM_addValueChangeListener(name,callback);},/**
   * Removes a change listener by its ID.
   * @param listenerId
   */removeValueChangeListener:function removeValueChangeListener(listenerId){// @ts-ignore
GM_removeValueChangeListener(listenerId);},/**
   * Set the value of 'name' to the storage.
   * @param name
   * @param value
   * @constructor
   */setValue:function setValue(name,value){// @ts-ignore
GM_setValue(name,value);},/**
   * Get the value of 'name' from storage.
   * @param name
   * @param defaultValue
   * @constructor
   */getValue:function getValue(name,defaultValue){// @ts-ignore
return GM_getValue(name,defaultValue);},/**
   * Log a message to the console.
   * @param message
   */log:function log(message){// @ts-ignore
GM_log(message);},/**
   * Get the content of a predefined @resource tag at the script header.
   * @param name
   */getResourceText:function getResourceText(name){// @ts-ignore
return GM_getResourceText(name);},/**
   * Get the base64 encoded URI of a predefined @resource tag at the script header.
   * @param name
   */getResourceURL:function getResourceURL(name){// @ts-ignore
return GM_getResourceURL(name);},/**
   * Register a menu to be displayed at the Tampermonkey menu at pages where this script runs and returns a menu command ID.
   * @param name
   * @param callback
   * @param accessKey
   * @return number a menu command ID.
   */registerMenuCommand:function registerMenuCommand(name,callback,accessKey){// @ts-ignore
return GM_registerMenuCommand(name,callback,accessKey);},/**
   * Unregister a menu command that was previously registered by GM_registerMenuCommand with the given menu command ID.
   * @param menuCmdId
   */unregisterMenuCommand:function unregisterMenuCommand(menuCmdId){// @ts-ignore
GM_unregisterMenuCommand(menuCmdId);},/**
   * Open a new tab with this url. The options object can have the following properties:
   * @param url
   * @param loadInBackground
   */openInTab:function openInTab(url,loadInBackground){// @ts-ignore
GM_openInTab(url,loadInBackground);},/**
   * Make an xmlHttpRequest.
   * Property of details:
   * @param details
   */xmlHttpRequest:function xmlHttpRequest(details){// @ts-ignore
return GM_xmlhttpRequest(details);},/**
   * Downloads a given URL to the local disk.
   * @param urlOrdetails
   * @param name
   */download:function download(urlOrdetails,name){if(typeof urlOrdetails==='string'){// @ts-ignore
return GM_download(urlOrdetails,name);}// @ts-ignore
return GM_download(urlOrdetails);},/**
   * Get a object that is persistent as long as this tab is open.
   * @param callback
   */getTab:function getTab(callback){// @ts-ignore
GM_getTab(callback);},/**
   * Save the tab object to reopen it after a page unload.
   * @param tab
   */saveTab:function saveTab(tab){// @ts-ignore
GM_saveTab(tab);},/**
   * Get all tab objects as a hash to communicate with other script instances.
   * @param callback
   */getTabs:function getTabs(callback){// @ts-ignore
GM_getTabs(callback);},/**
   * Shows a HTML5 Desktop notification and/or highlight the current tab.
   * @param textOrDetails
   * @param titleOrOndone
   * @param image
   * @param onclick
   */notification:function notification(textOrDetails,titleOrOndone,image,onclick){if(typeof textOrDetails==='string'){// @ts-ignore
GM_notification(textOrDetails,titleOrOndone,image,onclick);}else{// @ts-ignore
GM_notification(textOrDetails,titleOrOndone);}},/**
   * Copies data into the clipboard. The parameter 'info' can be an object like "{ type: 'text', mimetype: 'text/plain'}" or just a string expressing the type ("text" or "html").
   * @param data
   * @param info
   */setClipboard:function setClipboard(data){var info=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{type:'text',mimetype:'text/plain'};// @ts-ignore
GM_setClipboard(data,info);},/**
   * Get some info about the script and TM. The object might look like this:
   */ // @ts-ignore
// eslint-disable-next-line @typescript-eslint/camelcase
info:GM_info};

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstanceForSystem; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _gmInterface_gmInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
var InstanceForSystem={list:eval("require('system-core:context/context.js')").instanceForSystem.list,maxDownloadCount:2,autoStart:true,downloadingItems:{},stoppedItems:{},completedItems:{},allDownloads:{},initState:function initState(){var _this=this;return new Promise(function(resolve){var objectFromValue=_gmInterface_gmInterface__WEBPACK_IMPORTED_MODULE_1__[/* GM */ "a"].getValue(_types__WEBPACK_IMPORTED_MODULE_0__[/* ValueTypes */ "c"].items,{});_gmInterface_gmInterface__WEBPACK_IMPORTED_MODULE_1__[/* GM */ "a"].deleteValue(_types__WEBPACK_IMPORTED_MODULE_0__[/* ValueTypes */ "c"].items);_this.allDownloads=objectFromValue;Object.values(objectFromValue).forEach(function(item){if(!_this.autoStart&&item.progress.status===_types__WEBPACK_IMPORTED_MODULE_0__[/* StatusTypes */ "b"].downloading){// stop downloading item if user set autoStart as false
item.progress.status=_types__WEBPACK_IMPORTED_MODULE_0__[/* StatusTypes */ "b"].stopped;}if(item.progress.status===_types__WEBPACK_IMPORTED_MODULE_0__[/* StatusTypes */ "b"].completed){_this.completedItems[item.fsId]=item;}if(item.progress.status===_types__WEBPACK_IMPORTED_MODULE_0__[/* StatusTypes */ "b"].stopped){_this.stoppedItems[item.fsId]=item;}});resolve(_this);});},get selectedList(){var selected=this.list.getSelected();return selected.filter(function(arr){return arr.isdir!==1;}).map(function(arr){return _Item__WEBPACK_IMPORTED_MODULE_2__[/* ItemProxy */ "a"].Create(arr);});},// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
get itemsFromQueue(){var _this2=this;var queue={};var filterKeys=Object.keys(Object.assign({},this.downloadingItems,this.completedItems,this.stoppedItems));Object.keys(this.allDownloads).forEach(function(fsId){if(!filterKeys.includes(fsId)){queue[fsId]=_this2.allDownloads[fsId];}});return queue;},get downloadable(){return Object.keys(this.downloadingItems).length<_gmInterface_gmInterface__WEBPACK_IMPORTED_MODULE_1__[/* GM */ "a"].getValue(_types__WEBPACK_IMPORTED_MODULE_0__[/* ValueTypes */ "c"].maxDownloadCount,this.maxDownloadCount);},get currentList(){return this.list.getCurrentList();},stopAll:function stopAll(){var allDownloads=_store__WEBPACK_IMPORTED_MODULE_3__[/* store */ "a"].getState().download.allDownloads;Object.values(allDownloads).filter(function(item){return item.progress.status===_types__WEBPACK_IMPORTED_MODULE_0__[/* StatusTypes */ "b"].downloading;}).forEach(function(item){item.progress.request&&item.progress.request.abort&&item.progress.request.abort();});}};

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducer; });
/* unused harmony export interfaceState */
/* harmony import */ var C_Users_Dotennin_project_baiduPanDownloader_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typesafe_actions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gmInterface_gmInterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _services_InstaceForSystem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
var maxDownloadCount=_services_InstaceForSystem__WEBPACK_IMPORTED_MODULE_4__[/* InstanceForSystem */ "a"].maxDownloadCount,autoStart=_services_InstaceForSystem__WEBPACK_IMPORTED_MODULE_4__[/* InstanceForSystem */ "a"].autoStart;var initState={maxDownloadCount:_gmInterface_gmInterface__WEBPACK_IMPORTED_MODULE_2__[/* GM */ "a"].getValue(_types__WEBPACK_IMPORTED_MODULE_3__[/* ValueTypes */ "c"].maxDownloadCount,maxDownloadCount),autoStart:_gmInterface_gmInterface__WEBPACK_IMPORTED_MODULE_2__[/* GM */ "a"].getValue(_types__WEBPACK_IMPORTED_MODULE_3__[/* ValueTypes */ "c"].autoStart,autoStart),downloadable:true,downloadModalOpen:false,configModalOpen:false};var actionCreator={change:Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_1__["createStandardAction"])('INTERFACE/CHANGE')(),reset:Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_1__["createStandardAction"])('INTERFACE/RESET')()};var reducer=function reducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initState;var action=arguments.length>1?arguments[1]:undefined;switch(action.type){case Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_1__["getType"])(actionCreator.reset):return Object.assign({},initState);case Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_1__["getType"])(actionCreator.change):Object.keys(action.payload).forEach(function(k){// Set key event
var key=k;switch(key){case'autoStart':_gmInterface_gmInterface__WEBPACK_IMPORTED_MODULE_2__[/* GM */ "a"].setValue(_types__WEBPACK_IMPORTED_MODULE_3__[/* ValueTypes */ "c"].autoStart,action.payload.maxDownloadCount);break;case'maxDownloadCount':_gmInterface_gmInterface__WEBPACK_IMPORTED_MODULE_2__[/* GM */ "a"].setValue(_types__WEBPACK_IMPORTED_MODULE_3__[/* ValueTypes */ "c"].maxDownloadCount,action.payload.maxDownloadCount);}});return Object.assign(Object(C_Users_Dotennin_project_baiduPanDownloader_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},state),action.payload);}return state;};

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ actionCreator["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ download_reducer; });

// UNUSED EXPORTS: downloadState, downloadSaga

// EXTERNAL MODULE: ./src/store/download/actionCreator.ts
var actionCreator = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/typesafe-actions/dist/typesafe-actions.umd.production.js
var typesafe_actions_umd_production = __webpack_require__(5);

// EXTERNAL MODULE: ./src/services/InstaceForSystem.ts
var InstaceForSystem = __webpack_require__(13);

// CONCATENATED MODULE: ./src/store/download/state.ts
var allDownloads=InstaceForSystem["a" /* InstanceForSystem */].allDownloads;var state={allDownloads:allDownloads,processing:{url:0,data:0}};/* harmony default export */ var download_state = (state);
// CONCATENATED MODULE: ./src/store/download/reducer.ts
var reducer_reducer=function reducer(){var originState=arguments.length>0&&arguments[0]!==undefined?arguments[0]:download_state;var action=arguments.length>1?arguments[1]:undefined;var draft=Object(objectSpread2["a" /* default */])({},originState);switch(action.type){case Object(typesafe_actions_umd_production["getType"])(actionCreator["a" /* default */].reset):return Object.assign({},draft);case Object(typesafe_actions_umd_production["getType"])(actionCreator["a" /* default */].change.request):return Object.assign(Object(objectSpread2["a" /* default */])({},draft),action.payload);case Object(typesafe_actions_umd_production["getType"])(actionCreator["a" /* default */].updateItem):draft.allDownloads[action.payload.fsId]=action.payload;break;case Object(typesafe_actions_umd_production["getType"])(actionCreator["a" /* default */].downloadURL.request):draft.processing.url+=1;break;case Object(typesafe_actions_umd_production["getType"])(actionCreator["a" /* default */].downloadURL.success):draft.processing.url-=1;break;case Object(typesafe_actions_umd_production["getType"])(actionCreator["a" /* default */].downloadURL.failure):draft.processing.url-=1;break;case Object(typesafe_actions_umd_production["getType"])(actionCreator["a" /* default */].downloadItem.request):draft.processing.data+=1;break;case Object(typesafe_actions_umd_production["getType"])(actionCreator["a" /* default */].downloadItem.success):draft.processing.data-=1;break;case Object(typesafe_actions_umd_production["getType"])(actionCreator["a" /* default */].downloadItem.failure):draft.processing.data-=1;break;}return draft;};/* harmony default export */ var download_reducer = (reducer_reducer);
// EXTERNAL MODULE: ./src/store/download/saga.ts + 1 modules
var saga = __webpack_require__(26);

// CONCATENATED MODULE: ./src/store/download/index.ts


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export __DO_NOT_USE__ActionTypes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createStore; });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */

var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */

function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}
/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */


function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]] = observable, _ref2;
}
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */


function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (false) {}

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */


function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}
/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */


function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}
/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */


function isCrushed() {}

if (false) {}



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatByte; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return log; });
/* unused harmony export awaitElement */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addLocationChangeCallback; });
/* harmony import */ var C_Users_Dotennin_project_baiduPanDownloader_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var C_Users_Dotennin_project_baiduPanDownloader_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Dotennin_project_baiduPanDownloader_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Dotennin_project_baiduPanDownloader_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
var formatByte=function formatByte(byte){if(byte<=1000){return"".concat(byte," B");}var KiByte=Math.round(byte/1024);return KiByte<=1000?"".concat(KiByte," KB"):"".concat(Math.round(KiByte/10.24)/100," MB");};/**
 * Wrapped console.log function.
 *
 * @export
 * @param {*} args
 */function log(){var _console;for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}(_console=console).log.apply(_console,['Userscript (React Mode):'].concat(args));}/**
 * Awaits for an element with the specified `selector` to be found
 * and then returns the selected dom node.
 * This is used to delay rendering a widget until its parent appears.
 *
 * @export
 * @param {string} selector
 * @returns {DOMNode}
 */function awaitElement(_x){return _awaitElement.apply(this,arguments);}/**
 * Ensure `callback` is called every time window.location changes
 * Code derived from https://stackoverflow.com/questions/3522090/event-when-window-location-href-changes
 *
 * @export
 * @param {function} callback - function to be called when URL changes
 * @returns {MutationObserver} - MutationObserver that watches the URL
 */function _awaitElement(){_awaitElement=Object(C_Users_Dotennin_project_baiduPanDownloader_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/C_Users_Dotennin_project_baiduPanDownloader_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(selector){var MAX_TRIES,tries;return C_Users_Dotennin_project_baiduPanDownloader_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:MAX_TRIES=60;tries=0;return _context.abrupt("return",new Promise(function(resolve,reject){function probe(){tries++;return document.querySelector(selector);}function delayedProbe(){if(tries>=MAX_TRIES){log("Can't find element with selector",selector);reject();return;}var elm=probe();if(elm){resolve(elm);return;}window.setTimeout(delayedProbe,250);}delayedProbe();}));case 3:case"end":return _context.stop();}}},_callee);}));return _awaitElement.apply(this,arguments);}function addLocationChangeCallback(callback){// Run the callback once right at the start
window.setTimeout(callback,0);// Set up a `MutationObserver` to watch for changes in the URL
var oldHref=window.location.href;var observer=new MutationObserver(function(mutations){if(mutations.some(function(){return oldHref!==document.location.href;})){oldHref=document.location.href;callback();}});observer.observe(document.body,{childList:true,subtree:true});return observer;}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export ServerStyleSheet */
/* unused harmony export StyleSheetConsumer */
/* unused harmony export StyleSheetContext */
/* unused harmony export StyleSheetManager */
/* unused harmony export ThemeConsumer */
/* unused harmony export ThemeContext */
/* unused harmony export ThemeProvider */
/* unused harmony export __PRIVATE__ */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createGlobalStyle; });
/* unused harmony export css */
/* unused harmony export isStyledComponent */
/* unused harmony export keyframes */
/* unused harmony export useTheme */
/* unused harmony export version */
/* unused harmony export withTheme */
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);








function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
} // 


var interleave = function interleave(strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
}; // 


var isPlainObject = function isPlainObject(x) {
  return x !== null && typeof x === 'object' && (x.toString ? x.toString() : Object.prototype.toString.call(x)) === '[object Object]' && !Object(react_is__WEBPACK_IMPORTED_MODULE_0__["typeOf"])(x);
}; // 


var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({}); // 

function isFunction(test) {
  return typeof test === 'function';
} // 


function getComponentName(target) {
  return ( false) || // $FlowFixMe
  target.displayName || // $FlowFixMe
  target.name || 'Component';
} // 


function isStatelessFunction(test) {
  return typeof test === 'function' && !(test.prototype && test.prototype.isReactComponent);
} // 


function isStyledComponent(target) {
  return target && typeof target.styledComponentId === 'string';
} // 


var SC_ATTR = typeof process !== 'undefined' && (Object({"NODE_ENV":"production","PUBLIC_URL":"","WDS_SOCKET_HOST":undefined,"WDS_SOCKET_PATH":undefined,"WDS_SOCKET_PORT":undefined}).REACT_APP_SC_ATTR || Object({"NODE_ENV":"production","PUBLIC_URL":"","WDS_SOCKET_HOST":undefined,"WDS_SOCKET_PATH":undefined,"WDS_SOCKET_PORT":undefined}).SC_ATTR) || 'data-styled';
var SC_ATTR_ACTIVE = 'active';
var SC_ATTR_VERSION = 'data-styled-version';
var SC_VERSION = "5.1.1";
var SPLITTER = '/*!sc*/\n';
var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;
var DISABLE_SPEEDY = typeof SC_DISABLE_SPEEDY === 'boolean' && SC_DISABLE_SPEEDY || typeof process !== 'undefined' && (Object({"NODE_ENV":"production","PUBLIC_URL":"","WDS_SOCKET_HOST":undefined,"WDS_SOCKET_PATH":undefined,"WDS_SOCKET_PORT":undefined}).REACT_APP_SC_DISABLE_SPEEDY || Object({"NODE_ENV":"production","PUBLIC_URL":"","WDS_SOCKET_HOST":undefined,"WDS_SOCKET_PATH":undefined,"WDS_SOCKET_PORT":undefined}).SC_DISABLE_SPEEDY) || "production" !== 'production'; // Shared empty execution context when generating static styles

var STATIC_EXECUTION_CONTEXT = {}; // 

/* eslint-disable camelcase, no-undef */

var getNonce = function getNonce() {
  return  true ? __webpack_require__.nc : undefined;
};

var errorMap = {
  "1": "Cannot create styled-component for component: %s.\n\n",
  "2": "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
  "3": "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  "4": "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
  "5": "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
  "6": "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
  "7": "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
  "8": "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
  "9": "Missing document `<head>`\n\n",
  "10": "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
  "11": "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
  "12": "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
  "13": "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",
  "14": "ThemeProvider: \"theme\" prop is required.\n\n",
  "15": "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
  "16": "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
  "17": "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"
}; // 

var ERRORS =  false ? undefined : {};
/**
 * super basic version of sprintf
 */

function format() {
  var a = arguments.length <= 0 ? undefined : arguments[0];
  var b = [];

  for (var c = 1, len = arguments.length; c < len; c += 1) {
    b.push(c < 0 || arguments.length <= c ? undefined : arguments[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });
  return a;
}
/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 */


function throwStyledComponentsError(code) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (true) {
    throw new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/errors.md#" + code + " for more information." + (interpolations.length > 0 ? " Additional arguments: " + interpolations.join(', ') : ''));
  } else {}
} // 


var ELEMENT_TYPE = 1;
/* Node.ELEMENT_TYPE */

/** Find last style element if any inside target */

var findLastStyleTag = function findLastStyleTag(target) {
  var childNodes = target.childNodes;

  for (var i = childNodes.length; i >= 0; i--) {
    var child = childNodes[i];

    if (child && child.nodeType === ELEMENT_TYPE && child.hasAttribute(SC_ATTR)) {
      return child;
    }
  }

  return undefined;
};
/** Create a style element inside `target` or <head> after the last */


var makeStyleTag = function makeStyleTag(target) {
  var head = document.head;
  var parent = target || head;
  var style = document.createElement('style');
  var prevStyle = findLastStyleTag(parent);
  var nextSibling = prevStyle !== undefined ? prevStyle.nextSibling : null;
  style.setAttribute(SC_ATTR, SC_ATTR_ACTIVE);
  style.setAttribute(SC_ATTR_VERSION, SC_VERSION);
  var nonce = getNonce();
  if (nonce) style.setAttribute('nonce', nonce);
  parent.insertBefore(style, nextSibling);
  return style;
};
/** Get the CSSStyleSheet instance for a given style element */


var getSheet = function getSheet(tag) {
  if (tag.sheet) {
    return tag.sheet;
  } // Avoid Firefox quirk where the style element might not have a sheet property


  var _document = document,
      styleSheets = _document.styleSheets;

  for (var i = 0, l = styleSheets.length; i < l; i++) {
    var sheet = styleSheets[i];

    if (sheet.ownerNode === tag) {
      return sheet;
    }
  }

  throwStyledComponentsError(17);
  return undefined;
}; // 

/** Create a CSSStyleSheet-like tag depending on the environment */


var makeTag = function makeTag(_ref) {
  var isServer = _ref.isServer,
      useCSSOMInjection = _ref.useCSSOMInjection,
      target = _ref.target;

  if (isServer) {
    return new VirtualTag(target);
  } else if (useCSSOMInjection) {
    return new CSSOMTag(target);
  } else {
    return new TextTag(target);
  }
};

var CSSOMTag = /*#__PURE__*/function () {
  function CSSOMTag(target) {
    var element = this.element = makeStyleTag(target); // Avoid Edge bug where empty style elements don't create sheets

    element.appendChild(document.createTextNode(''));
    this.sheet = getSheet(element);
    this.length = 0;
  }

  var _proto = CSSOMTag.prototype;

  _proto.insertRule = function insertRule(index, rule) {
    try {
      this.sheet.insertRule(rule, index);
      this.length++;
      return true;
    } catch (_error) {
      return false;
    }
  };

  _proto.deleteRule = function deleteRule(index) {
    this.sheet.deleteRule(index);
    this.length--;
  };

  _proto.getRule = function getRule(index) {
    var rule = this.sheet.cssRules[index]; // Avoid IE11 quirk where cssText is inaccessible on some invalid rules

    if (rule !== undefined && typeof rule.cssText === 'string') {
      return rule.cssText;
    } else {
      return '';
    }
  };

  return CSSOMTag;
}();
/** A Tag that emulates the CSSStyleSheet API but uses text nodes */


var TextTag = /*#__PURE__*/function () {
  function TextTag(target) {
    var element = this.element = makeStyleTag(target);
    this.nodes = element.childNodes;
    this.length = 0;
  }

  var _proto2 = TextTag.prototype;

  _proto2.insertRule = function insertRule(index, rule) {
    if (index <= this.length && index >= 0) {
      var node = document.createTextNode(rule);
      var refNode = this.nodes[index];
      this.element.insertBefore(node, refNode || null);
      this.length++;
      return true;
    } else {
      return false;
    }
  };

  _proto2.deleteRule = function deleteRule(index) {
    this.element.removeChild(this.nodes[index]);
    this.length--;
  };

  _proto2.getRule = function getRule(index) {
    if (index < this.length) {
      return this.nodes[index].textContent;
    } else {
      return '';
    }
  };

  return TextTag;
}();
/** A completely virtual (server-side) Tag that doesn't manipulate the DOM */


var VirtualTag = /*#__PURE__*/function () {
  function VirtualTag(_target) {
    this.rules = [];
    this.length = 0;
  }

  var _proto3 = VirtualTag.prototype;

  _proto3.insertRule = function insertRule(index, rule) {
    if (index <= this.length) {
      this.rules.splice(index, 0, rule);
      this.length++;
      return true;
    } else {
      return false;
    }
  };

  _proto3.deleteRule = function deleteRule(index) {
    this.rules.splice(index, 1);
    this.length--;
  };

  _proto3.getRule = function getRule(index) {
    if (index < this.length) {
      return this.rules[index];
    } else {
      return '';
    }
  };

  return VirtualTag;
}(); // 

/** Create a GroupedTag with an underlying Tag implementation */


var makeGroupedTag = function makeGroupedTag(tag) {
  return new DefaultGroupedTag(tag);
};

var BASE_SIZE = 1 << 9;

var DefaultGroupedTag = /*#__PURE__*/function () {
  function DefaultGroupedTag(tag) {
    this.groupSizes = new Uint32Array(BASE_SIZE);
    this.length = BASE_SIZE;
    this.tag = tag;
  }

  var _proto = DefaultGroupedTag.prototype;

  _proto.indexOfGroup = function indexOfGroup(group) {
    var index = 0;

    for (var i = 0; i < group; i++) {
      index += this.groupSizes[i];
    }

    return index;
  };

  _proto.insertRules = function insertRules(group, rules) {
    if (group >= this.groupSizes.length) {
      var oldBuffer = this.groupSizes;
      var oldSize = oldBuffer.length;
      var newSize = oldSize;

      while (group >= newSize) {
        newSize <<= 1;

        if (newSize < 0) {
          throwStyledComponentsError(16, "" + group);
        }
      }

      this.groupSizes = new Uint32Array(newSize);
      this.groupSizes.set(oldBuffer);
      this.length = newSize;

      for (var i = oldSize; i < newSize; i++) {
        this.groupSizes[i] = 0;
      }
    }

    var ruleIndex = this.indexOfGroup(group + 1);

    for (var _i = 0, l = rules.length; _i < l; _i++) {
      if (this.tag.insertRule(ruleIndex, rules[_i])) {
        this.groupSizes[group]++;
        ruleIndex++;
      }
    }
  };

  _proto.clearGroup = function clearGroup(group) {
    if (group < this.length) {
      var length = this.groupSizes[group];
      var startIndex = this.indexOfGroup(group);
      var endIndex = startIndex + length;
      this.groupSizes[group] = 0;

      for (var i = startIndex; i < endIndex; i++) {
        this.tag.deleteRule(startIndex);
      }
    }
  };

  _proto.getGroup = function getGroup(group) {
    var css = '';

    if (group >= this.length || this.groupSizes[group] === 0) {
      return css;
    }

    var length = this.groupSizes[group];
    var startIndex = this.indexOfGroup(group);
    var endIndex = startIndex + length;

    for (var i = startIndex; i < endIndex; i++) {
      css += "" + this.tag.getRule(i) + SPLITTER;
    }

    return css;
  };

  return DefaultGroupedTag;
}(); // 


var MAX_SMI = 1 << 31 - 1;
var groupIDRegister = new Map();
var reverseRegister = new Map();
var nextFreeGroup = 1;

var getGroupForId = function getGroupForId(id) {
  if (groupIDRegister.has(id)) {
    return groupIDRegister.get(id);
  }

  var group = nextFreeGroup++;

  if (false) {}

  groupIDRegister.set(id, group);
  reverseRegister.set(group, id);
  return group;
};

var getIdForGroup = function getIdForGroup(group) {
  return reverseRegister.get(group);
};

var setGroupForId = function setGroupForId(id, group) {
  if (group >= nextFreeGroup) {
    nextFreeGroup = group + 1;
  }

  groupIDRegister.set(id, group);
  reverseRegister.set(group, id);
}; // 


var SELECTOR = "style[" + SC_ATTR + "][" + SC_ATTR_VERSION + "=\"" + SC_VERSION + "\"]";
var MARKER_RE = new RegExp("^" + SC_ATTR + "\\.g(\\d+)\\[id=\"([\\w\\d-]+)\"\\].*?\"([^\"]*)");

var outputSheet = function outputSheet(sheet) {
  var tag = sheet.getTag();
  var length = tag.length;
  var css = '';

  for (var group = 0; group < length; group++) {
    var id = getIdForGroup(group);
    if (id === undefined) continue;
    var names = sheet.names.get(id);
    var rules = tag.getGroup(group);
    if (names === undefined || rules.length === 0) continue;
    var selector = SC_ATTR + ".g" + group + "[id=\"" + id + "\"]";
    var content = '';

    if (names !== undefined) {
      names.forEach(function (name) {
        if (name.length > 0) {
          content += name + ",";
        }
      });
    } // NOTE: It's easier to collect rules and have the marker
    // after the actual rules to simplify the rehydration


    css += "" + rules + selector + "{content:\"" + content + "\"}" + SPLITTER;
  }

  return css;
};

var rehydrateNamesFromContent = function rehydrateNamesFromContent(sheet, id, content) {
  var names = content.split(',');
  var name;

  for (var i = 0, l = names.length; i < l; i++) {
    // eslint-disable-next-line
    if (name = names[i]) {
      sheet.registerName(id, name);
    }
  }
};

var rehydrateSheetFromTag = function rehydrateSheetFromTag(sheet, style) {
  var parts = style.innerHTML.split(SPLITTER);
  var rules = [];

  for (var i = 0, l = parts.length; i < l; i++) {
    var part = parts[i].trim();
    if (!part) continue;
    var marker = part.match(MARKER_RE);

    if (marker) {
      var group = parseInt(marker[1], 10) | 0;
      var id = marker[2];

      if (group !== 0) {
        // Rehydrate componentId to group index mapping
        setGroupForId(id, group); // Rehydrate names and rules
        // looks like: data-styled.g11[id="idA"]{content:"nameA,"}

        rehydrateNamesFromContent(sheet, id, marker[3]);
        sheet.getTag().insertRules(group, rules);
      }

      rules.length = 0;
    } else {
      rules.push(part);
    }
  }
};

var rehydrateSheet = function rehydrateSheet(sheet) {
  var nodes = document.querySelectorAll(SELECTOR);

  for (var i = 0, l = nodes.length; i < l; i++) {
    var node = nodes[i];

    if (node && node.getAttribute(SC_ATTR) !== SC_ATTR_ACTIVE) {
      rehydrateSheetFromTag(sheet, node);

      if (node.parentNode) {
        node.parentNode.removeChild(node);
      }
    }
  }
};

var SHOULD_REHYDRATE = IS_BROWSER;
var defaultOptions = {
  isServer: !IS_BROWSER,
  useCSSOMInjection: !DISABLE_SPEEDY
};
/** Contains the main stylesheet logic for stringification and caching */

var StyleSheet = /*#__PURE__*/function () {
  /** Register a group ID to give it an index */
  StyleSheet.registerId = function registerId(id) {
    return getGroupForId(id);
  };

  function StyleSheet(options, globalStyles, names) {
    if (options === void 0) {
      options = defaultOptions;
    }

    if (globalStyles === void 0) {
      globalStyles = {};
    }

    this.options = _extends({}, defaultOptions, {}, options);
    this.gs = globalStyles;
    this.names = new Map(names); // We rehydrate only once and use the sheet that is created first

    if (!this.options.isServer && IS_BROWSER && SHOULD_REHYDRATE) {
      SHOULD_REHYDRATE = false;
      rehydrateSheet(this);
    }
  }

  var _proto = StyleSheet.prototype;

  _proto.reconstructWithOptions = function reconstructWithOptions(options) {
    return new StyleSheet(_extends({}, this.options, {}, options), this.gs, this.names);
  };

  _proto.allocateGSInstance = function allocateGSInstance(id) {
    return this.gs[id] = (this.gs[id] || 0) + 1;
  }
  /** Lazily initialises a GroupedTag for when it's actually needed */
  ;

  _proto.getTag = function getTag() {
    return this.tag || (this.tag = makeGroupedTag(makeTag(this.options)));
  }
  /** Check whether a name is known for caching */
  ;

  _proto.hasNameForId = function hasNameForId(id, name) {
    return this.names.has(id) && this.names.get(id).has(name);
  }
  /** Mark a group's name as known for caching */
  ;

  _proto.registerName = function registerName(id, name) {
    getGroupForId(id);

    if (!this.names.has(id)) {
      var groupNames = new Set();
      groupNames.add(name);
      this.names.set(id, groupNames);
    } else {
      this.names.get(id).add(name);
    }
  }
  /** Insert new rules which also marks the name as known */
  ;

  _proto.insertRules = function insertRules(id, name, rules) {
    this.registerName(id, name);
    this.getTag().insertRules(getGroupForId(id), rules);
  }
  /** Clears all cached names for a given group ID */
  ;

  _proto.clearNames = function clearNames(id) {
    if (this.names.has(id)) {
      this.names.get(id).clear();
    }
  }
  /** Clears all rules for a given group ID */
  ;

  _proto.clearRules = function clearRules(id) {
    this.getTag().clearGroup(getGroupForId(id));
    this.clearNames(id);
  }
  /** Clears the entire tag which deletes all rules but not its names */
  ;

  _proto.clearTag = function clearTag() {
    // NOTE: This does not clear the names, since it's only used during SSR
    // so that we can continuously output only new rules
    this.tag = undefined;
  }
  /** Outputs the current sheet as a CSS string with markers for SSR */
  ;

  _proto.toString = function toString() {
    return outputSheet(this);
  };

  return StyleSheet;
}(); // 

/* eslint-disable */


var SEED = 5381; // When we have separate strings it's useful to run a progressive
// version of djb2 where we pretend that we're still looping over
// the same string

var phash = function phash(h, x) {
  var i = x.length;

  while (i) {
    h = h * 33 ^ x.charCodeAt(--i);
  }

  return h;
}; // This is a djb2 hashing function


var hash = function hash(x) {
  return phash(SEED, x);
};
/**
 * MIT License
 *
 * Copyright (c) 2016 Sultan Tarimo
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
 * IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/* eslint-disable */


function insertRulePlugin(insertRule) {
  var delimiter = '/*|*/';
  var needle = delimiter + "}";

  function toSheet(block) {
    if (block) {
      try {
        insertRule(block + "}");
      } catch (e) {}
    }
  }

  return function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
    switch (context) {
      // property
      case 1:
        // @import
        if (depth === 0 && content.charCodeAt(0) === 64) return insertRule(content + ";"), '';
        break;
      // selector

      case 2:
        if (ns === 0) return content + delimiter;
        break;
      // at-rule

      case 3:
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            return insertRule(selectors[0] + content), '';

          default:
            return content + (at === 0 ? delimiter : '');
        }

      case -2:
        content.split(needle).forEach(toSheet);
    }
  };
}

var COMMENT_REGEX = /^\s*\/\/.*$/gm;

function createStylisInstance(_temp) {
  var _ref = _temp === void 0 ? EMPTY_OBJECT : _temp,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? EMPTY_OBJECT : _ref$options,
      _ref$plugins = _ref.plugins,
      plugins = _ref$plugins === void 0 ? EMPTY_ARRAY : _ref$plugins;

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"](options); // Wrap `insertRulePlugin to build a list of rules,
  // and then make our own plugin to return the rules. This
  // makes it easier to hook into the existing SSR architecture

  var parsingRules = []; // eslint-disable-next-line consistent-return

  var returnRulesPlugin = function returnRulesPlugin(context) {
    if (context === -2) {
      var parsedRules = parsingRules;
      parsingRules = [];
      return parsedRules;
    }
  };

  var parseRulesPlugin = insertRulePlugin(function (rule) {
    parsingRules.push(rule);
  });

  var _componentId;

  var _selector;

  var _selectorRegexp;

  var selfReferenceReplacer = function selfReferenceReplacer(match, offset, string) {
    if ( // the first self-ref is always untouched
    offset > 0 && // there should be at least two self-refs to do a replacement (.b > .b)
    string.slice(0, offset).indexOf(_selector) !== -1 && // no consecutive self refs (.b.b); that is a precedence boost and treated differently
    string.slice(offset - _selector.length, offset) !== _selector) {
      return "." + _componentId;
    }

    return match;
  };
  /**
   * When writing a style like
   *
   * & + & {
   *   color: red;
   * }
   *
   * The second ampersand should be a reference to the static component class. stylis
   * has no knowledge of static class so we have to intelligently replace the base selector.
   *
   * https://github.com/thysultan/stylis.js#plugins <- more info about the context phase values
   * "2" means this plugin is taking effect at the very end after all other processing is complete
   */


  var selfReferenceReplacementPlugin = function selfReferenceReplacementPlugin(context, _, selectors) {
    if (context === 2 && selectors.length && selectors[0].lastIndexOf(_selector) > 0) {
      // eslint-disable-next-line no-param-reassign
      selectors[0] = selectors[0].replace(_selectorRegexp, selfReferenceReplacer);
    }
  };

  stylis.use([].concat(plugins, [selfReferenceReplacementPlugin, parseRulesPlugin, returnRulesPlugin]));

  function stringifyRules(css, selector, prefix, componentId) {
    if (componentId === void 0) {
      componentId = '&';
    }

    var flatCSS = css.replace(COMMENT_REGEX, '');
    var cssStr = selector && prefix ? prefix + " " + selector + " { " + flatCSS + " }" : flatCSS; // stylis has no concept of state to be passed to plugins
    // but since JS is single=threaded, we can rely on that to ensure
    // these properties stay in sync with the current stylis run

    _componentId = componentId;
    _selector = selector;
    _selectorRegexp = new RegExp("\\" + _selector + "\\b", 'g');
    return stylis(prefix || !selector ? '' : selector, cssStr);
  }

  stringifyRules.hash = plugins.length ? plugins.reduce(function (acc, plugin) {
    if (!plugin.name) {
      throwStyledComponentsError(15);
    }

    return phash(acc, plugin.name);
  }, SEED).toString() : '';
  return stringifyRules;
} // 


var StyleSheetContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var StyleSheetConsumer = StyleSheetContext.Consumer;
var StylisContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var StylisConsumer = StylisContext.Consumer;
var masterSheet = new StyleSheet();
var masterStylis = createStylisInstance();

function useStyleSheet() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(StyleSheetContext) || masterSheet;
}

function useStylis() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(StylisContext) || masterStylis;
}

function StyleSheetManager(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.stylisPlugins),
      plugins = _useState[0],
      setPlugins = _useState[1];

  var contextStyleSheet = useStyleSheet();
  var styleSheet = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var sheet = contextStyleSheet;

    if (props.sheet) {
      // eslint-disable-next-line prefer-destructuring
      sheet = props.sheet;
    } else if (props.target) {
      sheet = sheet.reconstructWithOptions({
        target: props.target
      });
    }

    if (props.disableCSSOMInjection) {
      sheet = sheet.reconstructWithOptions({
        useCSSOMInjection: false
      });
    }

    return sheet;
  }, [props.disableCSSOMInjection, props.sheet, props.target]);
  var stylis = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return createStylisInstance({
      options: {
        prefix: !props.disableVendorPrefixes
      },
      plugins: plugins
    });
  }, [props.disableVendorPrefixes, plugins]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(plugins, props.stylisPlugins)) setPlugins(props.stylisPlugins);
  }, [props.stylisPlugins]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyleSheetContext.Provider, {
    value: styleSheet
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StylisContext.Provider, {
    value: stylis
  },  false ? undefined : props.children));
} // 


var Keyframes = /*#__PURE__*/function () {
  function Keyframes(name, stringifyArgs) {
    var _this = this;

    this.inject = function (styleSheet) {
      if (!styleSheet.hasNameForId(_this.id, _this.name)) {
        styleSheet.insertRules(_this.id, _this.name, masterStylis.apply(void 0, _this.stringifyArgs));
      }
    };

    this.toString = function () {
      return throwStyledComponentsError(12, String(_this.name));
    };

    this.name = name;
    this.id = "sc-keyframes-" + name;
    this.stringifyArgs = stringifyArgs;
  }

  var _proto = Keyframes.prototype;

  _proto.getName = function getName() {
    return this.name;
  };

  return Keyframes;
}(); // 

/**
 * inlined version of
 * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/hyphenateStyleName.js
 */


var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;
/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */

function hyphenateStyleName(string) {
  return string.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
} // 


function addUnitIfNeeded(name, value) {
  // https://github.com/amilajack/eslint-plugin-flowtype-errors/issues/133
  // $FlowFixMe
  if (value == null || typeof value === 'boolean' || value === '') {
    return '';
  }

  if (typeof value === 'number' && value !== 0 && !(name in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])) {
    return value + "px"; // Presumes implicit 'px' suffix for unitless numbers
  }

  return String(value).trim();
} // 

/**
 * It's falsish not falsy because 0 is allowed.
 */


var isFalsish = function isFalsish(chunk) {
  return chunk === undefined || chunk === null || chunk === false || chunk === '';
};

var objToCssArray = function objToCssArray(obj, prevKey) {
  var rules = [];
  var keys = Object.keys(obj);
  keys.forEach(function (key) {
    if (!isFalsish(obj[key])) {
      if (isPlainObject(obj[key])) {
        rules.push.apply(rules, objToCssArray(obj[key], key));
        return rules;
      } else if (isFunction(obj[key])) {
        rules.push(hyphenateStyleName(key) + ":", obj[key], ';');
        return rules;
      }

      rules.push(hyphenateStyleName(key) + ": " + addUnitIfNeeded(key, obj[key]) + ";");
    }

    return rules;
  });
  return prevKey ? [prevKey + " {"].concat(rules, ['}']) : rules;
};

function flatten(chunk, executionContext, styleSheet) {
  if (Array.isArray(chunk)) {
    var ruleSet = [];

    for (var i = 0, len = chunk.length, result; i < len; i += 1) {
      result = flatten(chunk[i], executionContext, styleSheet);
      if (result === '') continue;else if (Array.isArray(result)) ruleSet.push.apply(ruleSet, result);else ruleSet.push(result);
    }

    return ruleSet;
  }

  if (isFalsish(chunk)) {
    return '';
  }
  /* Handle other components */


  if (isStyledComponent(chunk)) {
    return "." + chunk.styledComponentId;
  }
  /* Either execute or defer the function */


  if (isFunction(chunk)) {
    if (isStatelessFunction(chunk) && executionContext) {
      var _result = chunk(executionContext);

      if (false) {}

      return flatten(_result, executionContext, styleSheet);
    } else return chunk;
  }

  if (chunk instanceof Keyframes) {
    if (styleSheet) {
      chunk.inject(styleSheet);
      return chunk.getName();
    } else return chunk;
  }
  /* Handle objects */


  return isPlainObject(chunk) ? objToCssArray(chunk) : chunk.toString();
} // 


function css(styles) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (isFunction(styles) || isPlainObject(styles)) {
    // $FlowFixMe
    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
  }

  if (interpolations.length === 0 && styles.length === 1 && typeof styles[0] === "string") {
    // $FlowFixMe
    return styles;
  } // $FlowFixMe


  return flatten(interleave(styles, interpolations));
}

function constructWithOptions(componentConstructor, tag, options) {
  if (options === void 0) {
    options = EMPTY_OBJECT;
  }

  if (!Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isValidElementType"])(tag)) {
    return throwStyledComponentsError(1, String(tag));
  }
  /* This is callable directly as a template function */
  // $FlowFixMe: Not typed to avoid destructuring arguments


  var templateFunction = function templateFunction() {
    return componentConstructor(tag, options, css.apply(void 0, arguments));
  };
  /* If config methods are called, wrap up a new template function and merge options */


  templateFunction.withConfig = function (config) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {}, config));
  };
  /* Modify/inject new props at runtime */


  templateFunction.attrs = function (attrs) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {
      attrs: Array.prototype.concat(options.attrs, attrs).filter(Boolean)
    }));
  };

  return templateFunction;
}
/* eslint-disable */

/**
  mixin-deep; https://github.com/jonschlinkert/mixin-deep
  Inlined such that it will be consistently transpiled to an IE-compatible syntax.

  The MIT License (MIT)

  Copyright (c) 2014-present, Jon Schlinkert.

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/


var isObject = function isObject(val) {
  return typeof val === 'function' || typeof val === 'object' && val !== null && !Array.isArray(val);
};

var isValidKey = function isValidKey(key) {
  return key !== '__proto__' && key !== 'constructor' && key !== 'prototype';
};

function mixin(target, val, key) {
  var obj = target[key];

  if (isObject(val) && isObject(obj)) {
    mixinDeep(obj, val);
  } else {
    target[key] = val;
  }
}

function mixinDeep(target) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  for (var _i = 0, _rest = rest; _i < _rest.length; _i++) {
    var obj = _rest[_i];

    if (isObject(obj)) {
      for (var key in obj) {
        if (isValidKey(key)) {
          mixin(target, obj[key], key);
        }
      }
    }
  }

  return target;
} // 

/* eslint-disable no-bitwise */


var AD_REPLACER_R = /(a)(d)/gi;
/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */

var charsLength = 52;
/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */

var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};
/* input a number, usually a hash and convert it to base-52 */


function generateAlphabeticName(code) {
  var name = '';
  var x;
  /* get a char and divide by alphabet-length */

  for (x = Math.abs(code); x > charsLength; x = x / charsLength | 0) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return (getAlphabeticChar(x % charsLength) + name).replace(AD_REPLACER_R, '$1-$2');
} // 


function isStaticRules(rules) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    if (isFunction(rule) && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  return true;
} // 

/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */


var ComponentStyle = /*#__PURE__*/function () {
  function ComponentStyle(rules, componentId) {
    this.rules = rules;
    this.staticRulesId = '';
    this.isStatic =  true && isStaticRules(rules);
    this.componentId = componentId;
    this.baseHash = hash(componentId); // NOTE: This registers the componentId, which ensures a consistent order
    // for this component's styles compared to others

    StyleSheet.registerId(componentId);
  }
  /*
   * Flattens a rule set into valid CSS
   * Hashes it, wraps the whole chunk in a .hash1234 {}
   * Returns the hash to be injected on render()
   * */


  var _proto = ComponentStyle.prototype;

  _proto.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet, stylis) {
    var componentId = this.componentId; // force dynamic classnames if user-supplied stylis plugins are in use

    if (this.isStatic && !stylis.hash) {
      if (this.staticRulesId && styleSheet.hasNameForId(componentId, this.staticRulesId)) {
        return this.staticRulesId;
      }

      var cssStatic = flatten(this.rules, executionContext, styleSheet).join('');
      var name = generateAlphabeticName(phash(this.baseHash, cssStatic.length) >>> 0);

      if (!styleSheet.hasNameForId(componentId, name)) {
        var cssStaticFormatted = stylis(cssStatic, "." + name, undefined, componentId);
        styleSheet.insertRules(componentId, name, cssStaticFormatted);
      }

      this.staticRulesId = name;
      return name;
    } else {
      var length = this.rules.length;
      var dynamicHash = phash(this.baseHash, stylis.hash);
      var css = '';

      for (var i = 0; i < length; i++) {
        var partRule = this.rules[i];

        if (typeof partRule === 'string') {
          css += partRule;
          if (false) {}
        } else {
          var partChunk = flatten(partRule, executionContext, styleSheet);
          var partString = Array.isArray(partChunk) ? partChunk.join('') : partChunk;
          dynamicHash = phash(dynamicHash, partString + i);
          css += partString;
        }
      }

      var _name = generateAlphabeticName(dynamicHash >>> 0);

      if (!styleSheet.hasNameForId(componentId, _name)) {
        var cssFormatted = stylis(css, "." + _name, undefined, componentId);
        styleSheet.insertRules(componentId, _name, cssFormatted);
      }

      return _name;
    }
  };

  return ComponentStyle;
}(); // 


var LIMIT = 200;

var createWarnTooManyClasses = function createWarnTooManyClasses(displayName, componentId) {
  var generatedClasses = {};
  var warningSeen = false;
  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;

      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.

        /* eslint-disable no-console, prefer-template */
        var parsedIdString = componentId ? " with the id of \"" + componentId + "\"" : '';
        console.warn("Over " + LIMIT + " classes were generated for component " + displayName + parsedIdString + ".\n" + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs(props => ({\n' + '    style: {\n' + '      background: props.background,\n' + '    },\n' + '  }))`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
}; // 


var invalidHookCallRe = /invalid hook call/i;
var seen = new Set();

var checkDynamicCreation = function checkDynamicCreation(displayName, componentId) {
  if (false) { var message, parsedIdString; }
}; // 


var determineTheme = function determineTheme(props, providedTheme, defaultProps) {
  if (defaultProps === void 0) {
    defaultProps = EMPTY_OBJECT;
  }

  return props.theme !== defaultProps.theme && props.theme || providedTheme || defaultProps.theme;
}; // 
// Source: https://www.w3.org/TR/cssom-1/#serialize-an-identifier
// Control characters and non-letter first symbols are not supported


var escapeRegex = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
var dashesAtEnds = /(^-|-$)/g;
/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */

function escape(str) {
  return str // Replace all possible CSS selectors
  .replace(escapeRegex, '-') // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
} // 


function isTag(target) {
  return typeof target === 'string' && ( false ? undefined : true);
} // 


function generateDisplayName(target) {
  // $FlowFixMe
  return isTag(target) ? "styled." + target : "Styled(" + getComponentName(target) + ")";
} // 


var generateComponentId = function generateComponentId(str) {
  return generateAlphabeticName(hash(str) >>> 0);
};
/**
 * Convenience function for joining strings to form className chains
 */


function joinStrings(a, b) {
  return a && b ? a + " " + b : a || b;
}

var ThemeContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var ThemeConsumer = ThemeContext.Consumer;

function mergeTheme(theme, outerTheme) {
  if (!theme) {
    return throwStyledComponentsError(14);
  }

  if (isFunction(theme)) {
    var mergedTheme = theme(outerTheme);

    if (false) {}

    return mergedTheme;
  }

  if (Array.isArray(theme) || typeof theme !== 'object') {
    return throwStyledComponentsError(8);
  }

  return outerTheme ? _extends({}, outerTheme, {}, theme) : theme;
}
/**
 * Provide a theme to an entire react component tree via context
 */


function ThemeProvider(props) {
  var outerTheme = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext);
  var themeContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return mergeTheme(props.theme, outerTheme);
  }, [props.theme, outerTheme]);

  if (!props.children) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ThemeContext.Provider, {
    value: themeContext
  }, props.children);
}
/* global $Call */


var identifiers = {};
/* We depend on components having unique IDs */

function generateId(displayName, parentComponentId) {
  var name = typeof displayName !== 'string' ? 'sc' : escape(displayName); // Ensure that no displayName can lead to duplicate componentIds

  identifiers[name] = (identifiers[name] || 0) + 1;
  var componentId = name + "-" + generateComponentId(name + identifiers[name]);
  return parentComponentId ? parentComponentId + "-" + componentId : componentId;
}

function useResolvedAttrs(theme, props, attrs) {
  if (theme === void 0) {
    theme = EMPTY_OBJECT;
  } // NOTE: can't memoize this
  // returns [context, resolvedAttrs]
  // where resolvedAttrs is only the things injected by the attrs themselves


  var context = _extends({}, props, {
    theme: theme
  });

  var resolvedAttrs = {};
  attrs.forEach(function (attrDef) {
    var resolvedAttrDef = attrDef;
    var key;

    if (isFunction(resolvedAttrDef)) {
      resolvedAttrDef = resolvedAttrDef(context);
    }
    /* eslint-disable guard-for-in */


    for (key in resolvedAttrDef) {
      context[key] = resolvedAttrs[key] = key === 'className' ? joinStrings(resolvedAttrs[key], resolvedAttrDef[key]) : resolvedAttrDef[key];
    }
    /* eslint-enable guard-for-in */

  });
  return [context, resolvedAttrs];
}

function useInjectedStyle(componentStyle, hasAttrs, resolvedAttrs, warnTooManyClasses) {
  var styleSheet = useStyleSheet();
  var stylis = useStylis(); // statically styled-components don't need to build an execution context object,
  // and shouldn't be increasing the number of class names

  var isStatic = componentStyle.isStatic && !hasAttrs;
  var className = isStatic ? componentStyle.generateAndInjectStyles(EMPTY_OBJECT, styleSheet, stylis) : componentStyle.generateAndInjectStyles(resolvedAttrs, styleSheet, stylis);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(className);

  if (false) {}

  return className;
}

function useStyledComponentImpl(forwardedComponent, props, forwardedRef) {
  var componentAttrs = forwardedComponent.attrs,
      componentStyle = forwardedComponent.componentStyle,
      defaultProps = forwardedComponent.defaultProps,
      foldedComponentIds = forwardedComponent.foldedComponentIds,
      shouldForwardProp = forwardedComponent.shouldForwardProp,
      styledComponentId = forwardedComponent.styledComponentId,
      target = forwardedComponent.target;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(styledComponentId); // NOTE: the non-hooks version only subscribes to this when !componentStyle.isStatic,
  // but that'd be against the rules-of-hooks. We could be naughty and do it anyway as it
  // should be an immutable value, but behave for now.

  var theme = determineTheme(props, Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext), defaultProps);

  var _useResolvedAttrs = useResolvedAttrs(theme || EMPTY_OBJECT, props, componentAttrs),
      context = _useResolvedAttrs[0],
      attrs = _useResolvedAttrs[1];

  var generatedClassName = useInjectedStyle(componentStyle, componentAttrs.length > 0, context,  false ? undefined : undefined);
  var refToForward = forwardedRef;
  var elementToBeCreated = attrs.$as || props.$as || attrs.as || props.as || target;
  var isTargetTag = isTag(elementToBeCreated);
  var computedProps = attrs !== props ? _extends({}, props, {}, attrs) : props;
  var propFilterFn = shouldForwardProp || isTargetTag && _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"];
  var propsForElement = {}; // eslint-disable-next-line guard-for-in

  for (var key in computedProps) {
    if (key[0] === '$' || key === 'as') continue;else if (key === 'forwardedAs') {
      propsForElement.as = computedProps[key];
    } else if (!propFilterFn || propFilterFn(key, _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])) {
      // Don't pass through non HTML tags through to HTML elements
      propsForElement[key] = computedProps[key];
    }
  }

  if (props.style && attrs.style !== props.style) {
    propsForElement.style = _extends({}, props.style, {}, attrs.style);
  }

  propsForElement.className = Array.prototype.concat(foldedComponentIds, styledComponentId, generatedClassName !== styledComponentId ? generatedClassName : null, props.className, attrs.className).filter(Boolean).join(' ');
  propsForElement.ref = refToForward;
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(elementToBeCreated, propsForElement);
}

function createStyledComponent(target, options, rules) {
  var isTargetStyledComp = isStyledComponent(target);
  var isCompositeComponent = !isTag(target);
  var _options$displayName = options.displayName,
      displayName = _options$displayName === void 0 ? generateDisplayName(target) : _options$displayName,
      _options$componentId = options.componentId,
      componentId = _options$componentId === void 0 ? generateId(options.displayName, options.parentComponentId) : _options$componentId,
      _options$attrs = options.attrs,
      attrs = _options$attrs === void 0 ? EMPTY_ARRAY : _options$attrs;
  var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + "-" + options.componentId : options.componentId || componentId; // fold the underlying StyledComponent attrs up (implicit extend)

  var finalAttrs = // $FlowFixMe
  isTargetStyledComp && target.attrs ? Array.prototype.concat(target.attrs, attrs).filter(Boolean) : attrs; // eslint-disable-next-line prefer-destructuring

  var shouldForwardProp = options.shouldForwardProp; // $FlowFixMe

  if (isTargetStyledComp && target.shouldForwardProp) {
    if (shouldForwardProp) {
      // compose nested shouldForwardProp calls
      shouldForwardProp = function shouldForwardProp(prop, filterFn) {
        return (// $FlowFixMe
          target.shouldForwardProp(prop, filterFn) && options.shouldForwardProp(prop, filterFn)
        );
      };
    } else {
      // eslint-disable-next-line prefer-destructuring
      shouldForwardProp = target.shouldForwardProp;
    }
  }

  var componentStyle = new ComponentStyle(isTargetStyledComp ? // fold the underlying StyledComponent rules up (implicit extend)
  // $FlowFixMe
  target.componentStyle.rules.concat(rules) : rules, styledComponentId);
  /**
   * forwardRef creates a new interim component, which we'll take advantage of
   * instead of extending ParentComponent to create _another_ interim class
   */

  var WrappedStyledComponent; // eslint-disable-next-line react-hooks/rules-of-hooks

  var forwardRef = function forwardRef(props, ref) {
    return useStyledComponentImpl(WrappedStyledComponent, props, ref);
  };

  forwardRef.displayName = displayName; // $FlowFixMe this is a forced cast to merge it StyledComponentWrapperProperties

  WrappedStyledComponent = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(forwardRef);
  WrappedStyledComponent.attrs = finalAttrs;
  WrappedStyledComponent.componentStyle = componentStyle;
  WrappedStyledComponent.displayName = displayName;
  WrappedStyledComponent.shouldForwardProp = shouldForwardProp; // this static is used to preserve the cascade of static classes for component selector
  // purposes; this is especially important with usage of the css prop

  WrappedStyledComponent.foldedComponentIds = isTargetStyledComp ? // $FlowFixMe
  Array.prototype.concat(target.foldedComponentIds, target.styledComponentId) : EMPTY_ARRAY;
  WrappedStyledComponent.styledComponentId = styledComponentId; // fold the underlying StyledComponent target up since we folded the styles

  WrappedStyledComponent.target = isTargetStyledComp ? // $FlowFixMe
  target.target : target; // $FlowFixMe

  WrappedStyledComponent.withComponent = function withComponent(tag) {
    var previousComponentId = options.componentId,
        optionsToCopy = _objectWithoutPropertiesLoose(options, ["componentId"]);

    var newComponentId = previousComponentId && previousComponentId + "-" + (isTag(tag) ? tag : escape(getComponentName(tag)));

    var newOptions = _extends({}, optionsToCopy, {
      attrs: finalAttrs,
      componentId: newComponentId
    });

    return createStyledComponent(tag, newOptions, rules);
  }; // $FlowFixMe


  Object.defineProperty(WrappedStyledComponent, 'defaultProps', {
    get: function get() {
      return this._foldedDefaultProps;
    },
    set: function set(obj) {
      // $FlowFixMe
      this._foldedDefaultProps = isTargetStyledComp ? mixinDeep({}, target.defaultProps, obj) : obj;
    }
  });

  if (false) {} // $FlowFixMe


  WrappedStyledComponent.toString = function () {
    return "." + WrappedStyledComponent.styledComponentId;
  };

  if (isCompositeComponent) {
    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(WrappedStyledComponent, target, {
      // all SC-specific things should not be hoisted
      attrs: true,
      componentStyle: true,
      displayName: true,
      foldedComponentIds: true,
      shouldForwardProp: true,
      self: true,
      styledComponentId: true,
      target: true,
      withComponent: true
    });
  }

  return WrappedStyledComponent;
} // 
// Thanks to ReactDOMFactories for this handy list!


var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'marker', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan']; // 

var styled = function styled(tag) {
  return constructWithOptions(createStyledComponent, tag);
}; // Shorthands for all valid HTML Elements


domElements.forEach(function (domElement) {
  styled[domElement] = styled(domElement);
}); // 

var GlobalStyle = /*#__PURE__*/function () {
  function GlobalStyle(rules, componentId) {
    this.rules = rules;
    this.componentId = componentId;
    this.isStatic = isStaticRules(rules);
  }

  var _proto = GlobalStyle.prototype;

  _proto.createStyles = function createStyles(instance, executionContext, styleSheet, stylis) {
    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var css = stylis(flatCSS.join(''), '');
    var id = this.componentId + instance; // NOTE: We use the id as a name as well, since these rules never change

    styleSheet.insertRules(id, id, css);
  };

  _proto.removeStyles = function removeStyles(instance, styleSheet) {
    styleSheet.clearRules(this.componentId + instance);
  };

  _proto.renderStyles = function renderStyles(instance, executionContext, styleSheet, stylis) {
    StyleSheet.registerId(this.componentId + instance); // NOTE: Remove old styles, then inject the new ones

    this.removeStyles(instance, styleSheet);
    this.createStyles(instance, executionContext, styleSheet, stylis);
  };

  return GlobalStyle;
}();

function createGlobalStyle(strings) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(void 0, [strings].concat(interpolations));
  var styledComponentId = "sc-global-" + generateComponentId(JSON.stringify(rules));
  var globalStyle = new GlobalStyle(rules, styledComponentId);

  if (false) {}

  function GlobalStyleComponent(props) {
    var styleSheet = useStyleSheet();
    var stylis = useStylis();
    var theme = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext);
    var instanceRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

    if (instanceRef.current === null) {
      instanceRef.current = styleSheet.allocateGSInstance(styledComponentId);
    }

    var instance = instanceRef.current;

    if (false) {}

    if (false) {}

    if (globalStyle.isStatic) {
      globalStyle.renderStyles(instance, STATIC_EXECUTION_CONTEXT, styleSheet, stylis);
    } else {
      var context = _extends({}, props, {
        theme: determineTheme(props, theme, GlobalStyleComponent.defaultProps)
      });

      globalStyle.renderStyles(instance, context, styleSheet, stylis);
    }

    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
      return function () {
        return globalStyle.removeStyles(instance, styleSheet);
      };
    }, EMPTY_ARRAY);
    return null;
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(GlobalStyleComponent);
} // 


function keyframes(strings) {
  /* Warning if you've used keyframes on React Native */
  if (false) {}

  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(void 0, [strings].concat(interpolations)).join('');
  var name = generateComponentId(rules);
  return new Keyframes(name, [rules, name, '@keyframes']);
}

var ServerStyleSheet = /*#__PURE__*/function () {
  function ServerStyleSheet() {
    var _this = this;

    this._emitSheetCSS = function () {
      var css = _this.instance.toString();

      var nonce = getNonce();
      var attrs = [nonce && "nonce=\"" + nonce + "\"", SC_ATTR + "=\"true\"", SC_ATTR_VERSION + "=\"" + SC_VERSION + "\""];
      var htmlAttr = attrs.filter(Boolean).join(' ');
      return "<style " + htmlAttr + ">" + css + "</style>";
    };

    this.getStyleTags = function () {
      if (_this.sealed) {
        return throwStyledComponentsError(2);
      }

      return _this._emitSheetCSS();
    };

    this.getStyleElement = function () {
      var _props;

      if (_this.sealed) {
        return throwStyledComponentsError(2);
      }

      var props = (_props = {}, _props[SC_ATTR] = '', _props[SC_ATTR_VERSION] = SC_VERSION, _props.dangerouslySetInnerHTML = {
        __html: _this.instance.toString()
      }, _props);
      var nonce = getNonce();

      if (nonce) {
        props.nonce = nonce;
      } // v4 returned an array for this fn, so we'll do the same for v5 for backward compat


      return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", _extends({}, props, {
        key: "sc-0-0"
      }))];
    };

    this.seal = function () {
      _this.sealed = true;
    };

    this.instance = new StyleSheet({
      isServer: true
    });
    this.sealed = false;
  }

  var _proto = ServerStyleSheet.prototype;

  _proto.collectStyles = function collectStyles(children) {
    if (this.sealed) {
      return throwStyledComponentsError(2);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyleSheetManager, {
      sheet: this.instance
    }, children);
  }; // eslint-disable-next-line consistent-return


  _proto.interleaveWithNodeStream = function interleaveWithNodeStream(input) {
    {
      return throwStyledComponentsError(3);
    }
  };

  return ServerStyleSheet;
}(); // export default <Config: { theme?: any }, Instance>(
//  Component: AbstractComponent<Config, Instance>
// ): AbstractComponent<$Diff<Config, { theme?: any }> & { theme?: any }, Instance>
//
// but the old build system tooling doesn't support the syntax


var withTheme = function withTheme(Component) {
  // $FlowFixMe This should be React.forwardRef<Config, Instance>
  var WithTheme = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (props, ref) {
    var theme = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext); // $FlowFixMe defaultProps isn't declared so it can be inferrable

    var defaultProps = Component.defaultProps;
    var themeProp = determineTheme(props, theme, defaultProps);

    if (false) {}

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, _extends({}, props, {
      theme: themeProp,
      ref: ref
    }));
  });
  hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(WithTheme, Component);
  WithTheme.displayName = "WithTheme(" + getComponentName(Component) + ")";
  return WithTheme;
}; // 


var useTheme = function useTheme() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext);
}; // 


var __PRIVATE__ = {
  StyleSheet: StyleSheet,
  masterSheet: masterSheet
}; // 

/* Define bundle version for export */

var version = "5.1.1";
/* Warning if you've imported this file on React Native */

if (false) {}
/* Warning if there are several instances of styled-components */


if (false) {}

/* harmony default export */ __webpack_exports__["b"] = (styled);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(49)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(50);
} else {}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(21);
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _objectSpread2; });

// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
    return;
  }

  if (false) {}

  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(46);
} else {}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);


function delayP(ms, val) {
  if (val === void 0) {
    val = true;
  }

  var timeoutId;
  var promise = new Promise(function (resolve) {
    timeoutId = setTimeout(resolve, ms, val);
  });

  promise[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__[/* CANCEL */ "a"]] = function () {
    clearTimeout(timeoutId);
  };

  return promise;
}

/* harmony default export */ __webpack_exports__["a"] = (delayP);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(8);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js + 1 modules
var redux_saga_effects_npm_proxy_esm = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/typesafe-actions/dist/typesafe-actions.umd.production.js
var typesafe_actions_umd_production = __webpack_require__(5);

// EXTERNAL MODULE: ./src/store/download/actionCreator.ts
var actionCreator = __webpack_require__(6);

// EXTERNAL MODULE: ./src/types.ts
var types = __webpack_require__(3);

// EXTERNAL MODULE: ./src/gmInterface/gmInterface.ts
var gmInterface = __webpack_require__(11);

// CONCATENATED MODULE: ./src/services/api.ts
function getDownloadUrl(path){return new Promise(function(resolve,reject){gmInterface["a" /* GM */].xmlHttpRequest({url:'http://pcs.baidu.com/rest/2.0/pcs/file?app_id=778750&ver=2.0&method=locatedownload&path='+encodeURIComponent(path),method:'GET',responseType:'json',headers:{'User-Agent':types["a" /* HeaderTypes */].userAgent},onload:function onload(r){if(r.response.client_ip){return resolve(r);}else{// Todo return error message
return reject(r);}}});});}// export async function downloadItem(arr: IItem) {
//   // Remove Item if target still in stop cluster
//   if (InstanceForSystem.stoppedItems[arr.fs_id]) {
//     delete InstanceForSystem.stoppedItems[arr.fs_id]
//   }
//
//   if (!InstanceForSystem.downloadable) {
//     arr.status = StatusTypes.inQueued
//     renderOperationElement(arr)
//     return
//   }
//
//   if (arr.status === StatusTypes.error) {
//     // re-getting url if it invalided
//     await getDownloadUrl(arr)
//   }
//
//   arr.status = StatusTypes.downloading
//
//   InstanceForSystem.downloadingItems[arr.fs_id] = arr
//   const { url, server_filename } = arr
//   let loaded = 0
//   let currentEvent: ProgressEvent | undefined = undefined
//   const percentOverlay = document.querySelector(`div[data-label="${arr.fs_id}"]`) as HTMLDivElement
//   const progressRadial = percentOverlay.parentElement as HTMLDivElement
//   const speedOverlay = percentOverlay.closest('tr')!.querySelector('td[data-label="speed"]') as HTMLTableDataCellElement
//
//   arr.request = GM.download({
//     url,
//     name: server_filename,
//     saveAs: true,
//     headers: {
//       Host: 'qdall01.baidupcs.com',
//       Accept: '*/*',
//       'User-Agent': HeaderTypes.userAgent,
//       'Accept-Encoding': 'identity',
//       'Accept-Language': 'ja-JP',
//       'Accept-Charset': '*',
//     },
//     onprogress: (e: ProgressEvent) => {
//       currentEvent = e
//
//       const percent = Math.round((currentEvent.loaded * 100) / currentEvent.total)
//       progressRadial.className = `progress-radial progress-${percent}`
//       percentOverlay.innerText = `${percent}%`
//     },
//     onload: () => {
//       arr.progress_loader_id && clearInterval(arr.progress_loader_id)
//       progressRadial.className = 'progress-radial progress-100'
//       percentOverlay.innerText = '100%'
//       speedOverlay.innerText = ''
//       InstanceForSystem.completedItems[arr.fs_id] = arr
//       delete InstanceForSystem.downloadingItems[arr.fs_id]
//
//       GM.notification({
//         text: '下载完成',
//         title: server_filename,
//         highlight: true,
//       })
//       arr.status = StatusTypes.completed
//       renderOperationElement(arr)
//
//       addNextDownloadRequest()
//     },
//     onerror: (e) => {
//       arr.progress_loader_id && clearInterval(arr.progress_loader_id)
//       progressRadial.className = 'progress-radial progress-0'
//       percentOverlay.innerHTML = `<span style="color: red">error</span>`
//       speedOverlay.innerText = ''
//       InstanceForSystem.stoppedItems[arr.fs_id] = arr
//       delete InstanceForSystem.downloadingItems[arr.fs_id]
//       arr.status = StatusTypes.error
//       renderOperationElement(arr)
//       // eslint-disable-next-line no-console
//       console.error('（´皿｀；）出错了， 可能是URL有效期到了，需要重新点击下载按扭。如果重试还不行就重新登录', e)
//
//       addNextDownloadRequest()
//     },
//   })
//   window.requestAnimationFrame(() => {
//     renderOperationElement(arr)
//   })
//
//   arr.progress_loader_id = window.setInterval(() => {
//     if (currentEvent) {
//       const speed = currentEvent.loaded - loaded
//       loaded = currentEvent.loaded
//       speedOverlay.innerText = `${formatByte(speed)}/s`
//     }
//   }, 1000)
// }
function addNextDownloadRequest(){// for (const fs_id in InstanceForSystem.itemsFromQueue) {
//   // downloadItem(InstanceForSystem.allDownloads[fs_id])
// }
}
// EXTERNAL MODULE: ./src/store/index.ts + 6 modules
var store = __webpack_require__(9);

// EXTERNAL MODULE: ./src/store/Interface/index.ts
var Interface = __webpack_require__(14);

// CONCATENATED MODULE: ./src/store/download/saga.ts
var _marked=/*#__PURE__*/regenerator_default.a.mark(requestDownloadURL),_marked2=/*#__PURE__*/regenerator_default.a.mark(requestDownloadItem),_marked3=/*#__PURE__*/regenerator_default.a.mark(requestChange),_marked4=/*#__PURE__*/regenerator_default.a.mark(onChangeEventSuccess);function requestDownloadURL(action){var item,res;return regenerator_default.a.wrap(function requestDownloadURL$(_context){while(1){switch(_context.prev=_context.next){case 0:item=action.payload;_context.prev=1;_context.next=4;return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(getDownloadUrl,item.path);case 4:res=_context.sent;item.url=res.response.urls[0].url+'&filename='+encodeURIComponent(item.serverFilename);_context.next=8;return Object(redux_saga_effects_npm_proxy_esm["e" /* put */])(actionCreator["a" /* default */].downloadURL.success(item));case 8:_context.next=10;return Object(redux_saga_effects_npm_proxy_esm["e" /* put */])(actionCreator["a" /* default */].downloadItem.request(item));case 10:_context.next=16;break;case 12:_context.prev=12;_context.t0=_context["catch"](1);_context.next=16;return Object(redux_saga_effects_npm_proxy_esm["e" /* put */])(actionCreator["a" /* default */].downloadURL.failure(_context.t0));case 16:case"end":return _context.stop();}}},_marked,null,[[1,12]]);}function requestDownloadItem(action){var item,progress,_storeSelector,downloadable,url,serverFilename,currentEvent,loaded;return regenerator_default.a.wrap(function requestDownloadItem$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:item=action.payload;progress=item.progress;_context2.t0=store["b" /* storeSelector */];_context2.next=5;return Object(redux_saga_effects_npm_proxy_esm["f" /* select */])();case 5:_context2.t1=_context2.sent;_storeSelector=(0,_context2.t0)(_context2.t1);downloadable=_storeSelector.interface.downloadable;_context2.prev=8;if(downloadable){_context2.next=12;break;}progress.status=types["b" /* StatusTypes */].inQueued;return _context2.abrupt("return");case 12:if(!(progress.status===types["b" /* StatusTypes */].error)){_context2.next=16;break;}_context2.next=15;return Object(redux_saga_effects_npm_proxy_esm["e" /* put */])(actionCreator["a" /* default */].downloadURL.request(item));case 15:return _context2.abrupt("return");case 16:progress.status=types["b" /* StatusTypes */].downloading;url=item.url,serverFilename=item.serverFilename;currentEvent=undefined;progress.percentCount=0;progress.speedOverlay=0;progress.request=gmInterface["a" /* GM */].download({url:url,name:serverFilename,saveAs:true,headers:{Host:'qdall01.baidupcs.com',Accept:'*/*','User-Agent':types["a" /* HeaderTypes */].userAgent,'Accept-Encoding':'identity','Accept-Language':'ja-JP','Accept-Charset':'*'},onprogress:function onprogress(e){currentEvent=e;progress.percentCount=Math.round(currentEvent.loaded*100/currentEvent.total);},onload:function onload(){progress.intervalId&&clearInterval(progress.intervalId);progress.percentCount=100;progress.speedOverlay=0;progress.status=types["b" /* StatusTypes */].completed;gmInterface["a" /* GM */].notification({text:'下载完成',title:serverFilename,highlight:true});// addNextDownloadRequest()
},onerror:function onerror(e){progress.intervalId&&clearInterval(progress.intervalId);progress.percentCount=0;progress.speedOverlay=0;progress.status=types["b" /* StatusTypes */].error;// eslint-disable-next-line no-console
console.error('（´皿｀；）出错了， 可能是URL有效期到了，需要重新点击下载按扭。如果重试还不行就重新登录',e);// addNextDownloadRequest()
}});loaded=0;progress.intervalId=window.setInterval(function(){if(currentEvent){var speed=currentEvent.loaded-loaded;loaded=currentEvent.loaded;progress.speedOverlay=speed;}},1000);_context2.next=31;break;case 26:_context2.prev=26;_context2.t2=_context2["catch"](8);console.error(_context2.t2);_context2.next=31;return Object(redux_saga_effects_npm_proxy_esm["e" /* put */])(actionCreator["a" /* default */].downloadItem.failure(_context2.t2));case 31:case"end":return _context2.stop();}}},_marked2,null,[[8,26]]);}function requestChange(action){return regenerator_default.a.wrap(function requestChange$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.prev=0;_context3.next=3;return actionCreator["a" /* default */].change.request;case 3:_context3.next=5;return Object(redux_saga_effects_npm_proxy_esm["e" /* put */])(actionCreator["a" /* default */].change.success(action.payload));case 5:_context3.next=11;break;case 7:_context3.prev=7;_context3.t0=_context3["catch"](0);_context3.next=11;return Object(redux_saga_effects_npm_proxy_esm["e" /* put */])(actionCreator["a" /* default */].change.failure(_context3.t0));case 11:case"end":return _context3.stop();}}},_marked3,null,[[0,7]]);}function onChangeEventSuccess(action){var _storeSelector2,download,maxDownloadCount,keys,_i,_keys,key,downloadable;return regenerator_default.a.wrap(function onChangeEventSuccess$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.t0=store["b" /* storeSelector */];_context4.next=3;return Object(redux_saga_effects_npm_proxy_esm["f" /* select */])();case 3:_context4.t1=_context4.sent;_storeSelector2=(0,_context4.t0)(_context4.t1);download=_storeSelector2.download;maxDownloadCount=_storeSelector2.interface.maxDownloadCount;keys=Object.keys(action.payload);_i=0,_keys=keys;case 9:if(!(_i<_keys.length)){_context4.next=21;break;}key=_keys[_i];_context4.t2=key;_context4.next=_context4.t2==='allDownloads'?14:18;break;case 14:downloadable=Object.values(download.allDownloads).filter(function(item){return item.progress.status===types["b" /* StatusTypes */].downloading;}).length<maxDownloadCount;_context4.next=17;return Object(redux_saga_effects_npm_proxy_esm["e" /* put */])(Interface["a" /* interfaceActionCreator */].change({downloadable:downloadable}));case 17:return _context4.abrupt("break",18);case 18:_i++;_context4.next=9;break;case 21:case"end":return _context4.stop();}}},_marked4);}/* harmony default export */ var saga = __webpack_exports__["a"] = ([Object(redux_saga_effects_npm_proxy_esm["h" /* takeEvery */])(Object(typesafe_actions_umd_production["getType"])(actionCreator["a" /* default */].downloadURL.request),requestDownloadURL),Object(redux_saga_effects_npm_proxy_esm["h" /* takeEvery */])(Object(typesafe_actions_umd_production["getType"])(actionCreator["a" /* default */].downloadItem.request),requestDownloadItem),Object(redux_saga_effects_npm_proxy_esm["h" /* takeEvery */])(Object(typesafe_actions_umd_production["getType"])(actionCreator["a" /* default */].change.request),requestChange),Object(redux_saga_effects_npm_proxy_esm["h" /* takeEvery */])(Object(typesafe_actions_umd_production["getType"])(actionCreator["a" /* default */].change.success),onChangeEventSuccess)]);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _toConsumableArray; });

// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./src/utils/nodeEnvIs/index.ts
function nodeEnvIs(expectedEnv){var currentEnv="production";return!!(currentEnv&&currentEnv.toLowerCase()===expectedEnv.toLowerCase());}/* harmony default export */ var utils_nodeEnvIs = (nodeEnvIs);
// CONCATENATED MODULE: ./src/utils/nodeEnvIs/devNodeEnv/index.ts
var devNodeEnv=utils_nodeEnvIs('development');/* harmony default export */ var nodeEnvIs_devNodeEnv = __webpack_exports__["a"] = (devNodeEnv);

/***/ }),
/* 30 */
/***/ (function(module) {

module.exports = JSON.parse("{\"a\":\"baidu-pan-downloader\"}");

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* global window */

var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(54), __webpack_require__(33)(module)))

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ var memoize_browser_esm = (memoize);
// CONCATENATED MODULE: ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = memoize_browser_esm(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);
/* harmony default export */ var is_prop_valid_browser_esm = __webpack_exports__["a"] = (index);

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__(10);

// EXTERNAL MODULE: ./src/store/Interface/index.ts
var Interface = __webpack_require__(14);

// EXTERNAL MODULE: ./src/services/InstaceForSystem.ts
var InstaceForSystem = __webpack_require__(13);

// EXTERNAL MODULE: ./src/types.ts
var types = __webpack_require__(3);

// EXTERNAL MODULE: ./src/store/download/index.ts + 2 modules
var store_download = __webpack_require__(15);

// CONCATENATED MODULE: ./src/containers/FloatingButtons.tsx
var FloatingButtons_mapStoreToProps=function mapStoreToProps(store){return{autoStart:store.interface.autoStart,downloadable:store.interface.downloadable,allDownloads:store.download.allDownloads};};var mapActionToProps={changeConfig:Interface["a" /* interfaceActionCreator */].change,updateDownloadItem:store_download["a" /* downloadActionCreator */].change.request,download:store_download["a" /* downloadActionCreator */].downloadURL.request};var FloatingButtons_FloatingButtons=function FloatingButtons(_ref){var changeConfig=_ref.changeConfig,autoStart=_ref.autoStart,downloadable=_ref.downloadable,allDownloads=_ref.allDownloads,updateDownloadItem=_ref.updateDownloadItem,download=_ref.download;return/*#__PURE__*/react_default.a.createElement("div",{id:"container-floating"},/*#__PURE__*/react_default.a.createElement("div",{id:"config-button",className:"nd1 nds","data-toggle":"tooltip","data-placement":"left",onClick:function onClick(){changeConfig({configModalOpen:true});}},/*#__PURE__*/react_default.a.createElement("img",{alt:'bt_compose2_1x',className:"reminder",src:"https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/bt_compose2_1x.png"})),/*#__PURE__*/react_default.a.createElement("div",{id:"floating-button","data-toggle":"tooltip","data-placement":"left","data-original-title":"Create",onClick:function onClick(){var selectedList=InstaceForSystem["a" /* InstanceForSystem */].selectedList;selectedList.forEach(function(item){if(typeof allDownloads[item.fsId]==='undefined'){item.progress.status=types["b" /* StatusTypes */].inQueued;allDownloads[item.fsId]=item;if(downloadable&&autoStart){download(item);}}});updateDownloadItem({allDownloads:allDownloads});changeConfig({downloadModalOpen:true});}},/*#__PURE__*/react_default.a.createElement("p",{className:"plus"},"+"),/*#__PURE__*/react_default.a.createElement("img",{alt:'bt_compose2_1x',className:"edit",src:"//ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/ic_reminders_speeddial_white_24dp.png"})));};/* harmony default export */ var containers_FloatingButtons = (Object(es["b" /* connect */])(FloatingButtons_mapStoreToProps,mapActionToProps)(FloatingButtons_FloatingButtons));
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(20);

// CONCATENATED MODULE: ./src/components/Modal.tsx
function _templateObject(){var data=Object(taggedTemplateLiteral["a" /* default */])([""]);_templateObject=function _templateObject(){return data;};return data;}var Wrapper=styled_components_browser_esm["b" /* default */].div(_templateObject());function Modal(_ref){var closeButton=_ref.closeButton,open=_ref.open,close=_ref.close,children=_ref.children,rest=_objectWithoutProperties(_ref,["closeButton","open","close","children"]);var closeModal=function closeModal(){typeof close==='function'&&close();};return/*#__PURE__*/react_default.a.createElement(Wrapper,Object.assign({className:"modal-wrapper".concat(open?' open':'')},rest),/*#__PURE__*/react_default.a.createElement("div",{className:"modal-overlay",onClick:closeModal}),/*#__PURE__*/react_default.a.createElement("div",{className:"modal-window"},/*#__PURE__*/react_default.a.createElement("div",{className:"modal-content"},children),closeButton&&/*#__PURE__*/react_default.a.createElement("span",{className:"modal-close",onClick:closeModal},"\xD7")));}
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(18);

// EXTERNAL MODULE: ./src/store/index.ts + 6 modules
var src_store = __webpack_require__(9);

// CONCATENATED MODULE: ./src/containers/DownloadList/Operation.tsx
var Operation_mapStoreToProps=function mapStoreToProps(store,props){var _store$download$allDo,_store$download$allDo2;return{status:(_store$download$allDo=store.download.allDownloads[props.fsId])===null||_store$download$allDo===void 0?void 0:_store$download$allDo.progress.status,request:(_store$download$allDo2=store.download.allDownloads[props.fsId])===null||_store$download$allDo2===void 0?void 0:_store$download$allDo2.progress.request};};var Operation_mapActionsToProps={download:store_download["a" /* downloadActionCreator */].downloadURL.request,updateDownloadList:store_download["a" /* downloadActionCreator */].change.request};function Operation(_ref){var fsId=_ref.fsId,status=_ref.status,request=_ref.request,download=_ref.download,updateDownloadList=_ref.updateDownloadList;var stopItem=function stopItem(){var _store$getState=src_store["a" /* store */].getState(),allDownloads=_store$getState.download.allDownloads;var targetItem=allDownloads[fsId];if(targetItem){var _targetItem$progress$;if(status===types["b" /* StatusTypes */].downloading){if(!window.confirm('停止后将需要重新下载， 确认吗？')){return false;}}targetItem.progress.status=types["b" /* StatusTypes */].stopped;((_targetItem$progress$=targetItem.progress.request)===null||_targetItem$progress$===void 0?void 0:_targetItem$progress$.abort)&&targetItem.progress.request.abort();clearInterval(targetItem.progress.intervalId);// addNextDownloadRequest()
return false;}};var deleteItem=function deleteItem(){(request===null||request===void 0?void 0:request.abort)&&request.abort();var _store$getState2=src_store["a" /* store */].getState(),allDownloads=_store$getState2.download.allDownloads;delete allDownloads[fsId];updateDownloadList(allDownloads);// addNextDownloadRequest()
};return/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null,/*#__PURE__*/react_default.a.createElement("svg",{id:"start-item-".concat(fsId),className:"".concat([types["b" /* StatusTypes */].downloading,types["b" /* StatusTypes */].inQueued].includes(status)?'disabled':''),xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",onClick:function onClick(){var _store$getState3=src_store["a" /* store */].getState(),allDownloads=_store$getState3.download.allDownloads;download(allDownloads[fsId]);}},/*#__PURE__*/react_default.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),/*#__PURE__*/react_default.a.createElement("path",{d:"M8 5v14l11-7z"})),/*#__PURE__*/react_default.a.createElement("svg",{id:"stop-item-".concat(fsId),className:"".concat([types["b" /* StatusTypes */].downloading,types["b" /* StatusTypes */].inQueued].includes(status)?'':'disabled'),xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",onClick:stopItem},/*#__PURE__*/react_default.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),/*#__PURE__*/react_default.a.createElement("path",{d:"M6 6h12v12H6z"})),/*#__PURE__*/react_default.a.createElement("svg",{id:"delete-item-".concat(fsId),className:"delete-item",style:{position:'absolute',right:5},xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",onClick:deleteItem},/*#__PURE__*/react_default.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),/*#__PURE__*/react_default.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})));}/* harmony default export */ var DownloadList_Operation = (Object(es["b" /* connect */])(Operation_mapStoreToProps,Operation_mapActionsToProps)(Operation));
// CONCATENATED MODULE: ./src/containers/DownloadList/ProgressStatus.tsx
var ProgressStatus_mapStoreToProps=function mapStoreToProps(store,props){var _store$download$allDo;return{percentCount:(_store$download$allDo=store.download.allDownloads[props.fsId])===null||_store$download$allDo===void 0?void 0:_store$download$allDo.progress.percentCount};};function ProgressStatus(_ref){var percentCount=_ref.percentCount;return/*#__PURE__*/react_default.a.createElement("div",{className:"progress-radial progress-".concat(percentCount)},/*#__PURE__*/react_default.a.createElement("div",{className:"overlay"},percentCount,"%"));}/* harmony default export */ var DownloadList_ProgressStatus = (Object(es["b" /* connect */])(ProgressStatus_mapStoreToProps)(ProgressStatus));
// CONCATENATED MODULE: ./src/containers/DownloadList/SpeedStatus.tsx
var SpeedStatus_mapStoreToProps=function mapStoreToProps(store,props){var _store$download$allDo;return{speedOverlay:(_store$download$allDo=store.download.allDownloads[props.fsId])===null||_store$download$allDo===void 0?void 0:_store$download$allDo.progress.speedOverlay};};function SpeedStatus(_ref){var speedOverlay=_ref.speedOverlay;return/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null,Object(utils["b" /* formatByte */])(speedOverlay)," /s");}/* harmony default export */ var DownloadList_SpeedStatus = (Object(es["b" /* connect */])(SpeedStatus_mapStoreToProps)(SpeedStatus));
// CONCATENATED MODULE: ./src/containers/DownloadList/Item.tsx
var Item_mapStoreToProps=function mapStoreToProps(store,props){var _store$download$allDo,_store$download$allDo2;return{serverFilename:(_store$download$allDo=store.download.allDownloads[props.fsId])===null||_store$download$allDo===void 0?void 0:_store$download$allDo.serverFilename,size:(_store$download$allDo2=store.download.allDownloads[props.fsId])===null||_store$download$allDo2===void 0?void 0:_store$download$allDo2.size};};function Item(_ref){var fsId=_ref.fsId,serverFilename=_ref.serverFilename,size=_ref.size;return/*#__PURE__*/react_default.a.createElement("tr",{id:'row-'+fsId},/*#__PURE__*/react_default.a.createElement("td",{"data-label":"filename"},serverFilename),/*#__PURE__*/react_default.a.createElement("td",{"data-label":"download"},/*#__PURE__*/react_default.a.createElement("div",{className:"wrap"},/*#__PURE__*/react_default.a.createElement(DownloadList_ProgressStatus,{fsId:fsId}))),/*#__PURE__*/react_default.a.createElement("td",{"data-label":"url"},Object(utils["b" /* formatByte */])(size)),/*#__PURE__*/react_default.a.createElement("td",{"data-label":"speed"},/*#__PURE__*/react_default.a.createElement(DownloadList_SpeedStatus,{fsId:fsId})),/*#__PURE__*/react_default.a.createElement("td",{"data-label":"operation"},/*#__PURE__*/react_default.a.createElement(DownloadList_Operation,{fsId:fsId})));}/* harmony default export */ var DownloadList_Item = (Object(es["b" /* connect */])(Item_mapStoreToProps)(Item));
// CONCATENATED MODULE: ./node_modules/reselect/es/index.js
function defaultEqualityCheck(a, b) {
  return a === b;
}

function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  } // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.


  var length = prev.length;

  for (var i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;
  var lastArgs = null;
  var lastResult = null; // we reference arguments instead of spreading them for performance reasons

  return function () {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      // apply arguments instead of spreading for performance.
      lastResult = func.apply(null, arguments);
    }

    lastArgs = arguments;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptions[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);
    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++; // apply arguments instead of spreading for performance.

      return resultFunc.apply(null, arguments);
    }].concat(memoizeOptions)); // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.

    var selector = memoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        params.push(dependencies[i].apply(null, arguments));
      } // apply arguments instead of spreading for performance.


      return memoizedResultFunc.apply(null, params);
    });
    selector.resultFunc = resultFunc;
    selector.dependencies = dependencies;

    selector.recomputations = function () {
      return recomputations;
    };

    selector.resetRecomputations = function () {
      return recomputations = 0;
    };

    return selector;
  };
}
var createSelector = createSelectorCreator(defaultMemoize);
function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }

  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}
// CONCATENATED MODULE: ./src/containers/DownloadList/index.tsx
var DownloadList_mapStoreToProps=function mapStoreToProps(store){return{fsIdList:createSelector(function(store){return store.download.allDownloads;},function(allDownloads){return Object.keys(allDownloads);})(store),downloadModalOpen:store.interface.downloadModalOpen};};var DownloadList_mapActionsToProps=function mapActionsToProps(dispatch){return{closeModal:function closeModal(){dispatch(Interface["a" /* interfaceActionCreator */].change({downloadModalOpen:false}));}};};function DownloadList(_ref){var fsIdList=_ref.fsIdList,downloadModalOpen=_ref.downloadModalOpen,closeModal=_ref.closeModal;console.log(fsIdList,downloadModalOpen);return/*#__PURE__*/react_default.a.createElement(Modal,{open:downloadModalOpen,close:closeModal},/*#__PURE__*/react_default.a.createElement("table",null,/*#__PURE__*/react_default.a.createElement("thead",null,/*#__PURE__*/react_default.a.createElement("tr",null,/*#__PURE__*/react_default.a.createElement("th",{scope:"col"},"\u6587\u4EF6"),/*#__PURE__*/react_default.a.createElement("th",{scope:"col"},"\u8FDB\u5EA6"),/*#__PURE__*/react_default.a.createElement("th",{scope:"col"},"\u5927\u5C0F"),/*#__PURE__*/react_default.a.createElement("th",{scope:"col"},"\u901F\u5EA6"),/*#__PURE__*/react_default.a.createElement("th",{scope:"col"},"\u64CD\u4F5C"))),/*#__PURE__*/react_default.a.createElement("tbody",{id:"popup-tbody"},fsIdList.map(function(fsId,key){return/*#__PURE__*/react_default.a.createElement(DownloadList_Item,{key:key,fsId:fsId});}))));}var DL=react_default.a.memo(DownloadList,function(prevProps,nextProps){return Object(es["c" /* shallowEqual */])(prevProps.fsIdList,nextProps.fsIdList)&&Object(es["c" /* shallowEqual */])(prevProps.downloadModalOpen,nextProps.downloadModalOpen);});/* harmony default export */ var containers_DownloadList = (Object(es["b" /* connect */])(DownloadList_mapStoreToProps,DownloadList_mapActionsToProps)(DL));
// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 5 modules
var toConsumableArray = __webpack_require__(28);

// CONCATENATED MODULE: ./src/components/Form.ts
function _templateObject2(){var data=Object(taggedTemplateLiteral["a" /* default */])(["\n  text-align: left;\n  margin: 10px;\n  border: 1px solid;\n  border-radius: 3px;\n  padding: 5px;\n  font-family: sans-serif;\n  font-size: 13px;\n  letter-spacing: 1px;\n  & * {\n    box-sizing: border-box;\n  }\n\n  input[type='text'],\n  input[type='email'],\n  input[type='url'],\n  input[type='password'],\n  textarea {\n    width: 100%;\n    border-top: 1px solid #ccc;\n    border-left: 1px solid #ccc;\n    border-right: 1px solid #eee;\n    border-bottom: 1px solid #eee;\n  }\n  input[type='text'],\n  input[type='email'],\n  input[type='url'],\n  input[type='password'] {\n    width: 50%;\n  }\n  input[type='checkbox'] {\n    transform: scale(1.2);\n  }\n  select {\n    min-width: 50px;\n  }\n  input[type='text']:focus,\n  input[type='email']:focus,\n  input[type='url']:focus,\n  input[type='password']:focus,\n  textarea:focus {\n    outline: 0;\n    border-color: #4697e4;\n  }\n"]);_templateObject2=function _templateObject2(){return data;};return data;}function Form_templateObject(){var data=Object(taggedTemplateLiteral["a" /* default */])(["\n  clear: both;\n  overflow: hidden;\n  padding: 1px;\n  margin: 0 0 10px 0;\n  border: 0;\n\n  > label,\n  legend {\n    width: 25%;\n    float: left;\n    padding-right: 10px;\n    font-size: 90%;\n    color: #000;\n  }\n  & > *:nth-child(2) {\n    width: 75%;\n    float: right;\n  }\n  @media (min-width: 1200px) {\n    & > label,\n    legend {\n      text-align: right;\n    }\n  }\n\n  @media (max-width: 600px) {\n    margin: 0 0 15px 0;\n    & > label,\n    legend {\n      width: 100%;\n      float: none;\n      margin: 0 0 5px 0;\n    }\n    & > *:nth-child(2) {\n      width: 100%;\n      float: none;\n    }\n    input[type='text'],\n    input[type='email'],\n    input[type='url'],\n    input[type='password'],\n    textarea,\n    select {\n      width: 100%;\n    }\n  }\n"]);Form_templateObject=function _templateObject(){return data;};return data;}var FormField=styled_components_browser_esm["b" /* default */].fieldset(Form_templateObject());var Form=styled_components_browser_esm["b" /* default */].form(_templateObject2());
// CONCATENATED MODULE: ./src/containers/Preferences.tsx
// const CustomModal = styled(Modal)`
//   .modal-window {
//     max-width: 500px;
//   }
// `
var Preferences_mapStoreToProps=function mapStoreToProps(store){return{configModalOpen:store.interface.configModalOpen,autoStart:store.interface.autoStart,downloadable:store.interface.downloadable,maxDownloadCount:store.interface.maxDownloadCount};};var Preferences_mapActionsToProps=function mapActionsToProps(dispatch){return{closeModal:function closeModal(){return dispatch(Interface["a" /* interfaceActionCreator */].change({configModalOpen:false}));},setAutoStart:function setAutoStart(e){dispatch(Interface["a" /* interfaceActionCreator */].change({autoStart:e.target.checked}));},setMaxDownloadCount:function setMaxDownloadCount(e){var count=parseInt(e.target.value);dispatch(Interface["a" /* interfaceActionCreator */].change({maxDownloadCount:count}));}};};function Preferences(_ref){var configModalOpen=_ref.configModalOpen,autoStart=_ref.autoStart,maxDownloadCount=_ref.maxDownloadCount,closeModal=_ref.closeModal,setAutoStart=_ref.setAutoStart,setMaxDownloadCount=_ref.setMaxDownloadCount;return/*#__PURE__*/react_default.a.createElement(Modal,{open:configModalOpen,close:closeModal},/*#__PURE__*/react_default.a.createElement(Form,{action:"#"},/*#__PURE__*/react_default.a.createElement("header",{style:{margin:'0 0 20px 0'}},/*#__PURE__*/react_default.a.createElement("h2",{style:{margin:'0 0 5px 0'}},"\u4E0B\u8F7D\u8BBE\u7F6E"),/*#__PURE__*/react_default.a.createElement("div",{style:{fontSize:'90%',color:'#999'}},"\u5982\u679C\u4E0B\u8F7D\u7ECF\u5E38\u51FA\u9519\uFF0C\u5EFA\u8BAE\u5C06\u4E0B\u8F7D\u6570\u8BBE\u7F6E\u4E3A1")),/*#__PURE__*/react_default.a.createElement(FormField,null,/*#__PURE__*/react_default.a.createElement("label",{htmlFor:'auto-start'},"\u81EA\u52A8\u4E0B\u8F7D"),/*#__PURE__*/react_default.a.createElement("div",null,/*#__PURE__*/react_default.a.createElement("input",{type:"checkbox",name:"checkbox",value:"true",checked:autoStart,id:"auto-start",tabIndex:1,onChange:setAutoStart}))),/*#__PURE__*/react_default.a.createElement(FormField,null,/*#__PURE__*/react_default.a.createElement("legend",null,"\u6700\u5927\u540C\u65F6\u4E0B\u8F7D\u6570"),/*#__PURE__*/react_default.a.createElement("div",null,/*#__PURE__*/react_default.a.createElement("select",{defaultValue:maxDownloadCount,id:"max-download-count",className:"field select medium",tabIndex:2,onChange:setMaxDownloadCount},Object(toConsumableArray["a" /* default */])(Array(InstaceForSystem["a" /* InstanceForSystem */].maxDownloadCount).keys()).map(function(i){return++i;}).map(function(i,key){return/*#__PURE__*/react_default.a.createElement("option",{key:key,value:i},i);}))))));}/* harmony default export */ var containers_Preferences = (Object(es["b" /* connect */])(Preferences_mapStoreToProps,Preferences_mapActionsToProps)(Preferences));
// EXTERNAL MODULE: ./src/gmInterface/gmInterface.ts
var gmInterface = __webpack_require__(11);

// CONCATENATED MODULE: ./src/services/windowInstance.ts
window.onunload=function(){gmInterface["a" /* GM */].setValue(types["c" /* ValueTypes */].items,src_store["a" /* store */].getState().download.allDownloads);InstaceForSystem["a" /* InstanceForSystem */].stopAll();};window.onbeforeunload=function(e){var allDownloads=src_store["a" /* store */].getState().download.allDownloads;if(Object.values(allDownloads).some(function(item){return item.progress.status===types["b" /* StatusTypes */].downloading;})){e.preventDefault();e.returnValue='有未完成的下载任务， 确认关闭吗?';}};
// CONCATENATED MODULE: ./src/App.tsx
var App_App=function App(){return/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null,/*#__PURE__*/react_default.a.createElement(containers_DownloadList,null),/*#__PURE__*/react_default.a.createElement(containers_Preferences,null),/*#__PURE__*/react_default.a.createElement(containers_FloatingButtons,null));};/* harmony default export */ var src_App = __webpack_exports__["default"] = (App_App);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalStyle; });
/* harmony import */ var C_Users_Dotennin_project_baiduPanDownloader_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
function _templateObject(){var data=Object(C_Users_Dotennin_project_baiduPanDownloader_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n  @import url(https://fonts.googleapis.com/css?family=Noto+Sans);\n  body {\n    padding: 30px 0;\n    background-color: #2f3439;\n    font-family: \"Noto Sans\", sans-serif;\n  }\n\n  .wrap {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n  }\n\n  /* -------------------------------------\n   * Bar container\n   * ------------------------------------- */\n  .progress-radial {\n    float: left;\n    position: relative;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    border: 2px solid #2f3439;\n    background-color: tomato;\n    transition: all 1s ease-out;\n    cursor: pointer;\n  }\n  .progress-radial:hover {\n    background: #2e6da4;\n  }\n\n  /* -------------------------------------\n   * Optional centered circle w/text\n   * ------------------------------------- */\n  .progress-radial .overlay {\n    position: absolute;\n    width: 30px;\n    height: 30px;\n    background-color: #fffde8;\n    border-radius: 50%;\n    margin-left: 10px;\n    margin-top: 10px;\n    text-align: center;\n    line-height: 2rem;\n    font-size: 12px;\n  }\n\n  /* -------------------------------------\n   * Mixin for progress-% class\n   * ------------------------------------- */\n  .progress-0 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(90deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-1 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(93.6deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-2 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(97.2deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-3 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(100.8deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-4 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(104.4deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-5 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(108deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-6 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(111.6deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-7 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(115.2deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-8 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(118.8deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-9 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(122.4deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-10 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(126deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-11 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(129.6deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-12 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(133.2deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-13 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(136.8deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-14 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(140.4deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-15 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(144deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-16 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(147.6deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-17 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(151.2deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-18 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(154.8deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-19 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(158.4deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-20 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(162deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-21 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(165.6deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-22 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(169.2deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-23 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(172.8deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-24 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(176.4deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-25 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(180deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-26 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(183.6deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-27 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(187.2deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-28 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(190.8deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-29 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(194.4deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-30 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(198deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-31 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(201.6deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-32 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(205.2deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-33 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(208.8deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-34 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(212.4deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-35 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(216deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-36 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(219.6deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-37 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(223.2deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-38 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(226.8deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-39 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(230.4deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-40 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(234deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-41 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(237.6deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-42 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(241.2deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-43 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(244.8deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-44 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(248.4deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-45 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(252deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-46 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(255.6deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-47 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(259.2deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-48 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(262.8deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-49 {\n    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(266.4deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-50 {\n    background-image: linear-gradient(-90deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-51 {\n    background-image: linear-gradient(-86.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-52 {\n    background-image: linear-gradient(-82.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-53 {\n    background-image: linear-gradient(-79.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-54 {\n    background-image: linear-gradient(-75.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-55 {\n    background-image: linear-gradient(-72deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-56 {\n    background-image: linear-gradient(-68.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-57 {\n    background-image: linear-gradient(-64.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-58 {\n    background-image: linear-gradient(-61.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-59 {\n    background-image: linear-gradient(-57.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-60 {\n    background-image: linear-gradient(-54deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-61 {\n    background-image: linear-gradient(-50.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-62 {\n    background-image: linear-gradient(-46.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-63 {\n    background-image: linear-gradient(-43.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-64 {\n    background-image: linear-gradient(-39.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-65 {\n    background-image: linear-gradient(-36deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-66 {\n    background-image: linear-gradient(-32.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-67 {\n    background-image: linear-gradient(-28.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-68 {\n    background-image: linear-gradient(-25.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-69 {\n    background-image: linear-gradient(-21.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-70 {\n    background-image: linear-gradient(-18deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-71 {\n    background-image: linear-gradient(-14.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-72 {\n    background-image: linear-gradient(-10.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-73 {\n    background-image: linear-gradient(-7.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-74 {\n    background-image: linear-gradient(-3.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-75 {\n    background-image: linear-gradient(0deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-76 {\n    background-image: linear-gradient(3.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-77 {\n    background-image: linear-gradient(7.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-78 {\n    background-image: linear-gradient(10.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-79 {\n    background-image: linear-gradient(14.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-80 {\n    background-image: linear-gradient(18deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-81 {\n    background-image: linear-gradient(21.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-82 {\n    background-image: linear-gradient(25.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-83 {\n    background-image: linear-gradient(28.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-84 {\n    background-image: linear-gradient(32.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-85 {\n    background-image: linear-gradient(36deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-86 {\n    background-image: linear-gradient(39.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-87 {\n    background-image: linear-gradient(43.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-88 {\n    background-image: linear-gradient(46.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-89 {\n    background-image: linear-gradient(50.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-90 {\n    background-image: linear-gradient(54deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-91 {\n    background-image: linear-gradient(57.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-92 {\n    background-image: linear-gradient(61.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-93 {\n    background-image: linear-gradient(64.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-94 {\n    background-image: linear-gradient(68.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-95 {\n    background-image: linear-gradient(72deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-96 {\n    background-image: linear-gradient(75.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-97 {\n    background-image: linear-gradient(79.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-98 {\n    background-image: linear-gradient(82.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-99 {\n    background-image: linear-gradient(86.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n  .progress-100 {\n    background-image: linear-gradient(90deg, #ff6347 52%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n  }\n\n\n  table {\n    border: 1px solid #ccc;\n    border-collapse: collapse;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    table-layout: fixed;\n  }\n\n  table caption {\n    font-size: 1.5em;\n    margin: .5em 0 .75em;\n  }\n\n  table tr {\n    background-color: #f8f8f8;\n    border: 1px solid #ddd;\n    padding: .35em;\n  }\n\n  table th,\n  table td {\n    padding: .625em;\n    text-align: center;\n  }\n\n  table th {\n    font-size: .85em;\n    letter-spacing: .1em;\n    text-transform: uppercase;\n  }\n\n  @media screen and (max-width: 600px) {\n    table {\n      border: 0;\n    }\n\n    table caption {\n      font-size: 1.3em;\n    }\n\n    table thead {\n      border: none;\n      clip: rect(0 0 0 0);\n      height: 1px;\n      margin: -1px;\n      overflow: hidden;\n      padding: 0;\n      position: absolute;\n      width: 1px;\n    }\n\n    table tr {\n      border-bottom: 3px solid #ddd;\n      display: block;\n      margin-bottom: .625em;\n    }\n\n    table td {\n      border-bottom: 1px solid #ddd;\n      display: block;\n      font-size: .8em;\n      text-align: right;\n    }\n\n    table td::before {\n      /*\n      * aria-label has no advantage, it won't be read inside a table\n      content: attr(aria-label);\n      */\n      content: attr(data-label);\n      float: left;\n      font-weight: bold;\n      text-transform: uppercase;\n    }\n\n    table td:last-child {\n      border-bottom: 0;\n    }\n  }\n  /* modal */\n  .modal-wrapper {\n    z-index: 999;\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n\n    opacity: 0;\n    visibility: hidden;\n    transition: opacity .3s, visibility .3s;\n  }\n\n  .modal-wrapper.open {\n    opacity: 1;\n    visibility: visible;\n    transition: opacity .4s, visibility .4s;\n  }\n\n  .modal-wrapper::after {\n    display: inline-block;\n    height: 100%;\n    margin-left: -.05em;\n    vertical-align: middle;\n    content: \"\"\n  }\n\n  .modal-wrapper .modal-window {\n    box-sizing: border-box;\n    display: inline-block;\n    z-index: 20;\n    position: relative;\n    width: 60vw;\n    /*padding: 30px 30px 15px;*/\n    border-radius: 2px;\n    background: #fff;\n    box-shadow: 0 0 30px rgba(0, 0, 0, .6);\n    vertical-align: middle;\n    align-self: center;\n  }\n\n  .modal-wrapper .modal-window .modal-content {\n    max-height: 60vh;\n    overflow-y: auto;\n  }\n\n  .modal-overlay {\n    z-index: 10;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgba(0, 0, 0, .8)\n  }\n\n  .modal-wrapper .modal-close {\n    z-index: 20;\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 35px;\n    color: #95979c!important;\n    font-size: 20px;\n    font-weight: 700;\n    line-height: 35px;\n    text-align: center;\n    text-decoration: none;\n    text-indent: 0;\n    cursor: pointer;\n  }\n\n  .modal-wrapper .modal-close:hover {\n    color: #2b2e38!important\n  }\n  pre.code {\n    text-align: left;\n    background: rgb(250, 250, 250);\n    border-radius: 3px;\n    border: 0px;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 5px inset;\n    color: #4d4d4d;\n    font-family: Monaco, Consolas, \"Courier New\", Courier, monospace, sans-serif;\n    font-size: 13px;\n    outline: 0px;\n    overflow: auto;\n    max-height: 55vh;\n    padding: 10px;\n    vertical-align: baseline;\n    line-height: normal;\n  }\n\n  #floating-button{\n    width: 55px;\n    height: 55px;\n    border-radius: 50%;\n    background: #db4437;\n    position: fixed;\n    bottom: 55px;\n    right: 32px;\n    cursor: pointer;\n    box-shadow: 0px 2px 5px #666;\n  }\n\n  .plus{\n    color: white;\n    position: absolute;\n    top: 0;\n    display: block;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    text-align: center;\n    padding: 0;\n    margin: 0;\n    line-height: 55px;\n    font-size: 38px;\n    font-family: 'Roboto';\n    font-weight: 300;\n    animation: plus-out 0.3s;\n    transition: all 0.3s;\n  }\n\n  #container-floating{\n    position: fixed;\n    width: 70px;\n    height: 70px;\n    bottom: 30px;\n    right: 30px;\n    z-index: 50;\n  }\n\n  #container-floating:hover{\n    height: 400px;\n    width: 90px;\n    padding: 30px;\n  }\n\n  #container-floating:hover .plus{\n    animation: plus-in 0.15s linear;\n    animation-fill-mode: forwards;\n  }\n\n  .edit{\n    position: absolute;\n    top: 0;\n    display: block;\n    bottom: 0;\n    left: 0;\n    display: block;\n    right: 0;\n    padding: 0;\n    opacity: 0;\n    margin: auto;\n    line-height: 65px;\n    transform: rotateZ(-70deg);\n    transition: all 0.3s;\n    animation: edit-out 0.3s;\n  }\n\n  #container-floating:hover .edit{\n    animation: edit-in 0.2s;\n    animation-delay: 0.1s;\n    animation-fill-mode: forwards;\n  }\n\n  @keyframes edit-in{\n    from {opacity: 0; transform: rotateZ(-70deg);}\n    to {opacity: 1; transform: rotateZ(0deg);}\n  }\n\n  @keyframes edit-out{\n    from {opacity: 1; transform: rotateZ(0deg);}\n    to {opacity: 0; transform: rotateZ(-70deg);}\n  }\n\n  @keyframes plus-in{\n    from {opacity: 1; transform: rotateZ(0deg);}\n    to {opacity: 0; transform: rotateZ(180deg);}\n  }\n\n  @keyframes plus-out{\n    from {opacity: 0; transform: rotateZ(180deg);}\n    to {opacity: 1; transform: rotateZ(0deg);}\n  }\n  .nds{\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    position: fixed;\n    z-index: 300;\n    transform:  scale(0);\n    cursor: pointer;\n  }\n\n  .nd1{\n    background: #d3a411;\n    right: 40px;\n    bottom: 120px;\n    animation-delay: 0.2s;\n    animation: bounce-out-nds 0.3s linear;\n    animation-fill-mode:  forwards;\n  }\n  @keyframes bounce-nds{\n    from {opacity: 0;}\n    to {opacity: 1; transform: scale(1);}\n  }\n\n  @keyframes bounce-out-nds{\n    from {opacity: 1; transform: scale(1);}\n    to {opacity: 0; transform: scale(0);}\n  }\n\n  #container-floating:hover .nds{\n\n    animation: bounce-nds 0.1s linear;\n    animation-fill-mode:  forwards;\n  }\n  .reminder{\n    position: absolute;\n    left: 0;\n    right: 0;\n    margin: auto;\n    top: 0;\n    bottom: 0;\n    line-height: 40px;\n  }\n\n  td > svg {\n    cursor: pointer;\n  }\n  td > svg:hover {\n    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);\n    background-color: rgba(255,255,255,0.56);\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}var GlobalStyle=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[/* createGlobalStyle */ "a"])(_templateObject());

/***/ }),
/* 37 */
/***/ (function(module, exports) {

//
module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB); // Test for A's keys different from B.

  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];
    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || ret === void 0 && valueA !== valueB) {
      return false;
    }
  }

  return true;
};

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function stylis_min(W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {}

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["a"] = (stylis_min);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
/* harmony default export */ __webpack_exports__["a"] = (unitlessKeys);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
  var result;
  var Symbol = root.Symbol;

  if (typeof Symbol === 'function') {
    if (Symbol.observable) {
      result = Symbol.observable;
    } else {
      result = Symbol('observable');
      Symbol.observable = result;
    }
  } else {
    result = '@@observable';
  }

  return result;
}
;

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Item_ItemProxy; });

// UNUSED EXPORTS: ProgressProxy

// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// EXTERNAL MODULE: ./src/types.ts
var types = __webpack_require__(3);

// EXTERNAL MODULE: ./src/store/download/index.ts + 2 modules
var download = __webpack_require__(15);

// EXTERNAL MODULE: ./src/store/index.ts + 6 modules
var store = __webpack_require__(9);

// CONCATENATED MODULE: ./src/services/Item.ts
var Item_ProgressProxy=/*#__PURE__*/function(){_createClass(ProgressProxy,null,[{key:"Parse",value:function Parse(d){return ProgressProxy.Create(d);}},{key:"Create",value:function Create(fsId){return new ProgressProxy(fsId);}}]);function ProgressProxy(fsId){_classCallCheck(this,ProgressProxy);this.intervalId=void 0;this.speedOverlay=void 0;this.request=void 0;this._status=void 0;this._percentCount=void 0;this.fsId=void 0;this.fsId=fsId;this.percentCount=0;this.speedOverlay=0;this.status=types["b" /* StatusTypes */].unknow;}_createClass(ProgressProxy,[{key:"percentCount",set:function set(v){if(this._percentCount!==v){var allDownloads=store["a" /* store */].getState().download.allDownloads;if(allDownloads[this.fsId]){this._percentCount=v;store["a" /* store */].dispatch(download["a" /* downloadActionCreator */].updateItem(allDownloads[this.fsId]));return;}}this._percentCount=v;},get:function get(){return this._percentCount;}},{key:"status",set:function set(v){if(this._status===v)return;this._status=v;if(v===types["b" /* StatusTypes */].unknow)return;var allDownloads=store["a" /* store */].getState().download.allDownloads;if(allDownloads[this.fsId]){store["a" /* store */].dispatch(download["a" /* downloadActionCreator */].updateItem(allDownloads[this.fsId]));}},get:function get(){return this._status;}}]);return ProgressProxy;}();var Item_ItemProxy=/*#__PURE__*/function(){_createClass(ItemProxy,null,[{key:"Parse",value:function Parse(d){return ItemProxy.Create(JSON.parse(d));}},{key:"Create",value:function Create(d){return new ItemProxy(d);}}]);function ItemProxy(d){_classCallCheck(this,ItemProxy);this.category=void 0;this.fsId=void 0;this.isDir=void 0;this.localCtime=void 0;this.localMtime=void 0;this.md5=void 0;this.operId=void 0;this.path=void 0;this.privacy=void 0;this.serverAtime=void 0;this.serverCtime=void 0;this.serverFilename=void 0;this.serverMtime=void 0;this.share=void 0;this.size=void 0;this.unList=void 0;this.url=void 0;this.progress=void 0;this.category=d.category;this.fsId=d.fs_id;this.isDir=d.isdir;this.localCtime=d.local_ctime;this.localMtime=d.local_mtime;this.md5=d.md5;this.operId=d.oper_id;this.path=d.path;this.privacy=d.privacy;this.serverAtime=d.server_atime;this.serverCtime=d.server_ctime;this.serverFilename=d.server_filename;this.serverMtime=d.server_mtime;this.share=d.share;this.size=d.size;this.unList=d.unlist;this.url=d.url;this.progress=Item_ProgressProxy.Create(this.fsId);}return ItemProxy;}();

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(43);


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Dotennin_project_baiduPanDownloader_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var C_Users_Dotennin_project_baiduPanDownloader_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Dotennin_project_baiduPanDownloader_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Dotennin_project_baiduPanDownloader_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30);
var _package_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(30, 1);
/* harmony import */ var _utils_nodeEnvIs_devNodeEnv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18);
/* harmony import */ var _GlobalStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9);
/* harmony import */ var _services_InstaceForSystem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13);
function render(RootComponent){react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_8__[/* Provider */ "a"],{store:_store__WEBPACK_IMPORTED_MODULE_9__[/* store */ "a"]},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Suspense"],{fallback:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",null,"on suspensing....")},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_GlobalStyle__WEBPACK_IMPORTED_MODULE_7__[/* GlobalStyle */ "a"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RootComponent,null))),document.getElementById(_package_json__WEBPACK_IMPORTED_MODULE_4__[/* name */ "a"]));}// Do required initial work. Gets called every time the URL changes,
// so that elements can be re-inserted as a user navigates a page with
// different routes.
function main(){return _main.apply(this,arguments);}function _main(){_main=Object(C_Users_Dotennin_project_baiduPanDownloader_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/C_Users_Dotennin_project_baiduPanDownloader_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(){return C_Users_Dotennin_project_baiduPanDownloader_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:document.body.insertAdjacentHTML('beforeend',"<div id=\"".concat(_package_json__WEBPACK_IMPORTED_MODULE_4__[/* name */ "a"],"\"></div>"));_services_InstaceForSystem__WEBPACK_IMPORTED_MODULE_10__[/* InstanceForSystem */ "a"].initState().then(function(){render(__webpack_require__(35).default);});case 2:case"end":return _context.stop();}}},_callee);}));return _main.apply(this,arguments);}Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* addLocationChangeCallback */ "a"])(function(){// Tampermonkey doesn't bubble errors up to the main console,
// so we have to catch them manually and log them
main().catch(function(e){return Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* log */ "c"])(e);});});if(_utils_nodeEnvIs_devNodeEnv__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]&&module.hot){module.hot.accept('./App.tsx',function(){render(__webpack_require__(35).default);});}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(33)(module)))

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
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
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
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
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
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
        } // Be forgiving, per 25.3.3.3.3 of the spec:
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
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
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
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
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
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

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
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
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
        var i = -1,
            next = function next() {
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
    } // Return an iterator with no values.


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
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
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
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
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

        return !!caught;
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
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
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
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
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
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
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
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
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
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var l = __webpack_require__(34),
    n = "function" === typeof Symbol && Symbol.for,
    p = n ? Symbol.for("react.element") : 60103,
    q = n ? Symbol.for("react.portal") : 60106,
    r = n ? Symbol.for("react.fragment") : 60107,
    t = n ? Symbol.for("react.strict_mode") : 60108,
    u = n ? Symbol.for("react.profiler") : 60114,
    v = n ? Symbol.for("react.provider") : 60109,
    w = n ? Symbol.for("react.context") : 60110,
    x = n ? Symbol.for("react.forward_ref") : 60112,
    y = n ? Symbol.for("react.suspense") : 60113,
    z = n ? Symbol.for("react.memo") : 60115,
    A = n ? Symbol.for("react.lazy") : 60116,
    B = "function" === typeof Symbol && Symbol.iterator;

function C(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) {
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  }

  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}

var D = {
  isMounted: function isMounted() {
    return !1;
  },
  enqueueForceUpdate: function enqueueForceUpdate() {},
  enqueueReplaceState: function enqueueReplaceState() {},
  enqueueSetState: function enqueueSetState() {}
},
    E = {};

function F(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = E;
  this.updater = c || D;
}

F.prototype.isReactComponent = {};

F.prototype.setState = function (a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(C(85));
  this.updater.enqueueSetState(this, a, b, "setState");
};

F.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};

function G() {}

G.prototype = F.prototype;

function H(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = E;
  this.updater = c || D;
}

var I = H.prototype = new G();
I.constructor = H;
l(I, F.prototype);
I.isPureReactComponent = !0;
var J = {
  current: null
},
    K = Object.prototype.hasOwnProperty,
    L = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function M(a, b, c) {
  var e,
      d = {},
      g = null,
      k = null;
  if (null != b) for (e in void 0 !== b.ref && (k = b.ref), void 0 !== b.key && (g = "" + b.key), b) {
    K.call(b, e) && !L.hasOwnProperty(e) && (d[e] = b[e]);
  }
  var f = arguments.length - 2;
  if (1 === f) d.children = c;else if (1 < f) {
    for (var h = Array(f), m = 0; m < f; m++) {
      h[m] = arguments[m + 2];
    }

    d.children = h;
  }
  if (a && a.defaultProps) for (e in f = a.defaultProps, f) {
    void 0 === d[e] && (d[e] = f[e]);
  }
  return {
    $$typeof: p,
    type: a,
    key: g,
    ref: k,
    props: d,
    _owner: J.current
  };
}

function N(a, b) {
  return {
    $$typeof: p,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}

function O(a) {
  return "object" === typeof a && null !== a && a.$$typeof === p;
}

function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + ("" + a).replace(/[=:]/g, function (a) {
    return b[a];
  });
}

var P = /\/+/g,
    Q = [];

function R(a, b, c, e) {
  if (Q.length) {
    var d = Q.pop();
    d.result = a;
    d.keyPrefix = b;
    d.func = c;
    d.context = e;
    d.count = 0;
    return d;
  }

  return {
    result: a,
    keyPrefix: b,
    func: c,
    context: e,
    count: 0
  };
}

function S(a) {
  a.result = null;
  a.keyPrefix = null;
  a.func = null;
  a.context = null;
  a.count = 0;
  10 > Q.length && Q.push(a);
}

function T(a, b, c, e) {
  var d = typeof a;
  if ("undefined" === d || "boolean" === d) a = null;
  var g = !1;
  if (null === a) g = !0;else switch (d) {
    case "string":
    case "number":
      g = !0;
      break;

    case "object":
      switch (a.$$typeof) {
        case p:
        case q:
          g = !0;
      }

  }
  if (g) return c(e, a, "" === b ? "." + U(a, 0) : b), 1;
  g = 0;
  b = "" === b ? "." : b + ":";
  if (Array.isArray(a)) for (var k = 0; k < a.length; k++) {
    d = a[k];
    var f = b + U(d, k);
    g += T(d, f, c, e);
  } else if (null === a || "object" !== typeof a ? f = null : (f = B && a[B] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), k = 0; !(d = a.next()).done;) {
    d = d.value, f = b + U(d, k++), g += T(d, f, c, e);
  } else if ("object" === d) throw c = "" + a, Error(C(31, "[object Object]" === c ? "object with keys {" + Object.keys(a).join(", ") + "}" : c, ""));
  return g;
}

function V(a, b, c) {
  return null == a ? 0 : T(a, "", b, c);
}

function U(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape(a.key) : b.toString(36);
}

function W(a, b) {
  a.func.call(a.context, b, a.count++);
}

function aa(a, b, c) {
  var e = a.result,
      d = a.keyPrefix;
  a = a.func.call(a.context, b, a.count++);
  Array.isArray(a) ? X(a, e, c, function (a) {
    return a;
  }) : null != a && (O(a) && (a = N(a, d + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(P, "$&/") + "/") + c)), e.push(a));
}

function X(a, b, c, e, d) {
  var g = "";
  null != c && (g = ("" + c).replace(P, "$&/") + "/");
  b = R(b, g, e, d);
  V(a, aa, b);
  S(b);
}

var Y = {
  current: null
};

function Z() {
  var a = Y.current;
  if (null === a) throw Error(C(321));
  return a;
}

var ba = {
  ReactCurrentDispatcher: Y,
  ReactCurrentBatchConfig: {
    suspense: null
  },
  ReactCurrentOwner: J,
  IsSomeRendererActing: {
    current: !1
  },
  assign: l
};
exports.Children = {
  map: function map(a, b, c) {
    if (null == a) return a;
    var e = [];
    X(a, e, null, b, c);
    return e;
  },
  forEach: function forEach(a, b, c) {
    if (null == a) return a;
    b = R(null, null, b, c);
    V(a, W, b);
    S(b);
  },
  count: function count(a) {
    return V(a, function () {
      return null;
    }, null);
  },
  toArray: function toArray(a) {
    var b = [];
    X(a, b, null, function (a) {
      return a;
    });
    return b;
  },
  only: function only(a) {
    if (!O(a)) throw Error(C(143));
    return a;
  }
};
exports.Component = F;
exports.Fragment = r;
exports.Profiler = u;
exports.PureComponent = H;
exports.StrictMode = t;
exports.Suspense = y;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ba;

exports.cloneElement = function (a, b, c) {
  if (null === a || void 0 === a) throw Error(C(267, a));
  var e = l({}, a.props),
      d = a.key,
      g = a.ref,
      k = a._owner;

  if (null != b) {
    void 0 !== b.ref && (g = b.ref, k = J.current);
    void 0 !== b.key && (d = "" + b.key);
    if (a.type && a.type.defaultProps) var f = a.type.defaultProps;

    for (h in b) {
      K.call(b, h) && !L.hasOwnProperty(h) && (e[h] = void 0 === b[h] && void 0 !== f ? f[h] : b[h]);
    }
  }

  var h = arguments.length - 2;
  if (1 === h) e.children = c;else if (1 < h) {
    f = Array(h);

    for (var m = 0; m < h; m++) {
      f[m] = arguments[m + 2];
    }

    e.children = f;
  }
  return {
    $$typeof: p,
    type: a.type,
    key: d,
    ref: g,
    props: e,
    _owner: k
  };
};

exports.createContext = function (a, b) {
  void 0 === b && (b = null);
  a = {
    $$typeof: w,
    _calculateChangedBits: b,
    _currentValue: a,
    _currentValue2: a,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  };
  a.Provider = {
    $$typeof: v,
    _context: a
  };
  return a.Consumer = a;
};

exports.createElement = M;

exports.createFactory = function (a) {
  var b = M.bind(null, a);
  b.type = a;
  return b;
};

exports.createRef = function () {
  return {
    current: null
  };
};

exports.forwardRef = function (a) {
  return {
    $$typeof: x,
    render: a
  };
};

exports.isValidElement = O;

exports.lazy = function (a) {
  return {
    $$typeof: A,
    _ctor: a,
    _status: -1,
    _result: null
  };
};

exports.memo = function (a, b) {
  return {
    $$typeof: z,
    type: a,
    compare: void 0 === b ? null : b
  };
};

exports.useCallback = function (a, b) {
  return Z().useCallback(a, b);
};

exports.useContext = function (a, b) {
  return Z().useContext(a, b);
};

exports.useDebugValue = function () {};

exports.useEffect = function (a, b) {
  return Z().useEffect(a, b);
};

exports.useImperativeHandle = function (a, b, c) {
  return Z().useImperativeHandle(a, b, c);
};

exports.useLayoutEffect = function (a, b) {
  return Z().useLayoutEffect(a, b);
};

exports.useMemo = function (a, b) {
  return Z().useMemo(a, b);
};

exports.useReducer = function (a, b, c) {
  return Z().useReducer(a, b, c);
};

exports.useRef = function (a) {
  return Z().useRef(a);
};

exports.useState = function (a) {
  return Z().useState(a);
};

exports.version = "16.13.1";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/


var aa = __webpack_require__(0),
    n = __webpack_require__(34),
    r = __webpack_require__(47);

function u(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) {
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  }

  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}

if (!aa) throw Error(u(227));

function ba(a, b, c, d, e, f, g, h, k) {
  var l = Array.prototype.slice.call(arguments, 3);

  try {
    b.apply(c, l);
  } catch (m) {
    this.onError(m);
  }
}

var da = !1,
    ea = null,
    fa = !1,
    ha = null,
    ia = {
  onError: function onError(a) {
    da = !0;
    ea = a;
  }
};

function ja(a, b, c, d, e, f, g, h, k) {
  da = !1;
  ea = null;
  ba.apply(ia, arguments);
}

function ka(a, b, c, d, e, f, g, h, k) {
  ja.apply(this, arguments);

  if (da) {
    if (da) {
      var l = ea;
      da = !1;
      ea = null;
    } else throw Error(u(198));

    fa || (fa = !0, ha = l);
  }
}

var la = null,
    ma = null,
    na = null;

function oa(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = na(c);
  ka(d, b, void 0, a);
  a.currentTarget = null;
}

var pa = null,
    qa = {};

function ra() {
  if (pa) for (var a in qa) {
    var b = qa[a],
        c = pa.indexOf(a);
    if (!(-1 < c)) throw Error(u(96, a));

    if (!sa[c]) {
      if (!b.extractEvents) throw Error(u(97, a));
      sa[c] = b;
      c = b.eventTypes;

      for (var d in c) {
        var e = void 0;
        var f = c[d],
            g = b,
            h = d;
        if (ta.hasOwnProperty(h)) throw Error(u(99, h));
        ta[h] = f;
        var k = f.phasedRegistrationNames;

        if (k) {
          for (e in k) {
            k.hasOwnProperty(e) && ua(k[e], g, h);
          }

          e = !0;
        } else f.registrationName ? (ua(f.registrationName, g, h), e = !0) : e = !1;

        if (!e) throw Error(u(98, d, a));
      }
    }
  }
}

function ua(a, b, c) {
  if (va[a]) throw Error(u(100, a));
  va[a] = b;
  wa[a] = b.eventTypes[c].dependencies;
}

var sa = [],
    ta = {},
    va = {},
    wa = {};

function xa(a) {
  var b = !1,
      c;

  for (c in a) {
    if (a.hasOwnProperty(c)) {
      var d = a[c];

      if (!qa.hasOwnProperty(c) || qa[c] !== d) {
        if (qa[c]) throw Error(u(102, c));
        qa[c] = d;
        b = !0;
      }
    }
  }

  b && ra();
}

var ya = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
    za = null,
    Aa = null,
    Ba = null;

function Ca(a) {
  if (a = ma(a)) {
    if ("function" !== typeof za) throw Error(u(280));
    var b = a.stateNode;
    b && (b = la(b), za(a.stateNode, a.type, b));
  }
}

function Da(a) {
  Aa ? Ba ? Ba.push(a) : Ba = [a] : Aa = a;
}

function Ea() {
  if (Aa) {
    var a = Aa,
        b = Ba;
    Ba = Aa = null;
    Ca(a);
    if (b) for (a = 0; a < b.length; a++) {
      Ca(b[a]);
    }
  }
}

function Fa(a, b) {
  return a(b);
}

function Ga(a, b, c, d, e) {
  return a(b, c, d, e);
}

function Ha() {}

var Ia = Fa,
    Ja = !1,
    Ka = !1;

function La() {
  if (null !== Aa || null !== Ba) Ha(), Ea();
}

function Ma(a, b, c) {
  if (Ka) return a(b, c);
  Ka = !0;

  try {
    return Ia(a, b, c);
  } finally {
    Ka = !1, La();
  }
}

var Na = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Oa = Object.prototype.hasOwnProperty,
    Pa = {},
    Qa = {};

function Ra(a) {
  if (Oa.call(Qa, a)) return !0;
  if (Oa.call(Pa, a)) return !1;
  if (Na.test(a)) return Qa[a] = !0;
  Pa[a] = !0;
  return !1;
}

function Sa(a, b, c, d) {
  if (null !== c && 0 === c.type) return !1;

  switch (typeof b) {
    case "function":
    case "symbol":
      return !0;

    case "boolean":
      if (d) return !1;
      if (null !== c) return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;

    default:
      return !1;
  }
}

function Ta(a, b, c, d) {
  if (null === b || "undefined" === typeof b || Sa(a, b, c, d)) return !0;
  if (d) return !1;
  if (null !== c) switch (c.type) {
    case 3:
      return !b;

    case 4:
      return !1 === b;

    case 5:
      return isNaN(b);

    case 6:
      return isNaN(b) || 1 > b;
  }
  return !1;
}

function v(a, b, c, d, e, f) {
  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f;
}

var C = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (a) {
  C[a] = new v(a, 0, !1, a, null, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (a) {
  var b = a[0];
  C[b] = new v(b, 1, !1, a[1], null, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
  C[a] = new v(a, 2, !1, a.toLowerCase(), null, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (a) {
  C[a] = new v(a, 2, !1, a, null, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (a) {
  C[a] = new v(a, 3, !1, a.toLowerCase(), null, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function (a) {
  C[a] = new v(a, 3, !0, a, null, !1);
});
["capture", "download"].forEach(function (a) {
  C[a] = new v(a, 4, !1, a, null, !1);
});
["cols", "rows", "size", "span"].forEach(function (a) {
  C[a] = new v(a, 6, !1, a, null, !1);
});
["rowSpan", "start"].forEach(function (a) {
  C[a] = new v(a, 5, !1, a.toLowerCase(), null, !1);
});
var Ua = /[\-:]([a-z])/g;

function Va(a) {
  return a[1].toUpperCase();
}

"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (a) {
  var b = a.replace(Ua, Va);
  C[b] = new v(b, 1, !1, a, null, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (a) {
  var b = a.replace(Ua, Va);
  C[b] = new v(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
  var b = a.replace(Ua, Va);
  C[b] = new v(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1);
});
["tabIndex", "crossOrigin"].forEach(function (a) {
  C[a] = new v(a, 1, !1, a.toLowerCase(), null, !1);
});
C.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0);
["src", "href", "action", "formAction"].forEach(function (a) {
  C[a] = new v(a, 1, !1, a.toLowerCase(), null, !0);
});
var Wa = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
Wa.hasOwnProperty("ReactCurrentDispatcher") || (Wa.ReactCurrentDispatcher = {
  current: null
});
Wa.hasOwnProperty("ReactCurrentBatchConfig") || (Wa.ReactCurrentBatchConfig = {
  suspense: null
});

function Xa(a, b, c, d) {
  var e = C.hasOwnProperty(b) ? C[b] : null;
  var f = null !== e ? 0 === e.type : d ? !1 : !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1] ? !1 : !0;
  f || (Ta(b, c, e, d) && (c = null), d || null === e ? Ra(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
}

var Ya = /^(.*)[\\\/]/,
    E = "function" === typeof Symbol && Symbol.for,
    Za = E ? Symbol.for("react.element") : 60103,
    $a = E ? Symbol.for("react.portal") : 60106,
    ab = E ? Symbol.for("react.fragment") : 60107,
    bb = E ? Symbol.for("react.strict_mode") : 60108,
    cb = E ? Symbol.for("react.profiler") : 60114,
    db = E ? Symbol.for("react.provider") : 60109,
    eb = E ? Symbol.for("react.context") : 60110,
    fb = E ? Symbol.for("react.concurrent_mode") : 60111,
    gb = E ? Symbol.for("react.forward_ref") : 60112,
    hb = E ? Symbol.for("react.suspense") : 60113,
    ib = E ? Symbol.for("react.suspense_list") : 60120,
    jb = E ? Symbol.for("react.memo") : 60115,
    kb = E ? Symbol.for("react.lazy") : 60116,
    lb = E ? Symbol.for("react.block") : 60121,
    mb = "function" === typeof Symbol && Symbol.iterator;

function nb(a) {
  if (null === a || "object" !== typeof a) return null;
  a = mb && a[mb] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}

function ob(a) {
  if (-1 === a._status) {
    a._status = 0;
    var b = a._ctor;
    b = b();
    a._result = b;
    b.then(function (b) {
      0 === a._status && (b = b.default, a._status = 1, a._result = b);
    }, function (b) {
      0 === a._status && (a._status = 2, a._result = b);
    });
  }
}

function pb(a) {
  if (null == a) return null;
  if ("function" === typeof a) return a.displayName || a.name || null;
  if ("string" === typeof a) return a;

  switch (a) {
    case ab:
      return "Fragment";

    case $a:
      return "Portal";

    case cb:
      return "Profiler";

    case bb:
      return "StrictMode";

    case hb:
      return "Suspense";

    case ib:
      return "SuspenseList";
  }

  if ("object" === typeof a) switch (a.$$typeof) {
    case eb:
      return "Context.Consumer";

    case db:
      return "Context.Provider";

    case gb:
      var b = a.render;
      b = b.displayName || b.name || "";
      return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");

    case jb:
      return pb(a.type);

    case lb:
      return pb(a.render);

    case kb:
      if (a = 1 === a._status ? a._result : null) return pb(a);
  }
  return null;
}

function qb(a) {
  var b = "";

  do {
    a: switch (a.tag) {
      case 3:
      case 4:
      case 6:
      case 7:
      case 10:
      case 9:
        var c = "";
        break a;

      default:
        var d = a._debugOwner,
            e = a._debugSource,
            f = pb(a.type);
        c = null;
        d && (c = pb(d.type));
        d = f;
        f = "";
        e ? f = " (at " + e.fileName.replace(Ya, "") + ":" + e.lineNumber + ")" : c && (f = " (created by " + c + ")");
        c = "\n    in " + (d || "Unknown") + f;
    }

    b += c;
    a = a.return;
  } while (a);

  return b;
}

function rb(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return a;

    default:
      return "";
  }
}

function sb(a) {
  var b = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}

function tb(a) {
  var b = sb(a) ? "checked" : "value",
      c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b),
      d = "" + a[b];

  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
    var e = c.get,
        f = c.set;
    Object.defineProperty(a, b, {
      configurable: !0,
      get: function get() {
        return e.call(this);
      },
      set: function set(a) {
        d = "" + a;
        f.call(this, a);
      }
    });
    Object.defineProperty(a, b, {
      enumerable: c.enumerable
    });
    return {
      getValue: function getValue() {
        return d;
      },
      setValue: function setValue(a) {
        d = "" + a;
      },
      stopTracking: function stopTracking() {
        a._valueTracker = null;
        delete a[b];
      }
    };
  }
}

function xb(a) {
  a._valueTracker || (a._valueTracker = tb(a));
}

function yb(a) {
  if (!a) return !1;
  var b = a._valueTracker;
  if (!b) return !0;
  var c = b.getValue();
  var d = "";
  a && (d = sb(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), !0) : !1;
}

function zb(a, b) {
  var c = b.checked;
  return n({}, b, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: null != c ? c : a._wrapperState.initialChecked
  });
}

function Ab(a, b) {
  var c = null == b.defaultValue ? "" : b.defaultValue,
      d = null != b.checked ? b.checked : b.defaultChecked;
  c = rb(null != b.value ? b.value : c);
  a._wrapperState = {
    initialChecked: d,
    initialValue: c,
    controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
  };
}

function Bb(a, b) {
  b = b.checked;
  null != b && Xa(a, "checked", b, !1);
}

function Cb(a, b) {
  Bb(a, b);
  var c = rb(b.value),
      d = b.type;
  if (null != c) {
    if ("number" === d) {
      if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
    } else a.value !== "" + c && (a.value = "" + c);
  } else if ("submit" === d || "reset" === d) {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? Db(a, b.type, c) : b.hasOwnProperty("defaultValue") && Db(a, b.type, rb(b.defaultValue));
  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}

function Eb(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }

  c = a.name;
  "" !== c && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c && (a.name = c);
}

function Db(a, b, c) {
  if ("number" !== b || a.ownerDocument.activeElement !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}

function Fb(a) {
  var b = "";
  aa.Children.forEach(a, function (a) {
    null != a && (b += a);
  });
  return b;
}

function Gb(a, b) {
  a = n({
    children: void 0
  }, b);
  if (b = Fb(b.children)) a.children = b;
  return a;
}

function Hb(a, b, c, d) {
  a = a.options;

  if (b) {
    b = {};

    for (var e = 0; e < c.length; e++) {
      b["$" + c[e]] = !0;
    }

    for (c = 0; c < a.length; c++) {
      e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
    }
  } else {
    c = "" + rb(c);
    b = null;

    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = !0;
        d && (a[e].defaultSelected = !0);
        return;
      }

      null !== b || a[e].disabled || (b = a[e]);
    }

    null !== b && (b.selected = !0);
  }
}

function Ib(a, b) {
  if (null != b.dangerouslySetInnerHTML) throw Error(u(91));
  return n({}, b, {
    value: void 0,
    defaultValue: void 0,
    children: "" + a._wrapperState.initialValue
  });
}

function Jb(a, b) {
  var c = b.value;

  if (null == c) {
    c = b.children;
    b = b.defaultValue;

    if (null != c) {
      if (null != b) throw Error(u(92));

      if (Array.isArray(c)) {
        if (!(1 >= c.length)) throw Error(u(93));
        c = c[0];
      }

      b = c;
    }

    null == b && (b = "");
    c = b;
  }

  a._wrapperState = {
    initialValue: rb(c)
  };
}

function Kb(a, b) {
  var c = rb(b.value),
      d = rb(b.defaultValue);
  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
  null != d && (a.defaultValue = "" + d);
}

function Lb(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
}

var Mb = {
  html: "http://www.w3.org/1999/xhtml",
  mathml: "http://www.w3.org/1998/Math/MathML",
  svg: "http://www.w3.org/2000/svg"
};

function Nb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";

    case "math":
      return "http://www.w3.org/1998/Math/MathML";

    default:
      return "http://www.w3.org/1999/xhtml";
  }
}

function Ob(a, b) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? Nb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}

var Pb,
    Qb = function (a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (b, c, d, e) {
    MSApp.execUnsafeLocalFunction(function () {
      return a(b, c, d, e);
    });
  } : a;
}(function (a, b) {
  if (a.namespaceURI !== Mb.svg || "innerHTML" in a) a.innerHTML = b;else {
    Pb = Pb || document.createElement("div");
    Pb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";

    for (b = Pb.firstChild; a.firstChild;) {
      a.removeChild(a.firstChild);
    }

    for (; b.firstChild;) {
      a.appendChild(b.firstChild);
    }
  }
});

function Rb(a, b) {
  if (b) {
    var c = a.firstChild;

    if (c && c === a.lastChild && 3 === c.nodeType) {
      c.nodeValue = b;
      return;
    }
  }

  a.textContent = b;
}

function Sb(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}

var Tb = {
  animationend: Sb("Animation", "AnimationEnd"),
  animationiteration: Sb("Animation", "AnimationIteration"),
  animationstart: Sb("Animation", "AnimationStart"),
  transitionend: Sb("Transition", "TransitionEnd")
},
    Ub = {},
    Vb = {};
ya && (Vb = document.createElement("div").style, "AnimationEvent" in window || (delete Tb.animationend.animation, delete Tb.animationiteration.animation, delete Tb.animationstart.animation), "TransitionEvent" in window || delete Tb.transitionend.transition);

function Wb(a) {
  if (Ub[a]) return Ub[a];
  if (!Tb[a]) return a;
  var b = Tb[a],
      c;

  for (c in b) {
    if (b.hasOwnProperty(c) && c in Vb) return Ub[a] = b[c];
  }

  return a;
}

var Xb = Wb("animationend"),
    Yb = Wb("animationiteration"),
    Zb = Wb("animationstart"),
    $b = Wb("transitionend"),
    ac = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    bc = new ("function" === typeof WeakMap ? WeakMap : Map)();

function cc(a) {
  var b = bc.get(a);
  void 0 === b && (b = new Map(), bc.set(a, b));
  return b;
}

function dc(a) {
  var b = a,
      c = a;
  if (a.alternate) for (; b.return;) {
    b = b.return;
  } else {
    a = b;

    do {
      b = a, 0 !== (b.effectTag & 1026) && (c = b.return), a = b.return;
    } while (a);
  }
  return 3 === b.tag ? c : null;
}

function ec(a) {
  if (13 === a.tag) {
    var b = a.memoizedState;
    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
    if (null !== b) return b.dehydrated;
  }

  return null;
}

function fc(a) {
  if (dc(a) !== a) throw Error(u(188));
}

function gc(a) {
  var b = a.alternate;

  if (!b) {
    b = dc(a);
    if (null === b) throw Error(u(188));
    return b !== a ? null : a;
  }

  for (var c = a, d = b;;) {
    var e = c.return;
    if (null === e) break;
    var f = e.alternate;

    if (null === f) {
      d = e.return;

      if (null !== d) {
        c = d;
        continue;
      }

      break;
    }

    if (e.child === f.child) {
      for (f = e.child; f;) {
        if (f === c) return fc(e), a;
        if (f === d) return fc(e), b;
        f = f.sibling;
      }

      throw Error(u(188));
    }

    if (c.return !== d.return) c = e, d = f;else {
      for (var g = !1, h = e.child; h;) {
        if (h === c) {
          g = !0;
          c = e;
          d = f;
          break;
        }

        if (h === d) {
          g = !0;
          d = e;
          c = f;
          break;
        }

        h = h.sibling;
      }

      if (!g) {
        for (h = f.child; h;) {
          if (h === c) {
            g = !0;
            c = f;
            d = e;
            break;
          }

          if (h === d) {
            g = !0;
            d = f;
            c = e;
            break;
          }

          h = h.sibling;
        }

        if (!g) throw Error(u(189));
      }
    }
    if (c.alternate !== d) throw Error(u(190));
  }

  if (3 !== c.tag) throw Error(u(188));
  return c.stateNode.current === c ? a : b;
}

function hc(a) {
  a = gc(a);
  if (!a) return null;

  for (var b = a;;) {
    if (5 === b.tag || 6 === b.tag) return b;
    if (b.child) b.child.return = b, b = b.child;else {
      if (b === a) break;

      for (; !b.sibling;) {
        if (!b.return || b.return === a) return null;
        b = b.return;
      }

      b.sibling.return = b.return;
      b = b.sibling;
    }
  }

  return null;
}

function ic(a, b) {
  if (null == b) throw Error(u(30));
  if (null == a) return b;

  if (Array.isArray(a)) {
    if (Array.isArray(b)) return a.push.apply(a, b), a;
    a.push(b);
    return a;
  }

  return Array.isArray(b) ? [a].concat(b) : [a, b];
}

function jc(a, b, c) {
  Array.isArray(a) ? a.forEach(b, c) : a && b.call(c, a);
}

var kc = null;

function lc(a) {
  if (a) {
    var b = a._dispatchListeners,
        c = a._dispatchInstances;
    if (Array.isArray(b)) for (var d = 0; d < b.length && !a.isPropagationStopped(); d++) {
      oa(a, b[d], c[d]);
    } else b && oa(a, b, c);
    a._dispatchListeners = null;
    a._dispatchInstances = null;
    a.isPersistent() || a.constructor.release(a);
  }
}

function mc(a) {
  null !== a && (kc = ic(kc, a));
  a = kc;
  kc = null;

  if (a) {
    jc(a, lc);
    if (kc) throw Error(u(95));
    if (fa) throw a = ha, fa = !1, ha = null, a;
  }
}

function nc(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}

function oc(a) {
  if (!ya) return !1;
  a = "on" + a;
  var b = (a in document);
  b || (b = document.createElement("div"), b.setAttribute(a, "return;"), b = "function" === typeof b[a]);
  return b;
}

var pc = [];

function qc(a) {
  a.topLevelType = null;
  a.nativeEvent = null;
  a.targetInst = null;
  a.ancestors.length = 0;
  10 > pc.length && pc.push(a);
}

function rc(a, b, c, d) {
  if (pc.length) {
    var e = pc.pop();
    e.topLevelType = a;
    e.eventSystemFlags = d;
    e.nativeEvent = b;
    e.targetInst = c;
    return e;
  }

  return {
    topLevelType: a,
    eventSystemFlags: d,
    nativeEvent: b,
    targetInst: c,
    ancestors: []
  };
}

function sc(a) {
  var b = a.targetInst,
      c = b;

  do {
    if (!c) {
      a.ancestors.push(c);
      break;
    }

    var d = c;
    if (3 === d.tag) d = d.stateNode.containerInfo;else {
      for (; d.return;) {
        d = d.return;
      }

      d = 3 !== d.tag ? null : d.stateNode.containerInfo;
    }
    if (!d) break;
    b = c.tag;
    5 !== b && 6 !== b || a.ancestors.push(c);
    c = tc(d);
  } while (c);

  for (c = 0; c < a.ancestors.length; c++) {
    b = a.ancestors[c];
    var e = nc(a.nativeEvent);
    d = a.topLevelType;
    var f = a.nativeEvent,
        g = a.eventSystemFlags;
    0 === c && (g |= 64);

    for (var h = null, k = 0; k < sa.length; k++) {
      var l = sa[k];
      l && (l = l.extractEvents(d, b, f, e, g)) && (h = ic(h, l));
    }

    mc(h);
  }
}

function uc(a, b, c) {
  if (!c.has(a)) {
    switch (a) {
      case "scroll":
        vc(b, "scroll", !0);
        break;

      case "focus":
      case "blur":
        vc(b, "focus", !0);
        vc(b, "blur", !0);
        c.set("blur", null);
        c.set("focus", null);
        break;

      case "cancel":
      case "close":
        oc(a) && vc(b, a, !0);
        break;

      case "invalid":
      case "submit":
      case "reset":
        break;

      default:
        -1 === ac.indexOf(a) && F(a, b);
    }

    c.set(a, null);
  }
}

var wc,
    xc,
    yc,
    zc = !1,
    Ac = [],
    Bc = null,
    Cc = null,
    Dc = null,
    Ec = new Map(),
    Fc = new Map(),
    Gc = [],
    Hc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),
    Ic = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");

function Jc(a, b) {
  var c = cc(b);
  Hc.forEach(function (a) {
    uc(a, b, c);
  });
  Ic.forEach(function (a) {
    uc(a, b, c);
  });
}

function Kc(a, b, c, d, e) {
  return {
    blockedOn: a,
    topLevelType: b,
    eventSystemFlags: c | 32,
    nativeEvent: e,
    container: d
  };
}

function Lc(a, b) {
  switch (a) {
    case "focus":
    case "blur":
      Bc = null;
      break;

    case "dragenter":
    case "dragleave":
      Cc = null;
      break;

    case "mouseover":
    case "mouseout":
      Dc = null;
      break;

    case "pointerover":
    case "pointerout":
      Ec.delete(b.pointerId);
      break;

    case "gotpointercapture":
    case "lostpointercapture":
      Fc.delete(b.pointerId);
  }
}

function Mc(a, b, c, d, e, f) {
  if (null === a || a.nativeEvent !== f) return a = Kc(b, c, d, e, f), null !== b && (b = Nc(b), null !== b && xc(b)), a;
  a.eventSystemFlags |= d;
  return a;
}

function Oc(a, b, c, d, e) {
  switch (b) {
    case "focus":
      return Bc = Mc(Bc, a, b, c, d, e), !0;

    case "dragenter":
      return Cc = Mc(Cc, a, b, c, d, e), !0;

    case "mouseover":
      return Dc = Mc(Dc, a, b, c, d, e), !0;

    case "pointerover":
      var f = e.pointerId;
      Ec.set(f, Mc(Ec.get(f) || null, a, b, c, d, e));
      return !0;

    case "gotpointercapture":
      return f = e.pointerId, Fc.set(f, Mc(Fc.get(f) || null, a, b, c, d, e)), !0;
  }

  return !1;
}

function Pc(a) {
  var b = tc(a.target);

  if (null !== b) {
    var c = dc(b);
    if (null !== c) if (b = c.tag, 13 === b) {
      if (b = ec(c), null !== b) {
        a.blockedOn = b;
        r.unstable_runWithPriority(a.priority, function () {
          yc(c);
        });
        return;
      }
    } else if (3 === b && c.stateNode.hydrate) {
      a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
      return;
    }
  }

  a.blockedOn = null;
}

function Qc(a) {
  if (null !== a.blockedOn) return !1;
  var b = Rc(a.topLevelType, a.eventSystemFlags, a.container, a.nativeEvent);

  if (null !== b) {
    var c = Nc(b);
    null !== c && xc(c);
    a.blockedOn = b;
    return !1;
  }

  return !0;
}

function Sc(a, b, c) {
  Qc(a) && c.delete(b);
}

function Tc() {
  for (zc = !1; 0 < Ac.length;) {
    var a = Ac[0];

    if (null !== a.blockedOn) {
      a = Nc(a.blockedOn);
      null !== a && wc(a);
      break;
    }

    var b = Rc(a.topLevelType, a.eventSystemFlags, a.container, a.nativeEvent);
    null !== b ? a.blockedOn = b : Ac.shift();
  }

  null !== Bc && Qc(Bc) && (Bc = null);
  null !== Cc && Qc(Cc) && (Cc = null);
  null !== Dc && Qc(Dc) && (Dc = null);
  Ec.forEach(Sc);
  Fc.forEach(Sc);
}

function Uc(a, b) {
  a.blockedOn === b && (a.blockedOn = null, zc || (zc = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, Tc)));
}

function Vc(a) {
  function b(b) {
    return Uc(b, a);
  }

  if (0 < Ac.length) {
    Uc(Ac[0], a);

    for (var c = 1; c < Ac.length; c++) {
      var d = Ac[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }

  null !== Bc && Uc(Bc, a);
  null !== Cc && Uc(Cc, a);
  null !== Dc && Uc(Dc, a);
  Ec.forEach(b);
  Fc.forEach(b);

  for (c = 0; c < Gc.length; c++) {
    d = Gc[c], d.blockedOn === a && (d.blockedOn = null);
  }

  for (; 0 < Gc.length && (c = Gc[0], null === c.blockedOn);) {
    Pc(c), null === c.blockedOn && Gc.shift();
  }
}

var Wc = {},
    Yc = new Map(),
    Zc = new Map(),
    $c = ["abort", "abort", Xb, "animationEnd", Yb, "animationIteration", Zb, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", $b, "transitionEnd", "waiting", "waiting"];

function ad(a, b) {
  for (var c = 0; c < a.length; c += 2) {
    var d = a[c],
        e = a[c + 1],
        f = "on" + (e[0].toUpperCase() + e.slice(1));
    f = {
      phasedRegistrationNames: {
        bubbled: f,
        captured: f + "Capture"
      },
      dependencies: [d],
      eventPriority: b
    };
    Zc.set(d, b);
    Yc.set(d, f);
    Wc[e] = f;
  }
}

ad("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
ad("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
ad($c, 2);

for (var bd = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), cd = 0; cd < bd.length; cd++) {
  Zc.set(bd[cd], 0);
}

var dd = r.unstable_UserBlockingPriority,
    ed = r.unstable_runWithPriority,
    fd = !0;

function F(a, b) {
  vc(b, a, !1);
}

function vc(a, b, c) {
  var d = Zc.get(b);

  switch (void 0 === d ? 2 : d) {
    case 0:
      d = gd.bind(null, b, 1, a);
      break;

    case 1:
      d = hd.bind(null, b, 1, a);
      break;

    default:
      d = id.bind(null, b, 1, a);
  }

  c ? a.addEventListener(b, d, !0) : a.addEventListener(b, d, !1);
}

function gd(a, b, c, d) {
  Ja || Ha();
  var e = id,
      f = Ja;
  Ja = !0;

  try {
    Ga(e, a, b, c, d);
  } finally {
    (Ja = f) || La();
  }
}

function hd(a, b, c, d) {
  ed(dd, id.bind(null, a, b, c, d));
}

function id(a, b, c, d) {
  if (fd) if (0 < Ac.length && -1 < Hc.indexOf(a)) a = Kc(null, a, b, c, d), Ac.push(a);else {
    var e = Rc(a, b, c, d);
    if (null === e) Lc(a, d);else if (-1 < Hc.indexOf(a)) a = Kc(e, a, b, c, d), Ac.push(a);else if (!Oc(e, a, b, c, d)) {
      Lc(a, d);
      a = rc(a, d, null, b);

      try {
        Ma(sc, a);
      } finally {
        qc(a);
      }
    }
  }
}

function Rc(a, b, c, d) {
  c = nc(d);
  c = tc(c);

  if (null !== c) {
    var e = dc(c);
    if (null === e) c = null;else {
      var f = e.tag;

      if (13 === f) {
        c = ec(e);
        if (null !== c) return c;
        c = null;
      } else if (3 === f) {
        if (e.stateNode.hydrate) return 3 === e.tag ? e.stateNode.containerInfo : null;
        c = null;
      } else e !== c && (c = null);
    }
  }

  a = rc(a, d, c, b);

  try {
    Ma(sc, a);
  } finally {
    qc(a);
  }

  return null;
}

var jd = {
  animationIterationCount: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
},
    kd = ["Webkit", "ms", "Moz", "O"];
Object.keys(jd).forEach(function (a) {
  kd.forEach(function (b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    jd[b] = jd[a];
  });
});

function ld(a, b, c) {
  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || jd.hasOwnProperty(a) && jd[a] ? ("" + b).trim() : b + "px";
}

function md(a, b) {
  a = a.style;

  for (var c in b) {
    if (b.hasOwnProperty(c)) {
      var d = 0 === c.indexOf("--"),
          e = ld(c, b[c], d);
      "float" === c && (c = "cssFloat");
      d ? a.setProperty(c, e) : a[c] = e;
    }
  }
}

var nd = n({
  menuitem: !0
}, {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
});

function od(a, b) {
  if (b) {
    if (nd[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(u(137, a, ""));

    if (null != b.dangerouslySetInnerHTML) {
      if (null != b.children) throw Error(u(60));
      if (!("object" === typeof b.dangerouslySetInnerHTML && "__html" in b.dangerouslySetInnerHTML)) throw Error(u(61));
    }

    if (null != b.style && "object" !== typeof b.style) throw Error(u(62, ""));
  }
}

function pd(a, b) {
  if (-1 === a.indexOf("-")) return "string" === typeof b.is;

  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;

    default:
      return !0;
  }
}

var qd = Mb.html;

function rd(a, b) {
  a = 9 === a.nodeType || 11 === a.nodeType ? a : a.ownerDocument;
  var c = cc(a);
  b = wa[b];

  for (var d = 0; d < b.length; d++) {
    uc(b[d], a, c);
  }
}

function sd() {}

function td(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a) return null;

  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}

function ud(a) {
  for (; a && a.firstChild;) {
    a = a.firstChild;
  }

  return a;
}

function vd(a, b) {
  var c = ud(a);
  a = 0;

  for (var d; c;) {
    if (3 === c.nodeType) {
      d = a + c.textContent.length;
      if (a <= b && d >= b) return {
        node: c,
        offset: b - a
      };
      a = d;
    }

    a: {
      for (; c;) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }

        c = c.parentNode;
      }

      c = void 0;
    }

    c = ud(c);
  }
}

function wd(a, b) {
  return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? wd(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
}

function xd() {
  for (var a = window, b = td(); b instanceof a.HTMLIFrameElement;) {
    try {
      var c = "string" === typeof b.contentWindow.location.href;
    } catch (d) {
      c = !1;
    }

    if (c) a = b.contentWindow;else break;
    b = td(a.document);
  }

  return b;
}

function yd(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}

var zd = "$",
    Ad = "/$",
    Bd = "$?",
    Cd = "$!",
    Dd = null,
    Ed = null;

function Fd(a, b) {
  switch (a) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b.autoFocus;
  }

  return !1;
}

function Gd(a, b) {
  return "textarea" === a || "option" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}

var Hd = "function" === typeof setTimeout ? setTimeout : void 0,
    Id = "function" === typeof clearTimeout ? clearTimeout : void 0;

function Jd(a) {
  for (; null != a; a = a.nextSibling) {
    var b = a.nodeType;
    if (1 === b || 3 === b) break;
  }

  return a;
}

function Kd(a) {
  a = a.previousSibling;

  for (var b = 0; a;) {
    if (8 === a.nodeType) {
      var c = a.data;

      if (c === zd || c === Cd || c === Bd) {
        if (0 === b) return a;
        b--;
      } else c === Ad && b++;
    }

    a = a.previousSibling;
  }

  return null;
}

var Ld = Math.random().toString(36).slice(2),
    Md = "__reactInternalInstance$" + Ld,
    Nd = "__reactEventHandlers$" + Ld,
    Od = "__reactContainere$" + Ld;

function tc(a) {
  var b = a[Md];
  if (b) return b;

  for (var c = a.parentNode; c;) {
    if (b = c[Od] || c[Md]) {
      c = b.alternate;
      if (null !== b.child || null !== c && null !== c.child) for (a = Kd(a); null !== a;) {
        if (c = a[Md]) return c;
        a = Kd(a);
      }
      return b;
    }

    a = c;
    c = a.parentNode;
  }

  return null;
}

function Nc(a) {
  a = a[Md] || a[Od];
  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}

function Pd(a) {
  if (5 === a.tag || 6 === a.tag) return a.stateNode;
  throw Error(u(33));
}

function Qd(a) {
  return a[Nd] || null;
}

function Rd(a) {
  do {
    a = a.return;
  } while (a && 5 !== a.tag);

  return a ? a : null;
}

function Sd(a, b) {
  var c = a.stateNode;
  if (!c) return null;
  var d = la(c);
  if (!d) return null;
  c = d[b];

  a: switch (b) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
      a = !d;
      break a;

    default:
      a = !1;
  }

  if (a) return null;
  if (c && "function" !== typeof c) throw Error(u(231, b, typeof c));
  return c;
}

function Td(a, b, c) {
  if (b = Sd(a, c.dispatchConfig.phasedRegistrationNames[b])) c._dispatchListeners = ic(c._dispatchListeners, b), c._dispatchInstances = ic(c._dispatchInstances, a);
}

function Ud(a) {
  if (a && a.dispatchConfig.phasedRegistrationNames) {
    for (var b = a._targetInst, c = []; b;) {
      c.push(b), b = Rd(b);
    }

    for (b = c.length; 0 < b--;) {
      Td(c[b], "captured", a);
    }

    for (b = 0; b < c.length; b++) {
      Td(c[b], "bubbled", a);
    }
  }
}

function Vd(a, b, c) {
  a && c && c.dispatchConfig.registrationName && (b = Sd(a, c.dispatchConfig.registrationName)) && (c._dispatchListeners = ic(c._dispatchListeners, b), c._dispatchInstances = ic(c._dispatchInstances, a));
}

function Wd(a) {
  a && a.dispatchConfig.registrationName && Vd(a._targetInst, null, a);
}

function Xd(a) {
  jc(a, Ud);
}

var Yd = null,
    Zd = null,
    $d = null;

function ae() {
  if ($d) return $d;
  var a,
      b = Zd,
      c = b.length,
      d,
      e = "value" in Yd ? Yd.value : Yd.textContent,
      f = e.length;

  for (a = 0; a < c && b[a] === e[a]; a++) {
    ;
  }

  var g = c - a;

  for (d = 1; d <= g && b[c - d] === e[f - d]; d++) {
    ;
  }

  return $d = e.slice(a, 1 < d ? 1 - d : void 0);
}

function be() {
  return !0;
}

function ce() {
  return !1;
}

function G(a, b, c, d) {
  this.dispatchConfig = a;
  this._targetInst = b;
  this.nativeEvent = c;
  a = this.constructor.Interface;

  for (var e in a) {
    a.hasOwnProperty(e) && ((b = a[e]) ? this[e] = b(c) : "target" === e ? this.target = d : this[e] = c[e]);
  }

  this.isDefaultPrevented = (null != c.defaultPrevented ? c.defaultPrevented : !1 === c.returnValue) ? be : ce;
  this.isPropagationStopped = ce;
  return this;
}

n(G.prototype, {
  preventDefault: function preventDefault() {
    this.defaultPrevented = !0;
    var a = this.nativeEvent;
    a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = be);
  },
  stopPropagation: function stopPropagation() {
    var a = this.nativeEvent;
    a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = be);
  },
  persist: function persist() {
    this.isPersistent = be;
  },
  isPersistent: ce,
  destructor: function destructor() {
    var a = this.constructor.Interface,
        b;

    for (b in a) {
      this[b] = null;
    }

    this.nativeEvent = this._targetInst = this.dispatchConfig = null;
    this.isPropagationStopped = this.isDefaultPrevented = ce;
    this._dispatchInstances = this._dispatchListeners = null;
  }
});
G.Interface = {
  type: null,
  target: null,
  currentTarget: function currentTarget() {
    return null;
  },
  eventPhase: null,
  bubbles: null,
  cancelable: null,
  timeStamp: function timeStamp(a) {
    return a.timeStamp || Date.now();
  },
  defaultPrevented: null,
  isTrusted: null
};

G.extend = function (a) {
  function b() {}

  function c() {
    return d.apply(this, arguments);
  }

  var d = this;
  b.prototype = d.prototype;
  var e = new b();
  n(e, c.prototype);
  c.prototype = e;
  c.prototype.constructor = c;
  c.Interface = n({}, d.Interface, a);
  c.extend = d.extend;
  de(c);
  return c;
};

de(G);

function ee(a, b, c, d) {
  if (this.eventPool.length) {
    var e = this.eventPool.pop();
    this.call(e, a, b, c, d);
    return e;
  }

  return new this(a, b, c, d);
}

function fe(a) {
  if (!(a instanceof this)) throw Error(u(279));
  a.destructor();
  10 > this.eventPool.length && this.eventPool.push(a);
}

function de(a) {
  a.eventPool = [];
  a.getPooled = ee;
  a.release = fe;
}

var ge = G.extend({
  data: null
}),
    he = G.extend({
  data: null
}),
    ie = [9, 13, 27, 32],
    je = ya && "CompositionEvent" in window,
    ke = null;
ya && "documentMode" in document && (ke = document.documentMode);
var le = ya && "TextEvent" in window && !ke,
    me = ya && (!je || ke && 8 < ke && 11 >= ke),
    ne = String.fromCharCode(32),
    oe = {
  beforeInput: {
    phasedRegistrationNames: {
      bubbled: "onBeforeInput",
      captured: "onBeforeInputCapture"
    },
    dependencies: ["compositionend", "keypress", "textInput", "paste"]
  },
  compositionEnd: {
    phasedRegistrationNames: {
      bubbled: "onCompositionEnd",
      captured: "onCompositionEndCapture"
    },
    dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
  },
  compositionStart: {
    phasedRegistrationNames: {
      bubbled: "onCompositionStart",
      captured: "onCompositionStartCapture"
    },
    dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
  },
  compositionUpdate: {
    phasedRegistrationNames: {
      bubbled: "onCompositionUpdate",
      captured: "onCompositionUpdateCapture"
    },
    dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
  }
},
    pe = !1;

function qe(a, b) {
  switch (a) {
    case "keyup":
      return -1 !== ie.indexOf(b.keyCode);

    case "keydown":
      return 229 !== b.keyCode;

    case "keypress":
    case "mousedown":
    case "blur":
      return !0;

    default:
      return !1;
  }
}

function re(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}

var se = !1;

function te(a, b) {
  switch (a) {
    case "compositionend":
      return re(b);

    case "keypress":
      if (32 !== b.which) return null;
      pe = !0;
      return ne;

    case "textInput":
      return a = b.data, a === ne && pe ? null : a;

    default:
      return null;
  }
}

function ue(a, b) {
  if (se) return "compositionend" === a || !je && qe(a, b) ? (a = ae(), $d = Zd = Yd = null, se = !1, a) : null;

  switch (a) {
    case "paste":
      return null;

    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length) return b.char;
        if (b.which) return String.fromCharCode(b.which);
      }

      return null;

    case "compositionend":
      return me && "ko" !== b.locale ? null : b.data;

    default:
      return null;
  }
}

var ve = {
  eventTypes: oe,
  extractEvents: function extractEvents(a, b, c, d) {
    var e;
    if (je) b: {
      switch (a) {
        case "compositionstart":
          var f = oe.compositionStart;
          break b;

        case "compositionend":
          f = oe.compositionEnd;
          break b;

        case "compositionupdate":
          f = oe.compositionUpdate;
          break b;
      }

      f = void 0;
    } else se ? qe(a, c) && (f = oe.compositionEnd) : "keydown" === a && 229 === c.keyCode && (f = oe.compositionStart);
    f ? (me && "ko" !== c.locale && (se || f !== oe.compositionStart ? f === oe.compositionEnd && se && (e = ae()) : (Yd = d, Zd = "value" in Yd ? Yd.value : Yd.textContent, se = !0)), f = ge.getPooled(f, b, c, d), e ? f.data = e : (e = re(c), null !== e && (f.data = e)), Xd(f), e = f) : e = null;
    (a = le ? te(a, c) : ue(a, c)) ? (b = he.getPooled(oe.beforeInput, b, c, d), b.data = a, Xd(b)) : b = null;
    return null === e ? b : null === b ? e : [e, b];
  }
},
    we = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};

function xe(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b ? !!we[a.type] : "textarea" === b ? !0 : !1;
}

var ye = {
  change: {
    phasedRegistrationNames: {
      bubbled: "onChange",
      captured: "onChangeCapture"
    },
    dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
  }
};

function ze(a, b, c) {
  a = G.getPooled(ye.change, a, b, c);
  a.type = "change";
  Da(c);
  Xd(a);
  return a;
}

var Ae = null,
    Be = null;

function Ce(a) {
  mc(a);
}

function De(a) {
  var b = Pd(a);
  if (yb(b)) return a;
}

function Ee(a, b) {
  if ("change" === a) return b;
}

var Fe = !1;
ya && (Fe = oc("input") && (!document.documentMode || 9 < document.documentMode));

function Ge() {
  Ae && (Ae.detachEvent("onpropertychange", He), Be = Ae = null);
}

function He(a) {
  if ("value" === a.propertyName && De(Be)) if (a = ze(Be, a, nc(a)), Ja) mc(a);else {
    Ja = !0;

    try {
      Fa(Ce, a);
    } finally {
      Ja = !1, La();
    }
  }
}

function Ie(a, b, c) {
  "focus" === a ? (Ge(), Ae = b, Be = c, Ae.attachEvent("onpropertychange", He)) : "blur" === a && Ge();
}

function Je(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a) return De(Be);
}

function Ke(a, b) {
  if ("click" === a) return De(b);
}

function Le(a, b) {
  if ("input" === a || "change" === a) return De(b);
}

var Me = {
  eventTypes: ye,
  _isInputEventSupported: Fe,
  extractEvents: function extractEvents(a, b, c, d) {
    var e = b ? Pd(b) : window,
        f = e.nodeName && e.nodeName.toLowerCase();
    if ("select" === f || "input" === f && "file" === e.type) var g = Ee;else if (xe(e)) {
      if (Fe) g = Le;else {
        g = Je;
        var h = Ie;
      }
    } else (f = e.nodeName) && "input" === f.toLowerCase() && ("checkbox" === e.type || "radio" === e.type) && (g = Ke);
    if (g && (g = g(a, b))) return ze(g, c, d);
    h && h(a, e, b);
    "blur" === a && (a = e._wrapperState) && a.controlled && "number" === e.type && Db(e, "number", e.value);
  }
},
    Ne = G.extend({
  view: null,
  detail: null
}),
    Oe = {
  Alt: "altKey",
  Control: "ctrlKey",
  Meta: "metaKey",
  Shift: "shiftKey"
};

function Pe(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Oe[a]) ? !!b[a] : !1;
}

function Qe() {
  return Pe;
}

var Re = 0,
    Se = 0,
    Te = !1,
    Ue = !1,
    Ve = Ne.extend({
  screenX: null,
  screenY: null,
  clientX: null,
  clientY: null,
  pageX: null,
  pageY: null,
  ctrlKey: null,
  shiftKey: null,
  altKey: null,
  metaKey: null,
  getModifierState: Qe,
  button: null,
  buttons: null,
  relatedTarget: function relatedTarget(a) {
    return a.relatedTarget || (a.fromElement === a.srcElement ? a.toElement : a.fromElement);
  },
  movementX: function movementX(a) {
    if ("movementX" in a) return a.movementX;
    var b = Re;
    Re = a.screenX;
    return Te ? "mousemove" === a.type ? a.screenX - b : 0 : (Te = !0, 0);
  },
  movementY: function movementY(a) {
    if ("movementY" in a) return a.movementY;
    var b = Se;
    Se = a.screenY;
    return Ue ? "mousemove" === a.type ? a.screenY - b : 0 : (Ue = !0, 0);
  }
}),
    We = Ve.extend({
  pointerId: null,
  width: null,
  height: null,
  pressure: null,
  tangentialPressure: null,
  tiltX: null,
  tiltY: null,
  twist: null,
  pointerType: null,
  isPrimary: null
}),
    Xe = {
  mouseEnter: {
    registrationName: "onMouseEnter",
    dependencies: ["mouseout", "mouseover"]
  },
  mouseLeave: {
    registrationName: "onMouseLeave",
    dependencies: ["mouseout", "mouseover"]
  },
  pointerEnter: {
    registrationName: "onPointerEnter",
    dependencies: ["pointerout", "pointerover"]
  },
  pointerLeave: {
    registrationName: "onPointerLeave",
    dependencies: ["pointerout", "pointerover"]
  }
},
    Ye = {
  eventTypes: Xe,
  extractEvents: function extractEvents(a, b, c, d, e) {
    var f = "mouseover" === a || "pointerover" === a,
        g = "mouseout" === a || "pointerout" === a;
    if (f && 0 === (e & 32) && (c.relatedTarget || c.fromElement) || !g && !f) return null;
    f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window;

    if (g) {
      if (g = b, b = (b = c.relatedTarget || c.toElement) ? tc(b) : null, null !== b) {
        var h = dc(b);
        if (b !== h || 5 !== b.tag && 6 !== b.tag) b = null;
      }
    } else g = null;

    if (g === b) return null;

    if ("mouseout" === a || "mouseover" === a) {
      var k = Ve;
      var l = Xe.mouseLeave;
      var m = Xe.mouseEnter;
      var p = "mouse";
    } else if ("pointerout" === a || "pointerover" === a) k = We, l = Xe.pointerLeave, m = Xe.pointerEnter, p = "pointer";

    a = null == g ? f : Pd(g);
    f = null == b ? f : Pd(b);
    l = k.getPooled(l, g, c, d);
    l.type = p + "leave";
    l.target = a;
    l.relatedTarget = f;
    c = k.getPooled(m, b, c, d);
    c.type = p + "enter";
    c.target = f;
    c.relatedTarget = a;
    d = g;
    p = b;
    if (d && p) a: {
      k = d;
      m = p;
      g = 0;

      for (a = k; a; a = Rd(a)) {
        g++;
      }

      a = 0;

      for (b = m; b; b = Rd(b)) {
        a++;
      }

      for (; 0 < g - a;) {
        k = Rd(k), g--;
      }

      for (; 0 < a - g;) {
        m = Rd(m), a--;
      }

      for (; g--;) {
        if (k === m || k === m.alternate) break a;
        k = Rd(k);
        m = Rd(m);
      }

      k = null;
    } else k = null;
    m = k;

    for (k = []; d && d !== m;) {
      g = d.alternate;
      if (null !== g && g === m) break;
      k.push(d);
      d = Rd(d);
    }

    for (d = []; p && p !== m;) {
      g = p.alternate;
      if (null !== g && g === m) break;
      d.push(p);
      p = Rd(p);
    }

    for (p = 0; p < k.length; p++) {
      Vd(k[p], "bubbled", l);
    }

    for (p = d.length; 0 < p--;) {
      Vd(d[p], "captured", c);
    }

    return 0 === (e & 64) ? [l] : [l, c];
  }
};

function Ze(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}

var $e = "function" === typeof Object.is ? Object.is : Ze,
    af = Object.prototype.hasOwnProperty;

function bf(a, b) {
  if ($e(a, b)) return !0;
  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
  var c = Object.keys(a),
      d = Object.keys(b);
  if (c.length !== d.length) return !1;

  for (d = 0; d < c.length; d++) {
    if (!af.call(b, c[d]) || !$e(a[c[d]], b[c[d]])) return !1;
  }

  return !0;
}

var cf = ya && "documentMode" in document && 11 >= document.documentMode,
    df = {
  select: {
    phasedRegistrationNames: {
      bubbled: "onSelect",
      captured: "onSelectCapture"
    },
    dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
  }
},
    ef = null,
    ff = null,
    gf = null,
    hf = !1;

function jf(a, b) {
  var c = b.window === b ? b.document : 9 === b.nodeType ? b : b.ownerDocument;
  if (hf || null == ef || ef !== td(c)) return null;
  c = ef;
  "selectionStart" in c && yd(c) ? c = {
    start: c.selectionStart,
    end: c.selectionEnd
  } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
    anchorNode: c.anchorNode,
    anchorOffset: c.anchorOffset,
    focusNode: c.focusNode,
    focusOffset: c.focusOffset
  });
  return gf && bf(gf, c) ? null : (gf = c, a = G.getPooled(df.select, ff, a, b), a.type = "select", a.target = ef, Xd(a), a);
}

var kf = {
  eventTypes: df,
  extractEvents: function extractEvents(a, b, c, d, e, f) {
    e = f || (d.window === d ? d.document : 9 === d.nodeType ? d : d.ownerDocument);

    if (!(f = !e)) {
      a: {
        e = cc(e);
        f = wa.onSelect;

        for (var g = 0; g < f.length; g++) {
          if (!e.has(f[g])) {
            e = !1;
            break a;
          }
        }

        e = !0;
      }

      f = !e;
    }

    if (f) return null;
    e = b ? Pd(b) : window;

    switch (a) {
      case "focus":
        if (xe(e) || "true" === e.contentEditable) ef = e, ff = b, gf = null;
        break;

      case "blur":
        gf = ff = ef = null;
        break;

      case "mousedown":
        hf = !0;
        break;

      case "contextmenu":
      case "mouseup":
      case "dragend":
        return hf = !1, jf(c, d);

      case "selectionchange":
        if (cf) break;

      case "keydown":
      case "keyup":
        return jf(c, d);
    }

    return null;
  }
},
    lf = G.extend({
  animationName: null,
  elapsedTime: null,
  pseudoElement: null
}),
    mf = G.extend({
  clipboardData: function clipboardData(a) {
    return "clipboardData" in a ? a.clipboardData : window.clipboardData;
  }
}),
    nf = Ne.extend({
  relatedTarget: null
});

function of(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}

var pf = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
},
    qf = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
},
    rf = Ne.extend({
  key: function key(a) {
    if (a.key) {
      var b = pf[a.key] || a.key;
      if ("Unidentified" !== b) return b;
    }

    return "keypress" === a.type ? (a = of(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? qf[a.keyCode] || "Unidentified" : "";
  },
  location: null,
  ctrlKey: null,
  shiftKey: null,
  altKey: null,
  metaKey: null,
  repeat: null,
  locale: null,
  getModifierState: Qe,
  charCode: function charCode(a) {
    return "keypress" === a.type ? of(a) : 0;
  },
  keyCode: function keyCode(a) {
    return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
  },
  which: function which(a) {
    return "keypress" === a.type ? of(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
  }
}),
    sf = Ve.extend({
  dataTransfer: null
}),
    tf = Ne.extend({
  touches: null,
  targetTouches: null,
  changedTouches: null,
  altKey: null,
  metaKey: null,
  ctrlKey: null,
  shiftKey: null,
  getModifierState: Qe
}),
    uf = G.extend({
  propertyName: null,
  elapsedTime: null,
  pseudoElement: null
}),
    vf = Ve.extend({
  deltaX: function deltaX(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function deltaY(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: null,
  deltaMode: null
}),
    wf = {
  eventTypes: Wc,
  extractEvents: function extractEvents(a, b, c, d) {
    var e = Yc.get(a);
    if (!e) return null;

    switch (a) {
      case "keypress":
        if (0 === of(c)) return null;

      case "keydown":
      case "keyup":
        a = rf;
        break;

      case "blur":
      case "focus":
        a = nf;
        break;

      case "click":
        if (2 === c.button) return null;

      case "auxclick":
      case "dblclick":
      case "mousedown":
      case "mousemove":
      case "mouseup":
      case "mouseout":
      case "mouseover":
      case "contextmenu":
        a = Ve;
        break;

      case "drag":
      case "dragend":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "dragstart":
      case "drop":
        a = sf;
        break;

      case "touchcancel":
      case "touchend":
      case "touchmove":
      case "touchstart":
        a = tf;
        break;

      case Xb:
      case Yb:
      case Zb:
        a = lf;
        break;

      case $b:
        a = uf;
        break;

      case "scroll":
        a = Ne;
        break;

      case "wheel":
        a = vf;
        break;

      case "copy":
      case "cut":
      case "paste":
        a = mf;
        break;

      case "gotpointercapture":
      case "lostpointercapture":
      case "pointercancel":
      case "pointerdown":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "pointerup":
        a = We;
        break;

      default:
        a = G;
    }

    b = a.getPooled(e, b, c, d);
    Xd(b);
    return b;
  }
};
if (pa) throw Error(u(101));
pa = Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));
ra();
var xf = Nc;
la = Qd;
ma = xf;
na = Pd;
xa({
  SimpleEventPlugin: wf,
  EnterLeaveEventPlugin: Ye,
  ChangeEventPlugin: Me,
  SelectEventPlugin: kf,
  BeforeInputEventPlugin: ve
});
var yf = [],
    zf = -1;

function H(a) {
  0 > zf || (a.current = yf[zf], yf[zf] = null, zf--);
}

function I(a, b) {
  zf++;
  yf[zf] = a.current;
  a.current = b;
}

var Af = {},
    J = {
  current: Af
},
    K = {
  current: !1
},
    Bf = Af;

function Cf(a, b) {
  var c = a.type.contextTypes;
  if (!c) return Af;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
  var e = {},
      f;

  for (f in c) {
    e[f] = b[f];
  }

  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}

function L(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}

function Df() {
  H(K);
  H(J);
}

function Ef(a, b, c) {
  if (J.current !== Af) throw Error(u(168));
  I(J, b);
  I(K, c);
}

function Ff(a, b, c) {
  var d = a.stateNode;
  a = b.childContextTypes;
  if ("function" !== typeof d.getChildContext) return c;
  d = d.getChildContext();

  for (var e in d) {
    if (!(e in a)) throw Error(u(108, pb(b) || "Unknown", e));
  }

  return n({}, c, {}, d);
}

function Gf(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Af;
  Bf = J.current;
  I(J, a);
  I(K, K.current);
  return !0;
}

function Hf(a, b, c) {
  var d = a.stateNode;
  if (!d) throw Error(u(169));
  c ? (a = Ff(a, b, Bf), d.__reactInternalMemoizedMergedChildContext = a, H(K), H(J), I(J, a)) : H(K);
  I(K, c);
}

var If = r.unstable_runWithPriority,
    Jf = r.unstable_scheduleCallback,
    Kf = r.unstable_cancelCallback,
    Lf = r.unstable_requestPaint,
    Mf = r.unstable_now,
    Nf = r.unstable_getCurrentPriorityLevel,
    Of = r.unstable_ImmediatePriority,
    Pf = r.unstable_UserBlockingPriority,
    Qf = r.unstable_NormalPriority,
    Rf = r.unstable_LowPriority,
    Sf = r.unstable_IdlePriority,
    Tf = {},
    Uf = r.unstable_shouldYield,
    Vf = void 0 !== Lf ? Lf : function () {},
    Wf = null,
    Xf = null,
    Yf = !1,
    Zf = Mf(),
    $f = 1E4 > Zf ? Mf : function () {
  return Mf() - Zf;
};

function ag() {
  switch (Nf()) {
    case Of:
      return 99;

    case Pf:
      return 98;

    case Qf:
      return 97;

    case Rf:
      return 96;

    case Sf:
      return 95;

    default:
      throw Error(u(332));
  }
}

function bg(a) {
  switch (a) {
    case 99:
      return Of;

    case 98:
      return Pf;

    case 97:
      return Qf;

    case 96:
      return Rf;

    case 95:
      return Sf;

    default:
      throw Error(u(332));
  }
}

function cg(a, b) {
  a = bg(a);
  return If(a, b);
}

function dg(a, b, c) {
  a = bg(a);
  return Jf(a, b, c);
}

function eg(a) {
  null === Wf ? (Wf = [a], Xf = Jf(Of, fg)) : Wf.push(a);
  return Tf;
}

function gg() {
  if (null !== Xf) {
    var a = Xf;
    Xf = null;
    Kf(a);
  }

  fg();
}

function fg() {
  if (!Yf && null !== Wf) {
    Yf = !0;
    var a = 0;

    try {
      var b = Wf;
      cg(99, function () {
        for (; a < b.length; a++) {
          var c = b[a];

          do {
            c = c(!0);
          } while (null !== c);
        }
      });
      Wf = null;
    } catch (c) {
      throw null !== Wf && (Wf = Wf.slice(a + 1)), Jf(Of, gg), c;
    } finally {
      Yf = !1;
    }
  }
}

function hg(a, b, c) {
  c /= 10;
  return 1073741821 - (((1073741821 - a + b / 10) / c | 0) + 1) * c;
}

function ig(a, b) {
  if (a && a.defaultProps) {
    b = n({}, b);
    a = a.defaultProps;

    for (var c in a) {
      void 0 === b[c] && (b[c] = a[c]);
    }
  }

  return b;
}

var jg = {
  current: null
},
    kg = null,
    lg = null,
    mg = null;

function ng() {
  mg = lg = kg = null;
}

function og(a) {
  var b = jg.current;
  H(jg);
  a.type._context._currentValue = b;
}

function pg(a, b) {
  for (; null !== a;) {
    var c = a.alternate;
    if (a.childExpirationTime < b) a.childExpirationTime = b, null !== c && c.childExpirationTime < b && (c.childExpirationTime = b);else if (null !== c && c.childExpirationTime < b) c.childExpirationTime = b;else break;
    a = a.return;
  }
}

function qg(a, b) {
  kg = a;
  mg = lg = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (a.expirationTime >= b && (rg = !0), a.firstContext = null);
}

function sg(a, b) {
  if (mg !== a && !1 !== b && 0 !== b) {
    if ("number" !== typeof b || 1073741823 === b) mg = a, b = 1073741823;
    b = {
      context: a,
      observedBits: b,
      next: null
    };

    if (null === lg) {
      if (null === kg) throw Error(u(308));
      lg = b;
      kg.dependencies = {
        expirationTime: 0,
        firstContext: b,
        responders: null
      };
    } else lg = lg.next = b;
  }

  return a._currentValue;
}

var tg = !1;

function ug(a) {
  a.updateQueue = {
    baseState: a.memoizedState,
    baseQueue: null,
    shared: {
      pending: null
    },
    effects: null
  };
}

function vg(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = {
    baseState: a.baseState,
    baseQueue: a.baseQueue,
    shared: a.shared,
    effects: a.effects
  });
}

function wg(a, b) {
  a = {
    expirationTime: a,
    suspenseConfig: b,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  };
  return a.next = a;
}

function xg(a, b) {
  a = a.updateQueue;

  if (null !== a) {
    a = a.shared;
    var c = a.pending;
    null === c ? b.next = b : (b.next = c.next, c.next = b);
    a.pending = b;
  }
}

function yg(a, b) {
  var c = a.alternate;
  null !== c && vg(c, a);
  a = a.updateQueue;
  c = a.baseQueue;
  null === c ? (a.baseQueue = b.next = b, b.next = b) : (b.next = c.next, c.next = b);
}

function zg(a, b, c, d) {
  var e = a.updateQueue;
  tg = !1;
  var f = e.baseQueue,
      g = e.shared.pending;

  if (null !== g) {
    if (null !== f) {
      var h = f.next;
      f.next = g.next;
      g.next = h;
    }

    f = g;
    e.shared.pending = null;
    h = a.alternate;
    null !== h && (h = h.updateQueue, null !== h && (h.baseQueue = g));
  }

  if (null !== f) {
    h = f.next;
    var k = e.baseState,
        l = 0,
        m = null,
        p = null,
        x = null;

    if (null !== h) {
      var z = h;

      do {
        g = z.expirationTime;

        if (g < d) {
          var ca = {
            expirationTime: z.expirationTime,
            suspenseConfig: z.suspenseConfig,
            tag: z.tag,
            payload: z.payload,
            callback: z.callback,
            next: null
          };
          null === x ? (p = x = ca, m = k) : x = x.next = ca;
          g > l && (l = g);
        } else {
          null !== x && (x = x.next = {
            expirationTime: 1073741823,
            suspenseConfig: z.suspenseConfig,
            tag: z.tag,
            payload: z.payload,
            callback: z.callback,
            next: null
          });
          Ag(g, z.suspenseConfig);

          a: {
            var D = a,
                t = z;
            g = b;
            ca = c;

            switch (t.tag) {
              case 1:
                D = t.payload;

                if ("function" === typeof D) {
                  k = D.call(ca, k, g);
                  break a;
                }

                k = D;
                break a;

              case 3:
                D.effectTag = D.effectTag & -4097 | 64;

              case 0:
                D = t.payload;
                g = "function" === typeof D ? D.call(ca, k, g) : D;
                if (null === g || void 0 === g) break a;
                k = n({}, k, g);
                break a;

              case 2:
                tg = !0;
            }
          }

          null !== z.callback && (a.effectTag |= 32, g = e.effects, null === g ? e.effects = [z] : g.push(z));
        }

        z = z.next;
        if (null === z || z === h) if (g = e.shared.pending, null === g) break;else z = f.next = g.next, g.next = h, e.baseQueue = f = g, e.shared.pending = null;
      } while (1);
    }

    null === x ? m = k : x.next = p;
    e.baseState = m;
    e.baseQueue = x;
    Bg(l);
    a.expirationTime = l;
    a.memoizedState = k;
  }
}

function Cg(a, b, c) {
  a = b.effects;
  b.effects = null;
  if (null !== a) for (b = 0; b < a.length; b++) {
    var d = a[b],
        e = d.callback;

    if (null !== e) {
      d.callback = null;
      d = e;
      e = c;
      if ("function" !== typeof d) throw Error(u(191, d));
      d.call(e);
    }
  }
}

var Dg = Wa.ReactCurrentBatchConfig,
    Eg = new aa.Component().refs;

function Fg(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = null === c || void 0 === c ? b : n({}, b, c);
  a.memoizedState = c;
  0 === a.expirationTime && (a.updateQueue.baseState = c);
}

var Jg = {
  isMounted: function isMounted(a) {
    return (a = a._reactInternalFiber) ? dc(a) === a : !1;
  },
  enqueueSetState: function enqueueSetState(a, b, c) {
    a = a._reactInternalFiber;
    var d = Gg(),
        e = Dg.suspense;
    d = Hg(d, a, e);
    e = wg(d, e);
    e.payload = b;
    void 0 !== c && null !== c && (e.callback = c);
    xg(a, e);
    Ig(a, d);
  },
  enqueueReplaceState: function enqueueReplaceState(a, b, c) {
    a = a._reactInternalFiber;
    var d = Gg(),
        e = Dg.suspense;
    d = Hg(d, a, e);
    e = wg(d, e);
    e.tag = 1;
    e.payload = b;
    void 0 !== c && null !== c && (e.callback = c);
    xg(a, e);
    Ig(a, d);
  },
  enqueueForceUpdate: function enqueueForceUpdate(a, b) {
    a = a._reactInternalFiber;
    var c = Gg(),
        d = Dg.suspense;
    c = Hg(c, a, d);
    d = wg(c, d);
    d.tag = 2;
    void 0 !== b && null !== b && (d.callback = b);
    xg(a, d);
    Ig(a, c);
  }
};

function Kg(a, b, c, d, e, f, g) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !bf(c, d) || !bf(e, f) : !0;
}

function Lg(a, b, c) {
  var d = !1,
      e = Af;
  var f = b.contextType;
  "object" === typeof f && null !== f ? f = sg(f) : (e = L(b) ? Bf : J.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Cf(a, e) : Af);
  b = new b(c, f);
  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
  b.updater = Jg;
  a.stateNode = b;
  b._reactInternalFiber = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
  return b;
}

function Mg(a, b, c, d) {
  a = b.state;
  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && Jg.enqueueReplaceState(b, b.state, null);
}

function Ng(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = Eg;
  ug(a);
  var f = b.contextType;
  "object" === typeof f && null !== f ? e.context = sg(f) : (f = L(b) ? Bf : J.current, e.context = Cf(a, f));
  zg(a, c, e, d);
  e.state = a.memoizedState;
  f = b.getDerivedStateFromProps;
  "function" === typeof f && (Fg(a, b, f, c), e.state = a.memoizedState);
  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Jg.enqueueReplaceState(e, e.state, null), zg(a, c, e, d), e.state = a.memoizedState);
  "function" === typeof e.componentDidMount && (a.effectTag |= 4);
}

var Og = Array.isArray;

function Pg(a, b, c) {
  a = c.ref;

  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c._owner) {
      c = c._owner;

      if (c) {
        if (1 !== c.tag) throw Error(u(309));
        var d = c.stateNode;
      }

      if (!d) throw Error(u(147, a));
      var e = "" + a;
      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === e) return b.ref;

      b = function b(a) {
        var b = d.refs;
        b === Eg && (b = d.refs = {});
        null === a ? delete b[e] : b[e] = a;
      };

      b._stringRef = e;
      return b;
    }

    if ("string" !== typeof a) throw Error(u(284));
    if (!c._owner) throw Error(u(290, a));
  }

  return a;
}

function Qg(a, b) {
  if ("textarea" !== a.type) throw Error(u(31, "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b, ""));
}

function Rg(a) {
  function b(b, c) {
    if (a) {
      var d = b.lastEffect;
      null !== d ? (d.nextEffect = c, b.lastEffect = c) : b.firstEffect = b.lastEffect = c;
      c.nextEffect = null;
      c.effectTag = 8;
    }
  }

  function c(c, d) {
    if (!a) return null;

    for (; null !== d;) {
      b(c, d), d = d.sibling;
    }

    return null;
  }

  function d(a, b) {
    for (a = new Map(); null !== b;) {
      null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
    }

    return a;
  }

  function e(a, b) {
    a = Sg(a, b);
    a.index = 0;
    a.sibling = null;
    return a;
  }

  function f(b, c, d) {
    b.index = d;
    if (!a) return c;
    d = b.alternate;
    if (null !== d) return d = d.index, d < c ? (b.effectTag = 2, c) : d;
    b.effectTag = 2;
    return c;
  }

  function g(b) {
    a && null === b.alternate && (b.effectTag = 2);
    return b;
  }

  function h(a, b, c, d) {
    if (null === b || 6 !== b.tag) return b = Tg(c, a.mode, d), b.return = a, b;
    b = e(b, c);
    b.return = a;
    return b;
  }

  function k(a, b, c, d) {
    if (null !== b && b.elementType === c.type) return d = e(b, c.props), d.ref = Pg(a, b, c), d.return = a, d;
    d = Ug(c.type, c.key, c.props, null, a.mode, d);
    d.ref = Pg(a, b, c);
    d.return = a;
    return d;
  }

  function l(a, b, c, d) {
    if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = Vg(c, a.mode, d), b.return = a, b;
    b = e(b, c.children || []);
    b.return = a;
    return b;
  }

  function m(a, b, c, d, f) {
    if (null === b || 7 !== b.tag) return b = Wg(c, a.mode, d, f), b.return = a, b;
    b = e(b, c);
    b.return = a;
    return b;
  }

  function p(a, b, c) {
    if ("string" === typeof b || "number" === typeof b) return b = Tg("" + b, a.mode, c), b.return = a, b;

    if ("object" === typeof b && null !== b) {
      switch (b.$$typeof) {
        case Za:
          return c = Ug(b.type, b.key, b.props, null, a.mode, c), c.ref = Pg(a, null, b), c.return = a, c;

        case $a:
          return b = Vg(b, a.mode, c), b.return = a, b;
      }

      if (Og(b) || nb(b)) return b = Wg(b, a.mode, c, null), b.return = a, b;
      Qg(a, b);
    }

    return null;
  }

  function x(a, b, c, d) {
    var e = null !== b ? b.key : null;
    if ("string" === typeof c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);

    if ("object" === typeof c && null !== c) {
      switch (c.$$typeof) {
        case Za:
          return c.key === e ? c.type === ab ? m(a, b, c.props.children, d, e) : k(a, b, c, d) : null;

        case $a:
          return c.key === e ? l(a, b, c, d) : null;
      }

      if (Og(c) || nb(c)) return null !== e ? null : m(a, b, c, d, null);
      Qg(a, c);
    }

    return null;
  }

  function z(a, b, c, d, e) {
    if ("string" === typeof d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);

    if ("object" === typeof d && null !== d) {
      switch (d.$$typeof) {
        case Za:
          return a = a.get(null === d.key ? c : d.key) || null, d.type === ab ? m(b, a, d.props.children, e, d.key) : k(b, a, d, e);

        case $a:
          return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
      }

      if (Og(d) || nb(d)) return a = a.get(c) || null, m(b, a, d, e, null);
      Qg(b, d);
    }

    return null;
  }

  function ca(e, g, h, k) {
    for (var l = null, t = null, m = g, y = g = 0, A = null; null !== m && y < h.length; y++) {
      m.index > y ? (A = m, m = null) : A = m.sibling;
      var q = x(e, m, h[y], k);

      if (null === q) {
        null === m && (m = A);
        break;
      }

      a && m && null === q.alternate && b(e, m);
      g = f(q, g, y);
      null === t ? l = q : t.sibling = q;
      t = q;
      m = A;
    }

    if (y === h.length) return c(e, m), l;

    if (null === m) {
      for (; y < h.length; y++) {
        m = p(e, h[y], k), null !== m && (g = f(m, g, y), null === t ? l = m : t.sibling = m, t = m);
      }

      return l;
    }

    for (m = d(e, m); y < h.length; y++) {
      A = z(m, e, y, h[y], k), null !== A && (a && null !== A.alternate && m.delete(null === A.key ? y : A.key), g = f(A, g, y), null === t ? l = A : t.sibling = A, t = A);
    }

    a && m.forEach(function (a) {
      return b(e, a);
    });
    return l;
  }

  function D(e, g, h, l) {
    var k = nb(h);
    if ("function" !== typeof k) throw Error(u(150));
    h = k.call(h);
    if (null == h) throw Error(u(151));

    for (var m = k = null, t = g, y = g = 0, A = null, q = h.next(); null !== t && !q.done; y++, q = h.next()) {
      t.index > y ? (A = t, t = null) : A = t.sibling;
      var D = x(e, t, q.value, l);

      if (null === D) {
        null === t && (t = A);
        break;
      }

      a && t && null === D.alternate && b(e, t);
      g = f(D, g, y);
      null === m ? k = D : m.sibling = D;
      m = D;
      t = A;
    }

    if (q.done) return c(e, t), k;

    if (null === t) {
      for (; !q.done; y++, q = h.next()) {
        q = p(e, q.value, l), null !== q && (g = f(q, g, y), null === m ? k = q : m.sibling = q, m = q);
      }

      return k;
    }

    for (t = d(e, t); !q.done; y++, q = h.next()) {
      q = z(t, e, y, q.value, l), null !== q && (a && null !== q.alternate && t.delete(null === q.key ? y : q.key), g = f(q, g, y), null === m ? k = q : m.sibling = q, m = q);
    }

    a && t.forEach(function (a) {
      return b(e, a);
    });
    return k;
  }

  return function (a, d, f, h) {
    var k = "object" === typeof f && null !== f && f.type === ab && null === f.key;
    k && (f = f.props.children);
    var l = "object" === typeof f && null !== f;
    if (l) switch (f.$$typeof) {
      case Za:
        a: {
          l = f.key;

          for (k = d; null !== k;) {
            if (k.key === l) {
              switch (k.tag) {
                case 7:
                  if (f.type === ab) {
                    c(a, k.sibling);
                    d = e(k, f.props.children);
                    d.return = a;
                    a = d;
                    break a;
                  }

                  break;

                default:
                  if (k.elementType === f.type) {
                    c(a, k.sibling);
                    d = e(k, f.props);
                    d.ref = Pg(a, k, f);
                    d.return = a;
                    a = d;
                    break a;
                  }

              }

              c(a, k);
              break;
            } else b(a, k);

            k = k.sibling;
          }

          f.type === ab ? (d = Wg(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = Ug(f.type, f.key, f.props, null, a.mode, h), h.ref = Pg(a, d, f), h.return = a, a = h);
        }

        return g(a);

      case $a:
        a: {
          for (k = f.key; null !== d;) {
            if (d.key === k) {
              if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                c(a, d.sibling);
                d = e(d, f.children || []);
                d.return = a;
                a = d;
                break a;
              } else {
                c(a, d);
                break;
              }
            } else b(a, d);
            d = d.sibling;
          }

          d = Vg(f, a.mode, h);
          d.return = a;
          a = d;
        }

        return g(a);
    }
    if ("string" === typeof f || "number" === typeof f) return f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = Tg(f, a.mode, h), d.return = a, a = d), g(a);
    if (Og(f)) return ca(a, d, f, h);
    if (nb(f)) return D(a, d, f, h);
    l && Qg(a, f);
    if ("undefined" === typeof f && !k) switch (a.tag) {
      case 1:
      case 0:
        throw a = a.type, Error(u(152, a.displayName || a.name || "Component"));
    }
    return c(a, d);
  };
}

var Xg = Rg(!0),
    Yg = Rg(!1),
    Zg = {},
    $g = {
  current: Zg
},
    ah = {
  current: Zg
},
    bh = {
  current: Zg
};

function ch(a) {
  if (a === Zg) throw Error(u(174));
  return a;
}

function dh(a, b) {
  I(bh, b);
  I(ah, a);
  I($g, Zg);
  a = b.nodeType;

  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : Ob(null, "");
      break;

    default:
      a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = Ob(b, a);
  }

  H($g);
  I($g, b);
}

function eh() {
  H($g);
  H(ah);
  H(bh);
}

function fh(a) {
  ch(bh.current);
  var b = ch($g.current);
  var c = Ob(b, a.type);
  b !== c && (I(ah, a), I($g, c));
}

function gh(a) {
  ah.current === a && (H($g), H(ah));
}

var M = {
  current: 0
};

function hh(a) {
  for (var b = a; null !== b;) {
    if (13 === b.tag) {
      var c = b.memoizedState;
      if (null !== c && (c = c.dehydrated, null === c || c.data === Bd || c.data === Cd)) return b;
    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
      if (0 !== (b.effectTag & 64)) return b;
    } else if (null !== b.child) {
      b.child.return = b;
      b = b.child;
      continue;
    }

    if (b === a) break;

    for (; null === b.sibling;) {
      if (null === b.return || b.return === a) return null;
      b = b.return;
    }

    b.sibling.return = b.return;
    b = b.sibling;
  }

  return null;
}

function ih(a, b) {
  return {
    responder: a,
    props: b
  };
}

var jh = Wa.ReactCurrentDispatcher,
    kh = Wa.ReactCurrentBatchConfig,
    lh = 0,
    N = null,
    O = null,
    P = null,
    mh = !1;

function Q() {
  throw Error(u(321));
}

function nh(a, b) {
  if (null === b) return !1;

  for (var c = 0; c < b.length && c < a.length; c++) {
    if (!$e(a[c], b[c])) return !1;
  }

  return !0;
}

function oh(a, b, c, d, e, f) {
  lh = f;
  N = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.expirationTime = 0;
  jh.current = null === a || null === a.memoizedState ? ph : qh;
  a = c(d, e);

  if (b.expirationTime === lh) {
    f = 0;

    do {
      b.expirationTime = 0;
      if (!(25 > f)) throw Error(u(301));
      f += 1;
      P = O = null;
      b.updateQueue = null;
      jh.current = rh;
      a = c(d, e);
    } while (b.expirationTime === lh);
  }

  jh.current = sh;
  b = null !== O && null !== O.next;
  lh = 0;
  P = O = N = null;
  mh = !1;
  if (b) throw Error(u(300));
  return a;
}

function th() {
  var a = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  null === P ? N.memoizedState = P = a : P = P.next = a;
  return P;
}

function uh() {
  if (null === O) {
    var a = N.alternate;
    a = null !== a ? a.memoizedState : null;
  } else a = O.next;

  var b = null === P ? N.memoizedState : P.next;
  if (null !== b) P = b, O = a;else {
    if (null === a) throw Error(u(310));
    O = a;
    a = {
      memoizedState: O.memoizedState,
      baseState: O.baseState,
      baseQueue: O.baseQueue,
      queue: O.queue,
      next: null
    };
    null === P ? N.memoizedState = P = a : P = P.next = a;
  }
  return P;
}

function vh(a, b) {
  return "function" === typeof b ? b(a) : b;
}

function wh(a) {
  var b = uh(),
      c = b.queue;
  if (null === c) throw Error(u(311));
  c.lastRenderedReducer = a;
  var d = O,
      e = d.baseQueue,
      f = c.pending;

  if (null !== f) {
    if (null !== e) {
      var g = e.next;
      e.next = f.next;
      f.next = g;
    }

    d.baseQueue = e = f;
    c.pending = null;
  }

  if (null !== e) {
    e = e.next;
    d = d.baseState;
    var h = g = f = null,
        k = e;

    do {
      var l = k.expirationTime;

      if (l < lh) {
        var m = {
          expirationTime: k.expirationTime,
          suspenseConfig: k.suspenseConfig,
          action: k.action,
          eagerReducer: k.eagerReducer,
          eagerState: k.eagerState,
          next: null
        };
        null === h ? (g = h = m, f = d) : h = h.next = m;
        l > N.expirationTime && (N.expirationTime = l, Bg(l));
      } else null !== h && (h = h.next = {
        expirationTime: 1073741823,
        suspenseConfig: k.suspenseConfig,
        action: k.action,
        eagerReducer: k.eagerReducer,
        eagerState: k.eagerState,
        next: null
      }), Ag(l, k.suspenseConfig), d = k.eagerReducer === a ? k.eagerState : a(d, k.action);

      k = k.next;
    } while (null !== k && k !== e);

    null === h ? f = d : h.next = g;
    $e(d, b.memoizedState) || (rg = !0);
    b.memoizedState = d;
    b.baseState = f;
    b.baseQueue = h;
    c.lastRenderedState = d;
  }

  return [b.memoizedState, c.dispatch];
}

function xh(a) {
  var b = uh(),
      c = b.queue;
  if (null === c) throw Error(u(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch,
      e = c.pending,
      f = b.memoizedState;

  if (null !== e) {
    c.pending = null;
    var g = e = e.next;

    do {
      f = a(f, g.action), g = g.next;
    } while (g !== e);

    $e(f, b.memoizedState) || (rg = !0);
    b.memoizedState = f;
    null === b.baseQueue && (b.baseState = f);
    c.lastRenderedState = f;
  }

  return [f, d];
}

function yh(a) {
  var b = th();
  "function" === typeof a && (a = a());
  b.memoizedState = b.baseState = a;
  a = b.queue = {
    pending: null,
    dispatch: null,
    lastRenderedReducer: vh,
    lastRenderedState: a
  };
  a = a.dispatch = zh.bind(null, N, a);
  return [b.memoizedState, a];
}

function Ah(a, b, c, d) {
  a = {
    tag: a,
    create: b,
    destroy: c,
    deps: d,
    next: null
  };
  b = N.updateQueue;
  null === b ? (b = {
    lastEffect: null
  }, N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
  return a;
}

function Bh() {
  return uh().memoizedState;
}

function Ch(a, b, c, d) {
  var e = th();
  N.effectTag |= a;
  e.memoizedState = Ah(1 | b, c, void 0, void 0 === d ? null : d);
}

function Dh(a, b, c, d) {
  var e = uh();
  d = void 0 === d ? null : d;
  var f = void 0;

  if (null !== O) {
    var g = O.memoizedState;
    f = g.destroy;

    if (null !== d && nh(d, g.deps)) {
      Ah(b, c, f, d);
      return;
    }
  }

  N.effectTag |= a;
  e.memoizedState = Ah(1 | b, c, f, d);
}

function Eh(a, b) {
  return Ch(516, 4, a, b);
}

function Fh(a, b) {
  return Dh(516, 4, a, b);
}

function Gh(a, b) {
  return Dh(4, 2, a, b);
}

function Hh(a, b) {
  if ("function" === typeof b) return a = a(), b(a), function () {
    b(null);
  };
  if (null !== b && void 0 !== b) return a = a(), b.current = a, function () {
    b.current = null;
  };
}

function Ih(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return Dh(4, 2, Hh.bind(null, b, a), c);
}

function Jh() {}

function Kh(a, b) {
  th().memoizedState = [a, void 0 === b ? null : b];
  return a;
}

function Lh(a, b) {
  var c = uh();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && nh(b, d[1])) return d[0];
  c.memoizedState = [a, b];
  return a;
}

function Mh(a, b) {
  var c = uh();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && nh(b, d[1])) return d[0];
  a = a();
  c.memoizedState = [a, b];
  return a;
}

function Nh(a, b, c) {
  var d = ag();
  cg(98 > d ? 98 : d, function () {
    a(!0);
  });
  cg(97 < d ? 97 : d, function () {
    var d = kh.suspense;
    kh.suspense = void 0 === b ? null : b;

    try {
      a(!1), c();
    } finally {
      kh.suspense = d;
    }
  });
}

function zh(a, b, c) {
  var d = Gg(),
      e = Dg.suspense;
  d = Hg(d, a, e);
  e = {
    expirationTime: d,
    suspenseConfig: e,
    action: c,
    eagerReducer: null,
    eagerState: null,
    next: null
  };
  var f = b.pending;
  null === f ? e.next = e : (e.next = f.next, f.next = e);
  b.pending = e;
  f = a.alternate;
  if (a === N || null !== f && f === N) mh = !0, e.expirationTime = lh, N.expirationTime = lh;else {
    if (0 === a.expirationTime && (null === f || 0 === f.expirationTime) && (f = b.lastRenderedReducer, null !== f)) try {
      var g = b.lastRenderedState,
          h = f(g, c);
      e.eagerReducer = f;
      e.eagerState = h;
      if ($e(h, g)) return;
    } catch (k) {} finally {}
    Ig(a, d);
  }
}

var sh = {
  readContext: sg,
  useCallback: Q,
  useContext: Q,
  useEffect: Q,
  useImperativeHandle: Q,
  useLayoutEffect: Q,
  useMemo: Q,
  useReducer: Q,
  useRef: Q,
  useState: Q,
  useDebugValue: Q,
  useResponder: Q,
  useDeferredValue: Q,
  useTransition: Q
},
    ph = {
  readContext: sg,
  useCallback: Kh,
  useContext: sg,
  useEffect: Eh,
  useImperativeHandle: function useImperativeHandle(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return Ch(4, 2, Hh.bind(null, b, a), c);
  },
  useLayoutEffect: function useLayoutEffect(a, b) {
    return Ch(4, 2, a, b);
  },
  useMemo: function useMemo(a, b) {
    var c = th();
    b = void 0 === b ? null : b;
    a = a();
    c.memoizedState = [a, b];
    return a;
  },
  useReducer: function useReducer(a, b, c) {
    var d = th();
    b = void 0 !== c ? c(b) : b;
    d.memoizedState = d.baseState = b;
    a = d.queue = {
      pending: null,
      dispatch: null,
      lastRenderedReducer: a,
      lastRenderedState: b
    };
    a = a.dispatch = zh.bind(null, N, a);
    return [d.memoizedState, a];
  },
  useRef: function useRef(a) {
    var b = th();
    a = {
      current: a
    };
    return b.memoizedState = a;
  },
  useState: yh,
  useDebugValue: Jh,
  useResponder: ih,
  useDeferredValue: function useDeferredValue(a, b) {
    var c = yh(a),
        d = c[0],
        e = c[1];
    Eh(function () {
      var c = kh.suspense;
      kh.suspense = void 0 === b ? null : b;

      try {
        e(a);
      } finally {
        kh.suspense = c;
      }
    }, [a, b]);
    return d;
  },
  useTransition: function useTransition(a) {
    var b = yh(!1),
        c = b[0];
    b = b[1];
    return [Kh(Nh.bind(null, b, a), [b, a]), c];
  }
},
    qh = {
  readContext: sg,
  useCallback: Lh,
  useContext: sg,
  useEffect: Fh,
  useImperativeHandle: Ih,
  useLayoutEffect: Gh,
  useMemo: Mh,
  useReducer: wh,
  useRef: Bh,
  useState: function useState() {
    return wh(vh);
  },
  useDebugValue: Jh,
  useResponder: ih,
  useDeferredValue: function useDeferredValue(a, b) {
    var c = wh(vh),
        d = c[0],
        e = c[1];
    Fh(function () {
      var c = kh.suspense;
      kh.suspense = void 0 === b ? null : b;

      try {
        e(a);
      } finally {
        kh.suspense = c;
      }
    }, [a, b]);
    return d;
  },
  useTransition: function useTransition(a) {
    var b = wh(vh),
        c = b[0];
    b = b[1];
    return [Lh(Nh.bind(null, b, a), [b, a]), c];
  }
},
    rh = {
  readContext: sg,
  useCallback: Lh,
  useContext: sg,
  useEffect: Fh,
  useImperativeHandle: Ih,
  useLayoutEffect: Gh,
  useMemo: Mh,
  useReducer: xh,
  useRef: Bh,
  useState: function useState() {
    return xh(vh);
  },
  useDebugValue: Jh,
  useResponder: ih,
  useDeferredValue: function useDeferredValue(a, b) {
    var c = xh(vh),
        d = c[0],
        e = c[1];
    Fh(function () {
      var c = kh.suspense;
      kh.suspense = void 0 === b ? null : b;

      try {
        e(a);
      } finally {
        kh.suspense = c;
      }
    }, [a, b]);
    return d;
  },
  useTransition: function useTransition(a) {
    var b = xh(vh),
        c = b[0];
    b = b[1];
    return [Lh(Nh.bind(null, b, a), [b, a]), c];
  }
},
    Oh = null,
    Ph = null,
    Qh = !1;

function Rh(a, b) {
  var c = Sh(5, null, null, 0);
  c.elementType = "DELETED";
  c.type = "DELETED";
  c.stateNode = b;
  c.return = a;
  c.effectTag = 8;
  null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
}

function Th(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return null !== b ? (a.stateNode = b, !0) : !1;

    case 6:
      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, !0) : !1;

    case 13:
      return !1;

    default:
      return !1;
  }
}

function Uh(a) {
  if (Qh) {
    var b = Ph;

    if (b) {
      var c = b;

      if (!Th(a, b)) {
        b = Jd(c.nextSibling);

        if (!b || !Th(a, b)) {
          a.effectTag = a.effectTag & -1025 | 2;
          Qh = !1;
          Oh = a;
          return;
        }

        Rh(Oh, c);
      }

      Oh = a;
      Ph = Jd(b.firstChild);
    } else a.effectTag = a.effectTag & -1025 | 2, Qh = !1, Oh = a;
  }
}

function Vh(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) {
    a = a.return;
  }

  Oh = a;
}

function Wh(a) {
  if (a !== Oh) return !1;
  if (!Qh) return Vh(a), Qh = !0, !1;
  var b = a.type;
  if (5 !== a.tag || "head" !== b && "body" !== b && !Gd(b, a.memoizedProps)) for (b = Ph; b;) {
    Rh(a, b), b = Jd(b.nextSibling);
  }
  Vh(a);

  if (13 === a.tag) {
    a = a.memoizedState;
    a = null !== a ? a.dehydrated : null;
    if (!a) throw Error(u(317));

    a: {
      a = a.nextSibling;

      for (b = 0; a;) {
        if (8 === a.nodeType) {
          var c = a.data;

          if (c === Ad) {
            if (0 === b) {
              Ph = Jd(a.nextSibling);
              break a;
            }

            b--;
          } else c !== zd && c !== Cd && c !== Bd || b++;
        }

        a = a.nextSibling;
      }

      Ph = null;
    }
  } else Ph = Oh ? Jd(a.stateNode.nextSibling) : null;

  return !0;
}

function Xh() {
  Ph = Oh = null;
  Qh = !1;
}

var Yh = Wa.ReactCurrentOwner,
    rg = !1;

function R(a, b, c, d) {
  b.child = null === a ? Yg(b, null, c, d) : Xg(b, a.child, c, d);
}

function Zh(a, b, c, d, e) {
  c = c.render;
  var f = b.ref;
  qg(b, e);
  d = oh(a, b, c, d, f, e);
  if (null !== a && !rg) return b.updateQueue = a.updateQueue, b.effectTag &= -517, a.expirationTime <= e && (a.expirationTime = 0), $h(a, b, e);
  b.effectTag |= 1;
  R(a, b, d, e);
  return b.child;
}

function ai(a, b, c, d, e, f) {
  if (null === a) {
    var g = c.type;
    if ("function" === typeof g && !bi(g) && void 0 === g.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = g, ci(a, b, g, d, e, f);
    a = Ug(c.type, null, d, null, b.mode, f);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }

  g = a.child;
  if (e < f && (e = g.memoizedProps, c = c.compare, c = null !== c ? c : bf, c(e, d) && a.ref === b.ref)) return $h(a, b, f);
  b.effectTag |= 1;
  a = Sg(g, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}

function ci(a, b, c, d, e, f) {
  return null !== a && bf(a.memoizedProps, d) && a.ref === b.ref && (rg = !1, e < f) ? (b.expirationTime = a.expirationTime, $h(a, b, f)) : di(a, b, c, d, f);
}

function ei(a, b) {
  var c = b.ref;
  if (null === a && null !== c || null !== a && a.ref !== c) b.effectTag |= 128;
}

function di(a, b, c, d, e) {
  var f = L(c) ? Bf : J.current;
  f = Cf(b, f);
  qg(b, e);
  c = oh(a, b, c, d, f, e);
  if (null !== a && !rg) return b.updateQueue = a.updateQueue, b.effectTag &= -517, a.expirationTime <= e && (a.expirationTime = 0), $h(a, b, e);
  b.effectTag |= 1;
  R(a, b, c, e);
  return b.child;
}

function fi(a, b, c, d, e) {
  if (L(c)) {
    var f = !0;
    Gf(b);
  } else f = !1;

  qg(b, e);
  if (null === b.stateNode) null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2), Lg(b, c, d), Ng(b, c, d, e), d = !0;else if (null === a) {
    var g = b.stateNode,
        h = b.memoizedProps;
    g.props = h;
    var k = g.context,
        l = c.contextType;
    "object" === typeof l && null !== l ? l = sg(l) : (l = L(c) ? Bf : J.current, l = Cf(b, l));
    var m = c.getDerivedStateFromProps,
        p = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
    p || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Mg(b, g, d, l);
    tg = !1;
    var x = b.memoizedState;
    g.state = x;
    zg(b, d, g, e);
    k = b.memoizedState;
    h !== d || x !== k || K.current || tg ? ("function" === typeof m && (Fg(b, c, m, d), k = b.memoizedState), (h = tg || Kg(b, c, h, d, x, k, l)) ? (p || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.effectTag |= 4)) : ("function" === typeof g.componentDidMount && (b.effectTag |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.effectTag |= 4), d = !1);
  } else g = b.stateNode, vg(a, b), h = b.memoizedProps, g.props = b.type === b.elementType ? h : ig(b.type, h), k = g.context, l = c.contextType, "object" === typeof l && null !== l ? l = sg(l) : (l = L(c) ? Bf : J.current, l = Cf(b, l)), m = c.getDerivedStateFromProps, (p = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Mg(b, g, d, l), tg = !1, k = b.memoizedState, g.state = k, zg(b, d, g, e), x = b.memoizedState, h !== d || k !== x || K.current || tg ? ("function" === typeof m && (Fg(b, c, m, d), x = b.memoizedState), (m = tg || Kg(b, c, h, d, k, x, l)) ? (p || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, x, l), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, x, l)), "function" === typeof g.componentDidUpdate && (b.effectTag |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.effectTag |= 256)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 256), b.memoizedProps = d, b.memoizedState = x), g.props = d, g.state = x, g.context = l, d = m) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 256), d = !1);
  return gi(a, b, c, d, f, e);
}

function gi(a, b, c, d, e, f) {
  ei(a, b);
  var g = 0 !== (b.effectTag & 64);
  if (!d && !g) return e && Hf(b, c, !1), $h(a, b, f);
  d = b.stateNode;
  Yh.current = b;
  var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
  b.effectTag |= 1;
  null !== a && g ? (b.child = Xg(b, a.child, null, f), b.child = Xg(b, null, h, f)) : R(a, b, h, f);
  b.memoizedState = d.state;
  e && Hf(b, c, !0);
  return b.child;
}

function hi(a) {
  var b = a.stateNode;
  b.pendingContext ? Ef(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Ef(a, b.context, !1);
  dh(a, b.containerInfo);
}

var ii = {
  dehydrated: null,
  retryTime: 0
};

function ji(a, b, c) {
  var d = b.mode,
      e = b.pendingProps,
      f = M.current,
      g = !1,
      h;
  (h = 0 !== (b.effectTag & 64)) || (h = 0 !== (f & 2) && (null === a || null !== a.memoizedState));
  h ? (g = !0, b.effectTag &= -65) : null !== a && null === a.memoizedState || void 0 === e.fallback || !0 === e.unstable_avoidThisFallback || (f |= 1);
  I(M, f & 1);

  if (null === a) {
    void 0 !== e.fallback && Uh(b);

    if (g) {
      g = e.fallback;
      e = Wg(null, d, 0, null);
      e.return = b;
      if (0 === (b.mode & 2)) for (a = null !== b.memoizedState ? b.child.child : b.child, e.child = a; null !== a;) {
        a.return = e, a = a.sibling;
      }
      c = Wg(g, d, c, null);
      c.return = b;
      e.sibling = c;
      b.memoizedState = ii;
      b.child = e;
      return c;
    }

    d = e.children;
    b.memoizedState = null;
    return b.child = Yg(b, null, d, c);
  }

  if (null !== a.memoizedState) {
    a = a.child;
    d = a.sibling;

    if (g) {
      e = e.fallback;
      c = Sg(a, a.pendingProps);
      c.return = b;
      if (0 === (b.mode & 2) && (g = null !== b.memoizedState ? b.child.child : b.child, g !== a.child)) for (c.child = g; null !== g;) {
        g.return = c, g = g.sibling;
      }
      d = Sg(d, e);
      d.return = b;
      c.sibling = d;
      c.childExpirationTime = 0;
      b.memoizedState = ii;
      b.child = c;
      return d;
    }

    c = Xg(b, a.child, e.children, c);
    b.memoizedState = null;
    return b.child = c;
  }

  a = a.child;

  if (g) {
    g = e.fallback;
    e = Wg(null, d, 0, null);
    e.return = b;
    e.child = a;
    null !== a && (a.return = e);
    if (0 === (b.mode & 2)) for (a = null !== b.memoizedState ? b.child.child : b.child, e.child = a; null !== a;) {
      a.return = e, a = a.sibling;
    }
    c = Wg(g, d, c, null);
    c.return = b;
    e.sibling = c;
    c.effectTag |= 2;
    e.childExpirationTime = 0;
    b.memoizedState = ii;
    b.child = e;
    return c;
  }

  b.memoizedState = null;
  return b.child = Xg(b, a, e.children, c);
}

function ki(a, b) {
  a.expirationTime < b && (a.expirationTime = b);
  var c = a.alternate;
  null !== c && c.expirationTime < b && (c.expirationTime = b);
  pg(a.return, b);
}

function li(a, b, c, d, e, f) {
  var g = a.memoizedState;
  null === g ? a.memoizedState = {
    isBackwards: b,
    rendering: null,
    renderingStartTime: 0,
    last: d,
    tail: c,
    tailExpiration: 0,
    tailMode: e,
    lastEffect: f
  } : (g.isBackwards = b, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = c, g.tailExpiration = 0, g.tailMode = e, g.lastEffect = f);
}

function mi(a, b, c) {
  var d = b.pendingProps,
      e = d.revealOrder,
      f = d.tail;
  R(a, b, d.children, c);
  d = M.current;
  if (0 !== (d & 2)) d = d & 1 | 2, b.effectTag |= 64;else {
    if (null !== a && 0 !== (a.effectTag & 64)) a: for (a = b.child; null !== a;) {
      if (13 === a.tag) null !== a.memoizedState && ki(a, c);else if (19 === a.tag) ki(a, c);else if (null !== a.child) {
        a.child.return = a;
        a = a.child;
        continue;
      }
      if (a === b) break a;

      for (; null === a.sibling;) {
        if (null === a.return || a.return === b) break a;
        a = a.return;
      }

      a.sibling.return = a.return;
      a = a.sibling;
    }
    d &= 1;
  }
  I(M, d);
  if (0 === (b.mode & 2)) b.memoizedState = null;else switch (e) {
    case "forwards":
      c = b.child;

      for (e = null; null !== c;) {
        a = c.alternate, null !== a && null === hh(a) && (e = c), c = c.sibling;
      }

      c = e;
      null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
      li(b, !1, e, c, f, b.lastEffect);
      break;

    case "backwards":
      c = null;
      e = b.child;

      for (b.child = null; null !== e;) {
        a = e.alternate;

        if (null !== a && null === hh(a)) {
          b.child = e;
          break;
        }

        a = e.sibling;
        e.sibling = c;
        c = e;
        e = a;
      }

      li(b, !0, c, null, f, b.lastEffect);
      break;

    case "together":
      li(b, !1, null, null, void 0, b.lastEffect);
      break;

    default:
      b.memoizedState = null;
  }
  return b.child;
}

function $h(a, b, c) {
  null !== a && (b.dependencies = a.dependencies);
  var d = b.expirationTime;
  0 !== d && Bg(d);
  if (b.childExpirationTime < c) return null;
  if (null !== a && b.child !== a.child) throw Error(u(153));

  if (null !== b.child) {
    a = b.child;
    c = Sg(a, a.pendingProps);
    b.child = c;

    for (c.return = b; null !== a.sibling;) {
      a = a.sibling, c = c.sibling = Sg(a, a.pendingProps), c.return = b;
    }

    c.sibling = null;
  }

  return b.child;
}

var ni, oi, pi, qi;

ni = function ni(a, b) {
  for (var c = b.child; null !== c;) {
    if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);else if (4 !== c.tag && null !== c.child) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b) break;

    for (; null === c.sibling;) {
      if (null === c.return || c.return === b) return;
      c = c.return;
    }

    c.sibling.return = c.return;
    c = c.sibling;
  }
};

oi = function oi() {};

pi = function pi(a, b, c, d, e) {
  var f = a.memoizedProps;

  if (f !== d) {
    var g = b.stateNode;
    ch($g.current);
    a = null;

    switch (c) {
      case "input":
        f = zb(g, f);
        d = zb(g, d);
        a = [];
        break;

      case "option":
        f = Gb(g, f);
        d = Gb(g, d);
        a = [];
        break;

      case "select":
        f = n({}, f, {
          value: void 0
        });
        d = n({}, d, {
          value: void 0
        });
        a = [];
        break;

      case "textarea":
        f = Ib(g, f);
        d = Ib(g, d);
        a = [];
        break;

      default:
        "function" !== typeof f.onClick && "function" === typeof d.onClick && (g.onclick = sd);
    }

    od(c, d);
    var h, k;
    c = null;

    for (h in f) {
      if (!d.hasOwnProperty(h) && f.hasOwnProperty(h) && null != f[h]) if ("style" === h) for (k in g = f[h], g) {
        g.hasOwnProperty(k) && (c || (c = {}), c[k] = "");
      } else "dangerouslySetInnerHTML" !== h && "children" !== h && "suppressContentEditableWarning" !== h && "suppressHydrationWarning" !== h && "autoFocus" !== h && (va.hasOwnProperty(h) ? a || (a = []) : (a = a || []).push(h, null));
    }

    for (h in d) {
      var l = d[h];
      g = null != f ? f[h] : void 0;
      if (d.hasOwnProperty(h) && l !== g && (null != l || null != g)) if ("style" === h) {
        if (g) {
          for (k in g) {
            !g.hasOwnProperty(k) || l && l.hasOwnProperty(k) || (c || (c = {}), c[k] = "");
          }

          for (k in l) {
            l.hasOwnProperty(k) && g[k] !== l[k] && (c || (c = {}), c[k] = l[k]);
          }
        } else c || (a || (a = []), a.push(h, c)), c = l;
      } else "dangerouslySetInnerHTML" === h ? (l = l ? l.__html : void 0, g = g ? g.__html : void 0, null != l && g !== l && (a = a || []).push(h, l)) : "children" === h ? g === l || "string" !== typeof l && "number" !== typeof l || (a = a || []).push(h, "" + l) : "suppressContentEditableWarning" !== h && "suppressHydrationWarning" !== h && (va.hasOwnProperty(h) ? (null != l && rd(e, h), a || g === l || (a = [])) : (a = a || []).push(h, l));
    }

    c && (a = a || []).push("style", c);
    e = a;
    if (b.updateQueue = e) b.effectTag |= 4;
  }
};

qi = function qi(a, b, c, d) {
  c !== d && (b.effectTag |= 4);
};

function ri(a, b) {
  switch (a.tailMode) {
    case "hidden":
      b = a.tail;

      for (var c = null; null !== b;) {
        null !== b.alternate && (c = b), b = b.sibling;
      }

      null === c ? a.tail = null : c.sibling = null;
      break;

    case "collapsed":
      c = a.tail;

      for (var d = null; null !== c;) {
        null !== c.alternate && (d = c), c = c.sibling;
      }

      null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
  }
}

function si(a, b, c) {
  var d = b.pendingProps;

  switch (b.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null;

    case 1:
      return L(b.type) && Df(), null;

    case 3:
      return eh(), H(K), H(J), c = b.stateNode, c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), null !== a && null !== a.child || !Wh(b) || (b.effectTag |= 4), oi(b), null;

    case 5:
      gh(b);
      c = ch(bh.current);
      var e = b.type;
      if (null !== a && null != b.stateNode) pi(a, b, e, d, c), a.ref !== b.ref && (b.effectTag |= 128);else {
        if (!d) {
          if (null === b.stateNode) throw Error(u(166));
          return null;
        }

        a = ch($g.current);

        if (Wh(b)) {
          d = b.stateNode;
          e = b.type;
          var f = b.memoizedProps;
          d[Md] = b;
          d[Nd] = f;

          switch (e) {
            case "iframe":
            case "object":
            case "embed":
              F("load", d);
              break;

            case "video":
            case "audio":
              for (a = 0; a < ac.length; a++) {
                F(ac[a], d);
              }

              break;

            case "source":
              F("error", d);
              break;

            case "img":
            case "image":
            case "link":
              F("error", d);
              F("load", d);
              break;

            case "form":
              F("reset", d);
              F("submit", d);
              break;

            case "details":
              F("toggle", d);
              break;

            case "input":
              Ab(d, f);
              F("invalid", d);
              rd(c, "onChange");
              break;

            case "select":
              d._wrapperState = {
                wasMultiple: !!f.multiple
              };
              F("invalid", d);
              rd(c, "onChange");
              break;

            case "textarea":
              Jb(d, f), F("invalid", d), rd(c, "onChange");
          }

          od(e, f);
          a = null;

          for (var g in f) {
            if (f.hasOwnProperty(g)) {
              var h = f[g];
              "children" === g ? "string" === typeof h ? d.textContent !== h && (a = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (a = ["children", "" + h]) : va.hasOwnProperty(g) && null != h && rd(c, g);
            }
          }

          switch (e) {
            case "input":
              xb(d);
              Eb(d, f, !0);
              break;

            case "textarea":
              xb(d);
              Lb(d);
              break;

            case "select":
            case "option":
              break;

            default:
              "function" === typeof f.onClick && (d.onclick = sd);
          }

          c = a;
          b.updateQueue = c;
          null !== c && (b.effectTag |= 4);
        } else {
          g = 9 === c.nodeType ? c : c.ownerDocument;
          a === qd && (a = Nb(e));
          a === qd ? "script" === e ? (a = g.createElement("div"), a.innerHTML = "<script>\x3c/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(e, {
            is: d.is
          }) : (a = g.createElement(e), "select" === e && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, e);
          a[Md] = b;
          a[Nd] = d;
          ni(a, b, !1, !1);
          b.stateNode = a;
          g = pd(e, d);

          switch (e) {
            case "iframe":
            case "object":
            case "embed":
              F("load", a);
              h = d;
              break;

            case "video":
            case "audio":
              for (h = 0; h < ac.length; h++) {
                F(ac[h], a);
              }

              h = d;
              break;

            case "source":
              F("error", a);
              h = d;
              break;

            case "img":
            case "image":
            case "link":
              F("error", a);
              F("load", a);
              h = d;
              break;

            case "form":
              F("reset", a);
              F("submit", a);
              h = d;
              break;

            case "details":
              F("toggle", a);
              h = d;
              break;

            case "input":
              Ab(a, d);
              h = zb(a, d);
              F("invalid", a);
              rd(c, "onChange");
              break;

            case "option":
              h = Gb(a, d);
              break;

            case "select":
              a._wrapperState = {
                wasMultiple: !!d.multiple
              };
              h = n({}, d, {
                value: void 0
              });
              F("invalid", a);
              rd(c, "onChange");
              break;

            case "textarea":
              Jb(a, d);
              h = Ib(a, d);
              F("invalid", a);
              rd(c, "onChange");
              break;

            default:
              h = d;
          }

          od(e, h);
          var k = h;

          for (f in k) {
            if (k.hasOwnProperty(f)) {
              var l = k[f];
              "style" === f ? md(a, l) : "dangerouslySetInnerHTML" === f ? (l = l ? l.__html : void 0, null != l && Qb(a, l)) : "children" === f ? "string" === typeof l ? ("textarea" !== e || "" !== l) && Rb(a, l) : "number" === typeof l && Rb(a, "" + l) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (va.hasOwnProperty(f) ? null != l && rd(c, f) : null != l && Xa(a, f, l, g));
            }
          }

          switch (e) {
            case "input":
              xb(a);
              Eb(a, d, !1);
              break;

            case "textarea":
              xb(a);
              Lb(a);
              break;

            case "option":
              null != d.value && a.setAttribute("value", "" + rb(d.value));
              break;

            case "select":
              a.multiple = !!d.multiple;
              c = d.value;
              null != c ? Hb(a, !!d.multiple, c, !1) : null != d.defaultValue && Hb(a, !!d.multiple, d.defaultValue, !0);
              break;

            default:
              "function" === typeof h.onClick && (a.onclick = sd);
          }

          Fd(e, d) && (b.effectTag |= 4);
        }

        null !== b.ref && (b.effectTag |= 128);
      }
      return null;

    case 6:
      if (a && null != b.stateNode) qi(a, b, a.memoizedProps, d);else {
        if ("string" !== typeof d && null === b.stateNode) throw Error(u(166));
        c = ch(bh.current);
        ch($g.current);
        Wh(b) ? (c = b.stateNode, d = b.memoizedProps, c[Md] = b, c.nodeValue !== d && (b.effectTag |= 4)) : (c = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), c[Md] = b, b.stateNode = c);
      }
      return null;

    case 13:
      H(M);
      d = b.memoizedState;
      if (0 !== (b.effectTag & 64)) return b.expirationTime = c, b;
      c = null !== d;
      d = !1;
      null === a ? void 0 !== b.memoizedProps.fallback && Wh(b) : (e = a.memoizedState, d = null !== e, c || null === e || (e = a.child.sibling, null !== e && (f = b.firstEffect, null !== f ? (b.firstEffect = e, e.nextEffect = f) : (b.firstEffect = b.lastEffect = e, e.nextEffect = null), e.effectTag = 8)));
      if (c && !d && 0 !== (b.mode & 2)) if (null === a && !0 !== b.memoizedProps.unstable_avoidThisFallback || 0 !== (M.current & 1)) S === ti && (S = ui);else {
        if (S === ti || S === ui) S = vi;
        0 !== wi && null !== T && (xi(T, U), yi(T, wi));
      }
      if (c || d) b.effectTag |= 4;
      return null;

    case 4:
      return eh(), oi(b), null;

    case 10:
      return og(b), null;

    case 17:
      return L(b.type) && Df(), null;

    case 19:
      H(M);
      d = b.memoizedState;
      if (null === d) return null;
      e = 0 !== (b.effectTag & 64);
      f = d.rendering;
      if (null === f) {
        if (e) ri(d, !1);else {
          if (S !== ti || null !== a && 0 !== (a.effectTag & 64)) for (f = b.child; null !== f;) {
            a = hh(f);

            if (null !== a) {
              b.effectTag |= 64;
              ri(d, !1);
              e = a.updateQueue;
              null !== e && (b.updateQueue = e, b.effectTag |= 4);
              null === d.lastEffect && (b.firstEffect = null);
              b.lastEffect = d.lastEffect;

              for (d = b.child; null !== d;) {
                e = d, f = c, e.effectTag &= 2, e.nextEffect = null, e.firstEffect = null, e.lastEffect = null, a = e.alternate, null === a ? (e.childExpirationTime = 0, e.expirationTime = f, e.child = null, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null) : (e.childExpirationTime = a.childExpirationTime, e.expirationTime = a.expirationTime, e.child = a.child, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, f = a.dependencies, e.dependencies = null === f ? null : {
                  expirationTime: f.expirationTime,
                  firstContext: f.firstContext,
                  responders: f.responders
                }), d = d.sibling;
              }

              I(M, M.current & 1 | 2);
              return b.child;
            }

            f = f.sibling;
          }
        }
      } else {
        if (!e) if (a = hh(f), null !== a) {
          if (b.effectTag |= 64, e = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, b.effectTag |= 4), ri(d, !0), null === d.tail && "hidden" === d.tailMode && !f.alternate) return b = b.lastEffect = d.lastEffect, null !== b && (b.nextEffect = null), null;
        } else 2 * $f() - d.renderingStartTime > d.tailExpiration && 1 < c && (b.effectTag |= 64, e = !0, ri(d, !1), b.expirationTime = b.childExpirationTime = c - 1);
        d.isBackwards ? (f.sibling = b.child, b.child = f) : (c = d.last, null !== c ? c.sibling = f : b.child = f, d.last = f);
      }
      return null !== d.tail ? (0 === d.tailExpiration && (d.tailExpiration = $f() + 500), c = d.tail, d.rendering = c, d.tail = c.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = $f(), c.sibling = null, b = M.current, I(M, e ? b & 1 | 2 : b & 1), c) : null;
  }

  throw Error(u(156, b.tag));
}

function zi(a) {
  switch (a.tag) {
    case 1:
      L(a.type) && Df();
      var b = a.effectTag;
      return b & 4096 ? (a.effectTag = b & -4097 | 64, a) : null;

    case 3:
      eh();
      H(K);
      H(J);
      b = a.effectTag;
      if (0 !== (b & 64)) throw Error(u(285));
      a.effectTag = b & -4097 | 64;
      return a;

    case 5:
      return gh(a), null;

    case 13:
      return H(M), b = a.effectTag, b & 4096 ? (a.effectTag = b & -4097 | 64, a) : null;

    case 19:
      return H(M), null;

    case 4:
      return eh(), null;

    case 10:
      return og(a), null;

    default:
      return null;
  }
}

function Ai(a, b) {
  return {
    value: a,
    source: b,
    stack: qb(b)
  };
}

var Bi = "function" === typeof WeakSet ? WeakSet : Set;

function Ci(a, b) {
  var c = b.source,
      d = b.stack;
  null === d && null !== c && (d = qb(c));
  null !== c && pb(c.type);
  b = b.value;
  null !== a && 1 === a.tag && pb(a.type);

  try {
    console.error(b);
  } catch (e) {
    setTimeout(function () {
      throw e;
    });
  }
}

function Di(a, b) {
  try {
    b.props = a.memoizedProps, b.state = a.memoizedState, b.componentWillUnmount();
  } catch (c) {
    Ei(a, c);
  }
}

function Fi(a) {
  var b = a.ref;
  if (null !== b) if ("function" === typeof b) try {
    b(null);
  } catch (c) {
    Ei(a, c);
  } else b.current = null;
}

function Gi(a, b) {
  switch (b.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;

    case 1:
      if (b.effectTag & 256 && null !== a) {
        var c = a.memoizedProps,
            d = a.memoizedState;
        a = b.stateNode;
        b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : ig(b.type, c), d);
        a.__reactInternalSnapshotBeforeUpdate = b;
      }

      return;

    case 3:
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }

  throw Error(u(163));
}

function Hi(a, b) {
  b = b.updateQueue;
  b = null !== b ? b.lastEffect : null;

  if (null !== b) {
    var c = b = b.next;

    do {
      if ((c.tag & a) === a) {
        var d = c.destroy;
        c.destroy = void 0;
        void 0 !== d && d();
      }

      c = c.next;
    } while (c !== b);
  }
}

function Ii(a, b) {
  b = b.updateQueue;
  b = null !== b ? b.lastEffect : null;

  if (null !== b) {
    var c = b = b.next;

    do {
      if ((c.tag & a) === a) {
        var d = c.create;
        c.destroy = d();
      }

      c = c.next;
    } while (c !== b);
  }
}

function Ji(a, b, c) {
  switch (c.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      Ii(3, c);
      return;

    case 1:
      a = c.stateNode;
      if (c.effectTag & 4) if (null === b) a.componentDidMount();else {
        var d = c.elementType === c.type ? b.memoizedProps : ig(c.type, b.memoizedProps);
        a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate);
      }
      b = c.updateQueue;
      null !== b && Cg(c, b, a);
      return;

    case 3:
      b = c.updateQueue;

      if (null !== b) {
        a = null;
        if (null !== c.child) switch (c.child.tag) {
          case 5:
            a = c.child.stateNode;
            break;

          case 1:
            a = c.child.stateNode;
        }
        Cg(c, b, a);
      }

      return;

    case 5:
      a = c.stateNode;
      null === b && c.effectTag & 4 && Fd(c.type, c.memoizedProps) && a.focus();
      return;

    case 6:
      return;

    case 4:
      return;

    case 12:
      return;

    case 13:
      null === c.memoizedState && (c = c.alternate, null !== c && (c = c.memoizedState, null !== c && (c = c.dehydrated, null !== c && Vc(c))));
      return;

    case 19:
    case 17:
    case 20:
    case 21:
      return;
  }

  throw Error(u(163));
}

function Ki(a, b, c) {
  "function" === typeof Li && Li(b);

  switch (b.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      a = b.updateQueue;

      if (null !== a && (a = a.lastEffect, null !== a)) {
        var d = a.next;
        cg(97 < c ? 97 : c, function () {
          var a = d;

          do {
            var c = a.destroy;

            if (void 0 !== c) {
              var g = b;

              try {
                c();
              } catch (h) {
                Ei(g, h);
              }
            }

            a = a.next;
          } while (a !== d);
        });
      }

      break;

    case 1:
      Fi(b);
      c = b.stateNode;
      "function" === typeof c.componentWillUnmount && Di(b, c);
      break;

    case 5:
      Fi(b);
      break;

    case 4:
      Mi(a, b, c);
  }
}

function Ni(a) {
  var b = a.alternate;
  a.return = null;
  a.child = null;
  a.memoizedState = null;
  a.updateQueue = null;
  a.dependencies = null;
  a.alternate = null;
  a.firstEffect = null;
  a.lastEffect = null;
  a.pendingProps = null;
  a.memoizedProps = null;
  a.stateNode = null;
  null !== b && Ni(b);
}

function Oi(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}

function Pi(a) {
  a: {
    for (var b = a.return; null !== b;) {
      if (Oi(b)) {
        var c = b;
        break a;
      }

      b = b.return;
    }

    throw Error(u(160));
  }

  b = c.stateNode;

  switch (c.tag) {
    case 5:
      var d = !1;
      break;

    case 3:
      b = b.containerInfo;
      d = !0;
      break;

    case 4:
      b = b.containerInfo;
      d = !0;
      break;

    default:
      throw Error(u(161));
  }

  c.effectTag & 16 && (Rb(b, ""), c.effectTag &= -17);

  a: b: for (c = a;;) {
    for (; null === c.sibling;) {
      if (null === c.return || Oi(c.return)) {
        c = null;
        break a;
      }

      c = c.return;
    }

    c.sibling.return = c.return;

    for (c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag;) {
      if (c.effectTag & 2) continue b;
      if (null === c.child || 4 === c.tag) continue b;else c.child.return = c, c = c.child;
    }

    if (!(c.effectTag & 2)) {
      c = c.stateNode;
      break a;
    }
  }

  d ? Qi(a, c, b) : Ri(a, c, b);
}

function Qi(a, b, c) {
  var d = a.tag,
      e = 5 === d || 6 === d;
  if (e) a = e ? a.stateNode : a.stateNode.instance, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = sd));else if (4 !== d && (a = a.child, null !== a)) for (Qi(a, b, c), a = a.sibling; null !== a;) {
    Qi(a, b, c), a = a.sibling;
  }
}

function Ri(a, b, c) {
  var d = a.tag,
      e = 5 === d || 6 === d;
  if (e) a = e ? a.stateNode : a.stateNode.instance, b ? c.insertBefore(a, b) : c.appendChild(a);else if (4 !== d && (a = a.child, null !== a)) for (Ri(a, b, c), a = a.sibling; null !== a;) {
    Ri(a, b, c), a = a.sibling;
  }
}

function Mi(a, b, c) {
  for (var d = b, e = !1, f, g;;) {
    if (!e) {
      e = d.return;

      a: for (;;) {
        if (null === e) throw Error(u(160));
        f = e.stateNode;

        switch (e.tag) {
          case 5:
            g = !1;
            break a;

          case 3:
            f = f.containerInfo;
            g = !0;
            break a;

          case 4:
            f = f.containerInfo;
            g = !0;
            break a;
        }

        e = e.return;
      }

      e = !0;
    }

    if (5 === d.tag || 6 === d.tag) {
      a: for (var h = a, k = d, l = c, m = k;;) {
        if (Ki(h, m, l), null !== m.child && 4 !== m.tag) m.child.return = m, m = m.child;else {
          if (m === k) break a;

          for (; null === m.sibling;) {
            if (null === m.return || m.return === k) break a;
            m = m.return;
          }

          m.sibling.return = m.return;
          m = m.sibling;
        }
      }

      g ? (h = f, k = d.stateNode, 8 === h.nodeType ? h.parentNode.removeChild(k) : h.removeChild(k)) : f.removeChild(d.stateNode);
    } else if (4 === d.tag) {
      if (null !== d.child) {
        f = d.stateNode.containerInfo;
        g = !0;
        d.child.return = d;
        d = d.child;
        continue;
      }
    } else if (Ki(a, d, c), null !== d.child) {
      d.child.return = d;
      d = d.child;
      continue;
    }

    if (d === b) break;

    for (; null === d.sibling;) {
      if (null === d.return || d.return === b) return;
      d = d.return;
      4 === d.tag && (e = !1);
    }

    d.sibling.return = d.return;
    d = d.sibling;
  }
}

function Si(a, b) {
  switch (b.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      Hi(3, b);
      return;

    case 1:
      return;

    case 5:
      var c = b.stateNode;

      if (null != c) {
        var d = b.memoizedProps,
            e = null !== a ? a.memoizedProps : d;
        a = b.type;
        var f = b.updateQueue;
        b.updateQueue = null;

        if (null !== f) {
          c[Nd] = d;
          "input" === a && "radio" === d.type && null != d.name && Bb(c, d);
          pd(a, e);
          b = pd(a, d);

          for (e = 0; e < f.length; e += 2) {
            var g = f[e],
                h = f[e + 1];
            "style" === g ? md(c, h) : "dangerouslySetInnerHTML" === g ? Qb(c, h) : "children" === g ? Rb(c, h) : Xa(c, g, h, b);
          }

          switch (a) {
            case "input":
              Cb(c, d);
              break;

            case "textarea":
              Kb(c, d);
              break;

            case "select":
              b = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, a = d.value, null != a ? Hb(c, !!d.multiple, a, !1) : b !== !!d.multiple && (null != d.defaultValue ? Hb(c, !!d.multiple, d.defaultValue, !0) : Hb(c, !!d.multiple, d.multiple ? [] : "", !1));
          }
        }
      }

      return;

    case 6:
      if (null === b.stateNode) throw Error(u(162));
      b.stateNode.nodeValue = b.memoizedProps;
      return;

    case 3:
      b = b.stateNode;
      b.hydrate && (b.hydrate = !1, Vc(b.containerInfo));
      return;

    case 12:
      return;

    case 13:
      c = b;
      null === b.memoizedState ? d = !1 : (d = !0, c = b.child, Ti = $f());
      if (null !== c) a: for (a = c;;) {
        if (5 === a.tag) f = a.stateNode, d ? (f = f.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (f = a.stateNode, e = a.memoizedProps.style, e = void 0 !== e && null !== e && e.hasOwnProperty("display") ? e.display : null, f.style.display = ld("display", e));else if (6 === a.tag) a.stateNode.nodeValue = d ? "" : a.memoizedProps;else if (13 === a.tag && null !== a.memoizedState && null === a.memoizedState.dehydrated) {
          f = a.child.sibling;
          f.return = a;
          a = f;
          continue;
        } else if (null !== a.child) {
          a.child.return = a;
          a = a.child;
          continue;
        }
        if (a === c) break;

        for (; null === a.sibling;) {
          if (null === a.return || a.return === c) break a;
          a = a.return;
        }

        a.sibling.return = a.return;
        a = a.sibling;
      }
      Ui(b);
      return;

    case 19:
      Ui(b);
      return;

    case 17:
      return;
  }

  throw Error(u(163));
}

function Ui(a) {
  var b = a.updateQueue;

  if (null !== b) {
    a.updateQueue = null;
    var c = a.stateNode;
    null === c && (c = a.stateNode = new Bi());
    b.forEach(function (b) {
      var d = Vi.bind(null, a, b);
      c.has(b) || (c.add(b), b.then(d, d));
    });
  }
}

var Wi = "function" === typeof WeakMap ? WeakMap : Map;

function Xi(a, b, c) {
  c = wg(c, null);
  c.tag = 3;
  c.payload = {
    element: null
  };
  var d = b.value;

  c.callback = function () {
    Yi || (Yi = !0, Zi = d);
    Ci(a, b);
  };

  return c;
}

function $i(a, b, c) {
  c = wg(c, null);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;

  if ("function" === typeof d) {
    var e = b.value;

    c.payload = function () {
      Ci(a, b);
      return d(e);
    };
  }

  var f = a.stateNode;
  null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
    "function" !== typeof d && (null === aj ? aj = new Set([this]) : aj.add(this), Ci(a, b));
    var c = b.stack;
    this.componentDidCatch(b.value, {
      componentStack: null !== c ? c : ""
    });
  });
  return c;
}

var bj = Math.ceil,
    cj = Wa.ReactCurrentDispatcher,
    dj = Wa.ReactCurrentOwner,
    V = 0,
    ej = 8,
    fj = 16,
    gj = 32,
    ti = 0,
    hj = 1,
    ij = 2,
    ui = 3,
    vi = 4,
    jj = 5,
    W = V,
    T = null,
    X = null,
    U = 0,
    S = ti,
    kj = null,
    lj = 1073741823,
    mj = 1073741823,
    nj = null,
    wi = 0,
    oj = !1,
    Ti = 0,
    pj = 500,
    Y = null,
    Yi = !1,
    Zi = null,
    aj = null,
    qj = !1,
    rj = null,
    sj = 90,
    tj = null,
    uj = 0,
    vj = null,
    wj = 0;

function Gg() {
  return (W & (fj | gj)) !== V ? 1073741821 - ($f() / 10 | 0) : 0 !== wj ? wj : wj = 1073741821 - ($f() / 10 | 0);
}

function Hg(a, b, c) {
  b = b.mode;
  if (0 === (b & 2)) return 1073741823;
  var d = ag();
  if (0 === (b & 4)) return 99 === d ? 1073741823 : 1073741822;
  if ((W & fj) !== V) return U;
  if (null !== c) a = hg(a, c.timeoutMs | 0 || 5E3, 250);else switch (d) {
    case 99:
      a = 1073741823;
      break;

    case 98:
      a = hg(a, 150, 100);
      break;

    case 97:
    case 96:
      a = hg(a, 5E3, 250);
      break;

    case 95:
      a = 2;
      break;

    default:
      throw Error(u(326));
  }
  null !== T && a === U && --a;
  return a;
}

function Ig(a, b) {
  if (50 < uj) throw uj = 0, vj = null, Error(u(185));
  a = xj(a, b);

  if (null !== a) {
    var c = ag();
    1073741823 === b ? (W & ej) !== V && (W & (fj | gj)) === V ? yj(a) : (Z(a), W === V && gg()) : Z(a);
    (W & 4) === V || 98 !== c && 99 !== c || (null === tj ? tj = new Map([[a, b]]) : (c = tj.get(a), (void 0 === c || c > b) && tj.set(a, b)));
  }
}

function xj(a, b) {
  a.expirationTime < b && (a.expirationTime = b);
  var c = a.alternate;
  null !== c && c.expirationTime < b && (c.expirationTime = b);
  var d = a.return,
      e = null;
  if (null === d && 3 === a.tag) e = a.stateNode;else for (; null !== d;) {
    c = d.alternate;
    d.childExpirationTime < b && (d.childExpirationTime = b);
    null !== c && c.childExpirationTime < b && (c.childExpirationTime = b);

    if (null === d.return && 3 === d.tag) {
      e = d.stateNode;
      break;
    }

    d = d.return;
  }
  null !== e && (T === e && (Bg(b), S === vi && xi(e, U)), yi(e, b));
  return e;
}

function zj(a) {
  var b = a.lastExpiredTime;
  if (0 !== b) return b;
  b = a.firstPendingTime;
  if (!Aj(a, b)) return b;
  var c = a.lastPingedTime;
  a = a.nextKnownPendingLevel;
  a = c > a ? c : a;
  return 2 >= a && b !== a ? 0 : a;
}

function Z(a) {
  if (0 !== a.lastExpiredTime) a.callbackExpirationTime = 1073741823, a.callbackPriority = 99, a.callbackNode = eg(yj.bind(null, a));else {
    var b = zj(a),
        c = a.callbackNode;
    if (0 === b) null !== c && (a.callbackNode = null, a.callbackExpirationTime = 0, a.callbackPriority = 90);else {
      var d = Gg();
      1073741823 === b ? d = 99 : 1 === b || 2 === b ? d = 95 : (d = 10 * (1073741821 - b) - 10 * (1073741821 - d), d = 0 >= d ? 99 : 250 >= d ? 98 : 5250 >= d ? 97 : 95);

      if (null !== c) {
        var e = a.callbackPriority;
        if (a.callbackExpirationTime === b && e >= d) return;
        c !== Tf && Kf(c);
      }

      a.callbackExpirationTime = b;
      a.callbackPriority = d;
      b = 1073741823 === b ? eg(yj.bind(null, a)) : dg(d, Bj.bind(null, a), {
        timeout: 10 * (1073741821 - b) - $f()
      });
      a.callbackNode = b;
    }
  }
}

function Bj(a, b) {
  wj = 0;
  if (b) return b = Gg(), Cj(a, b), Z(a), null;
  var c = zj(a);

  if (0 !== c) {
    b = a.callbackNode;
    if ((W & (fj | gj)) !== V) throw Error(u(327));
    Dj();
    a === T && c === U || Ej(a, c);

    if (null !== X) {
      var d = W;
      W |= fj;
      var e = Fj();

      do {
        try {
          Gj();
          break;
        } catch (h) {
          Hj(a, h);
        }
      } while (1);

      ng();
      W = d;
      cj.current = e;
      if (S === hj) throw b = kj, Ej(a, c), xi(a, c), Z(a), b;
      if (null === X) switch (e = a.finishedWork = a.current.alternate, a.finishedExpirationTime = c, d = S, T = null, d) {
        case ti:
        case hj:
          throw Error(u(345));

        case ij:
          Cj(a, 2 < c ? 2 : c);
          break;

        case ui:
          xi(a, c);
          d = a.lastSuspendedTime;
          c === d && (a.nextKnownPendingLevel = Ij(e));

          if (1073741823 === lj && (e = Ti + pj - $f(), 10 < e)) {
            if (oj) {
              var f = a.lastPingedTime;

              if (0 === f || f >= c) {
                a.lastPingedTime = c;
                Ej(a, c);
                break;
              }
            }

            f = zj(a);
            if (0 !== f && f !== c) break;

            if (0 !== d && d !== c) {
              a.lastPingedTime = d;
              break;
            }

            a.timeoutHandle = Hd(Jj.bind(null, a), e);
            break;
          }

          Jj(a);
          break;

        case vi:
          xi(a, c);
          d = a.lastSuspendedTime;
          c === d && (a.nextKnownPendingLevel = Ij(e));

          if (oj && (e = a.lastPingedTime, 0 === e || e >= c)) {
            a.lastPingedTime = c;
            Ej(a, c);
            break;
          }

          e = zj(a);
          if (0 !== e && e !== c) break;

          if (0 !== d && d !== c) {
            a.lastPingedTime = d;
            break;
          }

          1073741823 !== mj ? d = 10 * (1073741821 - mj) - $f() : 1073741823 === lj ? d = 0 : (d = 10 * (1073741821 - lj) - 5E3, e = $f(), c = 10 * (1073741821 - c) - e, d = e - d, 0 > d && (d = 0), d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3E3 > d ? 3E3 : 4320 > d ? 4320 : 1960 * bj(d / 1960)) - d, c < d && (d = c));

          if (10 < d) {
            a.timeoutHandle = Hd(Jj.bind(null, a), d);
            break;
          }

          Jj(a);
          break;

        case jj:
          if (1073741823 !== lj && null !== nj) {
            f = lj;
            var g = nj;
            d = g.busyMinDurationMs | 0;
            0 >= d ? d = 0 : (e = g.busyDelayMs | 0, f = $f() - (10 * (1073741821 - f) - (g.timeoutMs | 0 || 5E3)), d = f <= e ? 0 : e + d - f);

            if (10 < d) {
              xi(a, c);
              a.timeoutHandle = Hd(Jj.bind(null, a), d);
              break;
            }
          }

          Jj(a);
          break;

        default:
          throw Error(u(329));
      }
      Z(a);
      if (a.callbackNode === b) return Bj.bind(null, a);
    }
  }

  return null;
}

function yj(a) {
  var b = a.lastExpiredTime;
  b = 0 !== b ? b : 1073741823;
  if ((W & (fj | gj)) !== V) throw Error(u(327));
  Dj();
  a === T && b === U || Ej(a, b);

  if (null !== X) {
    var c = W;
    W |= fj;
    var d = Fj();

    do {
      try {
        Kj();
        break;
      } catch (e) {
        Hj(a, e);
      }
    } while (1);

    ng();
    W = c;
    cj.current = d;
    if (S === hj) throw c = kj, Ej(a, b), xi(a, b), Z(a), c;
    if (null !== X) throw Error(u(261));
    a.finishedWork = a.current.alternate;
    a.finishedExpirationTime = b;
    T = null;
    Jj(a);
    Z(a);
  }

  return null;
}

function Lj() {
  if (null !== tj) {
    var a = tj;
    tj = null;
    a.forEach(function (a, c) {
      Cj(c, a);
      Z(c);
    });
    gg();
  }
}

function Mj(a, b) {
  var c = W;
  W |= 1;

  try {
    return a(b);
  } finally {
    W = c, W === V && gg();
  }
}

function Nj(a, b) {
  var c = W;
  W &= -2;
  W |= ej;

  try {
    return a(b);
  } finally {
    W = c, W === V && gg();
  }
}

function Ej(a, b) {
  a.finishedWork = null;
  a.finishedExpirationTime = 0;
  var c = a.timeoutHandle;
  -1 !== c && (a.timeoutHandle = -1, Id(c));
  if (null !== X) for (c = X.return; null !== c;) {
    var d = c;

    switch (d.tag) {
      case 1:
        d = d.type.childContextTypes;
        null !== d && void 0 !== d && Df();
        break;

      case 3:
        eh();
        H(K);
        H(J);
        break;

      case 5:
        gh(d);
        break;

      case 4:
        eh();
        break;

      case 13:
        H(M);
        break;

      case 19:
        H(M);
        break;

      case 10:
        og(d);
    }

    c = c.return;
  }
  T = a;
  X = Sg(a.current, null);
  U = b;
  S = ti;
  kj = null;
  mj = lj = 1073741823;
  nj = null;
  wi = 0;
  oj = !1;
}

function Hj(a, b) {
  do {
    try {
      ng();
      jh.current = sh;
      if (mh) for (var c = N.memoizedState; null !== c;) {
        var d = c.queue;
        null !== d && (d.pending = null);
        c = c.next;
      }
      lh = 0;
      P = O = N = null;
      mh = !1;
      if (null === X || null === X.return) return S = hj, kj = b, X = null;

      a: {
        var e = a,
            f = X.return,
            g = X,
            h = b;
        b = U;
        g.effectTag |= 2048;
        g.firstEffect = g.lastEffect = null;

        if (null !== h && "object" === typeof h && "function" === typeof h.then) {
          var k = h;

          if (0 === (g.mode & 2)) {
            var l = g.alternate;
            l ? (g.updateQueue = l.updateQueue, g.memoizedState = l.memoizedState, g.expirationTime = l.expirationTime) : (g.updateQueue = null, g.memoizedState = null);
          }

          var m = 0 !== (M.current & 1),
              p = f;

          do {
            var x;

            if (x = 13 === p.tag) {
              var z = p.memoizedState;
              if (null !== z) x = null !== z.dehydrated ? !0 : !1;else {
                var ca = p.memoizedProps;
                x = void 0 === ca.fallback ? !1 : !0 !== ca.unstable_avoidThisFallback ? !0 : m ? !1 : !0;
              }
            }

            if (x) {
              var D = p.updateQueue;

              if (null === D) {
                var t = new Set();
                t.add(k);
                p.updateQueue = t;
              } else D.add(k);

              if (0 === (p.mode & 2)) {
                p.effectTag |= 64;
                g.effectTag &= -2981;
                if (1 === g.tag) if (null === g.alternate) g.tag = 17;else {
                  var y = wg(1073741823, null);
                  y.tag = 2;
                  xg(g, y);
                }
                g.expirationTime = 1073741823;
                break a;
              }

              h = void 0;
              g = b;
              var A = e.pingCache;
              null === A ? (A = e.pingCache = new Wi(), h = new Set(), A.set(k, h)) : (h = A.get(k), void 0 === h && (h = new Set(), A.set(k, h)));

              if (!h.has(g)) {
                h.add(g);
                var q = Oj.bind(null, e, k, g);
                k.then(q, q);
              }

              p.effectTag |= 4096;
              p.expirationTime = b;
              break a;
            }

            p = p.return;
          } while (null !== p);

          h = Error((pb(g.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + qb(g));
        }

        S !== jj && (S = ij);
        h = Ai(h, g);
        p = f;

        do {
          switch (p.tag) {
            case 3:
              k = h;
              p.effectTag |= 4096;
              p.expirationTime = b;
              var B = Xi(p, k, b);
              yg(p, B);
              break a;

            case 1:
              k = h;
              var w = p.type,
                  ub = p.stateNode;

              if (0 === (p.effectTag & 64) && ("function" === typeof w.getDerivedStateFromError || null !== ub && "function" === typeof ub.componentDidCatch && (null === aj || !aj.has(ub)))) {
                p.effectTag |= 4096;
                p.expirationTime = b;
                var vb = $i(p, k, b);
                yg(p, vb);
                break a;
              }

          }

          p = p.return;
        } while (null !== p);
      }

      X = Pj(X);
    } catch (Xc) {
      b = Xc;
      continue;
    }

    break;
  } while (1);
}

function Fj() {
  var a = cj.current;
  cj.current = sh;
  return null === a ? sh : a;
}

function Ag(a, b) {
  a < lj && 2 < a && (lj = a);
  null !== b && a < mj && 2 < a && (mj = a, nj = b);
}

function Bg(a) {
  a > wi && (wi = a);
}

function Kj() {
  for (; null !== X;) {
    X = Qj(X);
  }
}

function Gj() {
  for (; null !== X && !Uf();) {
    X = Qj(X);
  }
}

function Qj(a) {
  var b = Rj(a.alternate, a, U);
  a.memoizedProps = a.pendingProps;
  null === b && (b = Pj(a));
  dj.current = null;
  return b;
}

function Pj(a) {
  X = a;

  do {
    var b = X.alternate;
    a = X.return;

    if (0 === (X.effectTag & 2048)) {
      b = si(b, X, U);

      if (1 === U || 1 !== X.childExpirationTime) {
        for (var c = 0, d = X.child; null !== d;) {
          var e = d.expirationTime,
              f = d.childExpirationTime;
          e > c && (c = e);
          f > c && (c = f);
          d = d.sibling;
        }

        X.childExpirationTime = c;
      }

      if (null !== b) return b;
      null !== a && 0 === (a.effectTag & 2048) && (null === a.firstEffect && (a.firstEffect = X.firstEffect), null !== X.lastEffect && (null !== a.lastEffect && (a.lastEffect.nextEffect = X.firstEffect), a.lastEffect = X.lastEffect), 1 < X.effectTag && (null !== a.lastEffect ? a.lastEffect.nextEffect = X : a.firstEffect = X, a.lastEffect = X));
    } else {
      b = zi(X);
      if (null !== b) return b.effectTag &= 2047, b;
      null !== a && (a.firstEffect = a.lastEffect = null, a.effectTag |= 2048);
    }

    b = X.sibling;
    if (null !== b) return b;
    X = a;
  } while (null !== X);

  S === ti && (S = jj);
  return null;
}

function Ij(a) {
  var b = a.expirationTime;
  a = a.childExpirationTime;
  return b > a ? b : a;
}

function Jj(a) {
  var b = ag();
  cg(99, Sj.bind(null, a, b));
  return null;
}

function Sj(a, b) {
  do {
    Dj();
  } while (null !== rj);

  if ((W & (fj | gj)) !== V) throw Error(u(327));
  var c = a.finishedWork,
      d = a.finishedExpirationTime;
  if (null === c) return null;
  a.finishedWork = null;
  a.finishedExpirationTime = 0;
  if (c === a.current) throw Error(u(177));
  a.callbackNode = null;
  a.callbackExpirationTime = 0;
  a.callbackPriority = 90;
  a.nextKnownPendingLevel = 0;
  var e = Ij(c);
  a.firstPendingTime = e;
  d <= a.lastSuspendedTime ? a.firstSuspendedTime = a.lastSuspendedTime = a.nextKnownPendingLevel = 0 : d <= a.firstSuspendedTime && (a.firstSuspendedTime = d - 1);
  d <= a.lastPingedTime && (a.lastPingedTime = 0);
  d <= a.lastExpiredTime && (a.lastExpiredTime = 0);
  a === T && (X = T = null, U = 0);
  1 < c.effectTag ? null !== c.lastEffect ? (c.lastEffect.nextEffect = c, e = c.firstEffect) : e = c : e = c.firstEffect;

  if (null !== e) {
    var f = W;
    W |= gj;
    dj.current = null;
    Dd = fd;
    var g = xd();

    if (yd(g)) {
      if ("selectionStart" in g) var h = {
        start: g.selectionStart,
        end: g.selectionEnd
      };else a: {
        h = (h = g.ownerDocument) && h.defaultView || window;
        var k = h.getSelection && h.getSelection();

        if (k && 0 !== k.rangeCount) {
          h = k.anchorNode;
          var l = k.anchorOffset,
              m = k.focusNode;
          k = k.focusOffset;

          try {
            h.nodeType, m.nodeType;
          } catch (wb) {
            h = null;
            break a;
          }

          var p = 0,
              x = -1,
              z = -1,
              ca = 0,
              D = 0,
              t = g,
              y = null;

          b: for (;;) {
            for (var A;;) {
              t !== h || 0 !== l && 3 !== t.nodeType || (x = p + l);
              t !== m || 0 !== k && 3 !== t.nodeType || (z = p + k);
              3 === t.nodeType && (p += t.nodeValue.length);
              if (null === (A = t.firstChild)) break;
              y = t;
              t = A;
            }

            for (;;) {
              if (t === g) break b;
              y === h && ++ca === l && (x = p);
              y === m && ++D === k && (z = p);
              if (null !== (A = t.nextSibling)) break;
              t = y;
              y = t.parentNode;
            }

            t = A;
          }

          h = -1 === x || -1 === z ? null : {
            start: x,
            end: z
          };
        } else h = null;
      }
      h = h || {
        start: 0,
        end: 0
      };
    } else h = null;

    Ed = {
      activeElementDetached: null,
      focusedElem: g,
      selectionRange: h
    };
    fd = !1;
    Y = e;

    do {
      try {
        Tj();
      } catch (wb) {
        if (null === Y) throw Error(u(330));
        Ei(Y, wb);
        Y = Y.nextEffect;
      }
    } while (null !== Y);

    Y = e;

    do {
      try {
        for (g = a, h = b; null !== Y;) {
          var q = Y.effectTag;
          q & 16 && Rb(Y.stateNode, "");

          if (q & 128) {
            var B = Y.alternate;

            if (null !== B) {
              var w = B.ref;
              null !== w && ("function" === typeof w ? w(null) : w.current = null);
            }
          }

          switch (q & 1038) {
            case 2:
              Pi(Y);
              Y.effectTag &= -3;
              break;

            case 6:
              Pi(Y);
              Y.effectTag &= -3;
              Si(Y.alternate, Y);
              break;

            case 1024:
              Y.effectTag &= -1025;
              break;

            case 1028:
              Y.effectTag &= -1025;
              Si(Y.alternate, Y);
              break;

            case 4:
              Si(Y.alternate, Y);
              break;

            case 8:
              l = Y, Mi(g, l, h), Ni(l);
          }

          Y = Y.nextEffect;
        }
      } catch (wb) {
        if (null === Y) throw Error(u(330));
        Ei(Y, wb);
        Y = Y.nextEffect;
      }
    } while (null !== Y);

    w = Ed;
    B = xd();
    q = w.focusedElem;
    h = w.selectionRange;

    if (B !== q && q && q.ownerDocument && wd(q.ownerDocument.documentElement, q)) {
      null !== h && yd(q) && (B = h.start, w = h.end, void 0 === w && (w = B), "selectionStart" in q ? (q.selectionStart = B, q.selectionEnd = Math.min(w, q.value.length)) : (w = (B = q.ownerDocument || document) && B.defaultView || window, w.getSelection && (w = w.getSelection(), l = q.textContent.length, g = Math.min(h.start, l), h = void 0 === h.end ? g : Math.min(h.end, l), !w.extend && g > h && (l = h, h = g, g = l), l = vd(q, g), m = vd(q, h), l && m && (1 !== w.rangeCount || w.anchorNode !== l.node || w.anchorOffset !== l.offset || w.focusNode !== m.node || w.focusOffset !== m.offset) && (B = B.createRange(), B.setStart(l.node, l.offset), w.removeAllRanges(), g > h ? (w.addRange(B), w.extend(m.node, m.offset)) : (B.setEnd(m.node, m.offset), w.addRange(B))))));
      B = [];

      for (w = q; w = w.parentNode;) {
        1 === w.nodeType && B.push({
          element: w,
          left: w.scrollLeft,
          top: w.scrollTop
        });
      }

      "function" === typeof q.focus && q.focus();

      for (q = 0; q < B.length; q++) {
        w = B[q], w.element.scrollLeft = w.left, w.element.scrollTop = w.top;
      }
    }

    fd = !!Dd;
    Ed = Dd = null;
    a.current = c;
    Y = e;

    do {
      try {
        for (q = a; null !== Y;) {
          var ub = Y.effectTag;
          ub & 36 && Ji(q, Y.alternate, Y);

          if (ub & 128) {
            B = void 0;
            var vb = Y.ref;

            if (null !== vb) {
              var Xc = Y.stateNode;

              switch (Y.tag) {
                case 5:
                  B = Xc;
                  break;

                default:
                  B = Xc;
              }

              "function" === typeof vb ? vb(B) : vb.current = B;
            }
          }

          Y = Y.nextEffect;
        }
      } catch (wb) {
        if (null === Y) throw Error(u(330));
        Ei(Y, wb);
        Y = Y.nextEffect;
      }
    } while (null !== Y);

    Y = null;
    Vf();
    W = f;
  } else a.current = c;

  if (qj) qj = !1, rj = a, sj = b;else for (Y = e; null !== Y;) {
    b = Y.nextEffect, Y.nextEffect = null, Y = b;
  }
  b = a.firstPendingTime;
  0 === b && (aj = null);
  1073741823 === b ? a === vj ? uj++ : (uj = 0, vj = a) : uj = 0;
  "function" === typeof Uj && Uj(c.stateNode, d);
  Z(a);
  if (Yi) throw Yi = !1, a = Zi, Zi = null, a;
  if ((W & ej) !== V) return null;
  gg();
  return null;
}

function Tj() {
  for (; null !== Y;) {
    var a = Y.effectTag;
    0 !== (a & 256) && Gi(Y.alternate, Y);
    0 === (a & 512) || qj || (qj = !0, dg(97, function () {
      Dj();
      return null;
    }));
    Y = Y.nextEffect;
  }
}

function Dj() {
  if (90 !== sj) {
    var a = 97 < sj ? 97 : sj;
    sj = 90;
    return cg(a, Vj);
  }
}

function Vj() {
  if (null === rj) return !1;
  var a = rj;
  rj = null;
  if ((W & (fj | gj)) !== V) throw Error(u(331));
  var b = W;
  W |= gj;

  for (a = a.current.firstEffect; null !== a;) {
    try {
      var c = a;
      if (0 !== (c.effectTag & 512)) switch (c.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          Hi(5, c), Ii(5, c);
      }
    } catch (d) {
      if (null === a) throw Error(u(330));
      Ei(a, d);
    }

    c = a.nextEffect;
    a.nextEffect = null;
    a = c;
  }

  W = b;
  gg();
  return !0;
}

function Wj(a, b, c) {
  b = Ai(c, b);
  b = Xi(a, b, 1073741823);
  xg(a, b);
  a = xj(a, 1073741823);
  null !== a && Z(a);
}

function Ei(a, b) {
  if (3 === a.tag) Wj(a, a, b);else for (var c = a.return; null !== c;) {
    if (3 === c.tag) {
      Wj(c, a, b);
      break;
    } else if (1 === c.tag) {
      var d = c.stateNode;

      if ("function" === typeof c.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === aj || !aj.has(d))) {
        a = Ai(b, a);
        a = $i(c, a, 1073741823);
        xg(c, a);
        c = xj(c, 1073741823);
        null !== c && Z(c);
        break;
      }
    }

    c = c.return;
  }
}

function Oj(a, b, c) {
  var d = a.pingCache;
  null !== d && d.delete(b);
  T === a && U === c ? S === vi || S === ui && 1073741823 === lj && $f() - Ti < pj ? Ej(a, U) : oj = !0 : Aj(a, c) && (b = a.lastPingedTime, 0 !== b && b < c || (a.lastPingedTime = c, Z(a)));
}

function Vi(a, b) {
  var c = a.stateNode;
  null !== c && c.delete(b);
  b = 0;
  0 === b && (b = Gg(), b = Hg(b, a, null));
  a = xj(a, b);
  null !== a && Z(a);
}

var Rj;

Rj = function Rj(a, b, c) {
  var d = b.expirationTime;

  if (null !== a) {
    var e = b.pendingProps;
    if (a.memoizedProps !== e || K.current) rg = !0;else {
      if (d < c) {
        rg = !1;

        switch (b.tag) {
          case 3:
            hi(b);
            Xh();
            break;

          case 5:
            fh(b);
            if (b.mode & 4 && 1 !== c && e.hidden) return b.expirationTime = b.childExpirationTime = 1, null;
            break;

          case 1:
            L(b.type) && Gf(b);
            break;

          case 4:
            dh(b, b.stateNode.containerInfo);
            break;

          case 10:
            d = b.memoizedProps.value;
            e = b.type._context;
            I(jg, e._currentValue);
            e._currentValue = d;
            break;

          case 13:
            if (null !== b.memoizedState) {
              d = b.child.childExpirationTime;
              if (0 !== d && d >= c) return ji(a, b, c);
              I(M, M.current & 1);
              b = $h(a, b, c);
              return null !== b ? b.sibling : null;
            }

            I(M, M.current & 1);
            break;

          case 19:
            d = b.childExpirationTime >= c;

            if (0 !== (a.effectTag & 64)) {
              if (d) return mi(a, b, c);
              b.effectTag |= 64;
            }

            e = b.memoizedState;
            null !== e && (e.rendering = null, e.tail = null);
            I(M, M.current);
            if (!d) return null;
        }

        return $h(a, b, c);
      }

      rg = !1;
    }
  } else rg = !1;

  b.expirationTime = 0;

  switch (b.tag) {
    case 2:
      d = b.type;
      null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2);
      a = b.pendingProps;
      e = Cf(b, J.current);
      qg(b, c);
      e = oh(null, b, d, a, e, c);
      b.effectTag |= 1;

      if ("object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof) {
        b.tag = 1;
        b.memoizedState = null;
        b.updateQueue = null;

        if (L(d)) {
          var f = !0;
          Gf(b);
        } else f = !1;

        b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null;
        ug(b);
        var g = d.getDerivedStateFromProps;
        "function" === typeof g && Fg(b, d, g, a);
        e.updater = Jg;
        b.stateNode = e;
        e._reactInternalFiber = b;
        Ng(b, d, a, c);
        b = gi(null, b, d, !0, f, c);
      } else b.tag = 0, R(null, b, e, c), b = b.child;

      return b;

    case 16:
      a: {
        e = b.elementType;
        null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2);
        a = b.pendingProps;
        ob(e);
        if (1 !== e._status) throw e._result;
        e = e._result;
        b.type = e;
        f = b.tag = Xj(e);
        a = ig(e, a);

        switch (f) {
          case 0:
            b = di(null, b, e, a, c);
            break a;

          case 1:
            b = fi(null, b, e, a, c);
            break a;

          case 11:
            b = Zh(null, b, e, a, c);
            break a;

          case 14:
            b = ai(null, b, e, ig(e.type, a), d, c);
            break a;
        }

        throw Error(u(306, e, ""));
      }

      return b;

    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ig(d, e), di(a, b, d, e, c);

    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ig(d, e), fi(a, b, d, e, c);

    case 3:
      hi(b);
      d = b.updateQueue;
      if (null === a || null === d) throw Error(u(282));
      d = b.pendingProps;
      e = b.memoizedState;
      e = null !== e ? e.element : null;
      vg(a, b);
      zg(b, d, null, c);
      d = b.memoizedState.element;
      if (d === e) Xh(), b = $h(a, b, c);else {
        if (e = b.stateNode.hydrate) Ph = Jd(b.stateNode.containerInfo.firstChild), Oh = b, e = Qh = !0;
        if (e) for (c = Yg(b, null, d, c), b.child = c; c;) {
          c.effectTag = c.effectTag & -3 | 1024, c = c.sibling;
        } else R(a, b, d, c), Xh();
        b = b.child;
      }
      return b;

    case 5:
      return fh(b), null === a && Uh(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Gd(d, e) ? g = null : null !== f && Gd(d, f) && (b.effectTag |= 16), ei(a, b), b.mode & 4 && 1 !== c && e.hidden ? (b.expirationTime = b.childExpirationTime = 1, b = null) : (R(a, b, g, c), b = b.child), b;

    case 6:
      return null === a && Uh(b), null;

    case 13:
      return ji(a, b, c);

    case 4:
      return dh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Xg(b, null, d, c) : R(a, b, d, c), b.child;

    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ig(d, e), Zh(a, b, d, e, c);

    case 7:
      return R(a, b, b.pendingProps, c), b.child;

    case 8:
      return R(a, b, b.pendingProps.children, c), b.child;

    case 12:
      return R(a, b, b.pendingProps.children, c), b.child;

    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        g = b.memoizedProps;
        f = e.value;
        var h = b.type._context;
        I(jg, h._currentValue);
        h._currentValue = f;
        if (null !== g) if (h = g.value, f = $e(h, f) ? 0 : ("function" === typeof d._calculateChangedBits ? d._calculateChangedBits(h, f) : 1073741823) | 0, 0 === f) {
          if (g.children === e.children && !K.current) {
            b = $h(a, b, c);
            break a;
          }
        } else for (h = b.child, null !== h && (h.return = b); null !== h;) {
          var k = h.dependencies;

          if (null !== k) {
            g = h.child;

            for (var l = k.firstContext; null !== l;) {
              if (l.context === d && 0 !== (l.observedBits & f)) {
                1 === h.tag && (l = wg(c, null), l.tag = 2, xg(h, l));
                h.expirationTime < c && (h.expirationTime = c);
                l = h.alternate;
                null !== l && l.expirationTime < c && (l.expirationTime = c);
                pg(h.return, c);
                k.expirationTime < c && (k.expirationTime = c);
                break;
              }

              l = l.next;
            }
          } else g = 10 === h.tag ? h.type === b.type ? null : h.child : h.child;

          if (null !== g) g.return = h;else for (g = h; null !== g;) {
            if (g === b) {
              g = null;
              break;
            }

            h = g.sibling;

            if (null !== h) {
              h.return = g.return;
              g = h;
              break;
            }

            g = g.return;
          }
          h = g;
        }
        R(a, b, e.children, c);
        b = b.child;
      }

      return b;

    case 9:
      return e = b.type, f = b.pendingProps, d = f.children, qg(b, c), e = sg(e, f.unstable_observedBits), d = d(e), b.effectTag |= 1, R(a, b, d, c), b.child;

    case 14:
      return e = b.type, f = ig(e, b.pendingProps), f = ig(e.type, f), ai(a, b, e, f, d, c);

    case 15:
      return ci(a, b, b.type, b.pendingProps, d, c);

    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ig(d, e), null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2), b.tag = 1, L(d) ? (a = !0, Gf(b)) : a = !1, qg(b, c), Lg(b, d, e), Ng(b, d, e, c), gi(null, b, d, !0, a, c);

    case 19:
      return mi(a, b, c);
  }

  throw Error(u(156, b.tag));
};

var Uj = null,
    Li = null;

function Yj(a) {
  if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
  var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (b.isDisabled || !b.supportsFiber) return !0;

  try {
    var c = b.inject(a);

    Uj = function Uj(a) {
      try {
        b.onCommitFiberRoot(c, a, void 0, 64 === (a.current.effectTag & 64));
      } catch (e) {}
    };

    Li = function Li(a) {
      try {
        b.onCommitFiberUnmount(c, a);
      } catch (e) {}
    };
  } catch (d) {}

  return !0;
}

function Zj(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.effectTag = 0;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childExpirationTime = this.expirationTime = 0;
  this.alternate = null;
}

function Sh(a, b, c, d) {
  return new Zj(a, b, c, d);
}

function bi(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}

function Xj(a) {
  if ("function" === typeof a) return bi(a) ? 1 : 0;

  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === gb) return 11;
    if (a === jb) return 14;
  }

  return 2;
}

function Sg(a, b) {
  var c = a.alternate;
  null === c ? (c = Sh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.effectTag = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
  c.childExpirationTime = a.childExpirationTime;
  c.expirationTime = a.expirationTime;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = null === b ? null : {
    expirationTime: b.expirationTime,
    firstContext: b.firstContext,
    responders: b.responders
  };
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}

function Ug(a, b, c, d, e, f) {
  var g = 2;
  d = a;
  if ("function" === typeof a) bi(a) && (g = 1);else if ("string" === typeof a) g = 5;else a: switch (a) {
    case ab:
      return Wg(c.children, e, f, b);

    case fb:
      g = 8;
      e |= 7;
      break;

    case bb:
      g = 8;
      e |= 1;
      break;

    case cb:
      return a = Sh(12, c, b, e | 8), a.elementType = cb, a.type = cb, a.expirationTime = f, a;

    case hb:
      return a = Sh(13, c, b, e), a.type = hb, a.elementType = hb, a.expirationTime = f, a;

    case ib:
      return a = Sh(19, c, b, e), a.elementType = ib, a.expirationTime = f, a;

    default:
      if ("object" === typeof a && null !== a) switch (a.$$typeof) {
        case db:
          g = 10;
          break a;

        case eb:
          g = 9;
          break a;

        case gb:
          g = 11;
          break a;

        case jb:
          g = 14;
          break a;

        case kb:
          g = 16;
          d = null;
          break a;

        case lb:
          g = 22;
          break a;
      }
      throw Error(u(130, null == a ? a : typeof a, ""));
  }
  b = Sh(g, c, b, e);
  b.elementType = a;
  b.type = d;
  b.expirationTime = f;
  return b;
}

function Wg(a, b, c, d) {
  a = Sh(7, a, d, b);
  a.expirationTime = c;
  return a;
}

function Tg(a, b, c) {
  a = Sh(6, a, null, b);
  a.expirationTime = c;
  return a;
}

function Vg(a, b, c) {
  b = Sh(4, null !== a.children ? a.children : [], a.key, b);
  b.expirationTime = c;
  b.stateNode = {
    containerInfo: a.containerInfo,
    pendingChildren: null,
    implementation: a.implementation
  };
  return b;
}

function ak(a, b, c) {
  this.tag = b;
  this.current = null;
  this.containerInfo = a;
  this.pingCache = this.pendingChildren = null;
  this.finishedExpirationTime = 0;
  this.finishedWork = null;
  this.timeoutHandle = -1;
  this.pendingContext = this.context = null;
  this.hydrate = c;
  this.callbackNode = null;
  this.callbackPriority = 90;
  this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0;
}

function Aj(a, b) {
  var c = a.firstSuspendedTime;
  a = a.lastSuspendedTime;
  return 0 !== c && c >= b && a <= b;
}

function xi(a, b) {
  var c = a.firstSuspendedTime,
      d = a.lastSuspendedTime;
  c < b && (a.firstSuspendedTime = b);
  if (d > b || 0 === c) a.lastSuspendedTime = b;
  b <= a.lastPingedTime && (a.lastPingedTime = 0);
  b <= a.lastExpiredTime && (a.lastExpiredTime = 0);
}

function yi(a, b) {
  b > a.firstPendingTime && (a.firstPendingTime = b);
  var c = a.firstSuspendedTime;
  0 !== c && (b >= c ? a.firstSuspendedTime = a.lastSuspendedTime = a.nextKnownPendingLevel = 0 : b >= a.lastSuspendedTime && (a.lastSuspendedTime = b + 1), b > a.nextKnownPendingLevel && (a.nextKnownPendingLevel = b));
}

function Cj(a, b) {
  var c = a.lastExpiredTime;
  if (0 === c || c > b) a.lastExpiredTime = b;
}

function bk(a, b, c, d) {
  var e = b.current,
      f = Gg(),
      g = Dg.suspense;
  f = Hg(f, e, g);

  a: if (c) {
    c = c._reactInternalFiber;

    b: {
      if (dc(c) !== c || 1 !== c.tag) throw Error(u(170));
      var h = c;

      do {
        switch (h.tag) {
          case 3:
            h = h.stateNode.context;
            break b;

          case 1:
            if (L(h.type)) {
              h = h.stateNode.__reactInternalMemoizedMergedChildContext;
              break b;
            }

        }

        h = h.return;
      } while (null !== h);

      throw Error(u(171));
    }

    if (1 === c.tag) {
      var k = c.type;

      if (L(k)) {
        c = Ff(c, k, h);
        break a;
      }
    }

    c = h;
  } else c = Af;

  null === b.context ? b.context = c : b.pendingContext = c;
  b = wg(f, g);
  b.payload = {
    element: a
  };
  d = void 0 === d ? null : d;
  null !== d && (b.callback = d);
  xg(e, b);
  Ig(e, f);
  return f;
}

function ck(a) {
  a = a.current;
  if (!a.child) return null;

  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;

    default:
      return a.child.stateNode;
  }
}

function dk(a, b) {
  a = a.memoizedState;
  null !== a && null !== a.dehydrated && a.retryTime < b && (a.retryTime = b);
}

function ek(a, b) {
  dk(a, b);
  (a = a.alternate) && dk(a, b);
}

function fk(a, b, c) {
  c = null != c && !0 === c.hydrate;
  var d = new ak(a, b, c),
      e = Sh(3, null, null, 2 === b ? 7 : 1 === b ? 3 : 0);
  d.current = e;
  e.stateNode = d;
  ug(e);
  a[Od] = d.current;
  c && 0 !== b && Jc(a, 9 === a.nodeType ? a : a.ownerDocument);
  this._internalRoot = d;
}

fk.prototype.render = function (a) {
  bk(a, this._internalRoot, null, null);
};

fk.prototype.unmount = function () {
  var a = this._internalRoot,
      b = a.containerInfo;
  bk(null, a, null, function () {
    b[Od] = null;
  });
};

function gk(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}

function hk(a, b) {
  b || (b = a ? 9 === a.nodeType ? a.documentElement : a.firstChild : null, b = !(!b || 1 !== b.nodeType || !b.hasAttribute("data-reactroot")));
  if (!b) for (var c; c = a.lastChild;) {
    a.removeChild(c);
  }
  return new fk(a, 0, b ? {
    hydrate: !0
  } : void 0);
}

function ik(a, b, c, d, e) {
  var f = c._reactRootContainer;

  if (f) {
    var g = f._internalRoot;

    if ("function" === typeof e) {
      var h = e;

      e = function e() {
        var a = ck(g);
        h.call(a);
      };
    }

    bk(b, g, a, e);
  } else {
    f = c._reactRootContainer = hk(c, d);
    g = f._internalRoot;

    if ("function" === typeof e) {
      var k = e;

      e = function e() {
        var a = ck(g);
        k.call(a);
      };
    }

    Nj(function () {
      bk(b, g, a, e);
    });
  }

  return ck(g);
}

function jk(a, b, c) {
  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return {
    $$typeof: $a,
    key: null == d ? null : "" + d,
    children: a,
    containerInfo: b,
    implementation: c
  };
}

wc = function wc(a) {
  if (13 === a.tag) {
    var b = hg(Gg(), 150, 100);
    Ig(a, b);
    ek(a, b);
  }
};

xc = function xc(a) {
  13 === a.tag && (Ig(a, 3), ek(a, 3));
};

yc = function yc(a) {
  if (13 === a.tag) {
    var b = Gg();
    b = Hg(b, a, null);
    Ig(a, b);
    ek(a, b);
  }
};

za = function za(a, b, c) {
  switch (b) {
    case "input":
      Cb(a, c);
      b = c.name;

      if ("radio" === c.type && null != b) {
        for (c = a; c.parentNode;) {
          c = c.parentNode;
        }

        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');

        for (b = 0; b < c.length; b++) {
          var d = c[b];

          if (d !== a && d.form === a.form) {
            var e = Qd(d);
            if (!e) throw Error(u(90));
            yb(d);
            Cb(d, e);
          }
        }
      }

      break;

    case "textarea":
      Kb(a, c);
      break;

    case "select":
      b = c.value, null != b && Hb(a, !!c.multiple, b, !1);
  }
};

Fa = Mj;

Ga = function Ga(a, b, c, d, e) {
  var f = W;
  W |= 4;

  try {
    return cg(98, a.bind(null, b, c, d, e));
  } finally {
    W = f, W === V && gg();
  }
};

Ha = function Ha() {
  (W & (1 | fj | gj)) === V && (Lj(), Dj());
};

Ia = function Ia(a, b) {
  var c = W;
  W |= 2;

  try {
    return a(b);
  } finally {
    W = c, W === V && gg();
  }
};

function kk(a, b) {
  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!gk(b)) throw Error(u(200));
  return jk(a, b, null, c);
}

var lk = {
  Events: [Nc, Pd, Qd, xa, ta, Xd, function (a) {
    jc(a, Wd);
  }, Da, Ea, id, mc, Dj, {
    current: !1
  }]
};

(function (a) {
  var b = a.findFiberByHostInstance;
  return Yj(n({}, a, {
    overrideHookState: null,
    overrideProps: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Wa.ReactCurrentDispatcher,
    findHostInstanceByFiber: function findHostInstanceByFiber(a) {
      a = hc(a);
      return null === a ? null : a.stateNode;
    },
    findFiberByHostInstance: function findFiberByHostInstance(a) {
      return b ? b(a) : null;
    },
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null
  }));
})({
  findFiberByHostInstance: tc,
  bundleType: 0,
  version: "16.13.1",
  rendererPackageName: "react-dom"
});

exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lk;
exports.createPortal = kk;

exports.findDOMNode = function (a) {
  if (null == a) return null;
  if (1 === a.nodeType) return a;
  var b = a._reactInternalFiber;

  if (void 0 === b) {
    if ("function" === typeof a.render) throw Error(u(188));
    throw Error(u(268, Object.keys(a)));
  }

  a = hc(b);
  a = null === a ? null : a.stateNode;
  return a;
};

exports.flushSync = function (a, b) {
  if ((W & (fj | gj)) !== V) throw Error(u(187));
  var c = W;
  W |= 1;

  try {
    return cg(99, a.bind(null, b));
  } finally {
    W = c, gg();
  }
};

exports.hydrate = function (a, b, c) {
  if (!gk(b)) throw Error(u(200));
  return ik(null, a, b, !0, c);
};

exports.render = function (a, b, c) {
  if (!gk(b)) throw Error(u(200));
  return ik(null, a, b, !1, c);
};

exports.unmountComponentAtNode = function (a) {
  if (!gk(a)) throw Error(u(40));
  return a._reactRootContainer ? (Nj(function () {
    ik(null, null, a, !1, function () {
      a._reactRootContainer = null;
      a[Od] = null;
    });
  }), !0) : !1;
};

exports.unstable_batchedUpdates = Mj;

exports.unstable_createPortal = function (a, b) {
  return kk(a, b, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
};

exports.unstable_renderSubtreeIntoContainer = function (a, b, c, d) {
  if (!gk(c)) throw Error(u(200));
  if (null == a || void 0 === a._reactInternalFiber) throw Error(u(38));
  return ik(a, b, c, !1, d);
};

exports.version = "16.13.1";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(48);
} else {}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var _f, g, h, k, l;

if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
  var p = null,
      q = null,
      t = function t() {
    if (null !== p) try {
      var a = exports.unstable_now();
      p(!0, a);
      p = null;
    } catch (b) {
      throw setTimeout(t, 0), b;
    }
  },
      u = Date.now();

  exports.unstable_now = function () {
    return Date.now() - u;
  };

  _f = function f(a) {
    null !== p ? setTimeout(_f, 0, a) : (p = a, setTimeout(t, 0));
  };

  g = function g(a, b) {
    q = setTimeout(a, b);
  };

  h = function h() {
    clearTimeout(q);
  };

  k = function k() {
    return !1;
  };

  l = exports.unstable_forceFrameRate = function () {};
} else {
  var w = window.performance,
      x = window.Date,
      y = window.setTimeout,
      z = window.clearTimeout;

  if ("undefined" !== typeof console) {
    var A = window.cancelAnimationFrame;
    "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
    "function" !== typeof A && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
  }

  if ("object" === typeof w && "function" === typeof w.now) exports.unstable_now = function () {
    return w.now();
  };else {
    var B = x.now();

    exports.unstable_now = function () {
      return x.now() - B;
    };
  }
  var C = !1,
      D = null,
      E = -1,
      F = 5,
      G = 0;

  k = function k() {
    return exports.unstable_now() >= G;
  };

  l = function l() {};

  exports.unstable_forceFrameRate = function (a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : F = 0 < a ? Math.floor(1E3 / a) : 5;
  };

  var H = new MessageChannel(),
      I = H.port2;

  H.port1.onmessage = function () {
    if (null !== D) {
      var a = exports.unstable_now();
      G = a + F;

      try {
        D(!0, a) ? I.postMessage(null) : (C = !1, D = null);
      } catch (b) {
        throw I.postMessage(null), b;
      }
    } else C = !1;
  };

  _f = function _f(a) {
    D = a;
    C || (C = !0, I.postMessage(null));
  };

  g = function g(a, b) {
    E = y(function () {
      a(exports.unstable_now());
    }, b);
  };

  h = function h() {
    z(E);
    E = -1;
  };
}

function J(a, b) {
  var c = a.length;
  a.push(b);

  a: for (;;) {
    var d = c - 1 >>> 1,
        e = a[d];
    if (void 0 !== e && 0 < K(e, b)) a[d] = b, a[c] = e, c = d;else break a;
  }
}

function L(a) {
  a = a[0];
  return void 0 === a ? null : a;
}

function M(a) {
  var b = a[0];

  if (void 0 !== b) {
    var c = a.pop();

    if (c !== b) {
      a[0] = c;

      a: for (var d = 0, e = a.length; d < e;) {
        var m = 2 * (d + 1) - 1,
            n = a[m],
            v = m + 1,
            r = a[v];
        if (void 0 !== n && 0 > K(n, c)) void 0 !== r && 0 > K(r, n) ? (a[d] = r, a[v] = c, d = v) : (a[d] = n, a[m] = c, d = m);else if (void 0 !== r && 0 > K(r, c)) a[d] = r, a[v] = c, d = v;else break a;
      }
    }

    return b;
  }

  return null;
}

function K(a, b) {
  var c = a.sortIndex - b.sortIndex;
  return 0 !== c ? c : a.id - b.id;
}

var N = [],
    O = [],
    P = 1,
    Q = null,
    R = 3,
    S = !1,
    T = !1,
    U = !1;

function V(a) {
  for (var b = L(O); null !== b;) {
    if (null === b.callback) M(O);else if (b.startTime <= a) M(O), b.sortIndex = b.expirationTime, J(N, b);else break;
    b = L(O);
  }
}

function W(a) {
  U = !1;
  V(a);
  if (!T) if (null !== L(N)) T = !0, _f(X);else {
    var b = L(O);
    null !== b && g(W, b.startTime - a);
  }
}

function X(a, b) {
  T = !1;
  U && (U = !1, h());
  S = !0;
  var c = R;

  try {
    V(b);

    for (Q = L(N); null !== Q && (!(Q.expirationTime > b) || a && !k());) {
      var d = Q.callback;

      if (null !== d) {
        Q.callback = null;
        R = Q.priorityLevel;
        var e = d(Q.expirationTime <= b);
        b = exports.unstable_now();
        "function" === typeof e ? Q.callback = e : Q === L(N) && M(N);
        V(b);
      } else M(N);

      Q = L(N);
    }

    if (null !== Q) var m = !0;else {
      var n = L(O);
      null !== n && g(W, n.startTime - b);
      m = !1;
    }
    return m;
  } finally {
    Q = null, R = c, S = !1;
  }
}

function Y(a) {
  switch (a) {
    case 1:
      return -1;

    case 2:
      return 250;

    case 5:
      return 1073741823;

    case 4:
      return 1E4;

    default:
      return 5E3;
  }
}

var Z = l;
exports.unstable_IdlePriority = 5;
exports.unstable_ImmediatePriority = 1;
exports.unstable_LowPriority = 4;
exports.unstable_NormalPriority = 3;
exports.unstable_Profiling = null;
exports.unstable_UserBlockingPriority = 2;

exports.unstable_cancelCallback = function (a) {
  a.callback = null;
};

exports.unstable_continueExecution = function () {
  T || S || (T = !0, _f(X));
};

exports.unstable_getCurrentPriorityLevel = function () {
  return R;
};

exports.unstable_getFirstCallbackNode = function () {
  return L(N);
};

exports.unstable_next = function (a) {
  switch (R) {
    case 1:
    case 2:
    case 3:
      var b = 3;
      break;

    default:
      b = R;
  }

  var c = R;
  R = b;

  try {
    return a();
  } finally {
    R = c;
  }
};

exports.unstable_pauseExecution = function () {};

exports.unstable_requestPaint = Z;

exports.unstable_runWithPriority = function (a, b) {
  switch (a) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;

    default:
      a = 3;
  }

  var c = R;
  R = a;

  try {
    return b();
  } finally {
    R = c;
  }
};

exports.unstable_scheduleCallback = function (a, b, c) {
  var d = exports.unstable_now();

  if ("object" === typeof c && null !== c) {
    var e = c.delay;
    e = "number" === typeof e && 0 < e ? d + e : d;
    c = "number" === typeof c.timeout ? c.timeout : Y(a);
  } else c = Y(a), e = d;

  c = e + c;
  a = {
    id: P++,
    callback: b,
    priorityLevel: a,
    startTime: e,
    expirationTime: c,
    sortIndex: -1
  };
  e > d ? (a.sortIndex = e, J(O, a), null === L(N) && a === L(O) && (U ? h() : U = !0, g(W, e - d))) : (a.sortIndex = c, J(N, a), T || S || (T = !0, _f(X)));
  return a;
};

exports.unstable_shouldYield = function () {
  var a = exports.unstable_now();
  V(a);
  var b = L(N);
  return b !== Q && null !== Q && null !== b && null !== b.callback && b.startTime <= a && b.expirationTime < Q.expirationTime || k();
};

exports.unstable_wrapCallback = function (a) {
  var b = R;
  return function () {
    var c = R;
    R = b;

    try {
      return a.apply(this, arguments);
    } finally {
      R = c;
    }
  };
};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var b = "function" === typeof Symbol && Symbol.for,
    c = b ? Symbol.for("react.element") : 60103,
    d = b ? Symbol.for("react.portal") : 60106,
    e = b ? Symbol.for("react.fragment") : 60107,
    f = b ? Symbol.for("react.strict_mode") : 60108,
    g = b ? Symbol.for("react.profiler") : 60114,
    h = b ? Symbol.for("react.provider") : 60109,
    k = b ? Symbol.for("react.context") : 60110,
    l = b ? Symbol.for("react.async_mode") : 60111,
    m = b ? Symbol.for("react.concurrent_mode") : 60111,
    n = b ? Symbol.for("react.forward_ref") : 60112,
    p = b ? Symbol.for("react.suspense") : 60113,
    q = b ? Symbol.for("react.suspense_list") : 60120,
    r = b ? Symbol.for("react.memo") : 60115,
    t = b ? Symbol.for("react.lazy") : 60116,
    v = b ? Symbol.for("react.block") : 60121,
    w = b ? Symbol.for("react.fundamental") : 60117,
    x = b ? Symbol.for("react.responder") : 60118,
    y = b ? Symbol.for("react.scope") : 60119;

function z(a) {
  if ("object" === typeof a && null !== a) {
    var u = a.$$typeof;

    switch (u) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a;

          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a;

              default:
                return u;
            }

        }

      case d:
        return u;
    }
  }
}

function A(a) {
  return z(a) === m;
}

exports.AsyncMode = l;
exports.ConcurrentMode = m;
exports.ContextConsumer = k;
exports.ContextProvider = h;
exports.Element = c;
exports.ForwardRef = n;
exports.Fragment = e;
exports.Lazy = t;
exports.Memo = r;
exports.Portal = d;
exports.Profiler = g;
exports.StrictMode = f;
exports.Suspense = p;

exports.isAsyncMode = function (a) {
  return A(a) || z(a) === l;
};

exports.isConcurrentMode = A;

exports.isContextConsumer = function (a) {
  return z(a) === k;
};

exports.isContextProvider = function (a) {
  return z(a) === h;
};

exports.isElement = function (a) {
  return "object" === typeof a && null !== a && a.$$typeof === c;
};

exports.isForwardRef = function (a) {
  return z(a) === n;
};

exports.isFragment = function (a) {
  return z(a) === e;
};

exports.isLazy = function (a) {
  return z(a) === t;
};

exports.isMemo = function (a) {
  return z(a) === r;
};

exports.isPortal = function (a) {
  return z(a) === d;
};

exports.isProfiler = function (a) {
  return z(a) === g;
};

exports.isStrictMode = function (a) {
  return z(a) === f;
};

exports.isSuspense = function (a) {
  return z(a) === p;
};

exports.isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};

exports.typeOf = z;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(52)();
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = __webpack_require__(53);

function emptyFunction() {}

function emptyFunctionWithReset() {}

emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }

    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  }

  ;
  shim.isRequired = shim;

  function getShim() {
    return shim;
  }

  ; // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

/***/ }),
/* 54 */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map