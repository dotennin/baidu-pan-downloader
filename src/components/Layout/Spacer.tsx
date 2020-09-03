import { ISpacer } from './types'
import React from 'react'
import styled from 'styled-components'

const SpacerDiv = styled.div<ISpacer>`
  ${({ width }) => (width ? 'width:' + width + 'px;' : '')}
  ${({ width }) => (width ? 'min-width:' + width + 'px;' : '')}
  ${({ width }) => (width ? 'max-width:' + width + 'px;' : '')}
  ${({ height }) => (height ? 'height:' + height + 'px;' : '')}
  ${({ height }) => (height ? 'min-height:' + height + 'px;' : '')}
  ${({ height }) => (height ? 'width:100%;min-width: 1px;' : '')}
  ${({ width }) => (width ? 'height:100%;min-height: 1px;' : '')}
`

const Spacer = ({ ...props }: ISpacer) => {
  return <SpacerDiv {...props} className={'spacer'} />
}

export default Spacer
