import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import Content from '../Content';

describe('Basic conent tests', () => {
    afterEach(cleanup);
    it('Should render content', () => {
        render(<Content />);

        const contentDiv = document.querySelector('.drawer-wrapper-content');

        expect(contentDiv).toBeTruthy();
    });

    it('Should inject given class name', () => {
        const testClass = 'test';

        render(<Content className={testClass} />);

        const contentDiv = document.querySelector('.drawer-wrapper-content');
        expect(contentDiv).toHaveClass(testClass);
    });

    it('Should inject given style', () => {
        const backgroundColor = 'green';
        render(<Content style={{ backgroundColor }} />);

        const contentDiv = document.querySelector('.drawer-wrapper-content');
        expect(contentDiv).toHaveStyle(`background-color: ${backgroundColor}`);
    });

    it('Should have open class when given open={true} prop', () => {
        render(<Content open />);

        const contentDiv = document.querySelector('.drawer-wrapper-content');
        expect(contentDiv).toHaveClass('open');
    });

    it('Should have close class when given open={false} prop', () => {
        render(<Content open={false} />);

        const contentDiv = document.querySelector('.drawer-wrapper-content');
        expect(contentDiv).toHaveClass('close');
    });

    it('Should inject given transition speed', () => {
        const testSpeed = 5;

        render(<Content speed={testSpeed} />);

        const contentDiv = document.querySelector('.drawer-wrapper-content');
        expect(contentDiv).toHaveStyle(`transition: width ${testSpeed}s ease-out`);
    });

    it('Should render children of content', () => {
        render(
            <Content>
                <p>test</p>
            </Content>
        );

        const text = screen.getByText(/test/i);
        expect(text).toBeInTheDocument();
    });
});

describe('Integration content testing', () => {});
