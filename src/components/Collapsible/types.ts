import * as React from 'react'
export interface ICollapsible extends React.InputHTMLAttributes<HTMLDivElement> {
  open: boolean
  variant: 'arrowLeft' | 'arrowRight' | 'arrowBottom'
  container?: any
  onClick?: (event: React.MouseEvent) => void
  title?: string
  addendum?: string
  children?: any
  update?: any
}
