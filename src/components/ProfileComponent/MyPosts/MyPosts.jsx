import React from "react";
//import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
  //Get element by Ref 
  let newPostElement = React.createRef()
  //Function get value <textarea /> by click button and push data to STATE
  let onAddPost = ()=>{
    props.addPost()
  }

  //function get value <textarea /> by click button and push data to STATE
  let onPostChange =()=>{
    let text = newPostElement.current.value
    props.onPostChange(text)

  }

  let AnyPost = props.DataPosts.map(post => <Post name={post.name} message={post.message} />)
  
  return (
    <div>
      My posts
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.DataNewPostText}/>
        <button onClick={onAddPost}>Add post</button>

        <div />
        {AnyPost}
      </div>
    </div>
  )
}

export default MyPosts;