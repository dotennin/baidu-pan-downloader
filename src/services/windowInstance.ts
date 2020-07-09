import { GM } from '../gmInterface/gmInterface'
import { StatusTypes, ValueTypes } from '../types'
import { store } from '../store'
import { InstanceForSystem } from './InstaceForSystem'

window.onunload = () => {
  GM.setValue(ValueTypes.items, store.getState().download.allDownloads)

  InstanceForSystem.stopAll()
}
window.onbeforeunload = (e: BeforeUnloadEvent) => {
  const { allDownloads } = store.getState().download
  if (Object.values(allDownloads).some((item) => item.progress.status === StatusTypes.downloading)) {
    e.preventDefault()
    e.returnValue = '有未完成的下载任务， 确认关闭吗?'
  }
}
