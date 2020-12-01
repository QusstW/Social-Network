import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostMessageActionCreator } from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";



// const MyPostsContainer = (props) => {


//   return (
//     <StoreContext.Consumer>
//       { (store) => {
//         let state = store.getState()

//         let addPost = () => {
//           store.dispatch(addPostActionCreator())
//         }

//         let onPostChange = (text) => {
//           store.dispatch(updateNewPostMessageActionCreator(text))
//         }
//         return (
//           <MyPosts addPost={addPost} onPostChange={onPostChange} DataPosts={state.profilePage.PostsData} DataNewPostText={state.profilePage.NewPostText} />
//         )
//       }

//       }
//     </StoreContext.Consumer>

//   )
// }


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