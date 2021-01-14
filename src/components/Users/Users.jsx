import React from 'react'
import s from './Users.module.css'
import * as axios from 'axios'
import userAva from '../../images/userDefault.png'


class Users extends React.Component {

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.PageSize}&page=1`).then(Response => {
            this.props.setUsers(Response.data.items)
            this.props.setTotalCountUsers(Response.data.totalCount)
        });
    }
    
    onCountPage = (n)=>{
        console.log(n)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.PageSize}&page=${n}`).then(Response =>{
            this.props.setUsers(Response.data.items)
            this.props.setCurrentPage(n)
        })
    }

    render () {
    
    let countOfPages = Math.ceil (this.props.TotalCountUsers / this.props.PageSize)

    let pages = []

    for ( let i = 1; i <= countOfPages; i++ ){
        pages.push(i)
    }


        return(
            <div>
                <div>
                    { pages.map( p =>{
                        return <span onClick ={()=>{this.onCountPage(p)} } style={{ cursor: "pointer"}} className={ this.props.CurrentPage === p && s.currentPage} >{p}</span> 
                    } ) }
                    
                </div> 
            {
                this.props.users.map(u =>
                    <div key={u.id}>

                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userAva} alt="" className={s.ava} />
                        </div>

                        <div>
                            {u.followed ? <button onClick={() => { this.props.unfollow(u.id) }}>UNFOLLOW</button> : <button onClick={() => { this.props.follow(u.id) }} >FOLLOW</button>}
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


}



export default Users
