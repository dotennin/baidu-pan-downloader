import React from 'react'
import { IStandardProps } from './types'
import styled from 'styled-components'

interface IProps extends IStandardProps {
  open: boolean
  closeButton?: boolean
  close: Function
}
const Wrapper = styled.div``
function Modal({ closeButton, open, close, children, ...rest }: IProps) {
  const closeModal = () => {
    typeof close === 'function' && close()
  }
  return (
    <Wrapper className={`modal-wrapper${open ? ' open' : ''}`} {...rest}>
      <div className="modal-overlay" onClick={closeModal} />
      <div className="modal-window">
        <div className="modal-content">{children}</div>
        {closeButton && (
          <span className="modal-close" onClick={closeModal}>
            ×
          </span>
        )}
      </div>
    </Wrapper>
  )
}

export { Modal }
