import {
  ADD_POST, UPDATE_NEW_POST_TEXT, UPDATE_NEW_MESSAGE_BODY, SEND_MESSAGE,
} from './actionTypes';

const addPostActionCreator = () => ({ type: ADD_POST });

const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

const sendMessageCreator = () => ({ type: SEND_MESSAGE });

const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body,
});

export {
  addPostActionCreator, updateNewPostTextActionCreator, sendMessageCreator, updateNewMessageBodyCreator,
};
