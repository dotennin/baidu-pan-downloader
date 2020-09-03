import * as React from 'react'
import { IStandardProps } from '../types'
import { Icon } from '../Icon'

type variant = 'default' | 'icon' | 'horizontal'
export interface IActionButtonProps extends IStandardProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large' | 'menu'
  color?: 'inherit' | 'primary' | 'secondary' | 'gray' | 'default'
  variant?: variant
  invert?: boolean
  icon?: React.ComponentProps<typeof Icon>['name']
  badgeContent?: number
  badgeVariant?: 'green' | 'white' | 'blue'
  text?: any
}
