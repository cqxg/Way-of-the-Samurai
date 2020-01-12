import React from 'react';

import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => (
  <div>
    <ProfileInfo />
    <MyPosts
      posts={props.profilePage.posts}
      newPostText={props.profilePage.newPostText}
      dispatch={props.dispatch}
    />
  </div>
);

export default Profile;
