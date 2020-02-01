import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Header.module.css';

const Header = (props) => {
    const { isAuth, login } = props;
    return (
        <header className={style.header}>
            <div className={style.loginBlock}>
                {isAuth ? login : <NavLink to="/login">Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;
