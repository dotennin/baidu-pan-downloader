import { Component } from 'react'
import React from 'react'
import { ITabProps } from './types'
import styled from 'styled-components'

const TabElement = styled.div.attrs((props) => ({
  placeholder: props.placeholder,
}))``

export class Tab extends Component<ITabProps> {
  public render() {
    return <TabElement {...this.props} />
  }
}
