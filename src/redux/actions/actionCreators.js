import {
  ADD_POST,
  UPDATE_NEW_POST_TEXT,
  UPDATE_NEW_MESSAGE_BODY,
  SEND_MESSAGE,
  FOLLOW,
  UNFOLLOW,
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
const setUsersActionCreator = (users) => ({ type: UNFOLLOW, users });

export {
  followActionCreator,
  unfollowActionCreator,
  setUsersActionCreator,
  sendMessageCreator,
  updateNewMessageBodyCreator,
  addPostActionCreator,
  updateNewPostTextActionCreator,
};
