import React from 'react';

import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../store/profileReducer';

import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    const { getState, dispatch } = props.store;

    const state = getState();

    const addPost = () => {
        dispatch(addPostActionCreator());
    };

    const onPostChange = (text) => {
        const action = updateNewPostTextActionCreator(text);
        dispatch(action);
    };

    return <MyPosts
        updateNewPostText={onPostChange}
        addPost={addPost}
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText}
    />
};

export default MyPostsContainer;
