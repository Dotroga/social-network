import React from 'react';
import DialogsUsers from "./DialogsUsers/DialogsUsers";
import Messages from "./Messages/Messages";
import s from './Dialogs.module.css'
import {DialogsType} from "../../../Redux/store";



type DialogsPropsType = {
    dialogs: DialogsType
}

const Dialogs: React.FC<DialogsPropsType> = ({dialogs}) => {
  return (
    <div className={s.dialogs}>
      <Messages messages={dialogs.messages}/>
      <DialogsUsers dialogsUsers={dialogs.dialogsUsers}/>
    </div>
  );
}

export default Dialogs;