import React from 'react';
import { reduxForm } from 'redux-form';

import {
  createField,
  Input,
  Textarea,
} from '../../../../utils/FormControl/formsControls';

import style from './ProfileDataForm.module.css';

const ProfileDataForm = (props) => {
  const { profile, handleSubmit, error } = props;

  const contacts = Object.keys(profile.contacts);

  const contactsInputRender = (key) => {
    return (
      <div key={key} className={style.contact}>
        <b>{key}: {createField(key, `contacts.${key}`, [], Input)}</b>
      </div>
    )
  };

  const contactsMap = contacts.map((key) => contactsInputRender(key));

  const fullnameRender = () => (
    <div>
      <b>Full name: </b>
      {createField('Full name', 'fullName', [], Input)}
    </div>
  );

  const forJobRender = () => (
    <div>
      <b>Looking for a job: </b>
      {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
    </div>
  );

  const skillsRender = () => (
    <div>
      <b>My professional skills: </b>
      {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
    </div>
  );

  const aboutMeRender = () => (
    <div>
      <b>About me: </b>
      {createField('About me', 'aboutMe', [], Textarea)}
    </div>
  );

  const contactsRender = () => (
    <div>
      <b>Contacts: </b>
      {contactsMap}
    </div>
  );

  return (
    <form onSubmit={handleSubmit}>
      <div><button>save</button></div>
      {error &&
        <div className={style.formSummaryError}>
          {error}
        </div>}
      {fullnameRender()}
      {forJobRender()}
      {skillsRender()}
      {aboutMeRender()}
      {contactsRender()}
    </form>
  );
};

export default reduxForm({ form: 'edit-profile' })(ProfileDataForm);
