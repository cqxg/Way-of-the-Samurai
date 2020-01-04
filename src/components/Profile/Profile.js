import React, { Component } from 'react';

import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


import style from './Profile.module.css';


const Profile = () => (
  <div>
    <ProfileInfo />
    <MyPosts />
  </div>
);

export default Profile;
