import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Modal,
  Select,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
const BORDER = "#E4E7EC";
const BG = "#F5F7FA";
const WHITE = "#F7F9FB";
const TEXT_PRIMARY = "#111827";
const TEXT_SECONDARY = "#596881";
const TEXT_DARK = "#344054";
const ACTIVE = "#0F766E";
const BADGE = "#FACC15";
const SOFT = "#EEF2F6";
export const DashboardWrap = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  height: "100vh",
  minHeight: "100vh",
  maxHeight: "100vh",
  overflow: "hidden",
  background: BG,
}));
export const ContentWrap = styled(Box)(() => ({
  flex: 1,
  minWidth: 0,
  height: "100vh",
  minHeight: "100vh",
  maxHeight: "100vh",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  background: BG,
}));
export const OrdersContainer = styled(Box)(() => ({
  flex: 1,
  minHeight: 0,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
}));
export const OrdersCard = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  minHeight: 0,
  background: "#F7F9FB",
  borderLeft: `1px solid ${BORDER}`,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
}));
export const TitleRow = styled(Box)(() => ({
  height: 54,
  minHeight: 44,
  display: "flex",
  alignItems: "center",
  padding: "0 16px",
  borderBottom: `1px solid ${BORDER}`,
  background: "#F7F9FB",
  boxSizing: "border-box",
}));
export const TitleText = styled(Typography)(() => ({
  lineHeight: "20px",
  fontWeight: 600,
  fontFamily: "inter",
}));
export const TabsRow = styled(Box)(() => ({
  height: 42,
  minHeight: 42,
  display: "flex",
  alignItems: "center",
  marginTop: "10px",
  gap: 32,
  padding: "0 20px",
  borderBottom: `1px solid ${BORDER}`,
  background: WHITE,
  overflowY: "hidden",
  scrollbarWidth: "none",
  boxSizing: "border-box",
  "&::-webkit-scrollbar": {
    display: "none",
  },
}));
export const TabItem = styled(Box)<{ active?: boolean }>(({ active }) => ({
  height: "100%",
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  paddingBottom: 8,
  borderBottom: active ? `2px solid ${ACTIVE}` : "2px solid transparent",
  cursor: "pointer",
  whiteSpace: "nowrap",
  boxSizing: "border-box",
}));
export const TabText = styled(Typography)<{ active?: boolean }>(
  ({ active }) => ({
    fontSize: "14px",
    lineHeight: "18px",
    fontFamily: "inter",
    fontWeight: active ? 600 : 500,
    color: active ? "#134E4A" : TEXT_SECONDARY,
  }),
);
export const TabCount = styled(Box)<{ active?: boolean }>(({ active }) => ({
  minWidth: 20,
  height: 20,
  padding: "0 6px",
  borderRadius: 999,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "11px",
  lineHeight: "11px",
  fontWeight: 600,
  color: TEXT_PRIMARY,
  background: active ? BADGE : SOFT,
  boxSizing: "border-box",
}));
export const ToolbarRow = styled(Box)(() => ({
  height: 60,
  minHeight: 60,
  display: "flex",
  alignItems: "center",
  gap: 12,
  padding: "0 16px",
  borderBottom: `1px solid ${BORDER}`,
  background: "neutral/50",
  boxSizing: "border-box",
}));
export const SearchBox = styled(Box)(() => ({
  width: 659,
  maxWidth: "100%",
  height: 40,
  border: `1px solid ${BORDER}`,
  borderRadius: 10,
  background: "#F7F9FB",
  display: "flex",
  alignItems: "center",
  padding: "0 14px",
  boxSizing: "border-box",
}));
export const SearchInput = styled("input")(() => ({
  flex: 1,
  width: "100%",
  height: "100%",
  border: "none",
  outline: "none",
  background: "transparent",
  fontSize: "14px",
  lineHeight: "18px",
  color: TEXT_DARK,
  padding: 0,
  margin: 0,
  "::placeholder": {
    color: "#98A2B3",
    opacity: 1,
  },
}));
export const ShortcutText = styled(Box)(() => ({
  fontSize: "12px",
  lineHeight: "16px",
  color: "#98A2B3",
  background: "#F7F9FB",
  borderRadius: "6px",
  padding: "2px 5px",
  whiteSpace: "nowrap",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
}));
export const InputIcon = styled(Box)(() => ({
  fontSize: "15px",
  marginTop: 4,
}));
export const FilterButton = styled(Button)(() => ({
  display: "flex",
  gap: 5,
  minWidth: "auto",
  height: 40,
  padding: "0 16px",
  borderRadius: 10,
  border: `1px solid ${BORDER}`,
  background: WHITE,
  color: TEXT_DARK,
  textTransform: "none",
  fontSize: "14px",
  lineHeight: "18px",
  fontWeight: 500,
  boxShadow: "none",
  "&:hover": {
    background: WHITE,
    boxShadow: "none",
    borderColor: "#D0D5DD",
  },
}));
export const TableArea = styled(Box)(() => ({
  flex: 1,
  minHeight: 0,
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  background: "#F7F9FB",
}));
export const TableWrap = styled(Box)(() => ({
  flex: 1,
  minHeight: 0,
  width: "100%",
  padding: "14px 12px 0 12px",
  boxSizing: "border-box",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
}));
export const StyledTableContainer = styled(TableContainer)(() => ({
  width: "100%",
  flex: 1,
  background: WHITE,
  border: `1px solid ${BORDER}`,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  overflow: "auto",
  boxShadow: "none",
}));
export const HeaderCell = styled(TableCell)(() => ({
  background: "#F7F9FB",
  padding: "0 14px",
  height: 50,
  borderBottom: `1px solid ${BORDER}`,
  borderRight: `1px solid ${BORDER}`,
  fontSize: "12px",
  lineHeight: "16px",
  fontWeight: 400,
  color: TEXT_SECONDARY,
  whiteSpace: "nowrap",
  verticalAlign: "middle",
  boxSizing: "border-box",
  "&:last-of-type": {
    borderRight: "none",
  },
}));
export const BodyRow = styled(TableRow)(() => ({
  height: 46,
  background: WHITE,
}));
export const BodyCell = styled(TableCell)(() => ({
  padding: "5.4px 14px",
  height: 46,
  borderBottom: `1px solid ${BORDER}`,
  borderRight: `1px solid ${BORDER}`,
  fontSize: "14px",
  lineHeight: "18px",
  fontWeight: 400,
  color: TEXT_DARK,
  verticalAlign: "middle",
  background: WHITE,
  boxSizing: "border-box",
  "&:last-of-type": {
    borderRight: "none",
  },
}));
export const OrderText = styled(Typography)(() => ({
  fontSize: "12px",
  lineHeight: "18px",
  color: "black",
  whiteSpace: "nowrap",
}));
export const MarketplaceWrap = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: 8,
  minWidth: 0,
}));
export const MarketplaceLogo = styled(Box)(() => ({
  width: 20,
  height: 20,
  borderRadius: 4,
  overflow: "hidden",
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& img, & svg": {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    display: "block",
  },
}));
export const MarketplaceName = styled(Typography)(() => ({
  fontSize: "14px",
  lineHeight: "18px",
  color: TEXT_DARK,
  whiteSpace: "nowrap",
}));
export const ProductWrap = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-start",
  gap: 10,
  minWidth: 0,
}));
export const ProductImage = styled(Box)(() => ({
  width: 22,
  height: 28,
  minWidth: 22,
  borderRadius: 4,
  overflow: "hidden",
  background: "#F2F4F7",
  border: `1px solid ${BORDER}`,
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
}));
export const ProductInfo = styled(Box)(() => ({
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
}));
export const ProductTitleRow = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: 6,
  minWidth: 0,
}));
export const ProductTitle = styled(Typography)(() => ({
  fontSize: "14px",
  lineHeight: "18px",
  color: TEXT_DARK,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));
export const ProductExtraBadge = styled(Box)(() => ({
  minWidth: 24,
  height: 18,
  padding: "0 5px",
  borderRadius: 5,
  background: SOFT,
  color: TEXT_SECONDARY,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "11px",
  lineHeight: "11px",
  fontWeight: 600,
  flexShrink: 0,
}));
export const ProductCount = styled(Typography)(() => ({
  fontSize: "12px",
  lineHeight: "16px",
  color: TEXT_SECONDARY,
  marginTop: 2,
}));
export const ShopText = styled(Typography)(() => ({
  fontSize: "14px",
  lineHeight: "18px",
  color: TEXT_DARK,
  whiteSpace: "nowrap",
}));
export const MethodText = styled(Typography)(() => ({
  fontSize: "14px",
  lineHeight: "18px",
  color: TEXT_DARK,
  whiteSpace: "nowrap",
}));
export const DateText = styled(Typography)(() => ({
  fontSize: "14px",
  lineHeight: "18px",
  color: TEXT_DARK,
  whiteSpace: "nowrap",
}));
export const PaginationWrap = styled(Box)(() => ({
  height: 48,
  minHeight: 48,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 14px",
  border: `1px solid ${BORDER}`,
  borderTop: "none",
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  background: WHITE,
  boxSizing: "border-box",
  marginBottom: "10px",
}));
export const PaginationLeft = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: 10,
}));
export const PaginationLabel = styled(Typography)(() => ({
  fontSize: "14px",
  lineHeight: "18px",
  color: TEXT_SECONDARY,
}));
export const StyledRowsSelect = styled(Select)(() => ({
  height: 32,
  minWidth: 60,
  borderRadius: 8,
  fontSize: "14px",
  color: TEXT_DARK,
  background: WHITE,
  ".MuiSelect-select": {
    padding: "6px 28px 6px 12px",
    display: "flex",
    alignItems: "center",
  },
  fieldset: {
    borderColor: BORDER,
  },
}));
export const StyledRowsMenuItem = styled(MenuItem)(() => ({
  fontSize: "14px",
}));
export const PaginationInfo = styled(Typography)(() => ({
  fontSize: "14px",
  lineHeight: "18px",
  color: TEXT_PRIMARY,
}));
export const PaginationRight = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: 8,
}));
export const PageButton = styled(IconButton)<{ active?: boolean }>(
  ({ active }) => ({
    width: 28,
    height: 28,
    borderRadius: 8,
    color: active ? TEXT_DARK : TEXT_SECONDARY,
    background: active ? SOFT : "transparent",
    "&:hover": {
      background: active ? SOFT : "#F9FAFB",
    },
  }),
);
export const PageTextButton = styled(Box)<{ active?: boolean }>(
  ({ active }) => ({
    minWidth: 28,
    height: 28,
    padding: "0 6px",
    borderRadius: 8,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "13px",
    lineHeight: "16px",
    color: active ? TEXT_DARK : TEXT_SECONDARY,
    background: active ? SOFT : "transparent",
    cursor: "pointer",
    userSelect: "none",
  }),
);
export const EllipsisText = styled(Typography)(() => ({
  fontSize: "13px",
  lineHeight: "16px",
  color: TEXT_SECONDARY,
}));
export const FilterModalWrapper = styled(Modal)({});

/* MAIN CONTAINER */
export const FilterContainer = styled(Box)({
  width: 673,
  height: 408,
  backgroundColor: "#fff",
  borderRadius: "12px",
  boxShadow: 24,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
});

/* HEADER */
export const FilterHeader = styled(Box)({
  padding: "12px 16px",
  height: "72px",
  borderBottom: "1px solid #eee",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const FilterHeaderText = styled(Box)({});

/* BODY */
export const FilterBody = styled(Box)({
  display: "flex",
  flex: 1,
});

/* LEFT */
export const FilterSidebar = styled(Box)({
  width: 220,
  borderRight: "1px solid #eee",
  padding: 8,
});

export const FilterSidebarItem = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 8,
  padding: "10px",
  borderRadius: 4,
  cursor: "pointer",
  height: "55px",
  "&:hover": {
    backgroundColor: "#f5f5f5",
  },
});

/* RIGHT */
export const FilterContent = styled(Box)({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "center",
  padding: 16,
});

export const FilterIconBox = styled(Box)({
  width: 50,
  height: 50,
  borderRadius: 8,
  backgroundColor: "#0f766e",
  marginBottom: 16,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

/* FOOTER */
export const FilterFooter = styled(Box)({
  padding: 12,
  borderTop: "1px solid #eee",
  display: "flex",
  justifyContent: "flex-end",
  gap: 8,
});

export const FilterCancelButton = styled(Button)({
  border: "1px solid #E6E6F6",
  color: "black",
});

export const FilterApplyButton = styled(Button)({});
