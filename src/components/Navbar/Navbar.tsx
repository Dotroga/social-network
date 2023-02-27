import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import LogoRedux from './../../img/ReduxLogo.svg'
import LogoReact from './../../img/ReactLogo.svg'

function Navbar() {
  return (<div className={s.nav}>
      <img className={s.redux} src={LogoRedux} alt=""/>
      <img className={s.react} src={LogoReact} alt=""/>
      <div className={s.items}>
        <div className={s.item}>
          <NavLink to="/profile" className={navData=>navData.isActive ? s.active : s.item }>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/messages" className={navData=>navData.isActive ? s.active : s.item }>Messages</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/news" className={navData=>navData.isActive ? s.active : s.item }>News</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/users" className={navData=>navData.isActive ? s.active : s.item }>Users</NavLink>
        </div>
        <div className={s.setting}>
          <div className={s.item}>
            <NavLink to="/setting" className={navData=>navData.isActive ? s.active : s.item }>Setting</NavLink>
          </div>
        </div>
      </div>
    </div>);
}

export default Navbar;