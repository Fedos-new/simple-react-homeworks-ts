const initState = {
    loading: false
};

type ActionType = {
    type: string,
    loading: boolean
}


export const loadingReducer = (state = initState, action: ActionType) => {
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