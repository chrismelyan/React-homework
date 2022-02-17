import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: AffairType []
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const classAll = s.button + ' ' + (props.filter === 'all' ? s.active : '')
    const classHigh = s.button + ' ' + (props.filter === 'high' ? s.active : '')
    const classMiddle = s.button + ' ' + (props.filter === 'middle' ? s.active : '')
    const classLow = s.button + ' ' + (props.filter === 'low' ? s.active : '')



    const setAll = () => props.setFilter('all') // need to fix
    const setHigh = () => props.setFilter('high')
    const setMiddle = () => props.setFilter('middle')
    const setLow = () => props.setFilter('low')

    return (
        <div className={s.affairs}>
            {mappedAffairs}
            <div>
                <button className={classAll} onClick={setAll}>All</button>
                <button className={classHigh} onClick={setHigh}>High</button>
                <button className={classMiddle} onClick={setMiddle}>Middle</button>
                <button className={classLow} onClick={setLow}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
