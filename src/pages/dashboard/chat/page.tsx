import { memo } from "react";

import { ThemeProvider } from "@mui/material";

import theme from "@/theme/theme";

import { usePage } from "./usePage";

import { ChatLayout, ChatPage } from "./styled";
import ChatSidebarComponent from "@/components/chat/ChatSidebar";
import ChatContentArea from "@/components/chat/ChatContentArea";
import ChatHeader from "@/components/chat/ChatHeader";

const Chat = () => {
  const data = usePage();

  return (
    <ThemeProvider theme={theme}>
      <ChatPage>
        <ChatHeader {...data} />

        <ChatLayout>
          <ChatSidebarComponent {...data} />

          <ChatContentArea {...data} />
        </ChatLayout>
      </ChatPage>
    </ThemeProvider>
  );
};

export default memo(Chat);
