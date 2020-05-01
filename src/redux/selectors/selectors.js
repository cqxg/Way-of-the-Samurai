import { createSelector } from 'reselect';

const takeUserSelector = (state) => {
    return state.usersPage.users
};

const takeUser = createSelector(takeUserSelector,
    (users) => {
        return users.filter(u => true);
    }
);

const getPageSize = (state) => state.usersPage.pageSize;

const getTotalUsersCount = (state) => state.usersPage.totalUsersCount;

const getCurrentPage = (state) => state.usersPage.currentPage;

const getIsFetching = (state) => state.usersPage.isFetching;

const getFollowingInProgress = (state) => state.usersPage.followingInProgress;

export {
    takeUser,
    getPageSize,
    getIsFetching,
    getCurrentPage,
    getTotalUsersCount,
    getFollowingInProgress,
};
