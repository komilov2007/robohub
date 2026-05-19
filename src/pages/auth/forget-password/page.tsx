import { ThemeProvider } from "@mui/material";

import theme from "@/theme/theme";

import { AuthPageWrap, LeftColumn } from "./styled";

import { usePage } from "./usePage";
import ForgetPasswordForm from "@/components/forget-password/ForgetPasswordForm";
import ForgetPasswordFooter from "@/components/forget-password/ForgetPasswordFooter";

const ForgetPasswordPage = () => {
  const data = usePage();

  return (
    <ThemeProvider theme={theme}>
      <AuthPageWrap>
        <LeftColumn>
          <ForgetPasswordForm {...data} />
          <ForgetPasswordFooter t={data.t} />
        </LeftColumn>
      </AuthPageWrap>
    </ThemeProvider>
  );
};

export default ForgetPasswordPage;
