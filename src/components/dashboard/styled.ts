import {
  Button,
  IconButton,
  InputBase,
  Pagination,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
export const SectionWrapper = styled(Box)({
  width: "100%",
});

export const SectionTitle = styled(Typography)({
  fontWeight: 600,
  color: "#101828",
  marginBottom: "18px",
  borderBottom: "0.5px solid #E0E6F0",
  padding: "15px 15px",
  fontFamily: "Inter, sans-serif",
});

export const CardsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  padding: "0px 10px",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  gap: "14px",

  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "1fr 1fr",
  },

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const StatCard = styled(Box)({
  backgroundColor: "#FFFFFF",
  border: "1px solid #D9E2F2",
  borderRadius: "12px",
  padding: "16px 14px",
  minHeight: 138,
});

export const CardTop = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "24px",
});

export const IconBox = styled(Box)({
  width: 30,
  height: 30,
  borderRadius: "8px",
  border: "1px solid #D0D5DD",
  backgroundColor: "#F9FAFB",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
});

export const CardTitle = styled(Typography)({
  fontSize: "16px",
  fontWeight: 500,
  color: "#344054",
  lineHeight: 1.2,
});

export const ValueRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "12px",
  flexWrap: "wrap",
});

export const ValueWrap = styled(Box)({
  display: "flex",
  alignItems: "baseline",
  gap: "6px",
});

export const ValueText = styled(Typography)({
  fontSize: "18px",
  fontWeight: 700,
  color: "#344054",
  lineHeight: 1.2,
});

export const UnitText = styled(Typography)({
  fontSize: "14px",
  fontWeight: 400,
  color: "#98A2B3",
  lineHeight: 1.2,
});
export const TooltipBox = styled(Box)({
  minWidth: 282,
  backgroundColor: "#FFFFFF",
  border: "1px solid #E4E7EC",
  boxShadow: "0px 12px 28px rgba(16, 24, 40, 0.10)",
  borderRadius: 14,
  padding: "12px 14px",
});

export const TooltipMonth = styled(Typography)({
  fontSize: 14,
  fontWeight: 500,
  color: "#98A2B3",
  marginBottom: 12,
});

export const TooltipRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 16,
});

export const TooltipRowLeft = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 10,
});

export const TooltipColorLine = styled(Box)<{ color: string }>(({ color }) => ({
  width: 3,
  height: 18,
  borderRadius: 999,
  backgroundColor: color,
}));

export const TooltipLabel = styled(Typography)({
  fontSize: 14,
  color: "#475467",
  whiteSpace: "nowrap",
});

export const TooltipValue = styled(Typography)({
  fontSize: 14,
  fontWeight: 700,
  color: "#101828",
});

/* ---------- Platform row ---------- */

export const PlatformRowWrap = styled(Box)({
  marginBottom: 16,
});

export const PlatformRowTop = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 6,
  gap: 12,
});

export const PlatformLeft = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 8,
  minWidth: 0,
});

export const PlatformRight = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 8,
});

export const PlatformValue = styled(Typography)({
  fontSize: 14,
  fontWeight: 500,
  color: "#101828",
});
export const PlatformName = styled(Typography)({
  fontSize: 14,
  color: "#475467",
  whiteSpace: "nowrap",
});

export const StatsList = styled(Box)({
  marginTop: 12,
});
export const PlatformPercent = styled(Typography)({
  fontSize: 14,
  color: "#98A2B3",
  minWidth: 40,
  textAlign: "right",
});

/* ---------- Stats header ---------- */

export const StatsHeaderLabel = styled(Typography)({
  fontSize: 14,
  color: "#98A2B3",
  lineHeight: 1.2,
});

export const StatsHeaderValue = styled(Typography)({
  fontSize: 31,
  fontWeight: 600,
  color: "#101828",
  marginTop: 2,
});

/* ---------- Select render value ---------- */

export const SelectRenderWrap = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 8,
});
export const DescriptionText = styled(Typography)({
  fontSize: "14px",
  fontWeight: 400,
  color: "#98A2B3",
  lineHeight: 1.2,
});

export const TrendBadgeWrap = styled(Box)<{ trend: "up" | "down" }>(({
  trend,
}) => {
  const isUp = trend === "up";

  return {
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    padding: "3px 7px",
    borderRadius: "999px",
    backgroundColor: isUp ? "#ECFDF3" : "#FEF3F2",
    color: isUp ? "#12B76A" : "#F04438",
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: 1,
    whiteSpace: "nowrap",
  };
});
export const DashboardGrid = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) 322px",
  gap: "16px",

  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const Card = styled(Box)({
  width: "100%",
  height: "100%",
  backgroundColor: "#FFFFFF",
  border: "1px solid #D9E2F2",
  borderRadius: "12px",
});

export const ChartCard = styled(Card)({
  padding: "14px 16px 10px 16px",
});

export const StatsCard = styled(Card)({
  padding: "14px",
});

export const HeaderRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  flexWrap: "wrap",
  marginBottom: "16px",
});

export const Title = styled(Typography)({
  fontSize: "24px",
  fontWeight: 600,
  color: "#101828",
});

export const ControlsRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  flexWrap: "wrap",
});

export const StyledSelect = styled(Select)({
  height: 40,
  borderRadius: "10px",
  backgroundColor: "#FFFFFF",
  color: "#101828",
  fontSize: "14px",

  ".MuiOutlinedInput-notchedOutline": {
    borderColor: "#D0D5DD",
  },

  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#D0D5DD",
  },
});

export const SmallSelect = styled(StyledSelect)({
  minWidth: 96,
  height: 32,
  borderRadius: "8px",
});

export const ChartBox = styled(Box)({
  width: "100%",
  height: 330,
});

export const LegendWrap = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const LegendLine = styled(Box)<{ linecolor: string }>(
  ({ linecolor }) => ({
    width: 3,
    height: 13,
    borderRadius: "999px",
    backgroundColor: linecolor,
  }),
);

export const LegendText = styled(Typography)({
  fontSize: "14px",
  fontWeight: 500,
  color: "#475467",
});

export const PlatformLogoBox = styled(Box)<{
  logobg: string;
  logocolor?: string;
  logoborder?: string;
}>(({ logobg, logocolor = "#fff", logoborder }) => ({
  width: 16,
  height: 16,
  borderRadius: "4px",
  backgroundColor: logobg,
  border: logoborder ? `1px solid ${logoborder}` : "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "9px",
  fontWeight: 700,
  color: logocolor,
  textTransform: "uppercase",
  flexShrink: 0,
}));

export const ProgressBg = styled(Box)({
  width: "100%",
  height: 20,
  backgroundColor: "#EAEEF4",
  borderRadius: "4px",
  overflow: "hidden",
  position: "relative",
});

export const ProgressFill = styled(Box)<{
  percent: number;
  fillcolor: string;
}>(({ percent, fillcolor }) => ({
  width: `${percent}%`,
  minWidth: "60px",
  height: "100%",
  backgroundColor: fillcolor,
  borderRadius: "4px",
  position: "relative",
}));

export const ProgressDot = styled(Box)({
  width: 6,
  height: 6,
  borderRadius: "50%",
  backgroundColor: "#F9FAFB",
  position: "absolute",
  right: 8,
  top: "50%",
  transform: "translateY(-50%)",
  opacity: 0.95,
});
export const PageWrapper = styled(Box)({
  width: "100%",
  minHeight: "100vh",
  background: "#f5f7fb",
  padding: "16px",
  boxSizing: "border-box",
});

export const ContentCard = styled(Box)({
  width: "100%",
  background: "#ffffff",
  border: "1px solid #dfe5ec",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 1px 2px rgba(16, 24, 40, 0.04)",
});

export const Header = styled(Box)({
  padding: "14px 18px",
  borderBottom: "1px solid #e6ebf1",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "12px",
});

export const ImportButton = styled(Button)({
  minWidth: "156px",
  height: "38px",
  textTransform: "none",
  borderRadius: "10px",
  background: "#00695c",
  color: "#fff",
  fontWeight: 600,
  boxShadow: "none",
  padding: "0 16px",
  "&:hover": {
    background: "#005247",
    boxShadow: "none",
  },
});
export const Toolbar = styled(Box)({
  padding: "14px 16px",
  borderBottom: "1px solid #e6ebf1",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  flexWrap: "wrap",
});
export const LeftTools = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  flexWrap: "wrap",
});
export const RightTools = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  flexWrap: "wrap",
  marginLeft: "auto",
});
export const SearchBox = styled(Box)({
  width: "530px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  border: "1px solid #d9e0e7",
  borderRadius: "10px",
  background: "#fff",
  padding: "0 14px",
  boxSizing: "border-box",
});
export const SearchInput = styled(InputBase)({
  flex: 1,
  fontSize: "14px",
  color: "#344054",
  "& input::placeholder": {
    color: "#98a2b3",
    opacity: 1,
  },
});
export const ToolButton = styled(Button)({
  height: "40px",
  minWidth: "96px",
  borderRadius: "10px",
  border: "1px solid #d9e0e7",
  background: "#fff",
  color: "#344054",
  textTransform: "none",
  fontSize: "14px",
  fontWeight: 500,
  boxShadow: "none",
  padding: "0 14px",
  "&:hover": {
    background: "#f9fafb",
    borderColor: "#cfd8e3",
    boxShadow: "none",
  },
});
export const HotkeyBox = styled(Box)({
  minWidth: "48px",
  height: "24px",
  borderRadius: "8px",
  border: "1px solid #e4e7ec",
  background: "#f8fafc",
  color: "#667085",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "12px",
  fontWeight: 600,
});
export const StyledTableContainer = styled(TableContainer)({
  width: "100%",
  overflowX: "auto",
});
export const StyledHead = styled(TableHead)({
  background: "#f8fafc",
});
export const StyledHeadRow = styled(TableRow)({
  "& .MuiTableCell-root": {
    borderBottom: "1px solid #e6ebf1",
  },
});
export const HeadCell = styled(TableCell)({
  padding: "12px 12px",
  fontSize: "13px",
  fontWeight: 600,
  color: "#667085",
  whiteSpace: "nowrap",
  background: "#f8fafc",
});
export const BodyCell = styled(TableCell)({
  padding: "8px 12px",
  fontSize: "13px",
  color: "#344054",
  borderBottom: "1px solid #e6ebf1",
  verticalAlign: "middle",
});

export const GroupRow = styled(TableRow)({
  background: "#f9fafb",
  "& .MuiTableCell-root": {
    borderBottom: "1px solid #e6ebf1",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
});

export const GroupTitle = styled(Box)({
  fontSize: "13px",
  fontWeight: 700,
  color: "#344054",
  textTransform: "uppercase",
});

export const ProductCell = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  minWidth: 0,
});
export const ProductImage = styled("img")({
  width: "22px",
  height: "22px",
  borderRadius: "4px",
  objectFit: "cover",
  border: "1px solid #d0d5dd",
  flexShrink: 0,
});
export const ProductName = styled(Box)({
  fontSize: "13px",
  color: "#344054",
  lineHeight: 1.35,
});
export const QuantityInput = styled(InputBase)({
  width: "96px",
  height: "34px",
  border: "1px solid #d0d5dd",
  borderRadius: "6px",
  background: "#fff",
  padding: "0 10px",
  fontSize: "13px",
  color: "#344054",
  "& input": {
    textAlign: "left",
  },
});
export const Footer = styled(Box)({
  height: "56px",
  padding: "0 16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
});

export const FooterLeft = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  color: "#667085",
  fontSize: "13px",
});

export const RowsButton = styled(Button)({
  minWidth: "62px",
  height: "32px",
  borderRadius: "8px",
  border: "1px solid #d0d5dd",
  background: "#fff",
  color: "#344054",
  textTransform: "none",
  fontSize: "13px",
  fontWeight: 500,
  boxShadow: "none",
});

export const FooterRight = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const PageText = styled(Box)({
  fontSize: "13px",
  color: "#667085",
});

export const ArrowButton = styled(IconButton)({
  width: "28px",
  height: "28px",
  borderRadius: "6px",
  color: "#667085",
});

export const StyledPagination = styled(Pagination)({
  "& .MuiPagination-ul": {
    gap: "2px",
  },
  "& .MuiPaginationItem-root": {
    minWidth: "28px",
    height: "28px",
    borderRadius: "6px",
    fontSize: "13px",
    color: "#667085",
  },
  "& .Mui-selected": {
    background: "#eef2ff",
    color: "#3538cd",
    fontWeight: 600,
  },
});
