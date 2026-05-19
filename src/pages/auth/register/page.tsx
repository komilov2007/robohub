import Container from "@mui/material/Container";

import { ThemeProvider } from "@emotion/react";

import theme from "@/theme/theme";

import { usePage } from "./usePage";

import { AuthPageWrap, LeftColumn } from "./styled";
import RegisterHeader from "@/components/register/RegisterHeader";
import RegisterForm from "@/components/register/RegisterForm";
import RegisterFooter from "@/components/register/RegisterFooter";

const RegisterPage = () => {
  const data = usePage();

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        width: "100%",
        display: "flex",
      }}
    >
      <ThemeProvider theme={theme}>
        <AuthPageWrap>
          <LeftColumn>
            <RegisterHeader {...data} />

            <RegisterForm {...data} />

            <RegisterFooter t={data.t} />
          </LeftColumn>
        </AuthPageWrap>
      </ThemeProvider>
    </Container>
  );
};

export default RegisterPage;
