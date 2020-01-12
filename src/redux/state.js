const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const store = {

    state: {
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
        return this.state;
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
                message: this.state.profilePage.newPostText,
                likesCount: 0,
            };

            this.state.profilePage.posts.push(newPost);
            this.state.profilePage.newPostText = '';
            this.callSubscriber(this.state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this.state.profilePage.newPostText = action.newText;
            this.callSubscriber(this.state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this.state.dialogsPage.newMessageBody = action.body;
            this.callSubscriber(this.state);
        } else if (action.type === SEND_MESSAGE) {
            const body = this.state.dialogsPage.newMessageBody;
            this.state.dialogsPage.newMessageBody = '';
            this.state.dialogsPage.messages.push({ id: 8, message: body });
            this.callSubscriber(this.state);
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
    body,
});

export default store;
