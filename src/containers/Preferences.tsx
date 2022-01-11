import React from 'react'
import { Modal } from '../components/Modal'
import { connect, useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import { Form, FormField } from '../components/Form'
import { InstanceForSystem } from '../services/InstaceForSystem'
import { IStoreState } from '../store'
import interfaceModule from '../modules/interfaceModule'
import { downloadableSelector } from '../selectors'
import devNodeEnv from '../utils/nodeEnvIs/devNodeEnv'

const mapStoreToProps = (store: IStoreState) => ({
  configModalOpen: store.interface.configModalOpen,
  autoStart: store.interface.autoStart,
  debug: store.interface.debug,
  downloadable: downloadableSelector(store),
  maxDownloadCount: store.interface.maxDownloadCount,
  appId: store.interface.appId,
})

const mapActionsToProps = (dispatch: Dispatch) => ({
  closeModal: () => dispatch(interfaceModule.actions.change({ configModalOpen: false })),
  setAutoStart: (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(interfaceModule.actions.change({ autoStart: e.target.checked }))
  },
  setDebug: (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(interfaceModule.actions.change({ debug: e.target.checked }))
  },
  setMaxDownloadCount: (e: React.ChangeEvent<HTMLSelectElement>) => {
    const count = parseInt(e.target.value)
    dispatch(interfaceModule.actions.change({ maxDownloadCount: count }))
  },
  setAppId: (e: React.ChangeEvent<HTMLInputElement>) => {
    const appId = e.target.value
    if (/^\d+$/.test(appId) || !appId) {
      dispatch(interfaceModule.actions.change({ appId }))
    }
  },
})

function Preferences({
  configModalOpen,
  autoStart,
  maxDownloadCount,
  closeModal,
  setAutoStart,
  setMaxDownloadCount,
  setAppId,
  appId,
  debug,
  setDebug,
}: ReturnType<typeof mapStoreToProps> & ReturnType<typeof mapActionsToProps>) {
  const dispatch = useDispatch()
  const downloadMode = useSelector((store: IStoreState) => store.interface.downloadMode)
  return (
    <div
      css={`
        .modal-window {
          max-width: 500px;
        }
      `}
    >
      <Modal open={configModalOpen} close={closeModal}>
        <Form action="#">
          <header style={{ margin: '0 0 20px 0' }}>
            <h2 style={{ margin: '0 0 5px 0' }}>下载设置</h2>
            <div
              css={`
                font-size: 90%;
                color: #999;
              `}
            >
              如果下载经常出错，建议将下载数设置为1
            </div>
          </header>
          <FormField>
            <label htmlFor={'auto-start'}>自动下载</label>
            <div>
              <input
                type="checkbox"
                value="true"
                checked={autoStart}
                id="auto-start"
                tabIndex={1}
                onChange={setAutoStart}
              />
            </div>
          </FormField>
          {devNodeEnv && (
            <FormField>
              <label htmlFor={'debug-mode'}>debug mode</label>
              <div>
                <input type="checkbox" value="true" checked={debug} id="debug-mode" tabIndex={1} onChange={setDebug} />
              </div>
            </FormField>
          )}
          <FormField>
            <legend>最大同时下载数</legend>
            <div>
              <select
                defaultValue={maxDownloadCount}
                id="max-download-count"
                className="field select medium"
                tabIndex={2}
                onChange={setMaxDownloadCount}
              >
                {/* Generate numbers with 1-maxDownloadCount */}
                {[...Array(InstanceForSystem.maxDownloadCount).keys()]
                  .map((i) => ++i)
                  .map((i, key) => {
                    return (
                      <option key={key} value={i}>
                        {i}
                      </option>
                    )
                  })}
              </select>
            </div>
          </FormField>

          <FormField>
            <legend>下载方式</legend>
            <div>
              <select
                id="download-method"
                defaultValue={downloadMode}
                className="field select medium"
                tabIndex={2}
                onChange={(e) => {
                  dispatch(
                    interfaceModule.actions.change({ downloadMode: e.currentTarget.value as typeof downloadMode })
                  )
                }}
              >
                <option value={'LOCAL'}>本地直链</option>
                <option value={'SHARING'}>共享直链</option>
              </select>
            </div>
          </FormField>
          <FormField>
            <legend>
              APP ID<small>(空值将采用随机数值)</small>
            </legend>
            <div>
              <input value={appId} onChange={setAppId} />
            </div>
          </FormField>
        </Form>
      </Modal>
    </div>
  )
}

export default connect(mapStoreToProps, mapActionsToProps)(Preferences)
