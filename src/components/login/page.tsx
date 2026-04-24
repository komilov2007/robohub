import { Controller } from "react-hook-form";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { handleLangChange } from "@/assets/locales/i18n";
import { ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";
import IconFlagUz from "@/assets/icons/flag-uz.svg?react";
import IconFlagRu from "@/assets/icons/flag-ru.svg?react";
import IconFlagEn from "@/assets/icons/flag-en.svg?react";
import IconLock from "@/assets/icons/lock.svg?react";
import IconUser from "@/assets/icons/user.svg?react";
import theme from "@/theme/theme";
import { usePage } from "./usePage";
import {
  Container,
  LoginFormCenter,
  LoginFormOptions,
  AutofillOverride,
  StyledTextField,
  FieldLabel,
  StyledMenuItem,
  LoginLeftNoAcc,
  StyledLoginButton,
  LoginOuter,
  LoginTitleWrap,
  LoginFieldsWrap,
  FooterWrap,
  FooterInner,
  LanguageSelect,
  LanguageSelectWrap,
} from "./style";
const languages = [
  { value: "uz", label: "O'zbekcha", Icon: IconFlagUz },
  { value: "ru", label: "Русский", Icon: IconFlagRu },
  { value: "en", label: "English", Icon: IconFlagEn },
];
const LoginLeft = () => {
  const {
    control,
    handleSubmit,
    isSubmitting,
    onSubmit,
    rememberMe,
    passwordVisibility,
    t,
    i18n,
    isDirty,
    isValid,
  } = usePage();
  return (
    <ThemeProvider theme={theme}>
      <AutofillOverride>
        <Container isLogin={true} onSubmit={handleSubmit(onSubmit)}>
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
          <LoginFormCenter>
            <LoginOuter>
              <LoginTitleWrap>
                <Typography vocab="loginTitle">{t("title")}</Typography>

                <Typography vocab="loginSubTitle">
                  {t("subtitle_line_1")}
                  <br />
                  {t("subtitle_line_2")}
                </Typography>
              </LoginTitleWrap>
              <LoginFieldsWrap>
                <Box>
                  <FieldLabel>{t("login")}</FieldLabel>
                  <Controller
                    name="contact"
                    control={control}
                    render={({ field, fieldState }) => (
                      <StyledTextField
                        {...field}
                        placeholder={t("login_placeholder")}
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
                <Box>
                  <FieldLabel>{t("password")}</FieldLabel>
                  <Controller
                    name="password"
                    control={control}
                    render={({ field, fieldState }) => (
                      <StyledTextField
                        {...field}
                        type={passwordVisibility.value ? "text" : "password"}
                        placeholder={t("password_placeholder")}
                        autoComplete="current-password"
                        fullWidth
                        error={fieldState.invalid}
                        helperText={t(fieldState.error?.message as string)}
                        slotProps={{
                          input: {
                            startAdornment: (
                              <InputAdornment position="start">
                                <IconLock />
                              </InputAdornment>
                            ),
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={passwordVisibility.toggle}
                                  edge="end"
                                >
                                  {passwordVisibility.value ? (
                                    <VisibilityOffOutlinedIcon
                                      sx={{ fontSize: 18 }}
                                    />
                                  ) : (
                                    <VisibilityOutlinedIcon
                                      sx={{ fontSize: 18 }}
                                    />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          },
                        }}
                      />
                    )}
                  />
                </Box>
                <LoginFormOptions>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={rememberMe.value}
                        onChange={rememberMe.toggle}
                      />
                    }
                    label={t("remember_me")}
                  />
                  <Typography
                    component={Link}
                    to="/forget-password"
                    variant="forgetText"
                  >
                    {t("forgot_password")}
                  </Typography>
                </LoginFormOptions>
                <Box>
                  <StyledLoginButton
                    variant="contained"
                    type="submit"
                    color="primary"
                    vocab="loginBtn"
                    loading={isSubmitting}
                    disabled={!isDirty || !isValid}
                  >
                    {t("enter")}
                  </StyledLoginButton>
                  <LoginLeftNoAcc>
                    <Typography vocab="noAccaunt">{t("no_account")}</Typography>
                    <Typography
                      component={Link}
                      to="/register"
                      vocab="loginRgt"
                    >
                      {t("register")}
                    </Typography>
                  </LoginLeftNoAcc>
                </Box>
              </LoginFieldsWrap>
            </LoginOuter>
          </LoginFormCenter>
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
        </Container>
      </AutofillOverride>
    </ThemeProvider>
  );
};
export default LoginLeft;
