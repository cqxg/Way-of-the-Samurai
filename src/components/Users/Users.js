import React from 'react';

import * as axios from 'axios';

import userPhoto from '../../assets/images/unnamed.jpg'

import styles from './Users.module.css';

// user.photos.small != null ? user.photos.small : { userPhoto }

const Users = (props) => {

    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items);
                    console.log(response)
                });
        }
    };

    const span1 = (user) => {

        return (
            <span>
                <div>
                    <img src={userPhoto} className={styles.Photo} />
                </div>
                <div>
                    {user.followed
                        ? <button onClick={() => { props.unfollow(user.id); }}>Unfollow</button>
                        : <button onClick={() => { props.follow(user.id); }}>Follow</button>}
                </div>
            </span>
        );
    };

    const span2 = (user) => {
        const { name, status } = user;

        return (
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
    };

    const newMap = props.users.map((user) => (
        <div key={user.id}>
            {span1(user)}
            {span2(user)}
        </div>
    ));

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {newMap}
        </div>
    );
};

export default Users;
