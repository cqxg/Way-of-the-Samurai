import React from 'react';
import PropTypes from 'prop-types';

import { AVATAR_DEFAULT } from '../../../../utils/url-utils';
import { ALT_PROFILE_AVATAR } from '../../../../utils/constants';

import style from './Post.module.css';

const Post = (props) => {
  const { likesCount, message } = props;

  return (
    <div className={style.item}>
      <img alt={ALT_PROFILE_AVATAR} src={AVATAR_DEFAULT} />
      {message}
      <div>
        <span>like</span>
        {' '}
        {likesCount}
      </div>
    </div>
  );
};

Post.defaultProps = {
  likesCount: PropTypes.number,
  message: PropTypes.string,
};

Post.propTypes = {
  likesCount: PropTypes.number,
  message: PropTypes.string,
};

export default Post;
