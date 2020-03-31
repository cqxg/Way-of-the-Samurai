import React from 'react';
import PropTypes from 'prop-types';

import ProfileStatus from './ProfileStatus';

import Loader from '../../../utils/loader';

import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  const { profile, status, updateStatus } = props;

  if (!profile) {
    return <Loader />;
  }

  return (
    <div>
      <div className={style.descriptionBlock}>
        <img alt="" src={profile.photos.large} />
        <ProfileStatus status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

ProfileInfo.defaultProps = {
  profile: PropTypes.instanceOf(Object),
};

ProfileInfo.propTypes = {
  profile: PropTypes.instanceOf(Object),
};

export default ProfileInfo;
