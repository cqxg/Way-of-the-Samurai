import React from 'react';
import { Field, reduxForm } from 'redux-form';

const AddMessageForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field component="textarea" name="newMessageBody" placeholder="Add u message" />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

export default AddMessageFormRedux;
