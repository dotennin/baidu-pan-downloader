import React from 'react'

interface IProps {
  selected?: boolean
}
const Button: React.FC<IProps> = ({ children, selected, ...rest }) => {
  return (
    <a
      className={`g-float-left create-bt-button upload-wrapper g-button${selected ? ' g-button-blue' : ''}`}
      href="javascript:void(0);"
      css={`
        padding-left: 10px;
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
