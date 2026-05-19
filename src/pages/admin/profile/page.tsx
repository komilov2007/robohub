import { ThemeProvider } from "@mui/material";

import theme from "@/theme/theme";

import { usePage } from "./usePage";

import { PageWrapper } from "@/pages/admin/profile/styled";
import ProfileTabs from "@/components/profile/ProfileTabs";
import ProfileContent from "@/components/profile/ProfileContent";
import LogoutModal from "@/components/profile/LogoutModal";

const Profile = () => {
  const data = usePage();

  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <ProfileTabs {...data} />

        <ProfileContent {...data} />

        <LogoutModal {...data} />
      </PageWrapper>
    </ThemeProvider>
  );
};

export default Profile;
