import React, { useState } from 'react';

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEitMode] = useState(false);

    const activateEditMode = () => {
        setEitMode(true);
    };

    const deactivateEditMode = () => {
        setEitMode(false);
    };

    return (
        <div>
            {!editMode
                ?
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status}</span>
                </div>
                :
                <div>
                    <input autoFocus={true} onBlur={deactivateEditMode} />
                </div>}
        </div>
    )
}

export default ProfileStatusWithHooks;
