import { UPDATE_NEW_MESSAGE_BODY, SEND_MESSAGE } from './actions/actionTypes';

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

  newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {
  const stateCopy = {
    ...state,
    messages: [...state.messages],
  };

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      stateCopy.newMessageBody = action.body;
      return stateCopy;
    }

    case SEND_MESSAGE: {
      const body = state.newMessageBody;

      stateCopy.newMessageBody = '';
      stateCopy.messages.push({ id: 8, message: body });
      return stateCopy;
    }

    default:
      return state;
  }
};

export { dialogsReducer };
