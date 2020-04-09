import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { I18N } from '../../utils/constants';

import style from './Header.module.css';

const Header = (props) => {
    const { isAuth, login } = props;
    return (
        <header className={style.header}>
            <div className={style.loginBlock}>
                {isAuth ? login : <NavLink to="/login">{I18N.EN.LOGIN}</NavLink>}
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
