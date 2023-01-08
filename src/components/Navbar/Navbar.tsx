import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

function Header() {
  return (<div className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/messages">Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news">News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/setting">Setting</NavLink>
      </div>
    </div>);
}

export default Header;