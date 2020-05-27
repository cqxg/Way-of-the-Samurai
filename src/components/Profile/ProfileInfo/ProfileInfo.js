import React from 'react';
import PropTypes from 'prop-types';

import ProfileStatusWithHooks from './ProfileStatusWithHooks';

import Loader from '../../../utils/loader';
import { AVATAR_DEFAULT } from '../../../utils/url-utils';

import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  const { profile, status, updateStatus, isOwner } = props;

  if (!profile) {
    return <Loader />;
  }

  return (
    <div>
      <div className={style.descriptionBlock}>
        <img className={style.mainPhotos} alt="" src={profile.photos.large || AVATAR_DEFAULT} />
        {isOwner && <input type='file' />}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
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
