import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";

import {
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";

import { Controller } from "react-hook-form";

import { useNavigate } from "react-router-dom";

import {
  VisibilityOutlined,
  VisibilityOffOutlined,
  Check,
} from "@mui/icons-material";

import IconUser from "@/assets/icons/user.svg?react";
import IconChecBox from "@/assets/icons/icon-cheakbox-box.svg?react";
import IconChecBoxActive from "@/assets/icons/icon-cheakbox-active.svg?react";

import {
  AgreementWrap,
  BottomInlineText,
  BottomTextWrap,
  CenterArea,
  FieldBox,
  FieldWrap,
  FormBlock,
  NameRow,
  PasswordEyeButton,
  PasswordRuleDot,
  PasswordRuleItem,
  PasswordRulesWrap,
  PasswordRuleText,
  PasswordSection,
  PasswordStrengthBar,
  PasswordStrengthBars,
  PasswordStrengthText,
  PasswordStrengthTop,
  PasswordStrengthWrap,
  StyledTextField,
  SubmitButton,
  SubTitleWrap,
  TermsText,
  TitleWrap,
} from "@/pages/auth/register/styled";

const RegisterForm = ({
  t,
  control,
  handleSubmit,
  onSubmit,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword,
  passwordChecks,
  passwordStrength,
  registerLoading,
  errors,
}: any) => {
  const navigate = useNavigate();

  return (
    <CenterArea>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <FormBlock>
          <TitleWrap>
            <Typography vocab="loginTitle">{t("register_title")}</Typography>
          </TitleWrap>

          <SubTitleWrap>
            <Typography vocab="loginSubTitle">
              {t("register_subtitle")}
            </Typography>
          </SubTitleWrap>

          <NameRow>
            <FieldBox>
              <FieldWrap>
                <Typography vocab="noAccaunt">{t("first_name")}</Typography>
              </FieldWrap>

              <Controller
                name="first_name"
                control={control}
                render={({ field, fieldState }) => (
                  <StyledTextField
                    {...field}
                    fullWidth
                    error={fieldState.invalid}
                    placeholder={t("first_name_placeholder")}
                    helperText={
                      fieldState.error?.message
                        ? t(fieldState.error.message as string)
                        : ""
                    }
                  />
                )}
              />
            </FieldBox>

            <FieldBox>
              <FieldWrap>
                <Typography vocab="noAccaunt">{t("last_name")}</Typography>
              </FieldWrap>

              <Controller
                name="last_name"
                control={control}
                render={({ field, fieldState }) => (
                  <StyledTextField
                    {...field}
                    fullWidth
                    error={fieldState.invalid}
                    placeholder={t("last_name_placeholder")}
                    helperText={
                      fieldState.error?.message
                        ? t(fieldState.error.message as string)
                        : ""
                    }
                  />
                )}
              />
            </FieldBox>
          </NameRow>

          <FieldWrap>
            <Typography vocab="noAccaunt">{t("register_email")}</Typography>
          </FieldWrap>

          <Controller
            name="contact"
            control={control}
            render={({ field, fieldState }) => (
              <StyledTextField
                {...field}
                fullWidth
                error={fieldState.invalid}
                placeholder={t("register_email_placeholder")}
                helperText={
                  fieldState.error?.message
                    ? t(fieldState.error.message as string)
                    : ""
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
              <Typography vocab="noAccaunt">{t("password")}</Typography>
            </FieldWrap>

            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <StyledTextField
                  {...field}
                  fullWidth
                  error={fieldState.invalid}
                  type={showPassword ? "text" : "password"}
                  placeholder={t("create_password_placeholder")}
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
                              setShowPassword((prev: boolean) => !prev)
                            }
                          >
                            {showPassword ? (
                              <VisibilityOffOutlined
                                sx={{
                                  fontSize: 18,
                                }}
                              />
                            ) : (
                              <VisibilityOutlined
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

            <PasswordRulesWrap>
              {[
                {
                  active: passwordChecks.minLength,
                  text: t("password_rule_min_8"),
                },
                {
                  active: passwordChecks.hasNumber,
                  text: t("password_rule_number"),
                },
                {
                  active: passwordChecks.hasUppercase,
                  text: t("password_rule_uppercase"),
                },
                {
                  active: passwordChecks.hasSpecial,
                  text: t("password_rule_special"),
                },
              ].map((item) => (
                <PasswordRuleItem key={item.text}>
                  <PasswordRuleDot active={item.active}>
                    <Check
                      sx={{
                        fontSize: 8,
                        color: "#fff",
                      }}
                    />
                  </PasswordRuleDot>

                  <PasswordRuleText active={item.active}>
                    {item.text}
                  </PasswordRuleText>
                </PasswordRuleItem>
              ))}
            </PasswordRulesWrap>
          </PasswordSection>

          <FieldWrap>
            <Typography vocab="noAccaunt">{t("confirm_password")}</Typography>
          </FieldWrap>

          <Controller
            name="confirm_password"
            control={control}
            render={({ field, fieldState }) => (
              <StyledTextField
                {...field}
                fullWidth
                error={fieldState.invalid}
                type={showConfirmPassword ? "text" : "password"}
                placeholder={t("confirm_password_placeholder")}
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
                            setShowConfirmPassword((prev: boolean) => !prev)
                          }
                        >
                          {showConfirmPassword ? (
                            <VisibilityOffOutlined
                              sx={{
                                fontSize: 18,
                              }}
                            />
                          ) : (
                            <VisibilityOutlined
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

          <AgreementWrap>
            <FormControl error={!!errors.privacy}>
              <FormControlLabel
                label={
                  <Typography variant="body2">
                    {t("privacy_prefix")}{" "}
                    <TermsText to="https://robohub.uz/policy">
                      {t("privacy_link")}
                    </TermsText>{" "}
                    {t("privacy_suffix")}
                  </Typography>
                }
                control={
                  <Controller
                    name="privacy"
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        disableRipple
                        checked={field.value}
                        icon={<IconChecBox />}
                        checkedIcon={<IconChecBoxActive />}
                        sx={{
                          "& svg": {
                            width: 16.5,
                            height: 16.5,
                          },
                        }}
                      />
                    )}
                  />
                }
              />

              {errors.privacy && (
                <FormHelperText>{t("privacy_required")}</FormHelperText>
              )}
            </FormControl>
          </AgreementWrap>

          <SubmitButton
            type="submit"
            disabled={registerLoading}
            vocab="loginBtn"
          >
            {registerLoading ? (
              <CircularProgress
                size={20}
                sx={{
                  color: "#fff",
                }}
              />
            ) : (
              t("register_btn")
            )}
          </SubmitButton>

          <BottomTextWrap>
            <Typography vocab="loginBtm">{t("have_account")}</Typography>

            <BottomInlineText vocab="loginRgt" onClick={() => navigate("/")}>
              {t("login_now")}
            </BottomInlineText>
          </BottomTextWrap>
        </FormBlock>
      </Box>
    </CenterArea>
  );
};

export default RegisterForm;
