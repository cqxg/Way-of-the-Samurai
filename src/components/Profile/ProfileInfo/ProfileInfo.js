import React from 'react';

import { BACKGROUND_IMG } from '../../../utils/url-utils';

import style from './ProfileInfo.module.css';

const ProfileInfo = () => (
    <div>
        <div>
            <img src={BACKGROUND_IMG} />
        </div>
        <div className={style.descriptionBlock}>
            ava+desc
    </div>
    </div>
);

export default ProfileInfo;
