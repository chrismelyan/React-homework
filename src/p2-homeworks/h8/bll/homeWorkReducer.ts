import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: homeWorkReducerType): any => { // need to fix any
    switch (action.type) {
        case 'sortUp': {
            return {...state.sort((a, b) => a.age < b.age ? 1 : -1)}
        }
        case 'sortDown':
            return {...state.sort((a, b) => a.age < b.age ? -1 : 1)}
        case 'check': {
            return state.filter(el => el.age > action.payload)
        }
        default: return state
    }
}

export type homeWorkReducerType = sortUpACType | sortDownACType | checkACType

export type sortUpACType = ReturnType<typeof sortUpAC>
export const sortUpAC = () => {
    return {
        type: 'sortUp',
        payload: 'up'
    } as const
}
export type sortDownACType = ReturnType<typeof sortDownAC>
export const sortDownAC = () => {
    return {
        type: 'sortDown',
        payload: 'down'
    } as const
}
export type checkACType = ReturnType<typeof checkAC>
export const checkAC = () => {
    return {
        type: 'check',
        payload: 18
    } as const
}