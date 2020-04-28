import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';

const resources = {
    en: {
        translation: translationEN
    }
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
