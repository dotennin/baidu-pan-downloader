import { GM } from '../gmInterface/gmInterface'
import { ValueTypes } from '../types'
import { store } from '../store'
import { InstanceForSystem } from '../InstaceForSystem'

window.onunload = () => {
  GM.setValue(ValueTypes.items, store.getState().download.allDownloads)

  InstanceForSystem.stopAll()
}
window.onbeforeunload = (e: BeforeUnloadEvent) => {
  if (Object.keys(store.getState().download.downloadingItems).length > 0) {
    e.preventDefault()
    e.returnValue = '有未完成的下载任务， 确认关闭吗?'
  }
}
