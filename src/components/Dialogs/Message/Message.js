import React from 'react';

import style from '../Dialogs.module.css';

const Message = (props) => <div className={style.message}>{props.message}</div>;

export default Message;
