import React from 'react';

import Post from './Post/Post';

import style from './MyPosts.module.css';

const MyPosts = (props) => {
  const postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} />);
  const newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch({ type: 'ADD-POST' });
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
  };

  return (
    <div className={style.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div className={style.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
