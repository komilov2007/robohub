import { Controller } from "react-hook-form";
import { Box, CircularProgress, Modal, ThemeProvider } from "@mui/material";
import IconFlagUz from "@/assets/icons/flag-uz.svg?react";
import IconFlagRu from "@/assets/icons/flag-ru.svg?react";
import IconFlagEn from "@/assets/icons/flag-en.svg?react";
import {
  CheckCircle,
  EditOutlined,
  LockOutlined,
  LogoutOutlined,
  PublicOutlined,
  RadioButtonUnchecked,
  VisibilityOutlined,
} from "@mui/icons-material";
import theme from "@/theme/theme";
import { usePage } from "./usePage";
import {
  ActionsRow,
  CancelButton,
  ContentCard,
  EyeButton,
  FieldBox,
  FieldLabel,
  FormGrid,
  LangRadio,
  LanguageItem,
  LanguageLeft,
  LanguageList,
  PageWrapper,
  PasswordInput,
  ProfileInput,
  ProfileInputPhone,
  RuleItem,
  RulesGrid,
  RuleText,
  SaveButton,
  Separator,
  StrengthBar,
  StrengthFill,
  StrengthRow,
  StrengthText,
  TabButton,
  TabsRow,
} from "./styled";
import { useTranslation } from "react-i18next";
import {
  LogoutButtons,
  LogoutCancelButton,
  LogoutConfirmButton,
  LogoutDescription,
  LogoutIconWrap,
  LogoutModalBox,
  LogoutTitle,
} from "../sidebar/styled";
const Profile = () => {
  const {
    t,
    activeTab,
    setActiveTab,
    logoutModal,
    profileForm,
    handleLogout,
    form,
    passwordRules,
    passwordStrength,
    passwordStrengthText,
    passwordStrengthColor,
    passwordVisible,
    confirmPasswordVisible,
    oldPasswordVisible,
    isProfileUpdating,
    handleUpdateProfile,
    isEditing,
    setIsEditing,
    handleChangeContact,
    isPhoneEditing,
    setIsPhoneEditing,
  } = usePage();
  const { i18n } = useTranslation();
  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <TabsRow>
          <TabButton
            active={activeTab === "profile"}
            onClick={() => setActiveTab("profile")}
          >
            <EditOutlined sx={{ fontSize: 18 }} />
            {t("edit_profile")}
          </TabButton>

          <Separator />

          <TabButton
            active={activeTab === "password"}
            onClick={() => setActiveTab("password")}
          >
            <LockOutlined sx={{ fontSize: 18 }} />
            {t("change_password")}
          </TabButton>

          <Separator />

          <TabButton
            active={activeTab === "language"}
            onClick={() => setActiveTab("language")}
          >
            <PublicOutlined sx={{ fontSize: 18 }} />
            {t("language")}
          </TabButton>

          <Separator />

          <TabButton onClick={logoutModal.setTrue}>
            <LogoutOutlined sx={{ fontSize: 18 }} />
            {t("logout")}
          </TabButton>
          <Modal
            open={logoutModal.value}
            onClose={logoutModal.setFalse}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LogoutModalBox>
              <LogoutIconWrap>
                <LogoutOutlined sx={{ color: "#D92D20", fontSize: 28 }} />
              </LogoutIconWrap>

              <LogoutTitle>{t("logout_modal_title")}</LogoutTitle>

              <LogoutDescription>
                {t("logout_modal_description")}
              </LogoutDescription>

              <LogoutButtons>
                <LogoutCancelButton fullWidth onClick={logoutModal.setFalse}>
                  {t("logout_cancel")}
                </LogoutCancelButton>

                <LogoutConfirmButton fullWidth onClick={handleLogout}>
                  {t("logout_confirm")}
                </LogoutConfirmButton>
              </LogoutButtons>
            </LogoutModalBox>
          </Modal>
        </TabsRow>

        {activeTab === "profile" && (
          <>
            <ContentCard>
              <Box
                sx={{
                  width: "646px",
                  marginTop: 2,
                  border: "1px solid #D8E2F0",
                  borderRadius: "8px",
                  padding: "18px 18px 20px",
                }}
              >
                {" "}
                <FormGrid>
                  <FieldBox>
                    <FieldLabel>{t("profile_first_name")}</FieldLabel>

                    <Controller
                      name="first_name"
                      disabled={!isEditing}
                      control={profileForm.control}
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
                  <Box sx={{ display: "flex", gap: "20px" }}>
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

                        setIsPhoneEditing((prev) => !prev);
                      }}
                    >
                      {isPhoneEditing
                        ? t("profile_submit")
                        : t("profile_change_email")}
                    </CancelButton>
                  </Box>
                </FieldBox>
              </Box>
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
                  <>
                    <Box sx={{ display: "flex", gap: "10px" }}>
                      {" "}
                      <CancelButton onClick={() => setIsEditing(false)}>
                        {t("profile_cancel")}
                      </CancelButton>
                      <SaveButton
                        onClick={() => {
                          handleUpdateProfile();
                          setIsEditing(false);
                        }}
                        disabled={isProfileUpdating}
                      >
                        {isProfileUpdating ? (
                          <>
                            <CircularProgress
                              size={16}
                              thickness={5}
                              sx={{ color: "#fff", mr: 1 }}
                            />
                            {t("loading_text")}
                          </>
                        ) : (
                          t("profile_submit")
                        )}
                      </SaveButton>
                    </Box>
                  </>
                )}
              </ActionsRow>{" "}
            </ContentCard>
          </>
        )}

        {activeTab === "language" && (
          <LanguageList>
            {[
              { value: "uz", label: "O‘zbekcha", icon: <IconFlagUz /> },
              { value: "ru", label: "Русский", icon: <IconFlagRu /> },
              { value: "en", label: "English", icon: <IconFlagEn /> },
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
        )}
        {activeTab === "password" && (
          <>
            <FieldBox sx={{ mt: "34px" }}>
              <FieldLabel>{t("password_current_label")}</FieldLabel>

              <PasswordInput
                fullWidth
                type={oldPasswordVisible.value ? "text" : "password"}
                placeholder={t("password_current_placeholder")}
                {...form.register("old_password")}
                slotProps={{
                  input: {
                    endAdornment: (
                      <EyeButton onClick={oldPasswordVisible.toggle}>
                        <VisibilityOutlined sx={{ fontSize: 18 }} />
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
                type={passwordVisible.value ? "text" : "password"}
                placeholder={t("password_new_placeholder")}
                {...form.register("new_password")}
                slotProps={{
                  input: {
                    endAdornment: (
                      <EyeButton onClick={passwordVisible.toggle}>
                        <VisibilityOutlined sx={{ fontSize: 18 }} />
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
              {passwordRules.map((item) => (
                <RuleItem key={item.text}>
                  {item.active ? (
                    <CheckCircle sx={{ fontSize: 18, color: "#006B64" }} />
                  ) : (
                    <RadioButtonUnchecked
                      sx={{ fontSize: 18, color: "#8A9BB8" }}
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
                type={confirmPasswordVisible.value ? "text" : "password"}
                placeholder={t("password_confirm_placeholder")}
                {...form.register("confirm_password")}
                slotProps={{
                  input: {
                    endAdornment: (
                      <EyeButton onClick={confirmPasswordVisible.toggle}>
                        <VisibilityOutlined sx={{ fontSize: 18 }} />
                      </EyeButton>
                    ),
                  },
                }}
              />
            </FieldBox>

            <ActionsRow>
              <CancelButton>{t("profile_cancel")}</CancelButton>

              <SaveButton
                onClick={handleUpdateProfile}
                disabled={isProfileUpdating}
              >
                {isProfileUpdating ? (
                  <>
                    <CircularProgress
                      size={16}
                      thickness={5}
                      sx={{ color: "#fff", mr: 1 }}
                    />
                    {t("loading_text")}
                  </>
                ) : (
                  t("profile_submit")
                )}
              </SaveButton>
            </ActionsRow>
          </>
        )}
      </PageWrapper>
    </ThemeProvider>
  );
};

export default Profile;
