import { HeaderTypes, IDlinkPanResponse, StatusTypes } from './types'
import { GM } from './gmInterface/gmInterface'
import { ItemProxy } from './ItemProxy'
import { InstanceForSystem } from './InstaceForSystem'
import { getFileExtension } from '../utils'

/**@deprecated
 * its supppper slow than shareDlink
 * */
export function getDownloadUrl(path: string) {
  if (path.match(/^\/sharelink\d+/) !== null) {
    throw new Error(
      '需要先「保存到我的百度网盘」后<br />在网盘列表(<a target="_blank" href="https://pan.baidu.com/disk/home">https://pan.baidu.com/disk/home</a>)中下载'
    )
  }
  return new Promise((resolve, reject) => {
    GM.xmlHttpRequest({
      url:
        'http://pcs.baidu.com/rest/2.0/pcs/file?app_id=778750&ver=2.0&method=locatedownload&path=' +
        encodeURIComponent(path),
      method: 'GET',
      responseType: 'json',
      headers: {
        'User-Agent': HeaderTypes.userAgent,
      },
      onload: (r) => {
        if (r.response.client_ip) {
          return resolve(r)
        } else {
          // Todo return error message
          return reject(r)
        }
      },
    })
  })
}

const blackListedFileExtension = ['apk', 'exe', 'pdf', '7z', 'flac', 'm4a', 'zip']
const formatServerFilename = (fileName: string) =>
  fileName + (blackListedFileExtension.includes(getFileExtension(fileName)) ? '.__________重命名我.zip' : '')

export function download(item: ItemProxy, rename?: boolean) {
  const { url, serverFilename, progress } = item
  let currentEvent: ProgressEvent | undefined = undefined
  progress.percentCount = 0
  progress.speedOverlay = 0

  return new Promise((resolve, reject) => {
    progress.request = GM.download({
      url,
      name: rename ? formatServerFilename(serverFilename) : serverFilename,
      saveAs: true,
      headers: {
        'User-Agent': 'LogStatistic',
      },
      onprogress: (e: ProgressEvent) => {
        currentEvent = e

        progress.percentCount = Math.round((currentEvent.loaded * 100) / currentEvent.total)
      },
      onload: () => {
        progress.intervalId && clearInterval(progress.intervalId)
        progress.percentCount = 100
        progress.speedOverlay = 0
        progress.status = StatusTypes.completed

        GM.notification({
          text: '下载完成',
          title: serverFilename,
          highlight: true,
        })
        resolve()
      },
      onerror: (e) => {
        progress.intervalId && clearInterval(progress.intervalId)
        progress.percentCount = 0
        progress.speedOverlay = 0
        if (e.error === 'not_whitelisted') {
          download(item, true)
          return
        }
        progress.status = StatusTypes.error
        if (Object.keys(e).length === 0) {
          reject(new Error('user is not authorized, hitcode:122, plz try again'))
        } else {
          reject(new Error(e.error))
        }
      },
    })

    let loaded = 0
    progress.intervalId = window.setInterval(() => {
      if (currentEvent) {
        const speed = (currentEvent.loaded - loaded) * 2
        loaded = currentEvent.loaded
        progress.speedOverlay = speed
      }
    }, 500)
  })
}

export function createPrivateShareLink<
  R extends {
    createsharetips_ldlj: string
    ctime: number
    errno: number
    expiredType: number
    link: string
    premis: boolean
    request_id: number
    shareid: number
    shorturl: string
  }
>(fs_id?: ItemProxy['fsId']): Promise<R> {
  const { list, jquery } = InstanceForSystem
  return new Promise((resolve, reject) => {
    jquery
      .post(
        '/share/set?channel=chunlei&clienttype=0&web=1',
        {
          schannel: 4,
          channel_list: '[]',
          period: 7,
          pwd: 'qqqq',
          fid_list: jquery.stringify(fs_id ? [fs_id] : list.getSelected().map((l) => l.fs_id)),
        },
        function(r: R) {
          resolve(r)
        }
      )
      .error(function(e: Error) {
        reject(e)
      })
  })
}

/** @deprecated dlink service has been removed from baidu client */
export function getDlinkPan<T extends IDlinkPanResponse>(items: ItemProxy[], pack: boolean = false): Promise<T> {
  return new Promise((resolve, reject) => {
    try {
      InstanceForSystem.dlinkService().then((dl) => {
        const fidList = items.map((item) => item.fsId)
        const type = pack ? 'batch' : 'nolimit'
        dl.getDlinkPan(JSON.stringify(fidList), type, resolve)

        // const yunData = unsafeWindow.yunData
        // const data = {
        //   list: fidList,
        //   share_uk: yunData.SHARE_UK,
        //   share_id: yunData.SHARE_ID,
        //   sign: yunData.SIGN,
        //   timestamp: yunData.TIMESTAMP,
        //   type,
        // }
        // dl.getDlinkShare(data, resolve)
      })
    } catch (e) {
      reject(e)
    }
  })
}

/**
 * get randsk (cookie)
 */
export async function getBDCLND(
  link: string,
  pwd: string
): Promise<{
  appeal_status: number
  expiredType: number
  expired_type: number
  fileNums: number
  has_more: boolean
  hitrisk: number
  link_ctime: number
  list: []
  seckey: string
  shareid: number
  sharetype: number
  title: string
  uk: number
  uname: string
  user: {
    avatar: string
  }
  view_limit: 0
  view_visited: 0
  wx_headurl: string
  wx_name: string
}> {
  return new Promise((resolve, reject) => {
    GM.xmlHttpRequest({
      url: `https://pan.baidu.com/share/wxlist?clienttype=25&shorturl=${link}&pwd=${pwd}`,
      method: 'GET',
      responseType: 'json',
      headers: {
        'User-Agent': HeaderTypes.userAgent,
      },
      onload: (r) => {
        if (r?.response?.data) {
          return resolve(r.response.data)
        } else {
          // Todo return error message
          return reject(r)
        }
      },
    })
  })
}

export function getSign<
  R extends {
    sign: string
    timestamp: number
  }
>(request: { surl: string; shareId: number; uk: string; bdstoken: string }): Promise<R> {
  const { jquery } = InstanceForSystem
  return new Promise((resolve, reject) => {
    jquery
      .get(
        `/share/tplconfig?shareid=${request.shareId}&uk=${request.uk}&fields=sign,timestamp&channel=chunlei&web=1&app_id=250528&clienttype=0`,
        function(r: { data: R; errno: number; request_id: number; show_msg: 'success' }) {
          if (r?.data) {
            resolve(r.data)
          } else {
            reject(new Error(`cannot found corresponding data on:${r}`))
          }
        }
      )
      .error(function(e: Error) {
        reject(e)
      })
  })
}

export function getDlink<
  R extends {
    category: number
    context: string
    delete_fs_id: string
    dlink: string
    extent_int3: string
    extent_tinyint1: string
    extent_tinyint2: string
    extent_tinyint3: string
    extent_tinyint4: string
    file_key: string
    fs_id: number
    headurl: string
    isdir: 0 | 1
    isenum: 0 | 1
    local_ctime: number
    local_mtime: number
    md5: string
    oper_id: string
    owner_id: string
    owner_type: string
    path: string
    path_md5: string
    privacy: string
    real_category: string
    resource_type: number
    server_atime: string
    server_ctime: number
    server_filename: string
    server_mtime: number
    share: string
    size: number
    tkbind_id: string
    videotag: string
    wpfile: string
  }[]
>(request: { fsId: string; time: number; sign: string; randsk?: string; shareId: number; uk: string }): Promise<R> {
  const payload = `encrypt=0&fid_list=[${request.fsId}]&primaryid=${request.shareId}&uk=${request.uk}&product=share&type=nolimit`
  return new Promise((resolve, reject) => {
    GM.xmlHttpRequest({
      url: `/api/sharedownload?app_id=${InstanceForSystem.appIds[0]}&channel=chunlei&clienttype=12&sign=${request.sign}&timestamp=${request.time}&web=1`,
      method: 'POST',
      data: payload,
      responseType: 'json',
      headers: {
        'User-Agent': HeaderTypes.userAgent,
      },
      onload: (e: { response: { errno: 0 | 1 | 2; list: R; request_id: number; server_time: number } }) => {
        if (e.response.errno === 0) {
          resolve(e.response.list)
        } else if (e.response.errno === 2) {
          InstanceForSystem.ui.tip({ autoClose: true, msg: '该文件禁止分享, 请换用本地下载模式.' })
          reject(new Error(`cannot download this file with share mode on:${e}`))
        } else {
          reject(new Error(`cannot found corresponding data on:${e}`))
        }
      },
      onerror: (e) => reject(e),
    })
  })
}
