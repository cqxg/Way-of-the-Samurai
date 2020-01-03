import React from 'react';

import style from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return (
    <div className={style.message}>{props.message}</div>
    );
};

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name='105' id='1' />
                <DialogItem name='FrinteZz' id='2' />
                <DialogItem name='Gaming' id='3' />
                <DialogItem name='Pominki' id='4' />
                <DialogItem name='Side' id='5' />
                <DialogItem name='EFsquad' id='6' />
            </div>
            <div className={style.messages}>
                <Message message='qq all'/>
                <Message message='hello world'/>
                <Message message='priveti4 ot Marmeladi4a'/>
            </div>
        </div>
    )
}

export default Dialogs;