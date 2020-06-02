import React, { useState, useEffect } from 'react';

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  const statusInput = () => (
    <div>
      <input
        autoFocus
        value={status}
        onChange={onStatusChange}
        onBlur={deactivateEditMode}
      />
    </div>
  );

  const statusSpan = () => (
    <div>
      <span onDoubleClick={activateEditMode}>
        {props.status}
      </span>
    </div>
  );

  return (
    <div>
      {editMode ? statusInput() : statusSpan()}
    </div>
  );
};

export default ProfileStatus;
