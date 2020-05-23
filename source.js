// ==UserScript==
// @namespace https://dotennin.blogspot.com/
// @name 百度网盘直链提取（多选）
// @description 百度网盘直链提取（多选）配合IDM下载
// @version 0.2
// @author Dotennin
// @license MIT
// @compatible        chrome 测试通过
// @compatible        firefox 未测试
// @compatible        opera 未测试
// @compatible        safari 未测试
// @include https://pan.baidu.com/disk/*
// @connect baidu.com
// @grant GM_setClipboard
// @grant GM_xmlhttpRequest
// @run-at document-idle
// ==/UserScript==
!function() {
    let task = setInterval(() => {
        let dom, t = document.querySelector("a.g-button[data-button-id][title=\u4e0b\u8f7d]")
        if (t) {
            clearInterval(task)
            dom = t.cloneNode(true)
            t.after(dom)
            dom.removeAttribute("style")
            t.remove()
            dom.addEventListener("click", () => {
                let dom = window.event.currentTarget, selectList = require("system-core:context/context.js").instanceForSystem.list.getSelected()
                dom.setAttribute("style", "background-color: #09e; color: #fff")

                const requestList = []
                let isDir = false
                selectList.filter((arr) => {
                    if (arr.isdir === 1) {
                        isDir = true
                        return false
                    }
                    return true
                }).forEach((arr) => {
                    requestList.push(getDownloadUrl(arr))
                })
                if (isDir) {
                    alert("\u4e0d\u80fd\u5305\u542b\u6587\u4ef6\u5939\u4e0b\u8f7d\uff0c\u0020\u5c06\u5ffd\u7565\u6587\u4ef6\u5939\u52fe\u9009\u7684\u4e0b\u8f7d\u5185\u5bb9\u3002")
                }
                Promise.all(requestList).then((urls) => {
                    dom.removeAttribute("style")
                    GM_setClipboard(urls.join('\n'), "text")
                })
            })
        }
    }, 1e3)
}()

function getDownloadUrl(arr) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            "url": "http://pcs.baidu.com/rest/2.0/pcs/file?app_id=778750&ver=2.0&method=locatedownload&path=" + encodeURIComponent(arr.path),
            "method": "GET",
            "responseType": "json",
            "headers": {
                "User-Agent": "netdisk;P2SP;2.2.60.26"
            },
            "onload": r => {
                if (r.response.hasOwnProperty("client_ip")) {
                    return resolve(r.response.urls[0].url + "&filename=" + encodeURIComponent(arr.server_filename))
                } else {
                    // Todo return error message
                    return reject(r)
                }
            }
        })
    })
}
