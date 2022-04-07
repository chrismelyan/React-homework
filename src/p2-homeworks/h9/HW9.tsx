import React from 'react'
import Clock from './Clock'
import s from '../../p1-main/m1-ui/u1-app/App.module.css'

function HW9() {
    return (
        <div>
            <hr/>
            <h4>Homework 9</h4>
            <div className={s.centralContainer}>
                <Clock/>
            </div>
            <hr/>
        </div>
    )
}

export default HW9