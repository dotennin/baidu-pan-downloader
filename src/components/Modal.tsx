import React from 'react'
import { IStandardProps } from './types'
import styled, { css } from 'styled-components/macro'

interface IProps extends IStandardProps {
  open: boolean
  closeButton?: boolean
  close: Function
  header?: React.ReactNode
  noOverlayColor?: boolean
}
const Wrapper = styled.div<{ open: boolean }>`
  background: transparent;
  z-index: 52;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
  ${({ open }) =>
    open &&
    css`
      opacity: 1;
      visibility: visible;
      transition: opacity 0.4s, visibility 0.4s;
    `}
  &::after {
    display: inline-block;
    height: 100%;
    margin-left: -0.05em;
    vertical-align: middle;
    content: '';
  }
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
function Modal({ closeButton, close, children, header, noOverlayColor, ...rest }: IProps) {
  const closeModal = () => {
    typeof close === 'function' && close()
  }
  return (
    <Wrapper className={'dialog'} {...rest}>
      <ModalOverlay noOverlayColor={Boolean(noOverlayColor)} onClick={closeModal} />
      <div
        css={`
          box-sizing: border-box;
          display: inline-block;
          z-index: 20;
          position: relative;
          width: 65vw;
          border-radius: 2px;
          background: #fff;
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);
          vertical-align: middle;
          align-self: center;
        `}
      >
        {header && (
          <div>
            <h3>
              <span>{header}</span>
            </h3>
            {closeButton && (
              <div onClick={closeModal}>
                <span>
                  <span
                    css={`
                      z-index: 20;
                      position: absolute;
                      top: 0;
                      right: 0;
                      width: 35px;
                      color: #95979c !important;
                      font-size: 20px;
                      font-weight: 700;
                      line-height: 35px;
                      text-align: center;
                      text-decoration: none;
                      text-indent: 0;
                      cursor: pointer;
                      &:hover {
                        color: #2b2e38 !important;
                      }
                    `}
                  >
                    ×
                  </span>
                </span>
              </div>
            )}
          </div>
        )}
        <div
          css={`
            max-height: 60vh;
            overflow-y: auto;
          `}
        >
          {children}
        </div>
      </div>
    </Wrapper>
  )
}

export { Modal }
