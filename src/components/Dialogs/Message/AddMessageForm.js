import React from 'react';
import { Field } from 'redux-form';

const AddMessageForm = (props) => {
    return (
        <Field component={'textarea'}/>
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