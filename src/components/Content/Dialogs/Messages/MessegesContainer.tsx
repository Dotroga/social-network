import React from 'react';
import Messages from "./Messages";
import {connect} from "react-redux";
import {AppStateType} from "../../../../Redux/reduxStore";
import {addMessageAC
  , DialogsType, writingNewMessagesAC
} from "../../../../Redux/dialogsReducer";
import {Dispatch} from "redux";

type MapStatePropsType = {
  dialogs: DialogsType
}
type MapDispatchToProps = {
  onChangeMessages: (text: string) => void
  addMessage: () => void
}

const mapStateToProps = (state: AppStateType):MapStatePropsType => {
  return {
    dialogs: state.dialogsReducer
  }
}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToProps => {
  return {
    onChangeMessages: (text: string) => dispatch(writingNewMessagesAC(text)),
    addMessage: () => dispatch(addMessageAC())
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;