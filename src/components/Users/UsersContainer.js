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
  toggleIsFetching,
} from '../../redux/actions/actionCreators';

import Users from './Users';

class UsersContainer extends Component {
  componentDidMount() {
    const {
      toggleIsFetching, currentPage, pageSize, setUsers, setTotalUsersCount,
    } = this.props;

    toggleIsFetching(true);
    axios.get(`${MAIN_URL}users?profile/page=${currentPage}&count=${pageSize}`, {
      withCredentials: true,
    })
      .then((response) => {
        toggleIsFetching(false);
        setUsers(response.data.items);
        setTotalUsersCount(response.data.totalCount);
      });
  }

    onPageChanged = (pageNumber) => {
      const {
        toggleIsFetching, setCurrentPage, pageSize, setUsers,
      } = this.props;

      toggleIsFetching(true);
      setCurrentPage(pageNumber);
      axios.get(`${MAIN_URL}users?page=${pageNumber}&count=${pageSize}`, {
        withCredentials: true,
      })
        .then((response) => {
          toggleIsFetching(false);
          setUsers(response.data.items);
        });
    };

    render() {
      const {
        isFetching, totalUsersCount, pageSize, currentPage, users, follow, unfollow,
      } = this.props;

      return (
        <>
          {isFetching ? <Loader /> : null}
          <Users
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChanged={this.onPageChanged}
            users={users}
            follow={follow}
            unfollow={unfollow}
          />
        </>
      );
    }
}

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
});

export default connect(
  mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
  },
)(UsersContainer);
