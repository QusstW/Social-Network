import React from "react";
import Header from "./Header";
import * as axios from 'axios'
import { setUserAuth } from "../../redux/AuthReducer";
import { connect } from "react-redux";

class HeaderContainer extends React.Component{

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials: true
        }).then(Response =>{
            let { id, login, email } = Response.data.data
            this.props.setUserAuth(id, login, email)
        })
    }

    render(){
    return(
        <Header {...this.props} />
    )
}
}

let mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        email: state.auth.email
    }
}

export default connect(mapStateToProps, {setUserAuth})(HeaderContainer)
