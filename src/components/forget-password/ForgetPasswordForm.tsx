import { Typography, InputAdornment, Box } from "@mui/material";

import { Controller } from "react-hook-form";

import { useNavigate } from "react-router-dom";

import IconUser from "@/assets/icons/user.svg?react";
import IconArrow from "@/assets/icons/icon-arrow.svg?react";

import IconFlagUz from "@/assets/icons/flag-uz.svg?react";
import IconFlagRu from "@/assets/icons/flag-ru.svg?react";
import IconFlagEn from "@/assets/icons/flag-en.svg?react";

import {
  BackButton,
  BottomInlineText,
  BottomTextWrap,
  CenterArea,
  FieldWrap,
  FormBlock,
  HeaderArea,
  LanguageSelect,
  LanguageSelectWrap,
  StyledMenuItem,
  StyledTextField,
  SubmitButton,
  SubTitleWrap,
  TitleWrap,
} from "@/pages/auth/forget-password/styled";

const languages = [
  { value: "uz", label: "O'zbekcha", Icon: IconFlagUz },
  { value: "ru", label: "Русский", Icon: IconFlagRu },
  { value: "en", label: "English", Icon: IconFlagEn },
];

const ForgetPasswordForm = ({
  control,
  handleSubmit,
  onSubmit,
  loading,
  t,
  i18n,
  handleLangChange,
}: any) => {
  const navigate = useNavigate();

  return (
    <>
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
        <FormBlock onSubmit={handleSubmit(onSubmit)}>
          <BackButton onClick={() => navigate(-1)}>
            <IconArrow />
          </BackButton>

          <TitleWrap>
            <Typography vocab="loginTitle">
              {t("forget_password_title")}
            </Typography>
          </TitleWrap>

          <SubTitleWrap>
            <Typography vocab="loginSubTitle">
              {t("forget_password_subtitle")}
            </Typography>
          </SubTitleWrap>

          <FieldWrap />

          <Box>
            <Typography sx={{ mb: 0.5 }} vocab="noAccaunt">
              {t("forget_password_email_label")}
            </Typography>

            <Controller
              name="contact"
              control={control}
              render={({ field, fieldState }) => (
                <StyledTextField
                  {...field}
                  fullWidth
                  autoComplete="current-email"
                  placeholder={t("login_placeholder")}
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

          <SubmitButton type="submit" disabled={loading}>
            {loading ? "Loading..." : t("forget_password_send_code")}
          </SubmitButton>

          <BottomTextWrap>
            <Typography vocab="loginBtm">
              {t("forget_password_remember_password")}
            </Typography>

            <BottomInlineText vocab="loginRgt" onClick={() => navigate("/")}>
              {t("forget_password_login")}
            </BottomInlineText>
          </BottomTextWrap>
        </FormBlock>
      </CenterArea>
    </>
  );
};

export default ForgetPasswordForm;
