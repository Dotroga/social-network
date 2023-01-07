import React from 'react';
import s from './Navbar.module.css'

function Header() {
  return (<div className={s.nav}>
      <div>
        Messages
      </div>
      <div>
        News
      </div>
      <div>
        Profile
      </div>
      <div>
        Seting
      </div>

    </div>
  );
}

export default Header;