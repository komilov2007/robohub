import EmptyChat from "./EmptyChat";

import {
  MessageBubble,
  MessageList,
  MessageText,
  MessageTime,
} from "@/pages/dashboard/chat/styled";

const MessageListSection = ({ messages, t }: any) => {
  if (!messages.length) {
    return <EmptyChat t={t} />;
  }

  return (
    <MessageList>
      {messages.map((message: any) => (
        <MessageBubble key={message.id} mine={message.sender === "me"}>
          <MessageText>{message.text}</MessageText>

          <MessageTime mine={message.sender === "me"}>
            {message.time}
          </MessageTime>
        </MessageBubble>
      ))}
    </MessageList>
  );
};

export default MessageListSection;
