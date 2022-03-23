import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: homeWorkReducerType): UserType[] => {
    switch (action.type) {
        case 'sortUp': {
            return [...state.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)]
        }
        case 'sortDown':
            return [...state.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)]
        case 'check': {
            return state.filter(el => el.age > action.payload.age)
        }
        default: return state
    }
}

export type homeWorkReducerType = sortUpACType | sortDownACType | checkACType

export type sortUpACType = ReturnType<typeof sortUpAC>
export const sortUpAC = () => {
    return {
        type: 'sortUp'
    } as const
}
export type sortDownACType = ReturnType<typeof sortDownAC>
export const sortDownAC = () => {
    return {
        type: 'sortDown'
    } as const
}
export type checkACType = ReturnType<typeof checkAC>
export const checkAC = (age: number) => {
    return {
        type: 'check',
        payload: {age}
    } as const
}