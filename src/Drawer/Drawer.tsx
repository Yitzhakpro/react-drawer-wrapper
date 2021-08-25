import * as React from 'react'
import clsx from 'clsx'
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
    open = false,
    direction = 'left',
    speed = 0.5,
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
        transition: `${transitionMode} ${speed}s linear`
      }}
    >
      {children}
      {direction}
    </div>
  )
}

Drawer.displayName = 'Drawer'

export default Drawer
