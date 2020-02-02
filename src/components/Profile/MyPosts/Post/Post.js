import React from 'react';

import { AVATAR_DEFAULT } from '../../../../utils/url-utils';

import style from './Post.module.css';

const Post = (props) => {
  const { likesCount, message } = props;

  return (
    <div className={style.item}>
      <img src={AVATAR_DEFAULT} />
      {message}
      <div>
        <span>like</span>
        {' '}
        {likesCount}
      </div>
    </div>
  );
};

export default Post;
