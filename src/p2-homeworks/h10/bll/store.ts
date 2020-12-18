import {loadingReducer} from "./loadingReducer";
import { createStore, combineReducers } from "redux";
import {themeReducer} from '../../h12/bll/themeReducer';

const reducers = combineReducers({
    load: loadingReducer,
    themeColor: themeReducer

});

const store = createStore(reducers);

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store; // for dev
