import React from 'react';
import s from './Navbar.module.css'
import {ItemLink} from "./ItemLink/ItemLink";
import ReactLogo from '../../img/ReactLogo.svg'
import mail from '../../img/mail.svg'
import profile from '../../img/user.svg'
import users from '../../img/users.svg'
import setting from '../../img/setting.svg'
import logout from '../../img/logout.svg'

type NavbarPropsType = {
  getUser: (id: number)=> void
  id: number
  login: string | null
  isAuth: boolean
  logOut: () => void
}

const Navbar: React.FC<NavbarPropsType> = (props) => {
  const {getUser, id, login, isAuth, logOut} = props
  return (<div className={s.nav}>
    <img  className={s.logo} src={ReactLogo} alt=""/>
    <div
      onClick={()=>getUser(id)}
      className={s.me}
    >{isAuth ? login : 'Login'}
    </div>
    <ItemLink img={profile}>Profile</ItemLink>
    <ItemLink img={mail}>Messages</ItemLink>
    <ItemLink img={users}>Users</ItemLink>
    <div className={s.setting}>
      <ItemLink img={setting}>Setting</ItemLink>
    </div>
    {isAuth &&
      <div onClick={logOut} className={s.logOut}>
      <ItemLink img={logout} path='login'>logOut</ItemLink>
    </div>}
    </div>);
}

export default Navbar;