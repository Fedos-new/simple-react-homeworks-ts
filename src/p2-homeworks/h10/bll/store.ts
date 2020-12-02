import {loadingReducer} from "./loadingReducer";
import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
    load: loadingReducer,

});

const store = createStore(reducers);

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store; // for dev
