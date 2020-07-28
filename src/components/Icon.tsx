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
  return (
    <span
      css={`
        svg {
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0, 0, 0.2, 1);
          &:hover {
            box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
              0px 1px 3px 0px rgba(0, 0, 0, 0.12);
            background-color: rgba(255, 255, 255, 0.56);
          }
        }
      `}
    >
      <CurrentIcon {...rest} />
    </span>
  )
}
