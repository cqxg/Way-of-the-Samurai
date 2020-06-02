import React from 'react';
import PropTypes from 'prop-types';

import User from './User';

import Paginator from '../../utils/Paginator/paginator';

const Users = (props) => {
  const {
    users,
    follow,
    unfollow,
    pageSize,
    currentPage,
    onPageChanged,
    totalItemsCount,
    followingInProgress,
  } = props;

  const goMap = () => {
    const newMap = users.map((user) => (
      <User
        user={user}
        follow={follow}
        unfollow={unfollow}
        followingInProgress={followingInProgress}
      />
    ));

    return newMap;
  };

  return (
    <div>
      <Paginator
        totalItemsCount={totalItemsCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />
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
  totalItemsCount: PropTypes.number,
  followingInProgress: PropTypes.instanceOf(Array),
  users: PropTypes.instanceOf(Array),
};

Users.propTypes = {
  follow: PropTypes.func,
  unfollow: PropTypes.func,
  pageSize: PropTypes.number,
  onPageChanged: PropTypes.func,
  currentPage: PropTypes.number,
  totalItemsCount: PropTypes.number,
  followingInProgress: PropTypes.instanceOf(Array),
  users: PropTypes.instanceOf(Array),
};

export default Users;
