import { DEFAULT_LIKES_VALUE, NEXT_ID } from '../../utils/constants';

import { ADD_POST, UPDATE_NEW_POST_TEXT } from '../actions/actionTypes';

const initialState = {
  posts: [
    {
      id: '1',
      message: 'Hi, how are you',
      likesCount: '12',
    },
    {
      id: '2',
      message: 'It`s my first posts',
      likesCount: '7',
    },
  ],

  newPostText: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: NEXT_ID,
        message: state.newPostText,
        likesCount: DEFAULT_LIKES_VALUE,
      };

      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, newPost],
      };
    }

    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }

    default:
      return state;
  }
};

export { profileReducer };
