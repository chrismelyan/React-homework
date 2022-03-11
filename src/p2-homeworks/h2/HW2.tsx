import React, {useState} from 'react'
import Affairs from './Affairs'
import s from './HW2.module.css'

// types
export type AffairPriorityType = 'high' | 'low' | 'middle'
export type AffairType = {
    _id: number
    name: string
    priority: string
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [
    {_id: 1, name: 'REACT', priority: 'high'},
    {_id: 2, name: 'MOVIES', priority: 'low'},
    {_id: 3, name: 'GYM', priority: 'middle'},
    {_id: 4, name: 'BOOKS', priority: 'low'},
    {_id: 5, name: 'WORK', priority: 'high'}
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => {
    if (filter === 'all') return affairs
    else return affairs.filter(af => af.priority === filter)
}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => {
    return affairs.filter(af => af._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
        <div>
            <hr/>
            <h4>Homework 2</h4>

            <div className={s.container}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                    filter={filter}
                />
            </div>

            <hr/>
        </div>
    )
}

export default HW2
