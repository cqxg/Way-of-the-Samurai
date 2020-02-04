import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

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

DialogItem.defaultProps = {
  id: PropTypes.string,
  name: PropTypes.string,
};

DialogItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
};

export default DialogItem;
