import * as React from 'react'
import clsx from 'clsx'
import './content.css'

export interface IContentProps {
  className?: string
  style?: React.CSSProperties
  open?: boolean
  speed?: number
  children?: React.ReactNode | React.ReactNode[]
}

const Content = (props: IContentProps) => {
  const { className, style, open = false, speed = 0.5, children } = props

  const standardClassName = `drawer-wrapper-content ${open ? 'open' : 'close'}`

  return (
    <div
      className={clsx(className, standardClassName)}
      style={{ ...style, transition: `width ${speed}s linear` }}
    >
      {children}
    </div>
  )
}

Content.displayName = 'Content'

export default Content
