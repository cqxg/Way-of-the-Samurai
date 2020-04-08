import React from 'react';
import { Field, reduxForm } from 'redux-form';

const AddNewPostForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field component="textarea" name="newPostText" />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({ form: 'profileAddNewPostForm' })(AddNewPostForm);

export default AddNewPostFormRedux;
