import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../../../utils/loader';
import { BACKGROUND_IMG } from '../../../utils/url-utils';

import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  const { profile } = props;

  if (!profile) {
    return <Loader />;
  }
  return (
    <div>
      <div>
        <img alt="" src={BACKGROUND_IMG} />
      </div>
      <div className={style.descriptionBlock}>
        <img alt="" src={profile.photos.large} />
                ava+desc
      </div>
    </div>
  );
};

ProfileInfo.defaultProps = {
  profile: PropTypes.number,
};

ProfileInfo.propTypes = {
  profile: PropTypes.number,
};

export default ProfileInfo;
