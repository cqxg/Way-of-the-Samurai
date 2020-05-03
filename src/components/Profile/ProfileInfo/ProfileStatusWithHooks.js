import React, { useState } from 'react';

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEitMode] = useState(false);

    const activateEditMode = () => {
        setEitMode(true);
    };

    return (
        <div>
            { !editMode &&
                <div>
                    <span onDoubleClick ={activateEditMode}>{props.status}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true} />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;
