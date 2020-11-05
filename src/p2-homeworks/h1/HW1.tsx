import React from "react";
import Message from "./Message";

const messageData = {
    avatar: "https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg",
    name: "Ivanov Ivan Ivanovich",
    message: 'Чем отличается "==" от "==="? Строгое сравнение "===" сравнивает типы. А "==" нестрогое сравнивает значения',
    time: "22:00",
};

export type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}


function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            should work (должно работать)

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    );
}

export default HW1;
