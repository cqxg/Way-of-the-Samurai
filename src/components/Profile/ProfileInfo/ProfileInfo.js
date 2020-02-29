import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../../../utils/loader';

import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  const { profile } = props;

  if (!profile) {
    return <Loader />;
  }
  return (
    <div>
      <div className={style.descriptionBlock}>
        <img alt="" src={profile.photos.large} />
                ava+desc
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
