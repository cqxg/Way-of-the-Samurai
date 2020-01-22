import React from 'react';

import userPhoto from '../../assets/images/unnamed.jpg';

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

  const goMap = () => {
    const newMap = props.users.map((user) => (
      <div key={user.id}>
        {span1(user)}
        {span2(user)}
      </div>
    ));

    return newMap;
  };

  const span1 = (user) => (
    <span>
      <div>
        <img src={user.photos.small != null ? user.photos.small : { userPhoto }} className={styles.Photo} />
      </div>
      <div>
        {user.followed
          ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
          : <button onClick={() => props.follow(user.id)}>Follow</button>}
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

  return (
    <div>
      {pagination()}
      {goMap()}
    </div>
  );
};

export default Users;
