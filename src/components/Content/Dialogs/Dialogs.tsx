import React from 'react';
import DialogsUsers from "./DialogsUsers/DialogsUsers";
import Messages from "./Messages/Messages";
import s from './Dialogs.module.css'


function Dialogs() {
  return (
    <div className={s.dialogs}>
      <Messages/>
      <DialogsUsers/>
    </div>
  );
}

export default Dialogs;