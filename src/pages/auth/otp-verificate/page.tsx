import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";

import { usePage } from "./usePage";

import { LeftSide, PageWrap } from "./styled";
import OtpHeader from "@/components/otp-verificate/OtpHeader";
import OtpForm from "@/components/otp-verificate/OtpForm";
import OtpFooter from "@/components/otp-verificate/OtpFooter";

const OtpVerifyPage = () => {
  const data = usePage();

  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <Container maxWidth={false} disableGutters>
      <PageWrap>
        <LeftSide
          sx={{
            width: isMobile ? "100%" : "50%",
          }}
        >
          <OtpHeader {...data} />

          <OtpForm {...data} />

          <OtpFooter t={data.t} />
        </LeftSide>
      </PageWrap>
    </Container>
  );
};

export default OtpVerifyPage;
