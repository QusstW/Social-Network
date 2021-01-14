import { connect } from 'react-redux'
import { followAC, setCurrentPageAC, setTotalCountUsersAC, setUsersAC, unfollowAC } from '../../redux/UsersReducer'
import Users from './Users'


let mapStateToProps = (state)=>{
    return{
      users: state.findUsersPage.Users,
      TotalCountUsers: state.findUsersPage.TotalCountUsers,
      PageSize: state.findUsersPage.PageSize,
      CurrentPage: state.findUsersPage.CurrentPage,
    }
  }
  
  let mapDispatchToProps = (dispatch)=>{
    return{
        follow: (userId) => {
            dispatch(followAC(userId) )
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (Users) =>{
            dispatch(setUsersAC(Users))
        },
        setTotalCountUsers: (count) =>{
            dispatch(setTotalCountUsersAC(count))
        },
        setCurrentPage: (numberOfPage)=> {
            dispatch( setCurrentPageAC(numberOfPage) )
        }
        
    }
  }

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
