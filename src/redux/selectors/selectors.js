const takeUser = (state) => {
    return state.usersPage.users;
};

const getPageSize = (state) => {
    return state.usersPage.pageSize;
};

const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
};

const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
};

const getIsFetching = (state) => {
    return state.usersPage.isFetching;
};

const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
};

export {
    takeUser,
    getPageSize,
    getIsFetching,
    getCurrentPage,
    getTotalUsersCount,
    getFollowingInProgress,
};