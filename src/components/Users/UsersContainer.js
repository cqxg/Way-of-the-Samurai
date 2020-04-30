import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import Loader from '../../utils/loader';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { setCurrentPage } from '../../redux/actions/actionCreators';
import { getUsers, follow, unfollow } from '../../redux/actions/thunks';
import { 
    takeUser,
    getPageSize,
    getIsFetching,
    getCurrentPage,
    getTotalUsersCount,
    getFollowingInProgress,
 } from '../../redux/selectors/selectors';

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
        <div>
          {isFetching ? <Loader /> : null}
          <Users
            totalUsersCount={totalUsersCount}
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
  totalUsersCount: getTotalUsersCount(state),
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
  totalUsersCount: PropTypes.number,
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
  totalUsersCount: PropTypes.number,
  isFetching: PropTypes.bool,
  followingInProgress: PropTypes.instanceOf(Array),
  getUsers: PropTypes.func,
  follow: PropTypes.func,
  unfollow: PropTypes.func,
};
