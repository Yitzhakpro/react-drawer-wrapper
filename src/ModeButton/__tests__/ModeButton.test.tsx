import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import ModeButton from '../ModeButton';

const mockedOnModeChange = jest.fn;

describe('Basic mode button tests', () => {
    afterEach(cleanup);
    it('Should render mode button', () => {
        render(<ModeButton open={false} onModeChange={mockedOnModeChange} />);

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    it('Should inject given class name', () => {
        const testClass = 'test';

        render(<ModeButton className={testClass} open={false} onModeChange={mockedOnModeChange} />);

        const button = screen.getByRole('button');
        expect(button).toHaveClass(testClass);
    });

    it('Should inject size class to mode button', () => {
        render(
            <>
                <ModeButton open={false} onModeChange={mockedOnModeChange} size='long' />
                <ModeButton open={false} onModeChange={mockedOnModeChange} size='short' />
            </>
        );

        const buttons = screen.getAllByRole('button');
        const sizes = ['long', 'short'];

        for (let i = 0; i < buttons.length; i++) {
            expect(buttons[i]).toHaveClass(sizes[i]);
        }
    });
});
