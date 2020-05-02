import React from 'react';

const ProfileStatusWithHooks = (props) => {
    return (
        <div>
            {
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || '-----------'}</span>
                </div>
            }
            {
                <div>
                    <input onChange={onSatusChange} autoFocus={true} onBlur={} value='' />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;
