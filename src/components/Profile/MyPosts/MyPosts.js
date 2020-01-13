import React from 'react';

import Post from './Post/Post';

import style from './MyPosts.module.css';

const MyPosts = (props) => {
  const {
    posts, addPost, updateNewPostText, newPostText,
  } = props;

  const postsElements = posts.map((p) => <Post message={p.message} likesCount={p.likesCount} />);
  const newPostElement = React.createRef();

  const onAddPost = () => {
    addPost();
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    updateNewPostText(text);
  };

  const textRender = () => (
    <div>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={newPostText} />
      </div>
      <div>
        <button onClick={onAddPost}>Add Post</button>
      </div>
    </div>
  );

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
