// import { Box, InputBase, styled, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import InputBase from "@mui/material/InputBase";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

/* top level */
export const PageBg = styled(Box)`
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  select:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
    box-shadow: 0 0 0px 1000px transparent inset !important;
    -webkit-text-fill-color: #000 !important;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const HeaderBar = styled(Box)({
  display: "flex",
  height: "56px",
  borderBottom: "1px solid #E0E6F0",
  padding: "16px",
  alignItems: "center",
  justifyContent: "space-between",
});

export const HeaderTitle = styled(Typography)({
  fontWeight: 600,
  fontFamily: "inter",
});

export const ImportLink = styled(Link)({
  display: "flex",
  background: "#00524F",
  alignItems: "center",
  justifyContent: "center",
  height: "32px",
  borderRadius: "8px",
  color: "white",
  width: "137px",
  gap: "6px",
  textDecoration: "none",
});

export const ImportText = styled(Typography)({
  fontSize: "12px",
});

/* search section */
export const ToolbarSection = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "16px",
  borderBottom: "1px solid #E0E6F0",
});

export const ToolbarLeft = styled(Box)({
  display: "flex",
  gap: "10px",
});

export const ToolbarRight = styled(Box)({
  display: "flex",
  gap: "10px",
});

export const FilterAction = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyItems: "center",
  gap: "8px",
  textDecoration: "none",
  color: "black",
  border: "1px solid #E0E6F0",
  borderRadius: "10px",
  padding: "10px",
  height: "40px",
  cursor: "pointer",
  boxSizing: "border-box",
});

export const ToolbarLink = styled(Link)({
  display: "flex",
  alignItems: "center",
  justifyItems: "center",
  gap: "8px",
  textDecoration: "none",
  color: "black",
  border: "1px solid #E0E6F0",
  borderRadius: "10px",
  padding: "10px",
  height: "40px",
  fontSize: "14px",
  fontWeight: 500,
  fontFamily: "inter",
  boxSizing: "border-box",
});

export const ToolbarAction = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyItems: "center",
  gap: "8px",
  textDecoration: "none",
  color: "black",
  border: "1px solid #E0E6F0",
  borderRadius: "10px",
  padding: "10px",
  height: "40px",
  fontSize: "14px",
  fontWeight: 500,
  fontFamily: "inter",
  cursor: "pointer",
  boxSizing: "border-box",
});

/* modal */
export const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid white",
});

export const ModalCard = styled(Box)({
  width: "673px",
  backgroundColor: "#FFFFFF",
  borderRadius: "12px",
});

export const ModalHeader = styled(Box)({
  display: "flex",
  height: "64px",
  borderBottom: "1px solid #E0E6F0",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "24px",
  boxSizing: "border-box",
});

export const ModalTitle = styled(Typography)({
  fontWeight: 600,
  fontFamily: "inter",
});

export const ModalCloseButton = styled(Button)({
  minWidth: "32px",
  width: "32px",
  height: "32px",
  borderRadius: "8px",
  border: "1px solid #E0E6F0",
  padding: 0,
  "&:hover": {
    backgroundColor: "#E4E7EC",
  },
});

export const ModalInfoBox = styled(Box)({
  background: "#F7F9FB",
  margin: "20px",
  display: "flex",
  borderRadius: "8px",
  gap: "12px",
  padding: "12px",
  boxSizing: "border-box",
});

export const ModalInfoIconWrap = styled(Box)({
  minWidth: "13px",
  height: "13px",
});

export const ModalInfoText = styled(Typography)({
  fontSize: "14px",
  color: "#8796AF",
  fontWeight: 400,
  fontFamily: "inter",
});

export const ModalFieldSection = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  margin: "16px 20px",
});

export const ModalFieldTitle = styled(Typography)({
  fontSize: "14px",
  fontWeight: 600,
  fontFamily: "inter",
  paddingLeft: "4px",
});

export const ModalFooter = styled(Box)({
  height: "68px",
  borderTop: "1px solid #E0E6F0",
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  padding: "10px 20px",
  gap: "8px",
  boxSizing: "border-box",
});

export const ModalCancelButton = styled(Button)({
  textTransform: "none",
  border: "1px solid #E0E6F0",
  borderRadius: "8px",
  fontSize: "14px",
  fontFamily: "inter",
  color: "black",
});

export const ModalSaveButton = styled(Button)({
  maxWidth: "76px",
  height: "40px",
  borderRadius: "8px",
  fontSize: "14px",
  fontFamily: "inter",
  textTransform: "none",
  boxShadow: "none",
  marginTop: "18px",
});

/* table header text with sort icon */
export const SortHeaderWrap = styled(Box)({
  display: "inline-flex",
  alignItems: "center",
  gap: "4px",
});
export const StyledInput = styled(InputBase)({
  width: 559,
  height: "40px",
  border: "1px solid #D0D5DD",
  borderRadius: "8px",
  padding: "0 12px",
  background: "#ffffff",
  "& .MuiInputBase-input": {
    fontSize: "14px",
    padding: 0,
  },
  "& .MuiInputAdornment-root": {
    color: "#98A2B3",
    marginRight: "8px",
  },
});
export const StyledField = styled(InputBase)({
  width: "625px",
  height: "40px",
  border: "1px solid #D0D5DD",
  borderRadius: "10px",
  padding: "0px 10px",
  "& input:-webkit-autofill": {
    WebkitBoxShadow: "0 0 0px 1000px transparent inset !important",
    boxShadow: "0 0 0px 1000px transparent inset !important",
    WebkitTextFillColor: "#000 !important",
    transition: "background-color 5000s ease-in-out 0s",
  },

  "& input:-webkit-autofill:hover": {
    WebkitBoxShadow: "0 0 0px 1000px transparent inset !important",
    boxShadow: "0 0 0px 1000px transparent inset !important",
    WebkitTextFillColor: "#000 !important",
  },

  "& input:-webkit-autofill:focus": {
    WebkitBoxShadow: "0 0 0px 1000px transparent inset !important",
    boxShadow: "0 0 0px 1000px transparent inset !important",
    WebkitTextFillColor: "#000 !important",
  },
});
export const TableAreaHouse = styled(Box)({
  flex: 1,
  minHeight: 600,
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  background: "#E0E6F0",
});

export const PageWrapper = styled(Box)({
  width: "100%",
  minHeight: "80vh",
  backgroundColor: "#F5F7FA",
  padding: "12px",
  boxSizing: "border-box",
});

export const CardWrapper = styled(Box)({
  width: "100%",
  background: "#FFFFFF",
  border: "1px solid #D7DFE9",
  borderRadius: "10px",
  overflow: "hidden",
});

export const StyledTableContainer = styled(TableContainer)({
  borderRadius: "10px 10px 0 0",
});

export const StyledTable = styled(Table)({
  minWidth: 1100,
  borderCollapse: "collapse",
});

export const StyledTableHead = styled(TableHead)({
  backgroundColor: "#FCFDFE",
});

export const StyledHeaderRow = styled(TableRow)({
  "& th": {
    borderBottom: "1px solid #D7DFE9",
  },
});

export const HeaderCell = styled(TableCell)({
  height: "45px",
  padding: "0 10px",
  fontSize: "12px",
  lineHeight: "16px",
  fontWeight: 500,
  color: "#667085",
  whiteSpace: "nowrap",
  borderRight: "1px solid #D7DFE9",
  "&:last-of-type": {
    borderRight: "none",
  },
});

export const GroupRow = styled(TableRow)({
  backgroundColor: "#FFFFFF",
});

export const GroupCell = styled(TableCell)({
  height: "32px",
  padding: "0 12px",
  fontSize: "12px",
  lineHeight: "16px",
  fontWeight: 700,
  color: "#3A4556",
  textTransform: "uppercase",
  borderBottom: "1px solid #D7DFE9",
});

export const BodyRow = styled(TableRow)({
  minHeight: "45px",
  "& td": {
    borderBottom: "1px solid #D7DFE9",
  },
});

export const BodyCell = styled(TableCell)({
  padding: "8.5px 10px",
  fontSize: "12px",
  lineHeight: "26px",
  color: "#344054",
  borderRight: "1px solid #D7DFE9",
  verticalAlign: "middle",
  "&:last-of-type": {
    borderRight: "none",
  },
  fontWeight: 400,
  fontFamily: "inter",
});

export const ProductCellWrap = styled(Box)({
  display: "flex",
  alignItems: "flex-start",
  gap: "8px",
});

export const ProductImage = styled("img")({
  width: "20px",
  height: "20px",
  borderRadius: "2px",
  objectFit: "cover",
  flexShrink: 0,
  marginTop: "1px",
});

export const ProductText = styled(Typography)({
  fontSize: "12px",
  lineHeight: "16px",
  color: "#344054",
});

export const QuantityInput = styled(InputBase)({
  width: "108px",
  height: "28px",
  border: "1px solid #D0D5DD",
  borderRadius: "4px",
  backgroundColor: "#FFFFFF",
  padding: "0 10px",
  boxSizing: "border-box",
  "& input": {
    fontSize: "12px",
    lineHeight: "16px",
    color: "#344054",
    padding: 0,
  },
});

export const Footer = styled(Box)({
  minHeight: "45px",
  padding: "0 12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "12px",
  backgroundColor: "#FFFFFF",
});

export const FooterLeft = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const FooterText = styled(Typography)({
  fontSize: "12px",
  lineHeight: "16px",
  color: "#667085",
});

export const RowsPerPageControl = styled(FormControl)({
  minWidth: "58px",
  "& .MuiOutlinedInput-root": {
    height: "30px",
    borderRadius: "6px",
    backgroundColor: "#FFFFFF",
    "& fieldset": {
      borderColor: "#D0D5DD",
    },
  },
  "& .MuiSelect-select": {
    fontSize: "12px",
    lineHeight: "16px",
    color: "#344054",
    padding: "6px 28px 6px 10px",
  },
});

export const StyledSelect = styled(Select)({});
export const StyledMenuItem = styled(MenuItem)({});

export const FooterRight = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "2px",
});

export const PageButton = styled(Box)<{ active?: boolean }>(({ active }) => ({
  minWidth: "24px",
  height: "24px",
  padding: "0 6px",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "12px",
  lineHeight: "16px",
  color: active ? "#155EEF" : "#667085",
  backgroundColor: active ? "#EEF4FF" : "transparent",
  cursor: "pointer",
  userSelect: "none",
}));

export const Dots = styled(Typography)({
  padding: "0 4px",
  fontSize: "12px",
  lineHeight: "16px",
  color: "#667085",
});

export const ArrowButton = styled(IconButton)({
  width: "24px",
  height: "24px",
  color: "#98A2B3",
  borderRadius: "4px",
});
