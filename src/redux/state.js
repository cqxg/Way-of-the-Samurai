const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const store = {

    _state: {
        profilePage: {
            posts: [
                {
                    id: '1',
                    message: 'Hi, how are you',
                    likesCount: '12',
                },
                {
                    id: '2',
                    message: 'It`s my first posts',
                    likesCount: '7',
                },
            ],

            newPostText: '',
        },

        dialogsPage: {
            dialogs: [
                {
                    id: '1',
                    name: '105',
                },
                {
                    id: '2',
                    name: 'FrinteZz',
                },
                {
                    id: '3',
                    name: 'Gaming',
                },
                {
                    id: '4',
                    name: 'Pominki',
                },
                {
                    id: '5',
                    name: 'Side',
                },
                {
                    id: '6',
                    name: 'EFsquad',
                },
            ],

            messages: [
                {
                    id: '1',
                    message: 'qq all',
                },
                {
                    id: '2',
                    message: 'hello world',
                },
                {
                    id: '3',
                    message: 'priveti4 ot Marmeladi4a',
                },
            ],

            newMessageBody: '',

        },
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('changed');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost = {
                id: 7,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
        } else if (action.type === SEND_MESSAGE) {
            const body = this._statedialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({ id: 6, message: body });
            this._callSubscriber(this.state);
        }
    },
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
});

export default store;
