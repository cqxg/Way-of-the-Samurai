import React, { Component } from 'react';

import Post from './Post/Post';

import style from './MyPosts.module.css';

const MyPosts = (props) => {

    const posts = [
        {
            id: '1',
            message: 'Hi, how are you',
            likesCount: '12'
        },
        {
            id: '2',
            message: 'It`s my first posts',
            likesCount: '7'
        }
    ];

    const postsElements = posts.map(p => <Post messag={p.message} likesCount={p.likesCount} />)

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
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;