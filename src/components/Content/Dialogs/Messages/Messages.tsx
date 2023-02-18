import React, {ChangeEvent} from 'react';
import s from './Messages.module.css'
import {DialogsType} from "../../../../Redux/dialogsReducer";



type MessagesPropsType = {
  dialogs: DialogsType
  onChangeMessages: (text: string)=> void
  addMessage:()=> void
}

const Messages: React.FC<MessagesPropsType> = (
  {
    dialogs,
    onChangeMessages,
    addMessage
  }) => {
  const onChangeMessagesHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChangeMessages(e.currentTarget.value)
  }
  const addMessageHandler = () => addMessage()

  return (
    <div className={s.messages}>
      <textarea onChange={onChangeMessagesHandler} value={dialogs.textForInputMessages}></textarea>
      <button onClick={addMessageHandler } >Add</button>
      {dialogs.messages.map(m=><div key={m.id}>{m.message}</div>)}
    </div>
  );
};

export default Messages;