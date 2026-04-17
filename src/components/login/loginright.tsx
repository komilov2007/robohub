import {
  RightWrapper,
  RightCard,
  RightContent,
  LogoWrapper,
  LogoBox,
  TitleBlock,
  ImageWrapper,
  StyledImage,
  LoginRightLogoText,
  LoginRightTitle,
  LoginRightText,
  LoginRightTextBtm,
} from './style';
import { useTranslation } from 'react-i18next';
import ImgRoboStack from '@/assets/img/robo-stack.png';
import Logo from '@/assets/icons/logo.svg?react';
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
            <LoginRightTitle>{t('r_title')}</LoginRightTitle>
            <LoginRightText>{t('r_text')}</LoginRightText>
          </TitleBlock>

          <ImageWrapper>
            <StyledImage src={ImgRoboStack} alt="stacks" />
          </ImageWrapper>

          <LoginRightTextBtm>{t('r_text_btm')}</LoginRightTextBtm>
        </RightContent>
      </RightCard>
    </RightWrapper>
  );
};
