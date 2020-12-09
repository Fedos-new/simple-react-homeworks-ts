import React from 'react';
import InputRange, {Range} from 'react-input-range';
import './index.css'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    setValue1: (value: number) => void
    setValue2: (value: number) => void
    min: number
    max: number
    disable?: boolean
    step?: number;
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        setValue1, setValue2,min,max, disable

        // min, max, step, disable, ...
    }

) => {
    // сделать самому, можно подключать библиотеки

    const onChangeValues = (values: Range | number) => {
        if(typeof values !== 'number'){
            setValue2(values.max)
            setValue1(values.min)
        }
    }

    return (
        <>
            <span>{min}</span>
            <InputRange
                maxValue={100}
                minValue={0}
                onChange = {onChangeValues}
                value = {{min,max}}
                draggableTrack
            />
            <span>{max}</span>
            <p>DoubleRange</p>
        </>
    );
}

export default SuperDoubleRange;
