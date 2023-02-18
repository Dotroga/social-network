import React from 'react';
import DialogsUsers from "./DialogsUsers/DialogsUsers";
import s from './Dialogs.module.css'
import MessagesContainer from "./Messages/MessegesContainer";
import {DialogsType} from "../../../Redux/dialogsReducer";

type DialogsPropsType = {
    dialogs: DialogsType
}

const Dialogs: React.FC<DialogsPropsType> = ({dialogs,}) => {
  return (
    <div className={s.dialogs}>
      <MessagesContainer />
      <DialogsUsers dialogsUsers={dialogs.dialogsUsers}/>
    </div>
  );
}

export default Dialogs;