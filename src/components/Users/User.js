import React from 'react';
import { NavLink } from 'react-router-dom';

import userPhoto from '../../assets/images/unnamed.jpg';
import { ALT_USER_AVATAR } from '../../utils/constants';

import styles from './Users.module.css';

const User = (props) => {
  const {
    user,
    follow,
    unfollow,
    followingInProgress,
  } = props;


  const getButton = (text, handler, user) => (
    <button type="submit" disabled={followingInProgress.some((id) => id === user.id)} onClick={() => handler(user.id)}>
      {text}
    </button>
  );

  const userRender = (user) => (
    <div>
      <span>
        <div>
          <NavLink to={`/profile/${user.id}`}>
            <img
              alt={ALT_USER_AVATAR}
              src={user.photos.small ? user.photos.small : userPhoto}
              className={styles.Photo}
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? getButton('Unfollow', unfollow, user) : getButton('Follow', follow, user)}
        </div>
      </span>
      <span>
        <div>
          {user.name}
        </div>
        <div>
          {user.status}
        </div>
      </span>
    </div>
  );

  return (
    <div>
      {userRender(user)}
    </div>
  );
};

export default User;
