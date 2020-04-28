import { WELL } from '../../utils/constants';

import { usersAPI, authAPI } from '../../api/api';

import {
  setUsers,
  setStatus,
  followSuccess,
  setUserProfile,
  setCurrentPage,
  unfollowSuccess,
  setAuthUserData,
  toggleIsFetching,
  setTotalUsersCount,
  toggleFollowingProgress,
} from './actionCreators';

const getAuthUserData = () => (dispatch) => {
  authAPI.me().then((response) => {
    if (response.data.resultCode === WELL) {
      const { id, email, login } = response.data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  });
};

const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((response) => {
    if (response.data.resultCode === WELL) {
      dispatch(getAuthUserData());
    }
  });
};

const logout = () => (dispatch) => {
  authAPI.logout().then((response) => {
    if (response.data.resultCode === WELL) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
};

const getUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(currentPage));
  usersAPI.getUsers(currentPage, pageSize).then((data) => {
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  });
};

const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};

const getStatus = (userId) => (dispatch) => {
  usersAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
  });
};

const updateStatus = (status) => (dispatch) => {
  usersAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(response.data));
    }
  });
};

const follow = (userId) => (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));

  usersAPI.follow(userId).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(followSuccess(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
  });
};

const unfollow = (userId) => (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));

  usersAPI.unfollow(userId).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(unfollowSuccess(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
  });
};

export {
  login,
  logout,
  follow,
  unfollow,
  getUsers,
  getStatus,
  updateStatus,
  getUserProfile,
  getAuthUserData,
};
