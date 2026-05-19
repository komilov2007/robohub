import { Typography } from "@mui/material";
import { FooterInner, FooterWrap } from "../login/style";

const ForgetPasswordFooter = ({ t }: any) => {
  return (
    <FooterWrap>
      <FooterInner>
        <Typography vocab="loginBtm">
          © {new Date().getFullYear()} Robohub
        </Typography>

        <Typography vocab="loginBtm">{t("privacy_policy")}</Typography>

        <Typography component="span" vocab="loginBtm">
          {t("support")}
        </Typography>
      </FooterInner>
    </FooterWrap>
  );
};

export default ForgetPasswordFooter;
