import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import OperatorImg from "@/assets/img/operator.webp";

export const PageWrapper = styled(Stack)(() => ({
  width: "100%",
}));

export const HeaderTitle = styled(Typography)(() => ({
  fontWeight: 600,
  fontFamily: "Inter",
  height: "48px",
  borderBottom: "1px solid #E8E8E9",
  display: "flex",
  alignItems: "center",
  padding: "0px 16px",
}));

export const ContentStack = styled(Stack)(() => ({
  width: "100%",
}));

export const SectionWrapper = styled(Box)(() => ({
  width: "100%",
}));

export const SectionTitle = styled(Typography)(() => ({
  padding: "16px 16px 0px 16px",
  fontWeight: 600,
  fontFamily: "Inter",
  fontSize: "14px",
}));

export const IntegrationCard = styled(Box)(() => ({
  display: "flex",
  padding: "16px",
  border: "1px solid #E0E6F0",
  width: "97.5%",
  minHeight: "72px",
  borderRadius: "8px",
  margin: "16px 20px",
  justifyContent: "space-between",
  alignItems: "center",
  boxSizing: "border-box",
}));

export const CardLeft = styled(Box)(() => ({
  display: "flex",
  gap: "10px",
  alignItems: "flex-start",
}));

export const TextBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const ItemTitle = styled(Typography)(() => ({
  fontWeight: 500,
  fontFamily: "Inter",
  fontSize: "14px",
}));

export const ItemDescription = styled(Typography)(() => ({
  fontSize: "12px",
  fontWeight: 400,
  fontFamily: "Inter",
  color: "#596881",
  maxWidth: "760px",
}));

export const ButtonGroup = styled(Box)(() => ({
  display: "flex",
  gap: "12px",
  flexShrink: 0,
}));

export const ModalCenter = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const ModalBox = styled(Box)(() => ({
  width: 606,
  height: 577,
  background: "#fff",
  borderRadius: "8px",
  outline: "none",
  display: "flex",
  flexDirection: "column",
  boxShadow: "0px 10px 30px rgba(16, 24, 40, 0.12)",
}));

export const ModalHeader = styled(Box)(() => ({
  height: 64,
  padding: "0 24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "1px solid #E8E8E9",
  boxSizing: "border-box",
}));

export const ModalTitle = styled(Typography)(() => ({
  fontSize: 16,
  fontWeight: 600,
  color: "#1D2939",
  fontFamily: "Inter",
}));

export const ModalContent = styled(Box)(() => ({
  flex: 1,
  padding: "16px 24px",
  boxSizing: "border-box",
}));

export const ModalInfoBox = styled(Box)(() => ({
  height: 48,
  borderRadius: "8px",
  background: "#F5F7FA",
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "0 12px",
  marginBottom: "14px",
  boxSizing: "border-box",
}));

export const ModalIconBox = styled(Box)(() => ({
  width: 32,
  height: 32,
  borderRadius: "8px",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
}));

export const ModalDescription = styled(Typography)(() => ({
  fontSize: 12,
  fontWeight: 400,
  color: "#98A2B3",
  fontFamily: "Inter",
  lineHeight: "16px",
}));

export const ModalLabel = styled(Typography)(() => ({
  fontSize: 14,
  fontWeight: 500,
  color: "#1D2939",
  fontFamily: "Inter",
  marginBottom: "8px",
}));

export const InstructionImage = styled(Box)(() => ({
  height: 187,
  borderRadius: "8px",
  marginBottom: "16px",
  backgroundImage: `url(${OperatorImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundColor: "#E8E8E9",
}));

export const InputLabel = styled(Typography)(() => ({
  fontSize: 14,
  fontWeight: 500,
  color: "#344054",
  marginBottom: "6px",
  fontFamily: "Inter",
}));
export const PasswordWrapper = styled(Box)(() => ({
  position: "relative",
}));
export const StyledInput = styled("input")(() => ({
  width: "100%",
  height: 44,
  border: "1px solid #D0D5DD",
  borderRadius: "8px",
  padding: "0 14px",
  marginBottom: "14px",
  outline: "none",
  fontSize: 14,
  fontFamily: "Inter",
  boxSizing: "border-box",
  "&::placeholder": {
    color: "#98A2B3",
  },
}));

export const PasswordInput = styled("input")(() => ({
  width: "100%",
  height: 44,
  border: "1px solid #D0D5DD",
  borderRadius: "8px",
  padding: "0 42px 0 14px",
  outline: "none",
  fontSize: 14,
  fontFamily: "Inter",
  boxSizing: "border-box",
  "&::placeholder": {
    color: "#98A2B3",
  },
}));
export const EyeIconBox = styled(Box)(() => ({
  position: "absolute",
  right: 14,
  top: "50%",
  transform: "translateY(-50%)",
  color: "#98A2B3",
  display: "flex",
}));

export const ModalFooter = styled(Box)(() => ({
  height: 64,
  padding: "0 24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "12px",
  borderTop: "1px solid #E8E8E9",
  boxSizing: "border-box",
}));
