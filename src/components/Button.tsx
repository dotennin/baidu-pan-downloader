import React from 'react'
import { IStandardProps } from './types'

interface IProps extends IStandardProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  selected?: boolean
  disabled?: boolean
}
const Button: React.FC<IProps> = ({ children, selected, disabled, ...rest }) => {
  return (
    <a
      className={`g-float-left create-bt-button upload-wrapper g-button${selected ? ' g-button-blue' : ''}`}
      href="javascript:void(0);"
      css={`
        padding-left: 10px;
        ${disabled && 'pointer-events: none; color: gray !important;'}
      `}
      {...rest}
    >
      <span
        className="g-button-right"
        css={`
          padding-right: 10px;
        `}
      >
        <span className="text">{children}</span>
      </span>
    </a>
  )
}

export default Button
