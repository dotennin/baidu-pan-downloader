import { HTMLAttributes } from 'react'

export type BadgeVariant = 'green' | 'white'

export interface IBadgeProps extends HTMLAttributes<HTMLElement> {
  badgeContent?: number | string
  variant?: string
  top?: number
  right?: number
  showZero?: boolean
}
