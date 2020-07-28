import { GM } from './gmInterface/gmInterface'
import { StatusTypes, ValueTypes } from './types'
import { store } from '../store'
import { InstanceForSystem } from './InstaceForSystem'

window.onunload = () => {
  GM.setValue(ValueTypes.items, Object.values(InstanceForSystem.allDownloads))

  InstanceForSystem.stopAll()
}
window.onbeforeunload = (e: BeforeUnloadEvent) => {
  const { downloadItems } = store.getState().download
  if (Object.values(downloadItems).some((item) => item.status === StatusTypes.downloading)) {
    e.preventDefault()
    e.returnValue = '有未完成的下载任务， 确认关闭吗?'
  }
}

// share password user input listen, use as a cache when real download link is obtained
window.document.querySelector('#ts8E18')?.addEventListener('input', (e) => {
  const target = e.target as HTMLInputElement
  localStorage.setItem(ValueTypes.sharePassword, target.value)
})
