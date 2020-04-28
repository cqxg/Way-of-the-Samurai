import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';

import { required, maxLengthCreator } from '../../../utils/validators';
import { Textarea } from '../../../utils/FormControl/formsControls';
import { I18N_KEYS } from '../../../utils/constants';

const maxLenght10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  const { t } = useTranslation();
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field component={Textarea} name="newPostText" validate={[required, maxLenght10]} />
      </div>
      <div>
        <button>{t(I18N_KEYS.ADD_POST)}</button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({ form: 'profileAddNewPostForm' })(AddNewPostForm);

export default AddNewPostFormRedux;
