import { ThemeProvider, Typography, InputAdornment, Box } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import theme from '@/theme/theme';
import IconUser from '@/assets/icons/user.svg?react';

import { LoginRight } from '../login/loginright';
import {  FooterInner, FooterWrap } from '../login/style';
import IconArrow from '@/assets/icons/icon-arrow.svg?react';
import IconFlagUz from '@/assets/icons/flag-uz.svg?react';
import IconFlagRu from '@/assets/icons/flag-ru.svg?react';
import IconFlagEn from '@/assets/icons/flag-en.svg?react';
import {
  AuthPageWrap,
  AuthRightSide,
  LeftColumn,
  HeaderArea,
  CenterArea,
  FormBlock,
  BackButton,
  LanguageSelectWrap,
  LanguageSelect,
  StyledMenuItem,
  TitleWrap,
  SubTitleWrap,
  FieldWrap,
  StyledTextField,
  SubmitButton,
  BottomTextWrap,
  BottomInlineText,
} from './styled';
import {  useNavigate } from 'react-router-dom';

type FormValues = {
  contact: string;
};

const languages = [
  { value: 'uz', label: "O'zbekcha", Icon: IconFlagUz },
  { value: 'ru', label: 'Русский', Icon: IconFlagRu },
  { value: 'en', label: 'English', Icon: IconFlagEn },
];

const ForgetPasswordPage = () => {
  const { t, i18n } = useTranslation();
 const navigate = useNavigate();
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      contact: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const handleLangChange = (value: string) => {
    i18n.changeLanguage(value);
    localStorage.setItem('lang', value);
  };

  return (
    <ThemeProvider theme={theme}>
      <AuthPageWrap>
        <LeftColumn>
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

          <CenterArea>
            <FormBlock  onSubmit={handleSubmit(onSubmit)}>
             <BackButton onClick={() => navigate(-1)}>
              <IconArrow />
              </BackButton>

              <TitleWrap>
                <Typography vocab="loginTitle">
                  {t('forget_password_title')}
                </Typography>
              </TitleWrap>

              <SubTitleWrap>
                <Typography vocab="loginSubTitle">
                  {t('forget_password_subtitle')}
                </Typography>
              </SubTitleWrap>

              <FieldWrap>
               
              </FieldWrap>

               <Box>
                   <Typography vocab="noAccaunt">
                  {t('forget_password_email_label')}
                </Typography>
                  <Controller
                    name="contact"
                    control={control}
                    render={({ field, fieldState }) => (
                      <StyledTextField
                        {...field}
                        placeholder={t('login_placeholder')}
                        fullWidth
                        autoComplete="current-email"
                        error={fieldState.invalid}
                        helperText={t(fieldState.error?.message as string)}
                        slotProps={{
                          input: {
                            startAdornment: (
                              <InputAdornment position="start">
                                <IconUser />
                              </InputAdornment>
                            ),
                          },
                        }}
                      />
                    )}
                  />
                </Box>

              <SubmitButton type="submit" vocab="loginBtn">
                {t('forget_password_send_code')}
              </SubmitButton>

              <BottomTextWrap>
                <Typography vocab="loginBtm">
                  {t('forget_password_remember_password')}{' '}
                </Typography>

                <BottomInlineText onClick={() => navigate('/')} vocab="loginRgt">
                  {t('forget_password_login')}
                </BottomInlineText>
              </BottomTextWrap>
            </FormBlock>
          </CenterArea>

          <FooterWrap>
            <FooterInner>
              <Typography vocab="loginBtm">
                © {new Date().getFullYear()} Robohub
              </Typography>
              <Typography vocab="loginBtm">
                {t('privacy_policy')}
              </Typography>
              <Typography vocab="loginBtm" component="span">
                {t('support')}
              </Typography>
            </FooterInner>
          </FooterWrap>
        </LeftColumn>

        <AuthRightSide>
          <LoginRight />
        </AuthRightSide>
      </AuthPageWrap>
    </ThemeProvider>
  );
};

export default ForgetPasswordPage;