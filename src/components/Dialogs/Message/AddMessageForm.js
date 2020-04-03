import React from 'react';

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <textarea
          value={state.newMessageBody}
          onChange={onNewMessageChange}
          placeholder="Add u message"
        />
      </form>
    )
  };

  export default AddMessageForm;