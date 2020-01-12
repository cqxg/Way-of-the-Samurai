import React from 'react';

import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/state';

import Post from './Post/Post';

import style from './MyPosts.module.css';

const MyPosts = (props) => {
    const postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} />);
    const newPostElement = React.createRef();

    const textRender = () => {
        return (
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
        );
    };

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <div className={style.postsBlock}>
            <h3>My Posts</h3>
            {textRender()}
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
