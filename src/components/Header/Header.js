import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { I18N } from '../../utils/constants';

import style from './Header.module.css';

const Header = (props) => {
    const { t, i18n } = useTranslation();
    const { isAuth, login } = props;

    return (
        <header className={style.header}>
            <div className={style.loginBlock}>
                {isAuth
                    ? (
                        <div>
                            {login}
                            {' '}
-
                            {' '}
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
