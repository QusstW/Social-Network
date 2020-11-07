import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {

  let AnyPost = props.Data.map(post => <Post name={post.name} message={post.message} />)
  return (
    <div>
      My posts
      <div>
        <textarea>azaza</textarea>
        <button>Add post</button>

        <div />
        {AnyPost}
      </div>
    </div>
  )
}

export default MyPosts;