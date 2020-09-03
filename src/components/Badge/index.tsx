import * as React from 'react'
import { IBadgeProps } from './types'
import styled from 'styled-components'

const StyledSpan = styled.span<IBadgeProps>`
  display: ${(props) => (!props.badgeContent && !props.showZero ? 'none' : 'block')};
  top: ${(props) => props.top || 0}px;
  right: ${(props) => props.right || 0}px;
  ${(props) => props.theme.badge}
`

class Badge extends React.Component<IBadgeProps> {
  public render() {
    const { props } = this
    return (
      <StyledSpan className={'badge ' + props.variant} {...props}>
        {typeof props.badgeContent === 'number' && props.badgeContent > 99
          ? '99+'
          : !props.badgeContent
          ? '0'
          : props.badgeContent}
      </StyledSpan>
    )
  }
}

export { Badge }
