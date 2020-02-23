import axios from 'axios';

import { MAIN_URL } from '../utils/url-utils';
import { API_KEY } from '../utils/constants';

const instance = axios.create(
  {
    withCredentials: true,
    baseURL: MAIN_URL,
    headers: {
      'API-KEY': API_KEY,
    },
  },
);

const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data);
  },

  follow(userId) {
    return instance.post(`follow/${userId}`);
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },

  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
};

const authAPI = {
  me() {
    return instance.get('auth/me');
  },
};

export { usersAPI, authAPI };
