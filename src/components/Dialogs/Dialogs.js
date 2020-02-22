import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import Message from './Message/Message';
import DialogItem from './DialogsItem/DialogsItem';

import style from './Dialogs.module.css';

const Dialogs = (props) => {
  const {
    sendMessage, updateNewMessageBody, dialogsPage, isAuth,
  } = props;
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

  const onSendMessageClick = () => {
    sendMessage();
  };

  const onNewMessageChange = (e) => {
    const body = e.target.value;
    updateNewMessageBody(body);
  };

  const textareaRender = () => (
    <div>
      <textarea
        value={state.newMessageBody}
        onChange={onNewMessageChange}
        placeholder="Add u message"
      />
    </div>
  );

  const buttonRender = () => (
    <div>
      <button type="submit" onClick={onSendMessageClick}>Send</button>
    </div>
  );

  if (!isAuth) return <Redirect to="/login" />;


  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={style.messages}>
        {messagesElements}
        {textareaRender()}
        {buttonRender()}
      </div>
    </div>
  );
};

Dialogs.defaultProps = {
  isAuth: PropTypes.bool,
  sendMessage: PropTypes.func,
  dialogsPage: PropTypes.instanceOf(Object),
  updateNewMessageBody: PropTypes.func,
};

Dialogs.propTypes = {
  isAuth: PropTypes.bool,
  sendMessage: PropTypes.func,
  dialogsPage: PropTypes.instanceOf(Object),
  updateNewMessageBody: PropTypes.func,
};

export default Dialogs;
