import React from 'react';
import { NavLink } from 'react-router-dom';

import style from '../Dialogs.module.css';

const DialogItem = (props) => {
  const { id, name } = props;
  const path = `/dialogs/${id}`;

  return (
    <div className={`${style.dialog} ${style.active}`}>
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;
