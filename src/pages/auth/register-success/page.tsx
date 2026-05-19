import { memo } from "react";
import { Typography } from "@mui/material";

import { HeaderArea } from "../forget-password/styled";

import { usePage } from "./usePage";

import { SuccessContainer, SuccessLeftSide } from "./styled";
import {
  LanguageSelect,
  LanguageSelectWrap,
  StyledMenuItem,
} from "../register/styled";
import { FooterInner, FooterWrap } from "../login/styled";
import SuccessContent from "@/components/register-success/SuccessContent";

const Page = () => {
  const { t, i18n, languages, handleLangChange } = usePage();

  return (
    <SuccessContainer>
      <SuccessLeftSide>
        <HeaderArea>
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
        </HeaderArea>

        <SuccessContent />

        <FooterWrap>
          <FooterInner>
            <Typography vocab="loginBtm">
              © {new Date().getFullYear()} Robohub
            </Typography>

            <Typography vocab="loginBtm">{t("privacy_policy")}</Typography>

            <Typography vocab="loginBtm" component="span">
              {t("support")}
            </Typography>
          </FooterInner>
        </FooterWrap>
      </SuccessLeftSide>
    </SuccessContainer>
  );
};

export default memo(Page);
