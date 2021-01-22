import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import MusicContainer from "./components/Music/MusicContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Route path="/Profile/:userid?" render={()=> <ProfileContainer />} />
          <Route path ="/Dialogs" render={()=><DialogsContainer />} /> 
          <Route path ="/Users" render={()=><UsersContainer />} />
          <Route path ="/News" render={()=><News />} />
          <Route path ="/Music" render={()=><MusicContainer />} />
          <Route path ="/Settings" render={()=><Settings />} />
          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
