import * as React from 'react'
import './Drawer.css'

export interface IDrawerProps {
  open?: boolean
  height?: string
  children?: React.ReactNode | React.ReactNode[]
}

const Drawer = (props: IDrawerProps) => {
  const { open = false, height = '100%', children } = props
  const drawerClassName = open ? 'drawer open' : 'drawer close'

  return (
    <div className={drawerClassName} style={{ height }}>
      {children}
    </div>
  )
}

export default Drawer
