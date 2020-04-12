import { NEXT_ID } from '../../utils/constants';

import { UPDATE_NEW_MESSAGE_BODY, SEND_MESSAGE } from '../actions/actionTypes';

const initialState = {
  dialogs: [
    {
      id: '1',
      name: '105',
    },
    {
      id: '2',
      name: 'FrinteZz',
    },
    {
      id: '3',
      name: 'Gaming',
    },
    {
      id: '4',
      name: 'Pominki',
    },
    {
      id: '5',
      name: 'Side',
    },
    {
      id: '6',
      name: 'EFsquad',
    },
  ],

  messages: [
    {
      id: '1',
      message: 'qq all',
    },
    {
      id: '2',
      message: 'hello world',
    },
    {
      id: '3',
      message: 'priveti4 ot Marmeladi4a',
    },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  const body = action.payload;

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.payload,
      };

    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { id: NEXT_ID, message: body }],
      };

    default:
      return state;
  }
};

export default dialogsReducer;
