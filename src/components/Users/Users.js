import React from 'react';

// import * as axios from 'axios';

// axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//     props.setUsers()
// });

import styles from './Users.module.css';

const Users = (props) => {

    const span1 = (user) => {
        const { photoUrl, id, followed } = user;

        return (
            <span>
                <div>
                    <img src={photoUrl} className={styles.Photo} />
                </div>
                <div>
                    {followed
                        ? <button onClick={() => { props.unfollow(id); }}>Unfollow</button>
                        : <button onClick={() => { props.follow(id); }}>Follow</button>}
                </div>
            </span>
        );
    };

    const span2 = (user) => {
        const { fullName, status } = user;
        const { country, city } = user.location;

        return (
            <span>
                <span>
                    <div>
                        {fullName}
                    </div>
                    <div>
                        {status}
                    </div>
                </span>
                <span>
                    <div>
                        {country}
                    </div>
                    <div>
                        {city}
                    </div>
                </span>
            </span>
        )
    };

    const newMap = props.users.map((user) => {
        return (
            <div key={user.id}>
                {span1(user)}
                {span2(user)}
            </div>
        );
    });

    return (
        <div>
            {newMap}
        </div>
    );
};

export default Users;

