import { ADD_POST, UPDATE_NEW_POST_TEXT } from './actions/actionTypes';

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

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: 7,
        message: state.newPostText,
        likesCount: defaultLikesValue,
      };

      const stateCopy = { ...state };

      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    }

    case UPDATE_NEW_POST_TEXT: {
      const stateCopy = { ...state };

      stateCopy.newPostText = action.newText;
      return stateCopy;
    }

    default:
      return state;
  }
};

export { profileReducer };
