import { connect } from 'react-redux';

import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from '../../redux/actions/actionCreators';

import Users from './Users';

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
