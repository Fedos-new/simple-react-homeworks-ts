import React from "react";
import s from "./Error404.module.css"
import error from "../assets/404_error.png";

function Error404() {
    return (
        <div>
            <img src={error} className={s.img} alt="error"/>
            {/*<div>404</div>*/}
            {/*<div>Page not found!</div>*/}
            {/*<div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>*/}
        </div>
    );
}

export default Error404;
