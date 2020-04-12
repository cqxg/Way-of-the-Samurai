import React from 'react';
import { NavLink } from 'react-router-dom';

import { I18N } from '../../utils/constants';
import {ROUTES} from '../../utils/url-utils';

import style from './Navbar.module.css';

const Navbar = () => (
  <nav className={style.nav}>
    <div className={style.item}>
      <NavLink to={ROUTES.PROFILE} activeClassName={style.activeLink}>{I18N.EN.PROFILE}</NavLink>
    </div>
    <div className={`${style.item} ${style.active}`}>
      <NavLink to={ROUTES.DIALOGS} activeClassName={style.activeLink}>{I18N.EN.MESSAGES}</NavLink>
    </div>
    <div className={`${style.item} ${style.active}`}>
      <NavLink to={ROUTES.USERS} activeClassName={style.activeLink}>{I18N.EN.USERS}</NavLink>
    </div>
    <div className={style.item}>
      <NavLink to={ROUTES.NEWS} activeClassName={style.activeLink}>{I18N.EN.NEWS}</NavLink>
    </div>
    <div className={style.item}>
      <NavLink to={ROUTES.MUSIC} activeClassName={style.activeLink}>{I18N.EN.MUSIC}</NavLink>
    </div>
    <div className={style.item}>
      <NavLink to="/settings" activeClassName={style.activeLink}>{I18N.EN.SETTINGS}</NavLink>
    </div>
  </nav>
);

export default Navbar;
