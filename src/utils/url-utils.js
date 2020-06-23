const BACKGROUND_IMG = 'https://a.d-cd.net/870b45as-960.jpg';
const AVATAR_DEFAULT = 'https://yt3.ggpht.com/a/AGF-l79zTH00bozogFe1oAjQyY7-lnxI-uZMKgonrw=s900-mo-c-c0xffffffff-rj-k-no';
const MAIN_URL = 'https://social-network.samuraijs.com/api/1.0/';
const ROUTES = {
  NEWS: '/news',
  USERS: '/users',
  MUSIC: '/music',
  LOGIN: '/login',
  COUNT: '&count=',
  FOLLOW: 'follow/',
  AUTH_ME: 'auth/me',
  PROFILE: 'profile/',
  DIALOGS: '/dialogs',
  SETTINGS: '/settings',
  AUTH_LOGIN: 'auth/login',
  USERS_PAGE: 'users?page=',
  PROFILE_STATUS: 'profile/status/',
  PROFILE_USER_ID: '/profile/:userId?',
  GET_CAPTCHA: 'security/get-captcha-url'
};

export {
  BACKGROUND_IMG,
  AVATAR_DEFAULT,
  MAIN_URL,
  ROUTES,
};
