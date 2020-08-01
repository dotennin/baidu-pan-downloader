import React from 'react'
import Operation from './Operation'
import ProgressStatus from './ProgressStatus'
import SpeedStatus from './SpeedStatus'
import { InstanceForSystem } from '../../services/InstaceForSystem'
import { IStoreState } from '../../store'
import { createSelector } from 'reselect'
import { connect } from 'react-redux'
import { StatusTypes } from '../../services/types'
import TabTableHeader from '../../components/TabTableHeader'
import Links from './Links'

const mapStoreToProps = (store: IStoreState) => ({
  fsIdList: createSelector(
    (store: IStoreState) => store.download.downloadItems,
    (allDownloads) =>
      Object.keys(allDownloads)
        .sort((a) => (allDownloads[a].status === StatusTypes.downloading ? -1 : 1))
        .filter((fsId) => [StatusTypes.downloading, StatusTypes.inQueued].includes(allDownloads[fsId].status))
  )(store),
})

function DownloadingTab({ fsIdList, name }: ReturnType<typeof mapStoreToProps> & { name: string }) {
  return (
    <TabTableHeader name={name}>
      {fsIdList.map((fsId, key) => {
        const item = InstanceForSystem.allDownloads[fsId]
        if (!item) {
          return null
        }
        const { serverFilename, size } = InstanceForSystem.allDownloads[fsId]
        return (
          <tr key={key} id={'row-' + fsId}>
            <td style={{ wordBreak: 'break-all' }}>{serverFilename}</td>
            <td>
              <Links fsId={fsId} />
            </td>
            <td>{InstanceForSystem.friendlyFileSize(size)}</td>
            <td>
              <div className="wrap">
                <ProgressStatus fsId={fsId} />
              </div>
            </td>
            <td>
              <SpeedStatus fsId={fsId} />
            </td>
            <td>
              <Operation fsId={fsId} />
            </td>
          </tr>
        )
      })}
    </TabTableHeader>
  )
}

export default connect(mapStoreToProps)(DownloadingTab)
