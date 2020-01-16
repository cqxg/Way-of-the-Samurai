import { FOLLOW, UNFOLLOW } from '../actions/actionTypes';

const initialState = {
    users: [
        {
            id: '1',
            followed: true,
            fullName: 'Vasiliy',
            status: 'vasiliy propionate',
            location: {
                city: 'Giran Harbor',
                country: 'Elmoraden'
            },
        },
        {
            id: '2',
            followed: true,
            fullName: 'Gennadiy',
            status: 'vse dl9 pacanov',
            location: {
                city: 'Vorota Diona',
                country: 'Dion'
            },
        },
        {
            id: '3',
            followed: true,
            fullName: 'Tatiyana',
            status: 'Tanysha podai grabli!!!1',
            location: {
                city: 'Minsk',
                country: 'Belarus'
            },
        },
    ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    };
};

export const followActionCreator = () => ({ type: FOLLOW });
export const unfollowActionCreator = () => ({ type: UNFOLLOW });

export { usersReducer };
