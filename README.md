# react-drawer-wrapper

[![NPM](https://img.shields.io/npm/v/react-drawer-wrapper.svg)](https://www.npmjs.com/package/react-drawer-wrapper) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-drawer-wrapper
```

## Usage

```tsx
import React, { useState } from 'react';

import { DrawerWrapper } from 'react-drawer-wrapper';
import 'react-drawer-wrapper/dist/index.css';

const App = () => {
    const [open, setOpen] = useState(false);

    const handleDrawerMode = (nextMode: boolean) => {
        /*
      callback that gets the next mode of the drawer
      if the drawer is closed, nextMode will be true (open)
      else, nextMode will be false (close)
    */
        setOpen(nextMode);
    };

    return (
        <DrawerWrapper
            style={{}} // any style you want..
            direction='top'
            speed={1}
            open={open}
            onModeChange={handleDrawerMode}
        >
            <DrawerWrapper.Drawer
                className='' // class name to target the drawer
                style={{}} // any style you want related to the drawer
            >
                <h1>Here you can enter your drawer content</h1>
            </DrawerWrapper.Drawer>

            <DrawerWrapper.Content
                className='' // class name to target the content
                style={{}} // any style you want related to the content
            >
                <h1>Here you can enter your wrapped content</h1>
            </DrawerWrapper.Content>
        </DrawerWrapper>
    );
};
```

## API

| props        | type          | default                                   | description                                                                        |
| ------------ | ------------- | ----------------------------------------- | ---------------------------------------------------------------------------------- |
| className    | string        | null                                      | -                                                                                  |
| style        | CSSProperties | null                                      | React style props                                                                  |
| direction    | string        | `left`                                    | `top` `bottom` `left` `right`                                                      |
| height       | string        | top/bottom - `30%`, left/right - `100%`   | in `%`, `px`, etc...                                                               |
| width        | string        | top/bottom - `100%`, left/right - `20%`   | in `%`, `px`, etc...                                                               |
| buttonSize   | string        | top/bottom - `long`, left/right - `short` | `long` `short`                                                                     |
| speed        | number        | 0.3                                       | speed of drawer opening/closing in seconds                                         |
| open         | boolean       | false                                     | drawer is open or not                                                              |
| onModeChange | func          | () => {}                                  | func that recives the next drawer mode (open/close), `(nextMode: boolean) => void` |

> Made with create-react-library

## License

MIT © [Yitzhakpro](https://github.com/Yitzhakpro)
