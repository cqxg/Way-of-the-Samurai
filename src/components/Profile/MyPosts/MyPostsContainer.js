import React from 'react';

import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../store/actions/actionCreators';

import MyPosts from './MyPosts';
import storeContext from '../../../store/storeContext';

const MyPostsContainer = () => {

    return (
        <storeContext.Consumer>
            {(store) => {
                const { getState, dispatch } = store;

                const state = getState();
                const addPost = () => dispatch(addPostActionCreator());

                const onPostChange = (text) => {
                    const action = updateNewPostTextActionCreator(text);
                    dispatch(action);
                };

                return (
                    <MyPosts
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}
                    />
                )
            }}
        </storeContext.Consumer>
    );
};

export default MyPostsContainer;
