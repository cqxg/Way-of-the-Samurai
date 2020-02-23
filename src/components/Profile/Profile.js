import React from 'react';
import PropTypes from 'prop-types';

import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  const { profile } = props;
  return (
    <div>
      <ProfileInfo profile={profile} />
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
