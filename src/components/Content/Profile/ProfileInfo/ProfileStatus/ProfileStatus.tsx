import React, {ChangeEvent, useEffect, useState} from 'react';
import {ProfileInfoPropsType} from "../ProfileInfo";

export const ProfileStatus: React.FC<ProfileInfoPropsType> = (props) =>{
  const [editMode, setEditMode] = useState(false)
  const [value, setValue] = useState<string>(props.status)

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  useEffect(()=> {
    setValue(props.status)
  },[props.status])

  const changeEditMode = () => {
    setEditMode((prevState)=>!prevState)
    editMode && props.updateStatus(value)
  }

    console.log(props.status)
    return (
      <div >
        {!editMode
        ? <span onDoubleClick={changeEditMode}>{value}</span>
        : <input
            onBlur={changeEditMode}
            onChange={onChangeValue}
            type="text"
            value={value}
            autoFocus={true}
          />
        }
      </div>
    );
  }
