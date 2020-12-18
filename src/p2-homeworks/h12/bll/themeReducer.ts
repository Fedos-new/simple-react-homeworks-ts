const initState = {
    theme: 'dark'
};

type ActionType = {
    type: string,
    theme: string
}


export const themeReducer = (state = initState, action: ActionType) => { // fix any
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