import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import { Controller } from 'react-hook-form';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import CheckIcon from '@mui/icons-material/Check';
import theme from '@/theme/theme';
import IconUser from '@/assets/icons/user.svg?react';
import { LoginRight } from '../login/loginright';
import { FooterInner, FooterWrap } from '../login/style';
import { AuthPageWrap, LeftColumn, HeaderArea, CenterArea, FormBlock, LanguageSelectWrap, LanguageSelect, StyledMenuItem, TitleWrap, SubTitleWrap, NameRow, FieldBox, FieldWrap, StyledTextField, AgreementWrap, SubmitButton, BottomTextWrap, BottomInlineText, RightSide, PasswordSection, PasswordEyeButton, PasswordStrengthWrap, PasswordStrengthTop, PasswordStrengthBars, PasswordStrengthBar, PasswordStrengthText, PasswordRulesWrap, PasswordRuleItem, PasswordRuleDot, PasswordRuleText,}from './styled';
import { usePage } from './usePage';
import { useNavigate } from 'react-router';
import { ThemeProvider } from '@emotion/react';
import { CircularProgress } from '@mui/material';
const RegisterPage = () => {
  const {t,i18n,control,handleSubmit,onSubmit,languages,handleLangChange,showPassword,setShowPassword,showConfirmPassword,setShowConfirmPassword,passwordChecks,passwordStrength,registerLoading, } = usePage();
  const isMobile = useMediaQuery('(max-width:768px)');
  const navigate = useNavigate();
  return (
    <Container
      sx={{ width: '100%', display: 'flex' }}
      maxWidth={false}
      disableGutters
    >
      <ThemeProvider theme={theme}>
        <AuthPageWrap>
          <LeftColumn>
            <HeaderArea>
              <LanguageSelectWrap>
                <LanguageSelect
                  value={i18n.language}
                  onChange={(e) => handleLangChange(e.target.value as string)}
                  size="small"
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
              <Box component="form" onSubmit={handleSubmit(onSubmit)}>
              <FormBlock>
                <TitleWrap>
                  <Typography vocab="loginTitle">
                    {t('register_title')}
                  </Typography>
                </TitleWrap>
                <SubTitleWrap>
                  <Typography vocab="loginSubTitle">
                    {t('register_subtitle')}
                  </Typography>
                </SubTitleWrap>
                <NameRow>
                  <FieldBox>
                    <FieldWrap>
                      <Typography vocab="noAccaunt">
                        {t('first_name')}
                      </Typography>
                    </FieldWrap>
                    <Controller
                      name="first_name"
                      control={control}
                      render={({ field, fieldState }) => (
                        <StyledTextField
                          {...field}
                          fullWidth
                          placeholder={t('first_name_placeholder')}
                          error={fieldState.invalid}
                          helperText={
                            fieldState.error?.message
                              ? t(fieldState.error.message as string)
                              : ''
                          }
                        />
                      )}
                    />
                  </FieldBox>
                  <FieldBox>
                    <FieldWrap>
                      <Typography vocab="noAccaunt">
                        {t('last_name')}
                      </Typography>
                    </FieldWrap>
                    <Controller
                      name="last_name"
                      control={control}
                      render={({ field, fieldState }) => (
                        <StyledTextField
                          {...field}
                          fullWidth
                          placeholder={t('last_name_placeholder')}
                          error={fieldState.invalid}
                          helperText={
                            fieldState.error?.message
                              ? t(fieldState.error.message as string)
                              : ''
                          }
                        />
                      )}
                    />
                  </FieldBox>
                </NameRow>
                <FieldWrap>
                  <Typography vocab="noAccaunt">
                    {t('register_email')}
                  </Typography>
                </FieldWrap>
                <Controller
                  name="contact"
                  control={control}
                  render={({ field, fieldState }) => (
                    <StyledTextField
                      {...field}
                      fullWidth
                      placeholder={t('register_email_placeholder')}
                      error={fieldState.invalid}
                      helperText={
                        fieldState.error?.message
                          ? t(fieldState.error.message as string)
                          : ''
                      }
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
                <PasswordSection>
                  <FieldWrap>
                    <Typography vocab="noAccaunt">
                      {t('password')}
                    </Typography>
                  </FieldWrap>
                  <Controller
                    name="password"
                    control={control}
                    render={({ field, fieldState }) => (
                      <StyledTextField
                        {...field}
                        fullWidth
                        type={showPassword ? 'text' : 'password'}
                        placeholder={t('create_password_placeholder')}
                        error={fieldState.invalid}
                        helperText={
                          fieldState.error?.message
                            ? t(fieldState.error.message as string)
                            : ''
                        }
                        slotProps={{
                          input: {
                            endAdornment: (
                              <InputAdornment position="end">
                                <PasswordEyeButton
                                  onClick={() => setShowPassword((prev) => !prev)}
                                >
                                  {showPassword ? (
                                    <VisibilityOffOutlinedIcon sx={{ fontSize: 18 }} />
                                  ) : (
                                    <VisibilityOutlinedIcon sx={{ fontSize: 18 }} />
                                  )}
                                </PasswordEyeButton>
                              </InputAdornment>
                            ),
                          },
                        }}
                      />
                    )}
                  />
                  <PasswordStrengthWrap>
                    <PasswordStrengthTop>
                      <PasswordStrengthBars>
                        <PasswordStrengthBar active={passwordStrength.score >= 1} />
                        <PasswordStrengthBar active={passwordStrength.score >= 2} />
                        <PasswordStrengthBar active={passwordStrength.score >= 3} />
                        <PasswordStrengthBar active={passwordStrength.score >= 4} />
                      </PasswordStrengthBars>
                      <PasswordStrengthText active={passwordStrength.score > 0}>
                        {passwordStrength.label}
                      </PasswordStrengthText>
                    </PasswordStrengthTop>
                  </PasswordStrengthWrap>
                  <PasswordRulesWrap>
                    <PasswordRuleItem>
                      <PasswordRuleDot active={passwordChecks.minLength}>
                        <CheckIcon sx={{ fontSize: 8, color: '#fff' }} />
                      </PasswordRuleDot>
                      <PasswordRuleText active={passwordChecks.minLength}>
                        {t('password_rule_min_8')}
                      </PasswordRuleText>
                    </PasswordRuleItem>
                    <PasswordRuleItem>
                      <PasswordRuleDot active={passwordChecks.hasNumber}>
                        <CheckIcon sx={{ fontSize: 8, color: '#fff' }} />
                      </PasswordRuleDot>
                      <PasswordRuleText active={passwordChecks.hasNumber}>
                        {t('password_rule_number')}
                      </PasswordRuleText>
                    </PasswordRuleItem>
                    <PasswordRuleItem>
                      <PasswordRuleDot active={passwordChecks.hasUppercase}>
                        <CheckIcon sx={{ fontSize: 8, color: '#fff' }} />
                      </PasswordRuleDot>
                      <PasswordRuleText active={passwordChecks.hasUppercase}>
                        {t('password_rule_uppercase')}
                      </PasswordRuleText>
                    </PasswordRuleItem>
                    <PasswordRuleItem>
                      <PasswordRuleDot active={passwordChecks.hasSpecial}>
                        <CheckIcon sx={{ fontSize: 8, color: '#fff' }} />
                      </PasswordRuleDot>
                      <PasswordRuleText active={passwordChecks.hasSpecial}>
                        {t('password_rule_special')}
                      </PasswordRuleText>
                    </PasswordRuleItem>
                  </PasswordRulesWrap>
                </PasswordSection>
                <FieldWrap>
                  <Typography vocab="noAccaunt">
                    {t('confirm_password')}
                  </Typography>
                </FieldWrap>
                <Controller
                  name="confirm_password"
                  control={control}
                  render={({ field, fieldState }) => (
                    <StyledTextField
                      {...field}
                      fullWidth
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder={t('confirm_password_placeholder')}
                      error={fieldState.invalid}
                      helperText={
                        fieldState.error?.message
                          ? t(fieldState.error.message as string)
                          : ''}
                      slotProps={{
                        input: {
                          endAdornment: (
                            <InputAdornment position="end">
                              <PasswordEyeButton
                                onClick={() =>
                                  setShowConfirmPassword((prev) => !prev)
                                }
                              >
                                {showConfirmPassword ? (
                                  <VisibilityOffOutlinedIcon sx={{ fontSize: 18 }} />
                                ) : (
                                  <VisibilityOutlinedIcon sx={{ fontSize: 18 }} />
                                )}
                              </PasswordEyeButton>
                            </InputAdornment>
                          ),
                        },
                      }}
                    />
                  )}
                />
                <AgreementWrap>
                  <Typography vocab="loginBtm">
                    {t('terms_text')}
                  </Typography>
                </AgreementWrap>
                <SubmitButton
                  type="submit"
                  vocab="loginBtn"
                  disabled={registerLoading}
                >
                 {registerLoading ? (  <CircularProgress size={20} sx={{ color: '#fff' }} />) : (  t('register_btn'))}
                </SubmitButton>
                <BottomTextWrap>
                  <Typography vocab="loginBtm">
                    {t('have_account')}{' '}
                  </Typography>
                 <BottomInlineText
                  onClick={() => navigate('/')}
                  vocab="loginRgt"
                >
                  {t('login_now')}
                </BottomInlineText>
                </BottomTextWrap>
              </FormBlock>
              </Box>
            </CenterArea>
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
          </LeftColumn>
          <RightSide>{!isMobile && <LoginRight />}</RightSide>
        </AuthPageWrap>
      </ThemeProvider>
    </Container>
  );
};

export default RegisterPage;