import React from 'react';
import { Field } from 'redux-form';

const AddMessageForm = (props) => {
    return (
        <Field component={'textarea'} name={'newMessageBody'}   placeholder="Add u message"/>
        <form onSubmit={props.handleSubmit}>
            <textarea
                value={state.newMessageBody}
                onChange={onNewMessageChange}
                placeholder="Add u message"
            />
        </form>
    )
};

export default AddMessageForm;