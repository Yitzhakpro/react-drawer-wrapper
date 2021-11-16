import * as React from 'react';
import clsx from 'clsx';

interface IArrowIconProps {
    className?: string;
    height?: string;
    width?: string;
    rotate?: number;
}

const ArrowIcon = (props: IArrowIconProps) => {
    const { className, height, width, rotate } = props;

    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            className={clsx(className, 'h-6 w-6')}
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            height={height}
            width={width}
            style={{ transform: `rotate(${rotate}deg)` }}
        >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
        </svg>
    );
};

export default ArrowIcon;
