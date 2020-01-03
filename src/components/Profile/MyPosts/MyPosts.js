import React, { Component } from 'react';

import Post from './Post/Post';

import style from './MyPosts.module.css';

const MyPosts = (props) => {

    let postData = [
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
                <Post messag={postData[0].message} likesCount={postData[0].message.likesCount} />
                <Post messag={postData[1].message} likesCount={postData[1].message.likesCount} />
            </div>
        </div>
    );
};

export default MyPosts;