import { ArrowBackRounded, MoreHorizOutlined } from "@mui/icons-material";

import IconPhone from "@/assets/icons/icon-chat-phone.svg?react";
import IconVideo from "@/assets/icons/icon-chat-video.svg?react";

import MessageListSection from "./MessageListSection";
import MessageInputSection from "./MessageInputSection";

import {
  ChatBody,
  ChatContent,
  ChatHeader,
  ChatHeaderInfo,
  ChatHeaderLeft,
  ChatHeaderName,
  ChatHeaderRight,
  ChatUserAvatar,
  MobileBackButton,
} from "@/pages/dashboard/chat/styled";

const ChatContentArea = ({
  selectedChat,
  selectedMessages,
  isChatOpen,
  handleBackToList,
  ...rest
}: any) => {
  return (
    <ChatContent open={isChatOpen}>
      <ChatHeader>
        <ChatHeaderLeft>
          <MobileBackButton onClick={handleBackToList}>
            <ArrowBackRounded />
          </MobileBackButton>

          <ChatUserAvatar>AX</ChatUserAvatar>

          <ChatHeaderInfo>
            <ChatHeaderName>{selectedChat.name}</ChatHeaderName>
          </ChatHeaderInfo>
        </ChatHeaderLeft>

        <ChatHeaderRight>
          <IconPhone />
          <IconVideo />
          <MoreHorizOutlined />
        </ChatHeaderRight>
      </ChatHeader>

      <ChatBody>
        <MessageListSection messages={selectedMessages} {...rest} />
      </ChatBody>

      <MessageInputSection {...rest} />
    </ChatContent>
  );
};

export default ChatContentArea;
