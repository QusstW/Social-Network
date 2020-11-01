import React from "react";
import s from "./TopBackground.module.css";

const TopBackground = () => {
  return (
      <div className={s.TopBackground}>
        <img className={s.background} src="https://miro.medium.com/max/700/0*F4QDsIFbJyaJZzJH.jpg"></img>
      </div>
  )
}

export default TopBackground;