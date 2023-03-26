import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/reduxStore";
import {addLikeAC, addPostAC, ProfilePageType, writingNewPostAC} from "../../../Redux/profileReducer";



export class ProfileContainer extends React.Component<any, any>{
  componentDidMount() {

  }

  render = () => {
    console.log(...this.props)
    return <Profile
      {...this.props}
    />
  }
};





// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
//   return {
//     writingNewPost: (text: string) => dispatch(writingNewPostAC(text)),
//     addPost: ()  => dispatch(addPostAC()),
//     addLike: (id: string) => dispatch(addLikeAC(id))
//   }
// }


