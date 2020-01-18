import React from 'react';

import * as axios from 'axios';

import userPhoto from '../../assets/images/unnamed.jpg'

import styles from './Users.module.css';

class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items);
                console.log(response)
            });
    };

    goMap = () => {
        const newMap = this.props.users.map((user) => (
            <div key={user.id}>
                {this.span1(user)}
                {this.span2(user)}
            </div>
        ));

        return newMap
    };

    span1 = (user) => {

        return (
            <span>
                <div>
                    <img src={user.photos.small != null ? user.photos.small : { userPhoto }} className={styles.Photo} />
                </div>
                <div>
                    {user.followed
                        ? <button onClick={() => { this.props.unfollow(user.id); }}>Unfollow</button>
                        : <button onClick={() => { this.props.follow(user.id); }}>Follow</button>}
                </div>
            </span>
        );
    };

    span2 = (user) => {

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

    render() {
        return (
            <div>
                {this.goMap()}
            </div>
        )
    };
};

export default Users