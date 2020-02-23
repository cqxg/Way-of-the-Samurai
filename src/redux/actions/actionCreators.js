import { WELL } from '../../utils/constants';

import {
  ADD_POST,
  UPDATE_NEW_POST_TEXT,
  UPDATE_NEW_MESSAGE_BODY,
  SEND_MESSAGE,
  FOLLOW,
  UNFOLLOW,
  SET_USERS,
  SET_CURRENT_PAGE,
  SET_TOTAL_USERS_COUNT,
  TOGGLE_IS_FETCHING,
  TOGGLE_FOLLOWING_PROGRESS,
  SET_USER_PROFILE,
  SET_USER_DATA,
} from './actionTypes';

import { usersAPI, authAPI } from '../../api/api';

const sendMessageCreator = () => ({ type: SEND_MESSAGE });

const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body,
});

const addPostActionCreator = () => ({ type: ADD_POST });

const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

const followSuccess = (userID) => ({ type: FOLLOW, userID });
const unfollowSuccess = (userID) => ({ type: UNFOLLOW, userID });
const setUsers = (users) => ({ type: SET_USERS, users });
const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
const toggleFollowingProgress = (isFetching, userID) => ({
  type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userID,
});
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });


const setAuthUserData = (userId, email, login) => ({
  type: SET_USER_DATA, data: { userId, email, login },
});

const getAuthUserData = () => (dispatch) => {
  authAPI.me().then((response) => {
    if (response.data.resultCode === WELL) {
      const { id, email, login } = response.data.data;
      dispatch(setAuthUserData(id, email, login));
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
  follow,
  unfollow,
  setUsers,
  getUsers,
  getUserProfile,
  setCurrentPage,
  followSuccess,
  unfollowSuccess,
  setUserProfile,
  setAuthUserData,
  getAuthUserData,
  toggleIsFetching,
  setTotalUsersCount,
  sendMessageCreator,
  addPostActionCreator,
  toggleFollowingProgress,
  updateNewMessageBodyCreator,
  updateNewPostTextActionCreator,
};
