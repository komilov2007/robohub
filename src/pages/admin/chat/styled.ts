import {
  Box,
  IconButton,
  InputBase,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

type MobileViewProps = {
  open?: boolean;
};

export const ChatPage = styled(Box)({
  width: "100%",
  minHeight: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  background: "#FFFFFF",
  overflow: "hidden",

  "@media (max-width: 768px)": {
    height: "100dvh",
  },
});
export const EmojiPickerWrap = styled(Box)({
  position: "absolute",
  bottom: "80px",
  right: "24px",

  backgroundColor: "#fff",

  border: "1px solid #E8E8E9",
  borderRadius: "12px",

  padding: "12px",

  width: "350px",
  height: "300px",

  display: "flex",
  flexDirection: "column",

  zIndex: 1000,

  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",

  "@media (max-width: 768px)": {
    right: "12px",
    bottom: "72px",
    width: "280px",
    height: "260px",
  },
});

export const EmojiItem = styled(Box)({
  cursor: "pointer",

  fontSize: "20px",

  padding: "4px",

  borderRadius: "4px",

  transition: "background 0.2s ease",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
});
export const Header = styled(Box)({
  position: "sticky",
  top: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  maxHeight: "56px",
  borderBottom: "1px solid #E8E8E9",
  padding: "20px 24px",
  marginLeft: "10px",
  boxSizing: "border-box",
  background: "#FFFFFF",

  "@media (max-width: 768px)": {
    minHeight: "56px",
    marginLeft: 0,
    padding: "0px 14px 0px 46px",
    justifyContent: "space-between",
  },
});

export const HeaderLeft = styled(Box)({
  display: "flex",
  gap: "42px",

  "@media (max-width: 900px)": {
    gap: "24px",
  },

  "@media (max-width: 520px)": {
    gap: "10px",
    display: "flex",
  },
});

export const HeaderTitle = styled(Typography)({
  fontWeight: 600,
  fontFamily: "Inter, sans-serif",
  marginLeft: "30px",

  "@media (max-width: 768px)": {
    marginLeft: 0,
  },
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

  "@media (max-width: 520px)": {
    width: "132px",
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

  "@media (max-width: 520px)": {
    width: "36px",
    minWidth: "36px",
    fontSize: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& svg": {
      width: 15,
      height: 20,
    },
  },
});

export const ChatLayout = styled(Box)(() => ({
  display: "flex",
  height: "100%",
  minHeight: 0,
  overflow: "hidden",
  position: "relative",
}));
export const ChatSidebar = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})<MobileViewProps>(({ open }) => ({
  borderRight: "1px solid #E8E8E9",
  width: 315,
  flexShrink: 0,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  minHeight: 0,

  "@media (max-width: 768px)": {
    display: open ? "none" : "flex",
    width: "100%",
    borderRight: 0,
    pointerEvents: open ? "none" : "auto",
  },
}));
export const ChatContent = styled(Stack, {
  shouldForwardProp: (prop) => prop !== "open",
})<MobileViewProps>(({ open }) => ({
  flex: 1,

  display: "flex",
  flexDirection: "column",

  minWidth: 0,
  minHeight: 0,

  overflow: "hidden",

  "@media (max-width: 768px)": {
    position: open ? "relative" : "absolute",
    inset: 0,

    display: open ? "flex" : "none",

    background: "#fff",

    zIndex: 2,
  },
}));
export const ChatListTabs = styled(Box)({
  padding: "4px 24px",
  width: "312px",
  display: "flex",
  boxSizing: "border-box",
  overflowX: "auto",
  scrollbarWidth: "none",

  "&::-webkit-scrollbar": {
    display: "none",
  },

  "@media (max-width: 768px)": {
    width: "100%",
    padding: "4px 16px",
  },
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
    whiteSpace: "nowrap",
    flexShrink: 0,
  }),
);

export const SidebarSearchWrap = styled(Box)({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px 24px",
  boxSizing: "border-box",

  "@media (max-width: 768px)": {
    padding: "12px 16px",
  },
});

export const ChatSearchBox = styled(Box)({
  width: "264px",
  maxWidth: "100%",

  "@media (max-width: 768px)": {
    width: "100%",
  },
});

export const SearchInput = styled(InputBase)({
  width: "264px",
  maxWidth: "100%",
  height: "40px",
  border: "1px solid #E8E8E9",
  borderRadius: "12px",
  padding: "10px",
  fontFamily: "Inter, sans-serif",

  "@media (max-width: 768px)": {
    width: "100%",
  },
});

export const ChatList = styled(Box)({
  flex: 1,
  minHeight: 0,
  overflowY: "auto",

  "@media (max-width: 768px)": {
    paddingBottom: "10px",
  },
});

export const UserRow = styled(Box)<{ active?: boolean }>(({ active }) => ({
  width: "264px",
  maxWidth: "100%",
  height: "57px",
  background: active ? "#F3F4F4" : "transparent",
  borderRadius: "12px",
  padding: "8px 12px",
  margin: "4px 24px",
  cursor: "pointer",
  boxSizing: "border-box",

  "@media (max-width: 768px)": {
    width: "calc(100% - 32px)",
    height: "62px",
    margin: "6px 16px",
  },
}));

export const ChatUserRow = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  minWidth: 0,
});

export const ChatUserName = styled(Typography)({
  display: "flex",
  alignItems: "center",
  gap: 8,
  fontSize: "14px",
  fontWeight: 500,
  fontFamily: "Inter, sans-serif",
  minWidth: 0,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const TimeText = styled(Typography)({
  color: "#73757C",
  fontSize: "12px",
  fontFamily: "Inter, sans-serif",
  flexShrink: 0,
});

export const UserMessageRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  minWidth: 0,
});

export const UserMessagePreview = styled(Typography)({
  fontSize: "12px",
  fontWeight: 400,
  fontFamily: "Inter, sans-serif",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  minWidth: 0,
});

export const UnreadDot = styled(Box)({
  width: "6px",
  height: "6px",
  background: "#FF4345",
  borderRadius: "50%",
  flexShrink: 0,
});

export const ChatHeader = styled(Box)({
  padding: "12px 24px",
  height: "72px",
  borderBottom: "1px solid #E8E8E9",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  boxSizing: "border-box",
  gap: "12px",

  "@media (max-width: 768px)": {
    height: "58px",
    padding: "8px 14px",
    gap: "10px",
  },
});

export const ChatHeaderLeft = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontFamily: "Inter, sans-serif",
  minWidth: 0,
  pointerEvents: "auto",

  "@media (max-width: 768px)": {
    flex: 1,
    overflow: "hidden",
  },
});

export const MobileBackButton = styled(IconButton)({
  display: "none",
  width: "34px",
  height: "34px",
  flexShrink: 0,
  position: "relative",
  zIndex: 5,
  marginLeft: "-6px",

  "@media (max-width: 768px)": {
    display: "inline-flex",
  },
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
  flexShrink: 0,

  "@media (max-width: 768px)": {
    width: "38px",
    height: "38px",
    fontSize: "14px",
  },
});

export const ChatHeaderInfo = styled(Box)({
  minWidth: 0,
});

export const ChatHeaderName = styled(Typography)({
  fontFamily: "Inter, sans-serif",
  fontWeight: 500,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const ChatHeaderRight = styled(Box)({
  display: "flex",
  gap: "10px",
  flexShrink: 0,

  "@media (max-width: 520px)": {
    gap: "8px",

    "& svg": {
      width: 20,
      height: 20,
    },
  },
});

export const ChatBody = styled(Box)({
  display: "flex",
  alignItems: "stretch",
  justifyContent: "flex-start",
  flexDirection: "column",
  flex: 1,
  minHeight: 0,
  padding: "18px",
  gap: "10px",
  boxSizing: "border-box",
  background: "#FAFBFC",
  overflowY: "auto",

  "@media (max-width: 768px)": {
    padding: "14px 12px",
  },
});

export const MessageList = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  gap: "10px",
  flex: 1,
  minHeight: "100%",
});

export const MessageBubble = styled(Box)<{ mine?: boolean }>(({ mine }) => ({
  maxWidth: "min(560px, 76%)",
  alignSelf: mine ? "flex-end" : "flex-start",
  background: mine ? "#00524F" : "#FFFFFF",
  color: mine ? "#FFFFFF" : "#101828",
  border: mine ? "1px solid #00524F" : "1px solid #E8E8E9",
  borderRadius: mine ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
  padding: "9px 12px",
  overflowWrap: "anywhere",

  "@media (max-width: 520px)": {
    maxWidth: "86%",
  },
}));

export const MessageText = styled(Typography)({
  fontSize: "14px",
  lineHeight: "20px",
  fontFamily: "Inter, sans-serif",
});

export const MessageTime = styled(Typography)<{ mine?: boolean }>(
  ({ mine }) => ({
    marginTop: "4px",
    fontSize: "11px",
    lineHeight: "14px",
    color: mine ? "rgba(255, 255, 255, 0.7)" : "#73757C",
    textAlign: "right",
    fontFamily: "Inter, sans-serif",
  }),
);

export const ChatEmpty = styled(Typography)({
  margin: "auto",
  fontSize: "14px",
  color: "#73757C",
  width: "120px",
  height: "30px",
  border: "1px solid #E8E8E9",
  borderRadius: "8px",
  background: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const ChatFooter = styled(Box)({
  display: "flex",
  width: "100%",

  height: "64px",

  flexShrink: 0,

  borderTop: "1px solid #E8E8E9",

  alignItems: "center",
  justifyContent: "space-between",

  padding: "24px",

  boxSizing: "border-box",

  gap: "12px",

  "@media (max-width: 768px)": {
    height: "58px",
    padding: "10px 12px",
  },
});

export const MessageInput = styled(InputBase)({
  width: "min(708px, 100%)",
  minWidth: 0,
  flex: 1,
  height: "40px",
  border: "1px solid #E8E8E9",
  borderRadius: "12px",
  padding: "0 12px",
  fontFamily: "Inter, sans-serif",
});

export const MessageSendActions = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  flexShrink: 0,
  position: "relative",

  "@media (max-width: 520px)": {
    "& button": {
      minWidth: "64px",
      height: "36px",
      padding: "0 12px",
    },
  },
});
export const EmojiGrid = styled(Box)({
  flex: 1,

  display: "grid",
  gridTemplateColumns: "repeat(8, 1fr)",

  gap: "4px",

  overflowY: "auto",

  alignContent: "start",

  "@media (max-width: 768px)": {
    gridTemplateColumns: "repeat(6, 1fr)",
  },
});
export const EmojiPickerContainer = styled(Box)({
  position: "absolute",
  bottom: "80px",
  right: "24px",
  backgroundColor: "#fff",
  border: "1px solid #E8E8E9",
  borderRadius: "12px",
  padding: "12px",
  display: "grid",
  gridTemplateColumns: "repeat(6, 3fr)",
  gap: "4px",
  zIndex: 1000,
  maxHeight: "300px",
  overflowY: "auto",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
});
export const EmojiPickerHeader = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  marginBottom: "8px",
});

export const EmojiPickerTitle = styled(Typography)({
  fontSize: "14px",
  fontWeight: 600,
  fontFamily: "Inter, sans-serif",
  color: "#101828",
});

export const EmojiCloseButton = styled(IconButton)({
  width: 28,
  height: 28,

  "& svg": {
    fontSize: 18,
  },
});
