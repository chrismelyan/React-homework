import React, {ChangeEvent, MouseEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: (e: MouseEvent<HTMLButtonElement>) => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    pressEnter: (e: KeyboardEvent<HTMLButtonElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, pressEnter} // деструктуризация пропсов
) => {
    const inputClass = s.error // need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <span>{error}</span>
            <button onClick={addUser} onKeyPress={pressEnter}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
