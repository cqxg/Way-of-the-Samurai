import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';

import { required, maxLengthCreator } from '../../../utils/validators';
import { Textarea } from '../../../utils/FormControl/formsControls';

const maxLenght10 = maxLengthCreator(10);

const AddMessageForm = (props) => {
  const { t } = useTranslation();
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field component={Textarea} name="newMessageBody" validate={[required, maxLenght10]} />
      </div>
      <div>
        <button>{t('SEND')}</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

export default AddMessageFormRedux;
