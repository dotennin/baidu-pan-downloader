import { HTMLAttributes } from 'react'

export interface IContainer extends HTMLAttributes<HTMLElement> {
  width?: number
  scroll?: boolean
  padding?: string
  direction?: string
  height?: number
}

export interface IColProps {
  reverse?: boolean
  xs?: boolean | number
  sm?: boolean | number
  md?: boolean | number
  lg?: boolean | number
  xsOffset?: number
  smOffset?: number
  mdOffset?: number
  lgOffset?: number
}
export interface IGridRow extends HTMLAttributes<HTMLElement> {
  padding?: number
  colSpacing?: number
  colVSpacing?: number
  gridSize?: number
  alignItems?: string
  justifyContent?: string
  useFlexBasis?: boolean
}

export interface IGridCol extends HTMLAttributes<HTMLDivElement> {
  context?: any
  sizeS?: number
  sizeM?: number
  sizeL?: number
  offsetS?: number
  offsetM?: number
  offsetL?: number
  align?: 'left' | 'center' | 'right'
  valign?: 'top' | 'center' | 'bottom'
  direction?: 'column' | 'row'
}

type IDivProps = HTMLAttributes<HTMLDivElement>

export interface ISpacer extends IDivProps {
  height: number
  width?: number
}

export interface IMultiColProps extends IDivProps {
  spacing?: number
}
