import * as React from 'react'
import { ReactComponent as open_in_new } from '../assets/icons/open_in_new-24px.svg'
import { ReactComponent as clear } from '../assets/icons/clear-24px.svg'
import { ReactComponent as pause } from '../assets/icons/pause-24px.svg'
import { ReactComponent as play_arrow } from '../assets/icons/play_arrow-24px.svg'
import { ReactComponent as stop } from '../assets/icons/stop-24px.svg'
import { ReactComponent as keyboard_arrow_up } from '../assets/icons/keyboard_arrow_up-24px.svg'
import { ReactComponent as keyboard_arrow_down } from '../assets/icons/keyboard_arrow_down-24px.svg'
import { ReactComponent as keyboard_arrow_left } from '../assets/icons/keyboard_arrow_left-24px.svg'
import { ReactComponent as keyboard_arrow_right } from '../assets/icons/keyboard_arrow_right-24px.svg'
import { IStandardProps } from './types'

type Props = IStandardProps &
  React.SVGAttributes<HTMLOrSVGElement> & {
    name:
      | 'clear'
      | 'open_in_new'
      | 'pause'
      | 'play_arrow'
      | 'stop'
      | 'keyboard_arrow_up'
      | 'keyboard_arrow_down'
      | 'keyboard_arrow_left'
      | 'keyboard_arrow_right'
  }

const IconLoader: Record<Props['name'], React.FunctionComponent> = {
  open_in_new,
  clear,
  stop,
  pause,
  play_arrow,
  keyboard_arrow_up,
  keyboard_arrow_down,
  keyboard_arrow_left,
  keyboard_arrow_right,
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
