import { ADD_POST, UPDATE_NEW_POST_TEXT, UPDATE_NEW_MESSAGE_BODY, SEND_MESSAGE } from './actionTypes'

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
        if (action.type === ADD_POST) {
            const newPost = {
                id: 7,
                message: state.profilePage.newPostText,
                likesCount: 0,
            };

            state.profilePage.posts.push(newPost);
            state.profilePage.newPostText = '';
            this.callSubscriber(state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            state.profilePage.newPostText = action.newText;
            this.callSubscriber(state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            state.dialogsPage.newMessageBody = action.body;
            this.callSubscriber(state);
        } else if (action.type === SEND_MESSAGE) {
            const body = state.dialogsPage.newMessageBody;
            state.dialogsPage.newMessageBody = '';
            state.dialogsPage.messages.push({ id: 8, message: body });
            this.callSubscriber(state);
        }
    },
};

export { store };
