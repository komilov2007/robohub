// styled.ts

import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Typography,
  styled,
} from "@mui/material";

export const PageWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",

  background: "#F4F7FB",

  padding: "36px 24px 80px",

  [theme.breakpoints.down("md")]: {
    padding: "24px 16px 50px",
  },
}));

export const Content = styled(Box)(() => ({
  maxWidth: 1180,
  margin: "0 auto",
}));

export const Header = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: 38,
  fontWeight: 600,
  lineHeight: "46px",

  color: "#0F1728",

  letterSpacing: "-0.6px",

  [theme.breakpoints.down("sm")]: {
    fontSize: 28,
    lineHeight: "36px",

    textAlign: "center",
  },
}));

export const Description = styled(Typography)(({ theme }) => ({
  marginTop: 14,

  maxWidth: 700,

  textAlign: "center",

  fontSize: 17,
  lineHeight: "28px",
  fontWeight: 500,

  color: "#667085",

  [theme.breakpoints.down("sm")]: {
    fontSize: 15,
    lineHeight: "24px",
  },
}));

export const SectionHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 10,

  marginTop: 32,
  marginBottom: 16,

  [theme.breakpoints.down("sm")]: {
    marginTop: 24,
    marginBottom: 14,
  },
}));

export const SectionHeaders = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  gap: 10,

  width: "100%",

  marginTop: 32,
  marginBottom: 16,

  [theme.breakpoints.down("sm")]: {
    marginTop: 24,
    marginBottom: 14,
  },
}));

export const Step = styled(Box)(() => ({
  width: 28,
  height: 28,

  borderRadius: 9,

  background: "#FFFFFF",

  border: "1px solid #D8E2F0",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  fontSize: 14,
  fontWeight: 700,

  color: "#0F1728",
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: 20,
  fontWeight: 700,
  lineHeight: "28px",

  color: "#0F1728",

  [theme.breakpoints.down("sm")]: {
    fontSize: 17,
    lineHeight: "24px",
  },
}));

export const PeriodTabs = styled(Box)(({ theme }) => ({
  width: "fit-content",

  display: "flex",
  alignItems: "center",

  background: "#E9EEF5",

  borderRadius: 16,

  padding: 5,

  margin: "0 auto",

  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const PeriodButton = styled(Button)<{
  active?: boolean;
}>(({ active, theme }) => ({
  minWidth: 120,
  height: 48,

  borderRadius: 12,

  background: active ? "#FFFFFF" : "transparent",

  color: "#0F1728",

  textTransform: "none",

  fontSize: 17,
  fontWeight: 700,

  boxShadow: active ? "0 4px 14px rgba(15,23,42,0.08)" : "none",

  [theme.breakpoints.down("sm")]: {
    flex: 1,

    minWidth: 0,

    fontSize: 15,
  },
}));

export const GreenCard = styled(Box)(({ theme }) => ({
  marginTop: 28,

  borderRadius: 24,

  padding: "24px 28px",

  background: "linear-gradient(135deg, #A6F19F 0%, #B7F6AE 100%)",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  gap: 20,

  minHeight: 170,

  overflow: "hidden",

  position: "relative",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "flex-start",

    padding: "20px",

    minHeight: "auto",
  },

  [theme.breakpoints.down("sm")]: {
    borderRadius: 18,

    padding: "18px 16px",
  },
}));

export const GreenLeft = styled(Box)(() => ({
  flex: 1,
  maxWidth: 760,
}));

export const GreenTitle = styled(Typography)(({ theme }) => ({
  fontSize: 22,
  fontWeight: 800,
  lineHeight: "30px",

  letterSpacing: "-0.3px",

  color: "#004A46",

  [theme.breakpoints.down("sm")]: {
    fontSize: 18,
    lineHeight: "25px",
  },
}));

export const GreenText = styled(Typography)(({ theme }) => ({
  marginTop: 10,

  fontSize: 16,
  lineHeight: "26px",
  fontWeight: 500,

  color: "#276865",

  maxWidth: 850,

  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
    lineHeight: "22px",
  },
}));

export const PriceSide = styled(Box)(({ theme }) => ({
  minWidth: 230,

  borderLeft: "1px solid rgba(0, 74, 70, 0.20)",

  paddingLeft: 24,

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  [theme.breakpoints.down("md")]: {
    width: "100%",

    borderLeft: "none",

    borderTop: "1px solid rgba(0, 74, 70, 0.20)",

    paddingLeft: 0,
    paddingTop: 18,
    marginTop: 2,
  },
}));

export const PriceLabel = styled(Typography)(({ theme }) => ({
  fontSize: 11,
  fontWeight: 700,
  lineHeight: "16px",

  textTransform: "uppercase",

  color: "#4E7A77",

  [theme.breakpoints.down("sm")]: {
    fontSize: 10,
  },
}));

export const PriceValue = styled(Typography)(({ theme }) => ({
  marginTop: 6,

  fontSize: 28,
  fontWeight: 800,
  lineHeight: "36px",

  letterSpacing: "-0.5px",

  color: "#004A46",

  [theme.breakpoints.down("sm")]: {
    fontSize: 24,
    lineHeight: "30px",
  },
}));

export const MainGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 340px",
  gap: 20,

  marginTop: 24,

  alignItems: "start",

  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const MarketplaceGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: 18,

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const MarketplaceCard = styled(Box)<{
  gradient: string;
}>(({ gradient, theme }) => ({
  minHeight: 355,

  borderRadius: 24,

  padding: 22,

  background: gradient,

  border: "1px solid rgba(255,255,255,0.82)",

  boxShadow: "0 10px 30px rgba(15,23,42,0.06)",

  backdropFilter: "blur(12px)",

  position: "relative",
  overflow: "hidden",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  [theme.breakpoints.down("sm")]: {
    minHeight: 320,

    padding: 18,

    borderRadius: 20,
  },
}));

export const CardContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const CardIcon = styled(Box)<{
  type: string;
}>(({ type }) => ({
  width: 48,
  height: 48,

  borderRadius: 14,

  background:
    type === "yandex" ? "#FFCC00" : type === "ozon" ? "#8fa8d6" : "#FFF200",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  boxShadow: "0 6px 16px rgba(15,23,42,0.08)",
}));

export const MarketplaceTitle = styled(Typography)(({ theme }) => ({
  marginTop: 14,

  fontSize: 28,
  fontWeight: 800,
  lineHeight: "34px",

  color: "#101828",

  [theme.breakpoints.down("sm")]: {
    fontSize: 22,
    lineHeight: "28px",
  },
}));

export const MarketplaceDescription = styled(Typography)(({ theme }) => ({
  marginTop: 10,

  fontSize: 15,
  lineHeight: "24px",

  color: "#667085",

  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
    lineHeight: "22px",
  },
}));

export const CardFeatures = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",

  gap: 8,

  marginTop: 14,
}));

export const CardFeature = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: 9,
}));

export const CardFeatureIcon = styled(Typography)(() => ({
  fontSize: 15,
  fontWeight: 800,

  color: "#22C55E",

  lineHeight: 1,
}));

export const CardFeatureText = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  lineHeight: "20px",
  fontWeight: 500,

  color: "#667085",

  [theme.breakpoints.down("sm")]: {
    fontSize: 13,
  },
}));

export const CardBottom = styled(Box)(() => ({
  marginTop: 20,

  paddingTop: 18,

  borderTop: "1px solid rgba(15,23,42,0.08)",

  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",

  gap: 14,
}));

export const CardRight = styled(Box)(() => ({
  textAlign: "right",
}));

export const CardSectionLabel = styled(Typography)(() => ({
  fontSize: 11,
  fontWeight: 700,

  color: "#98A2B3",

  textTransform: "uppercase",
}));

export const CardSectionValue = styled(Typography)(() => ({
  marginTop: 8,

  fontSize: 17,
  fontWeight: 800,

  color: "#667085",
}));

export const Counter = styled(Box)(({ theme }) => ({
  width: 122,
  height: 52,

  borderRadius: 14,

  background: "rgba(255,255,255,0.78)",

  border: "1px solid rgba(15,23,42,0.08)",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  padding: "0 14px",

  marginTop: 8,

  [theme.breakpoints.down("sm")]: {
    width: 112,
    height: 46,
  },
}));

export const CounterButton = styled(Button)(({ theme }) => ({
  minWidth: 30,

  fontSize: 22,
  fontWeight: 700,

  color: "#667085",

  [theme.breakpoints.down("sm")]: {
    fontSize: 18,
  },
}));

export const CounterValue = styled(Typography)(({ theme }) => ({
  fontSize: 24,
  fontWeight: 800,

  color: "#101828",

  [theme.breakpoints.down("sm")]: {
    fontSize: 20,
  },
}));

export const SummaryCard = styled(Box)(({ theme }) => ({
  background: "#FFFFFF",

  borderRadius: 24,

  padding: 24,

  border: "1px solid #E4E7EC",

  position: "sticky",
  top: 24,

  [theme.breakpoints.down("lg")]: {
    position: "static",
  },

  [theme.breakpoints.down("sm")]: {
    padding: 18,

    borderRadius: 20,
  },
}));

export const SummaryTitle = styled(Typography)(({ theme }) => ({
  fontSize: 28,
  fontWeight: 800,
  lineHeight: "36px",

  color: "#101828",

  [theme.breakpoints.down("sm")]: {
    fontSize: 24,
    lineHeight: "30px",
  },
}));

export const SummaryRow = styled(Box)(() => ({
  marginTop: 18,

  display: "flex",
  justifyContent: "space-between",
  gap: 14,
}));

export const SummaryText = styled(Typography)(({ theme }) => ({
  fontSize: 15,
  lineHeight: "22px",

  color: "#667085",

  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
  },
}));

export const SummaryValue = styled(Typography)(({ theme }) => ({
  fontSize: 15,
  fontWeight: 700,
  lineHeight: "22px",

  color: "#101828",

  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
  },
}));

export const Divider = styled(Box)(() => ({
  width: "100%",
  height: 1,

  background: "#E4E7EC",

  margin: "22px 0",
}));

export const TotalPrice = styled(Typography)(({ theme }) => ({
  fontSize: 42,
  fontWeight: 900,
  lineHeight: "52px",

  color: "#101828",

  marginTop: 6,

  [theme.breakpoints.down("sm")]: {
    fontSize: 32,
    lineHeight: "40px",
  },
}));

export const PayButton = styled(Button)(({ theme }) => ({
  width: "100%",
  height: 58,

  marginTop: 24,

  borderRadius: 16,

  background: "#015856",

  color: "#FFFFFF",

  textTransform: "none",

  fontSize: 18,
  fontWeight: 700,

  boxShadow: "0 10px 24px rgba(1, 88, 86, 0.24)",

  "&:hover": {
    background: "#014B49",
  },

  [theme.breakpoints.down("sm")]: {
    height: 52,

    fontSize: 16,
  },
}));

export const PaymentDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    width: "100%",

    maxWidth: 604,

    margin: 16,

    borderRadius: 26,

    overflowX: "hidden",

    overflowY: "hidden",

    [theme.breakpoints.down("sm")]: {
      margin: 10,

      borderRadius: 22,
    },
  },
}));

export const PaymentDialogContent = styled(DialogContent)(() => ({
  padding: "0 !important",

  overflowX: "hidden",
}));
export const PaymentTop = styled(Box)(({ theme }) => ({
  position: "relative",

  padding: "34px 30px 26px",

  overflow: "hidden",

  background: "linear-gradient(180deg, #FFF4B8 0%, #FFFFFF 100%)",

  [theme.breakpoints.down("sm")]: {
    padding: "26px 18px 20px",
  },
}));

export const PaymentClose = styled(Box)(() => ({
  position: "absolute",
  top: 18,
  right: 18,

  zIndex: 20,

  width: 38,
  height: 38,

  borderRadius: 12,

  background: "#FFFFFF",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  cursor: "pointer",

  touchAction: "manipulation",

  WebkitTapHighlightColor: "transparent",

  border: "1px solid rgba(15,23,42,0.08)",
}));

export const PaymentHeader = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",

  alignItems: "center",
  position: "relative",
  zIndex: 2,
}));

export const PaymentEmoji = styled(Box)(() => ({
  width: 88,
  height: 88,

  borderRadius: "50%",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const PaymentTitle = styled(Typography)(() => ({
  marginTop: 6,

  fontSize: 30,
  fontWeight: 800,

  color: "#111827",

  textAlign: "center",
}));

export const PaymentDescription = styled(Typography)(() => ({
  marginTop: 8,

  fontSize: 16,

  color: "#667085",

  textAlign: "center",
}));

export const PaymentMethods = styled(Box)(() => ({
  marginTop: 34,

  display: "flex",
  flexDirection: "column",

  gap: 14,
}));

export const PaymentMethod = styled(Box)<{
  active?: boolean;
}>(({ active }) => ({
  height: 74,

  borderRadius: 18,

  background: "#F8FAFC",

  border: active ? "2px solid #015856" : "1px solid #E4E7EC",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  padding: "0 20px",

  cursor: "pointer",

  transition: "0.2s",
}));

export const PaymentMethodLeft = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

export const PaymentBottom = styled(Box)(() => ({
  padding: "18px 26px",

  borderTop: "1px solid #E4E7EC",

  display: "flex",
  justifyContent: "flex-end",

  gap: 14,
}));

export const PaymentBackButton = styled(Button)(() => ({
  height: 46,

  borderRadius: 14,

  padding: "0 22px",

  border: "1px solid #D0D5DD",

  color: "#111827",

  textTransform: "none",

  fontWeight: 700,
}));

export const PaymentSubmitButton = styled(Button)(() => ({
  height: 46,

  borderRadius: 14,

  padding: "0 24px",

  background: "#015856",

  color: "#FFFFFF",

  textTransform: "none",

  fontWeight: 700,

  "&:hover": {
    background: "#014745",
  },
}));
