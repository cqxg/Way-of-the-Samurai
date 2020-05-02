import React, { useState } from 'react';

const ProfileStatusWithHooks = (props) => {
    const stateWithSetState = useState(true);
    const editMode = stateWithSetState[0];
    const setEitMode = stateWithSetState[1];

    return (
        <div>
            { !editMode &&
                <div>
                    <span>{props.status}</span>
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
