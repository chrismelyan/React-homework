type LoadingActionType = {
    type: 'CHANGE-LOADING-STATUS'
    isLoading: boolean
}

const initState = {
    isLoading: false
}

export type InitStateType = typeof initState

export const loadingReducer = (state = initState, action: LoadingActionType): InitStateType => {
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