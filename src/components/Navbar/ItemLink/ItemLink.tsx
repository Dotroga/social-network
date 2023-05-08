import React from 'react';
import s from "../Navbar.module.css";
import {NavLink} from "react-router-dom";

type ItemLinkPropsType = {
  children: string
  path?: string
}

export const ItemLink: React.FC<ItemLinkPropsType> = ({children, path}) => {
  return (
    <div className={s.item}>
      <NavLink to={`/${path ? path : children.toLowerCase()}`}
               className={navData=>navData.isActive ? s.active : s.item }
      >
        {children}
      </NavLink>
    </div>
  );
};



