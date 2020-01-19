import { connect } from 'react-redux';

import {
  followActionCreator,
  unfollowActionCreator,
  setUsersActionCreator,
  setCurrentPageActionCreator,
  setTotalUsersCountActionCreator,
} from '../../redux/actions/actionCreators';

import UsersAPIComponent from './UsersAPIComponent';

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
