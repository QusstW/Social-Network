import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={classes.NavBar}>
      <div className={classes.item}>
        <NavLink to="/Profile" activeClassName={classes.active}>Профиль</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/Dialogs" activeClassName={classes.active}>Сообщения</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/News" activeClassName={classes.active}>Новости</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/Music" activeClassName={classes.active}>Музыка</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/Settings" activeClassName={classes.active}>Настройки</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/Users" activeClassName={classes.active}>Пользователи</NavLink>
      </div>
    </nav>
  )
}

export default NavBar;