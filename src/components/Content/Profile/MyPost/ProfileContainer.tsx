import {connect} from "react-redux";
import Profile from "../Profile";
import {addLikeAC, addPostAC, ProfilePageType, writingNewPostAC} from "../../../../Redux/profileReducer";
import {AppStateType} from "../../../../Redux/reduxStore";
import {Dispatch} from "redux";


type MapStateToPropsType = {
  profile: ProfilePageType
}

type MapDispatchToProps = {
  writingNewPost: (text: string) => void
  addPost: ()  => void
  addLike: (id: string) => void
}


const  mapStateToProps = (state: AppStateType):MapStateToPropsType=> {
  return {
    profile: state.profileReducer
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
  return {
    writingNewPost: (text: string) => dispatch(writingNewPostAC(text)),
    addPost: ()  => dispatch(addPostAC()),
    addLike: (id: string) => dispatch(addLikeAC(id))
  }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer;