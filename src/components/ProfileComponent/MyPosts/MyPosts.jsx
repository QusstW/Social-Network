import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
  //Get element by Ref 
  let newPostElement = React.createRef()
  
  let onAddPost = ()=>{
    props.addPost()
  }

  
  let onPostChange =()=>{
    let text = newPostElement.current.value
    props.onPostChange(text)

  }

  let AnyPost = props.DataPosts.map(post => <Post name={post.name} message={post.message} />)
  
  return (
    <div className={s.Myposts} >
      Cтена
      <div className={s.InputVbutton} >
        <textarea className={s.Inputs} onChange={onPostChange} ref={newPostElement} value={props.DataNewPostText}/>
        <button onClick={onAddPost}>Добавить пост</button>

        <div />
        {AnyPost}
      </div>
    </div>
  )
}

export default MyPosts;