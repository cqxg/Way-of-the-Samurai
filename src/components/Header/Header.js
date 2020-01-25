import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Header.module.css';

const Header = () => (
  <header className={style.header}>
    <div className={style.loginBlock}>
      <NavLink to="/login">Login</NavLink>
    </div>
  </header>
);

export default Header;
