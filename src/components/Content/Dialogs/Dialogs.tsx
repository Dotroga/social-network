import React from 'react';
import DialogsUsers from "./DialogsUsers/DialogsUsers";
import Messages from "./Messages/Messages";
import s from './Dialogs.module.css'
import {dialogsType, messagesType} from "../../../App";

type DialogsPropsType = {
    dialogs: dialogsType[]
    messages: messagesType[]
}

function Dialogs(props: DialogsPropsType) {
  return (
    <div className={s.dialogs}>
      <Messages messages={props.messages}/>
      <DialogsUsers dialogs={props.dialogs}/>
    </div>
  );
}

export default Dialogs;