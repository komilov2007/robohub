import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import InputBase from "@mui/material/InputBase";
import { Link } from "react-router-dom";

interface PlatformTabProps {
  active?: boolean;
}

export const PageWrapper = styled(Box)({
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "#F8FAFC",
  boxSizing: "border-box",
  fontFamily: "inter",
});

export const Header = styled(Box)({
  width: "100%",
  height: "56px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  // marginBottom: "16px",
  borderBottom: "1px solid #E0E6F0",
  padding: "16px",
});

export const Title = styled(Typography)({
  fontWeight: 600,
  lineHeight: "24px",
  color: "#101828",
  fontFamily: "inter",
});

export const CreateButton = styled(Link)({
  height: "40px",
  minWidth: "226px",
  borderRadius: "8px",
  padding: "10px 14px",
  textTransform: "none",
  backgroundColor: "#0B6E69",
  color: "#FFFFFF",
  boxShadow: "none",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "20px",
  "&:hover": {
    backgroundColor: "#095C58",
    boxShadow: "none",
  },
  display: "flex",
  alignItems: "center",
  gap: "10px",
  textDecoration: "none",
});

export const TabsWrapper = styled(Box)({
  width: "100%",
  borderBottom: "1px solid #EAECF0",
  marginBottom: "16px",
  padding: "0px 16px",
});

export const StyledTabs = styled(Tabs)({
  minHeight: "44px",
  fontFamily: "inter",
  "& .MuiTabs-indicator": {
    height: "2px",
    backgroundColor: "#0B6E69",
  },
});

export const StyledTab = styled(Tab)({
  minHeight: "44px",
  padding: "0 14px",
  textTransform: "none",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "20px",
  color: "#667085",
  "&.Mui-selected": {
    color: "#0B6E69",
    fontWeight: 600,
  },
});

export const TabLabel = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const TabCount = styled(Box)({
  minWidth: "18px",
  height: "18px",
  padding: "0 6px",
  borderRadius: "999px",
  backgroundColor: "#FBCF00",
  color: "#475467",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "11px",
  fontWeight: 600,
  lineHeight: "11px",
  boxSizing: "border-box",
});

export const SearchRow = styled(Box)({
  width: "49%",
  marginBottom: "20px",
  padding: "0px 16px",
});

export const SearchBox = styled(Box)({
  width: "100%",
  height: "44px",
  borderRadius: "10px",
  border: "1px solid #D0D5DD",
  backgroundColor: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  padding: "0 8px 0 12px",
  boxSizing: "border-box",
  "&:hover": {
    borderColor: "#98A2B3",
  },
  "&:focus-within": {
    borderColor: "#0B6E69",
  },
});

export const SearchLeft = styled(Box)({
  width: "20px",
  height: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#98A2B3",
  marginRight: "8px",
  flexShrink: 0,
});

export const SearchInput = styled(InputBase)({
  flex: 1,
  height: "100%",
  fontSize: "14px",
  lineHeight: "20px",
  color: "#344054",
  "& input::placeholder": {
    color: "#98A2B3",
    opacity: 1,
  },
  width: "10px",
});

export const ShortcutBox = styled(Box)({
  height: "28px",
  minWidth: "52px",
  borderRadius: "8px",
  border: "1px solid #EAECF0",
  backgroundColor: "#F9FAFB",
  padding: "0 10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "2px",
  color: "#667085",
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "18px",
  boxSizing: "border-box",
  flexShrink: 0,
});

export const Grid = styled(Box)({
  width: "100%",
  padding: "0px 16px 16px 16px",
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "16px",
  "@media (max-width: 1200px)": {
    gridTemplateColumns: "1fr",
  },
});

export const ProductCard = styled(Card)({
  width: "100%",
  borderRadius: "16px",
  border: "1px solid #DDE3EA",
  backgroundColor: "#FFFFFF",
  boxShadow: "none",
  padding: "24px",
  boxSizing: "border-box",
});

export const CardTop = styled(Box)({
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "12px",
});

export const ProductMain = styled(Box)({
  flex: 1,
  display: "flex",
  alignItems: "flex-start",
  gap: "12px",
  minWidth: 0,
});

export const ProductImage = styled("img")({
  width: "96px",
  height: "128px",
  borderRadius: "8px",
  objectFit: "cover",
  flexShrink: 0,
  display: "block",
});

export const ProductInfo = styled(Box)({
  flex: 1,
  minWidth: 0,
});

export const StatusRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginBottom: "8px",
});

interface StatusBadgeProps {
  status: "Active" | "Draft" | "Archived";
}

export const StatusBadge = styled(Box, {
  shouldForwardProp: (prop) => prop !== "status",
})<StatusBadgeProps>(({ status }) => {
  if (status === "Active") {
    return {
      backgroundColor: "#F6FEF9",
      color: "#039855",
    };
  }

  return {
    backgroundColor: "#F8FAFC",
    color: "#344054",
  };
});

export const ProductName = styled(Typography)({
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "22px",
  color: "#101828",
  marginBottom: "6px",
  wordBreak: "break-word",
});

export const ProductMeta = styled(Typography)({
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "20px",
  color: "#667085",
  marginBottom: "2px",
});

export const ProductPrice = styled(Typography)({
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "20px",
  color: "#667085",
  marginBottom: "10px",
});

export const MarketsWrapper = styled(Box)({
  display: "flex",
  alignItems: "flex-start",
  gap: "24px",
  marginBottom: "14px",
  "@media (max-width: 700px)": {
    flexDirection: "column",
    gap: "10px",
  },
});

export const MarketsColumn = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

export const MarketRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  minHeight: "24px",
});

export const MarketName = styled(Typography)({
  minWidth: "82px",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "20px",
  color: "#344054",
  fontFamily: "inter",
});

interface MiniBadgeProps {
  tone: "green" | "orange" | "red" | "teal";
}

export const MiniBadge = styled(Box, {
  shouldForwardProp: (prop) => prop !== "tone",
})<MiniBadgeProps>(({ tone }) => {
  if (tone === "green") {
    return {
      backgroundColor: "#FFFFFF",
      border: "1px solid #ABEFC6",
      color: "#039855",
    };
  }

  if (tone === "orange") {
    return {
      backgroundColor: "#FFFFFF",
      border: "1px solid #FDEAD7",
      color: "#F79009",
    };
  }

  if (tone === "red") {
    return {
      backgroundColor: "#FFFFFF",
      border: "1px solid #FECDCA",
      color: "#D92D20",
    };
  }

  return {
    backgroundColor: "#0B6E69",
    border: "1px solid #0B6E69",
    color: "#FFFFFF",
    cursor: "pointer",
  };
});

export const PlatformTabs = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginBottom: "10px",
  flexWrap: "wrap",
  marginLeft: "-110px",
});

export const PlatformTab = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active",
})<PlatformTabProps>(({ active }) => ({
  height: "30px",
  minWidth: "90px",
  padding: "0 14px",
  borderRadius: "8px",
  backgroundColor: active ? "#FFFFFF" : "#F2F4F7",
  border: active ? "1px solid #D0D5DD" : "1px solid transparent",
  color: active ? "#344054" : "#98A2B3",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "18px",
  boxSizing: "border-box",
}));

export const StatsBox = styled(Box)({
  width: "125%",
  backgroundColor: "#F8FAFC",
  border: "1px solid #EAECF0",
  borderRadius: "12px",
  padding: "10px 14px",
  boxSizing: "border-box",
  marginLeft: "-110px",
});

export const StatsRow = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",
  alignItems: "center",
  "@media (max-width: 700px)": {
    gridTemplateColumns: "repeat(3, 1fr)",
    rowGap: "12px",
  },
});

export const StatItem = styled(Box)({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const StatDivider = styled(Box)({
  width: "1px",
  height: "36px",
  backgroundColor: "#D0D5DD",
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translateY(-50%)",
  "@media (max-width: 700px)": {
    display: "none",
  },
});

export const StatTop = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  marginBottom: "4px",
});

export const StatValue = styled(Typography)({
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "20px",
  color: "#101828",
});

export const StatLabel = styled(Typography)({
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "16px",
  color: "#98A2B3",
  textAlign: "center",
});

export const TopRightAction = styled(Box)({
  width: "32px",
  height: "32px",
  borderRadius: "10px",
  border: "1px solid #D0D5DD",
  backgroundColor: "#F9FAFB",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#667085",
  cursor: "pointer",
  flexShrink: 0,
  boxSizing: "border-box",
});

export const EmptyStateWrapper = styled(Box)({
  width: "100%",
  minHeight: "calc(100vh - 180px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const EmptyStateBox = styled(Box)({
  width: "100%",
  maxWidth: "320px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  marginTop: "-40px",
});

export const EmptyStateIconBox = styled(Box)({
  width: "72px",
  height: "72px",
  borderRadius: "16px",
  backgroundColor: "#F9FAFB",
  border: "1px solid #EAECF0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "16px",
  boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
});

export const EmptyStateTitle = styled(Typography)({
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "24px",
  color: "#101828",
  marginBottom: "4px",
});

export const EmptyStateDescription = styled(Typography)({
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "20px",
  color: "#98A2B3",
  marginBottom: "16px",
});

export const EmptyStateButton = styled(Button)({
  minWidth: "180px",
  height: "36px",
  borderRadius: "8px",
  backgroundColor: "#0B6E69",
  color: "#FFFFFF",
  textTransform: "none",
  fontWeight: 600,
  fontSize: "13px",
  lineHeight: "18px",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "#095C58",
    boxShadow: "none",
  },
});
