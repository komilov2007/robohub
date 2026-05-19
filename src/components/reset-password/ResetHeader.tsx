import {
  HeaderArea,
  LanguageSelect,
  LanguageSelectWrap,
  StyledMenuItem,
} from "@/pages/auth/reset-password/styled";

const ResetHeader = ({ i18n, handleLangChange, languages }: any) => {
  return (
    <HeaderArea>
      <LanguageSelectWrap>
        <LanguageSelect
          size="small"
          value={i18n.language}
          onChange={(e) => handleLangChange(e.target.value as string)}
        >
          {languages.map(({ value, label, Icon }: any) => (
            <StyledMenuItem key={value} value={value}>
              <Icon /> {label}
            </StyledMenuItem>
          ))}
        </LanguageSelect>
      </LanguageSelectWrap>
    </HeaderArea>
  );
};

export default ResetHeader;
