export const DEFAULT_DRAWER_BTN_SIZE = 'short';
export const DEFAULT_DRAWER_STATE = false; // open (true) - not open (false)
export const DEFAULT_DRAWER_DIRECTION = 'left';
export const DEFAULT_DRAWER_TRANSITION_SPEED = 0.3;

type directionType = 'top' | 'bottom' | 'left' | 'right';

export const getDefaultDrawerHeight = (direction: directionType) => {
    if (direction === 'left' || direction === 'right') {
        return '100%';
    } else {
        return '20%';
    }
};

export const getDefaultDrawerWidth = (direction: directionType) => {
    if (direction === 'left' || direction === 'right') {
        return '30%';
    } else {
        return '100%';
    }
};
