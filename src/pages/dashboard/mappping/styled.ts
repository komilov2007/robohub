import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Page = styled(Box)(() => ({
  width: "100%",
  minHeight: "100vh",
  background: "#ffffff",
  overflow: "hidden",
}));

export const Header = styled(Box)(() => ({
  height: 54,
  width: "100%",
  borderBottom: "1px solid #E3E8EF",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  boxSizing: "border-box",
}));

export const PageTitle = styled(Typography)(() => ({
  fontSize: 16,
  fontWeight: 700,
  color: "#111827",
  fontFamily: "inter",
}));

export const SaveButton = styled(Button)(() => ({
  height: 34,
  minWidth: 151,
  padding: "0 18px",
  borderRadius: 8,
  background: "#00524F",
  color: "#fff",
  textTransform: "none",
  fontSize: 13,
  fontWeight: 600,

  "&:hover": {
    background: "#00524F",
  },
}));

export const Content = styled(Box)(() => ({
  height: "calc(100vh - 54px)",
  padding: "18px 16px 16px",
  boxSizing: "border-box",
  display: "grid",
  gridTemplateColumns: "268px 1fr 268px 52px",
  gap: 8,
}));

export const Column = styled(Box)(() => ({
  height: "100%",
  background: "#F4F6F8",
  borderRadius: 8,
  padding: 16,
  boxSizing: "border-box",
  position: "relative",
}));

export const CenterColumn = styled(Column)(() => ({
  padding: "16px 14px",
}));

export const ColumnTitle = styled(Typography)(() => ({
  fontSize: 13,
  fontWeight: 700,
  color: "#111827",
  marginBottom: 14,
}));

export const DarkButton = styled(Button)(() => ({
  height: 25,
  minWidth: 120,
  padding: "0 10px",
  borderRadius: 5,
  background: "#27364A",
  color: "#fff",
  textTransform: "none",
  fontSize: 11,
  fontWeight: 600,
  lineHeight: "25px",

  "& .MuiSvgIcon-root": {
    fontSize: 15,
    marginRight: 3,
  },

  "&:hover": {
    background: "#27364A",
  },
}));

export const GroupCard = styled(Box)(() => ({
  width: "100%",
  minHeight: 98,
  background: "#ffffff",
  border: "1px solid #D6E0EA",
  borderRadius: 10,
  padding: "14px 16px",
  boxSizing: "border-box",
}));

export const GroupTop = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 13,
}));

export const GroupNameWrap = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: 5,
}));

export const GroupName = styled(Typography)(() => ({
  fontSize: 15,
  fontWeight: 800,
  color: "#111827",
}));

export const DropGrid = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 12,
}));

export const DropBox = styled(Box)(() => ({
  height: 40,
  borderRadius: 7,
  border: "1px dashed #18A67D",
  background: "#EAF7F1",
  color: "#18A67D",
  fontSize: 12,
  fontWeight: 500,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const AddSideColumn = styled(Box)(() => ({
  height: "100%",
  borderRadius: 8,
  border: "1px dashed #18A67D",
  background: "#EAF7F1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const AddSideInner = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "#00856D",
  fontSize: 12,
  fontWeight: 700,

  "& .MuiSvgIcon-root": {
    fontSize: 23,
    marginBottom: 3,
  },
}));
