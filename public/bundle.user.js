
// ==UserScript==
// @namespace https://github.com/dotennin/baidu-pan-downloader
// @name 百度网盘下载管理器
// @description A download manager for Baidu Yun
// @version 1.3.3
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueTypes = exports.StatusTypes = void 0;
var StatusTypes;
(function (StatusTypes) {
    StatusTypes["downloading"] = "DOWNLOADING";
    StatusTypes["stopped"] = "STOPPED";
    StatusTypes["completed"] = "COMPLETED";
    StatusTypes["inQueued"] = "IN_QUEUED";
    StatusTypes["error"] = "ERROR";
})(StatusTypes = exports.StatusTypes || (exports.StatusTypes = {}));
var ValueTypes;
(function (ValueTypes) {
    ValueTypes["items"] = "ITEM_LIST";
})(ValueTypes = exports.ValueTypes || (exports.ValueTypes = {}));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GM = void 0;
/**
 * This section describes how the Tampermonkey API can be used
 * Application Programming Interface
 * @link https://www.tampermonkey.net/documentation.php
 */
exports.GM = {
    /**
     * Adds the given style to the document and returns the injected style element.
     * @param css
     */
    addStyle: (css) => {
        // @ts-ignore
        GM_addStyle(css);
    },
    /**
     * Deletes 'name' from storage.
     * @param name
     * @constructor
     */
    deleteValue: (name) => {
        // @ts-ignore
        GM_deleteValue(name);
    },
    /**
     * List all names of the storage.
     */
    listValues: () => {
        eval(`GM_listValues()`);
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
    addValueChangeListener: (name, callback) => {
        // @ts-ignore
        return GM_addValueChangeListener(name, callback);
    },
    /**
     * Removes a change listener by its ID.
     * @param listenerId
     */
    removeValueChangeListener: (listenerId) => {
        // @ts-ignore
        GM_removeValueChangeListener(listenerId);
    },
    /**
     * Set the value of 'name' to the storage.
     * @param name
     * @param value
     * @constructor
     */
    setValue: (name, value) => {
        // @ts-ignore
        GM_setValue(name, value);
    },
    /**
     * Get the value of 'name' from storage.
     * @param name
     * @param defaultValue
     * @constructor
     */
    getValue: (name, defaultValue) => {
        // @ts-ignore
        return GM_getValue(name, defaultValue);
    },
    /**
     * Log a message to the console.
     * @param message
     */
    log: (message) => {
        // @ts-ignore
        GM_log(message);
    },
    /**
     * Get the content of a predefined @resource tag at the script header.
     * @param name
     */
    getResourceText: (name) => {
        // @ts-ignore
        return GM_getResourceText(name);
    },
    /**
     * Get the base64 encoded URI of a predefined @resource tag at the script header.
     * @param name
     */
    getResourceURL: (name) => {
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
    registerMenuCommand: (name, callback, accessKey) => {
        // @ts-ignore
        return GM_registerMenuCommand(name, callback, accessKey);
    },
    /**
     * Unregister a menu command that was previously registered by GM_registerMenuCommand with the given menu command ID.
     * @param menuCmdId
     */
    unregisterMenuCommand: (menuCmdId) => {
        // @ts-ignore
        GM_unregisterMenuCommand(menuCmdId);
    },
    /**
     * Open a new tab with this url. The options object can have the following properties:
     * @param url
     * @param loadInBackground
     */
    openInTab: (url, loadInBackground) => {
        // @ts-ignore
        GM_openInTab(url, loadInBackground);
    },
    /**
     * Make an xmlHttpRequest.
     * Property of details:
     * @param details
     */
    xmlHttpRequest: (details) => {
        // @ts-ignore
        return GM_xmlhttpRequest(details);
    },
    /**
     * Downloads a given URL to the local disk.
     * @param urlOrdetails
     * @param name
     */
    download: (urlOrdetails, name) => {
        if (typeof urlOrdetails === 'string') {
            // @ts-ignore
            return GM_download(urlOrdetails, name);
        }
        // @ts-ignore
        return GM_download(urlOrdetails);
    },
    /**
     * Get a object that is persistent as long as this tab is open.
     * @param callback
     */
    getTab: (callback) => {
        // @ts-ignore
        GM_getTab(callback);
    },
    /**
     * Save the tab object to reopen it after a page unload.
     * @param tab
     */
    saveTab: (tab) => {
        // @ts-ignore
        GM_saveTab(tab);
    },
    /**
     * Get all tab objects as a hash to communicate with other script instances.
     * @param callback
     */
    getTabs: (callback) => {
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
    notification: (textOrDetails, titleOrOndone, image, onclick) => {
        if (typeof textOrDetails === 'string') {
            // @ts-ignore
            GM_notification(textOrDetails, titleOrOndone, image, onclick);
        }
        else {
            // @ts-ignore
            GM_notification(textOrDetails, titleOrOndone);
        }
    },
    /**
     * Copies data into the clipboard. The parameter 'info' can be an object like "{ type: 'text', mimetype: 'text/plain'}" or just a string expressing the type ("text" or "html").
     * @param data
     * @param info
     */
    setClipboard: (data, info = {
        type: 'text',
        mimetype: 'text/plain',
    }) => {
        // @ts-ignore
        GM_setClipboard(data, info);
    },
    /**
     * Get some info about the script and TM. The object might look like this:
     */
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/camelcase
    info: GM_info,
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.renderOperationElement = void 0;
/* eslint-disable @typescript-eslint/no-use-before-define,@typescript-eslint/camelcase */
const InstaceForSystem_1 = __webpack_require__(3);
const types_1 = __webpack_require__(0);
const gmInterface_1 = __webpack_require__(1);
const apis_1 = __webpack_require__(5);
const utils_1 = __webpack_require__(4);
const style_1 = __webpack_require__(6);
window.onunload = () => {
    gmInterface_1.GM.setValue(types_1.ValueTypes.items, InstaceForSystem_1.InstanceForSystem.allDownloads);
    InstaceForSystem_1.InstanceForSystem.stopAll();
};
window.onbeforeunload = (e) => {
    if (Object.keys(InstaceForSystem_1.InstanceForSystem.downloadingItems).length > 0) {
        e.preventDefault();
        e.returnValue = '有未完成的下载任务， 确认关闭吗?';
    }
};
(function () {
    style_1.initStyle();
    renderElement();
    Object.values(InstaceForSystem_1.InstanceForSystem.initState().allDownloads).forEach((arr) => {
        appendRow(arr);
        if (arr.status === types_1.StatusTypes.downloading && InstaceForSystem_1.InstanceForSystem.downloadable) {
            apis_1.downloadItem(arr);
        }
    });
    // update operation dom
    gmInterface_1.GM.addValueChangeListener(types_1.ValueTypes.items, (name, oldItems, newItems) => {
        Object.values(newItems).forEach((item) => {
            renderOperationElement(item);
        });
    });
    document.getElementById('floating-button').addEventListener('click', () => {
        openModal();
        startInstance();
    });
})();
function openModal() {
    const modalWrapper = document.querySelector('.modal-wrapper');
    modalWrapper.className = modalWrapper.className + ' open';
}
function closeModal() {
    const modalWrapper = document.querySelector('.modal-wrapper');
    modalWrapper.className = 'modal-wrapper';
}
function appendRow(arr) {
    document.getElementById('popup-tbody').insertAdjacentHTML('beforeend', `
        <tr id="row-${arr.fs_id}">
          <td data-label="filename">${arr.server_filename}</td>
          <td data-label="download">
            <div class="wrap">
              <div class="progress-radial progress-${arr.status === types_1.StatusTypes.completed ? '100' : '0'}">
                <div data-label="${arr.fs_id}"
                    class="overlay">${arr.status === types_1.StatusTypes.completed ? '100' : '0'}%</div>
              </div>
            </div>
          </td>
          <td data-label="url">${utils_1.formatByte(arr.size)}</td>
          <td data-label="speed"></td>
          <td data-label="operation"></td>
        </tr>
  `);
    renderOperationElement(arr);
}
function renderOperationElement(arr) {
    const target = document.getElementById(`row-${arr.fs_id}`).querySelector('td[data-label="operation"]');
    if (target) {
        target.innerHTML = '';
        target.insertAdjacentHTML('beforeend', `
            <svg
                id="start-item-${arr.fs_id}"
                class="${[types_1.StatusTypes.downloading, types_1.StatusTypes.inQueued].includes(arr.status) ? 'disabled' : ''}"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M8 5v14l11-7z"/>
            </svg>
            <svg
                id="stop-item-${arr.fs_id}"
                class="${[types_1.StatusTypes.downloading, types_1.StatusTypes.inQueued].includes(arr.status) ? '' : 'disabled'}"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M6 6h12v12H6z"/>
            </svg>
            <svg
                id="delete-item-${arr.fs_id}"
                class="delete-item"
                style="position: absolute; right: 5px"
                xmlns="http://www.w3.org/2000/svg"
                height="24" viewBox="0 0 24 24" width="24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
    `);
        const { allDownloads, downloadingItems, completedItems, stoppedItems } = InstaceForSystem_1.InstanceForSystem;
        document.getElementById(`start-item-${arr.fs_id}`).addEventListener('click', () => {
            apis_1.downloadItem(arr);
        });
        document.getElementById(`stop-item-${arr.fs_id}`).addEventListener('click', () => {
            const targetItem = InstaceForSystem_1.InstanceForSystem.allDownloads[arr.fs_id];
            if (targetItem) {
                if (arr.status === types_1.StatusTypes.downloading) {
                    if (!confirm('停止后将需要重新下载， 确认吗？')) {
                        return false;
                    }
                }
                arr.status = types_1.StatusTypes.stopped;
                targetItem.request && targetItem.request.abort && targetItem.request.abort();
                clearInterval(targetItem.progress_loader_id);
                stoppedItems[arr.fs_id] = arr;
                delete downloadingItems[arr.fs_id];
                renderOperationElement(arr);
                apis_1.addNextDownloadRequest();
                return false;
            }
        });
        document.getElementById(`delete-item-${arr.fs_id}`).addEventListener('click', () => {
            arr.request && arr.request.abort && arr.request.abort();
            delete allDownloads[arr.fs_id];
            delete downloadingItems[arr.fs_id];
            delete completedItems[arr.fs_id];
            delete stoppedItems[arr.fs_id];
            document
                .getElementById('popup-tbody')
                .removeChild(document.getElementById(`row-${arr.fs_id}`));
            apis_1.addNextDownloadRequest();
        });
    }
}
exports.renderOperationElement = renderOperationElement;
function renderElement() {
    document.body.insertAdjacentHTML('beforeend', `
        <div class="modal-wrapper">
            <div class="modal-overlay"></div>
            <div class="modal-window">
                <div class="modal-content">
                  <table>
                    <thead>
                      <tr>
                        <th scope="col">文件</th>
                        <th scope="col">进度</th>
                        <th scope="col">大小</th>
                        <th scope="col">速度</th>
                        <th scope="col">操作</th>
                      </tr>
                    </thead>
                    <tbody id="popup-tbody"></tbody>
                  </table>
                </div>
<!--                <span class="modal-close">×</a>-->
            </div>
        </div>
        <div id="container-floating">
          <div class="nd1 nds" data-toggle="tooltip" data-placement="left" onclick="alert('此功能正在开发中...')">
              <img class="reminder" src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/bt_compose2_1x.png">
          </div>
          <div id="floating-button" data-toggle="tooltip" data-placement="left" data-original-title="Create">
            <p class="plus">+</p>
            <img class="edit" src="//ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/ic_reminders_speeddial_white_24dp.png">
          </div>
        </div>
    `);
    document.querySelectorAll('.modal-overlay,.modal-close').forEach((e) => e.addEventListener('click', closeModal));
    document.querySelector('#floating-button').addEventListener('click', openModal);
}
function startInstance() {
    const { selectedList, allDownloads, autoStart } = InstaceForSystem_1.InstanceForSystem;
    const requestList = [];
    selectedList.forEach((arr) => {
        if (typeof allDownloads[arr.fs_id] === 'undefined') {
            arr.status = types_1.StatusTypes.inQueued;
            allDownloads[arr.fs_id] = arr;
            appendRow(arr);
            requestList.push(apis_1.getDownloadUrl(arr));
        }
    });
    Promise.all(requestList).then((arrs) => {
        arrs.forEach((arr) => {
            if (autoStart) {
                apis_1.downloadItem(arr);
            }
        });
    });
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InstanceForSystem = void 0;
/* eslint-disable @typescript-eslint/no-object-literal-type-assertion,no-undef */
const types_1 = __webpack_require__(0);
const gmInterface_1 = __webpack_require__(1);
const InstanceForSystem = {
    list: eval(`require('system-core:context/context.js')`).instanceForSystem.list,
    autoStart: true,
    maxDownloadCount: 1,
    downloadingItems: {},
    stoppedItems: {},
    completedItems: {},
    allDownloads: {},
    initState: function () {
        const objectFromValue = gmInterface_1.GM.getValue(types_1.ValueTypes.items, {});
        gmInterface_1.GM.deleteValue(types_1.ValueTypes.items);
        this.allDownloads = objectFromValue;
        Object.values(objectFromValue).forEach((item) => {
            if (item.status === types_1.StatusTypes.completed) {
                this.completedItems[item.fs_id] = item;
            }
            if (item.status === types_1.StatusTypes.stopped) {
                this.stoppedItems[item.fs_id] = item;
            }
        });
        return this;
    },
    get selectedList() {
        const selected = this.list.getSelected();
        return selected.filter((arr) => {
            return arr.isdir !== 1;
        });
    },
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    get itemsFromQueue() {
        const queue = {};
        const filterKeys = Object.keys(Object.assign({}, this.downloadingItems, this.completedItems, this.stoppedItems));
        Object.keys(this.allDownloads).forEach((fsId) => {
            if (!filterKeys.includes(fsId)) {
                queue[fsId] = this.allDownloads[fsId];
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
    stopAll: function () {
        Object.values(this.downloadingItems).forEach((item) => {
            item.request && item.request.abort && item.request.abort();
        });
    },
};
exports.InstanceForSystem = InstanceForSystem;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.formatByte = void 0;
exports.formatByte = (byte) => {
    if (byte <= 1000) {
        return `${byte} B`;
    }
    const KiByte = Math.round(byte / 1024);
    return KiByte <= 1000 ? `${KiByte} KB` : `${Math.round(KiByte / 10.24) / 100} MB`;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.addNextDownloadRequest = exports.downloadItem = exports.getDownloadUrl = void 0;
/* eslint-disable @typescript-eslint/camelcase,@typescript-eslint/no-use-before-define */
const types_1 = __webpack_require__(0);
const gmInterface_1 = __webpack_require__(1);
const InstaceForSystem_1 = __webpack_require__(3);
const utils_1 = __webpack_require__(4);
const _1 = __webpack_require__(2);
function getDownloadUrl(arr) {
    return new Promise((resolve, reject) => {
        gmInterface_1.GM.xmlHttpRequest({
            url: 'http://pcs.baidu.com/rest/2.0/pcs/file?app_id=778750&ver=2.0&method=locatedownload&path=' +
                encodeURIComponent(arr.path),
            method: 'GET',
            responseType: 'json',
            headers: {
                'User-Agent': 'netdisk;P2SP;2.2.60.26',
            },
            onload: (r) => {
                if (r.response.hasOwnProperty('client_ip')) {
                    const url = r.response.urls[0].url + '&filename=' + encodeURIComponent(arr.server_filename);
                    arr.url = url;
                    return resolve(arr);
                }
                else {
                    // Todo return error message
                    return reject(r);
                }
            },
        });
    });
}
exports.getDownloadUrl = getDownloadUrl;
async function downloadItem(arr) {
    // Remove Item if target still in stop cluster
    if (InstaceForSystem_1.InstanceForSystem.stoppedItems[arr.fs_id]) {
        delete InstaceForSystem_1.InstanceForSystem.stoppedItems[arr.fs_id];
    }
    if (!InstaceForSystem_1.InstanceForSystem.downloadable) {
        arr.status = types_1.StatusTypes.inQueued;
        _1.renderOperationElement(arr);
        return;
    }
    if (arr.status === types_1.StatusTypes.error) {
        // re-getting url if it invalided
        await getDownloadUrl(arr);
    }
    arr.status = types_1.StatusTypes.downloading;
    _1.renderOperationElement(arr);
    InstaceForSystem_1.InstanceForSystem.downloadingItems[arr.fs_id] = arr;
    const { url, server_filename } = arr;
    let loaded = 0;
    let currentEvent = undefined;
    const percentOverlay = document.querySelector(`div[data-label="${arr.fs_id}"]`);
    const progressRadial = percentOverlay.parentElement;
    const speedOverlay = percentOverlay.closest('tr').querySelector('td[data-label="speed"]');
    arr.request = gmInterface_1.GM.download({
        url,
        name: server_filename,
        saveAs: true,
        headers: {
            Host: 'qdall01.baidupcs.com',
            Accept: '*/*',
            'User-Agent': 'netdisk;P2SP;2.2.60.26',
            'Accept-Encoding': 'identity',
            'Accept-Language': 'ja-JP',
            'Accept-Charset': '*',
        },
        onprogress: (e) => {
            currentEvent = e;
            const percent = Math.round((currentEvent.loaded * 100) / currentEvent.total);
            progressRadial.className = `progress-radial progress-${percent}`;
            percentOverlay.innerText = `${percent}%`;
        },
        onload: () => {
            arr.progress_loader_id && clearInterval(arr.progress_loader_id);
            progressRadial.className = 'progress-radial progress-100';
            percentOverlay.innerText = '100%';
            speedOverlay.innerText = '';
            InstaceForSystem_1.InstanceForSystem.completedItems[arr.fs_id] = arr;
            delete InstaceForSystem_1.InstanceForSystem.downloadingItems[arr.fs_id];
            gmInterface_1.GM.notification({
                text: '下载完成',
                title: server_filename,
                highlight: true,
            });
            arr.status = types_1.StatusTypes.completed;
            _1.renderOperationElement(arr);
            addNextDownloadRequest();
        },
        onerror: () => {
            arr.progress_loader_id && clearInterval(arr.progress_loader_id);
            progressRadial.className = 'progress-radial progress-0';
            percentOverlay.innerHTML = `<span style="color: red">error</span>`;
            speedOverlay.innerText = '';
            InstaceForSystem_1.InstanceForSystem.stoppedItems[arr.fs_id] = arr;
            delete InstaceForSystem_1.InstanceForSystem.downloadingItems[arr.fs_id];
            arr.status = types_1.StatusTypes.error;
            _1.renderOperationElement(arr);
            addNextDownloadRequest();
        },
    });
    arr.progress_loader_id = window.setInterval(() => {
        if (currentEvent) {
            const speed = currentEvent.loaded - loaded;
            loaded = currentEvent.loaded;
            speedOverlay.innerText = `${utils_1.formatByte(speed)}/s`;
        }
    }, 1000);
}
exports.downloadItem = downloadItem;
function addNextDownloadRequest() {
    for (const fs_id in InstaceForSystem_1.InstanceForSystem.itemsFromQueue) {
        downloadItem(InstaceForSystem_1.InstanceForSystem.allDownloads[fs_id]);
    }
}
exports.addNextDownloadRequest = addNextDownloadRequest;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.initStyle = void 0;
exports.initStyle = () => {
    document.body.insertAdjacentHTML('beforeend', `
    <style>
@import url(https://fonts.googleapis.com/css?family=Noto+Sans);
body {
  padding: 30px 0;
  background-color: #2f3439;
  font-family: "Noto Sans", sans-serif;
}

.wrap {
  display: flex;
  justify-content: center;
  width: 100%;
}

/* -------------------------------------
 * Bar container
 * ------------------------------------- */
.progress-radial {
  float: left;
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #2f3439;
  background-color: tomato;
  transition: all 1s ease-out;
  cursor: pointer;
}
.progress-radial:hover {
  background: #2e6da4;
}

/* -------------------------------------
 * Optional centered circle w/text
 * ------------------------------------- */
.progress-radial .overlay {
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: #fffde8;
  border-radius: 50%;
  margin-left: 10px;
  margin-top: 10px;
  text-align: center;
  line-height: 2rem;
  font-size: 12px;
}

/* -------------------------------------
 * Mixin for progress-% class
 * ------------------------------------- */
.progress-0 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(90deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-1 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(93.6deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-2 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(97.2deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-3 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(100.8deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-4 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(104.4deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-5 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(108deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-6 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(111.6deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-7 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(115.2deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-8 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(118.8deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-9 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(122.4deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-10 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(126deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-11 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(129.6deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-12 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(133.2deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-13 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(136.8deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-14 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(140.4deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-15 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(144deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-16 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(147.6deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-17 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(151.2deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-18 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(154.8deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-19 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(158.4deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-20 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(162deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-21 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(165.6deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-22 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(169.2deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-23 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(172.8deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-24 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(176.4deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-25 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(180deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-26 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(183.6deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-27 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(187.2deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-28 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(190.8deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-29 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(194.4deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-30 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(198deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-31 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(201.6deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-32 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(205.2deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-33 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(208.8deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-34 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(212.4deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-35 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(216deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-36 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(219.6deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-37 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(223.2deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-38 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(226.8deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-39 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(230.4deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-40 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(234deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-41 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(237.6deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-42 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(241.2deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-43 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(244.8deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-44 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(248.4deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-45 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(252deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-46 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(255.6deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-47 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(259.2deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-48 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(262.8deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-49 {
  background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(266.4deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-50 {
  background-image: linear-gradient(-90deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-51 {
  background-image: linear-gradient(-86.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-52 {
  background-image: linear-gradient(-82.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-53 {
  background-image: linear-gradient(-79.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-54 {
  background-image: linear-gradient(-75.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-55 {
  background-image: linear-gradient(-72deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-56 {
  background-image: linear-gradient(-68.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-57 {
  background-image: linear-gradient(-64.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-58 {
  background-image: linear-gradient(-61.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-59 {
  background-image: linear-gradient(-57.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-60 {
  background-image: linear-gradient(-54deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-61 {
  background-image: linear-gradient(-50.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-62 {
  background-image: linear-gradient(-46.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-63 {
  background-image: linear-gradient(-43.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-64 {
  background-image: linear-gradient(-39.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-65 {
  background-image: linear-gradient(-36deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-66 {
  background-image: linear-gradient(-32.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-67 {
  background-image: linear-gradient(-28.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-68 {
  background-image: linear-gradient(-25.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-69 {
  background-image: linear-gradient(-21.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-70 {
  background-image: linear-gradient(-18deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-71 {
  background-image: linear-gradient(-14.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-72 {
  background-image: linear-gradient(-10.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-73 {
  background-image: linear-gradient(-7.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-74 {
  background-image: linear-gradient(-3.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-75 {
  background-image: linear-gradient(0deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-76 {
  background-image: linear-gradient(3.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-77 {
  background-image: linear-gradient(7.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-78 {
  background-image: linear-gradient(10.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-79 {
  background-image: linear-gradient(14.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-80 {
  background-image: linear-gradient(18deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-81 {
  background-image: linear-gradient(21.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-82 {
  background-image: linear-gradient(25.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-83 {
  background-image: linear-gradient(28.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-84 {
  background-image: linear-gradient(32.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-85 {
  background-image: linear-gradient(36deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-86 {
  background-image: linear-gradient(39.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-87 {
  background-image: linear-gradient(43.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-88 {
  background-image: linear-gradient(46.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-89 {
  background-image: linear-gradient(50.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-90 {
  background-image: linear-gradient(54deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-91 {
  background-image: linear-gradient(57.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-92 {
  background-image: linear-gradient(61.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-93 {
  background-image: linear-gradient(64.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-94 {
  background-image: linear-gradient(68.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-95 {
  background-image: linear-gradient(72deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-96 {
  background-image: linear-gradient(75.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-97 {
  background-image: linear-gradient(79.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-98 {
  background-image: linear-gradient(82.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-99 {
  background-image: linear-gradient(86.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}

.progress-100 {
  background-image: linear-gradient(90deg, #ff6347 52%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
}


table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table caption {
  font-size: 1.5em;
  margin: .5em 0 .75em;
}

table tr {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: .35em;
}

table th,
table td {
  padding: .625em;
  text-align: center;
}

table th {
  font-size: .85em;
  letter-spacing: .1em;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }

  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: .625em;
  }

  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: .8em;
    text-align: right;
  }

  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }

  table td:last-child {
    border-bottom: 0;
  }
}
/* modal */
.modal-wrapper {
  z-index: 999;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  display: flex;
  justify-content: center;

  opacity: 0;
  visibility: hidden;
  transition: opacity .3s, visibility .3s;
}

.modal-wrapper.open {
  opacity: 1;
  visibility: visible;
  transition: opacity .4s, visibility .4s;
}

.modal-wrapper::after {
  display: inline-block;
  height: 100%;
  margin-left: -.05em;
  vertical-align: middle;
  content: ""
}

.modal-wrapper .modal-window {
  box-sizing: border-box;
  display: inline-block;
  z-index: 20;
  position: relative;
  width: 60vw;
  /*padding: 30px 30px 15px;*/
  border-radius: 2px;
  background: #fff;
  box-shadow: 0 0 30px rgba(0, 0, 0, .6);
  vertical-align: middle;
  align-self: center;
}

.modal-wrapper .modal-window .modal-content {
  max-height: 60vh;
  overflow-y: auto;
}

.modal-overlay {
  z-index: 10;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, .8)
}

.modal-wrapper .modal-close {
  z-index: 20;
  position: absolute;
  top: 0;
  right: 0;
  width: 35px;
  color: #95979c!important;
  font-size: 20px;
  font-weight: 700;
  line-height: 35px;
  text-align: center;
  text-decoration: none;
  text-indent: 0;
  cursor: pointer;
}

.modal-wrapper .modal-close:hover {
  color: #2b2e38!important
}
pre.code {
  text-align: left;
  background: rgb(250, 250, 250);
  border-radius: 3px;
  border: 0px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 5px inset;
  color: #4d4d4d;
  font-family: Monaco, Consolas, "Courier New", Courier, monospace, sans-serif;
  font-size: 13px;
  outline: 0px;
  overflow: auto;
  max-height: 55vh;
  padding: 10px;
  vertical-align: baseline;
  line-height: normal;
}

#copy-code {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  box-sizing: border-box;
  margin: 0;
  font: inherit;
  font-family: inherit;
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  user-select: none;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #fff;
  background-color: #337ab7;
  text-shadow: 0 -1px 0 rgba(0,0,0,.2);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075);
  background-image: linear-gradient(to bottom,#337ab7 0,#265a88 100%);
  background-repeat: repeat-x;
  border-color: #245580;
  -webkit-appearance: button;
  cursor: pointer;
}
#copy-code:focus {
  outline: thin dotted;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
#copy-code:active {
  background-color: #265a88;
  border-color: #245580;
}
#copy-code:hover {
  background-color: #265a88;
  background-position: 0 -15px;
}
#copy-code.disable {
  background-repeat: repeat-x;
  -webkit-appearance: button;
  pointer-events: none;
  cursor: not-allowed;
  box-shadow: none;
  opacity: .65;
  border-color: #2e6da4;
  background-color: #265a88;
  background-image: none;
}


#floating-button{
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: #db4437;
  position: fixed;
  bottom: 55px;
  right: 32px;
  cursor: pointer;
  box-shadow: 0px 2px 5px #666;
}

.plus{
  color: white;
  position: absolute;
  top: 0;
  display: block;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 0;
  margin: 0;
  line-height: 55px;
  font-size: 38px;
  font-family: 'Roboto';
  font-weight: 300;
  animation: plus-out 0.3s;
  transition: all 0.3s;
}

#container-floating{
  position: fixed;
  width: 70px;
  height: 70px;
  bottom: 30px;
  right: 30px;
  z-index: 50;
}

#container-floating:hover{
  height: 400px;
  width: 90px;
  padding: 30px;
}

#container-floating:hover .plus{
  animation: plus-in 0.15s linear;
  animation-fill-mode: forwards;
}

.edit{
  position: absolute;
  top: 0;
  display: block;
  bottom: 0;
  left: 0;
  display: block;
  right: 0;
  padding: 0;
  opacity: 0;
  margin: auto;
  line-height: 65px;
  transform: rotateZ(-70deg);
  transition: all 0.3s;
  animation: edit-out 0.3s;
}

#container-floating:hover .edit{
  animation: edit-in 0.2s;
  animation-delay: 0.1s;
  animation-fill-mode: forwards;
}

@keyframes edit-in{
  from {opacity: 0; transform: rotateZ(-70deg);}
  to {opacity: 1; transform: rotateZ(0deg);}
}

@keyframes edit-out{
  from {opacity: 1; transform: rotateZ(0deg);}
  to {opacity: 0; transform: rotateZ(-70deg);}
}

@keyframes plus-in{
  from {opacity: 1; transform: rotateZ(0deg);}
  to {opacity: 0; transform: rotateZ(180deg);}
}

@keyframes plus-out{
  from {opacity: 0; transform: rotateZ(180deg);}
  to {opacity: 1; transform: rotateZ(0deg);}
}
.nds{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: fixed;
  z-index: 300;
  transform:  scale(0);
  cursor: pointer;
}

.nd1{
  background: #d3a411;
  right: 40px;
  bottom: 120px;
  animation-delay: 0.2s;
  animation: bounce-out-nds 0.3s linear;
  animation-fill-mode:  forwards;
}
@keyframes bounce-nds{
  from {opacity: 0;}
  to {opacity: 1; transform: scale(1);}
}

@keyframes bounce-out-nds{
  from {opacity: 1; transform: scale(1);}
  to {opacity: 0; transform: scale(0);}
}

#container-floating:hover .nds{

  animation: bounce-nds 0.1s linear;
  animation-fill-mode:  forwards;
}
.reminder{
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 0;
  bottom: 0;
  line-height: 40px;
}

td > svg {
  cursor: pointer;
}
td > svg:hover {
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  background-color: rgba(255,255,255,0.56);
}
    </style>
  `);
};


/***/ })
/******/ ]);