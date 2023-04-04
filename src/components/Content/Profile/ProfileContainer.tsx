import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserTK, ProfileType} from "../../../Redux/profileReducer";
import {AppStateType} from "../../../Redux/reduxStore";
import MyPostContainer from "./MyPost/MyPostContainer";
import {AuthRedirect} from "../../../hoc/AuthRedirect";
import {compose} from "redux";


type ProfilePropsType = {
  getUserTK: (id: string) => void
  profile: ProfileType
}

class ProfileContainer extends React.Component<ProfilePropsType>{

  componentDidMount() {
    this.props.getUserTK(this.props.profile.userId)
  }
  render = () => {
    return <>
      <Profile {...this.props}/>
      <MyPostContainer/>
    </>
  }
}

const mapStateToProps = (state: AppStateType)=>({
  profile: {...state.profileReducer},
})

export default compose<React.ComponentType>(
  connect(mapStateToProps, {getUserTK}),
  AuthRedirect
)(ProfileContainer)





