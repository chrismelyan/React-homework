import React, {ChangeEvent, MouseEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: (e: MouseEvent<HTMLButtonElement>) => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    pressEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, pressEnter} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.someClass // need to fix with (?:)

    return (
        <div>
            <input
                value={name}
                onChange={setNameCallback}
                onKeyPress={pressEnter}
                className={inputClass}/>
            <button onClick={addUser}>add</button>
            <span className={s.totalUsers}>{totalUsers}</span>
            <div className={s.errorText}>{error}</div>


        </div>
    )
}

export default Greeting
