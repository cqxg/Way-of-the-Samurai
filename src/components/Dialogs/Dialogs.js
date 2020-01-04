import React from 'react';
import { NavLink } from 'react-router-dom';

import { dialogs, messages } from '../../index';

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

const Dialogs = () => {
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
