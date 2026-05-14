import { Box, Button, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

type ActiveProps = { active?: boolean };
type CollapsedProps = { collapsed?: boolean };
type DisableCursorProps = {
  disablecursor?: boolean;
};

type FirstItemProps = {
  firstitem?: boolean;
};
export const SidebarWrap = styled(Box, {
  shouldForwardProp: (prop) => prop !== "collapsed",
})<CollapsedProps>(({ collapsed }) => ({
  top: 0,
  left: -1,

  position: "relative",
  zIndex: 1300,

  width: collapsed ? 56 : 262,
  minWidth: collapsed ? 56 : 262,
  maxWidth: collapsed ? 56 : 262,

  height: "100vh",
  maxHeight: "100vh",

  background: collapsed ? "transparent" : "#00524F",

  overflowX: "visible",
  overflowY: "hidden",

  display: "flex",
  flexDirection: "column",

  padding: 10,
  boxSizing: "border-box",

  transition: "width 0.3s ease, background 0.3s ease",

  "@media (max-width: 768px)": {
    width: collapsed ? 56 : 262,
    minWidth: collapsed ? 56 : 262,
    maxWidth: collapsed ? 56 : 262,

    height: "100dvh",
    maxHeight: "100dvh",

    overflowY: "auto",
    overflowX: "hidden",

    WebkitOverflowScrolling: "touch",

    pointerEvents: "none",
  },
}));
export const TopBlock = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1; /* 🔥 joyni egallaydi */
  min-height: 0; /* 🔥 overflow bug fix */
`;
export const TopArea = styled(Box)<CollapsedProps>(({ collapsed }) => ({
  position: "relative",
  overflow: "visible",

  marginTop: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: collapsed ? "flex-start" : "space-between",
  marginBottom: 24,
  width: "100%",
}));
export const BrandWrap = styled(Link, {
  shouldForwardProp: (prop) => prop !== "collapsed",
})<CollapsedProps>(({ collapsed }) => ({
  display: "flex",
  alignItems: "center",
  minWidth: 1,
  padding: 10,
  justifyContent: collapsed ? "center" : "flex-start",
  width: collapsed ? "100%" : "150px",

  "& svg": {
    width: 172,
    height: "auto",
  },

  "@media (max-height: 760px)": {
    padding: 6,

    "& svg": {
      width: 132,
    },
  },
}));
export const ToggleButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "collapsed",
})<CollapsedProps>(({ collapsed }) => ({
  position: "absolute",

  top: collapsed ? -10 : 3,
  right: collapsed ? "auto" : 0,
  left: collapsed ? -5 : "auto",
  background: collapsed ? "#00524F" : "transparent",

  width: 30,
  height: 30,

  zIndex: 10001111111111,

  transition: "all 0.3s ease",

  pointerEvents: "auto",
  borderRadius: 10,
  "@media (max-height: 760px)": {
    top: collapsed ? -10 : 0,
  },
  "& svg": {
    width: 18,
    height: 18,
  },

  "&:hover": {
    background: "#0A766B",
  },
}));
export const MenuWrap = styled(Box)(() => ({
  marginTop: -20,
  display: "flex",
  flexDirection: "column",
  gap: 6,
  width: "100%",
  alignItems: "stretch",

  pointerEvents: "auto",

  "@media (max-height: 760px)": {
    gap: 4,
  },
}));
export const MenuItemWrap = styled(Box)(() => ({
  position: "relative",

  width: "100%",

  overflow: "visible",
}));
export const MenuItem = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "active" &&
    prop !== "collapsed" &&
    prop !== "firstitem" &&
    prop !== "disablecursor",
})<ActiveProps & CollapsedProps & FirstItemProps & DisableCursorProps>(
  ({ active, collapsed, firstitem, disablecursor }) => ({
    height: 45,

    borderRadius: 8,

    display: "flex",
    alignItems: "center",

    justifyContent: collapsed ? "center" : "flex-start",

    gap: collapsed ? 0 : 10,

    padding: collapsed ? "0 8px" : "0 12px",

    cursor: disablecursor ? "not-allowed" : "pointer",

    userSelect: "none",

    background: active ? "rgba(255,255,255,0.08)" : "transparent",

    border: active
      ? "1px solid rgba(255,255,255,0.08)"
      : "1px solid transparent",

    transition: "all 0.2s ease",

    width: "100%",

    boxSizing: "border-box",

    ...(firstitem && {
      color: "#0d8371",
      opacity: "60%",
    }),

    "&:hover": {
      background: disablecursor
        ? "rgba(255,255,255,0.06)"
        : active
          ? "rgba(255,255,255,0.08)"
          : "rgba(255,255,255,0.04)",
    },
  }),
);
export const MenuIconWrap = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active",
})<ActiveProps>(({ active }) => ({
  color: active ? "#C8F29B" : "#C7D5D3",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,

  "& svg": {
    width: 18,
    height: 18,
  },
}));
export const MenuBadge = styled(Box)(() => ({
  marginLeft: "auto",

  height: 22,

  padding: "0 10px",

  borderRadius: 999,

  background: "rgba(134,239,172,0.22)",

  color: "#D1FAE5",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  fontSize: 10,
  fontWeight: 800,

  letterSpacing: 0.4,
}));
export const SoonModal = styled(Box)(() => ({
  position: "fixed",

  left: 275,
  top: 55,

  width: 265,

  borderRadius: 16,

  background: "linear-gradient(125deg,#00524f 30%,#0F8F7B 120%)",

  padding: "6px 10px",
  zIndex: 999999911111111111111,
  border: "1px solid rgba(255,255,255,0.08)",
  backdropFilter: "blur(12px)",
  animation: "soonFade .18s ease",
  pointerEvents: "none",
  "&::before": {
    content: '""',

    position: "absolute",

    left: -6,
    top: 35,

    width: 12,
    height: 12,

    background: "#00524f",

    transform: "rotate(45deg)",

    borderLeft: "1px solid rgba(255,255,255,0.08)",

    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },

  "@keyframes soonFade": {
    from: {
      opacity: 0,
      transform: "translateY(6px) scale(0.98)",
    },

    to: {
      opacity: 1,
      transform: "translateY(0) scale(1)",
    },
  },

  "@media (max-width: 900px)": {
    display: "none",
  },
}));
export const SoonTitle = styled(Box)(() => ({
  color: "#fff",

  fontSize: 14,
  fontWeight: 600,
}));
export const SoonWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: 8,
  marginTop: -7,
}));

export const SoonBadge = styled(Box)(() => ({
  display: "inline-flex",
  height: 12,
  padding: "0 10px",
  borderRadius: 999,
  background: "rgb(145, 252, 135)",
  color: "#00524F",
  alignItems: "center",
  fontSize: 8,
  fontWeight: 800,
}));

export const SoonText = styled(Box)(() => ({
  color: "rgba(255,255,255,0.92)",

  fontSize: 11,

  lineHeight: "15px",

  fontWeight: 400,
}));
export const MenuText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "active" && prop !== "collapsed",
})<ActiveProps & CollapsedProps>(({ active, collapsed }) => ({
  color: active ? "#DDF7B7" : "#C5CFDD",
  fontSize: 14,
  fontWeight: 500,
  fontFamily: "inter",
  lineHeight: "20px",
  whiteSpace: "nowrap",
  opacity: collapsed ? 0 : 1,
  width: collapsed ? 0 : "auto",
  overflow: "hidden",
  transition: "all 0.25s ease",

  "@media (max-height: 760px)": {
    fontSize: 12,
  },
}));

export const BottomArea = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 12,
  flexShrink: 0,

  pointerEvents: "auto",

  "@media (max-height: 760px)": {
    gap: 8,
  },
}));
export const NotificationsRow = styled(Link, {
  shouldForwardProp: (prop) => prop !== "collapsed",
})<CollapsedProps>(({ collapsed }) => ({
  height: 36,
  display: "flex",
  alignItems: "center",
  justifyContent: collapsed ? "center" : "space-between",
  padding: collapsed ? "0 8px" : "0 12px",
  borderRadius: 8,
  cursor: "pointer",
  color: "#D7E5E2",
  textDecoration: "none",
  width: "100%",
  boxSizing: "border-box",
  "&:hover": {
    background: "rgba(255,255,255,0.04)",
  },
}));

export const NotificationsLeft = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: 10,
  minWidth: 0,
}));

export const NotificationsText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "collapsed",
})<CollapsedProps>(({ collapsed }) => ({
  fontSize: 14,
  lineHeight: "20px",
  color: "#D7E5E2",
  whiteSpace: "nowrap",
  opacity: collapsed ? 0 : 1,
  width: collapsed ? 0 : "auto",
  overflow: "hidden",
  textTransform: "none",
  transition: "all 0.25s ease",

  "@media (max-height: 760px)": {
    fontSize: 12,
  },
}));

export const Badge = styled(Box, {
  shouldForwardProp: (prop) => prop !== "collapsed",
})<CollapsedProps>(({ collapsed }) => ({
  minWidth: 18,
  height: 18,
  borderRadius: 999,
  background: "#FACC15",
  color: "#1F2937",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 11,
  fontWeight: 700,
  flexShrink: 0,
  marginLeft: collapsed ? 0 : 8,
}));

export const UserCard = styled(Link, {
  shouldForwardProp: (prop) => prop !== "collapsed",
})<CollapsedProps>(({ collapsed }) => ({
  minHeight: 50,
  borderRadius: 8,
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.04)",
  display: "flex",
  alignItems: "center",
  gap: collapsed ? 0 : 10,
  padding: collapsed ? 8 : "8px 10px",
  justifyContent: collapsed ? "center" : "flex-start",
  textDecoration: "none",
  flexShrink: 0,
  width: "100%",
  boxSizing: "border-box",
}));

export const AvatarWrap = styled(Box)(() => ({
  width: 28,
  height: 28,
  borderRadius: "50%",
  overflow: "hidden",
  flexShrink: 0,
  background: "#E5E7EB",

  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
}));

export const UserInfo = styled(Box, {
  shouldForwardProp: (prop) => prop !== "collapsed",
})<CollapsedProps>(({ collapsed }) => ({
  minWidth: 0,
  opacity: collapsed ? 0 : 1,
  width: collapsed ? 0 : "auto",
  overflow: "hidden",
  transition: "all 0.25s ease",
}));

export const UserName = styled(Typography)(() => ({
  color: "#FFFFFF",
  fontSize: 13,
  fontWeight: 600,
  lineHeight: "18px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

export const UserPhone = styled(Typography)(() => ({
  color: "#B8CECB",
  fontSize: 12,
  fontWeight: 400,
  lineHeight: "16px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

export const LogoutModalBox = styled(Box)(() => ({
  width: 420,
  borderRadius: 16,
  background: "#fff",
  padding: "28px 24px",
  boxShadow: "0px 20px 48px rgba(16,24,40,0.18)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 18,
  outline: "none",
}));

export const LogoutIconWrap = styled(Box)(() => ({
  width: 56,
  height: 56,
  borderRadius: "50%",
  background: "#FEE4E2",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const LogoutTitle = styled(Typography)(() => ({
  fontSize: 18,
  fontWeight: 600,
  color: "#101828",
  fontFamily: "Inter",
}));

export const LogoutDescription = styled(Typography)(() => ({
  fontSize: 14,
  color: "#667085",
  textAlign: "center",
  maxWidth: 320,
  fontFamily: "Inter",
}));

export const LogoutButtons = styled(Box)(() => ({
  display: "flex",
  gap: 12,
  width: "100%",
  marginTop: 8,
}));

export const LogoutCancelButton = styled(Button)(() => ({
  height: 40,
  borderRadius: 10,
  border: "1px solid #E4E7EC",
  color: "#344054",
  background: "#fff",
  textTransform: "none",
  fontWeight: 500,
  fontFamily: "Inter",
}));

export const LogoutConfirmButton = styled(Button)(() => ({
  height: 40,
  borderRadius: 10,
  background: "#D92D20",
  color: "#fff",
  textTransform: "none",
  fontWeight: 500,
  fontFamily: "Inter",

  "&:hover": {
    background: "#B42318",
  },
}));
