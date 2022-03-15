import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import s from './common/HW7.module.css'

const arr = ['Minsk', 'Kyev', 'Warsaw']

function HW7() {
    const [value, onChangeOption] = useState<string>(arr[1])

    return (
        <div>
            <hr/>
            <h4>Homeworks 7</h4>

            <div>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div className={s.radio}>
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <hr/>
        </div>
    )
}

export default HW7
