// ==UserScript==
// @namespace https://github.com/dotennin/baidu-pan-downloader
// @icon https://dotennin.github.io/baidu-pan-downloader/public/favicon.ico
// @name 百度网盘下载管理器
// @description A download manager for Baidu Yun
// @version 9.9.9
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
// @connect localhost
// @connect qdall01.baidupcs.com
// @grant GM_xmlhttpRequest
// @grant GM_download
// @grant GM_notification
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_deleteValue
// @grant GM_addValueChangeListener
// @grant unsafeWindow
// @run-at document-idle
// ==/UserScript==


"use strict";

function log(...args) {
    console.log("Userscript:", ...args);
}

log("Dev mode started")

async function main() {
  const resp = await new Promise((resolve, reject) => {
    GM_xmlhttpRequest({
      url: 'http://localhost:5000/static/js/main.js',
      method: 'GET',
      onload: (r) => {
        resolve(r.response);
      },
      onerror: (e) => {
        reject(e);
      }
    })
   })

  log("Got Dev script")
  eval(resp)
  log("Dev script evaled")

}

// Make sure we run once at the start
main.bind({})().catch(e => {
    log("ERROR", e);
});
