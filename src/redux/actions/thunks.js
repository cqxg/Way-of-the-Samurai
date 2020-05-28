import { stopSubmit } from 'redux-form';

import { WELL } from '../../utils/constants';

import { usersAPI, authAPI } from '../../api/api';

import {
  setUsers,
  setStatus,
  followSuccess,
  setUserProfile,
  setCurrentPage,
  setInitialized,
  unfollowSuccess,
  setAuthUserData,
  toggleIsFetching,
  setTotalUsersCount,
  toggleFollowingProgress,
} from './actionCreators';

const initializeApp = () => (dispatch) => {
  const promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(setInitialized());
  });
};

const getAuthUserData = () => async (dispatch) => {
  const response = await authAPI.me();
  if (response.data.resultCode === WELL) {
    const { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

const login = (email, password, rememberMe) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe);
  if (response.data.resultCode === WELL) {
    dispatch(getAuthUserData());
  } else {
    const mess = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
    dispatch(stopSubmit('login', { _error: mess }));
  }
};

const logout = () => async (dispatch) => {
  const response = await authAPI.logout();
  if (response.data.resultCode === WELL) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

const getUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(currentPage));
  const data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
};

const getUserProfile = (userId) => async (dispatch) => {
  const response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

const getStatus = (userId) => async (dispatch) => {
  const response = await usersAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

const updateStatus = (status) => async (dispatch) => {
  const response = usersAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(response.data));
  }
};

const follow = (userId) => async (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));
  const response = await usersAPI.follow(userId);
  if (response.data.resultCode === 0) {
    dispatch(followSuccess(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

const unfollow = (userId) => async (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));
  const response = await usersAPI.unfollow(userId);
  if (response.data.resultCode === 0) {
    dispatch(unfollowSuccess(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

const savePhoto = (file) => async (dispatch) => {
  const response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
}

export {
  login,
  logout,
  follow,
  unfollow,
  getUsers,
  getStatus,
  savePhoto,
  updateStatus,
  initializeApp,
  getUserProfile,
  getAuthUserData,
};
