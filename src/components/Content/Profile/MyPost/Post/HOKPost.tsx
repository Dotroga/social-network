import {AppStateType} from "../../../../../Redux/reduxStore";
import {addLikeAC, addPostAC, ProfilePageType, writingNewPostAC} from "../../../../../Redux/profileReducer";
import {connect} from "react-redux";
import Post from "./Post";

const  mapStateToProps = (state: AppStateType): {profile: ProfilePageType} =>
  ({profile: state.profileReducer})

export const HOKPost = connect(mapStateToProps, {
  writingNewPost: writingNewPostAC,
  addPost: addPostAC,
  addLike: addLikeAC
})(Post)