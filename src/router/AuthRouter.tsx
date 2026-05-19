import { Routes, Route, Navigate } from "react-router-dom";
import { Container, useMediaQuery } from "@mui/material";

import LoginPage from "@/pages/auth/login/page";
import Register from "@/pages/auth/register/page";
import ForgetPassword from "@/pages/auth/forget-password/page";
import OtpVerifyPage from "@/pages/auth/otp-verificate/page";
import Success from "@/pages/auth/register-success/page";
import OtpReset from "@/pages/auth/otp-reset/page";
import ResetPassword from "@/pages/auth/reset-password/page";

import { LoginRight } from "@/components/login/loginright";

const AuthLayout = ({ children }: any) => {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
      }}
    >
      {children}

      {!isMobile && <LoginRight />}
    </Container>
  );
};

const AuthRouter = () => {
  return (
    <Routes>
      {/* LOGIN */}
      <Route
        path="/"
        element={
          <AuthLayout>
            <LoginPage />
          </AuthLayout>
        }
      />

      {/* REGISTER */}
      <Route
        path="/register"
        element={
          <AuthLayout>
            <Register />
          </AuthLayout>
        }
      />

      {/* FORGET PASSWORD */}
      <Route
        path="/forget-password"
        element={
          <AuthLayout>
            <ForgetPassword />
          </AuthLayout>
        }
      />

      {/* OTP VERIFY */}
      <Route
        path="/otp-verify"
        element={
          <AuthLayout>
            <OtpVerifyPage />
          </AuthLayout>
        }
      />

      {/* OTP RESET */}
      <Route
        path="/otp"
        element={
          <AuthLayout>
            <OtpReset />
          </AuthLayout>
        }
      />

      {/* RESET PASSWORD */}
      <Route
        path="/reset-password"
        element={
          <AuthLayout>
            <ResetPassword />
          </AuthLayout>
        }
      />

      {/* SUCCESS */}
      <Route
        path="/register/success"
        element={
          <AuthLayout>
            <Success />
          </AuthLayout>
        }
      />

      {/* UNKNOWN ROUTES */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AuthRouter;
