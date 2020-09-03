import * as React from 'react'
import { Ripple } from '../Ripple'
import { IActionButtonProps } from './types'
import { Icon } from '../Icon'
import { Badge } from '../Badge'
import styled, { css } from 'styled-components'

const ActionButtonWrap = styled.div<{ invert: boolean; color: any }>`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  button {
    border-radius: 50%;
    border: none;
    box-sizing: border-box;
    padding: 0;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    box-shadow: unset;
    transition: all 0.2s ease-out;
    width: 32px;
    height: 32px;
    background-color: transparent;
    color: #554d56;
  }
  cursor: pointer;
  i[name='pan_tool'] {
    position: relative;
    left: -1px;
  }
  .badge {
    top: -3px;
    right: -3px;
  }

  i {
    transition: all 0.2s ease-out;
  }
  &:hover label {
    cursor: pointer;
  }

  label {
    transition: all 0.2s ease-out;
    white-space: nowrap;
    margin-top: 1px;
  }

  ${(props) =>
    props.invert
      ? css`
          i {
            color: #ffffff;
          }
          label {
            color: #ffffff;
          }
          &:hover {
            i {
              color: #fff;
            }
            label {
              color: #fff;
            }
            button {
              background-color: transparent;
            }
          }
        `
      : css`
          i {
            color: rgba(0, 0, 0, 0.3);
          }
          label {
            color: rgba(0, 0, 0, 0.3);
          }
          &:hover {
            i {
              color: rgba(0, 0, 0, 0.3);
            }
            label {
              color: rgba(0, 0, 0, 0.3);
            }
            button {
              background-color: rgba(0, 0, 0, 0.3);
            }
          }
        `}
`

const Label = styled.label``

const ActionButtonButton = styled.button<IActionButtonProps>``

const ActionButton = (props: IActionButtonProps) => {
  let cssClass = props.className ? props.className + ' ' : ''
  cssClass += 'actionbutton'

  const { onClick, variant, ...rest } = props
  const color = props.color || 'secondary'

  return (
    <ActionButtonWrap className={cssClass} color={color} variant={variant || 'default'} onClick={onClick} {...rest}>
      <ActionButtonButton>
        {props.badgeContent ? (
          <Badge variant={props.color === 'primary' ? 'blue' : 'green'} badgeContent={props.badgeContent} />
        ) : null}
        <Ripple />
        {props.icon ? <Icon name={props.icon} /> : null}
      </ActionButtonButton>
      {props.children ? <Label>{props.children}</Label> : null}
    </ActionButtonWrap>
  )
}

export { ActionButton }
