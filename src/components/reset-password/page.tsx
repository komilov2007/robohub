import { memo } from "react";
import { Controller } from "react-hook-form";
import {
  CircularProgress,
  InputAdornment,
  ThemeProvider,
  Typography,
} from "@mui/material";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import CheckIcon from "@mui/icons-material/Check";

import IconArrow from "@/assets/icons/icon-arrow.svg?react";

import {
  PasswordEyeButton,
  StyledTextField,
  SubmitButton,
  PasswordSection,
  FieldWrap,
  PasswordStrengthWrap,
  PasswordStrengthTop,
  PasswordStrengthBars,
  PasswordStrengthBar,
  PasswordStrengthText,
  PasswordRulesWrap,
  PasswordRuleItem,
  PasswordRuleDot,
  PasswordRuleText,
  Confirm,
  FooterWrap,
  FooterInner,
  HeaderArea,
  LanguageSelectWrap,
  LanguageSelect,
  StyledMenuItem,
  PageWrap,
  LeftSide,
  FormOuter,
  ContentWrap,
  PageTitle,
  PageDescription,
  SubmitWrap,
} from "./styled";

import { usePage, type FormValues } from "./usePage";

import theme from "@/theme/theme";

import { LoginRight } from "../login/loginright";

import { Arrow } from "../otp-verificate/styled";

const Page = () => {
  const {
    t,

    control,
    handleSubmit,
    onSubmit,

    registerLoading,

    showPassword,
    setShowPassword,

    showConfirmPassword,
    setShowConfirmPassword,

    passwordChecks,
    passwordStrength,

    i18n,
    handleLangChange,
    languages,

    navigate,
  } = usePage();

  return (
    <ThemeProvider theme={theme}>
      <PageWrap>
        <LeftSide>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormOuter>
              {/* HEADER */}
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

              {/* CONTENT */}
              <ContentWrap>
                <PasswordSection>
                  <Arrow onClick={() => navigate(-1)}>
                    <IconArrow />
                  </Arrow>

                  <PageTitle>{t("reset_password_title")}</PageTitle>

                  <PageDescription>
                    {t("reset_password_description")}
                  </PageDescription>

                  {/* PASSWORD */}
                  <FieldWrap>
                    <Typography vocab="noAccaunt">{t("password")}</Typography>
                  </FieldWrap>

                  <Controller<FormValues>
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field, fieldState }) => (
                      <StyledTextField
                        {...field}
                        fullWidth
                        type={showPassword ? "text" : "password"}
                        placeholder={t("create_password_placeholder")}
                        error={fieldState.invalid}
                        helperText={
                          fieldState.error?.message
                            ? t(fieldState.error.message as string)
                            : ""
                        }
                        slotProps={{
                          input: {
                            endAdornment: (
                              <InputAdornment position="end">
                                <PasswordEyeButton
                                  onClick={() =>
                                    setShowPassword((prev) => !prev)
                                  }
                                >
                                  {showPassword ? (
                                    <VisibilityOffOutlinedIcon
                                      sx={{
                                        fontSize: 18,
                                      }}
                                    />
                                  ) : (
                                    <VisibilityOutlinedIcon
                                      sx={{
                                        fontSize: 18,
                                      }}
                                    />
                                  )}
                                </PasswordEyeButton>
                              </InputAdornment>
                            ),
                          },
                        }}
                      />
                    )}
                  />

                  {/* STRENGTH */}
                  <PasswordStrengthWrap>
                    <PasswordStrengthTop>
                      <PasswordStrengthBars>
                        {[1, 2, 3, 4].map((level) => (
                          <PasswordStrengthBar
                            key={level}
                            level={level}
                            score={passwordStrength.score}
                          />
                        ))}
                      </PasswordStrengthBars>

                      <PasswordStrengthText score={passwordStrength.score}>
                        {passwordStrength.label}
                      </PasswordStrengthText>
                    </PasswordStrengthTop>
                  </PasswordStrengthWrap>

                  {/* RULES */}
                  <PasswordRulesWrap>
                    <PasswordRuleItem>
                      <PasswordRuleDot active={passwordChecks.minLength}>
                        <CheckIcon
                          sx={{
                            fontSize: 8,
                            color: "#fff",
                          }}
                        />
                      </PasswordRuleDot>

                      <PasswordRuleText active={passwordChecks.minLength}>
                        {t("password_rule_min_8")}
                      </PasswordRuleText>
                    </PasswordRuleItem>

                    <PasswordRuleItem>
                      <PasswordRuleDot active={passwordChecks.hasNumber}>
                        <CheckIcon
                          sx={{
                            fontSize: 8,
                            color: "#fff",
                          }}
                        />
                      </PasswordRuleDot>

                      <PasswordRuleText active={passwordChecks.hasNumber}>
                        {t("password_rule_number")}
                      </PasswordRuleText>
                    </PasswordRuleItem>

                    <PasswordRuleItem>
                      <PasswordRuleDot active={passwordChecks.hasUppercase}>
                        <CheckIcon
                          sx={{
                            fontSize: 8,
                            color: "#fff",
                          }}
                        />
                      </PasswordRuleDot>

                      <PasswordRuleText active={passwordChecks.hasUppercase}>
                        {t("password_rule_uppercase")}
                      </PasswordRuleText>
                    </PasswordRuleItem>

                    <PasswordRuleItem>
                      <PasswordRuleDot active={passwordChecks.hasSpecial}>
                        <CheckIcon
                          sx={{
                            fontSize: 8,
                            color: "#fff",
                          }}
                        />
                      </PasswordRuleDot>

                      <PasswordRuleText active={passwordChecks.hasSpecial}>
                        {t("password_rule_special")}
                      </PasswordRuleText>
                    </PasswordRuleItem>
                  </PasswordRulesWrap>
                </PasswordSection>

                {/* CONFIRM */}
                <FieldWrap>
                  <Typography vocab="noAccaunt">
                    {t("confirm_password")}
                  </Typography>
                </FieldWrap>

                <Confirm>
                  <Controller<FormValues>
                    name="confirm_password"
                    control={control}
                    defaultValue=""
                    render={({ field, fieldState }) => (
                      <StyledTextField
                        {...field}
                        fullWidth
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder={t("confirm_password_placeholder")}
                        error={fieldState.invalid}
                        helperText={
                          fieldState.error?.message
                            ? t(fieldState.error.message as string)
                            : ""
                        }
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
                                    <VisibilityOffOutlinedIcon
                                      sx={{
                                        fontSize: 18,
                                      }}
                                    />
                                  ) : (
                                    <VisibilityOutlinedIcon
                                      sx={{
                                        fontSize: 18,
                                      }}
                                    />
                                  )}
                                </PasswordEyeButton>
                              </InputAdornment>
                            ),
                          },
                        }}
                      />
                    )}
                  />
                </Confirm>

                {/* BUTTON */}
                <SubmitWrap>
                  <SubmitButton
                    type="submit"
                    vocab="loginBtn"
                    disabled={registerLoading}
                  >
                    {registerLoading ? (
                      <CircularProgress
                        size={20}
                        sx={{
                          color: "#fff",
                        }}
                      />
                    ) : (
                      t("reset_password")
                    )}
                  </SubmitButton>
                </SubmitWrap>
              </ContentWrap>

              {/* FOOTER */}
              <FooterWrap>
                <FooterInner>
                  <Typography vocab="loginBtm">
                    © {new Date().getFullYear()} Robohub
                  </Typography>

                  <Typography vocab="loginBtm">
                    {t("privacy_policy")}
                  </Typography>

                  <Typography vocab="loginBtm" component="span">
                    {t("support")}
                  </Typography>
                </FooterInner>
              </FooterWrap>
            </FormOuter>
          </form>
        </LeftSide>

        <LoginRight />
      </PageWrap>
    </ThemeProvider>
  );
};

export default memo(Page);
