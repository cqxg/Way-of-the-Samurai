import React from 'react';

import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

class ProfileContainer {
    render() {
        return (
            <div>
                <ProfileInfo />
                <MyPostsContainer />
            </div>
        );
    };
};

export default Profile;