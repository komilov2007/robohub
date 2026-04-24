import { Box, InputBase, Select, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ChatPage = styled(Box)({
  width: "100%",
  minHeight: "100vh",
  background: "#FFFFFF",
});

export const Header = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  minHeight: "64px",
  borderBottom: "1px solid #E8E8E9",
  position: "relative",
  padding: "20px 24px",
});

export const HeaderLeft = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "100px",
});

export const HeaderTitle = styled(Typography)({
  fontWeight: 600,
  fontFamily: "Inter, sans-serif",
});

export const PlatformSelect = styled(Select)({
  height: "26px",
  background: "#F5F5F5",
  border: "0px solid #E4E4E4",
  borderRadius: "7px",
  fontSize: "13px",
  width: "153px",

  ".MuiOutlinedInput-notchedOutline": {
    border: "none",
  },

  ".MuiSelect-select": {
    padding: "2px 10px",
  },
});

export const SettingsButton = styled(Typography)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
  fontFamily: "Inter, sans-serif",
  fontWeight: 500,
  border: "1px solid #E4E4E4",
  borderRadius: "8px",
  width: "122px",
  height: "36px",
  gap: "5px",
  cursor: "pointer",
});

export const ChatLayout = styled(Box)({
  display: "flex",
});

export const ChatSidebar = styled(Box)({
  borderRight: "1px solid #E8E8E9",
  width: "312px",
  height: "91.5vh",
  flexShrink: 0,
});

export const ChatListTabs = styled(Box)({
  padding: "4px 24px",
  width: "312px",
  display: "flex",
});

export const ChatTab = styled(Typography)<{ active?: boolean }>(
  ({ active }) => ({
    height: "52px",
    fontWeight: 600,
    fontSize: "14px",
    fontFamily: "Inter, sans-serif",
    color: "#00524F",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px 8px",
    borderBottom: active ? "2px solid #00524F" : "none",
    cursor: "pointer",
  }),
);

export const SidebarSearchWrap = styled(Box)({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px 24px",
});

export const ChatSearchBox = styled(Box)({
  width: "264px",
});

export const SearchInput = styled(InputBase)({
  width: "264px",
  height: "40px",
  border: "1px solid #E8E8E9",
  borderRadius: "12px",
  padding: "10px",
  fontFamily: "Inter, sans-serif",
});

export const ChatList = styled(Box)({});

export const UserRow = styled(Box)<{ active?: boolean }>(({ active }) => ({
  width: "264px",
  height: "57px",
  background: active ? "#F3F4F4" : "transparent",
  borderRadius: "12px",
  padding: "8px 12px",
  margin: "4px 24px",
  cursor: "pointer",
}));

export const ChatUserRow = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const ChatUserName = styled(Typography)({
  display: "flex",
  alignItems: "center",
  gap: 8,
  fontSize: "14px",
  fontWeight: 500,
  fontFamily: "Inter, sans-serif",
});

export const TimeText = styled(Typography)({
  color: "#73757C",
  fontSize: "12px",
  fontFamily: "Inter, sans-serif",
});

export const UserMessageRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const UserMessagePreview = styled(Typography)({
  fontSize: "12px",
  fontWeight: 400,
  fontFamily: "Inter, sans-serif",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const UnreadDot = styled(Box)({
  width: "6px",
  height: "6px",
  background: "#FF4345",
  borderRadius: "50%",
  flexShrink: 0,
});

export const ChatContent = styled(Stack)({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
});

export const ChatHeader = styled(Box)({
  padding: "12px 24px",
  height: "72px",
  borderBottom: "1px solid #E8E8E9",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const ChatHeaderLeft = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontFamily: "Inter, sans-serif",
});

export const ChatUserAvatar = styled(Typography)({
  borderRadius: "50%",
  background: "#E1F1F1",
  width: "48px",
  height: "48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#00524F",
  fontFamily: "Inter, sans-serif",
  fontWeight: 600,
});

export const ChatHeaderInfo = styled(Box)({});

export const ChatHeaderName = styled(Typography)({
  fontFamily: "Inter, sans-serif",
  fontWeight: 500,
});

export const ChatHeaderRight = styled(Box)({
  display: "flex",
  gap: "10px",
});

export const ChatBody = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
});

export const ChatEmpty = styled(Typography)({
  fontSize: "14px",
  color: "#73757C",
  width: "120px",
  height: "30px",
  border: "1px solid #E8E8E9",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const ChatFooter = styled(Box)({
  display: "flex",
  width: "100%",
  height: "64px",
  borderTop: "1px solid #E8E8E9",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "24px",
});

export const MessageInput = styled(InputBase)({
  width: "708px",
  fontFamily: "Inter, sans-serif",
});

export const MessageSendActions = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});
