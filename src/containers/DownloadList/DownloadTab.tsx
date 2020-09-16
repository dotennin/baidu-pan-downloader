import React from 'react'
import Operation from './Operation'
import ProgressStatus from './ProgressStatus'
import SpeedStatus from './SpeedStatus'
import { InstanceForSystem } from '../../services/InstaceForSystem'
import TabTableHeader from '../../components/TabTableHeader'
import Links from './Links'

function AllDownloadTab({ fsIdList, name }: { name: string; fsIdList: string[] }) {
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
const Memorized = React.memo(AllDownloadTab)
export default Memorized
