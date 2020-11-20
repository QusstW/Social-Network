import React from "react";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ProfileComponent from "./components/ProfileComponent/ProfileComponent";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";


function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Route path="/Profile" render={()=> <ProfileComponent dataProfile={props.state.profilePage}  dispatch={props.dispatch}/>} />
          <Route path ="/Dialogs" render={()=><Dialogs dataDialogs={props.state.dialogsPage} dispatch={props.dispatch} />} />
          <Route path ="/News" render={()=><News />} />
          <Route path ="/Music" render={()=><Music dataMusic={props.state.musicPage}/>} />
          <Route path ="/Settings" render={()=><Settings />} />
          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
