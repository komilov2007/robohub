import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import {
  SuccessCenterWrap,
  SuccessCard,
  SuccessDescription,
  SuccessButton,
  SuccessEmptyBox,
  SuccessIconBox,
  SuccessTitle,
} from "@/pages/auth/register-success/styled";
import { useTranslation } from "react-i18next";
import { ROUTERS } from "@/constants/router";

const SuccessContent = () => {
  const { t } = useTranslation();

  return (
    <>
      <SuccessEmptyBox />

      <SuccessCenterWrap>
        <SuccessCard>
          <SuccessIconBox>
            <CheckCircleRoundedIcon
              sx={{
                fontSize: 28,
                color: "#FFFFFF",
              }}
            />
          </SuccessIconBox>

          <SuccessTitle>{t("register_success_title")}</SuccessTitle>

          <SuccessDescription>
            {t("register_success_description")}
          </SuccessDescription>

          <SuccessButton to={ROUTERS.home}>{t("start")}</SuccessButton>
        </SuccessCard>
      </SuccessCenterWrap>
    </>
  );
};

export default SuccessContent;
