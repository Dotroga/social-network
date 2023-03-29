import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {ProfileType, setUsersProfile} from "../../../Redux/profileReducer";
import {AppStateType} from "../../../Redux/reduxStore";
import MyPostContainer from "./MyPost/MyPostContainer";


type ProfilePropsType = {
  setUsersProfile: (profile: any) => void
  profile: ProfileType
}

class ProfileContainer extends React.Component<ProfilePropsType>{

  componentDidMount() {
    const userId = this.props.profile.userId
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        this.props.setUsersProfile(response.data)
      })
  }
  render = () => {
    console.log(this.props.profile.userId)
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



