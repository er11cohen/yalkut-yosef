import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../public/locales/en/translation.json';
import he from '../public/locales/he/translation.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            he: { translation: he }
        },
        lng: 'he',
        fallbackLng: 'he',
        interpolation: { escapeValue: false },
    });
