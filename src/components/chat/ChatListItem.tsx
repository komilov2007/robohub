import {
  ChatUserName,
  ChatUserRow,
  TimeText,
  UnreadDot,
  UserMessagePreview,
  UserMessageRow,
  UserRow,
} from "@/pages/dashboard/chat/styled";

const ChatListItem = ({ item, active, onClick }: any) => {
  return (
    <UserRow active={active} onClick={onClick}>
      <ChatUserRow>
        <ChatUserName>
          {item.name}
          {item.icon}
        </ChatUserName>

        <TimeText>{item.time}</TimeText>
      </ChatUserRow>

      <UserMessageRow>
        <UserMessagePreview>{item.message}</UserMessagePreview>

        {item.unread && <UnreadDot />}
      </UserMessageRow>
    </UserRow>
  );
};

export default ChatListItem;
