import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { I18N } from '../../../utils/constants';

const AddMessageForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field component="textarea" name="newMessageBody" />
      </div>
      <div>
        <button>{I18N.EN.SEND}</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

export default AddMessageFormRedux;
