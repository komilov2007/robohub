import Typography from "@mui/material/Typography";

import { LoginTitleWrap } from "./style";

const LoginHeader = ({ t }: any) => {
  return (
    <LoginTitleWrap>
      <Typography vocab="loginTitle">{t("title")}</Typography>

      <Typography vocab="loginSubTitle">{t("subtitle_line_1")}</Typography>
    </LoginTitleWrap>
  );
};

export default LoginHeader;
