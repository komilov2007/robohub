import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";

import { usePage } from "./usePage";

import { LeftSide, PageWrap } from "./styled";
import OtpForm from "@/components/otp-reset/OtpForm";
import OtpFooter from "@/components/otp-reset/OtpFooter";

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
          <OtpForm {...data} />

          <OtpFooter t={data.t} />
        </LeftSide>
      </PageWrap>
    </Container>
  );
};

export default OtpVerifyPage;
