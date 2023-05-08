import React from 'react';
import s from './Navbar.module.css'
import {ItemLink} from "./ItemLink/ItemLink";

type NavbarPropsType = {
  login: string | null
  isAuth: boolean
  logOut: () => void
}

const Navbar: React.FC<NavbarPropsType> = (props) => {
  const {login, isAuth, logOut} = props
  console.log(isAuth)
  return (<div className={s.nav}>
    <div>{isAuth ? login : 'Login'}</div>
    <ItemLink>Profile</ItemLink>
    <ItemLink>Messages</ItemLink>
    <ItemLink>News</ItemLink>
    <ItemLink>Users</ItemLink>
    <div className={s.setting}>
      <ItemLink>Setting</ItemLink>
    </div>
    {isAuth &&
      <div onClick={logOut} className={s.logOut}>
      <ItemLink path='login'>logOut</ItemLink>
    </div>}
    </div>);
}

export default Navbar;