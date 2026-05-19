import MenuItem from "@mui/material/MenuItem";

import IconSettings from "@/assets/icons/icon-settings.svg?react";

import {
  Header,
  HeaderLeft,
  HeaderTitle,
  PlatformSelect,
  SettingsButton,
} from "@/pages/admin/chat/styled";

const ChatHeader = ({ t }: any) => {
  return (
    <Header>
      <HeaderLeft>
        <HeaderTitle>{t("chat")}</HeaderTitle>

        <PlatformSelect value="all">
          <MenuItem value="all">{t("all_platforms")}</MenuItem>

          <MenuItem value="ozon">Ozon</MenuItem>

          <MenuItem value="wildberries">Wildberries</MenuItem>

          <MenuItem value="uzum">Uzum Market</MenuItem>
        </PlatformSelect>
      </HeaderLeft>

      <SettingsButton>
        <IconSettings />
        {t("settings")}
      </SettingsButton>
    </Header>
  );
};

export default ChatHeader;
