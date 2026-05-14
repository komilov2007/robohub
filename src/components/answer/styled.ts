import { styled } from "@mui/material/styles";

import {
  Box,
  Button,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

// STACKS

export const SwitchRow = styled(Stack)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 8,

  "@media (max-width: 640px)": {
    width: "100%",
    justifyContent: "space-between",
  },
}));

export const SwitchIcon = styled(Switch)<{
  active: boolean;
}>(({}) => ({
  width: 46,
  height: 26,
  padding: 0,

  "& .MuiSwitch-switchBase": {
    padding: "3px",

    "&.Mui-checked": {
      transform: "translateX(20px)",
      color: "#fff",

      "& + .MuiSwitch-track": {
        backgroundColor: "#12B76A",
        opacity: 1,
      },
    },
  },

  "& .MuiSwitch-thumb": {
    width: 20,
    height: 20,

    boxShadow: "0 2px 6px rgba(0,0,0,0.18)",
  },

  "& .MuiSwitch-track": {
    borderRadius: 999,
    backgroundColor: "#D0D5DD",
    opacity: 1,
  },
}));

export const Row = styled(Stack)(() => ({
  display: "flex",
  flexDirection: "row",
  gap: 2,
}));

export const StarsRow = styled(Stack)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 8,
  marginBottom: 4,
  flexWrap: "wrap",
}));

// PAGE
export const PageWrapper = styled(Box)(() => ({
  width: "100%",

  height: "100%",
  minHeight: "100dvh",

  display: "flex",
  flexDirection: "column",

  overflow: "hidden",

  background: "linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)",

  boxSizing: "border-box",

  "@media (max-width: 640px)": {
    height: "100dvh",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
}));
// HEADER

export const Header = styled(Box)(() => ({
  minHeight: 54,

  background: "rgba(255,255,255,0.96)",

  backdropFilter: "blur(10px)",

  borderBottom: "1px solid #E4E7EC",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  padding: "0 46px 0 50px",

  gap: 12,

  flexShrink: 0,

  boxSizing: "border-box",

  zIndex: 20,

  "@media (max-width: 640px)": {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,

    minHeight: 56,

    padding: "10px 14px",

    gap: 10,
  },
}));

export const HeaderTitle = styled(Typography)(() => ({
  fontWeight: 700,

  color: "#0F172A",

  fontFamily: "Inter",

  "@media (max-width: 640px)": {
    fontSize: 15,
    paddingLeft: "34px",
  },
}));

export const HeaderHelp = styled(Typography)(() => ({
  fontSize: 14,
  fontWeight: 700,

  color: "#0B7A69",

  cursor: "pointer",

  transition: "0.2s",

  "@media (hover: hover)": {
    "&:hover": {
      opacity: 0.7,
    },
  },

  "@media (max-width: 640px)": {
    fontSize: 13,
  },
}));

// MAIN

export const Main = styled(Box)(() => ({
  flex: 1,

  minHeight: 0,

  overflowY: "auto",
  overflowX: "hidden",

  padding: "18px",

  boxSizing: "border-box",

  WebkitOverflowScrolling: "touch",

  overscrollBehaviorY: "contain",

  scrollPaddingBottom: "140px",

  "&::-webkit-scrollbar": {
    width: 6,
  },

  "&::-webkit-scrollbar-thumb": {
    background: "#CBD5E1",
    borderRadius: 999,
  },

  "@media (max-width: 640px)": {
    paddingTop: "calc(56px + 14px)",
    paddingLeft: "12px",
    paddingRight: "12px",
    paddingBottom: "calc(102px + env(safe-area-inset-bottom) + 14px)",

    scrollPaddingTop: "80px",
    scrollPaddingBottom: "140px",

    overflowAnchor: "none",

    transform: "translateZ(0)",
  },
}));
export const Content = styled(Box)(() => ({
  width: "100%",
  maxWidth: 860,

  margin: "0 auto",

  display: "flex",
  flexDirection: "column",

  gap: 16,

  "@media (max-width: 640px)": {
    gap: 12,
  },
}));

// HERO

export const HeroCard = styled(Box)(() => ({
  width: "100%",

  borderRadius: 24,

  padding: 24,

  background: "linear-gradient(135deg,#0B7A69 0%,#06635B 45%,#15B8B8 100%)",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  gap: 18,

  boxSizing: "border-box",

  position: "relative",

  overflow: "hidden",

  boxShadow: "0 20px 45px rgba(11,122,105,0.22)",

  "&::before": {
    content: '""',

    position: "absolute",

    width: 260,
    height: 260,

    borderRadius: "50%",

    background: "rgba(255,255,255,0.06)",

    top: -120,
    right: -80,
  },

  "@media (max-width: 640px)": {
    flexDirection: "column",

    alignItems: "flex-start",

    borderRadius: 18,

    padding: 16,

    gap: 14,
  },
}));

export const HeroLeft = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",

  gap: 16,

  minWidth: 0,

  zIndex: 2,

  "@media (max-width: 500px)": {
    width: "100%",

    gap: 12,
  },
}));

export const HeroIcon = styled(Box)(() => ({
  width: 56,
  height: 56,

  minWidth: 56,
  minHeight: 56,

  borderRadius: "50%",

  background: "rgba(255,255,255,0.16)",

  backdropFilter: "blur(8px)",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  color: "#fff",

  flexShrink: 0,

  "@media (max-width: 500px)": {
    width: 48,
    height: 48,

    minWidth: 48,
    minHeight: 48,
  },
}));

export const HeroTitle = styled(Typography)(() => ({
  fontSize: 20,
  fontWeight: 800,

  color: "#fff",

  lineHeight: 1.2,

  "@media (max-width: 500px)": {
    fontSize: 17,
  },
}));

export const HeroDescription = styled(Typography)(() => ({
  fontSize: 14,

  lineHeight: "22px",

  color: "rgba(255,255,255,0.92)",

  maxWidth: 460,

  "@media (max-width: 500px)": {
    fontSize: 13,

    lineHeight: "20px",

    maxWidth: "100%",
  },
}));

export const HeroBadge = styled(Box)(() => ({
  height: 36,

  borderRadius: 999,

  padding: "0 16px",

  background: "rgba(255,255,255,0.14)",

  border: "1px solid rgba(255,255,255,0.22)",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  color: "#fff",

  fontSize: 12,
  fontWeight: 800,

  whiteSpace: "nowrap",

  zIndex: 2,

  "@media (max-width: 500px)": {
    width: "100%",
  },
}));

// CARD

export const ReviewCard = styled(Box)<{
  active?: boolean;
}>(({ active }) => ({
  position: "relative",

  background: "#fff",

  borderRadius: 20,

  border: active ? "1px solid #ABEFC6" : "1px solid #E2E8F0",

  overflow: "hidden",

  padding: 20,

  boxSizing: "border-box",

  transition: "0.25s ease",

  boxShadow: active
    ? "0 10px 35px rgba(18,183,106,0.18)"
    : "0 4px 18px rgba(15,23,42,0.04)",

  "@media (hover: hover)": {
    "&:hover": {
      transform: "translateY(-4px)",

      border: "1px solid rgba(11,122,105,0.18)",

      boxShadow: "0 16px 40px rgba(15,23,42,0.08)",
    },
  },

  "@media (max-width: 640px)": {
    padding: 16,

    borderRadius: 16,
  },
}));

export const LeftBorder = styled(Box)<{
  bordercolor: string;
}>(({ bordercolor }) => ({
  position: "absolute",

  left: 0,
  top: 0,
  bottom: 0,

  width: 4,

  background: bordercolor,
}));

export const CardTop = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",

  gap: 20,

  "@media (max-width: 640px)": {
    flexDirection: "column",

    gap: 14,
  },
}));

export const CardLeft = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-start",

  gap: 14,

  minWidth: 0,
}));

export const NumberBadge = styled(Box)<{
  bgcolor: string;
  textcolor: string;
}>(({ bgcolor, textcolor }) => ({
  width: 38,
  minWidth: 38,

  height: 38,

  borderRadius: 14,

  background: bgcolor,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  color: textcolor,

  fontWeight: 800,
  fontSize: 16,
}));

export const CardTitle = styled(Typography)(() => ({
  fontSize: 16,
  fontWeight: 800,

  color: "#0F172A",
}));

export const CardDescription = styled(Typography)(() => ({
  fontSize: 14,

  color: "#667085",

  lineHeight: "22px",
}));

export const OpenBadge = styled(Box)<{
  active?: boolean;
}>(({ active }) => ({
  height: 32,

  borderRadius: 999,

  border: `1px solid ${active ? "#ABEFC6" : "#D0D5DD"}`,

  background: active ? "#ECFDF3" : "#fff",

  padding: "0 14px",

  display: "flex",
  alignItems: "center",

  gap: 6,

  color: active ? "#067647" : "#667085",

  fontWeight: 800,
  fontSize: 13,
}));

export const Dot = styled(Box)<{
  active?: boolean;
}>(({ active }) => ({
  width: 7,
  height: 7,

  borderRadius: "50%",

  background: active ? "#12B76A" : "#98A2B3",
}));

export const TextAreaWrap = styled(Box)(() => ({
  marginTop: 18,
}));

export const TextAreaTitle = styled(Typography)(() => ({
  fontSize: 14,
  fontWeight: 700,

  marginBottom: 10,

  color: "#344054",
}));

export const StyledTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: 16,

    background: "#FCFCFD",

    transition: "0.2s",

    "& textarea": {
      fontSize: 14,
      color: "#475467",

      scrollMarginBottom: "180px",
    },

    "& fieldset": {
      borderColor: "#D0D5DD",
    },

    "@media (hover: hover)": {
      "&:hover": {
        background: "#fff",
      },

      "&:hover fieldset": {
        borderColor: "#98A2B3",
      },
    },

    "&.Mui-focused": {
      background: "#fff",

      boxShadow: "0 0 0 4px rgba(11,122,105,0.08)",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#0B7A69",
    },
  },
}));

export const TextCount = styled(Typography)(() => ({
  marginTop: 8,

  textAlign: "right",

  fontSize: 12,

  color: "#98A2B3",
}));

// FOOTER

export const Footer = styled(Box)(() => ({
  minHeight: 54,

  background: "rgba(255,255,255,0.94)",

  backdropFilter: "blur(10px)",

  borderTop: "1px solid #E4E7EC",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: "0 18px",

  boxSizing: "border-box",

  flexShrink: 0,

  zIndex: 30,

  "@media (max-width: 650px)": {
    position: "fixed",

    left: 0,
    right: 0,
    bottom: 0,

    minHeight: 72,

    padding: "10px 12px calc(10px + env(safe-area-inset-bottom))",

    background: "#FFFFFF",

    borderTop: "1px solid #E4E7EC",
  },
}));

export const FooterContent = styled(Box)(() => ({
  width: "100%",
  maxWidth: 860,

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  gap: 12,

  "@media (max-width: 650px)": {
    flexDirection: "column",

    alignItems: "stretch",

    gap: 10,
  },
}));

export const FooterLeft = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",

  gap: 10,

  "@media (max-width: 650px)": {
    justifyContent: "center",
  },
}));

export const FooterText = styled(Typography)(() => ({
  fontSize: 14,
  fontWeight: 700,

  color: "#344054",

  "@media (max-width: 650px)": {
    fontSize: 12,

    textAlign: "center",
  },
}));

export const FooterButton = styled(Button)(() => ({
  height: 36,

  minWidth: 120,

  borderRadius: 14,

  textTransform: "none",

  fontSize: 14,
  fontWeight: 700,

  transition: "all .2s ease",

  boxShadow: "none",

  whiteSpace: "nowrap",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  gap: 8,

  "@media (max-width: 650px)": {
    height: 34,

    minWidth: 100,

    fontSize: 12,
  },

  "@media (max-width: 420px)": {
    flex: 1,

    minWidth: 0,
  },
}));

export const CancelButton = styled(FooterButton)(() => ({
  border: "1px solid #D0D5DD",

  color: "#344054",

  background: "#FFFFFF",
}));

export const SaveButton = styled(FooterButton)(() => ({
  background: "linear-gradient(135deg,#0B7A69 0%,#06635B 100%)",

  color: "#fff",

  boxShadow: "0 10px 24px rgba(11,122,105,0.24)",
  boxSizing: "border-box",

  "&:hover": {
    boxShadow: "0 14px 32px rgba(11,122,105,0.32)",
  },
}));
