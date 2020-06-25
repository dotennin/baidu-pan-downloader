// ==UserScript==
// @namespace https://github.com/dotennin/baidu-pan-downloader
// @name 百度网盘下载管理器
// @description A download manager for Baidu Yun
// @version 1.3.2
// @author Dotennin
// @license MIT
// @compatible        chrome/83.0.4103.97 passed
// @compatible        edge/83.0.478.54 passed
// @compatible        firefox untested
// @compatible        opera untested
// @compatible        safari untested
// @include https://pan.baidu.com/disk/*
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstanceForSystem; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _gmInterface_gmInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* eslint-disable @typescript-eslint/no-object-literal-type-assertion,no-undef */


var InstanceForSystem = {
  list: eval("require('system-core:context/context.js')").instanceForSystem.list,
  autoStart: true,
  maxDownloadCount: 1,
  downloadingItems: {},
  stoppedItems: {},
  completedItems: {},
  allDownloads: {},
  initState: function initState() {
    var _this = this;

    var objectFromValue = _gmInterface_gmInterface__WEBPACK_IMPORTED_MODULE_1__[/* GM */ "a"].getValue(_types__WEBPACK_IMPORTED_MODULE_0__[/* ValueTypes */ "b"].items, {});
    _gmInterface_gmInterface__WEBPACK_IMPORTED_MODULE_1__[/* GM */ "a"].deleteValue(_types__WEBPACK_IMPORTED_MODULE_0__[/* ValueTypes */ "b"].items);
    this.allDownloads = objectFromValue;
    Object.values(objectFromValue).forEach(function (item) {
      if (item.status === _types__WEBPACK_IMPORTED_MODULE_0__[/* StatusTypes */ "a"].completed) {
        _this.completedItems[item.fs_id] = item;
      }

      if (item.status === _types__WEBPACK_IMPORTED_MODULE_0__[/* StatusTypes */ "a"].stopped) {
        _this.stoppedItems[item.fs_id] = item;
      }
    });
    return this;
  },

  get selectedList() {
    var selected = this.list.getSelected();
    return selected.filter(function (arr) {
      return arr.isdir !== 1;
    });
  },

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  get itemsFromQueue() {
    var _this2 = this;

    var queue = {};
    var filterKeys = Object.keys(Object.assign({}, this.downloadingItems, this.completedItems, this.stoppedItems));
    Object.keys(this.allDownloads).forEach(function (fsId) {
      if (!filterKeys.includes(fsId)) {
        queue[fsId] = _this2.allDownloads[fsId];
      }
    });
    return queue;
  },

  get downloadable() {
    return Object.keys(this.downloadingItems).length < this.maxDownloadCount;
  },

  get currentList() {
    return this.list.getCurrentList();
  },

  stopAll: function stopAll() {
    Object.values(this.downloadingItems).forEach(function (item) {
      item.request && item.request.abort && item.request.abort();
    });
  }
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ValueTypes; });
var StatusTypes;

(function (StatusTypes) {
  StatusTypes["downloading"] = "DOWNLOADING";
  StatusTypes["stopped"] = "STOPPED";
  StatusTypes["completed"] = "COMPLETED";
  StatusTypes["inQueued"] = "IN_QUEUED";
  StatusTypes["error"] = "ERROR";
})(StatusTypes || (StatusTypes = {}));

var ValueTypes;

(function (ValueTypes) {
  ValueTypes["items"] = "ITEM_LIST";
})(ValueTypes || (ValueTypes = {}));

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GM; });
/* eslint-disable @typescript-eslint/no-explicit-any,no-undef */

/**
 * This section describes how the Tampermonkey API can be used
 * Application Programming Interface
 * @link https://www.tampermonkey.net/documentation.php
 */
var GM = {
  /**
   * Adds the given style to the document and returns the injected style element.
   * @param css
   */
  addStyle: function addStyle(css) {
    // @ts-ignore
    GM_addStyle(css);
  },

  /**
   * Deletes 'name' from storage.
   * @param name
   * @constructor
   */
  deleteValue: function deleteValue(name) {
    // @ts-ignore
    GM_deleteValue(name);
  },

  /**
   * List all names of the storage.
   */
  listValues: function listValues() {
    eval("GM_listValues()");
  },

  /**
   * Adds a change listener to the storage and returns the listener ID.
   * 'name' is the name of the observed variable.
   * The 'remote' argument of the callback function shows whether this value was modified from the instance of another tab (true) or within this script instance (false).
   * Therefore this functionality can be used by scripts of different browser tabs to communicate with each other.
   * @param name
   * @param callback
   * @return number
   */
  addValueChangeListener: function addValueChangeListener(name, callback) {
    // @ts-ignore
    return GM_addValueChangeListener(name, callback);
  },

  /**
   * Removes a change listener by its ID.
   * @param listenerId
   */
  removeValueChangeListener: function removeValueChangeListener(listenerId) {
    // @ts-ignore
    GM_removeValueChangeListener(listenerId);
  },

  /**
   * Set the value of 'name' to the storage.
   * @param name
   * @param value
   * @constructor
   */
  setValue: function setValue(name, value) {
    // @ts-ignore
    GM_setValue(name, value);
  },

  /**
   * Get the value of 'name' from storage.
   * @param name
   * @param defaultValue
   * @constructor
   */
  getValue: function getValue(name, defaultValue) {
    // @ts-ignore
    return GM_getValue(name, defaultValue);
  },

  /**
   * Log a message to the console.
   * @param message
   */
  log: function log(message) {
    // @ts-ignore
    GM_log(message);
  },

  /**
   * Get the content of a predefined @resource tag at the script header.
   * @param name
   */
  getResourceText: function getResourceText(name) {
    // @ts-ignore
    return GM_getResourceText(name);
  },

  /**
   * Get the base64 encoded URI of a predefined @resource tag at the script header.
   * @param name
   */
  getResourceURL: function getResourceURL(name) {
    // @ts-ignore
    return GM_getResourceURL(name);
  },

  /**
   * Register a menu to be displayed at the Tampermonkey menu at pages where this script runs and returns a menu command ID.
   * @param name
   * @param callback
   * @param accessKey
   * @return number a menu command ID.
   */
  registerMenuCommand: function registerMenuCommand(name, callback, accessKey) {
    // @ts-ignore
    return GM_registerMenuCommand(name, callback, accessKey);
  },

  /**
   * Unregister a menu command that was previously registered by GM_registerMenuCommand with the given menu command ID.
   * @param menuCmdId
   */
  unregisterMenuCommand: function unregisterMenuCommand(menuCmdId) {
    // @ts-ignore
    GM_unregisterMenuCommand(menuCmdId);
  },

  /**
   * Open a new tab with this url. The options object can have the following properties:
   * @param url
   * @param loadInBackground
   */
  openInTab: function openInTab(url, loadInBackground) {
    // @ts-ignore
    GM_openInTab(url, loadInBackground);
  },

  /**
   * Make an xmlHttpRequest.
   * Property of details:
   * @param details
   */
  xmlHttpRequest: function xmlHttpRequest(details) {
    // @ts-ignore
    return GM_xmlhttpRequest(details);
  },

  /**
   * Downloads a given URL to the local disk.
   * @param urlOrdetails
   * @param name
   */
  download: function download(urlOrdetails, name) {
    if (typeof urlOrdetails === 'string') {
      // @ts-ignore
      return GM_download(urlOrdetails, name);
    } // @ts-ignore


    return GM_download(urlOrdetails);
  },

  /**
   * Get a object that is persistent as long as this tab is open.
   * @param callback
   */
  getTab: function getTab(callback) {
    // @ts-ignore
    GM_getTab(callback);
  },

  /**
   * Save the tab object to reopen it after a page unload.
   * @param tab
   */
  saveTab: function saveTab(tab) {
    // @ts-ignore
    GM_saveTab(tab);
  },

  /**
   * Get all tab objects as a hash to communicate with other script instances.
   * @param callback
   */
  getTabs: function getTabs(callback) {
    // @ts-ignore
    GM_getTabs(callback);
  },

  /**
   * Shows a HTML5 Desktop notification and/or highlight the current tab.
   * @param textOrDetails
   * @param titleOrOndone
   * @param image
   * @param onclick
   */
  notification: function notification(textOrDetails, titleOrOndone, image, onclick) {
    if (typeof textOrDetails === 'string') {
      // @ts-ignore
      GM_notification(textOrDetails, titleOrOndone, image, onclick);
    } else {
      // @ts-ignore
      GM_notification(textOrDetails, titleOrOndone);
    }
  },

  /**
   * Copies data into the clipboard. The parameter 'info' can be an object like "{ type: 'text', mimetype: 'text/plain'}" or just a string expressing the type ("text" or "html").
   * @param data
   * @param info
   */
  setClipboard: function setClipboard(data) {
    var info = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      type: 'text',
      mimetype: 'text/plain'
    };
    // @ts-ignore
    GM_setClipboard(data, info);
  },

  /**
   * Get some info about the script and TM. The object might look like this:
   */
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/camelcase
  info: GM_info
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "renderOperationElement", function() { return /* binding */ renderOperationElement; });

// EXTERNAL MODULE: ./src/InstaceForSystem.ts
var InstaceForSystem = __webpack_require__(0);

// EXTERNAL MODULE: ./src/types.ts
var types = __webpack_require__(1);

// EXTERNAL MODULE: ./src/gmInterface/gmInterface.ts
var gmInterface = __webpack_require__(2);

// CONCATENATED MODULE: ./src/utils/index.ts
var formatByte = function formatByte(_byte) {
  if (_byte <= 1000) {
    return "".concat(_byte, " B");
  }

  var KiByte = Math.round(_byte / 1024);
  return KiByte <= 1000 ? "".concat(KiByte, " KB") : "".concat(Math.round(KiByte / 10.24) / 100, " MB");
};
// CONCATENATED MODULE: ./src/apis.ts
/* eslint-disable @typescript-eslint/camelcase,@typescript-eslint/no-use-before-define */





function getDownloadUrl(arr) {
  return new Promise(function (resolve, reject) {
    gmInterface["a" /* GM */].xmlHttpRequest({
      url: 'http://pcs.baidu.com/rest/2.0/pcs/file?app_id=778750&ver=2.0&method=locatedownload&path=' + encodeURIComponent(arr.path),
      method: 'GET',
      responseType: 'json',
      headers: {
        'User-Agent': 'netdisk;P2SP;2.2.60.26'
      },
      onload: function onload(r) {
        if (r.response.hasOwnProperty('client_ip')) {
          var url = r.response.urls[0].url + '&filename=' + encodeURIComponent(arr.server_filename);
          arr.url = url;
          return resolve(arr);
        } else {
          // Todo return error message
          return reject(r);
        }
      }
    });
  });
}
function downloadItem(arr) {
  // Remove Item if target still in stop cluster
  if (InstaceForSystem["a" /* InstanceForSystem */].stoppedItems[arr.fs_id]) {
    delete InstaceForSystem["a" /* InstanceForSystem */].stoppedItems[arr.fs_id];
  }

  if (!InstaceForSystem["a" /* InstanceForSystem */].downloadable) {
    arr.status = types["a" /* StatusTypes */].inQueued;
    renderOperationElement(arr);
    return;
  }

  arr.status = types["a" /* StatusTypes */].downloading;
  renderOperationElement(arr);
  InstaceForSystem["a" /* InstanceForSystem */].downloadingItems[arr.fs_id] = arr;
  var url = arr.url,
      server_filename = arr.server_filename;
  var loaded = 0;
  var currentEvent = undefined;
  var percentOverlay = document.querySelector("div[data-label=\"".concat(arr.fs_id, "\"]"));
  var progressRadial = percentOverlay.parentElement;
  var speedOverlay = percentOverlay.closest('tr').querySelector('td[data-label="speed"]');
  arr.request = gmInterface["a" /* GM */].download({
    url: url,
    name: server_filename,
    saveAs: true,
    headers: {
      Host: 'qdall01.baidupcs.com',
      Accept: '*/*',
      'User-Agent': 'netdisk;P2SP;2.2.60.26',
      'Accept-Encoding': 'identity',
      'Accept-Language': 'ja-JP',
      'Accept-Charset': '*'
    },
    onprogress: function onprogress(e) {
      currentEvent = e;
      var percent = Math.round(currentEvent.loaded * 100 / currentEvent.total);
      progressRadial.className = "progress-radial progress-".concat(percent);
      percentOverlay.innerText = "".concat(percent, "%");
    },
    onload: function onload() {
      arr.progress_loader_id && clearInterval(arr.progress_loader_id);
      progressRadial.className = 'progress-radial progress-100';
      percentOverlay.innerText = '100%';
      speedOverlay.innerText = '';
      InstaceForSystem["a" /* InstanceForSystem */].completedItems[arr.fs_id] = arr;
      delete InstaceForSystem["a" /* InstanceForSystem */].downloadingItems[arr.fs_id];
      gmInterface["a" /* GM */].notification({
        text: '下载完成',
        title: server_filename,
        highlight: true
      });
      arr.status = types["a" /* StatusTypes */].completed;
      renderOperationElement(arr);
      addNextDownloadRequest();
    },
    onerror: function onerror() {
      arr.progress_loader_id && clearInterval(arr.progress_loader_id);
      progressRadial.className = 'progress-radial progress-0';
      percentOverlay.innerHTML = "<span style=\"color: red\">error</span>";
      speedOverlay.innerText = '';
      InstaceForSystem["a" /* InstanceForSystem */].stoppedItems[arr.fs_id] = arr;
      delete InstaceForSystem["a" /* InstanceForSystem */].downloadingItems[arr.fs_id];
      arr.status = types["a" /* StatusTypes */].error;
      renderOperationElement(arr);
      addNextDownloadRequest();
    }
  });
  arr.progress_loader_id = setInterval(function () {
    if (currentEvent) {
      var speed = currentEvent.loaded - loaded;
      loaded = currentEvent.loaded;
      speedOverlay.innerText = "".concat(formatByte(speed), "/s");
    }
  }, 1000);
}
function addNextDownloadRequest() {
  for (var fs_id in InstaceForSystem["a" /* InstanceForSystem */].itemsFromQueue) {
    downloadItem(InstaceForSystem["a" /* InstanceForSystem */].allDownloads[fs_id]);
  }
}
// CONCATENATED MODULE: ./src/style.ts
var initStyle = function initStyle() {
  document.body.insertAdjacentHTML('beforeend', "\n    <style>\n@import url(https://fonts.googleapis.com/css?family=Noto+Sans);\nbody {\n  padding: 30px 0;\n  background-color: #2f3439;\n  font-family: \"Noto Sans\", sans-serif;\n}\n\n.wrap {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n/* -------------------------------------\n * Bar container\n * ------------------------------------- */\n.progress-radial {\n  float: left;\n  position: relative;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 2px solid #2f3439;\n  background-color: tomato;\n  transition: all 1s ease-out;\n  cursor: pointer;\n}\n.progress-radial:hover {\n  background: #2e6da4;\n}\n\n/* -------------------------------------\n * Optional centered circle w/text\n * ------------------------------------- */\n.progress-radial .overlay {\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  background-color: #fffde8;\n  border-radius: 50%;\n  margin-left: 10px;\n  margin-top: 10px;\n  text-align: center;\n  line-height: 2rem;\n  font-size: 12px;\n}\n\n/* -------------------------------------\n * Mixin for progress-% class\n * ------------------------------------- */\n.progress-0 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(90deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-1 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(93.6deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-2 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(97.2deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-3 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(100.8deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-4 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(104.4deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-5 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(108deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-6 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(111.6deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-7 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(115.2deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-8 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(118.8deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-9 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(122.4deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-10 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(126deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-11 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(129.6deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-12 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(133.2deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-13 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(136.8deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-14 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(140.4deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-15 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(144deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-16 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(147.6deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-17 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(151.2deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-18 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(154.8deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-19 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(158.4deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-20 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(162deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-21 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(165.6deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-22 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(169.2deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-23 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(172.8deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-24 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(176.4deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-25 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(180deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-26 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(183.6deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-27 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(187.2deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-28 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(190.8deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-29 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(194.4deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-30 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(198deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-31 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(201.6deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-32 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(205.2deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-33 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(208.8deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-34 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(212.4deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-35 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(216deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-36 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(219.6deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-37 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(223.2deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-38 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(226.8deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-39 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(230.4deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-40 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(234deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-41 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(237.6deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-42 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(241.2deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-43 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(244.8deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-44 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(248.4deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-45 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(252deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-46 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(255.6deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-47 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(259.2deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-48 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(262.8deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-49 {\n  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(266.4deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-50 {\n  background-image: linear-gradient(-90deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-51 {\n  background-image: linear-gradient(-86.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-52 {\n  background-image: linear-gradient(-82.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-53 {\n  background-image: linear-gradient(-79.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-54 {\n  background-image: linear-gradient(-75.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-55 {\n  background-image: linear-gradient(-72deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-56 {\n  background-image: linear-gradient(-68.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-57 {\n  background-image: linear-gradient(-64.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-58 {\n  background-image: linear-gradient(-61.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-59 {\n  background-image: linear-gradient(-57.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-60 {\n  background-image: linear-gradient(-54deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-61 {\n  background-image: linear-gradient(-50.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-62 {\n  background-image: linear-gradient(-46.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-63 {\n  background-image: linear-gradient(-43.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-64 {\n  background-image: linear-gradient(-39.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-65 {\n  background-image: linear-gradient(-36deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-66 {\n  background-image: linear-gradient(-32.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-67 {\n  background-image: linear-gradient(-28.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-68 {\n  background-image: linear-gradient(-25.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-69 {\n  background-image: linear-gradient(-21.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-70 {\n  background-image: linear-gradient(-18deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-71 {\n  background-image: linear-gradient(-14.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-72 {\n  background-image: linear-gradient(-10.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-73 {\n  background-image: linear-gradient(-7.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-74 {\n  background-image: linear-gradient(-3.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-75 {\n  background-image: linear-gradient(0deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-76 {\n  background-image: linear-gradient(3.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-77 {\n  background-image: linear-gradient(7.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-78 {\n  background-image: linear-gradient(10.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-79 {\n  background-image: linear-gradient(14.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-80 {\n  background-image: linear-gradient(18deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-81 {\n  background-image: linear-gradient(21.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-82 {\n  background-image: linear-gradient(25.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-83 {\n  background-image: linear-gradient(28.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-84 {\n  background-image: linear-gradient(32.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-85 {\n  background-image: linear-gradient(36deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-86 {\n  background-image: linear-gradient(39.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-87 {\n  background-image: linear-gradient(43.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-88 {\n  background-image: linear-gradient(46.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-89 {\n  background-image: linear-gradient(50.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-90 {\n  background-image: linear-gradient(54deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-91 {\n  background-image: linear-gradient(57.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-92 {\n  background-image: linear-gradient(61.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-93 {\n  background-image: linear-gradient(64.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-94 {\n  background-image: linear-gradient(68.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-95 {\n  background-image: linear-gradient(72deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-96 {\n  background-image: linear-gradient(75.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-97 {\n  background-image: linear-gradient(79.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-98 {\n  background-image: linear-gradient(82.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-99 {\n  background-image: linear-gradient(86.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-100 {\n  background-image: linear-gradient(90deg, #ff6347 52%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n\ntable {\n  border: 1px solid #ccc;\n  border-collapse: collapse;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  table-layout: fixed;\n}\n\ntable caption {\n  font-size: 1.5em;\n  margin: .5em 0 .75em;\n}\n\ntable tr {\n  background-color: #f8f8f8;\n  border: 1px solid #ddd;\n  padding: .35em;\n}\n\ntable th,\ntable td {\n  padding: .625em;\n  text-align: center;\n}\n\ntable th {\n  font-size: .85em;\n  letter-spacing: .1em;\n  text-transform: uppercase;\n}\n\n@media screen and (max-width: 600px) {\n  table {\n    border: 0;\n  }\n\n  table caption {\n    font-size: 1.3em;\n  }\n\n  table thead {\n    border: none;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n  }\n\n  table tr {\n    border-bottom: 3px solid #ddd;\n    display: block;\n    margin-bottom: .625em;\n  }\n\n  table td {\n    border-bottom: 1px solid #ddd;\n    display: block;\n    font-size: .8em;\n    text-align: right;\n  }\n\n  table td::before {\n    /*\n    * aria-label has no advantage, it won't be read inside a table\n    content: attr(aria-label);\n    */\n    content: attr(data-label);\n    float: left;\n    font-weight: bold;\n    text-transform: uppercase;\n  }\n\n  table td:last-child {\n    border-bottom: 0;\n  }\n}\n/* modal */\n.modal-wrapper {\n  z-index: 999;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity .3s, visibility .3s;\n}\n\n.modal-wrapper.open {\n  opacity: 1;\n  visibility: visible;\n  transition: opacity .4s, visibility .4s;\n}\n\n.modal-wrapper::after {\n  display: inline-block;\n  height: 100%;\n  margin-left: -.05em;\n  vertical-align: middle;\n  content: \"\"\n}\n\n.modal-wrapper .modal-window {\n  box-sizing: border-box;\n  display: inline-block;\n  z-index: 20;\n  position: relative;\n  width: 60vw;\n  /*padding: 30px 30px 15px;*/\n  border-radius: 2px;\n  background: #fff;\n  box-shadow: 0 0 30px rgba(0, 0, 0, .6);\n  vertical-align: middle;\n  align-self: center;\n}\n\n.modal-wrapper .modal-window .modal-content {\n  max-height: 60vh;\n  overflow-y: auto;\n}\n\n.modal-overlay {\n  z-index: 10;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, .8)\n}\n\n.modal-wrapper .modal-close {\n  z-index: 20;\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 35px;\n  color: #95979c!important;\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 35px;\n  text-align: center;\n  text-decoration: none;\n  text-indent: 0;\n  cursor: pointer;\n}\n\n.modal-wrapper .modal-close:hover {\n  color: #2b2e38!important\n}\npre.code {\n  text-align: left;\n  background: rgb(250, 250, 250);\n  border-radius: 3px;\n  border: 0px;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 5px inset;\n  color: #4d4d4d;\n  font-family: Monaco, Consolas, \"Courier New\", Courier, monospace, sans-serif;\n  font-size: 13px;\n  outline: 0px;\n  overflow: auto;\n  max-height: 55vh;\n  padding: 10px;\n  vertical-align: baseline;\n  line-height: normal;\n}\n\n#copy-code {\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n  box-sizing: border-box;\n  margin: 0;\n  font: inherit;\n  font-family: inherit;\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  touch-action: manipulation;\n  user-select: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  color: #fff;\n  background-color: #337ab7;\n  text-shadow: 0 -1px 0 rgba(0,0,0,.2);\n  box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075);\n  background-image: linear-gradient(to bottom,#337ab7 0,#265a88 100%);\n  background-repeat: repeat-x;\n  border-color: #245580;\n  -webkit-appearance: button;\n  cursor: pointer;\n}\n#copy-code:focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n#copy-code:active {\n  background-color: #265a88;\n  border-color: #245580;\n}\n#copy-code:hover {\n  background-color: #265a88;\n  background-position: 0 -15px;\n}\n#copy-code.disable {\n  background-repeat: repeat-x;\n  -webkit-appearance: button;\n  pointer-events: none;\n  cursor: not-allowed;\n  box-shadow: none;\n  opacity: .65;\n  border-color: #2e6da4;\n  background-color: #265a88;\n  background-image: none;\n}\n\n\n#floating-button{\n  width: 55px;\n  height: 55px;\n  border-radius: 50%;\n  background: #db4437;\n  position: fixed;\n  bottom: 55px;\n  right: 32px;\n  cursor: pointer;\n  box-shadow: 0px 2px 5px #666;\n}\n\n.plus{\n  color: white;\n  position: absolute;\n  top: 0;\n  display: block;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  text-align: center;\n  padding: 0;\n  margin: 0;\n  line-height: 55px;\n  font-size: 38px;\n  font-family: 'Roboto';\n  font-weight: 300;\n  animation: plus-out 0.3s;\n  transition: all 0.3s;\n}\n\n#container-floating{\n  position: fixed;\n  width: 70px;\n  height: 70px;\n  bottom: 30px;\n  right: 30px;\n  z-index: 50;\n}\n\n#container-floating:hover{\n  height: 400px;\n  width: 90px;\n  padding: 30px;\n}\n\n#container-floating:hover .plus{\n  animation: plus-in 0.15s linear;\n  animation-fill-mode: forwards;\n}\n\n.edit{\n  position: absolute;\n  top: 0;\n  display: block;\n  bottom: 0;\n  left: 0;\n  display: block;\n  right: 0;\n  padding: 0;\n  opacity: 0;\n  margin: auto;\n  line-height: 65px;\n  transform: rotateZ(-70deg);\n  transition: all 0.3s;\n  animation: edit-out 0.3s;\n}\n\n#container-floating:hover .edit{\n  animation: edit-in 0.2s;\n  animation-delay: 0.1s;\n  animation-fill-mode: forwards;\n}\n\n@keyframes edit-in{\n  from {opacity: 0; transform: rotateZ(-70deg);}\n  to {opacity: 1; transform: rotateZ(0deg);}\n}\n\n@keyframes edit-out{\n  from {opacity: 1; transform: rotateZ(0deg);}\n  to {opacity: 0; transform: rotateZ(-70deg);}\n}\n\n@keyframes plus-in{\n  from {opacity: 1; transform: rotateZ(0deg);}\n  to {opacity: 0; transform: rotateZ(180deg);}\n}\n\n@keyframes plus-out{\n  from {opacity: 0; transform: rotateZ(180deg);}\n  to {opacity: 1; transform: rotateZ(0deg);}\n}\n.nds{\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  position: fixed;\n  z-index: 300;\n  transform:  scale(0);\n  cursor: pointer;\n}\n\n.nd1{\n  background: #d3a411;\n  right: 40px;\n  bottom: 120px;\n  animation-delay: 0.2s;\n  animation: bounce-out-nds 0.3s linear;\n  animation-fill-mode:  forwards;\n}\n@keyframes bounce-nds{\n  from {opacity: 0;}\n  to {opacity: 1; transform: scale(1);}\n}\n\n@keyframes bounce-out-nds{\n  from {opacity: 1; transform: scale(1);}\n  to {opacity: 0; transform: scale(0);}\n}\n\n#container-floating:hover .nds{\n\n  animation: bounce-nds 0.1s linear;\n  animation-fill-mode:  forwards;\n}\n.reminder{\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  line-height: 40px;\n}\n\ntd > svg {\n  cursor: pointer;\n}\ntd > svg:hover {\n  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);\n  background-color: rgba(255,255,255,0.56);\n}\n    </style>\n  ");
};
// CONCATENATED MODULE: ./src/index.ts
/* eslint-disable @typescript-eslint/no-use-before-define,@typescript-eslint/camelcase */







window.onunload = function () {
  gmInterface["a" /* GM */].setValue(types["b" /* ValueTypes */].items, InstaceForSystem["a" /* InstanceForSystem */].allDownloads);
  InstaceForSystem["a" /* InstanceForSystem */].stopAll();
};

(function () {
  initStyle();
  renderElement();
  Object.values(InstaceForSystem["a" /* InstanceForSystem */].initState().allDownloads).forEach(function (arr) {
    appendRow(arr);

    if (arr.status === types["a" /* StatusTypes */].downloading && InstaceForSystem["a" /* InstanceForSystem */].downloadable) {
      downloadItem(arr);
    }
  }); // update operation dom

  gmInterface["a" /* GM */].addValueChangeListener(types["b" /* ValueTypes */].items, function (name, oldItems, newItems) {
    Object.values(newItems).forEach(function (item) {
      renderOperationElement(item);
    });
  });
  document.getElementById('floating-button').addEventListener('click', function () {
    openModal();
    startInstance();
  });
})();

function openModal() {
  var modalWrapper = document.querySelector('.modal-wrapper');
  modalWrapper.className = modalWrapper.className + ' open';
}

function closeModal() {
  var modalWrapper = document.querySelector('.modal-wrapper');
  modalWrapper.className = 'modal-wrapper';
}

function appendRow(arr) {
  document.getElementById('popup-tbody').insertAdjacentHTML('beforeend', "\n        <tr id=\"row-".concat(arr.fs_id, "\">\n          <td data-label=\"filename\">").concat(arr.server_filename, "</td>\n          <td data-label=\"download\">\n            <div class=\"wrap\">\n              <div class=\"progress-radial progress-").concat(arr.status === types["a" /* StatusTypes */].completed ? '100' : '0', "\">\n                <div data-label=\"").concat(arr.fs_id, "\"\n                    class=\"overlay\">").concat(arr.status === types["a" /* StatusTypes */].completed ? '100' : '0', "%</div>\n              </div>\n            </div>\n          </td>\n          <td data-label=\"url\">").concat(formatByte(arr.size), "</td>\n          <td data-label=\"speed\"></td>\n          <td data-label=\"operation\"></td>\n        </tr>\n  "));
  renderOperationElement(arr);
}

function renderOperationElement(arr) {
  var target = document.getElementById("row-".concat(arr.fs_id)).querySelector('td[data-label="operation"]');

  if (target) {
    target.innerHTML = '';
    target.insertAdjacentHTML('beforeend', "\n            <svg\n                id=\"start-item-".concat(arr.fs_id, "\"\n                class=\"").concat([types["a" /* StatusTypes */].downloading, types["a" /* StatusTypes */].inQueued].includes(arr.status) ? 'disabled' : '', "\"\n                xmlns=\"http://www.w3.org/2000/svg\"\n                height=\"24\"\n                viewBox=\"0 0 24 24\"\n                width=\"24\">\n                <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n                <path d=\"M8 5v14l11-7z\"/>\n            </svg>\n            <svg\n                id=\"stop-item-").concat(arr.fs_id, "\"\n                class=\"").concat([types["a" /* StatusTypes */].downloading, types["a" /* StatusTypes */].inQueued].includes(arr.status) ? '' : 'disabled', "\"\n                xmlns=\"http://www.w3.org/2000/svg\"\n                height=\"24\"\n                viewBox=\"0 0 24 24\"\n                width=\"24\">\n                    <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n                    <path d=\"M6 6h12v12H6z\"/>\n            </svg>\n            <svg\n                id=\"delete-item-").concat(arr.fs_id, "\"\n                class=\"delete-item\"\n                style=\"position: absolute; right: 5px\"\n                xmlns=\"http://www.w3.org/2000/svg\"\n                height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n                    <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n                    <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/>\n            </svg>\n    "));
    var _allDownloads = InstaceForSystem["a" /* InstanceForSystem */].allDownloads,
        downloadingItems = InstaceForSystem["a" /* InstanceForSystem */].downloadingItems,
        completedItems = InstaceForSystem["a" /* InstanceForSystem */].completedItems,
        stoppedItems = InstaceForSystem["a" /* InstanceForSystem */].stoppedItems;
    document.getElementById("start-item-".concat(arr.fs_id)).addEventListener('click', function () {
      downloadItem(arr);
    });
    document.getElementById("stop-item-".concat(arr.fs_id)).addEventListener('click', function () {
      var targetItem = InstaceForSystem["a" /* InstanceForSystem */].allDownloads[arr.fs_id];

      if (targetItem) {
        if (arr.status === types["a" /* StatusTypes */].downloading) {
          if (!confirm('停止后将需要重新下载， 确认吗？')) {
            return false;
          }
        }

        arr.status = types["a" /* StatusTypes */].stopped;
        targetItem.request && targetItem.request.abort && targetItem.request.abort();
        clearInterval(targetItem.progress_loader_id);
        stoppedItems[arr.fs_id] = arr;
        delete downloadingItems[arr.fs_id];
        renderOperationElement(arr);
        addNextDownloadRequest();
        return false;
      }
    });
    document.getElementById("delete-item-".concat(arr.fs_id)).addEventListener('click', function () {
      arr.request && arr.request.abort && arr.request.abort();
      delete _allDownloads[arr.fs_id];
      delete downloadingItems[arr.fs_id];
      delete completedItems[arr.fs_id];
      delete stoppedItems[arr.fs_id];
      document.getElementById('popup-tbody').removeChild(document.getElementById("row-".concat(arr.fs_id)));
      addNextDownloadRequest();
    });
  }
}

function renderElement() {
  document.body.insertAdjacentHTML('beforeend', "\n        <div class=\"modal-wrapper\">\n            <div class=\"modal-overlay\"></div>\n            <div class=\"modal-window\">\n                <div class=\"modal-content\">\n<!--                    <button id=\"copy-code\" class=\"disable\">\u590D\u5236\u5230\u526A\u5207\u677F</button>-->\n              <table>\n                <thead>\n                  <tr>\n                    <th scope=\"col\">\u6587\u4EF6</th>\n                    <th scope=\"col\">\u8FDB\u5EA6</th>\n                    <th scope=\"col\">\u5927\u5C0F</th>\n                    <th scope=\"col\">\u901F\u5EA6</th>\n                    <th scope=\"col\">\u64CD\u4F5C</th>\n                  </tr>\n                </thead>\n                <tbody id=\"popup-tbody\"></tbody>\n              </table>\n                </div>\n<!--                <span class=\"modal-close\">\xD7</a>-->\n            </div>\n        </div>\n        <div id=\"container-floating\">\n          <div class=\"nd1 nds\" data-toggle=\"tooltip\" data-placement=\"left\" onclick=\"alert('\u6B64\u529F\u80FD\u6B63\u5728\u5F00\u53D1\u4E2D...')\">\n              <img class=\"reminder\" src=\"https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/bt_compose2_1x.png\">\n          </div>\n          <div id=\"floating-button\" data-toggle=\"tooltip\" data-placement=\"left\" data-original-title=\"Create\">\n            <p class=\"plus\">+</p>\n            <img class=\"edit\" src=\"//ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/ic_reminders_speeddial_white_24dp.png\">\n          </div>\n        </div>\n    ");
  document.querySelectorAll('.modal-overlay,.modal-close').forEach(function (e) {
    return e.addEventListener('click', closeModal);
  });
  document.querySelector('#floating-button').addEventListener('click', openModal); // document.getElementById('copy-code').addEventListener('click', copyCode)
}

function startInstance() {
  var selectedList = InstaceForSystem["a" /* InstanceForSystem */].selectedList,
      allDownloads = InstaceForSystem["a" /* InstanceForSystem */].allDownloads,
      autoStart = InstaceForSystem["a" /* InstanceForSystem */].autoStart;
  var requestList = [];
  selectedList.forEach(function (arr) {
    if (typeof allDownloads[arr.fs_id] === 'undefined') {
      arr.status = types["a" /* StatusTypes */].inQueued;
      allDownloads[arr.fs_id] = arr;
      appendRow(arr);
      requestList.push(getDownloadUrl(arr));
    }
  });
  Promise.all(requestList).then(function (arrs) {
    arrs.forEach(function (arr) {
      if (autoStart) {
        downloadItem(arr);
      }
    });
  });
}

/***/ })
/******/ ]);
