import React from "react";
import Affair from "./Affair";
import {AffairType, FilterType} from "./HW2";
import s from "../h4/common/c2-SuperButton/SuperButton.module.css";

type AffairsPropsType = { // need to fix any  !done
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter("all")
    };
    const setHigh = () => {
        props.setFilter("high")
    };
    const setMiddle = () => {
        props.setFilter("middle")
    };
    const setLow = () => {
        props.setFilter("low")
    };

    return (
        <div >

            {mappedAffairs}

            <button className={s.default} onClick={setAll}>All</button>
            <button className={s.default} onClick={setHigh}>High</button>
            <button className={s.default} onClick={setMiddle}>Middle</button>
            <button className={s.default} onClick={setLow}>Low</button>
        </div>
    );
}

export default Affairs;