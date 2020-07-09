import { call, put, select, takeEvery } from 'redux-saga/effects'
import { ActionType, getType } from 'typesafe-actions'
import actionCreator from './actionCreator'
import { getDownloadUrl } from '../../services/api'
import { storeSelector } from '../index'
import { interfaceActionCreator } from '../Interface'
import { HeaderTypes, StatusTypes } from '../../types'
import { GM } from '../../gmInterface/gmInterface'

function* requestDownloadURL(action: ActionType<typeof actionCreator.downloadURL.request>) {
  const item = action.payload
  try {
    const res = yield call(getDownloadUrl, item.path)
    item.url = res.response.urls[0].url + '&filename=' + encodeURIComponent(item.serverFilename)
    yield put(actionCreator.downloadURL.success(item))
    yield put(actionCreator.downloadItem.request(item))
  } catch (e) {
    yield put(actionCreator.downloadURL.failure(e))
  }
}

function* requestDownloadItem(action: ActionType<typeof actionCreator.downloadItem.request>) {
  const item = action.payload
  const { progress } = item
  const {
    interface: { downloadable },
  } = storeSelector(yield select())
  try {
    if (!downloadable) {
      progress.status = StatusTypes.inQueued
      return
    }

    if (progress.status === StatusTypes.error) {
      // re-getting url if it invalided
      yield put(actionCreator.downloadURL.request(item))
      return
    }

    progress.status = StatusTypes.downloading

    const { url, serverFilename } = item
    let currentEvent: ProgressEvent | undefined = undefined
    progress.percentCount = 0
    progress.speedOverlay = 0

    progress.request = GM.download({
      url,
      name: serverFilename,
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

        // addNextDownloadRequest()
      },
      onerror: (e) => {
        progress.intervalId && clearInterval(progress.intervalId)
        progress.percentCount = 0
        progress.speedOverlay = 0
        progress.status = StatusTypes.error
        // eslint-disable-next-line no-console
        console.error('（´皿｀；）出错了， 可能是URL有效期到了，需要重新点击下载按扭。如果重试还不行就重新登录', e)

        // addNextDownloadRequest()
      },
    })

    let loaded = 0
    progress.intervalId = window.setInterval(() => {
      if (currentEvent) {
        const speed = currentEvent.loaded - loaded
        loaded = currentEvent.loaded
        progress.speedOverlay = speed
      }
    }, 1000)
  } catch (e) {
    console.error(e)
    yield put(actionCreator.downloadItem.failure(e))
  }
}

function* requestChange(action: ActionType<typeof actionCreator.change.request>) {
  try {
    yield actionCreator.change.request
    yield put(actionCreator.change.success(action.payload))
  } catch (e) {
    yield put(actionCreator.change.failure(e))
  }
}

function* onChangeEventSuccess(action: ActionType<typeof actionCreator.change.success>) {
  const {
    download,
    interface: { maxDownloadCount },
  } = storeSelector(yield select())

  const keys = Object.keys(action.payload) as [keyof typeof download]
  for (const key of keys) {
    switch (key) {
      case 'allDownloads':
        const downloadable =
          Object.values(download.allDownloads).filter((item) => item.progress.status === StatusTypes.downloading)
            .length < maxDownloadCount
        yield put(interfaceActionCreator.change({ downloadable }))
        break
    }
  }
}

export default [
  takeEvery(getType(actionCreator.downloadURL.request), requestDownloadURL),
  takeEvery(getType(actionCreator.downloadItem.request), requestDownloadItem),
  takeEvery(getType(actionCreator.change.request), requestChange),
  takeEvery(getType(actionCreator.change.success), onChangeEventSuccess),
]
