import { SET_USER_DATA, SET_CAPTCHA_URL_SUCCESS } from '../actions/actionTypes';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case SET_CAPTCHA_URL_SUCCESS:

      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
