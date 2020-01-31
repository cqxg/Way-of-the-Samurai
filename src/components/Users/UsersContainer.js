import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { MAIN_URL } from '../../utils/url-utils';
import Loader from '../../utils/loader';

import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
} from '../../redux/actions/actionCreators';

import Users from './Users';

class UsersContainer extends Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`${MAIN_URL}users?profile/page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true,
        })
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    };

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`${MAIN_URL}users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true,
        })
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Loader /> : null}
                < Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />
            </>
        );

    };
};

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
});

export default connect(
    mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer);
