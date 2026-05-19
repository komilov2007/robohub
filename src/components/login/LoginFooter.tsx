import Typography from "@mui/material/Typography";

import { FooterWrap, FooterInner } from "./style";

const LoginFooter = ({ t }: any) => {
  return (
    <FooterWrap>
      <FooterInner>
        <Typography vocab="loginBtm">
          © {new Date().getFullYear()} Robohub
        </Typography>

        <Typography vocab="loginBtm">{t("privacy_policy")}</Typography>

        <Typography vocab="loginBtm">{t("support")}</Typography>
      </FooterInner>
    </FooterWrap>
  );
};

export default LoginFooter;
