import React from 'react';

import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

import style from './Dialogs.module.css';

const Dialogs = (props) => {
  const { sendMessage, updateNewMessageBody, dialogsPage } = props;
  const state = dialogsPage;
  const { dialogs, messages } = state;


  const dialogsElements = dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);
  const messagesElements = messages.map((message) => <Message message={message.message} />);

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
      <button onClick={onSendMessageClick}>Send</button>
    </div>
  );

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

export default Dialogs;
