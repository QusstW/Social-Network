import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ProfileComponent from "./components/ProfileComponent/ProfileComponent";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import MusicContainer from "./components/Music/MusicContainer";


function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Route path="/Profile" render={()=> <ProfileComponent />} />
          <Route path ="/Dialogs" render={()=><DialogsContainer />} /> 
          <Route path ="/News" render={()=><News />} />
          <Route path ="/Music" render={()=><MusicContainer />} />
          <Route path ="/Settings" render={()=><Settings />} />
          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
