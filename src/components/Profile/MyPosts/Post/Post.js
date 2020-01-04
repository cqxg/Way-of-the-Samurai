import React, { Component } from 'react';

import style from './Post.module.css';

const Post = (props) => (
  <div className={style.item}>
    <img src="https://yt3.ggpht.com/a/AGF-l79zTH00bozogFe1oAjQyY7-lnxI-uZMKgonrw=s900-mo-c-c0xffffffff-rj-k-no" />
    {props.message}
    <div>
      <span>like</span>
    </div>
  </div>
);

export default Post;
