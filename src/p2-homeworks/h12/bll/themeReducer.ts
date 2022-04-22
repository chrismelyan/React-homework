export type InitStateType = { theme: string}

const initState: InitStateType = {
    theme: 'dark'
};

export const themeReducer = (state = initState, action: ThemeReducerType): InitStateType => {
    switch (action.type) {
        case 'CHANGE-THEME': {
            return {...state, theme: action.theme};
        }
        default: return state;
    }
};

export type ThemeReducerType = ReturnType<typeof changeThemeC>
export const changeThemeC = (theme: string) => ({type: 'CHANGE-THEME', theme});