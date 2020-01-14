import React from 'react';

import { updateNewMessageBodyCreator, sendMessageCreator } from '../../store/actions/actionCreators';

import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  const { getState, dispatch } = props.store;

  const state = getState().dialogsPage;

  const onSendMessageClick = () => {
    dispatch(sendMessageCreator());
  };

  const onNewMessageChange = (body) => {
    dispatch(updateNewMessageBodyCreator(body));
  };

  return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state} />;
};

export default DialogsContainer;
