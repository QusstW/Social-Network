import React from "react";
import { addPostActionCreator, updateNewPostMessageActionCreator } from "../../../redux/ProfileReducer";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {


  return (
    <StoreContext.Consumer>
      { (store) => {
        let state = store.getState()

        let addPost = () => {
          store.dispatch(addPostActionCreator())
        }

        let onPostChange = (text) => {
          store.dispatch(updateNewPostMessageActionCreator(text))
        }
        return (
          <MyPosts addPost={addPost} onPostChange={onPostChange} DataPosts={state.profilePage.PostsData} DataNewPostText={state.profilePage.NewPostText} />
        )
      }

      }



    </StoreContext.Consumer>

  )
}

export default MyPostsContainer;