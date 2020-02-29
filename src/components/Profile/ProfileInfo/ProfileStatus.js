import React from 'react';
import PropTypes from 'prop-types';

const ProfileStatus = (props) => {

    return (
        <div>
            <div>
                <span>{props.status}</span>
            </div>
            <div>
                <input value={props.status} />
            </div>
        </div>
    );
};

export default ProfileStatus;
