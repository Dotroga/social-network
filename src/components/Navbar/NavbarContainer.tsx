import React from 'react';
import Navbar from "./Navbar";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/reduxStore";
import {AuthType, setUserData} from "../../Redux/authReducer";
import {authAPI} from "../../api/api";




type NavbarPropsType = {
  setUserData: (data: AuthType) => void
  login: string | null
  isAuth: boolean
}

class NavbarContainer extends React.Component<NavbarPropsType>{
  componentDidMount() {
    authAPI.isAuthorizationMe().then(data => {
      return  data.resultCode === 0 && this.props.setUserData(data.data)
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

