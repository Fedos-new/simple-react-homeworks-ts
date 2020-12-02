import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import preloader from "../h5/pages/assets/preloader.svg"
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import { loadingAC } from "./bll/loadingReducer";

function HW10() {

    const loading = useSelector<AppStoreType>(state => state.load.loading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(()=>dispatch(loadingAC(false)), 2000)
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>
                        <img src={preloader} alt="...loading"/>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
