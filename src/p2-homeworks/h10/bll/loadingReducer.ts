const initState = {
    loading: false
};

type initStateType = {
    loading: boolean
}

type ActionType = {
    type: string,
    loading: boolean
}


export const loadingReducer = (state:initStateType = initState, action: ActionType): initStateType => {
    switch (action.type) {
        case "LOADING": {
            return {
                loading: action.loading
            };
        }
        default: return state;
    }
};

export const loadingAC = (loading:boolean): ActionType => ({type:"LOADING", loading});