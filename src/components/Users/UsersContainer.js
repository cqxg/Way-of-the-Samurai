import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import {
  takeUser,
  getPageSize,
  getIsFetching,
  getCurrentPage,
  getTotalUsersCount,
  getFollowingInProgress,
} from '../../redux/selectors/selectors';
import { getUsers, follow, unfollow } from '../../redux/actions/thunks';
import { setCurrentPage } from '../../redux/actions/actionCreators';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import Loader from '../../utils/loader';

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
      users,
      pageSize,
      isFetching,
      currentPage,
      totalItemsCount,
    } = this.props;

    return (
      <div>
        {isFetching ? <Loader /> : null}
        <Users
          totalItemsCount={totalItemsCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChanged={onPageChanged}
          users={users}
          follow={props.follow}
          unfollow={props.unfollow}
          followingInProgress={props.followingInProgress}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: takeUser(state),
  pageSize: getPageSize(state),
  totalItemsCount: getTotalUsersCount(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state),
  followingInProgress: getFollowingInProgress(state),
});

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    getUsers, setCurrentPage, follow, unfollow,
  }),
)(UsersContainer);

UsersContainer.defaultProps = {
  users: PropTypes.array,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  totalItemsCount: PropTypes.number,
  isFetching: PropTypes.bool,
  followingInProgress: PropTypes.array,
  getUsers: PropTypes.func,
  follow: PropTypes.func,
  unfollow: PropTypes.func,
};

UsersContainer.propTypes = {
  users: PropTypes.instanceOf(Array),
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  totalItemsCount: PropTypes.number,
  isFetching: PropTypes.bool,
  followingInProgress: PropTypes.instanceOf(Array),
  getUsers: PropTypes.func,
  follow: PropTypes.func,
  unfollow: PropTypes.func,
};
