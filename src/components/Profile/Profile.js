import React, { Component } from 'react';

import MyPosts from './MyPosts/MyPosts';
import BACKGROUND_IMG from '../../url_utils/index'

import style from './Profile.module.css';


const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img src={BACKGROUND_IMG}></img>
            </div>
            <div>
                ava+desc
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;