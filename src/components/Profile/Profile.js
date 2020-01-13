import React from 'react';

import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => (
  <div>
    <ProfileInfo />
    <MyPostsContainer store={props.store} />
  </div>
);

export default Profile;
