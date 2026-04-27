import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Page = styled(Box)({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  background: "#F5F7FA",
});

export const Header = styled(Box)({
  height: 64,
  background: "#fff",
  display: "flex",
  alignItems: "center",
  padding: "0 24px",
});

export const HeaderTitle = styled(Typography)({
  fontSize: 20,
  fontWeight: 600,
  fontFamily: "inter",
});

export const Content = styled(Box)({
  flex: 1,
  padding: 24,
  overflowY: "auto",
});

export const Card = styled(Box)({
  background: "#fff",
  borderRadius: 12,
  border: "1px solid #E4E7EC",
  display: "flex",
  flexDirection: "column",
  gap: 12,
  padding: 16,
});

export const NotificationItem = styled(Box)<{ unread?: boolean }>(
  ({ unread }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 14px",
    borderRadius: 10,
    background: unread ? "#EEF4FF" : "#F9FAFB",
    cursor: "pointer",
    transition: "0.2s",

    "&:hover": {
      background: "#E6F4F1",
    },
  }),
);

export const NotificationLeft = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 4,
});

export const Title = styled(Typography)({
  fontSize: 14,
  fontWeight: 600,
  fontFamily: "inter",
  color: "#101828",
});

export const Description = styled(Typography)({
  fontSize: 13,
  fontFamily: "inter",
  color: "#667085",
});

export const Time = styled(Typography)({
  fontSize: 12,
  fontFamily: "inter",
  color: "#98A2B3",
});
