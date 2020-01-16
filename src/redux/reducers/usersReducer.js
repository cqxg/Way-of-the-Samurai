import { FOLLOW, UNFOLLOW, SET_USERS } from '../actions/actionTypes';

const initialState = {
    // users: [
    //     {
    //         id: '1',
    //         followed: true,
    //         fullName: 'Vasiliy',
    //         status: 'vasiliy propionate',
    //         location: {
    //             city: 'Giran Harbor',
    //             country: 'Elmoraden'
    //         },
    //     },
    //     {
    //         id: '2',
    //         followed: true,
    //         fullName: 'Gennadiy',
    //         status: 'vse dl9 pacanov',
    //         location: {
    //             city: 'Vorota Diona',
    //             country: 'Dion'
    //         },
    //     },
    //     {
    //         id: '3',
    //         followed: true,
    //         fullName: 'Tatiyana',
    //         status: 'Tanysha podai grabli!!!1',
    //         location: {
    //             city: 'Minsk',
    //             country: 'Belarus'
    //         },
    //     },
    // ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return { ...user, followed: true }
                    };
                    return user;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return { ...user, followed: false }
                    };
                    return user;
                })
            };

        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            };

        default:
            return state;
    };
};

export const followActionCreator = (userID) => ({ type: FOLLOW, userID });
export const unfollowActionCreator = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersActionCreator = (users) => ({ type: UNFOLLOW, users });

export { usersReducer };
