import React from 'react';
import PropTypes from 'prop-types';

import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  const {
    profile,
    status,
    updateStatus,
    isOwner,
    savePhoto,
    saveProfile,
  } = props;

  return (
    <div>
      <ProfileInfo
        profile={profile}
        isOwner={isOwner}
        status={status}
        savePhoto={savePhoto}
        saveProfile={saveProfile}
        updateStatus={updateStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

Profile.defaultProps = {
  profile: PropTypes.object,
};

Profile.propTypes = {
  profile: PropTypes.instanceOf(Object),
};

export default Profile;
