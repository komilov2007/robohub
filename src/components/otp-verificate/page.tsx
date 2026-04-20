import Container from '@mui/material/Container';
import { Controller } from 'react-hook-form';
import { LoginRight } from '../login/loginright';
import { usePage } from './usePage';
import IconArrow from '@/assets/icons/icon-arrow.svg?react';

import {
  PageWrap,
  LeftSide,
  RightSide,

  CenterWrap,
  FormWrap,
  Title,
  Description,
  OtpRow,
  OtpInput,
  SubmitButton,
  ResendText,
  TimeText,
  Footer,
  FooterText,
  Arrow,
} from './styled';
import useMediaQuery from '@mui/material/useMediaQuery';
import { HeaderArea } from '../register/styled';
import { LanguageSelect, LanguageSelectWrap, StyledMenuItem } from '../login/style';
import { useNavigate } from 'react-router-dom';
const OtpVerifyPage = () => {
  const {
    t,
    i18n,
    control,
    handleSubmit,
    onSubmit,
    verifyLoading,
    contact,
    otpValues,
    handleOtpChange,
    inputRefs,
    handleLangChange,
    languages,isExpired,formatTime
  } = usePage();

  const isMobile = useMediaQuery('(max-width:900px)');
  const navigate = useNavigate()
  return (
    <Container maxWidth={false} disableGutters>
      <PageWrap>
        <LeftSide sx={{ width: isMobile ? '100%' : '50%' }}>
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

          <CenterWrap>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%', maxWidth: '400px' }}>
              
              
              <FormWrap>
               <Arrow onClick={() => navigate(-1)}
                >
                <IconArrow />
               </Arrow>
              
                <Title>{t('otp_verify_title') || 'OTP tasdiqlash'}</Title>

                <Description>
                  {t('otp_sent_text') || 'Tasdiqlash kodini sizning'}{' '}
                  <b>{contact}</b>{' '}
                  {t('otp_sent_text_end') ||
                    'ga yubordik, kodni kiriting'}
                </Description>

                <Controller
                  name="otp"
                  control={control}
                  render={() => (
                    <OtpRow>
                      {otpValues.map((value, index) => (
                        <OtpInput
                          key={index}
                          disabled={isExpired}
                          ref={(el) => {
                            inputRefs.current[index] = el;
                          }}
                          value={value}
                          onChange={(e) =>
                            handleOtpChange(index, e.target.value)
                          }
                          onKeyDown={(e) => {
                            if (
                              e.key === 'Backspace' &&
                              !otpValues[index] &&
                              index > 0
                            ) {
                              inputRefs.current[index - 1]?.focus();
                            }
                          }}
                          maxLength={1}
                          inputMode="numeric"
                        />
                      ))}
                    </OtpRow>
                  )}
                />

                <SubmitButton type="submit" disabled={verifyLoading || isExpired}>
                  {verifyLoading
                    ? 'Loading...'
                    : t('otp_verify_button') || 'Tasdiqlash'}
                </SubmitButton>

                <ResendText>
                  {t('otp_resend_text') || 'Agar kelmagan bo‘lsa'}{' '}
                  <TimeText>{formatTime}</TimeText>
                </ResendText>
              </FormWrap>
            </form>
          </CenterWrap>

          <Footer>
            <FooterText>© 2025 Robohub</FooterText>
            <FooterText>
              {t('privacy_policy') || 'Maxfiylik siyosati'}
            </FooterText>
            <FooterText>
              {t('support') || 'Qo‘llab-quvvatlash'}
            </FooterText>
          </Footer>
        </LeftSide>

        {!isMobile && (
          <RightSide>
            <LoginRight />
          </RightSide>
        )}
      </PageWrap>
    </Container>
  );
};

export default OtpVerifyPage;