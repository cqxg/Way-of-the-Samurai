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
  SET_USER_PROFILE,
  SET_USER_DATA,
} from './actionTypes';

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

const follow = (userID) => ({ type: FOLLOW, userID });
const unfollow = (userID) => ({ type: UNFOLLOW, userID });
const setUsers = (users) => ({ type: SET_USERS, users });
const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } });

export {
  follow,
  unfollow,
  setUsers,
  sendMessageCreator,
  updateNewMessageBodyCreator,
  addPostActionCreator,
  updateNewPostTextActionCreator,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  setUserProfile,
  setUserData,
};
