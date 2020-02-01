import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import userPhoto from '../../assets/images/unnamed.jpg';
import { MAIN_URL } from '../../utils/url-utils';
import { API_KEY } from '../../utils/constants';

import styles from './Users.module.css';

const Users = (props) => {
  const pagination = () => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    const pages = [...Array(pagesCount).keys()];

    const pagesMap = pages.map((page) => (
      <span
        className={props.currentPage === page && styles.selectedPage}
        onClick={() => props.onPageChanged(page)}
      >
        {page}
      </span>
    ));

    return (
      <div>
        {pagesMap}
      </div>
    );
  };

  const span1 = (user) => (
    <span>
      <div>
        <NavLink to={`/profile/${user.id}`}>
          <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.Photo} />
        </NavLink>
      </div>
      <div>
        {user.followed
          ? <button type="submit" onClick={() => goUnfollow(user)}>Unfollow</button>
          : <button type="submit" onClick={() => goFollow(user)}>Follow</button>}
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

  const goUnfollow = (user) => {
    axios.delete(`${MAIN_URL}follow/${user.id}`, {
      withCredentials: true,
      headers: {
        'API-KEY': API_KEY,
      },
    })
      .then((response) => {
        if (response.data.resultCode === 0) {
          props.unfollow(user.id);
        }
      });
  };

  const goFollow = (user) => {
    axios.post(`${MAIN_URL}follow/${user.id}`, {}, {
      withCredentials: true,
      headers: {
        'API-KEY': API_KEY,
      },
    })
      .then((response) => {
        if (response.data.resultCode === 0) {
          props.follow(user.id);
        }
      });
  };

  return (
    <div>
      {pagination()}
      {goMap()}
    </div>
  );
};

export default Users;
