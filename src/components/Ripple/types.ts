import { HTMLAttributes } from 'react'

export interface IRippleProps extends HTMLAttributes<HTMLSpanElement> {
  centered?: boolean
  color?: string
}

export interface IRipple {
  [attrName: string]: object
}

export interface IRippleState {
  parent?: EventTarget
  ripples: IRipple
}
