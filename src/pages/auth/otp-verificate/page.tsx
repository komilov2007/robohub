import { usePage } from "./usePage";

import { PageWrap } from "./styled";

import OtpForm from "@/components/otp-verificate/OtpForm";

const OtpVerifyPage = () => {
  const data = usePage();

  return (
    <PageWrap>
      <OtpForm {...data} />
    </PageWrap>
  );
};

export default OtpVerifyPage;
