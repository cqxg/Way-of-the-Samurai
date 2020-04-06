import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message/Message';
import DialogItem from './DialogsItem/DialogsItem';
import AddMessageFormRedux from './Message/AddMessageForm';

import style from './Dialogs.module.css';

const Dialogs = (props) => {
    const { dialogsPage } = props;
    const state = dialogsPage;
    const { dialogs, messages } = state;

    const dialogsElements = dialogs.map((dialog) => {
        const { name, id } = dialog;
        return (
            <DialogItem
                name={name}
                key={id}
                id={id}
            />
        );
    });
    const messagesElements = messages.map((message) => (
        <Message
            key={message + Math.random(1000)}
            message={message.message}
        />
    ));

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <AddMessageFormRedux />
            </div>
        </div>
    );
};

Dialogs.defaultProps = {
    sendMessage: PropTypes.func,
    dialogsPage: PropTypes.instanceOf(Object),
    updateNewMessageBody: PropTypes.func,
};

Dialogs.propTypes = {
    sendMessage: PropTypes.func,
    dialogsPage: PropTypes.instanceOf(Object),
    updateNewMessageBody: PropTypes.func,
};

export default Dialogs;
