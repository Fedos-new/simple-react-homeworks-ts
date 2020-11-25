import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react";
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        return onChangeOption ? onChangeOption(e.target.value) : ''

    }


    const mappedOptions = options ? options.map((o, i) => (
        <label key={name + "-" + i} className={s.inputRadio}>
            <input
                type={"radio"}
                name={name}
                checked={value === o}
                value={o}
                onChange={onChangeCallback}

            />
            <span className={s.inputRadio_text}>{o}</span>
        </label>
    )) : [];

    return (
        <>
            {mappedOptions}
        </>
    );
}

export default SuperRadio;
