import { InstanceForSystem } from '../../services/InstaceForSystem'
const { allDownloads } = InstanceForSystem

const state = {
  allDownloads,
  processing: {
    url: 0,
    data: 0,
  },
}

export default state
