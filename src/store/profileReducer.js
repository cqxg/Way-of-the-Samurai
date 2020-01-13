import { ADD_POST, UPDATE_NEW_POST_TEXT } from './actionTypes';

export const profileReducer = (state, action) => {

    if (action.type === ADD_POST) {
        const newPost = {
            id: 7,
            message: state.newPostText,
            likesCount: 0,
        };
        state.posts.push(newPost);
        state.newPostText = '';

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;
    };

    return state
};