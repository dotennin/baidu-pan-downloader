import { GM } from './gmInterface/gmInterface'
import { StatusTypes, ValueTypes } from './types'
import { store } from '../store'
import { InstanceForSystem } from './InstaceForSystem'
import interfaceModule from '../modules/interfaceModule'

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
window.onload = () => {
  // Resolve store initiation
  setTimeout(() => {
    InstanceForSystem.initState().then(() => {
      const {
        download: { processing },
      } = store.getState()
      if (processing > 0) {
        // if there is a task that automatically starts downloading then open download-modal directly after initialization
        store.dispatch(interfaceModule.actions.change({ downloadModalOpen: true }))
      }
    })
  }, 1000)
}
