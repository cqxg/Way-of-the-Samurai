import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Loader from '../../../utils/loader';
import { AVATAR_DEFAULT } from '../../../utils/url-utils';

import ProfileStatus from './ProfileStatus';
import ProfileData from './ProfileData/ProfileData';
import ProfileDataForm from './ProfileData/ProfileDataForm';

import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false);

  const {
    profile,
    status,
    updateStatus,
    isOwner,
    savePhoto,
    saveProfile,
  } = props;

  if (!profile) {
    return <Loader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => setEditMode(false));
  };

  return (
    <div>
      <div className={style.descriptionBlock}>
        <img className={style.mainPhotos} alt="" src={profile.photos.large || AVATAR_DEFAULT} />
        {isOwner ? <input type="file" onChange={onMainPhotoSelected} /> : null}
        {editMode
          ? (
            <ProfileDataForm
              initialValues={profile}
              goToEditMode={() => setEditMode(true)}
              onSubmit={onSubmit}
              profile={profile}
            />
          )
          : (
            <ProfileData
              profile={profile}
              goToEditMode={() => setEditMode(true)}
              isOwner={isOwner}
            />
          )}
        <ProfileStatus
          status={status}
          updateStatus={updateStatus}
        />
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
