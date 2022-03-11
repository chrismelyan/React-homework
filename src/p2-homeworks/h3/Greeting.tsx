import React, {ChangeEvent, MouseEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: (e: MouseEvent<HTMLButtonElement>) => void
    error: string
    totalUsers: number
    pressEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, pressEnter} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.input

    return (
        <div className={s.greeting}>
            <div>
                <input
                    value={name}
                    onChange={setNameCallback}
                    onKeyDown={pressEnter}
                    className={inputClass}
                    onBlur={setNameCallback}
                />
                <div className={s.errorText}>{error}</div>
            </div>
            <button onClick={addUser} className={s.button} disabled={!name}>add</button>
            <div className={s.totalUsers}>{totalUsers}</div>
        </div>
    )
}

export default Greeting
