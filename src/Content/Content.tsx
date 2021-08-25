import * as React from 'react'
import clsx from 'clsx'
import {
  DEFAULT_DRAWER_STATE,
  DEFAULT_DRAWER_DIRECTION,
  DEFAULT_DRAWER_TRANSITION_SPEED
} from '../Constants'
import './content.css'

export interface IContentProps {
  className?: string
  style?: React.CSSProperties
  open?: boolean
  onModeChange?: (nextMode: boolean) => any
  direction?: string
  speed?: number
  children?: React.ReactNode | React.ReactNode[]
}

const Content = (props: IContentProps) => {
  const {
    className,
    style,
    open = DEFAULT_DRAWER_STATE,
    onModeChange = () => {},
    direction = DEFAULT_DRAWER_DIRECTION,
    speed = DEFAULT_DRAWER_TRANSITION_SPEED,
    children
  } = props

  const standardClassName = `drawer-wrapper-content ${open ? 'open' : 'close'}`
  const transitionMode =
    direction === 'left' || direction === 'right' ? 'width' : 'height'

  return (
    <div
      className={clsx(className, standardClassName)}
      style={{ ...style, transition: `${transitionMode} ${speed}s linear` }}
    >
      <button
        className='drawer-wrapper-mode-btn'
        onClick={() => onModeChange(!open)}
      >
        mode
      </button>
      {children}
    </div>
  )
}

Content.displayName = 'Content'

export default Content
