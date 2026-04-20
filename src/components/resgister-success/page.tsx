import {  Typography } from '@mui/material';
import { memo } from 'react';
import { LoginRight } from '../login/loginright';
import {
  FooterInner,
  FooterWrap,
  LanguageSelect,
  LanguageSelectWrap,
  StyledMenuItem,
} from '../login/style';
import { usePage } from '@/components/resgister-success/usePage';
import { HeaderArea } from '../forget-login/styled';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import {
  SuccessContainer,
  SuccessLeftSide,
  SuccessCenterWrap,
  SuccessCard,
  SuccessIconBox,
  SuccessTitle,
  SuccessDescription,
  SuccessButton,
  SuccessRightSide,
  SuccessEmptyBox,
} from './styled';

const Success = () => {
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

        <SuccessEmptyBox />

        <SuccessCenterWrap>
          <SuccessCard>
            <SuccessIconBox>
              <CheckCircleRoundedIcon
                sx={{
                  fontSize: 28,
                  color: '#FFFFFF',
                }}
              />
            </SuccessIconBox>

            <SuccessTitle>
              {t('register_success_title')}
            </SuccessTitle>

            <SuccessDescription>
              {t('register_success_description')}
            </SuccessDescription>

            <SuccessButton
              to="/"
            >
              {t('start')}
            </SuccessButton>
          </SuccessCard>
        </SuccessCenterWrap>

        <FooterWrap>
          <FooterInner>
            <Typography vocab="loginBtm">
              © {new Date().getFullYear()} Robohub
            </Typography>
            <Typography vocab="loginBtm">{t('privacy_policy')}</Typography>
            <Typography vocab="loginBtm" component="span">
              {t('support')}
            </Typography>
          </FooterInner>
        </FooterWrap>
      </SuccessLeftSide>

      <SuccessRightSide>
        <LoginRight />
      </SuccessRightSide>
    </SuccessContainer>
  );
};

export default memo(Success);