import React from 'react';

import axios from 'axios';

import userPhoto from '../../assets/images/unnamed.jpg'

import styles from './Users.module.css';

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
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

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                console.log(response)
            });
    };

    pagination = () => {
        const pages = [];

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        };

        return (
            <div>
                {pages.map(page => {
                    return <span
                        className={this.props.currentPage === page && styles.selectedPage}
                        onClick={() => { this.onPageChanged(page) }}>{page}
                    </span>
                })}
            </div >
        );
    };

    render() {
        return (
            <div>
                {this.pagination()}
                {this.goMap()}
            </div>
        )
    };
};

export default UsersAPIComponent;