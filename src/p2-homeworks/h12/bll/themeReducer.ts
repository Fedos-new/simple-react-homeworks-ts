const initState = {
    theme: 'dark'
};
type initStateType = {
    theme: string
}

type ActionType = {
    type: string,
    theme: string
}


export const themeReducer = (state: initStateType = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        case 'THEME': {
            return {
                theme: action.theme
            };
        }
        default:
            return state;
    }
};

export const changeThemeC = (theme: string): ActionType => ({type: 'THEME', theme}); // fix any