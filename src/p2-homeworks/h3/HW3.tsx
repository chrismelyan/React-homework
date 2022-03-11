import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

// types
export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([])

    const addUserCallback = (name: string) => {
        setUsers([...users, {_id: v1(), name: name}])
    }

    return (
        <div>
            <hr/>
            Homeworks 3

            <GreetingContainer
                users={users}
                addUserCallback={addUserCallback}
            />
            {/*<ol>*/}
            {/*    {users.map(u => <li key={u._id}>{u.name}</li>)}*/}
            {/*</ol>*/}
            <hr/>
        </div>
    )
}

export default HW3
