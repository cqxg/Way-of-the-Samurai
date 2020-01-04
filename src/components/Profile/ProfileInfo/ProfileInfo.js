import React from 'react';

import BACKGROUND_IMG from '../../../url_utils';

import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={BACKGROUND_IMG}></img>
            </div>
            <div className={style.descriptionBlock}>
                ava+desc
            </div>
        </div>
    );
};

export default ProfileInfo;