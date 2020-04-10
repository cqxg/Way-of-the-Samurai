import React from 'react';
import { NavLink } from 'react-router-dom';

import { I18N } from '../../utils/constants';

import style from './Navbar.module.css';

const Navbar = () => (
  <nav className={style.nav}>
    <div className={style.item}>
      <NavLink to="/profile" activeClassName={style.activeLink}>{I18N.EN.PROFILE}</NavLink>
    </div>
    <div className={`${style.item} ${style.active}`}>
      <NavLink to="/dialogs" activeClassName={style.activeLink}>{I18N.EN.MESSAGES}</NavLink>
    </div>
    <div className={`${style.item} ${style.active}`}>
      <NavLink to="/users" activeClassName={style.activeLink}>{I18N.EN.USERS}</NavLink>
    </div>
    <div className={style.item}>
      <NavLink to="/news" activeClassName={style.activeLink}>{I18N.EN.NEWS}</NavLink>
    </div>
    <div className={style.item}>
      <NavLink to="/music" activeClassName={style.activeLink}>{I18N.EN.MUSIC}</NavLink>
    </div>
    <div className={style.item}>
      <NavLink to="/settings" activeClassName={style.activeLink}>{I18N.EN.SETTINGS}</NavLink>
    </div>
  </nav>
);

export default Navbar;
