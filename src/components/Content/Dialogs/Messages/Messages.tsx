import React, {ChangeEvent} from 'react';
import s from './Messages.module.css'
import {ActionsType, addMessageAC, DialogsType, writingNewMessagesAC} from "../../../../Redux/store";


type MessagesPropsType = {
  dialogs: DialogsType
  dispatch: (action: ActionsType) => void
}

const Messages: React.FC<MessagesPropsType> = ({dialogs, dispatch}) => {
  const onChangeMessages = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(writingNewMessagesAC(e.currentTarget.value))
  }
  const addMessage = () => dispatch(addMessageAC())
  return (
    <div className={s.messages}>
      <textarea onChange={onChangeMessages} value={dialogs.textForInputMessages}></textarea>
      <button onClick={addMessage} >Add</button>
      {dialogs.messages.map(m=><div key={m.id}>{m.message}</div>)}
    </div>
  );
};

export default Messages;