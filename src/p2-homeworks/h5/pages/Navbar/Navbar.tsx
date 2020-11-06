import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css"

const NavBar = () =>  {

    return (
        <div className={s.wrapper}>
            <nav className={s.nav}>
                <div className={s.allLinks}>
                    <NavLink to='/pre-junior' activeClassName={s.activeLink} className={s.link}>Pre Junior</NavLink>
                    <NavLink to='/junior' activeClassName={s.activeLink} className={s.link}>Junior</NavLink>
                    <NavLink to='/junior-plus' activeClassName={s.activeLink} className={s.link}>Junior Plus</NavLink>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
