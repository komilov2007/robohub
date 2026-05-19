import Typography from "@mui/material/Typography";

import {
  FooterInner,
  FooterWrap,
  PrivacyText,
} from "@/pages/auth/register/styled";

const RegisterFooter = ({ t }: any) => {
  return (
    <FooterWrap>
      <FooterInner>
        <Typography vocab="loginBtm">
          © {new Date().getFullYear()} Robohub
        </Typography>

        <PrivacyText to="https://robohub.uz/policy">
          {t("privacy_policy")}
        </PrivacyText>

        <Typography component="span" vocab="loginBtm">
          {t("support")}
        </Typography>
      </FooterInner>
    </FooterWrap>
  );
};

export default RegisterFooter;
