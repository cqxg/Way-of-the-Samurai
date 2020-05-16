import profileReducer from './profileReducer';

import { addPostActionCreator, deletePostActionCreator } from '../actions/actionCreators';

const state = {
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
};

it('length of posts should be incremented', () => {
  const action = addPostActionCreator('it-kamasutra.com');
  const newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(3);
});

it('message of new posts should be correct', () => {
  const action = addPostActionCreator('it-kamasutra.com');
  const newState = profileReducer(state, action);

  expect(newState.posts[2].message).toBe('it-kamasutra.com');
});

it('after deleting lenth of messages should be decrement', () => {
  const action = deletePostActionCreator(1);
  const newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(1);
});
