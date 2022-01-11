# :octocat: baidu-pan-downloader :octocat:

## A Baidu-yun storage downloader script using Greasemonkey/Tampermonkey
#### This repository contains a stub project for developing usercript extensions with React+Redux+[toolkit]+Typescript.
#### It uses `react-app-rewired` to change the webpack configuration to complile React code so that it can be included in a userscript.
In Firefox or Chrome, install [Greasemonkey](https://addons.mozilla.org/en-CA/firefox/addon/greasemonkey/) or Tampermonkey.
You can then test the userscript by installing it [here](https://github.com/siefkenj/react-userscripts/raw/master/dist/react-userscripts.user.js).
Navigate to [google](https://www.google.com) and you should see a react component inserted at the bottom of the page.

# 🎅 Development
## Building
```shell script
git clone https://github.com/dotennin/baidu-pan-downloader.git
cd baidu-pan-downloader/
npm install
npm run build
```
After the build is complete, you should have a new version of userscript located at `dist/bundle.user.js`. 

## Development and Dynamic loading
It's able to get the newest version of your script upon a page refresh when developing.
To do this, copy the source from `dist/react-userscripts-dev.user.js` or click [here](https://github.com/dotennin/baidu-pan-downloader/blob/master/dist/react-userscripts-dev.user.js).
The dev script will dynamically load the extension from port `5000`, so you can take advantage of
`create-react-app`'s ability to auto-recompile an app when the source changes.

and run
```shell script
npm start
```
-----------------------------------
# 🎁 Feature 
### You can add checked files to download list Modal through the download icon<img src="https://raw.githubusercontent.com/dotennin/dotennin/main/assets/images/icon-plus.png" width="5%"> In the lower right corner of the page(https://pan.baidu.com/disk/home)
<img src="https://raw.githubusercontent.com/dotennin/dotennin/main/assets/images/pandown-main.png" width="50%">

-----------------------------------
## ❄ Browser support：
```
Chrome:  ✅
Edge:    ✅
Firefox: ✅⚠(Required TampermonkeyBETA v4.11.6115 or higher）
Opera:   ⁉
Safari:  ⁉
```
-----------------------------------
# 📑 Changelog
See👉 [here](https://dotennin.github.io/baidu-pan-downloader/CHANGELOG) to confirm Changelog
------------------------------------------
-----------------------------------
# 🀄 中文说明
点👉 [here](https://dotennin.github.io/baidu-pan-downloader/README.zh_cn) 查看中文版本说明
------------------------------------------
