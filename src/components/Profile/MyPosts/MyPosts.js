import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post/Post';
import AddNewPostForm from './AddNewPostForm';

import style from './MyPosts.module.css';

const MyPosts = (props) => {
  const {
    posts,
    addPost,
    updateNewPostText,
    newPostText,
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

  const newPostElement = React.createRef();

  const onAddPost = () => {
    addPost();
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    updateNewPostText(text);
  };

  return (
    <div className={style.postsBlock}>
      <h3>My Posts</h3>
      <AddNewPostForm />
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
  updateNewPostText: PropTypes.func,
  newPostText: PropTypes.string,
};

export default MyPosts;
