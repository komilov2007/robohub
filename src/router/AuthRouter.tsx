import { Routes, Route, Navigate } from "react-router-dom";
import { Box, Container, useMediaQuery } from "@mui/material";

import LoginLeft from "@/components/login/page";
import { LoginRight } from "@/components/login/loginright";
import Register from "@/components/register/page";
import Page from "@/components/forget-password/page";
import OtpVerifyPage from "@/components/otp-verificate/page";
import Success from "@/components/resgister-success/page";
import OtpReset from "@/components/otp-reset/page";
import ResetPassword from "@/components/reset-password/page";
const LoginPage = () => {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Container
      sx={{ width: "100%", display: "flex" }}
      maxWidth={false}
      disableGutters
    >
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          width: "100%",
        }}
      >
        <LoginLeft />
      </Box>
      {!isMobile && <LoginRight />}
    </Container>
  );
};

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/forget-password" element={<Page />} />

      <Route path="/register" element={<Register />} />

      <Route path="/otp-verify" element={<OtpVerifyPage />} />

      <Route path="/register/success" element={<Success />} />

      <Route path="/otp" element={<OtpReset />} />

      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
};

export default AuthRouter;
