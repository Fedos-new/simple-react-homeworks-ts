import React from "react";
import {AffairType} from "./HW2";
import s from "../h4/common/c2-SuperButton/SuperButton.module.css";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        return props.deleteAffairCallback(props.affair._id)
    };

    return (
        <div>
            {props.affair.name}

            <button className={s.red} onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;