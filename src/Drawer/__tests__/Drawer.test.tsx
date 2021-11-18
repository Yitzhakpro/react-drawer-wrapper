import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import Drawer from '../Drawer';

describe('Basic drawer tests', () => {
    afterEach(cleanup);
    it('Should render drawer', () => {
        render(<Drawer />);

        const drawerDiv = document.querySelector('.drawer');

        expect(drawerDiv).toBeTruthy();
    });

    it('Should inject given class name', () => {
        const testClass = 'test';

        render(<Drawer className={testClass} />);

        const drawerDiv = document.querySelector('.drawer');
        expect(drawerDiv).toHaveClass(testClass);
    });

    it('Should inject given style', () => {
        const backgroundColor = 'green';
        render(<Drawer style={{ backgroundColor }} />);

        const drawerDiv = document.querySelector('.drawer');
        expect(drawerDiv).toHaveStyle(`background-color: ${backgroundColor}`);
    });

    it('Should have open class when given open={true} prop', () => {
        render(<Drawer open />);

        const drawerDiv = document.querySelector('.drawer');
        expect(drawerDiv).toHaveClass('open');
    });

    it('Should have close class when given open={false} prop', () => {
        render(<Drawer open={false} />);

        const drawerDiv = document.querySelector('.drawer');
        expect(drawerDiv).toHaveClass('close');
    });

    it('Should inject given transition speed', () => {
        const testSpeed = 5;

        render(<Drawer speed={testSpeed} />);

        const drawerDiv = document.querySelector('.drawer');
        expect(drawerDiv).toHaveStyle(
            `transition: width ${testSpeed}s ease-out, padding ${
                testSpeed / 4
            }s ease-out, box-shadow ${testSpeed}s ease-out`
        );
    });

    it('Should render children of drawer', () => {
        render(
            <Drawer>
                <p>test</p>
            </Drawer>
        );

        const text = screen.getByText(/test/i);
        expect(text).toBeInTheDocument();
    });
});
