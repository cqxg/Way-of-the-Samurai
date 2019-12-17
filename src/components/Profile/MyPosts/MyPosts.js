import React, { Component } from 'react';

import Post from './Post/Post';

import style from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div className={style.posts}>
            <Post message='Hi, how are you' />
            <Post message='It`s my first posts' />
        </div>
    )
}

export default MyPosts;