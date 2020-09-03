import * as React from 'react'
import { ReactComponent as O } from '../assets/icons/open_in_new-24px.svg'
import { ReactComponent as C } from '../assets/icons/clear-24px.svg'
import { ReactComponent as PA } from '../assets/icons/pause-24px.svg'
import { ReactComponent as P } from '../assets/icons/play_arrow-24px.svg'
import { ReactComponent as S } from '../assets/icons/stop-24px.svg'
import { ReactComponent as keyboardArrowUp } from '../assets/icons/keyboard_arrow_up.svg'
import { ReactComponent as keyboardArrowDown } from '../assets/icons/keyboard_arrow_down.svg'
import { IStandardProps } from './types'

type Props = IStandardProps &
  React.SVGAttributes<HTMLOrSVGElement> & {
    name: 'clear' | 'open_in_new' | 'pause' | 'play_arrow' | 'stop' | 'keyboard_arrow_up' | 'keyboard_arrow_down'
  }

const IconLoader: Record<Props['name'], React.FunctionComponent> = {
  open_in_new: O,
  clear: C,
  stop: S,
  pause: PA,
  play_arrow: P,
  keyboard_arrow_up: keyboardArrowUp,
  keyboard_arrow_down: keyboardArrowDown,
}

export const Icon: React.FC<Props> = ({ name, ...rest }) => {
  const CurrentIcon = IconLoader[name]
  return (
    <span
      css={`
        svg {
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0, 0, 0.2, 1);
        }
      `}
    >
      <CurrentIcon {...rest} />
    </span>
  )
}
