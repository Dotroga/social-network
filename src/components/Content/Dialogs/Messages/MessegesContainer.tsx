import React from 'react';
import {ActionsType, addMessageAC, DialogsType, writingNewMessagesAC} from "../../../../Redux/store";
import Messages from "./Messages";


type MessagesPropsType = {
  dialogs: DialogsType
  dispatch: (action: ActionsType) => void
}

const MessagesContainer: React.FC<MessagesPropsType> = ({dialogs, dispatch}) => {

  const onChangeMessages = (text: string) => dispatch(writingNewMessagesAC(text))
  const addMessage = () => dispatch(addMessageAC())

  return (
    <Messages
    onChangeMessages={onChangeMessages}
    addMessage={addMessage}
    dialogs={dialogs}
  />);
};

export default MessagesContainer;