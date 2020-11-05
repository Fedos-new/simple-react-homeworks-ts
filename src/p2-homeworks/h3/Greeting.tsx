import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";
import z from "../h4/common/c2-SuperButton/SuperButton.module.css";
import x from "../h4/common/c1-SuperInputText/SuperInputText.module.css";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error !== '' ? x.errorInput : x.superInput


    return (
        <div className={s.wrapper}>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <button className={z.red} onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <span className={s.errorMessage}>{error}</span>
        </div>
    );
}

export default Greeting;
