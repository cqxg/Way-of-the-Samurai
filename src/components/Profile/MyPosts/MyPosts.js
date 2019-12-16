import React, { Component } from 'react';

import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.posts}>
            <Post />
        </div>
    )
}

export default MyPosts;