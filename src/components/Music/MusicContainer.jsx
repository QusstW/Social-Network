import { connect } from "react-redux";
import Music from "./Music";



let MapStateToProps = (state)=>{
    return{
       dataMusic: state.musicPage.musicList 
    }
    
}


const MusicContainer = connect (MapStateToProps)(Music);



export default MusicContainer;