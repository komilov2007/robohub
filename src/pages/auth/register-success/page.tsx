import { memo } from "react";
import { SuccessContainer, SuccessLeftSide } from "./styled";
import SuccessContent from "@/components/register-success/SuccessContent";

const Page = () => {
  return (
    <SuccessContainer>
      <SuccessLeftSide>
        <SuccessContent />
      </SuccessLeftSide>
    </SuccessContainer>
  );
};

export default memo(Page);
