import React from 'react';
import { reduxForm } from 'redux-form';

import {
  createField,
  Input,
  Textarea,
} from '../../../../utils/FormControl/formsControls';

import Contact from './Contact';

const ProfileDataForm = (props) => {
  const { profile, handleSubmit } = props;

  const contacts = Object.keys(profile.contacts);
  const contactsMap = contacts.map((key) => <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />);

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
      {fullnameRender()}
      {forJobRender()}
      {skillsRender()}
      {aboutMeRender()}
      {contactsRender()}
    </form>
  );
};

export default reduxForm({ form: 'edit-profile' })(ProfileDataForm);
