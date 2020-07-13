import React from 'react'
import { Modal } from '../components/Modal'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Form, FormField } from '../components/Form'
import { InstanceForSystem } from '../services/InstaceForSystem'
import { IStoreState } from '../store'
import interfaceModule from '../modules/interfaceModule'
import { downloadableSelector } from '../selectors'

const mapStoreToProps = (store: IStoreState) => ({
  configModalOpen: store.interface.configModalOpen,
  autoStart: store.interface.autoStart,
  downloadable: downloadableSelector(store),
  maxDownloadCount: store.interface.maxDownloadCount,
})

const mapActionsToProps = (dispatch: Dispatch) => ({
  closeModal: () => dispatch(interfaceModule.actions.change({ configModalOpen: false })),
  setAutoStart: (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(interfaceModule.actions.change({ autoStart: e.target.checked }))
  },
  setMaxDownloadCount: (e: React.ChangeEvent<HTMLSelectElement>) => {
    const count = parseInt(e.target.value)
    dispatch(interfaceModule.actions.change({ maxDownloadCount: count }))
  },
})

function Preferences({
  configModalOpen,
  autoStart,
  maxDownloadCount,
  closeModal,
  setAutoStart,
  setMaxDownloadCount,
}: ReturnType<typeof mapStoreToProps> & ReturnType<typeof mapActionsToProps>) {
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
                name="checkbox"
                value="true"
                checked={autoStart}
                id="auto-start"
                tabIndex={1}
                onChange={setAutoStart}
              />
            </div>
          </FormField>
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
        </Form>
      </Modal>
    </div>
  )
}

export default connect(mapStoreToProps, mapActionsToProps)(Preferences)
