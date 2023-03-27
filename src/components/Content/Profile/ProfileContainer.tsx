import React from 'react';
import {Profile} from "./Profile";
import {connect, MapDispatchToProps} from "react-redux";
import {AppStateType} from "../../../Redux/reduxStore";
import {addLikeAC, addPostAC, ProfilePageType, setUsersProfile, writingNewPostAC} from "../../../Redux/profileReducer";
import axios from "axios";



export class ProfileContainerApi extends React.Component<any, any>{
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.setUsersProfile(response.data)
      })
  }

  render = () => {
    console.log({...this.props})
    return <Profile
      {...this.props}

    />
  }
}


// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => ({
//   writingNewPost: (text: string) => dispatch(writingNewPostAC(text)),
//   addPost: () => dispatch(addPostAC()),
//   addLike: (id: string) => dispatch(addLikeAC(id))
// })
const mapStateToProps = (state: any)=>({
  a:13
})
export const ProfileContainer =  connect(
  mapStateToProps,
  {setUsersProfile}
) (ProfileContainerApi)



