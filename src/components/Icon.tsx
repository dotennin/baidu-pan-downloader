import * as React from 'react'
import { ReactComponent as O } from '../assets/icons/open_in_new-24px.svg'
import { ReactComponent as C } from '../assets/icons/clear-24px.svg'
import { ReactComponent as PA } from '../assets/icons/pause-24px.svg'
import { ReactComponent as P } from '../assets/icons/play_arrow-24px.svg'
import { ReactComponent as S } from '../assets/icons/stop-24px.svg'
import { IStandardProps } from './types'

type Props = IStandardProps &
  React.SVGAttributes<HTMLOrSVGElement> & {
    name: 'clear' | 'open_in_new' | 'pause' | 'play_arrow' | 'stop'
  }

const IconLoader: Record<Props['name'], React.FunctionComponent> = {
  open_in_new: O,
  clear: C,
  stop: S,
  pause: PA,
  play_arrow: P,
}
export const Icon: React.FC<Props> = ({ name, ...rest }) => {
  const CurrentIcon = IconLoader[name]
  return <CurrentIcon {...rest} />
}
