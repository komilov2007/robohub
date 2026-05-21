import Container from "@mui/material/Container";

import { usePage } from "./usePage";

import { PageWrap } from "./styled";
import OtpForm from "@/components/otp-reset/OtpForm";

const OtpVerifyPage = () => {
  const data = usePage();

  return (
    <Container maxWidth={false} disableGutters>
      <PageWrap>
        <OtpForm {...data} />
      </PageWrap>
    </Container>
  );
};

export default OtpVerifyPage;
