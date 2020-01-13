import { UPDATE_NEW_MESSAGE_BODY, SEND_MESSAGE } from './actionTypes';

export const dialogsReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
            
        case SEND_MESSAGE:
            const body = state.newMessageBody;

            state.newMessageBody = '';
            state.messages.push({ id: 8, message: body });
            return state;

        default:
            return state;
    };
};