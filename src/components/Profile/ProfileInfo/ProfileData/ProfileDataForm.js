import React from 'react';
import { reduxForm } from "redux-form";

import Contact from './Contact';

import { createField, Input, Textarea } from '../../../../utils/FormControl/formsControls';

const ProfileDataForm = (props) => {
    const { profile, goToEditMode } = props;
    return (
        <form>
            <div><button onClick={goToEditMode}>save</button></div>
            <div>
                <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
            </div>
            <div>
                <b>Looking for a job</b>: {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
            </div>

            <div>
                <b>My professional skills</b>: {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
            </div>
            <div>
                <b>About me</b>: {createField("About me", "aboutMe", [], Textarea)}
            </div>
            <div>
                <b>Contacts</b>
                {Object.keys(profile.contacts).map((key) => <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />)}
            </div>
        </form>
    );
};

export default reduxForm({ form: 'edit-profile' })(ProfileDataForm);
