import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../../utils/url-utils';
import { I18N_KEYS } from '../../utils/constants';

import style from './Navbar.module.css';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className={style.nav}>
      <div className={`${style.item}`}>
        <NavLink to={ROUTES.PROFILE} activeClassName={style.activeLink}>{t(I18N_KEYS.PROFILE)}</NavLink>
      </div>
      <div className={`${style.item} ${style.active}`}>
        <NavLink to={ROUTES.DIALOGS} activeClassName={style.activeLink}>{t(I18N_KEYS.MESSAGES)}</NavLink>
      </div>
      <div className={`${style.item} ${style.active}`}>
        <NavLink to={ROUTES.USERS} activeClassName={style.activeLink}>{t(I18N_KEYS.USERS)}</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to={ROUTES.NEWS} activeClassName={style.activeLink}>{t(I18N_KEYS.NEWS)}</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to={ROUTES.MUSIC} activeClassName={style.activeLink}>{t(I18N_KEYS.MUSIC)}</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to={ROUTES.SETTINGS} activeClassName={style.activeLink}>{t(I18N_KEYS.SETTINGS)}</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
