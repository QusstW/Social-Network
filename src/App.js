import React from "react";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ProfileComponent from "./components/ProfileComponent/ProfileComponent";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      {/*<ProfileComponent />*/}
      <div class = "app-wrapper-content">
        <Dialogs />
      </div>
      
    </div>
  );
}

export default App;
