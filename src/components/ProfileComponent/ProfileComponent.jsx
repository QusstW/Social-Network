import React from "react";
import AvaAndDescription from "./AvaAndDescription/AvaAndDescription";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./ProfileComponent.module.css";
import TopBackground from "./TopBackground/TopBackground";





const ProfileComponent = (props) => {
  return (
    <div>
      <TopBackground />
      <AvaAndDescription />
      <MyPostsContainer store = {props.store}/>
    </div>
  )
}

export default ProfileComponent;