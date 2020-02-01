import React from 'react';

import style from '../Dialogs.module.css';

const Message = (props) => {
  const { message } = props;
  return (
    <div className={style.message}>{message}</div>
  );
};

export default Message;
