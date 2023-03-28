import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {setUsersProfile} from "../../../Redux/profileReducer";
import {AppStateType} from "../../../Redux/reduxStore";
import MyPostContainer from "./MyPost/MyPostContainer";

type ProfilePropsType = {
  setUsersProfile: (profile: any) => void
  profile: any
}

class ProfileContainer extends React.Component<ProfilePropsType>{

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.setUsersProfile(response.data)
      })
  }
  render = () => {
    console.log(this.props)
    return <>
      <Profile {...this.props}/>
      <MyPostContainer/>
    </>
  }
}


// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => ({
//   writingNewPost: (text: string) => dispatch(writingNewPostAC(text)),
//   addPost: () => dispatch(addPostAC()),
//   addLike: (id: string) => dispatch(addLikeAC(id))
// })

const mapStateToProps = (state: AppStateType)=>({profile: {...state.profileReducer}})
export default connect(
  mapStateToProps,
  {setUsersProfile}
) (ProfileContainer)



