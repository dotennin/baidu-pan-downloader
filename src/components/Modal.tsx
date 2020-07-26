import React from 'react'
import { IStandardProps } from './types'
import styled from 'styled-components/macro'

interface IProps extends IStandardProps {
  open: boolean
  closeButton?: boolean
  close: Function
  header?: React.ReactNode
  noOverlayColor?: boolean
}
const Wrapper = styled.div`
  background: transparent;
`
const ModalOverlay = styled.div.attrs({ className: 'modal-overlay' })<{ noOverlayColor: boolean }>`
  z-index: 10;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${({ noOverlayColor }) => (noOverlayColor ? 'transparent' : 'rgba(0, 0, 0, 0.8)')};
`
function Modal({ closeButton, open, close, children, header, noOverlayColor, ...rest }: IProps) {
  const closeModal = () => {
    typeof close === 'function' && close()
  }
  return (
    <Wrapper className={`dialog modal-wrapper${open ? ' open' : ''}`} {...rest}>
      <ModalOverlay noOverlayColor={Boolean(noOverlayColor)} onClick={closeModal} />
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
