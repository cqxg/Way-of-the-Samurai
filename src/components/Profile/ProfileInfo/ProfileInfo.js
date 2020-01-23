import React from 'react';

import Loader from '../../../utils/loader';
import { BACKGROUND_IMG } from '../../../utils/url-utils';

import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    // if (!props.profile) {
    //     return <Loader />
    // }
    
    return (
        <div>
            <div>
                <img src={BACKGROUND_IMG} />
            </div>
            <div className={style.descriptionBlock}>
                {/* <img src={props.profile.photos.large} /> */}
                ava+desc
            </div>
        </div>
    )
};

export default ProfileInfo;
