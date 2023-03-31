import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {ProfileType, setUsersProfile} from "../../../Redux/profileReducer";
import {AppStateType} from "../../../Redux/reduxStore";
import MyPostContainer from "./MyPost/MyPostContainer";
import {profileAPI} from "../../../api/api";


type ProfilePropsType = {
  setUsersProfile: (profile: any) => void
  profile: ProfileType
}

class ProfileContainer extends React.Component<ProfilePropsType>{

  componentDidMount() {
    profileAPI.getUserProfile(this.props.profile.userId).then(data =>
      this.props.setUsersProfile(data))
  }
  render = () => {
    return <>
      <Profile {...this.props}/>
      <MyPostContainer/>
    </>
  }
}

const mapStateToProps = (state: AppStateType)=>({profile: {...state.profileReducer}})
export default connect(
  mapStateToProps,
  {setUsersProfile}
) (ProfileContainer)



