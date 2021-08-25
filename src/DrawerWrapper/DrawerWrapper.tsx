import * as React from 'react'
import clsx from 'clsx'
import Drawer from '../Drawer'
import Content from '../Content'
import {
  DEFAULT_DRAWER_STATE,
  DEFAULT_DRAWER_DIRECTION,
  DEFAULT_DRAWER_TRANSITION_SPEED
} from '../Constants'
import './drawerWrapper.css'

interface IDrawerWrapperProps {
  className?: string
  style?: React.CSSProperties
  open: boolean
  direction?: 'top' | 'bottom' | 'left' | 'right'
  speed?: number
  children?: React.ReactNode | React.ReactNode[]
}

const DrawerWrapper = (props: IDrawerWrapperProps) => {
  const {
    className,
    style,
    open = DEFAULT_DRAWER_STATE,
    direction = DEFAULT_DRAWER_DIRECTION,
    speed = DEFAULT_DRAWER_TRANSITION_SPEED,
    children
  } = props

  return (
    <div
      className={clsx(className, 'drawer-wrapper', `drawer-${direction}-mode`)}
      style={style}
    >
      {React.Children.map(children, (child: any) => {
        switch (child.type.displayName) {
          case 'Drawer':
            return React.cloneElement(child, { open, direction, speed })

          case 'Content':
            return React.cloneElement(child, { open, direction, speed })

          default:
            return child
        }
      })}
    </div>
  )
}

DrawerWrapper.Drawer = Drawer
DrawerWrapper.Content = Content

export default DrawerWrapper
