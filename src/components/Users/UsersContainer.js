import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';

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
    const { props } = this;
    const {
      currentPage, pageSize,
    } = this.props;

    props.toggleIsFetching(true);
    axios.get(`${MAIN_URL}users?profile/page=${currentPage}&count=${pageSize}`, {
      withCredentials: true,
    })
      .then((response) => {
        props.toggleIsFetching(false);
        props.setUsers(response.data.items);
        props.setTotalUsersCount(response.data.totalCount);
      });
  }

    onPageChanged = (pageNumber) => {
      const { props } = this;
      const {
        pageSize,
      } = this.props;

      props.toggleIsFetching(true);
      props.setCurrentPage(pageNumber);
      axios.get(`${MAIN_URL}users?page=${pageNumber}&count=${pageSize}`, {
        withCredentials: true,
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
};

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
