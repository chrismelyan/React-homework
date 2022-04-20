import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import {Box, Slider} from "@mui/material";


type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange: (data: number[]) => void
    min: number
    max: number
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, min, max
    }
) => {
    const value = [min, max];
    const onChange = (event: Event, value: number | number[]) => {
        onChangeRange(value as number[])
    }

    return (
        <>
            <Box sx={{ width: 300 }}>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={onChange}
                valueLabelDisplay="auto"

            />
            </Box>
        </>
    )
}

export default SuperDoubleRange
