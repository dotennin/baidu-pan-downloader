import { ComponentType, Ref, RefObject, ReactNode, CSSProperties } from 'react'

export type IStandardProps = IStyledComponentProps & IStandardStyledProps

export interface IStyledComponentProps {
  as?: ComponentType<any>
  ref?: Ref<any> | RefObject<any>
}

export interface IStandardStyledProps {
  className?: string
  style?: CSSProperties
  children?: ReactNode
}
