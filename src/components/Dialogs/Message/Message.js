import React from 'react';
import PropTypes from 'prop-types';

import style from '../Dialogs.module.css';

const Message = (props) => {
  const { message } = props;
  return (
    <div className={style.message}>{message}</div>
  );
};

Message.defaultProps = {
  message: PropTypes.string,
};

Message.propTypes = {
  message: PropTypes.string,
};

export default Message;
