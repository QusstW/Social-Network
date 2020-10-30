import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
      <div>
        My posts
        <div>
         <textarea>azaza</textarea>
         <button>Add post</button>
        <div/>
        <Post name ="Daniil"/>
        <Post name ="Anton"/>
        <Post name ="Ilya"/>
      </div>
    </div>
  )
}

export default MyPosts;