import {
  ADD_POST, UPDATE_NEW_POST_TEXT, UPDATE_NEW_MESSAGE_BODY, SEND_MESSAGE,
} from './actionTypes';

import state from './state';

const store = {

  getState() {
    return state;
  },

  callSubscriber() {
    console.log('changed');
  },

  subscribe(observer) {
    this.callSubscriber = observer;
  },

  dispatch(action) {
    const { type, newText, body } = action;
    const { profilePage, dialogsPage } = state;

    if (type === ADD_POST) {
      const newPost = {
        id: 7,
        message: profilePage.newPostText,
        likesCount: 0,
      };

      profilePage.posts.push(newPost);
      profilePage.newPostText = '';

      this.callSubscriber(state);
    } else if (type === UPDATE_NEW_POST_TEXT) {
      profilePage.newPostText = newText;

      this.callSubscriber(state);
    } else if (type === UPDATE_NEW_MESSAGE_BODY) {
      dialogsPage.newMessageBody = body;

      this.callSubscriber(state);
    } else if (type === SEND_MESSAGE) {
      const body = dialogsPage.newMessageBody;

      dialogsPage.newMessageBody = '';
      dialogsPage.messages.push({ id: 8, message: body });

      this.callSubscriber(state);
    }
  },
};

export { store };
