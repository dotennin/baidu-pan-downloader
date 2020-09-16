import * as React from 'react'
export interface ICollapsible extends React.InputHTMLAttributes<HTMLDivElement> {
  variant: 'arrowLeft' | 'arrowRight' | 'arrowBottom'
  container?: any
  title?: string
  addendum?: string
  update?: any
  expanded?: boolean
  nonIcon?: boolean
  toggleCollapses?: (open: boolean) => void
}
