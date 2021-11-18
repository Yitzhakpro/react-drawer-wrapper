import React, { CSSProperties } from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import DrawerWrapper from '../DrawerWrapper';

interface IMockDrawerWrapper {
    className?: string;
    style?: CSSProperties;
    speed?: number;
}

const MockDrawerWrapper = ({ className, style, speed }: IMockDrawerWrapper) => {
    const [open, setOpen] = React.useState(false);

    const handleModeChange = (nextMode: boolean) => {
        setOpen(nextMode);
    };

    return (
        <DrawerWrapper
            className={className}
            style={style}
            open={open}
            onModeChange={handleModeChange}
            speed={speed}
        >
            <DrawerWrapper.Drawer>
                <p>test drawer</p>
            </DrawerWrapper.Drawer>
            <DrawerWrapper.Content>
                <p>test content</p>
            </DrawerWrapper.Content>
        </DrawerWrapper>
    );
};

describe('Basic Drawer wrapper tests', () => {
    afterEach(cleanup);
    it('Should render drawer wrapper', () => {
        render(<MockDrawerWrapper />);

        const drawerWrapperDiv = document.querySelector('.react-drawer-wrapper');
        expect(drawerWrapperDiv).toBeTruthy();
    });

    it('Should inject given className', () => {
        const testClassName = 'testing';
        render(<MockDrawerWrapper className={testClassName} />);

        const drawerWrapperDiv = document.querySelector('.react-drawer-wrapper');
        expect(drawerWrapperDiv).toHaveClass(testClassName);
    });

    it('Should inject given style', () => {
        const backgroundColor = 'green';
        render(<MockDrawerWrapper style={{ backgroundColor }} />);

        const drawerWrapperDiv = document.querySelector('.react-drawer-wrapper');
        expect(drawerWrapperDiv).toHaveStyle(`background-color: ${backgroundColor}`);
    });

    it('Should inject given transition speed', () => {
        const testSpeed = 5;

        render(<MockDrawerWrapper speed={testSpeed} />);

        const contentDiv = document.querySelector('.drawer-wrapper-content');
        expect(contentDiv).toHaveStyle(`transition: width ${testSpeed}s ease-out`);
        const drawerDiv = document.querySelector('.drawer');
        expect(drawerDiv).toHaveStyle(
            `transition: width ${testSpeed}s ease-out, padding ${
                testSpeed / 4
            }s ease-out, box-shadow ${testSpeed}s ease-out`
        );
    });
});

describe('Integration testing', () => {
    afterEach(cleanup);
    it('Content should have class of open/close when mode button is pressed', () => {
        render(<MockDrawerWrapper />);

        const contentDiv = document.querySelector('.drawer-wrapper-content');
        const modeBtn = screen.getByRole('button');

        modeBtn.click();
        expect(contentDiv).toHaveClass('open');
        modeBtn.click();
        expect(contentDiv).toHaveClass('close');
    });

    it('Drawer should have class of open/close when mode button is pressed', () => {
        render(<MockDrawerWrapper />);

        const drawerDiv = document.querySelector('.drawer');
        const modeBtn = screen.getByRole('button');

        modeBtn.click();
        expect(drawerDiv).toHaveClass('open');
        modeBtn.click();
        expect(drawerDiv).toHaveClass('close');
    });
});
