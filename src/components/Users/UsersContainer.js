import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loader from '../../utils/loader';

import {
  follow,
  unfollow,
  getUsers,
  setCurrentPage,
  toggleFollowingProgress,
} from '../../redux/actions/actionCreators';

import Users from './Users';

class UsersContainer extends Component {
  componentDidMount() {
    const { props } = this;
    props.getUsers(props.currentPage, props.pageSize);
  }

    onPageChanged = (pageNumber) => {
      const { props } = this;
      props.getUsers(pageNumber, props.pageSize);
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
            followingInProgress={props.followingInProgress}
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
  followingInProgress: PropTypes.bool,
  follow: PropTypes.func,
  unfollow: PropTypes.func,
  getUsers: PropTypes.func,
  toggleFollowingProgress: PropTypes.func,
};

UsersContainer.propTypes = {
  users: PropTypes.instanceOf(Array),
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  totalUsersCount: PropTypes.number,
  isFetching: PropTypes.bool,
  followingInProgress: PropTypes.bool,
  follow: PropTypes.func,
  unfollow: PropTypes.func,
  getUsers: PropTypes.func,
  toggleFollowingProgress: PropTypes.func,
};

export default connect(
  mapStateToProps, {
    follow,
    unfollow,
    getUsers,
    setCurrentPage,
    toggleFollowingProgress,
  },
)(UsersContainer);
