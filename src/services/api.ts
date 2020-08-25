import { HeaderTypes, IDlinkPanResponse, StatusTypes } from './types'
import { GM } from './gmInterface/gmInterface'
import { ItemProxy } from './ItemProxy'
import { InstanceForSystem } from './InstaceForSystem'

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

const formatServerFilename = (fileName: string) => fileName + '.__________重命名我.zip'

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
        Host: 'qdall01.baidupcs.com',
        Accept: '*/*',
        'User-Agent': HeaderTypes.userAgent,
        'Accept-Encoding': 'identity',
        'Accept-Language': 'ja-JP',
        'Accept-Charset': '*',
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

export async function getShareLinks(
  link: string,
  pwd: string
): Promise<
  {
    category: string
    fs_id: string
    isdir: '0' | '1'
    /**
     * @deprecated
     */
    dlink: string
    local_ctime: string
    local_mtime: string
    md5: string
    path: string
    server_ctime: string
    /**
     * @deprecated
     */
    server_filename: string
    server_mtime: string
    size: string
    name: string
    link: string
  }[]
> {
  return await (
    await fetch(`https://pan.dotennin.ml/?link=${encodeURI(link)}%20%E6%8F%90%E5%8F%96%E7%A0%81:%20${pwd}`)
  ).json()
}
