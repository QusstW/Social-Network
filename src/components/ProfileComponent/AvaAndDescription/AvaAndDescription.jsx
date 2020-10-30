import React from "react";
import s from "./AvaAndDescription.module.css";

const AvaAndDescription = () => {
  return (
      <div className={s.AvaAndDescription}>
        <div className={s.AVA}>
          <img src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" />
        </div>
        <div>Descriptoin</div>
      </div>
  )
}

export default AvaAndDescription;