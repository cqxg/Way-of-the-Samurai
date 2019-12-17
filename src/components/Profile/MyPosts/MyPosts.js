import React, { Component } from 'react';

import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.posts}>
            <Post message='Hi, how are you' />
            <Post message='It`s my first posts' />
        </div>
    )
}

export default MyPosts;