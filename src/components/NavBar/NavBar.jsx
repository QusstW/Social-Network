import React from "react";
import classes from "./NavBar.module.css";

const NavBar = () => {
    return(
      <nav className={classes.NavBar}>
      <div className={classes.item}>
        <a>Профиль</a>
      </div>
      <div className={classes.item}>
        <a>Сообщения</a>
      </div>
      <div className={classes.item}>
        <a>Новости</a>
      </div>
      <div className={classes.item}>
        <a>Музыка</a>
      </div>
      <div className={classes.item}>
        <a>Настройки</a>
      </div>
    </nav>
    )
}

export default NavBar;