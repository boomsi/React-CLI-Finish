import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { common_en, target_en } from '@src/locales/en/exports';
import { common_zh, target_zh } from '@src/locales/zh/exports';

// Documentation https://react.i18next.com/latest/withtranslation-hoc

// (tip move them in a JSON file and import them)
const resources = {
  en: {
    common: common_en,
    target: target_en
  },
  zh: {
    common: common_zh,
    target: target_zh
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'zh',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
