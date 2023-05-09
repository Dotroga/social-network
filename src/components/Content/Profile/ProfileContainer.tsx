import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatusTK, getUserTK, updateStatusTK} from "../../../Redux/profileReducer";
import {AppStateType} from "../../../Redux/reduxStore";
import MyPostContainer from "./MyPost/MyPostContainer";
import {AuthRedirect} from "../../../hoc/AuthRedirect";
import {compose} from "redux";
import {ProfileType} from "../../../Redux/StateTypes";


type ProfilePropsType = {
  getUserTK: (id: number) => void
  getStatusTK: (id: number) => void
  updateStatusTK: (status: string) => void
  profile: ProfileType
  status: string
}

class ProfileContainer extends React.Component<ProfilePropsType>{

  componentDidMount() {
    this.props.getUserTK(this.props.profile.userId)
    this.props.getStatusTK(this.props.profile.userId)
  }
  // updateStatus = (status: string) => {
  //   this.props.updateStatusTK(status)
  // }
  render = () => {

    return <>
      <Profile {...this.props}/>
      <MyPostContainer/>
    </>
  }
}

const mapStateToProps = (state: AppStateType)=>({
  profile: {...state.profileReducer.profile},
  status: state.profileReducer.status
})

export default compose<React.ComponentType>(
  connect(mapStateToProps, {getUserTK, getStatusTK, updateStatusTK}),
  AuthRedirect
)(ProfileContainer)





