const takeUser = (state) => state.usersPage.users;

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
