import React from 'react';
import s from './DialogsUsers.module.css'
import {DialogsUsersType} from "../../../../Redux/store";




type DialogsPropsType = {
  dialogsUsers: DialogsUsersType[]
}

const DialogsUsers: React.FC<DialogsPropsType> = ({dialogsUsers}) => {
  return (
    <div className={s.dialogsUsers }>
      {dialogsUsers.map(d=><div key={d.id} >{d.name}</div>)}
    </div>
  );
};

export default DialogsUsers;