import * as React from 'react'
import './content.css'

export interface IContentProps {
  children?: React.ReactNode | React.ReactNode[]
}

const content = ({ children }: IContentProps) => {
  return <div>{children}</div>
}

export default content
