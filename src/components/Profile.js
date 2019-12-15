import React, { Component } from 'react';

import './Profile.css';

const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img src='https://a.d-cd.net/870b45as-960.jpg'></img>
            </div>
            <div>
                ava+desc
            </div>
            <div>
                My Posts
            </div>
            <div>
                new post
            </div>
            <div className='posts'>
                <div className='item'>
                    Post1
                </div>
                <div className='item'>
                    Poast2
                </div>
            </div>
        </div>
    )
}

export default Profile;