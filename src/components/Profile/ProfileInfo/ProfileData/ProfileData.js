import React from 'react';

import Contact from './Contact';

const ProfileData = (props) => {
    const { profile, isOwner, goToEditMode } = props;
    return (
        <div>
            {isOwner ? <div><button onClick={goToEditMode}>Edit</button></div> : null}
            <div>
                <b>Full name</b>:
        {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>:
        {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile.lookingForAJob
                && (
                    <div>
                        <b>My professional skills</b>:
                        {profile.lookingForAJobDescription}
                    </div>
                )}
            <div>
                <b>About me</b>:
        {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>
                {Object.keys(profile.contacts).map((key) => <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />)}
            </div>
        </div>
    );
};

export default ProfileData;
