import { ReactElement } from 'react'
import * as React from 'react'
import { IStandardProps } from '../types'

export interface ITabsProps extends IStandardProps {
  disabled?: boolean
  onChange?: (item: React.ReactElement<ITabProps>, activeTab: number) => void
  children: ReactElement<ITabProps>[]
  activeTab: number
  error?: boolean
}

export interface ITabProps extends IStandardProps {
  name: string
  error?: boolean
}
