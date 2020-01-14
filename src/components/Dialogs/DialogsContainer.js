import React from 'react';

import { updateNewMessageBodyCreator, sendMessageCreator } from '../../store/actions/actionCreators';
import { storeContext } from '../../store/storeContext';

import Dialogs from './Dialogs';

const DialogsContainer = () => {

    return (
        <storeContext.Consumer>
            {(store) => {
                const { getState, dispatch } = store;
                const state = getState().dialogsPage;

                const onSendMessageClick = () => {
                    dispatch(sendMessageCreator());
                };

                const onNewMessageChange = (body) => {
                    dispatch(updateNewMessageBodyCreator(body));
                };
                return (
                    <Dialogs
                        updateNewMessageBody={onNewMessageChange}
                        sendMessage={onSendMessageClick}
                        dialogsPage={state} />
                )
            }}
        </storeContext.Consumer>
    )

};

export default DialogsContainer;
