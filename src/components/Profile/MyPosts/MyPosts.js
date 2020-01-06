import React from 'react';

import Post from './Post/Post';

import style from './MyPosts.module.css';

const MyPosts = (props) => {
  const postsElements = props.posts.map((p) => <Post messag={p.message} likesCount={p.likesCount} />);
  const newPostElement = React.createRef();
  const addPost = () => {
    const text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div className={style.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} />
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
