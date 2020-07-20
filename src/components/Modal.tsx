import React from 'react'
import { IStandardProps } from './types'
import styled from 'styled-components/macro'

interface IProps extends IStandardProps {
  open: boolean
  closeButton?: boolean
  close: Function
  header?: React.ReactNode
}
const Wrapper = styled.div`
  background: transparent;
`
function Modal({ closeButton, open, close, children, header, ...rest }: IProps) {
  const closeModal = () => {
    typeof close === 'function' && close()
  }
  return (
    <Wrapper className={`dialog modal-wrapper${open ? ' open' : ''}`} {...rest}>
      <div className="modal-overlay" onClick={closeModal} />
      <div className="modal-window">
        {header && (
          <div className="dialog-header">
            <h3>
              <span className="dialog-header-title">{header}</span>
            </h3>
            {closeButton && (
              <div className="dialog-control" onClick={closeModal}>
                <span className="dialog-icon dialog-close icon icon-close">
                  <span className="sicon">×</span>
                </span>
              </div>
            )}
          </div>
        )}
        <div className="modal-content">{children}</div>
      </div>
    </Wrapper>
  )
}

export { Modal }
