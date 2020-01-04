import React from 'react';

import Post from './Post/Post';
import { posts } from '../../../index';

import style from './MyPosts.module.css';

const MyPosts = (props) => {
  const postsElements = posts.map((p) => <Post messag={p.message} likesCount={p.likesCount} />);

  return (
    <div className={style.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea />
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </div>
      <div className={style.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
