import { DEFAULT_LIKES_VALUE, NEXT_ID } from '../../utils/constants';

import { ADD_POST, UPDATE_NEW_POST_TEXT, SET_USER_PROFILE } from '../actions/actionTypes';

const initialState = {
  posts: [
    {
      id: '1',
      message: 'Hi, how are you',
      likesCount: 0,
    },
    {
      id: '2',
      message: 'It`s my first posts',
      likesCount: 0,
    },
  ],

  newPostText: '',
  profile: null,
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

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }

    default:
      return state;
  }
};

export default profileReducer;
