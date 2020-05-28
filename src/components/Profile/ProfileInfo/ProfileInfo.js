import React from 'react';
import PropTypes from 'prop-types';

import ProfileStatusWithHooks from './ProfileStatusWithHooks';

import Loader from '../../../utils/loader';
import { AVATAR_DEFAULT } from '../../../utils/url-utils';

import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  const { profile, status, updateStatus, isOwner, savePhoto } = props;

  if (!profile) {
    return <Loader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      <div className={style.descriptionBlock}>
        <img className={style.mainPhotos} alt="" src={profile.photos.large || AVATAR_DEFAULT} />
        {isOwner && <input type='file' onChange={onMainPhotoSelected} />}
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
