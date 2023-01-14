import React from 'react';
import s from './DialogsUsers.module.css'
import {dialogsType} from "../../../../App";


type DialogsPropsType = {
  dialogs: dialogsType[]
}

const DialogsUsers = (props: DialogsPropsType) => {
  return (
    <div className={s.dialogsUsers }>
      {props.dialogs.map(d=><div key={d.id} >{d.name}</div>)}
    </div>
  );
};

export default DialogsUsers;