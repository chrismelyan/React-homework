import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(100)

    const onDoubleRange = (data: number[]) => {
        const [min, max] = data
        setMin(min)
        setMax(max)
    }

    const onChangeRange = (val1: number) => {
        setMin(val1)
    }

    return (
        <div>
            <hr/>
            <h4>Homework 11</h4>

            <div>
                <span>{min}</span>
                <SuperRange
                    onChangeRange={onChangeRange}
                />
                <span>{max}</span>
            </div>

            <div style={{marginLeft: '10px'}}>
                <SuperDoubleRange
                    onChangeRange={onDoubleRange}
                    min={min}
                    max={max}
                />
                <span>{min}</span>
                <span style={{marginLeft: '180px'}}>{max}</span>
            </div>

            <hr/>
        </div>
    )
}

export default HW11
