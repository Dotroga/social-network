import React from 'react';
import DialogsUsers from "./DialogsUsers/DialogsUsers";
import s from './Dialogs.module.css'
import {ActionsType, DialogsType} from "../../../Redux/store";
import MessagesContainer from "./Messages/MessegesContainer";



type DialogsPropsType = {
    dialogs: DialogsType
    dispatch: (action: ActionsType) => void
}

const Dialogs: React.FC<DialogsPropsType> = ({dialogs,dispatch}) => {
  return (
    <div className={s.dialogs}>
      <MessagesContainer dialogs={dialogs} dispatch={dispatch}/>
      <DialogsUsers dialogsUsers={dialogs.dialogsUsers}/>
    </div>
  );
}

export default Dialogs;