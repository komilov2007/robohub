import { Footer, FooterText } from "@/pages/auth/otp-reset/styled";

const OtpFooter = ({ t }: any) => {
  return (
    <Footer>
      <FooterText>© {new Date().getFullYear()} Robohub</FooterText>

      <FooterText>{t("privacy_policy")}</FooterText>

      <FooterText>{t("support")}</FooterText>
    </Footer>
  );
};

export default OtpFooter;
