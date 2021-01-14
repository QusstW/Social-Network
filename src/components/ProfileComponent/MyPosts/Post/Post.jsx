import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <div className={s.AvaWsName}>
        <div className={s.ava}>
          <img src="https://delai-vibor.com/wp-content/uploads/2018/01/Web-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%81%D1%82.jpg" alt=""/>
        </div>
        <div className={s.name} >{props.name}</div>
      </div>
        
        <div className={s.message}>{props.message}</div>
    </div>

  )
}

export default Post;