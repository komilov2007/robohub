import { Footer, FooterText } from "@/pages/auth/otp-verificate/styled";

const OtpFooter = ({ t }: any) => {
  return (
    <Footer>
      <FooterText>© 2025 Robohub</FooterText>

      <FooterText>{t("privacy_policy") || "Maxfiylik siyosati"}</FooterText>

      <FooterText>{t("support") || "Qo‘llab-quvvatlash"}</FooterText>
    </Footer>
  );
};

export default OtpFooter;
