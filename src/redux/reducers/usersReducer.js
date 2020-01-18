import { AVATAR_DEFAULT } from '../../utils/url-utils';

import { FOLLOW, UNFOLLOW, SET_USERS } from '../actions/actionTypes';

const initialState = {
    users: [
        {
            id: '1',
            photoUrl: { AVATAR_DEFAULT },
            followed: true,
            fullName: 'Vasiliy',
            status: 'vasiliy propionate',
            location: {
                city: 'Giran Harbor',
                country: 'Elmoraden',
            },
        },
        {
            id: '2',
            photoUrl: { AVATAR_DEFAULT },
            followed: true,
            fullName: 'Gennadiy',
            status: 'vse dl9 pacanov',
            location: {
                city: 'Vorota Diona',
                country: 'Dion',
            },
        },
        {
            id: '3',
            photoUrl: { AVATAR_DEFAULT },
            followed: true,
            fullName: 'Tatiyana',
            status: 'Tanysha podai grabli!!!1',
            location: {
                city: 'Minsk',
                country: 'Belarus',
            },
        },
    ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userID) {
                        return { ...user, followed: true };
                    }
                    return user;
                }),
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userID) {
                        return { ...user, followed: false };
                    }
                    return user;
                }),
            };

        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users],
            };

        default:
            return state;
    }
};

const followActionCreator = (userID) => ({ type: FOLLOW, userID });
const unfollowActionCreator = (userID) => ({ type: UNFOLLOW, userID });
const setUsersActionCreator = (users) => ({ type: UNFOLLOW, users });

export { usersReducer, followActionCreator, unfollowActionCreator, setUsersActionCreator };
