import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import commonEn from './locales/en/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          commonEn,
        },
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    useSuspense: false,
  });

export default i18n;
