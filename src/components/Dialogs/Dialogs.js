import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Dialogs.module.css';

const DialogItem = (props) => {
  const path = `/dialogs/${props.id}`;

  return (
    <div className={`${style.dialog} ${style.active}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => <div className={style.message}>{props.message}</div>;

const Dialogs = (props) => {
  const dialogs = [
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

  const messages = [
    {
      id: '1',
      message: 'qq all',
    },
    {
      id: '2',
      message: 'hello world',
    },
    {
      id: '3',
      message: 'priveti4 ot Marmeladi4a',
    },
  ];

  const dialogsElements = dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
  const messagesElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={style.messages}>
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
