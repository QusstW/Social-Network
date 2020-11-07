import React from "react";
import AvaAndDescription from "./AvaAndDescription/AvaAndDescription";
import MyPosts from "./MyPosts/MyPosts";
import s from "./ProfileComponent.module.css";
import TopBackground from "./TopBackground/TopBackground";





const ProfileComponent = (props) => {
  return (
    <div>
      <TopBackground />
      <AvaAndDescription />
      <MyPosts Data={props.PostsData} />
    </div>
  )
}

export default ProfileComponent;