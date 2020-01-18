import React from 'react';

import * as axios from 'axios';

import userPhoto from '../../assets/images/unnamed.jpg'

import styles from './Users.module.css';

class Users extends React.Component {

    getUsers = () => {
        if (props.users.lenght === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items);
            });
        };
    };

    newMap = props.users.map((user) => (
        <div key={user.id}>
            {span1(user)}
            {span2(user)}
        </div>
    ));

    span1 = (user) => {
        const { id, followed } = user;

        return (
            <span>
                <div>
                    <img src={user.photos.small != null ? user.photos.small : { userPhoto }} className={styles.Photo} />
                </div>
                <div>
                    {followed
                        ? <button onClick={() => { props.unfollow(id); }}>Unfollow</button>
                        : <button onClick={() => { props.follow(id); }}>Follow</button>}
                </div>
            </span>
        );
    };

    span2 = (user) => {
        const { name, status } = user;

        return (
            <span>
                <span>
                    <div>
                        {name}
                    </div>
                    <div>
                        {status}
                    </div>
                </span>
            </span>
        );
    };
    render() {
        return (
            <div>
                {this.newMap}
            </div>
        )
    };
};

export default Users