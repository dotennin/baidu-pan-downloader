import React, { FunctionComponent } from 'react'
import { InstanceForSystem } from './InstaceForSystem'
import { GM } from './gmInterface/gmInterface'
import {StatusTypes, ValueTypes} from './types'

const App: FunctionComponent = () => {
  const loopOption = (maxCount: number) => {
    const currentValue = GM.getValue(ValueTypes.maxDownloadCount, InstanceForSystem.maxDownloadCount)
    let text = ''
    for (let i = 1; i <= maxCount; i++) {
      text += `<option ${currentValue === i && 'selected'} value="${i}">${i}</option>`
    }
    return text
  }

  const { autoStart, downloadable } = InstanceForSystem
  Object.values(InstanceForSystem.initState().allDownloads).forEach((arr) => {
    appendRow(arr)
    if (arr.status === StatusTypes.downloading && autoStart && downloadable) {
      downloadItem(arr)
    }
  })
  return (
    <>
      <div id="download-list" className="modal-wrapper">
        <div className="modal-overlay" />
        <div className="modal-window">
          <div className="modal-content">
            <table>
              <thead>
                <tr>
                  <th scope="col">文件</th>
                  <th scope="col">进度</th>
                  <th scope="col">大小</th>
                  <th scope="col">速度</th>
                  <th scope="col">操作</th>
                </tr>
              </thead>
              <tbody id="popup-tbody" />
            </table>
          </div>
          {/*<span className="modal-close">×</span>*/}
        </div>
      </div>

      <div id="config-modal" className="modal-wrapper">
        <div className="modal-overlay" />
        <div className="modal-window" style={{ maxWidth: 500 }}>
          <div className="modal-content">
            <form action="#">
              <header>
                <h2>下载设置</h2>
                <div>如果下载经常出错，建议将下载数设置为1</div>
              </header>
              <div>
                <fieldset>
                  <legend className="desc">自动下载</legend>
                  <div>
                    <input
                      type="checkbox"
                      name="checkbox"
                      value="true"
                      checked={InstanceForSystem.autoStart}
                      id="auto-start"
                      tabIndex={1}
                    />
                    <label htmlFor={'auto-start'} />
                  </div>
                </fieldset>
              </div>
              <div>
                <label className="desc" id="title106" htmlFor="Field106">
                  最大同时下载数
                </label>
                <div>
                  <select id="max-download-count" className="field select medium" tabIndex={2}>
                    {loopOption(InstanceForSystem.maxDownloadCount)}
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div id="container-floating">
        <div id="config-button" className="nd1 nds" data-toggle="tooltip" data-placement="left">
          <img
            className="reminder"
            src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/bt_compose2_1x.png"
          />
        </div>
        <div id="floating-button" data-toggle="tooltip" data-placement="left" data-original-title="Create">
          <p className="plus">+</p>
          <img
            className="edit"
            src="//ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/ic_reminders_speeddial_white_24dp.png"
          />
        </div>
      </div>
    </>
  )
}
export default App
