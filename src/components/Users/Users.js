import React from 'react';

import userPhoto from '../../assets/images/unnamed.jpg'

const Users = () => {
    const goMap = () => {
        const newMap = this.props.users.map((user) => (
            <div key={user.id}>
                {this.span1(user)}
                {this.span2(user)}
            </div>
        ));

        return newMap
    };

    const span1 = (user) => {

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

    const span2 = (user) => {

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
};

export default Users;