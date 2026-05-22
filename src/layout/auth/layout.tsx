import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { AutofillOverride, LoginFormCenter } from "@/components/login/style";

import LanguageSwitcher from "@/components/login/LanguageSwitcher";
import LoginFooter from "@/components/login/LoginFooter";
import { LoginRight } from "@/components/login/loginright";

import { LoginLeft, LoginWrapper } from "@/pages/auth/login/styled";
import { PublicRoute } from "./hocs";

const AuthLayout = () => {
  const { t } = useTranslation();

  return (
    <PublicRoute>
      <AutofillOverride>
        <LoginWrapper>
          <LoginLeft>
            <Box
              sx={{
                flex: 1,
                minHeight: "100vh",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "clamp(16px, 2vw, 24px)",
                boxSizing: "border-box",
              }}
            >
              <LanguageSwitcher />

              <LoginFormCenter>
                {/* <Suspense fallback={<CircularIndeterminate />}> */}
                <Outlet />
                {/* </Suspense> */}
              </LoginFormCenter>

              <LoginFooter t={t} />
            </Box>
          </LoginLeft>

          <LoginRight />
        </LoginWrapper>
      </AutofillOverride>
    </PublicRoute>
  );
};

export default AuthLayout;
