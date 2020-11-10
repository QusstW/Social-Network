import React from "react";
import clas from "./Music.module.css"
import MusicTrack from "./MusicTrack/MusicTrack";


const Music = (props) =>{

let OneTrack = props.dataMusic.musicList.map((m)=>{
    return(
        <MusicTrack name={m.name}/>
    )
})

    return(
    <div>
        {OneTrack}
    </div>
      
    )
}

export default Music;