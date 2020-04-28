import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';

import { TRANSLATIONS } from './utils/constants';

const resources = {
  en: {
    translation: TRANSLATIONS.EN,
  },
  ru: {
    translation: TRANSLATIONS.RU,
  },
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultLocale: 'en',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
