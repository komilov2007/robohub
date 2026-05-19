import InputAdornment from "@mui/material/InputAdornment";

import { SearchOutlined } from "@mui/icons-material";

import ChatListItem from "./ChatListItem";

import {
  ChatList,
  ChatListTabs,
  ChatSearchBox,
  ChatSidebar,
  ChatTab,
  SearchInput,
  SidebarSearchWrap,
} from "@/pages/admin/chat/styled";

const ChatSidebarComponent = ({
  chats,
  selectedChatId,
  handleSelectChat,
  isChatOpen,
  t,
}: any) => {
  return (
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
                    color: "#000",
                  }}
                />
              </InputAdornment>
            }
          />
        </ChatSearchBox>
      </SidebarSearchWrap>

      <ChatList>
        {chats.map((item: any) => (
          <ChatListItem
            key={item.id}
            item={item}
            active={selectedChatId === item.id}
            onClick={() => handleSelectChat(item.id)}
          />
        ))}
      </ChatList>
    </ChatSidebar>
  );
};

export default ChatSidebarComponent;
