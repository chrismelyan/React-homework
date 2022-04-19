import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onDoubleRange = (value: [val1: number, val2: number]) => {
        const [val1, val2] = value
        setValue1(val1)
        setValue2(val2)
    }
    return (
        <div>
            <hr/>
            <h4>Homework 11</h4>

            <div>
                {/*<span>{value1}</span>*/}
                <SuperRange
                    onChangeRange={setValue1}
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    onChangeRange={onDoubleRange}
                />
                {/*<span>{value2}</span>*/}
            </div>

            <hr/>
        </div>
    )
}

export default HW11
