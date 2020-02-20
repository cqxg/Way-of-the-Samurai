import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import userPhoto from '../../assets/images/unnamed.jpg';
import { ALT_USER_AVATAR } from '../../utils/constants';

import styles from './Users.module.css';

const Users = (props) => {
  const {
    follow,
    unfollow,
    pageSize,
    currentPage,
    onPageChanged,
    totalUsersCount,
    followingInProgress,
  } = props;

  const pagination = () => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    const pages = [...Array(pagesCount).keys()];

    const pagesMap = pages.map((page) => {
      const isCurrent = currentPage === page;
      return (
        <span
          key={page}
          role="button"
          tabIndex={0}
          className={isCurrent ? styles.selectedPage : null}
          onClick={() => onPageChanged(page)}
          onKeyPress={() => onPageChanged(page)}
        >
          {page}
        </span>
      );
    });

    return (
      <div>
        {pagesMap}
      </div>
    );
  };


  const getButton = (text, handler, user) => (
    <button type="submit" disabled={followingInProgress.some((id) => id === user.id)} onClick={() => handler(user.id)}>
      {text}
    </button>
  );

  const span1 = (user) => (
    <span>
      <div>
        <NavLink to={`/profile/${user.id}`}>
          <img
            alt={ALT_USER_AVATAR}
            src={user.photos.small != null
              ? user.photos.small
              : userPhoto}
            className={styles.Photo}
          />
        </NavLink>
      </div>
      <div>
        {user.followed ? getButton('Unfollow', unfollow, user) : getButton('Follow', follow, user)}
      </div>
    </span>
  );

  const span2 = (user) => (
    <span>
      <span>
        <div>
          {user.name}
        </div>
        <div>
          {user.status}
        </div>
      </span>
    </span>
  );

  const goMap = () => {
    const newMap = props.users.map((user) => (
      <div key={user.id}>
        {span1(user)}
        {span2(user)}
      </div>
    ));

    return newMap;
  };

  return (
    <div>
      {pagination()}
      {goMap()}
    </div>
  );
};

Users.defaultProps = {
  follow: PropTypes.func,
  unfollow: PropTypes.func,
  pageSize: PropTypes.number,
  onPageChanged: PropTypes.func,
  currentPage: PropTypes.number,
  totalUsersCount: PropTypes.number,
  followingInProgress: PropTypes.instanceOf(Array),
  users: PropTypes.instanceOf(Array),
};

Users.propTypes = {
  follow: PropTypes.func,
  unfollow: PropTypes.func,
  pageSize: PropTypes.number,
  onPageChanged: PropTypes.func,
  currentPage: PropTypes.number,
  totalUsersCount: PropTypes.number,
  followingInProgress: PropTypes.instanceOf(Array),
  users: PropTypes.instanceOf(Array),
};

export default Users;
