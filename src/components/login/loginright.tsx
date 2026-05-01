import {
  RightWrapper,
  RightCard,
  RightContent,
  LogoWrapper,
  LogoBox,
  TitleBlock,
  LoginRightLogoText,
  LoginRightTitle,
  LoginRightText,
  LoginRightTextBtm,
  HeroWrapper,
  VideoStyled,
} from "./style";
import { useTranslation } from "react-i18next";
import roboVideo from "@/assets/video/robohub-login-video.webm";
import Logo from "@/assets/icons/logo.svg?react";

export const LoginRight = () => {
  const { t } = useTranslation();

  return (
    <RightWrapper>
      <RightCard>
        <RightContent>
          <LogoWrapper>
            <LogoBox>
              <Logo />
            </LogoBox>
            <LoginRightLogoText>robohub</LoginRightLogoText>
          </LogoWrapper>

          <TitleBlock>
            <LoginRightTitle>{t("r_title")}</LoginRightTitle>
            <LoginRightText>{t("r_text")}</LoginRightText>
          </TitleBlock>

          <HeroWrapper>
            <VideoStyled loop autoPlay muted playsInline preload="auto">
              <source src={roboVideo} type="video/webm" />
            </VideoStyled>
          </HeroWrapper>

          <LoginRightTextBtm>{t("r_text_btm")}</LoginRightTextBtm>
        </RightContent>
      </RightCard>
    </RightWrapper>
  );
};
