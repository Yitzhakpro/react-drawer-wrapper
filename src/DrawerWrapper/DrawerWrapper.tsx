import * as React from 'react'
import clsx from 'clsx'
import Drawer from '../Drawer'
import Content from '../Content'
import {
  DEFAULT_DRAWER_STATE,
  DEFAULT_DRAWER_DIRECTION,
  DEFAULT_DRAWER_TRANSITION_SPEED,
  getDefaultDrawerHeight,
  getDefaultDrawerWidth
} from '../Constants'
import './drawerWrapper.css'

interface IDrawerWrapperProps {
  className?: string
  style?: React.CSSProperties
  height?: string
  width?: string
  buttonSize?: 'short' | 'long'
  open: boolean
  onModeChange: (nextMode: boolean) => any
  direction?: 'top' | 'bottom' | 'left' | 'right'
  speed?: number
  children?: React.ReactNode | React.ReactNode[]
}

const DrawerWrapper = (props: IDrawerWrapperProps) => {
  const {
    className,
    style,
    buttonSize,
    open = DEFAULT_DRAWER_STATE,
    onModeChange,
    direction = DEFAULT_DRAWER_DIRECTION,
    height = getDefaultDrawerHeight(direction),
    width = getDefaultDrawerWidth(direction),
    speed = DEFAULT_DRAWER_TRANSITION_SPEED,
    children
  } = props

  const buttonModeSize =
    direction === 'left' || direction === 'right' ? 'short' : 'long'

  return (
    <div
      className={clsx(className, 'drawer-wrapper', `drawer-${direction}-mode`)}
      style={style}
    >
      {React.Children.map(children, (child: any) => {
        switch (child.type.displayName) {
          case 'Drawer':
            return React.cloneElement(child, {
              open,
              direction,
              height,
              width,
              speed
            })

          case 'Content':
            return React.cloneElement(child, {
              buttonSize: buttonSize ? buttonSize : buttonModeSize,
              open,
              onModeChange,
              direction,
              height,
              width,
              speed
            })

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
