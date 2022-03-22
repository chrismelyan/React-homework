import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from '../HW7.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (value: string) => void
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
        onChange && onChange(e);

        onChangeOption &&
        onChangeOption(e.currentTarget.value);
    }

    const mappedOptions = options ? options.map((o, i) => (
        <label className={s.radioItem} key={name + '-' + i}>
            <input
                type={'radio'}
                name={name}
                checked={value === o}
                value={o}
                onChange={onChangeCallback}
            />
            {o}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
