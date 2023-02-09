import React from 'react';
import DialogsUsers from "./DialogsUsers/DialogsUsers";
import Messages from "./Messages/Messages";
import s from './Dialogs.module.css'
import {ActionsType, DialogsType} from "../../../Redux/store";



type DialogsPropsType = {
    dialogs: DialogsType
    dispatch: (action: ActionsType) => void
}

const Dialogs: React.FC<DialogsPropsType> = ({dialogs,dispatch}) => {
  return (
    <div className={s.dialogs}>
      <Messages dialogs={dialogs} dispatch={dispatch}/>
      <DialogsUsers dialogsUsers={dialogs.dialogsUsers}/>
    </div>
  );
}

export default Dialogs;