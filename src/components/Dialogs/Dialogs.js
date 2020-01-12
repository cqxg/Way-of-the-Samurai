import React from 'react';

import { updateNewMessageBodyCreator, sendMessageCreator } from '../../store/actionCreators';

import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

import style from './Dialogs.module.css';

const Dialogs = (props) => {
  const state = props.store.getState().dialogsPage;
  const dialogsElements = state.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);
  const messagesElements = state.messages.map((message) => <Message message={message.message} />);

  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  const onNewMessageChange = (e) => {
    const { value: body } = e.target;
    props.store.dispatch(updateNewMessageBodyCreator(body));
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
