import profileReducer from './profileReducer';
import { addPostActionCreator } from '../actions/actionCreators';

it('length of posts should be incremented', () => {
    const action = addPostActionCreator('it-kamasutra.com');
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
    const newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(5);
});