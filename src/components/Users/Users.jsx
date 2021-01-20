import React from "react"
import userAva from '../../images/userDefault.png'
import s from './Users.module.css'

const Users = (props) => {

    let countOfPages = Math.ceil (props.TotalCountUsers / props.PageSize)
    let pages = []

    for ( let i = 1; i <= countOfPages; i++ ){
        pages.push(i)
    }


    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span onClick={() => { props.onCountPage(p) }} style={{ cursor: "pointer" }} className={props.CurrentPage === p && s.currentPage} >{p}</span>
                })}

            </div>
            {
                props.users.map(u =>
                    <div key={u.id}>

                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userAva} alt="" className={s.ava} />
                        </div>

                        <div>
                            {u.followed ? <button onClick={() => { props.unfollow(u.id) }}>UNFOLLOW</button> : <button onClick={() => { props.follow(u.id) }} >FOLLOW</button>}
                        </div>

                        <div>
                            {u.name}
                        </div>

                        <div>
                            {u.id}
                        </div>

                    </div>
                )
            }
        </div>
    )
}

export default Users