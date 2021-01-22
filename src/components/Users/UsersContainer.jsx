import React from 'react'
import { connect } from 'react-redux'
import { follow, setCurrentPage, setTotalCountUsers, setUsers, unfollow, setIsLoading } from '../../redux/UsersReducer'
import * as axios from 'axios'
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setIsLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.PageSize}&page=1`).then(Response => {
            this.props.setIsLoading(false)
            this.props.setUsers(Response.data.items)
            this.props.setTotalCountUsers(Response.data.totalCount)
        });
    }

    onCountPage = (n) => {
        this.props.setCurrentPage(n)
        this.props.setIsLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.PageSize}&page=${n}`).then(Response => {
            this.props.setIsLoading(false)
            this.props.setUsers(Response.data.items)
            
        })
    }

    render() {

        return (
            <>
            { this.props.isLoading ? <Preloader/> : null } 
            <Users TotalCountUsers={this.props.TotalCountUsers}
                PageSize={this.props.PageSize}
                onCountPage={this.onCountPage}
                CurrentPage={this.props.CurrentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
            />
            </>
        )

    }


}

let mapStateToProps = (state) => {
    return {
        users: state.findUsersPage.Users,
        TotalCountUsers: state.findUsersPage.TotalCountUsers,
        PageSize: state.findUsersPage.PageSize,
        CurrentPage: state.findUsersPage.CurrentPage,
        isLoading: state.findUsersPage.isLoading,
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (Users) => {
//             dispatch(setUsersAC(Users))
//         },
//         setTotalCountUsers: (count) => {
//             dispatch(setTotalCountUsersAC(count))
//         },
//         setCurrentPage: (numberOfPage) => {
//             dispatch(setCurrentPageAC(numberOfPage))
//         },
//         setIsLoading: (isLoading) => {
//             dispatch(setIsLoadingAC(isLoading))
//         }

//     }
// }





export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setTotalCountUsers,
        setCurrentPage,
        setIsLoading, 
    }
    )(UsersContainer)


