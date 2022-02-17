import React, {ChangeEvent, useState, MouseEvent, KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
            setName(e.currentTarget.value)
    }

    const pressEnter = (e: KeyboardEvent<HTMLButtonElement>) => {
        if(e.key === 'Enter') {
            addUserCallback(name)
            alert(`Hello ${name}!`)
            setName("")
        }
    }

    if (name === null || name === ' ') {
        setError("Name is required")
        setName('')
    }

    const addUser = (e: MouseEvent<HTMLButtonElement>) => {
            addUserCallback(name)
            alert(`Hello ${name}!`)
            setName("")
    }

    let totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            pressEnter={pressEnter}
        />
    )
}

export default GreetingContainer
