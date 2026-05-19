import { ThemeProvider } from "@mui/material";

import theme from "@/theme/theme";

import { usePage } from "./usePage";

import {
  Container,
  AutofillOverride,
  LoginFormCenter,
  LoginOuter,
  LoginFieldsWrap,
} from "@/components/login/style";

import LanguageSwitcher from "@/components/login/LanguageSwitcher";
import LoginHeader from "@/components/login/LoginHeader";
import LoginFields from "@/components/login/LoginFields";
import RememberSection from "@/components/login/RememberSection";
import LoginActions from "@/components/login/LoginActions";
import LoginFooter from "@/components/login/LoginFooter";
import { LoginLeft, LoginWrapper } from "./styled";

const LoginPage = () => {
  const data = usePage();

  return (
    <ThemeProvider theme={theme}>
      <AutofillOverride>
        <LoginWrapper>
          <LoginLeft>
            <Container isLogin onSubmit={data.handleSubmit(data.onSubmit)}>
              <LanguageSwitcher {...data} />

              <LoginFormCenter>
                <LoginOuter>
                  <LoginHeader t={data.t} />

                  <LoginFieldsWrap>
                    <LoginFields {...data} />

                    <RememberSection {...data} />

                    <LoginActions {...data} />
                  </LoginFieldsWrap>
                </LoginOuter>
              </LoginFormCenter>

              <LoginFooter t={data.t} />
            </Container>
          </LoginLeft>
        </LoginWrapper>
      </AutofillOverride>
    </ThemeProvider>
  );
};

export default LoginPage;
