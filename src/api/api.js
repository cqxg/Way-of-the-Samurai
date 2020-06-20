import axios from 'axios';

import { MAIN_URL, ROUTES } from '../utils/url-utils';
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
    return instance.get(`${ROUTES.USERS_PAGE}${currentPage}${ROUTES.COUNT}${pageSize}`).then((response) => response.data);
  },

  follow(userId) {
    return instance.post(`${ROUTES.FOLLOW}${userId}`);
  },

  unfollow(userId) {
    return instance.delete(`${ROUTES.FOLLOW}${userId}`);
  },

  getProfile(userId) {
    return instance.get(`${ROUTES.PROFILE}${userId}`);
  },

  getStatus(userId) {
    return instance.get(`${ROUTES.PROFILE_STATUS}${userId}`);
  },

  updateStatus(status) {
    return instance.put(ROUTES.PROFILE_STATUS, { status });
  },

  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile);

    return instance.put('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  saveProfile(profile) {
    return instance.put('profile', profile);
  },
};

const authAPI = {
  me() {
    return instance.get(ROUTES.AUTH_ME);
  },

  login(email, password, rememberMe = false, captcha = null) {
    return instance.post(ROUTES.AUTH_LOGIN, { email, password, rememberMe, captcha });
  },

  logout() {
    return instance.delete(ROUTES.AUTH_LOGIN);
  },
};

const securityAPI = {
  getCaptchaUrl() {
    return instance.get(ROUTES.GET_CAPTCHA);
  }
};

export { usersAPI, authAPI, securityAPI };
