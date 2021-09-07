# react-drawer-wrapper

[![NPM](https://img.shields.io/npm/v/react-drawer-wrapper.svg)](https://www.npmjs.com/package/react-drawer-wrapper) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-drawer-wrapper
```

## Usage

```tsx
import React, { useState } from 'react'

import { DrawerWrapper } from 'react-drawer-wrapper'
import 'react-drawer-wrapper/dist/index.css'

const App = () => {
  const [open, setOpen] = useState(false)

  const handleDrawerMode = (nextMode: boolean) => {
    /*
      callback that gets the next mode of the drawer
      if the drawer is closed, nextMode will be true (open)
      else, nextMode will be false (close)
    */
    setOpen(nextMode)
  }

  return (
    <DrawerWrapper
      style={{}} // any style you want..
      direction='top'
      speed={1}
      open={open}
      onModeChange={handleDrawerMode}
    >
      <DrawerWrapper.Drawer>
        <h1>Here you can enter your drawer content</h1>
      </DrawerWrapper.Drawer>

      <DrawerWrapper.Content>
        <h1>Here you can enter your wrapped content</h1>
      </DrawerWrapper.Content>
    </DrawerWrapper>
  )
}
```

> Made with create-react-library

## License

MIT © [Yitzhakpro](https://github.com/Yitzhakpro)
