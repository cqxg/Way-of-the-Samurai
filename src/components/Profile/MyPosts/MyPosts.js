import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post/Post';
import AddNewPostForm from './AddNewPostForm';

import { I18N } from '../../../utils/constants';

import style from './MyPosts.module.css';

const MyPosts = (props) => {
  const {
    posts,
    addPost,
  } = props;

  const postsElements = posts.map((post) => {
    const { message, likesCount } = post;
    return (
      <Post
        key={message}
        message={message}
        likesCount={likesCount}
      />
    );
  });

  const onAddPost = (values) => {
    addPost(values.newPostText);
  };

  return (
    <div className={style.postsBlock}>
      <h3>{I18N.EN.MY_POSTS}</h3>
      <AddNewPostForm onSubmit={onAddPost} />
      <div className={style.posts}>
        {postsElements}
      </div>
    </div>
  );
};

MyPosts.defaultProps = {
  posts: PropTypes.array,
  addPost: PropTypes.func,
  updateNewPostText: PropTypes.func,
  newPostText: PropTypes.string,
};

MyPosts.propTypes = {
  posts: PropTypes.instanceOf(Array),
  addPost: PropTypes.func,
};

export default MyPosts;
