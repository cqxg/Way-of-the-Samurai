import React, { Component } from 'react';

import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img src='https://a.d-cd.net/870b45as-960.jpg'></img>
            </div>
            <div>
                ava+desc
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;