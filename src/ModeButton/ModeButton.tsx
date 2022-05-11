import * as React from 'react';
import clsx from 'clsx';
import { DEFAULT_DRAWER_BTN_SIZE } from '../Constants';
import Arrow from '../assets/icons/ArrowIcon';
import type { ButtonSize, OnModeChange } from '../types';
import './ModeButton.css';

interface IModeButtonProps {
    className?: string;
    size?: ButtonSize;
    open: boolean;
    onModeChange: OnModeChange;
}

const ModeButton = (props: IModeButtonProps) => {
    const { className, size = DEFAULT_DRAWER_BTN_SIZE, open, onModeChange } = props;

    return (
        <button
            className={clsx(className, 'react-drawer-wrapper-mode-btn', size)}
            onClick={() => onModeChange(!open)}
        >
            <Arrow height='20px' width='20px' />
        </button>
    );
};

export default ModeButton;
