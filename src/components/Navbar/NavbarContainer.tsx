import React from 'react';
import Navbar from "./Navbar";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/reduxStore";
import {getUserData, logOut} from "../../Redux/authReducer";





type NavbarPropsType = {
  getUserData: () => void
  logOut: () => void
  login: string | null
  isAuth: boolean
}

class NavbarContainer extends React.Component<NavbarPropsType>{
  componentDidMount() {
    this.props.getUserData()
  }

  render () {
    return <Navbar
      login={this.props.login}
      isAuth={this.props.isAuth}
      logOut={this.props.logOut}
    />
  }
}

const mapStateToProps = (state: AppStateType) => ({
  login: state.authReducer.login,
  isAuth: state.authReducer.isAuth
})


export default connect(mapStateToProps, {getUserData, logOut})(NavbarContainer);

