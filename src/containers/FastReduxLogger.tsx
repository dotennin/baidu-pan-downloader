import { StoreActions } from 'fast-redux-logger'
import React from 'react'
import { store, IStoreState } from '../store'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import interfaceModule from '../modules/interfaceModule'

const Wapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 10;
  width: 100%;
`

export const FastReduxLogger = () => {
  const isDebug = useSelector((store: IStoreState) => store.interface.debug)
  const dispatch = useDispatch()
  return (
    <Wapper>
      <StoreActions
        isOpen={isDebug}
        onClose={() => dispatch(interfaceModule.actions.change({ debug: false }))}
        store={store}
      />
    </Wapper>
  )
}
