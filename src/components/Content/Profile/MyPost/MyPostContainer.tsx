import {AppStateType} from "../../../../Redux/reduxStore";
import {addLike, addPost, ProfilePageType} from "../../../../Redux/postReducer";
import {connect} from "react-redux";
import {MyPost} from "./MyPost";

const MyPostContainer = connect(
  (state: AppStateType): ProfilePageType =>({...state.postReducer}),
  {addPost, addLike
})(MyPost)

export default  MyPostContainer