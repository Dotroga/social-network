import React from 'react';
import s from './Messages.module.css'
import {MessagesType} from "../../../../Redux/state";


type MessagesPropsType = {
  messages: MessagesType[]
}

const Messages: React.FC<MessagesPropsType> = ({messages}) => {
  return (
    <div className={s.messages}>
      {messages.map(m=><div key={m.id}>{m.message}</div>)}
    </div>
  );
};

export default Messages;