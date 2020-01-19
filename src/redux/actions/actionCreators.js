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

const followActionCreator = (userID) => ({ type: FOLLOW, userID });
const unfollowActionCreator = (userID) => ({ type: UNFOLLOW, userID });
const setUsersActionCreator = (users) => ({ type: SET_USERS, users });
const setCurrentPageActionCreator = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
const setTotalUsersCountActionCreator = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });

export {
  followActionCreator,
  unfollowActionCreator,
  setUsersActionCreator,
  sendMessageCreator,
  updateNewMessageBodyCreator,
  addPostActionCreator,
  updateNewPostTextActionCreator,
  setCurrentPageActionCreator,
  setTotalUsersCountActionCreator,
};
