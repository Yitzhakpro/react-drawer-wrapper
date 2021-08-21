import * as React from 'react'
import clsx from 'clsx'
import './Drawer.css'

export interface IDrawerProps {
  className?: string
  style?: React.CSSProperties
  open?: boolean
  direction?: 'top' | 'bottom' | 'left' | 'right'
  height?: string
  children?: React.ReactNode | React.ReactNode[]
}

const Drawer = (props: IDrawerProps) => {
  const {
    className,
    style,
    open = false,
    direction = 'left',
    height = '100%',
    children
  } = props

  const drawerClassName = open ? 'drawer open' : 'drawer close'

  return (
    <div
      className={clsx(className, drawerClassName)}
      style={{ height, ...style }}
    >
      {children}
      {direction}
    </div>
  )
}

Drawer.displayName = 'Drawer'

export default Drawer
