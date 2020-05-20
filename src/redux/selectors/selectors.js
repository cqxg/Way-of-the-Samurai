import { createSelector } from 'reselect';

const takeUserSelector = (state) => state.usersPage.users;

const takeUser = createSelector(takeUserSelector,
  (users) => users.filter((u) => true));

const getPageSize = (state) => state.usersPage.pageSize;

const getTotalUsersCount = (state) => state.usersPage.totalItemsCount;

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
