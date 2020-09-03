import React from 'react'
import { IGridRow } from './types'
import styled from 'styled-components'

export const GridContext = React.createContext({
  colSpacing: 0,
  colVSpacing: 0,
  gridSize: 12,
  mode: false,
})

const StyledDiv = styled.div<IGridRow>`
  box-sizing: border-box;
  flex: 0 1 auto;
  display: ${(props) => props.theme.gridRow.display};
  align-items: ${(props) => (props.alignItems ? props.alignItems : props.theme.gridRow.alignItems)};
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : props.theme.gridRow.justifyContent)};
  flex-wrap: ${(props) => props.theme.gridRow.flexWrap};
  position: ${(props) => props.theme.gridRow.position};

  margin-left: ${(props) => (props.colSpacing ? '-' + String(props.colSpacing / 2) : 0)}px;
  margin-right: ${(props) => (props.colSpacing ? '-' + String(props.colSpacing / 2) : 0)}px;
`

class GridRow extends React.Component<IGridRow> {
  public constructor(props: IGridRow) {
    super(props)
  }

  public render() {
    return (
      <StyledDiv {...this.props} className={this.props.className ? 'gridRow ' + this.props.className : 'gridRow'}>
        <GridContext.Provider
          value={{
            colSpacing: this.props.colSpacing as number,
            colVSpacing: this.props.colVSpacing as number,
            gridSize: this.props.gridSize ? this.props.gridSize : 12,
            mode: this.props.useFlexBasis ? true : false,
          }}
        >
          {this.props.children}
        </GridContext.Provider>
      </StyledDiv>
    )
  }
}

export default GridRow
