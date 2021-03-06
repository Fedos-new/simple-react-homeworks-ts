import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
    const [value1, setValue1] = useState(20);
    const [value2, setValue2] = useState(95);
    const  onChangeRange= (value: number) => {
        setValue1(value)

    }


    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={onChangeRange}
                    value={value1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                {/*<span>{value1}</span>*/}
                <SuperDoubleRange
                    setValue1={setValue1}
                    setValue2={setValue2}
                    min={value1}
                    max={value2}
                    // сделать так чтоб value1 и value2 изменялось
                />
                {/*<span>{value2}</span>*/}
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    );
}

export default HW11;
