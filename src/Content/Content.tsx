import * as React from 'react'
import clsx from 'clsx'
import './content.css'

export interface IContentProps {
  className?: string
  style?: React.CSSProperties
  open?: boolean
  direction?: string
  speed?: number
  children?: React.ReactNode | React.ReactNode[]
}

const Content = (props: IContentProps) => {
  const {
    className,
    style,
    open = false,
    direction = 'left',
    speed = 0.3,
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
      {children}
    </div>
  )
}

Content.displayName = 'Content'

export default Content
