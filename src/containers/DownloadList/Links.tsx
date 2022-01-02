import * as React from 'react'
import Button from '../../components/Button'
import { ItemProxy } from '../../services/ItemProxy'
import { InstanceForSystem } from '../../services/InstaceForSystem'
import { getLocation } from '../../utils'
import { useDispatch } from 'react-redux'
import { fetchLink, fetchShareLinks, fetchShareLinksFromLocation } from '../../modules/linkModule'
import interfaceModule from '../../modules/interfaceModule'
import { store } from '../../store'

interface Props {
  fsId: ItemProxy['fsId']
}
const Links = (props: Props) => {
  const targetItem = InstanceForSystem.allDownloads[props.fsId]
  const dispatch = useDispatch()
  const openShareLinksModal = async () => {
    try {
      const { ui, user } = InstanceForSystem
      if (getLocation().inShareScreen) {
        if (!user?.self) {
          ui.tip({ autoClose: false, mode: 'loading', msg: '生成链接中...' })
          await dispatch(fetchShareLinksFromLocation())
          ui.hideTip()
          return
        }
      }
      InstanceForSystem.dialog.confirm({
        title: '生成共享链接确认',
        body: `将自动创建私有链接到共享服务器(<span style="color: red">隐私数据不推荐使用</span>)<br />是否继续？`,
        onSure: async () => {
          InstanceForSystem.ui.tip({ autoClose: false, mode: 'loading', msg: '生成链接中...' })
          dispatch(fetchShareLinks(targetItem))
          ui.hideTip()
        },
      })
    } catch (e) {
      throw new Error('生成共享链接失败')
    }
  }

  const openLinkModal = async () => {
    try {
      const { appId } = store.getState().interface
      const { ui } = InstanceForSystem
      ui.tip({ autoClose: false, mode: 'loading', msg: '生成链接中...' })
      await dispatch(fetchLink([targetItem], appId))
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
      {/**Todo active these functions */}
      <Button disabled onClick={openLinkModal}>
        本地直链
      </Button>
      <Button disabled onClick={openShareLinksModal}>
        共享直链
      </Button>
    </div>
  )
}

export default React.memo(Links)
