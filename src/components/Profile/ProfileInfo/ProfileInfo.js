import React from 'react';
import PropTypes from 'prop-types';

import ProfileStatus from './ProfileStatus';

import Loader from '../../../utils/loader';
import { AVATAR_DEFAULT } from '../../../utils/url-utils';

import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  const {
    profile, status, updateStatus, isOwner, savePhoto,
  } = props;

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
        {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
        <div>
          <b>Full name</b>: {profile.fullName}
        </div>
        <div>
          <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
          <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
          </div>
        }

        <div>
          <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
          <b>Contacts</b>: {
            Object.keys(profile.contacts).map((key) => {
              return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
        </div>

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

const Contact = ({ contactTitle, contactValue }) => {
  return <div className={style.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;
