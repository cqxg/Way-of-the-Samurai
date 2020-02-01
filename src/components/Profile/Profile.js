import React from 'react';

import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    const { profile } = props;
    return (
        <div>
            <ProfileInfo profile={profile} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;
