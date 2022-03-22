import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople)


    const finalPeople = people.map((p: UserType) => (
        <div key={p._id}>
            <span>
                {p.name}
                {p.age}
            </span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sortUp', payload: 'up'}));
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sortDown', payload: 'down'}));
    const check18 = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}));

    return (
        <div>
            <hr/>
            <h4>Homework 8</h4>

            {finalPeople}

            <div>
                <SuperButton onClick={sortUp}>sort up</SuperButton>
                <SuperButton onClick={sortDown}>sort down</SuperButton>
                <SuperButton onClick={check18}>check 18</SuperButton>
            </div>

            <hr/>
        </div>
    )
}

export default HW8
