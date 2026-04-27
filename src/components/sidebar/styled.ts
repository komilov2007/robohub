import { Box, Button, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

type ActiveProps = { active?: boolean };
type CollapsedProps = { collapsed?: boolean };

export const SidebarWrap = styled(Box, {
  shouldForwardProp: (prop) => prop !== "collapsed",
})<CollapsedProps>(({ collapsed }) => ({
  width: collapsed ? 84 : 262,
  minWidth: collapsed ? 84 : 262,
  maxWidth: collapsed ? 84 : 262,
  height: "100vh",
  background: "#005F56",
  overflowY: "auto",
  overflowX: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 12,
  transition: "width 0.3s ease, min-width 0.3s ease, max-width 0.3s ease",
  padding: 10,
  boxSizing: "border-box",

  "&::-webkit-scrollbar": {
    width: 0,
  },

  "@media (max-height: 760px)": {
    gap: 8,
    padding: 8,
  },
}));

export const TopArea = styled(Box)<CollapsedProps>(({ collapsed }) => ({
  marginTop: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: collapsed ? "center" : "space-between",
  marginBottom: 24,
  width: "100%",

  "@media (max-height: 760px)": {
    marginTop: 6,
    marginBottom: 14,
  },
}));

export const BrandWrap = styled(Box, {
  shouldForwardProp: (prop) => prop !== "collapsed",
})<CollapsedProps>(({ collapsed }) => ({
  display: "flex",
  alignItems: "center",
  minWidth: 10,
  padding: 10,
  justifyContent: collapsed ? "center" : "flex-start",
  width: collapsed ? "100%" : "auto",

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

export const ToggleButton = styled(IconButton)(() => ({
  color: "#D1FAE5",
  background: "transparent",
  flexShrink: 0,
  padding: 6,

  "&:hover": {
    background: "rgba(255,255,255,0.06)",
  },
}));

export const MenuWrap = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 6,
  marginLeft: "-5px",
  width: "100%",
  "@media (max-height: 760px)": {
    gap: 4,
  },
}));

export const MenuItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active" && prop !== "collapsed",
})<ActiveProps & CollapsedProps>(({ active, collapsed }) => ({
  height: 45,
  borderRadius: 8,
  display: "flex",
  alignItems: "center",
  justifyContent: collapsed ? "center" : "flex-start",
  gap: collapsed ? 0 : 10,
  padding: collapsed ? "0 8px" : "0 12px",
  cursor: "pointer",
  userSelect: "none",
  background: active ? "rgba(255,255,255,0.08)" : "transparent",
  border: active ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
  transition: "all 0.2s ease",

  "&:hover": {
    background: active ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)",
  },

  "@media (max-height: 760px)": {
    height: 38,
  },
}));

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

export const CardWrap = styled(Box)(() => ({
  width: "100%",
  maxWidth: 224,
  height: 260,
  position: "relative",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  paddingBottom: 12,
  borderBottom: "1px solid #cac6c633",
  marginLeft: "5px",
  marginTop: "80px",
  flexShrink: 0,

  "@media (max-height: 820px)": {
    maxWidth: 235,
    height: 230,
  },

  "@media (max-height: 760px)": {
    maxWidth: 195,
    height: 185,
  },
}));
export const GlassBlock = styled(Box)(() => ({
  width: "100%",
  height: 218,
  borderRadius: 16,
  background: "#1F6764",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  boxSizing: "border-box",
  padding: "105px 12px 12px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
export const PhoneImage = styled("img")(() => ({
  position: "absolute",
  top: -18,
  left: "45%",
  transform: "translateX(-50%)",
  width: 138,
  height: 156,
  zIndex: 2,
  objectFit: "contain",

  "@media (max-height: 820px)": {
    width: 118,
    height: 134,
    top: -12,
  },

  "@media (max-height: 760px)": {
    width: 96,
    height: 110,
    top: -8,
  },
}));
export const Title = styled(Typography)(() => ({
  fontSize: 14,
  lineHeight: "100%",
  fontWeight: 700,
  color: "#FFFFFF",
  textAlign: "center",
  marginBottom: 8,
  fontFamily: "inter",
  marginTop: 8,

  "@media (max-height: 760px)": {
    fontSize: 11,
    marginBottom: 5,
  },
}));

export const Description = styled(Typography)(() => ({
  fontSize: 12,
  lineHeight: "100%",
  fontWeight: 400,
  opacity: 0.7,
  color: "white",
  textAlign: "center",
  marginBottom: 10,
  fontFamily: "inter",
  zIndex: 20,

  "@media (max-height: 760px)": {
    fontSize: 9,
    marginBottom: 7,
  },

  "@media (max-height: 680px)": {
    display: "none",
  },
}));

export const InstallButton = styled(Button)(() => ({
  width: "100%",
  height: 35,
  minHeight: 35,
  borderRadius: 12,
  background: "#B7F08A",
  color: "#00524F",
  fontFamily: "inter",
  textTransform: "none",
  fontSize: 14,
  lineHeight: "18px",
  fontWeight: 600,
  boxShadow: "none",
  marginTop: "auto",

  "&:hover": {
    background: "#B7F08A",
    boxShadow: "none",
  },
}));

export const BottomArea = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 12,
  flexShrink: 0,

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
  marginLeft: "-5px",
  width: "100%",
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
  marginLeft: "-5px",
  width: "100%",
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

export const MenuItemLogout = styled(Box)({});

export const MenuItemLogoutBtn = styled(Button)({
  textTransform: "none",
  color: "#C5CFDD",
  height: 45,
  borderRadius: 8,
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  userSelect: "none",
  width: "100%",
  justifyContent: "flex-start",
  gap: 10,
});

export const GlowShape = styled(Box)(() => ({
  position: "absolute",
  top: 60,
  left: "50%",
  transform: "translateX(-50%)",
  width: 200,
  height: 160,
  borderRadius: 16,
  background: "rgba(255,255,255,0.10)",
}));

export const ContentWrap = styled(Box)(() => ({
  position: "relative",
  zIndex: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "0 20px",
}));

export const BrandLogo = styled(Box)(() => ({
  width: 33,
  height: 18,
  position: "relative",
  flexShrink: 0,
}));

export const BrandText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "collapsed",
})<CollapsedProps>(({ collapsed }) => ({
  color: "#A7F3A0",
  fontSize: 17,
  fontWeight: 700,
  lineHeight: "22px",
  whiteSpace: "nowrap",
  opacity: collapsed ? 0 : 1,
  width: collapsed ? 0 : "auto",
  overflow: "hidden",
  transition: "all 0.25s ease",
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
