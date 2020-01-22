import React, { Component } from 'react';
import { connect } from 'react-redux';

import Preloader from '../../utils/preloader';

import axios from 'axios';

import {
    followActionCreator,
    unfollowActionCreator,
    setUsersActionCreator,
    setCurrentPageActionCreator,
    setTotalUsersCountActionCreator,
    toggleIsFetchingActionCreator
} from '../../redux/actions/actionCreators';

import Users from './Users';

class UsersContainer extends Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    };

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
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

const mapDispatchToProps = (dispatch) => ({
    follow: (userID) => {
        dispatch(followActionCreator(userID));
    },
    unfollow: (userID) => {
        dispatch(unfollowActionCreator(userID));
    },
    setUsers: (users) => {
        dispatch(setUsersActionCreator(users));
    },
    setCurrentPage: (pageNumber) => {
        dispatch(setCurrentPageActionCreator(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
        dispatch(setTotalUsersCountActionCreator(totalCount));
    },
    toggleIsFetching: (isFetching) => {
        dispatch(toggleIsFetchingActionCreator(isFetching));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
