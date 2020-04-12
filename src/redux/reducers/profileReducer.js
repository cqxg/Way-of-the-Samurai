import { DEFAULT_LIKES_VALUE, NEXT_ID } from '../../utils/constants';

import {
  ADD_POST, SET_USER_PROFILE, SET_STATUS,
} from '../actions/actionTypes';

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

  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: NEXT_ID,
        message: action.payload,
        likesCount: DEFAULT_LIKES_VALUE,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.payload,
      };
    }

    case SET_STATUS: {
      return {
        ...state,
        status: action.payload,
      };
    }

    default:
      return state;
  }
};

export default profileReducer;
