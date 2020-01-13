import { ADD_POST, UPDATE_NEW_POST_TEXT } from './actionTypes';

export const profileReducer = (state, action) => {

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

    };
};