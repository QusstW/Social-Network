import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import s from "./AvaAndDescription.module.css";




const AvaAndDescription= (props) =>{

  if(!props.UserProfile){
    return(
      <Preloader />
    )
  }
  return(
    <div className={s.AvaAndDescription}>
    <div className={s.AVA}>
      <img src={props.UserProfile.photos.large} alt="" />
    </div>
    <div className={s.Description}>
      <div>{props.UserProfile.aboutMe}</div>
      <div>Twitter: {props.UserProfile.contacts.twitter}</div>
    </div>
  </div>
  )
}
export default AvaAndDescription;