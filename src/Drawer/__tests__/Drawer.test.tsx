import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import Drawer from '../Drawer';

describe('Basic drawer tests', () => {
    afterEach(cleanup);
    it('Should render drawer', () => {
        render(<Drawer />);

        const contentDiv = document.querySelector('.drawer');

        expect(contentDiv).toBeTruthy();
    });

    it('Should inject given class name', () => {
        const testClass = 'test';

        render(<Drawer className={testClass} />);

        const contentDiv = document.querySelector('.drawer');
        expect(contentDiv).toHaveClass(testClass);
    });

    it('Should inject given style', () => {
        const backgroundColor = 'green';
        render(<Drawer style={{ backgroundColor }} />);

        const contentDiv = document.querySelector('.drawer');
        expect(contentDiv).toHaveStyle(`background-color: ${backgroundColor}`);
    });

    it('Should have open class when given open={true} prop', () => {
        render(<Drawer open />);

        const contentDiv = document.querySelector('.drawer');
        expect(contentDiv).toHaveClass('open');
    });

    it('Should have close class when given open={false} prop', () => {
        render(<Drawer open={false} />);

        const contentDiv = document.querySelector('.drawer');
        expect(contentDiv).toHaveClass('close');
    });

    it('Should inject given transition speed', () => {
        const testSpeed = 5;

        render(<Drawer speed={testSpeed} />);

        const contentDiv = document.querySelector('.drawer');
        expect(contentDiv).toHaveStyle(
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
