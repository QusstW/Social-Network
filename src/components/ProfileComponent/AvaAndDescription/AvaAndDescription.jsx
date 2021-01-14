import React from "react";
import s from "./AvaAndDescription.module.css";




const ProfileInfo=(props)=>{
  return(
    <div className={s.AvaAndDescription}>
    <div className={s.AVA}>
      <img src="https://bookflow.ru/wp-content/uploads/2016/04/programmist.jpg" />
    </div>
    <div className={s.Description}>Descriptoin</div>
  </div>
  )
}


const AvaAndDescription = () => {
  return (
    <ProfileInfo />
  )
}

export default AvaAndDescription;