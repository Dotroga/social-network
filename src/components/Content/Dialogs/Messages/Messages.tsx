import React from 'react';
import s from './Messages.module.css'
import {messagesType} from "../../../../App";


type MessagesPropsType = {
  messages: messagesType[]
}

const Messages = (props: MessagesPropsType) => {
  return (
    <div className={s.messages}>
      {props.messages.map(m=><div key={m.id}>{m.message}</div>)}
    </div>
  );
};

export default Messages;