import React from 'react';
import Navbar from "./Navbar";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/reduxStore";
import {AuthType, setUserData} from "../../Redux/authReducer";




type NavbarPropsType = {
  setUserData: (data: AuthType) => void
  login: string | null
  isAuth: boolean
}

class NavbarContainer extends React.Component<NavbarPropsType>{
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
      .then(response => {
        response.data.resultCode === 0 && this.props.setUserData(response.data.data)
      })
  }

  render () {
    return <Navbar
      login={this.props.login}
      isAuth={this.props.isAuth}/>
  }
}

const mapStateToProps = (state: AppStateType) => ({
  login: state.authReducer.login,
  isAuth: state.authReducer.isAuth
})


export default connect(mapStateToProps, {setUserData})(NavbarContainer);

