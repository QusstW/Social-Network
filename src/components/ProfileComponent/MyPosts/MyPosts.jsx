import React from "react";
//import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {

  let newPostElement = React.createRef();

  let addPost = ()=>{
    let text = newPostElement.current.value;
    props.addPost(text)
  }




  let AnyPost = props.Data.map(post => <Post name={post.name} message={post.message} />)
  return (
    <div>
      My posts
      <div>
        <textarea ref={newPostElement}></textarea>
        <button onClick={addPost}>Add post</button>

        <div />
        {AnyPost}
      </div>
    </div>
  )
}

export default MyPosts;