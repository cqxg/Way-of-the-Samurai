import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import style from './Header.module.css';

const Header = (props) => {
  const { t, i18n } = useTranslation();
  const { isAuth, login } = props;

  const activateRu = (e) => {
    i18n.changeLanguage('ru');
  };

  const activateEn = (e) => {
    i18n.changeLanguage('en');
  };

  return (
    <header className={style.header}>
      <button onClick={(e) => activateRu(e)}>{t('RU')}</button>
      <button onClick={(e) => activateEn(e)}>{t('EN')}</button>
      <div className={style.loginBlock}>
        {isAuth
          ? (
            <div>
              <span>{login}-</span>
              <button onClick={props.logout}>{t('LOGOUT')}</button>
            </div>
          )
          : <NavLink to="/login">{t('LOGIN')}</NavLink>}
      </div>
    </header>
  );
};

Header.defaultProps = {
  isAuth: PropTypes.bool,
  login: PropTypes.string,
};

Header.propTypes = {
  isAuth: PropTypes.bool,
  login: PropTypes.string,
};

export default Header;
