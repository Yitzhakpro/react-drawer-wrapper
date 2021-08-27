import * as React from 'react'
import clsx from 'clsx'
import './ModeButton.css'

interface IModeButtonProps {
  className?: string
  size?: 'short' | 'long'
  open: boolean
  onModeChange: (nextMode: boolean) => void
}

const ModeButton = (props: IModeButtonProps) => {
  const { className, size = 'short', open, onModeChange } = props

  return (
    <button
      className={clsx(className, 'drawer-wrapper-mode-btn')}
      onClick={() => onModeChange(!open)}
    >
      {size}
    </button>
  )
}

export default ModeButton
