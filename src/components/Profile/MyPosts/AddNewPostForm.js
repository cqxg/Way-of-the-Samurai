import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { required, maxLengthCreator } from '../../../utils/validators';
import { Textarea } from '../../../utils/FormControl/formsControls';
import { I18N } from '../../../utils/constants';

const maxLenght10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field component={Textarea} name="newPostText" validate={[required, maxLenght10]} />
      </div>
      <div>
        <button>{I18N.EN.ADD_POST}</button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({ form: 'profileAddNewPostForm' })(AddNewPostForm);

export default AddNewPostFormRedux;
