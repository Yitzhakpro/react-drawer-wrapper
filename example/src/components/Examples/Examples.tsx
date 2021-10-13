import React, { useState, useEffect } from 'react';
import SampleDrawerWrapper from './SampleDrawerWrapper';
import { Radio, Slider, Divider, Input, Select } from 'antd';
import type { RadioChangeEvent } from 'antd';
import './examples.css';

type directionType = 'left' | 'right' | 'top' | 'bottom';
type btnSizeType = 'long' | 'short';

const Examples = () => {
    // direction & btn size example
    const [directionAndSizeOpen, setDirectionAndSizeOpen] = useState(false);
    const [direction, setDirection] = useState<directionType>('left');
    const [btnSize, setBtnSize] = useState<btnSizeType>('short');

    useEffect(() => {
        if (direction === 'left' || direction === 'right') {
            setBtnSize('short');
        } else {
            setBtnSize('long');
        }
    }, [direction]);

    const onDirectionChange = (e: RadioChangeEvent) => {
        setDirection(e.target.value);
    };

    const onBtnSizeChange = (e: RadioChangeEvent) => {
        setBtnSize(e.target.value);
    };

    const directionHandleMode = (nextMode: boolean) => {
        setDirectionAndSizeOpen(nextMode);
    };

    // speed example
    const [speedOpen, setSpeedOpen] = useState(false);
    const [speed, setSpeed] = useState(0.3);

    const onSpeedChange = (newSpeed: number) => {
        setSpeed(newSpeed);
    };

    const onSpeedHandleMode = (nextMode: boolean) => {
        setSpeedOpen(nextMode);
    };

    // width-height example
    const [sizeOpen, setSizeOpen] = useState(false);

    const [height, setHeight] = useState<number | undefined>(100);
    const [heightType, setHeightType] = useState('%');
    const [width, setWidth] = useState<number | undefined>(30);
    const [widthType, setWidthType] = useState('%');

    const onHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHeight(parseInt(e.target.value));
    };

    const onHeightTypeChange = (value: string) => {
        setHeightType(value);
    };

    const onWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWidth(parseInt(e.target.value));
    };

    const onWidthTypeChange = (value: string) => {
        setWidthType(value);
    };

    const onSizeHandleMode = (nextMode: boolean) => {
        setSizeOpen(nextMode);
    };

    return (
        <div className='examples-page' style={{ margin: '1% 5%' }}>
            <div className='example-section'>
                <h1>Change direction & Button Size</h1>
                <h4>
                    When direction is: left / right, the default button size is
                    "short"
                </h4>
                <h4>
                    When direction is: top / bottom, the default button size is
                    "long"
                </h4>

                <Radio.Group value={direction} onChange={onDirectionChange}>
                    <Radio value='top'>Top</Radio>
                    <Radio value='bottom'>Bottom</Radio>
                    <Radio value='left'>Left</Radio>
                    <Radio value='right'>Right</Radio>
                </Radio.Group>

                <Divider
                    type='vertical'
                    style={{
                        margin: '0 0.5%',
                        background: '#333'
                    }}
                />

                <Radio.Group value={btnSize} onChange={onBtnSizeChange}>
                    <Radio value='long'>Long</Radio>
                    <Radio value='short'>Short</Radio>
                </Radio.Group>

                <SampleDrawerWrapper
                    direction={direction}
                    buttonSize={btnSize}
                    open={directionAndSizeOpen}
                    onModeChange={directionHandleMode}
                />
            </div>
            <div className='example-section'>
                <h1>Change Speed</h1>

                <Slider
                    value={speed}
                    onChange={onSpeedChange}
                    max={5}
                    step={0.1}
                />

                <SampleDrawerWrapper
                    speed={speed}
                    open={speedOpen}
                    onModeChange={onSpeedHandleMode}
                />
            </div>

            <div className='example-section'>
                <h1>Change Height & Width</h1>

                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <span>Height: </span>
                    <Input
                        style={{ width: '15%' }}
                        placeholder='Input a number'
                        type='number'
                        value={height}
                        onChange={onHeightChange}
                    />
                    <Select value={heightType} onChange={onHeightTypeChange}>
                        <Select.Option value='px'>px</Select.Option>
                        <Select.Option value='%'>%</Select.Option>
                        <Select.Option value='vh'>vh</Select.Option>
                    </Select>
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}
                >
                    <span>Width: </span>
                    <Input
                        style={{ width: '15%' }}
                        placeholder='Input a number'
                        type='number'
                        value={width}
                        onChange={onWidthChange}
                    />
                    <Select value={widthType} onChange={onWidthTypeChange}>
                        <Select.Option value='px'>px</Select.Option>
                        <Select.Option value='%'>%</Select.Option>
                        <Select.Option value='vh'>vh</Select.Option>
                    </Select>
                </div>

                <SampleDrawerWrapper
                    height={height + heightType}
                    width={width + widthType}
                    open={sizeOpen}
                    onModeChange={onSizeHandleMode}
                />
            </div>
        </div>
    );
};

export default Examples;
