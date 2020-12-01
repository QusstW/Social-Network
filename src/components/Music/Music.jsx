import React from "react";
import MusicTrack from "./MusicTrack/MusicTrack";


const Music = (props) =>{

let OneTrack = props.dataMusic.map((m)=>{
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