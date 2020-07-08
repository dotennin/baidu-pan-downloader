import { ComponentType, CSSProperties, Ref, RefObject, ReactNode } from 'react'

/**
 * All standard components exposed by `uap-ui-component` are `StyledComponents` with
 * certain `as` and `ref`
 */
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
