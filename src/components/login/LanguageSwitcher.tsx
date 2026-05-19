import { handleLangChange } from "@/assets/locales/i18n";

import IconFlagUz from "@/assets/icons/flag-uz.svg?react";
import IconFlagRu from "@/assets/icons/flag-ru.svg?react";
import IconFlagEn from "@/assets/icons/flag-en.svg?react";

import { LanguageSelect, LanguageSelectWrap, StyledMenuItem } from "./style";

const languages = [
  { value: "uz", label: "O'zbekcha", Icon: IconFlagUz },
  { value: "ru", label: "Русский", Icon: IconFlagRu },
  { value: "en", label: "English", Icon: IconFlagEn },
];

const LanguageSwitcher = ({ i18n }: any) => {
  return (
    <LanguageSelectWrap>
      <LanguageSelect
        value={i18n.language}
        onChange={(e) => handleLangChange(e.target.value as string)}
      >
        {languages.map(({ value, label, Icon }) => (
          <StyledMenuItem key={value} value={value}>
            <Icon /> {label}
          </StyledMenuItem>
        ))}
      </LanguageSelect>
    </LanguageSelectWrap>
  );
};

export default LanguageSwitcher;
