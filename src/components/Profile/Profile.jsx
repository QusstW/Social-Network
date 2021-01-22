import React from "react";
import AvaAndDescription from "./AvaAndDescription/AvaAndDescription";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import TopBackground from "./TopBackground/TopBackground";





const Profile = (props) => {
  return (
    <div>
      <TopBackground />
      <AvaAndDescription UserProfile = {props.UserProfile} />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;