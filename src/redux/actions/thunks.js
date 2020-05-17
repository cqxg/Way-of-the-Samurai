import { stopSubmit } from 'redux-form';

import { WELL } from '../../utils/constants';

import { usersAPI, authAPI } from '../../api/api';

import {
    setUsers,
    setStatus,
    followSuccess,
    setUserProfile,
    setCurrentPage,
    setInitialized,
    unfollowSuccess,
    setAuthUserData,
    toggleIsFetching,
    setTotalUsersCount,
    toggleFollowingProgress,
} from './actionCreators';

const initializeApp = () => (dispatch) => {
    const promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
        dispatch(setInitialized());
    });
};

const getAuthUserData = () => async (dispatch) => {
    const response = await authAPI.me();
    if (response.data.resultCode === WELL) {
        const { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

const login = (email, password, rememberMe) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === WELL) {
        dispatch(getAuthUserData());
    } else {
        const mess = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', { _error: mess }));
    };
};

const logout = () => (dispatch) => {
    authAPI.logout().then((response) => {
        if (response.data.resultCode === WELL) {
            dispatch(setAuthUserData(null, null, null, false));
        }
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
    getUsers,
    getStatus,
    updateStatus,
    initializeApp,
    getUserProfile,
    getAuthUserData,
};
