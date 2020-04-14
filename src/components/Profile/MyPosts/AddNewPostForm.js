import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { required } from '../../../utils/validators';
import { I18N } from '../../../utils/constants';

const AddNewPostForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component="textarea" name="newPostText" validate={
                    [required]
                } />
            </div>
            <div>
                <button>{I18N.EN.ADD_POST}</button>
            </div>
        </form>
    );
};

const AddNewPostFormRedux = reduxForm({ form: 'profileAddNewPostForm' })(AddNewPostForm);

export default AddNewPostFormRedux;
