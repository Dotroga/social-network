import {AppStateType} from "../../../../Redux/reduxStore";
import {addLike, addPost, ProfilePageType, writingNewPost} from "../../../../Redux/postReducer";
import {connect} from "react-redux";
import {MyPost} from "./MyPost";




const MyPostContainer = connect(
  (state: AppStateType): ProfilePageType =>({...state.postReducer}),
  {writingNewPost, addPost, addLike
})(MyPost)

export default  MyPostContainer