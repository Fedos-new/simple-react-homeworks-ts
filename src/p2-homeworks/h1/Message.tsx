import React from "react";
import s from './Message.module.css'
import {MessageDataType} from "./HW1";




function Message(props: MessageDataType) {


    return (
        <div className="block">
            <img alt="" className={s.image} src={props.avatar}/>
            <div className={s.speech}>
                <p className={s.fio}>{props.name}</p>
                <p className={s.message}>{props.message}</p>
                <p className={s.time}>{props.time}</p>
            </div>
        </div>
    );
}

export default Message;
