import { useTranslation } from "react-i18next";
import IconFlagUz from '@/assets/icons/flag-uz.svg?react';
import IconFlagRu from '@/assets/icons/flag-ru.svg?react';
import IconFlagEn from '@/assets/icons/flag-en.svg?react';
export const usePage = () => {
  const { t, i18n } = useTranslation();
   const handleLangChange = (value: string) => {
     i18n.changeLanguage(value);
     localStorage.setItem('lang', value);
   };
 const languages = [
   { value: 'uz', label: "O'zbekcha", Icon: IconFlagUz },
   { value: 'ru', label: 'Русский', Icon: IconFlagRu },
   { value: 'en', label: 'English', Icon: IconFlagEn },
 ];
  return {
    t,
    i18n,
    languages,
    handleLangChange
  };}