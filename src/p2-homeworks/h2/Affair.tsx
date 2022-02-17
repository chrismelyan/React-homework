import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affairs.module.css";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => props.deleteAffairCallback(props.affair._id)
    // need to fix

    const priorityClass = s.item + ' ' + s[props.affair.priority]

    return (
        <div className={s.affair}>
            <div className={s.item}>{props.affair.name}  </div>
            <div className={priorityClass}>{props.affair.priority}</div>
            <div>
            <button className={s.item + ' ' + s.button} onClick={deleteCallback}>X</button>
            </div>
        </div>
    )
}

export default Affair
