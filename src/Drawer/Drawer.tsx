import * as React from 'react'
import clsx from 'clsx'
import {
  DEFAULT_DRAWER_STATE,
  DEFAULT_DRAWER_DIRECTION,
  DEFAULT_DRAWER_TRANSITION_SPEED
} from '../Constants'
import './Drawer.css'

export interface IDrawerProps {
  className?: string
  style?: React.CSSProperties
  open?: boolean
  direction?: 'top' | 'bottom' | 'left' | 'right'
  speed?: number
  height?: string
  children?: React.ReactNode | React.ReactNode[]
}

const Drawer = (props: IDrawerProps) => {
  const {
    className,
    style,
    open = DEFAULT_DRAWER_STATE,
    direction = DEFAULT_DRAWER_DIRECTION,
    speed = DEFAULT_DRAWER_TRANSITION_SPEED,
    height = direction === 'left' || direction === 'right' ? '100%' : '20%',
    children
  } = props

  const drawerClassName = open ? 'drawer open' : 'drawer close'
  const transitionMode =
    direction === 'left' || direction === 'right' ? 'width' : 'height'

  return (
    <div
      className={clsx(className, drawerClassName)}
      style={{
        ...style,
        height,
        transition: `${transitionMode} ${speed}s linear, padding ${
          speed / 4
        }s linear, box-shadow ${speed}s linear`
      }}
    >
      <div className='drawer-content'>{children}</div>
    </div>
  )
}

Drawer.displayName = 'Drawer'

export default Drawer
