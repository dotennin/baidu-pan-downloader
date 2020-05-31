// ==UserScript==
// @namespace https://dotennin.blogspot.com/
// @name 百度网盘直链提取（多选）
// @description 百度网盘直链提取（多选）配合IDM下载
// @version 0.3
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
    appendModal()
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
                openModal()
                Promise.all(requestList).then((urls) => {
                    dom.removeAttribute("style")
                    // document.querySelector('.code').insertAdjacentHTML('beforeend', urls.join('\n'))
                    document.querySelector('#copy-code').className = ''
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
                    const url = r.response.urls[0].url + "&filename=" + encodeURIComponent(arr.server_filename)
                    document.querySelector('.code').insertAdjacentHTML('beforeend', url + '\n')
                    return resolve(url)
                } else {
                    // Todo return error message
                    return reject(r)
                }
            }
        })
    })
}

function openModal() {
    const modalWrapper = document.querySelector('.modal-wrapper')
    modalWrapper.className = modalWrapper.className + ' open'
}

function closeModal() {
    const modalWrapper = document.querySelector('.modal-wrapper')
    modalWrapper.className = 'modal-wrapper'
    const urlElements = document.querySelector('.code')
    document.querySelector('#copy-code').className = 'disable'
    urlElements.innerHTML = ''
}

function copyCode() {
    const urlElements = document.querySelector('.code')
    window.getSelection().selectAllChildren(urlElements)
    GM_setClipboard(urlElements.innerText, 'text')
}

function appendModal() {
    document.body.insertAdjacentHTML('beforeend', `
        <div class="modal-wrapper">
            <div class="modal-overlay"></div>
            <div class="modal-window">
                <div class="modal-content">
                    <pre class="code" data-lang="" data-unlink=""></pre>
                    <button id="copy-code" class="disable">复制到剪切板</button>
                </div>
                <span class="modal-close">×</a>
            </div>
        </div>
    <style>
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
            padding: 30px 30px 15px;
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
            text-indent: 0
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
        a[title="下载"] {
            color: #2f912d !important;
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
    </style>
    `)

    document.querySelectorAll('.modal-overlay,.modal-close').forEach((e) => e.addEventListener('click', closeModal))
    document.getElementById('copy-code').addEventListener('click', copyCode)
}
