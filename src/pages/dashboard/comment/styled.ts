import { Box, Button, InputBase, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
type CollapsedProps = {
  collapsed?: boolean;
};

export const Page = styled(Box)(() => ({
  width: "100%",
  minHeight: "100%",
  height: "100%",
  background: "#F6F9FC",
  overflow: "visible",

  "@media (max-width: 900px)": {
    height: "auto",
    overflow: "visible",
  },
}));

export const Header = styled(Box, {
  shouldForwardProp: (prop) => prop !== "collapsed",
})<CollapsedProps>(({ collapsed }) => ({
  position: "sticky",
  top: 0,
  zIndex: 15,
  height: 50,
  background: "#fff",
  borderBottom: "1px solid #E0E7EF",

  display: "flex",
  alignItems: "center",

  padding: "0 18px",
  boxSizing: "border-box",

  paddingLeft: collapsed ? "clamp(68px, 78vw, 1228px)" : "48px",

  transition: "all 0.3s ease",

  "@media (max-width: 900px)": {
    paddingLeft: collapsed ? "clamp(68px, 78vw, 1228px)" : "48px",
  },

  "@media (max-width: 480px)": {
    height: 48,
    paddingLeft: collapsed ? "clamp(68px, 78vw, 1228px)" : "48px",
  },
}));
export const Title = styled(Typography)(() => ({
  fontSize: 17,
  fontWeight: 800,
  color: "#101828",

  "@media (max-width: 480px)": {
    fontSize: 16,
  },
}));

export const TabsWrap = styled(Box)(() => ({
  height: 52,
  background: "#fff",
  borderBottom: "1px solid #E0E7EF",
  display: "flex",
  alignItems: "center",
  gap: 34,
  padding: "0 18px",
  boxSizing: "border-box",
  overflowX: "auto",
  overflowY: "hidden",
  scrollbarWidth: "none",

  "&::-webkit-scrollbar": {
    display: "none",
  },

  "@media (max-width: 700px)": {
    gap: 20,
    padding: "0 14px",
  },
}));

export const TabButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>(({ active }) => ({
  minWidth: "auto",
  height: 52,
  padding: "15px 0 14px",
  borderRadius: 0,
  background: "transparent",
  color: active ? "#00524F" : "#667085",
  borderBottom: active ? "2px solid #00524F" : "2px solid transparent",
  textTransform: "none",
  fontSize: 13,
  fontWeight: active ? 800 : 600,
  whiteSpace: "nowrap",
  flexShrink: 0,

  "&:hover": {
    background: "transparent",
  },
}));

export const CountBadge = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(({ active }) => ({
  marginLeft: 5,
  minWidth: 22,
  height: 18,
  padding: "0 5px",
  borderRadius: 999,
  background: active ? "#FFD600" : "#EAF0F7",
  color: active ? "#101828" : "#667085",
  fontSize: 10,
  fontWeight: 800,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const Toolbar = styled(Box)(() => ({
  height: 72,
  background: "#F6F9FC",
  display: "flex",
  alignItems: "center",
  gap: 12,
  padding: "0 18px",
  boxSizing: "border-box",

  "@media (max-width: 700px)": {
    height: "auto",
    padding: "14px",
    alignItems: "stretch",
    flexDirection: "column",
  },
}));

export const SearchBox = styled(Box)(() => ({
  width: "min(585px, 100%)",
  height: 40,
  border: "1px solid #DCE5EF",
  borderRadius: 8,
  background: "#fff",
  display: "flex",
  alignItems: "center",
  padding: "0 12px",
  boxSizing: "border-box",
  minWidth: 0,
}));

export const SearchInput = styled(InputBase)(() => ({
  flex: 1,
  marginLeft: 8,
  fontSize: 13,
  color: "#101828",

  "& input::placeholder": {
    color: "#8EA0B8",
    opacity: 1,
  },
}));

export const Shortcut = styled(Box)(() => ({
  fontSize: 12,
  color: "#667085",
  background: "#F3F6FA",
  border: "1px solid #DCE5EF",
  borderRadius: 5,
  padding: "2px 6px",
  whiteSpace: "nowrap",

  "@media (max-width: 420px)": {
    display: "none",
  },
}));

export const FilterButton = styled(Button)(() => ({
  height: 40,
  padding: "0 15px",
  borderRadius: 8,
  border: "1px solid #DCE5EF",
  background: "#fff",
  color: "#101828",
  textTransform: "none",
  fontSize: 13,
  fontWeight: 600,

  "&:hover": {
    background: "#fff",
  },

  "@media (max-width: 700px)": {
    width: "100%",
    justifyContent: "center",
  },
}));

export const Content = styled(Box)(() => ({
  height: "calc(100vh - 174px)",
  padding: "0 18px 16px",
  boxSizing: "border-box",
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) minmax(320px, 420px)",
  gap: 16,

  "@media (max-width: 1100px)": {
    gridTemplateColumns: "minmax(0, 1fr) 360px",
  },

  "@media (max-width: 900px)": {
    height: "auto",
    gridTemplateColumns: "1fr",
    padding: "0 14px 16px",
  },
}));

export const TableCard = styled(Box)(() => ({
  height: "100%",
  background: "#fff",
  border: "1px solid #DCE5EF",
  borderRadius: 8,
  overflow: "auto",
  minWidth: 0,

  "@media (max-width: 900px)": {
    height: "min(460px, 62vh)",
  },
}));

export const TableHeader = styled(Box)(() => ({
  height: 44,
  display: "grid",
  gridTemplateColumns:
    "minmax(135px, 0.85fr) minmax(180px, 1.25fr) minmax(120px, 0.8fr) minmax(220px, 1.4fr)",
  borderBottom: "1px solid #DCE5EF",
  background: "#FBFCFE",
  minWidth: 720,
}));

export const Th = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  padding: "0 12px",
  borderRight: "1px solid #DCE5EF",
  fontSize: 12,
  fontWeight: 600,
  color: "#667085",

  "&:last-of-type": {
    borderRight: 0,
  },
}));

export const TableBody = styled(Box)(() => ({
  height: "calc(100% - 44px)",
  overflowY: "auto",
  minWidth: 720,

  "&::-webkit-scrollbar": {
    width: 6,
  },

  "&::-webkit-scrollbar-thumb": {
    background: "#D0D8E3",
    borderRadius: 10,
  },
}));

export const TableRow = styled(Box, {
  shouldForwardProp: (prop) => prop !== "selected",
})<{ selected: boolean }>(({ selected }) => ({
  minHeight: 42,
  display: "grid",
  gridTemplateColumns:
    "minmax(135px, 0.85fr) minmax(180px, 1.25fr) minmax(120px, 0.8fr) minmax(220px, 1.4fr)",
  borderBottom: "1px solid #DCE5EF",
  background: "#fff",
  cursor: "pointer",
  minWidth: 720,

  "&:hover": {
    background: selected ? "#D7ECE6" : "#F7FAFC",
  },
}));

export const Td = styled(Box)(() => ({
  minWidth: 0,
  display: "flex",
  alignItems: "center",
  padding: "0 12px",
  borderRight: "1px solid #DCE5EF",
  fontSize: 12,
  color: "#101828",

  "&:last-of-type": {
    borderRight: 0,
  },
}));

export const ProductCell = styled(Box)(() => ({
  minWidth: 0,
  display: "flex",
  alignItems: "center",
  gap: 8,
}));

export const ProductImg = styled("img")(() => ({
  width: 28,
  height: 28,
  borderRadius: 2,
  objectFit: "cover",
  flexShrink: 0,
}));

export const ProductTexts = styled(Box)(() => ({
  minWidth: 0,
}));

export const EllipsisText = styled(Typography)(() => ({
  fontSize: 12,
  color: "#101828",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

export const SmallMuted = styled(Typography)(() => ({
  fontSize: 11,
  color: "#667085",
}));

export const MarketCell = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: 7,
  minWidth: 0,
}));

export const UzumIcon = styled(Box)(() => ({
  width: 18,
  height: 18,
  borderRadius: 5,
  background: "linear-gradient(135deg,#7B1BFF,#8D35FF)",
  color: "#FFD600",
  fontSize: 10,
  fontWeight: 900,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const Stars = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: 1,
  color: "#F5A623",

  "& svg": {
    fontSize: 15,
  },
}));

export const ReviewPanel = styled(Box)(() => ({
  height: "100%",
  display: "grid",
  gridTemplateRows: "1fr 66px",
  gap: 10,
  minWidth: 0,

  "@media (max-width: 900px)": {
    height: "auto",
    gridTemplateRows: "auto 58px",
  },

  "@media (max-width: 520px)": {
    gridTemplateRows: "auto auto",
  },
}));

export const DetailCard = styled(Box)(() => ({
  background: "#fff",
  border: "1px solid #DCE5EF",
  borderRadius: 8,
  padding: 16,
  boxSizing: "border-box",
  overflow: "auto",

  "@media (max-width: 520px)": {
    padding: 14,
  },
}));

export const DetailTitle = styled(Typography)(() => ({
  fontSize: 15,
  fontWeight: 800,
  color: "#101828",
  marginBottom: 18,
}));

export const ReviewMiniCard = styled(Box)(() => ({
  background: "#EEF2F6",
  borderRadius: 6,
  padding: 12,
  boxSizing: "border-box",
  display: "flex",
  gap: 8,
  marginBottom: 15,
  minWidth: 0,
}));

export const DetailRow = styled(Box)(() => ({
  minHeight: 43,
  display: "grid",
  gridTemplateColumns: "150px 1fr",
  alignItems: "center",
  borderBottom: "1px solid #EEF2F6",

  "&:last-of-type": {
    borderBottom: 0,
  },

  "@media (max-width: 520px)": {
    gridTemplateColumns: "1fr",
    alignItems: "start",
    gap: 4,
    padding: "8px 0",
  },
}));

export const DetailLabel = styled(Typography)(() => ({
  fontSize: 12,
  color: "#667085",
}));

export const DetailValue = styled(Box)(() => ({
  fontSize: 12,
  color: "#101828",
  textAlign: "right",
  display: "flex",
  justifyContent: "flex-end",
  minWidth: 0,
  overflowWrap: "anywhere",

  "@media (max-width: 520px)": {
    textAlign: "left",
    justifyContent: "flex-start",
  },
}));

export const MissingText = styled(DetailValue)(() => ({
  color: "#E53935",
}));

export const ReplyBox = styled(Box)(() => ({
  background: "#fff",
  border: "1px solid #DCE5EF",
  borderRadius: 8,
  display: "flex",
  alignItems: "center",
  padding: "0 10px",
  boxSizing: "border-box",
  gap: 8,
  minWidth: 0,

  "@media (max-width: 520px)": {
    alignItems: "stretch",
    flexWrap: "wrap",
    padding: 10,
  },
}));

export const ReplyInput = styled(InputBase)(() => ({
  flex: 1,
  minWidth: 120,
  fontSize: 13,
  color: "#101828",

  "& input::placeholder": {
    color: "#98A2B3",
    opacity: 1,
  },
}));

export const SendButton = styled(Button)(() => ({
  minWidth: 74,
  height: 36,
  borderRadius: 8,
  background: "#00524F",
  color: "#fff",
  textTransform: "none",
  fontSize: 12,
  fontWeight: 700,

  "&:hover": {
    background: "#00524F",
  },

  "@media (max-width: 520px)": {
    width: "100%",
  },
}));
