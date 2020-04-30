const getUsers = (state) => {
    return state.usersPage.users;
};

const getPageSize = (state) => {
    return state.usersPage.pageSize;
};

const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
};