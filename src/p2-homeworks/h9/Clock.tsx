import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./Clock.module.css"

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>();
    const [show, setShow] = useState<boolean>(false);



    const stop = () => {
        clearInterval(timerId)
        // stop

    }
    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true)// show
    };
    const onMouseLeave = () => {
        setShow(false)
        // close
    };




    const stringTime = `${date ? date.toLocaleTimeString() : '00:00:00'}`; // fix with date

    const stringDate = `${date ? date.toLocaleDateString() : ''}`; // fix with date

    return (
        <div className={s.box}>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className={s.timeStyle}
            >
                {stringTime}
            </div>

            {show && (
                <div className={s.dateStyle}>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    );
}

export default Clock;
