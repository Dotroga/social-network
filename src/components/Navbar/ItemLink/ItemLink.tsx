import React from 'react';
import s from "../Navbar.module.css";
import {NavLink} from "react-router-dom";

type ItemLinkPropsType = {
  img: string
  children: any
  path?: string
}

export const ItemLink: React.FC<ItemLinkPropsType> = ({children, path,img}) => {
  return (
    <div className={s.item}>
      <NavLink to={`/${path ? path : children.toLowerCase()}`}
               className={navData=>navData.isActive ? s.active : s.item }
      >
        <img src={img} alt=""/>
        {children}
      </NavLink>
    </div>
  );
};



