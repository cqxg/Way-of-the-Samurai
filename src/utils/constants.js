const DEFAULT_LIKES_VALUE = 0;
const NEXT_ID = 8;
const DEFAULT_USER_ID = 2;
const API_KEY = '97590639-9a46-4b9d-a8e4-899e90470cbc';
const ALT_PROFILE_AVATAR = 'Avatar';
const ALT_USER_AVATAR = 'User Avatar';
const WELL = 0;
const TRY_AGAIN = 10;

const I18N_KEYS = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  EMAIL: 'EMAIL',
  PASSWORD: 'PASSWORD',
  SEND: 'SEND',
  REMEMBER_ME: 'REMEMBER_ME',
  PROFILE: 'PROFILE',
  MESSAGES: 'MESSAGES',
  USERS: 'USERS',
  NEWS: 'NEWS',
  MUSIC: 'MUSIC',
  SETTINGS: 'SETTINGS',
  MY_POSTS: 'MY_POSTS',
  ADD_POST: 'ADD_POST',
  SET_RU: 'ru',
  SET_EN: 'en',
  RU: 'RU',
  EN: 'EN',
  PREV: 'PREV',
  NEXT: 'NEXT',
};

const TRANSLATIONS = {
  RU: {
    [I18N_KEYS.LOGIN]: 'Войти в аккаунт',
    [I18N_KEYS.LOGOUT]: 'Выйти',
    [I18N_KEYS.EMAIL]: 'ваша почта',
    [I18N_KEYS.PASSWORD]: 'пароль',
    [I18N_KEYS.SEND]: 'Отправить',
    [I18N_KEYS.REMEMBER_ME]: 'запомнить меня',
    [I18N_KEYS.PROFILE]: 'Профиль',
    [I18N_KEYS.MESSAGES]: 'Сообщения',
    [I18N_KEYS.USERS]: 'Пользователи',
    [I18N_KEYS.NEWS]: 'Новости',
    [I18N_KEYS.MUSIC]: 'Музыка',
    [I18N_KEYS.SETTINGS]: 'Настройки',
    [I18N_KEYS.MY_POSTS]: 'Мои посты',
    [I18N_KEYS.ADD_POST]: 'Добавить пост',
    [I18N_KEYS.RU]: 'РУС',
    [I18N_KEYS.EN]: 'АНГЛ',
    [I18N_KEYS.PREV]: 'ПРЕД',
    [I18N_KEYS.NEXT]: 'СЛЕД',
  },

  EN: {
    [I18N_KEYS.LOGIN]: 'Login',
    [I18N_KEYS.LOGOUT]: 'Logout',
    [I18N_KEYS.EMAIL]: 'email',
    [I18N_KEYS.PASSWORD]: 'password',
    [I18N_KEYS.SEND]: 'Send',
    [I18N_KEYS.REMEMBER_ME]: 'remember me',
    [I18N_KEYS.PROFILE]: 'Profile',
    [I18N_KEYS.MESSAGES]: 'Messages',
    [I18N_KEYS.USERS]: 'Users',
    [I18N_KEYS.NEWS]: 'News',
    [I18N_KEYS.MUSIC]: 'Music',
    [I18N_KEYS.SETTINGS]: 'Settings',
    [I18N_KEYS.MY_POSTS]: 'My Posts',
    [I18N_KEYS.ADD_POST]: 'Add post',
    [I18N_KEYS.RU]: 'RU',
    [I18N_KEYS.EN]: 'EN',
    [I18N_KEYS.PREV]: 'PREV',
    [I18N_KEYS.NEXT]: 'NEXT',
  },
};

export {
  NEXT_ID,
  API_KEY,
  I18N_KEYS,
  TRY_AGAIN,
  TRANSLATIONS,
  DEFAULT_USER_ID,
  ALT_PROFILE_AVATAR,
  DEFAULT_LIKES_VALUE,
  ALT_USER_AVATAR, WELL,
};
