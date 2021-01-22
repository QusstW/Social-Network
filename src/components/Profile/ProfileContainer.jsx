import React from "react"
import { connect } from "react-redux";
import * as axios from 'axios'
import Profile from './Profile'
import { setUserProfile } from "../../redux/ProfileReducer";
import { withRouter } from "react-router-dom";



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userid
        if(!userId){
            userId = 11;
        }
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId).then(Response =>{
            console.log(Response)
            this.props.setUserProfile(Response.data)
           
        })
    }

    render(){
        return(
            <Profile {...this.props } UserProfile ={this.props.UserProfile} />
        )    
        }
    }



let mapStateToProps = (state) => {
    return{
        UserProfile: state.profilePage.UserProfile,

    }
}


let WithRouterProfile = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setUserProfile,

})(WithRouterProfile)