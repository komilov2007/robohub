import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en  from '@/assets/locales/en.json';
import uz from '@/assets/locales/uz.json';
import ru from '@/assets/locales/ru.json';

const savedLang = localStorage.getItem('lang') || 'uz';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      uz: { translation: uz },
      ru: { translation: ru },
      en: { translation: en },
    },
    lng: savedLang,
    fallbackLng: 'uz',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;