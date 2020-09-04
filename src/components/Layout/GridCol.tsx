import React from 'react'
import { GridContext } from './GridRow'
import { IGridCol } from './types'
import styled from 'styled-components'

let gridSize = 12 // default only

function calcBasis(size?: number, spacing: number = 0, mode?: string) {
  if (size) {
    return mode ? 'flex-basis' : 'width' + ': calc(' + (size / gridSize) * 100 + '% - ' + Number(spacing) + 'px);'
  } else {
    return ''
  }
}

function calcOffset(size: any) {
  if (isNaN(size)) {
    return ''
  }
  if (size > 0) {
    return 'margin-left: ' + (size / gridSize) * 100 + '%;'
  } else {
    return 'margin-left:0;'
  }
}

function calcAlign(direction?: string) {
  if (direction === 'left' || direction === 'top') {
    direction = 'start'
  } else if (direction === 'right' || direction === 'bottom') {
    direction = 'flex-end'
  } else {
    direction = 'center'
  }

  return direction
}

const StyledDiv = styled.div<IGridCol & { context: any }>`
  box-sizing: content-box;
  position: relative;
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'column')};
  flex-wrap: wrap;
  justify-content: ${(props) =>
    props.direction && props.direction === 'row' ? calcAlign(props.align) : calcAlign(props.valign)};
  align-items: ${(props) =>
    props.direction && props.direction === 'row' ? calcAlign(props.valign) : calcAlign(props.align)};

  padding-left: ${(props) =>
    props.context.colSpacing && props.context.colSpacing > 0 ? props.context.colSpacing / 2 : 0}px;

  padding-right: ${(props) =>
    props.context.colSpacing && props.context.colSpacing > 0 ? props.context.colSpacing / 2 : 0}px;

  padding-bottom: ${(props) =>
    props.context.colVSpacing && props.context.colVSpacing > 0 ? props.context.colVSpacing : 0}px;

  ${(props) => calcBasis(props.sizeL, props.context.colSpacing, props.context.mode)}

  ${(props) => calcOffset(typeof props.offsetL === 'undefined' ? null : props.offsetL)};

  @media screen and (max-width: 992px) {
    ${(props) => calcBasis(props.sizeM, props.context.colSpacing, props.context.mode)}
    ${(props) => calcOffset(props.offsetM === null ? null : props.offsetM)};
  }

  @media screen and (max-width: 550px) {
    ${(props) => calcBasis(props.sizeS, props.context.colSpacing, props.context.mode)}
    ${(props) => calcOffset(props.offsetS === null ? null : props.offsetS)};
  }
`

class GridCol extends React.Component<IGridCol> {
  public static contextType = GridContext
  public constructor(props: IGridCol) {
    super(props)
  }

  public render() {
    gridSize = this.context.gridSize ? this.context.gridSize : 12
    return (
      <StyledDiv
        context={this.context}
        {...this.props}
        className={this.props.className ? 'gridCol ' + this.props.className : 'gridCol'}
      >
        {this.props.children}
      </StyledDiv>
    )
  }
}

export default GridCol
