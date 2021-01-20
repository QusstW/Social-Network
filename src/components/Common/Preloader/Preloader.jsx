import React from "react"
import preloader from "../../../Assets/Preloader.svg"
import s from "./Preloader.module.css"
const Preloader = ()=>{
    return(
        <div className={s.Preloader} >
            <img src={preloader} alt=""></img>
        </div>
    )
}

export default Preloader