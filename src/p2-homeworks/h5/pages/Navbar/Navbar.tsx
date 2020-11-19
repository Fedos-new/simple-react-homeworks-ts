import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css"
import {PATH} from "../../Routes";

const NavBar = () =>  {

    return (
        <div className={s.wrapper}>
            <nav className={s.nav}>
                <div className={s.allLinks}>
                    <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.activeLink} className={s.link}>Pre Junior</NavLink>
                    <NavLink to={PATH.JUNIOR} activeClassName={s.activeLink} className={s.link}>Junior</NavLink>
                    <NavLink to={PATH.JUNIOR_PlUS} activeClassName={s.activeLink} className={s.link}>Junior Plus</NavLink>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
