import * as React from 'react'
import clsx from 'clsx'
import {
  DEFAULT_DRAWER_BTN_SIZE,
  DEFAULT_DRAWER_STATE,
  DEFAULT_DRAWER_DIRECTION,
  DEFAULT_DRAWER_TRANSITION_SPEED
} from '../Constants'
import ModeButton from '../ModeButton'
import './content.css'

export interface IContentProps {
  className?: string
  style?: React.CSSProperties
  buttonSize?: 'short' | 'long'
  open?: boolean
  onModeChange?: (nextMode: boolean) => any
  direction?: string
  speed?: number
  height?: string
  width?: string
  children?: React.ReactNode | React.ReactNode[]
}

const Content = (props: IContentProps) => {
  const {
    className,
    style,
    buttonSize = DEFAULT_DRAWER_BTN_SIZE,
    open = DEFAULT_DRAWER_STATE,
    onModeChange = () => {},
    direction = DEFAULT_DRAWER_DIRECTION,
    speed = DEFAULT_DRAWER_TRANSITION_SPEED,
    height = direction === 'left' || direction === 'right' ? '100%' : '20%',
    width = direction === 'left' || direction === 'right' ? '30%' : '100%',
    children
  } = props

  const standardClassName = `drawer-wrapper-content ${open ? 'open' : 'close'}`
  const transitionMode =
    direction === 'left' || direction === 'right' ? 'width' : 'height'

  return (
    <div
      className={clsx(className, standardClassName)}
      style={{
        ...style,
        [transitionMode]: `calc(100% - ${
          transitionMode === 'width' ? width : height
        })`,
        transition: `${transitionMode} ${speed}s ease-out`
      }}
    >
      <ModeButton size={buttonSize} open={open} onModeChange={onModeChange} />
      {children}
    </div>
  )
}

Content.displayName = 'Content'

export default Content
