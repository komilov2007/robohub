import { Controller } from "react-hook-form";

import { Box, CircularProgress } from "@mui/material";

import {
  CheckCircle,
  RadioButtonUnchecked,
  VisibilityOutlined,
} from "@mui/icons-material";

import IconFlagUz from "@/assets/icons/flag-uz.svg?react";
import IconFlagRu from "@/assets/icons/flag-ru.svg?react";
import IconFlagEn from "@/assets/icons/flag-en.svg?react";

import { useTranslation } from "react-i18next";

import {
  ActionsRow,
  CancelButton,
  ContactRow,
  ContentCard,
  EyeButton,
  FieldBox,
  FieldLabel,
  FormGrid,
  LangRadio,
  LanguageItem,
  LanguageLeft,
  LanguageList,
  PasswordInput,
  ProfileInput,
  ProfileInputPhone,
  ProfilePanel,
  RuleItem,
  RulesGrid,
  RuleText,
  SaveButton,
  StrengthBar,
  StrengthFill,
  StrengthRow,
  StrengthText,
} from "@/pages/auth/login/styled";

const ProfileContent = ({
  t,
  activeTab,
  profileForm,
  isEditing,
  setIsEditing,
  isPhoneEditing,
  setIsPhoneEditing,
  handleChangeContact,
  handleUpdateProfile,
  isProfileUpdating,
  form,
  passwordVisible,
  confirmPasswordVisible,
  oldPasswordVisible,
  passwordStrength,
  passwordStrengthColor,
  passwordStrengthText,
  passwordRules,
  handleSubmit,
  isLoading,
}: any) => {
  const { i18n } = useTranslation();

  if (activeTab === "language") {
    return (
      <LanguageList>
        {[
          {
            value: "uz",
            label: "O‘zbekcha",
            icon: <IconFlagUz />,
          },
          {
            value: "ru",
            label: "Русский",
            icon: <IconFlagRu />,
          },
          {
            value: "en",
            label: "English",
            icon: <IconFlagEn />,
          },
        ].map((item) => (
          <LanguageItem
            key={item.value}
            onClick={() => {
              i18n.changeLanguage(item.value);

              localStorage.setItem("lang", item.value);

              localStorage.setItem("i18nextLng", item.value);
            }}
          >
            <LanguageLeft>
              {item.icon}

              <span>{item.label}</span>
            </LanguageLeft>

            <LangRadio checked={i18n.language === item.value} />
          </LanguageItem>
        ))}
      </LanguageList>
    );
  }

  if (activeTab === "password") {
    return (
      <>
        <FieldBox sx={{ mt: "34px" }}>
          <FieldLabel>{t("password_current_label")}</FieldLabel>

          <PasswordInput
            fullWidth
            {...form.register("old_password")}
            type={oldPasswordVisible.value ? "text" : "password"}
            placeholder={t("password_current_placeholder")}
            slotProps={{
              input: {
                endAdornment: (
                  <EyeButton onClick={oldPasswordVisible.toggle}>
                    <VisibilityOutlined
                      sx={{
                        fontSize: 18,
                      }}
                    />
                  </EyeButton>
                ),
              },
            }}
          />
        </FieldBox>

        <FieldBox sx={{ mt: "28px" }}>
          <FieldLabel>{t("password_new_label")}</FieldLabel>

          <PasswordInput
            fullWidth
            {...form.register("new_password")}
            type={passwordVisible.value ? "text" : "password"}
            placeholder={t("password_new_placeholder")}
            slotProps={{
              input: {
                endAdornment: (
                  <EyeButton onClick={passwordVisible.toggle}>
                    <VisibilityOutlined
                      sx={{
                        fontSize: 18,
                      }}
                    />
                  </EyeButton>
                ),
              },
            }}
          />
        </FieldBox>

        <StrengthRow>
          <StrengthBar>
            <StrengthFill
              value={passwordStrength}
              strengthcolor={passwordStrengthColor}
            />
          </StrengthBar>

          <StrengthText strengthcolor={passwordStrengthColor}>
            {passwordStrengthText}
          </StrengthText>
        </StrengthRow>

        <RulesGrid>
          {passwordRules.map((item: any) => (
            <RuleItem key={item.text}>
              {item.active ? (
                <CheckCircle
                  sx={{
                    fontSize: 18,
                    color: "#006B64",
                  }}
                />
              ) : (
                <RadioButtonUnchecked
                  sx={{
                    fontSize: 18,
                    color: "#8A9BB8",
                  }}
                />
              )}

              <RuleText>{item.text}</RuleText>
            </RuleItem>
          ))}
        </RulesGrid>

        <FieldBox sx={{ mt: "30px" }}>
          <FieldLabel>{t("password_confirm_label")}</FieldLabel>

          <PasswordInput
            fullWidth
            {...form.register("confirm_password")}
            type={confirmPasswordVisible.value ? "text" : "password"}
            placeholder={t("password_confirm_placeholder")}
            slotProps={{
              input: {
                endAdornment: (
                  <EyeButton onClick={confirmPasswordVisible.toggle}>
                    <VisibilityOutlined
                      sx={{
                        fontSize: 18,
                      }}
                    />
                  </EyeButton>
                ),
              },
            }}
          />
        </FieldBox>

        <ActionsRow>
          <CancelButton>{t("profile_cancel")}</CancelButton>

          <SaveButton disabled={isLoading} onClick={handleSubmit}>
            {isLoading ? (
              <>
                <CircularProgress
                  size={16}
                  thickness={5}
                  sx={{
                    color: "#fff",
                    mr: 1,
                  }}
                />

                {t("loading_text")}
              </>
            ) : (
              t("profile_submit")
            )}
          </SaveButton>
        </ActionsRow>
      </>
    );
  }

  return (
    <ContentCard>
      <ProfilePanel>
        <FormGrid>
          <FieldBox>
            <FieldLabel>{t("profile_first_name")}</FieldLabel>

            <Controller
              name="first_name"
              control={profileForm.control}
              disabled={!isEditing}
              render={({ field }) => (
                <ProfileInput {...field} placeholder="Sarvar" />
              )}
            />
          </FieldBox>

          <FieldBox>
            <FieldLabel>{t("profile_last_name")}</FieldLabel>

            <Controller
              name="last_name"
              control={profileForm.control}
              disabled={!isEditing}
              render={({ field }) => (
                <ProfileInput {...field} placeholder="Erkinjonov" />
              )}
            />
          </FieldBox>
        </FormGrid>

        <FieldBox>
          <FieldLabel>{t("profile_email")}</FieldLabel>

          <ContactRow>
            <Controller
              name="phone"
              control={profileForm.control}
              render={({ field }) => (
                <ProfileInputPhone
                  {...field}
                  disabled={!isPhoneEditing}
                  placeholder="+998 90 123 45 67"
                />
              )}
            />

            <CancelButton
              onClick={() => {
                if (isPhoneEditing) {
                  handleChangeContact();
                }

                setIsPhoneEditing((prev: boolean) => !prev);
              }}
            >
              {isPhoneEditing ? t("profile_submit") : t("profile_change_email")}
            </CancelButton>
          </ContactRow>
        </FieldBox>
      </ProfilePanel>

      <ActionsRow>
        {!isEditing ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <SaveButton onClick={() => setIsEditing(true)}>
              {t("edit_profile")}
            </SaveButton>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              gap: "10px",
            }}
          >
            <CancelButton onClick={() => setIsEditing(false)}>
              {t("profile_cancel")}
            </CancelButton>

            <SaveButton
              disabled={isProfileUpdating}
              onClick={handleUpdateProfile}
            >
              {isProfileUpdating ? (
                <>
                  <CircularProgress
                    size={16}
                    thickness={5}
                    sx={{
                      color: "#fff",
                      mr: 1,
                    }}
                  />

                  {t("loading_text")}
                </>
              ) : (
                t("profile_submit")
              )}
            </SaveButton>
          </Box>
        )}
      </ActionsRow>
    </ContentCard>
  );
};

export default ProfileContent;
