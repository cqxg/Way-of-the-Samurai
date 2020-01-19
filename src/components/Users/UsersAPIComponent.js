import React from 'react';

import axios from 'axios';

import Users from './Users';

import styles from './Users.module.css';

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
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
        return <Users />
    };
};

export default UsersAPIComponent;