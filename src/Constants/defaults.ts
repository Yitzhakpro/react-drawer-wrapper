import { Direction } from '../types';

export const DEFAULT_DRAWER_BTN_SIZE = 'short';
export const DEFAULT_DRAWER_STATE = false; // open (true) - not open (false)
export const DEFAULT_DRAWER_DIRECTION = 'left';
export const DEFAULT_DRAWER_TRANSITION_SPEED = 0.3;

export const getDefaultDrawerHeight = (direction: Direction): '100%' | '20%' => {
    if (direction === 'left' || direction === 'right') {
        return '100%';
    } else {
        return '20%';
    }
};

export const getDefaultDrawerWidth = (direction: Direction): '100%' | '30%' => {
    if (direction === 'left' || direction === 'right') {
        return '30%';
    } else {
        return '100%';
    }
};
