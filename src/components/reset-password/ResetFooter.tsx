import Typography from "@mui/material/Typography";

import { FooterInner, FooterWrap } from "@/pages/auth/reset-password/styled";

const ResetFooter = ({ t }: any) => {
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

export default ResetFooter;
