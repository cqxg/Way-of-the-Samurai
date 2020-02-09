import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';

import Loader from '../../utils/loader';

import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress,
} from '../../redux/actions/actionCreators';

import usersAPI from '../../api/api';

import Users from './Users';

class UsersContainer extends Component {
  componentDidMount() {
    const { props } = this;
    props.toggleIsFetching(true);

    usersAPI.getUsers(props.currentPage, props.pageSize).then((data) => {
      props.toggleIsFetching(false);
      props.setUsers(data.items);
      props.setTotalUsersCount(data.totalCount);
    });
  }

    onPageChanged = (pageNumber, pageSize) => {
      const { props } = this;
      props.toggleIsFetching(true);
      props.setCurrentPage(pageNumber);

      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`, 
      {
          withCredentials:true,
      })
      .then((response) => {
        props.toggleIsFetching(false);
        props.setUsers(response.data.items);
      });
    };

    render() {
      const { props, onPageChanged } = this;
      const {
        isFetching, totalUsersCount, pageSize, currentPage, users,
      } = this.props;

      return (
        <>
          {isFetching ? <Loader /> : null}
          <Users
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            users={users}
            follow={props.follow}
            unfollow={props.unfollow}
            toggleFollowingProgress={props.toggleFollowingProgress}
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
  followingInProgress: state.usersPage.followingInProgress,
});

UsersContainer.defaultProps = {
  users: PropTypes.array,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  totalUsersCount: PropTypes.number,
  isFetching: PropTypes.bool,
  follow: PropTypes.func,
  unfollow: PropTypes.func,
  setUsers: PropTypes.func,
  setCurrentPage: PropTypes.func,
  setTotalUsersCount: PropTypes.func,
  toggleIsFetching: PropTypes.func,
  toggleFollowingProgress: PropTypes.func,
};

UsersContainer.propTypes = {
  users: PropTypes.instanceOf(Array),
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  totalUsersCount: PropTypes.number,
  isFetching: PropTypes.bool,
  follow: PropTypes.func,
  unfollow: PropTypes.func,
  setUsers: PropTypes.func,
  setCurrentPage: PropTypes.func,
  toggleIsFetching: PropTypes.func,
  setTotalUsersCount: PropTypes.func,
  toggleFollowingProgress: PropTypes.func,
};

export default connect(
  mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress,
  },
)(UsersContainer);
