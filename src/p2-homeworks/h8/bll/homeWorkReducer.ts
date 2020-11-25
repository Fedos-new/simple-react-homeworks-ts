export type StateType = Array<{
    _id: number
    name: string
    age: number
}>

type ActionType = SortStateType | CheckingAgeStateType

type SortStateType = {
    type: "sort"
    payload: string
}

type CheckingAgeStateType = {
    type: "check"
    payload: number
}


export const homeWorkReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case "sort": {
            let copyState = [...state]
            if (action.payload === "up") {
                return  copyState.sort((a, b) => a.name > b.name ? 1 : -1)
            }
            if (action.payload === "down") {
                return copyState.sort((a, b) => a.name < b.name ? 1 : -1)
            }
            return state
        }
        case "check": {
            return state.filter(a => a.age > action.payload)
        }
        default:
            return state
    }
};