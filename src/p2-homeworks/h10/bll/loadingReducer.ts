type LoadingActionType = {
    type: 'CHANGE-LOADING-STATUS'
    isLoading: boolean
}

const initState = {
    isLoading: false
}

export type InitStateType = {
    isLoading: boolean
}
export type AppStateType = {
    loading: InitStateType
}
type ActionType = LoadingActionType

export const loadingReducer = (state: InitStateType = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case 'CHANGE-LOADING-STATUS': {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): LoadingActionType => {
    return {type: 'CHANGE-LOADING-STATUS', isLoading}
}