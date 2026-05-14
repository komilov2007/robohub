import { memo } from "react";
import { ThemeProvider } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import IconPhone from "@/assets/icons/icon-chat-phone.svg?react";
import IconVideo from "@/assets/icons/icon-chat-video.svg?react";
import IconEmoji from "@/assets/icons/icon-emoji.svg?react";
import IconFile from "@/assets/icons/icon-chat-file.svg?react";
import {
  ArrowBackRounded,
  CloseRounded,
  MoreHorizOutlined,
  SearchOutlined,
  Send as SendIcon,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";

import IconSettings from "@/assets/icons/icon-settings.svg?react";
import theme from "@/theme/theme";
import { usePage } from "./usePage";

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
  EmojiCloseButton,
  EmojiGrid,
  EmojiItem,
  EmojiPickerHeader,
  EmojiPickerTitle,
  EmojiPickerWrap,
  Header,
  HeaderLeft,
  HeaderTitle,
  MessageBubble,
  MessageInput,
  MessageList,
  MessageSendActions,
  MessageText,
  MessageTime,
  MobileBackButton,
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

const Chat = () => {
  const { t } = useTranslation();

  const {
    chats,
    selectedChat,
    selectedChatId,
    isChatOpen,
    selectedMessages,
    messageText,
    setMessageText,
    handleSelectChat,
    handleBackToList,
    handleSendMessage,
    handleMessageKeyDown,
    showEmojiPicker,
    setShowEmojiPicker,
    handleEmojiClick,
    handleFileClick,
    handleFileSelect,
    fileInputRef,
  } = usePage();

  return (
    <ThemeProvider theme={theme}>
      <ChatPage>
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

        <ChatLayout>
          <ChatSidebar open={isChatOpen}>
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
                      <SearchOutlined
                        sx={{
                          fontSize: 20,
                          color: "#000000",
                        }}
                      />
                    </InputAdornment>
                  }
                />
              </ChatSearchBox>
            </SidebarSearchWrap>

            <ChatList>
              {chats.map((item) => (
                <UserRow
                  key={item.id}
                  active={selectedChatId === item.id}
                  onClick={() => handleSelectChat(item.id)}
                >
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

          <ChatContent open={isChatOpen}>
            <ChatHeader>
              <ChatHeaderLeft>
                {" "}
                <MobileBackButton onClick={handleBackToList}>
                  <ArrowBackRounded sx={{ fontSize: 20 }} />
                </MobileBackButton>
                <ChatUserAvatar>AX</ChatUserAvatar>{" "}
                <ChatHeaderInfo>
                  <ChatHeaderName>{selectedChat.name}</ChatHeaderName>
                </ChatHeaderInfo>
              </ChatHeaderLeft>

              <ChatHeaderRight>
                {" "}
                <IconPhone />
                <IconVideo />
                <MoreHorizOutlined />{" "}
              </ChatHeaderRight>
            </ChatHeader>

            <ChatBody>
              {selectedMessages.length ? (
                <MessageList>
                  {selectedMessages.map((message) => (
                    <MessageBubble
                      key={message.id}
                      mine={message.sender === "me"}
                    >
                      {message.file && (
                        <div
                          style={{
                            marginBottom: "8px",
                            maxWidth: "300px",
                          }}
                        >
                          {message.file.type.startsWith("image/") ? (
                            <img
                              src={message.file.url}
                              alt={message.file.name}
                              style={{
                                maxWidth: "100%",
                                borderRadius: "8px",
                              }}
                            />
                          ) : message.file.type.startsWith("video/") ? (
                            <video
                              src={message.file.url}
                              controls
                              style={{
                                maxWidth: "100%",
                                borderRadius: "8px",
                              }}
                            />
                          ) : (
                            <a
                              href={message.file.url}
                              download={message.file.name}
                              style={{
                                color: "inherit",
                                textDecoration: "underline",
                              }}
                            >
                              📎 {message.file.name}
                            </a>
                          )}
                        </div>
                      )}
                      <MessageText>{message.text}</MessageText>

                      <MessageTime mine={message.sender === "me"}>
                        {message.time}
                      </MessageTime>
                    </MessageBubble>
                  ))}
                </MessageList>
              ) : (
                <ChatEmpty>{t("no_messages")}</ChatEmpty>
              )}
            </ChatBody>

            <ChatFooter>
              <MessageInput
                value={messageText}
                onChange={(event) => setMessageText(event.target.value)}
                onKeyDown={handleMessageKeyDown}
                placeholder={t("write_here")}
              />

              <MessageSendActions>
                <div
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                  style={{ cursor: "pointer" }}
                >
                  <IconEmoji />
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  hidden
                  onChange={handleFileSelect}
                  accept="image/*,video/*,.pdf,.doc,.docx"
                />
                <div onClick={handleFileClick} style={{ cursor: "pointer" }}>
                  <IconFile />
                </div>

                <SendIcon
                  onClick={handleSendMessage}
                  sx={{
                    fontSize: 20,
                    cursor: "pointer",
                    color: messageText.trim() ? "#00524F" : "#808080",
                  }}
                />

                {showEmojiPicker && (
                  <EmojiPickerWrap>
                    <EmojiPickerHeader>
                      <EmojiPickerTitle>Emoji</EmojiPickerTitle>

                      <EmojiCloseButton
                        onClick={() => setShowEmojiPicker(false)}
                      >
                        <CloseRounded />
                      </EmojiCloseButton>
                    </EmojiPickerHeader>

                    <EmojiGrid>
                      {[
                        "😀",
                        "😃",
                        "😄",
                        "😁",
                        "😆",
                        "😅",
                        "🤣",
                        "😂",
                        "😊",
                        "😇",
                        "🙂",
                        "🙃",
                        "😉",
                        "😌",
                        "😍",
                        "🥰",
                        "😘",
                        "😗",
                        "😚",
                        "😙",
                        "🥲",
                        "😋",
                        "😛",
                        "😜",
                        "🤪",
                        "😝",
                        "😑",
                        "😐",
                        "😶",
                        "😏",
                        "😒",
                        "🙄",
                        "😬",
                        "🤥",
                        "😌",
                        "😔",
                        "😪",
                        "🤤",
                        "😴",
                        "😷",
                        "🤒",
                        "🤕",
                        "🤢",
                        "🤮",
                        "🤧",
                        "🤨",
                        "🎉",
                        "🎊",
                        "🎈",
                        "🎀",
                        "🎁",
                        "🏆",
                        "🥇",
                        "🥈",
                        "❤️",
                        "🧡",
                        "💛",
                        "💚",
                        "💙",
                        "💜",
                        "🖤",
                        "🤍",
                      ].map((emoji) => (
                        <EmojiItem
                          key={emoji}
                          onClick={() => {
                            handleEmojiClick(emoji);
                            setShowEmojiPicker(false);
                          }}
                        >
                          {emoji}
                        </EmojiItem>
                      ))}
                    </EmojiGrid>
                  </EmojiPickerWrap>
                )}
              </MessageSendActions>
            </ChatFooter>
          </ChatContent>
        </ChatLayout>
      </ChatPage>
    </ThemeProvider>
  );
};

export default memo(Chat);
