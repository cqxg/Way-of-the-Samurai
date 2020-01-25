import { SET_USER_DATA } from '../actions/actionTypes';

initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,

            };

        default:
            return state;
    }
};

export { authReducer };
