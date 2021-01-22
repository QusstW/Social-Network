import React from "react";
import { NavLink } from "react-router-dom";
import  s from"./Header.module.css";

const Header = (props) => {
    return(
        <header className={s.header}>
            <div className={s.logo}>Qusst Social Network</div>
            <div>
                {props.isAuth ? props.login : <NavLink to="/login">login</NavLink> }
              
            </div>
        </header>
    )
}

export default Header;