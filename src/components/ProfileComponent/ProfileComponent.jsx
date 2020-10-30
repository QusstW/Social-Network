import React from "react";
import AvaAndDescription from "./AvaAndDescription/AvaAndDescription";
import MyPosts from "./MyPosts/MyPosts";
import s from "./ProfileComponent.module.css";
import TopBackground from "./TopBackground/TopBackground";

const ProfileComponent = () => {
  return (
    <div>
      <TopBackground />
      <AvaAndDescription />
      <MyPosts />
    </div>
  )
}

export default ProfileComponent;