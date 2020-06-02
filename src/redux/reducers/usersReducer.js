import {
  FOLLOW,
  UNFOLLOW,
  SET_USERS,
  SET_CURRENT_PAGE,
  SET_TOTAL_USERS_COUNT,
  TOGGLE_IS_FETCHING,
  TOGGLE_FOLLOWING_PROGRESS,
} from '../actions/actionTypes';

const initialState = {
  users: [],
  pageSize: 5,
  totalItemsCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalItemsCount: action.payload,
      };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };

    case TOGGLE_FOLLOWING_PROGRESS:
      const { userID, isFetching } = action.payload;
      return {
        ...state,
        followingInProgress: isFetching
          ? [...state.followingInProgress, userID]
          : state.followingInProgress.filter((id) => id !== userID),
      };

    default:
      return state;
  }
};

export default usersReducer;
