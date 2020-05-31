import React from 'react';

import Contactfrom from './Contact';

const ProfileDataForm = (props) => {
    const { profile, goToEditMode } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div><button onClick={goToEditMode}>save</button></div>
            <div>
                <b>Full name</b>: {}
            </div>
            <div>
                <b>Looking for a job</b>: {}
            </div>

            <div>
                <b>My professional skills</b>: {}
            </div>


            <div>
                <b>About me</b>: {}
            </div>
            <div>
                <b>Contacts</b>
                {Object.keys(profile.contacts).map((key) => <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />)}
            </div>
        </form>
    );
};

export default ProfileDataForm;
