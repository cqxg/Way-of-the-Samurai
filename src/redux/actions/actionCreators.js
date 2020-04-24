import { WELL } from '../../utils/constants';

import {
    FOLLOW,
    ADD_POST,
    UNFOLLOW,
    SET_USERS,
    SET_STATUS,
    SEND_MESSAGE,
    SET_USER_DATA,
    SET_CURRENT_PAGE,
    SET_USER_PROFILE,
    TOGGLE_IS_FETCHING,
    SET_TOTAL_USERS_COUNT,
    UPDATE_NEW_MESSAGE_BODY,
    TOGGLE_FOLLOWING_PROGRESS,
} from './actionTypes';

import { usersAPI, authAPI } from '../../api/api';

const setUsers = (users) => ({ type: SET_USERS, payload: users });
const setStatus = (status) => ({ type: SET_STATUS, payload: status });
const followSuccess = (userID) => ({ type: FOLLOW, payload: userID });
const unfollowSuccess = (userID) => ({ type: UNFOLLOW, payload: userID });
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, payload: profile });
const addPostActionCreator = (newPostText) => ({ type: ADD_POST, payload: newPostText });
const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, payload: currentPage });
const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, payload: isFetching });
const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, payload: body });
const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, payload: newMessageBody });
const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, payload: totalUsersCount });
const toggleFollowingProgress = (isFetching, userID) => ({ type: TOGGLE_FOLLOWING_PROGRESS, payload: { isFetching, userID } });
const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } });

const getAuthUserData = () => (dispatch) => {
    authAPI.me().then((response) => {
        if (response.data.resultCode === WELL) {
            const { id, email, login } = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
};

const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then((response) => {
        if (response.data.resultCode === WELL) {
            dispatch(getAuthUserData())
        };
    });
};

const logout = () => (dispatch) => {
    authAPI.logout().then((response) => {
        if (response.data.resultCode === WELL) {
            dispatch(setAuthUserData(null, null, null, false));
        };
    });
};

const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    });
};

const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then((response) => {
        dispatch(setUserProfile(response.data));
    });
};

const getStatus = (userId) => (dispatch) => {
    usersAPI.getStatus(userId).then((response) => {
        dispatch(setStatus(response.data));
    });
};

const updateStatus = (status) => (dispatch) => {
    usersAPI.updateStatus(status).then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(response.data));
        }
    });
};

const follow = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));

    usersAPI.follow(userId).then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(followSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
    });
};

const unfollow = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));

    usersAPI.unfollow(userId).then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(unfollowSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
    });
};

export {
    login,
    logout,
    follow,
    unfollow,
    setUsers,
    getUsers,
    getStatus,
    updateStatus,
    followSuccess,
    setUserProfile,
    getUserProfile,
    setCurrentPage,
    unfollowSuccess,
    setAuthUserData,
    getAuthUserData,
    toggleIsFetching,
    setTotalUsersCount,
    sendMessageCreator,
    addPostActionCreator,
    toggleFollowingProgress,
    updateNewMessageBodyCreator,
};
