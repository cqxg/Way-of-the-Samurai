import {
  FOLLOW,
  ADD_POST,
  UNFOLLOW,
  SET_USERS,
  SET_STATUS,
  SEND_MESSAGE,
  SET_USER_DATA,
  SET_INITIALIZED,
  SET_CURRENT_PAGE,
  SET_USER_PROFILE,
  TOGGLE_IS_FETCHING,
  SET_TOTAL_USERS_COUNT,
  UPDATE_NEW_MESSAGE_BODY,
  TOGGLE_FOLLOWING_PROGRESS,
} from './actionTypes';

const setInitialized = () => ({ type: SET_INITIALIZED });
const setUsers = (users) => ({ type: SET_USERS, payload: users });
const setStatus = (status) => ({ type: SET_STATUS, payload: status });
const followSuccess = (userID) => ({ type: FOLLOW, payload: userID });
const unfollowSuccess = (userID) => ({ type: UNFOLLOW, payload: userID });
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, payload: profile });
const addPostActionCreator = (newPostText) => ({ type: ADD_POST, payload: newPostText });
const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, payload: currentPage });
const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, payload: isFetching });
const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, payload: body });
const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, payload: newMessageBody });
const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, payload: totalUsersCount });
const toggleFollowingProgress = (isFetching, userID) => ({ type: TOGGLE_FOLLOWING_PROGRESS, payload: { isFetching, userID } });
const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: {
    userId, email, login, isAuth,
  },
});

export {
  setUsers,
  setStatus,
  followSuccess,
  setInitialized,
  setUserProfile,
  setCurrentPage,
  unfollowSuccess,
  setAuthUserData,
  toggleIsFetching,
  setTotalUsersCount,
  sendMessageCreator,
  addPostActionCreator,
  toggleFollowingProgress,
  updateNewMessageBodyCreator,
};
