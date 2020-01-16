import React from 'react';

import { AVATAR_DEFAULT } from '../../../../utils/url-utils';

import style from './Post.module.css';

const Post = (props) => (
  <div className={style.item}>
    <img src={AVATAR_DEFAULT} />
    {props.message}
    <div>
      <span>like</span>
      {' '}
      {props.likesCount}
    </div>
  </div>
);

export default Post;
