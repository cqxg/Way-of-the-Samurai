import React, { Component } from 'react';

import Post from './Post/Post';

import style from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div className={style.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={style.posts}>
                <Post message='Hi, how are you' />
                <Post message='It`s my first posts' />
            </div>
        </div>
    )
}

export default MyPosts;