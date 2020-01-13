import { ADD_POST, UPDATE_NEW_POST_TEXT } from './actionTypes';

const initialState = {
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
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 7,
                message: state.newPostText,
                likesCount: 0,
            };

            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }
};

const addPostActionCreator = () => ({ type: ADD_POST });

const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export { addPostActionCreator, updateNewPostTextActionCreator, profileReducer };
