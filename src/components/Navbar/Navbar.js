import React, { Component } from 'react';

import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <a href='/profile'>Profile</a>
            </div>
            <div className={`${style.item} ${style.active}`}>
                <a href='/dialogs'>Messages</a>
            </div>
            <div className={style.item}>
                <a href='/'>News</a>
            </div>
            <div className={style.item}>
                <a href='/'>Music</a>
            </div>
            <div className={style.item}>
                <a href='/'>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;