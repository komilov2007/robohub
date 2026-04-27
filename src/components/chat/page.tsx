import { memo } from "react";
import { ThemeProvider } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import IconPhone from "@/assets/icons/icon-chat-phone.svg?react";
import IconVideo from "@/assets/icons/icon-chat-video.svg?react";
import IconEmoji from "@/assets/icons/icon-emoji.svg?react";
import IconFile from "@/assets/icons/icon-chat-file.svg?react";
import {
  AttachFileOutlined,
  EmojiEmotionsOutlined,
  MoreHorizOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";

import IconSettings from "@/assets/icons/icon-settings.svg?react";
import IconUzum from "@/assets/icons/icon-uzum.svg?react";
import IconWb from "@/assets/icons/icon-wb.svg?react";
import IconOzon from "@/assets/icons/icon-ozon.svg?react";
import theme from "@/theme/theme";

import {
  ChatBody,
  ChatContent,
  ChatEmpty,
  ChatFooter,
  ChatHeader,
  ChatHeaderInfo,
  ChatHeaderLeft,
  ChatHeaderName,
  ChatHeaderRight,
  ChatLayout,
  ChatList,
  ChatListTabs,
  ChatPage,
  ChatSearchBox,
  ChatSidebar,
  ChatTab,
  ChatUserAvatar,
  ChatUserName,
  ChatUserRow,
  Header,
  HeaderLeft,
  HeaderTitle,
  MessageInput,
  MessageSendActions,
  PlatformSelect,
  SearchInput,
  SettingsButton,
  SidebarSearchWrap,
  TimeText,
  UnreadDot,
  UserMessagePreview,
  UserMessageRow,
  UserRow,
} from "./styled";

const chats = [
  {
    id: 1,
    name: "Abror Xoliqov",
    time: "10:13",
    message: "Lorem ipsum dolor sit amet sdf siapdk",
    icon: <IconUzum />,
    active: true,
    unread: true,
  },
  {
    id: 2,
    name: "Uchiha Sasuka",
    time: "10:00",
    message: "Lorem ipsum dolor sit amet sdf siapdk",
    icon: <IconWb />,
    active: false,
    unread: false,
  },
  {
    id: 3,
    name: "Uchiha Sasuka",
    time: "10:13",
    message: "Lorem ipsum dolor sit amet sdf siapdk",
    icon: <IconOzon />,
    active: false,
    unread: false,
  },
];

const Chat = () => {
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <ChatPage>
        <Header>
          <HeaderLeft>
            <HeaderTitle>{t("chat")}</HeaderTitle>

            <PlatformSelect defaultValue="all">
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

        <ChatLayout>
          <ChatSidebar>
            <ChatListTabs>
              <ChatTab active>{t("all")}</ChatTab>
              <ChatTab>{t("unread")}</ChatTab>
              <ChatTab>{t("read")}</ChatTab>
            </ChatListTabs>

            <SidebarSearchWrap>
              <ChatSearchBox>
                <SearchInput
                  placeholder={t("search_placeholder")}
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchOutlined sx={{ fontSize: 20, color: "#000000" }} />
                    </InputAdornment>
                  }
                />
              </ChatSearchBox>
            </SidebarSearchWrap>

            <ChatList>
              {chats.map((item) => (
                <UserRow key={item.id} active={item.active}>
                  <ChatUserRow>
                    <ChatUserName>
                      {item.name}
                      {item.icon}
                    </ChatUserName>

                    <TimeText>{item.time}</TimeText>
                  </ChatUserRow>

                  <UserMessageRow>
                    <UserMessagePreview>{item.message}</UserMessagePreview>
                    {item.unread ? <UnreadDot /> : null}
                  </UserMessageRow>
                </UserRow>
              ))}
            </ChatList>
          </ChatSidebar>

          <ChatContent>
            <ChatHeader>
              <ChatHeaderLeft>
                <ChatUserAvatar>AX</ChatUserAvatar>

                <ChatHeaderInfo>
                  <ChatHeaderName>Project Indomie</ChatHeaderName>
                </ChatHeaderInfo>
              </ChatHeaderLeft>

              <ChatHeaderRight>
                <IconPhone />
                <IconVideo />
                <MoreHorizOutlined />
              </ChatHeaderRight>
            </ChatHeader>

            <ChatBody>
              <ChatEmpty>{t("no_messages")}</ChatEmpty>
            </ChatBody>

            <ChatFooter>
              <MessageInput placeholder={t("write_here")} />

              <MessageSendActions>
                <IconEmoji />
                <IconFile />

                <Button vocab="shareBtn">{t("send")}</Button>
              </MessageSendActions>
            </ChatFooter>
          </ChatContent>
        </ChatLayout>
      </ChatPage>
    </ThemeProvider>
  );
};

export default memo(Chat);
