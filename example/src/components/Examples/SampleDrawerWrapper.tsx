import React from 'react';
import { DrawerWrapper } from 'react-drawer-wrapper';

interface ISampleDrawerWrapperProps {
    direction?: 'left' | 'right' | 'top' | 'bottom';
    buttonSize?: 'short' | 'long';
    speed?: number;
    height?: string | undefined;
    width?: string | undefined;
    open: boolean;
    onModeChange: (nextMode: boolean) => void;
}

const SampleDrawerWrapper = ({
    direction,
    buttonSize,
    speed,
    height,
    width,
    open,
    onModeChange
}: ISampleDrawerWrapperProps) => {
    return (
        <DrawerWrapper
            style={{ height: '500px' }}
            direction={direction}
            buttonSize={buttonSize}
            speed={speed}
            height={height}
            width={width}
            open={open}
            onModeChange={onModeChange}
        >
            <DrawerWrapper.Drawer>
                <p>sample drawer</p>
            </DrawerWrapper.Drawer>
            <DrawerWrapper.Content>
                <p>sample content</p>
            </DrawerWrapper.Content>
        </DrawerWrapper>
    );
};

export default SampleDrawerWrapper;
