import React, { useState, useEffect } from 'react';

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEitMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEitMode(true);
  };

  const deactivateEditMode = () => {
    setEitMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode
        ? (
          <div>
            <span onDoubleClick={activateEditMode}>{props.status}</span>
          </div>
        )
        : (
          <div>
            <input autoFocus value={status} onChange={onStatusChange} onBlur={deactivateEditMode} />
          </div>
        )}
    </div>
  );
};

export default ProfileStatusWithHooks;
