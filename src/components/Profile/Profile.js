import React from 'react';

import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => (
  <div>
    <ProfileInfo />
    <MyPosts
      posts={props.profilePage.posts}
      addPost={props.addPost}
      newPostText={props.profilePage.newPostText}
      updateNewPostText={props.updateNewPostText}
    />
  </div>
);

export default Profile;
