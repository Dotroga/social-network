import React from 'react';
import Navbar from "./Navbar";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/reduxStore";
import {getUserData, logOut} from "../../Redux/authReducer";
import {getDataUser} from "../../Redux/profileReducer";

type NavbarPropsType = {
  getDataUser: (id: number)=> void
  id: number
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

    const getUserData = (id: number) => {
      this.props.getDataUser(id)
    }

    return <Navbar
      id={this.props.id}
      getUserData={getUserData}
      login={this.props.login}
      isAuth={this.props.isAuth}
      logOut={this.props.logOut}
    />
  }
}

const mapStateToProps = (state: AppStateType) => ({
  login: state.authReducer.login,
  isAuth: state.authReducer.isAuth,
  id: state.authReducer.id!
})


export default connect(mapStateToProps,
  {getUserData, logOut, getDataUser})(NavbarContainer);

