import * as React from 'react';
import clsx from 'clsx';
import {
    DEFAULT_DRAWER_STATE,
    DEFAULT_DRAWER_DIRECTION,
    DEFAULT_DRAWER_TRANSITION_SPEED,
    getDefaultDrawerHeight,
    getDefaultDrawerWidth
} from '../Constants';
import './Drawer.css';

export interface IDrawerProps {
    className?: string;
    style?: React.CSSProperties;
    open?: boolean;
    direction?: 'top' | 'bottom' | 'left' | 'right';
    speed?: number;
    height?: string;
    width?: string;
    children?: React.ReactNode | React.ReactNode[];
}

const Drawer = (props: IDrawerProps) => {
    const {
        className,
        style,
        open = DEFAULT_DRAWER_STATE,
        direction = DEFAULT_DRAWER_DIRECTION,
        speed = DEFAULT_DRAWER_TRANSITION_SPEED,
        height = getDefaultDrawerHeight(direction),
        width = getDefaultDrawerWidth(direction),
        children
    } = props;

    const drawerClassName = open ? 'drawer open' : 'drawer close';
    const directionMode = direction === 'left' || direction === 'right' ? 'width' : 'height';

    return (
        <div
            className={clsx(drawerClassName, className)}
            style={{
                ...style,
                height,
                width,
                transition: `${directionMode} ${speed}s ease-out, padding ${
                    speed / 4
                }s ease-out, box-shadow ${speed}s ease-out`
            }}
        >
            <div className='drawer-content'>{children}</div>
        </div>
    );
};

Drawer.displayName = 'Drawer';

export default Drawer;
