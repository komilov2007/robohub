import {
  EditOutlined,
  LockOutlined,
  LogoutOutlined,
  PublicOutlined,
} from "@mui/icons-material";

import { Separator, TabButton, TabsRow } from "@/pages/auth/login/styled";

const ProfileTabs = ({ t, activeTab, setActiveTab, logoutModal }: any) => {
  return (
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
    </TabsRow>
  );
};

export default ProfileTabs;
