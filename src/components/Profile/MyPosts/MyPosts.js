import React, { Component } from 'react';

import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={style.posts}>
            <Post message='Hi, how are you' />
            <Post message='It`s my first posts' />
        </div>
    )
}

export default MyPosts;