import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import CircularProgress from "@mui/material/CircularProgress";

import { Controller } from "react-hook-form";

import {
  VisibilityOutlined,
  VisibilityOffOutlined,
  Check,
} from "@mui/icons-material";

import IconArrow from "@/assets/icons/icon-arrow.svg?react";

import { Arrow } from "@/pages/auth/otp-verificate/styled";

import {
  Confirm,
  ContentWrap,
  FieldWrap,
  FormOuter,
  PageDescription,
  PageTitle,
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
  SubmitWrap,
} from "@/pages/auth/reset-password/styled";

const ResetForm = ({
  t,
  control,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword,
  passwordChecks,
  passwordStrength,
  registerLoading,
  navigate,
}: any) => {
  return (
    <FormOuter>
      <ContentWrap>
        <PasswordSection>
          <Arrow onClick={() => navigate(-1)}>
            <IconArrow />
          </Arrow>

          <PageTitle>{t("reset_password_title")}</PageTitle>

          <PageDescription>{t("reset_password_description")}</PageDescription>

          <FieldWrap>
            <Typography vocab="noAccaunt">{t("password")}</Typography>
          </FieldWrap>

          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field, fieldState }) => (
              <StyledTextField
                {...field}
                fullWidth
                type={showPassword ? "text" : "password"}
                error={fieldState.invalid}
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

        <Confirm>
          <Controller
            name="confirm_password"
            control={control}
            defaultValue=""
            render={({ field, fieldState }) => (
              <StyledTextField
                {...field}
                fullWidth
                type={showConfirmPassword ? "text" : "password"}
                error={fieldState.invalid}
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
        </Confirm>

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
    </FormOuter>
  );
};

export default ResetForm;
