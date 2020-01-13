import React from 'react';

import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../store/profileReducer';

import Post from './Post/Post';

import style from './MyPosts.module.css';

const MyPosts = (props) => {
  const { posts, dispatch } = props;
  const postsElements = posts.map((p) => <Post message={p.message} likesCount={p.likesCount} />);
  const newPostElement = React.createRef();

  const textRender = () => (
    <div>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
      </div>
      <div>
        <button onClick={addPost}>Add Post</button>
      </div>
    </div>
  );

  const addPost = () => {
    dispatch(addPostActionCreator());
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    dispatch(updateNewPostTextActionCreator(text));
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
