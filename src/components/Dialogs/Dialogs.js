import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Dialogs.module.css'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => <div className={style.message}>{props.message}</div>;

const Dialogs = (props) => {
    const dialogsData = [
        {
            id: '1',
            name: '105',
        },
        {
            id: '2',
            name: 'FrinteZz',
        },
        {
            id: '3',
            name: 'Gaming',
        },
        {
            id: '4',
            name: 'Pominki',
        },
        {
            id: '5',
            name: 'Side',
        },
        {
            id: '6',
            name: 'EFsquad',
        },
    ];

    const messageData = [
        {
            id: '1',
            message: 'qq all'
        },
        {
            id: '2',
            message: 'hello world'
        },
        {
            id: '3',
            message: 'priveti4 ot Marmeladi4a'
        }
    ];

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
            </div>
            <div className={style.messages}>
                <Message message={messageData[0].message} id={messageData[0].id} />
                <Message message={messageData[1].message} id={messageData[1].id} />
                <Message message={messageData[2].message} id={messageData[2].id} />
            </div>
        </div>
    );
};

export default Dialogs;