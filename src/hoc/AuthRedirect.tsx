import {Navigate} from "react-router-dom";
import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/reduxStore";

const mapStateToProps = (state:AppStateType): {isAuth: boolean} =>
  ({isAuth: state.authReducer.isAuth})

export function AuthRedirect <T>(Component: ComponentType<T>) {
  const RedirectComponent = (props: {isAuth: boolean}) => {
    const {isAuth, ...restProps} = props
    return !isAuth
      ? <Navigate to='/login'/> // <Redirect to='/login'/>
      : <Component {...restProps as T}/>
  }
  return connect(mapStateToProps)(RedirectComponent)
}
