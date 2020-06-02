import React from 'react';

import Contact from './Contact';

const ProfileData = (props) => {
  const {
    profile,
    isOwner,
    goToEditMode,
  } = props;

  const fullnameRender = () => (
    <div>
      <b>Full name: </b>
      {profile.fullName}
    </div>
  );

  const forJobRender = () => (
    <div>
      <b>Looking for a job: </b>
      {profile.lookingForAJob ? 'yes' : 'no'}
    </div>
  );

  const skillsRender = () => (
    profile.lookingForAJob
    && (
      <div>
        <b>My professional skills: </b>
        {profile.lookingForAJobDescription}
      </div>
    )
  );

  const aboutMeRender = () => (
    <div>
      <b>About me: </b>
      {profile.aboutMe}
    </div>
  );

  const contactsRender = () => (
    <div>
      <b>Contacts: </b>
      {Object.keys(profile.contacts).map((key) => <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />)}
    </div>
  );

  return (
    <div>
      {isOwner ? <div><button onClick={goToEditMode}>Edit</button></div> : null}
      {fullnameRender()}
      {forJobRender()}
      {skillsRender()}
      {aboutMeRender()}
      {contactsRender()}
    </div>
  );
};

export default ProfileData;
