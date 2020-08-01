import * as React from 'react'
import Button from '../../components/Button'
import { ItemProxy } from '../../services/ItemProxy'
import { InstanceForSystem } from '../../services/InstaceForSystem'
import { getLocation } from '../../utils'
import { useDispatch } from 'react-redux'
import { fetchLink, fetchNaifeiLink, fetchNaifeiLinkFromLocation } from '../../modules/linkModule'
import interfaceModule from '../../modules/interfaceModule'

interface Props {
  fsId: ItemProxy['fsId']
}
const Links = (props: Props) => {
  const targetItem = InstanceForSystem.allDownloads[props.fsId]
  const dispatch = useDispatch()
  const openNaifeiModal = async () => {
    try {
      const { ui, user } = InstanceForSystem
      if (getLocation().inShareScreen) {
        if (!user.self) {
          ui.tip({ autoClose: false, mode: 'loading', msg: '生成链接中...' })
          await dispatch(fetchNaifeiLinkFromLocation())
          dispatch(interfaceModule.actions.change({ naifeiLinkPortalOpen: true }))
          ui.hideTip()
          return
        }
      }
      InstanceForSystem.dialog.confirm({
        title: '生成共享链接确认',
        body: `将自动创建私有链接到Naifei服务器<span style="color: red">隐私数据不推荐使用</span><br />是否确认？`,
        onSure: async () => {
          InstanceForSystem.ui.tip({ autoClose: false, mode: 'loading', msg: '生成链接中...' })
          await dispatch(fetchNaifeiLink(targetItem))
          dispatch(interfaceModule.actions.change({ naifeiLinkPortalOpen: true }))
          ui.hideTip()
        },
      })
    } catch (e) {
      throw new Error('生成共享链接失败')
    }
  }

  const openLinkModal = async () => {
    try {
      const { ui } = InstanceForSystem
      ui.tip({ autoClose: false, mode: 'loading', msg: '生成链接中...' })
      await dispatch(fetchLink([targetItem]))
      dispatch(interfaceModule.actions.change({ linkPortalOpen: true }))
      InstanceForSystem.ui.hideTip()
    } catch (e) {
      throw new Error('生成共享链接失败')
    }
  }
  return (
    <div
      css={`
        display: flex;
        justify-content: center;
        flex-direction: column;
      `}
    >
      <Button onClick={openLinkModal}>本地直链</Button>
      <Button onClick={openNaifeiModal}>Naifei直链</Button>
    </div>
  )
}

export default React.memo(Links)
