import * as React from 'react'
import clsx from 'clsx'
import Drawer from '../Drawer'
import Content from '../Content'
import './drawerWrapper.css'

interface IDrawerWrapperProps {
  className?: string
  direction?: 'left' | 'right'
  children?: React.ReactNode | React.ReactNode[]
}

const DrawerWrapper = (props: IDrawerWrapperProps) => {
  const { className, direction = 'left', children } = props

  return (
    <div className={clsx(className, `drawer-${direction}`)}>{children}</div>
  )
}

DrawerWrapper.Drawer = Drawer
DrawerWrapper.Content = Content

export default DrawerWrapper
