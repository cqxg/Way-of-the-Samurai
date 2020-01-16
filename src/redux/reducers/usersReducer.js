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

const defaultLikesValue = 0;
const nextId = 8;

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: nextId,
        message: state.newPostText,
        likesCount: defaultLikesValue,
      };

      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, newPost],
      };
    };

    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    };

    default:
      return state;
  };
};

export { usersReducer };
