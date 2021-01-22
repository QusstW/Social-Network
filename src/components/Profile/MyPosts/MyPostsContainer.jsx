import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostMessageActionCreator } from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";





let mapStateToProps = (state)=>{
  return{
    DataPosts: state.profilePage.PostsData,
    DataNewPostText: state.profilePage.NewPostText
  }
}

let mapDispatchToProps = (dispatch)=>{
  return{
    addPost: ()=>{
      dispatch (addPostActionCreator())
    },

    onPostChange: (text)=>{
      dispatch(updateNewPostMessageActionCreator(text))
    }
  }
}  


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);


export default MyPostsContainer;