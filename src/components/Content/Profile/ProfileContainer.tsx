import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/reduxStore";
import MyPostContainer from "./MyPost/MyPostContainer";
import {AuthRedirect} from "../../../hoc/AuthRedirect";
import {compose} from "redux";
import {ProfileType} from "../../../Redux/StateTypes";
import {getProfileSuper, getStatusSuper} from "../../../Redux/profileSelectors";
import {getStatus, getUser, updateStatus} from "../../../Redux/profileReducer";

type ProfilePropsType = {
  id: number
  getUser: (id: number) => void
  getStatus: (id: number) => void
  updateStatus: (status: string) => void
  profile: ProfileType
  status: string
}

class ProfileContainer extends React.Component<ProfilePropsType>{

  componentDidMount() {
    this.props.getUser(this.props.profile.userId)
    this.props.getStatus(this.props.profile.userId)
  }
  updateStatus = (status: string) => {
    this.props.updateStatus(status)
  }
  render = () => {
    return <>
      <Profile {...this.props} updateStatus={this.updateStatus}/>
      <MyPostContainer/>
    </>
  }
}

const mapStateToProps = (state: AppStateType)=>({
  profile: getProfileSuper(state),
  status: getStatusSuper(state),
  id: state.authReducer.id
})

export default compose<React.ComponentType>(
  connect(mapStateToProps, {getUser, getStatus, updateStatus}),
  AuthRedirect
)(ProfileContainer)





