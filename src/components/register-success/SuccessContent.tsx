import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import { usePage } from "@/pages/auth/register-success/usePage";

import {
  SuccessCenterWrap,
  SuccessCard,
  SuccessDescription,
  SuccessButton,
  SuccessEmptyBox,
  SuccessIconBox,
  SuccessTitle,
} from "@/pages/auth/register-success/styled";

const SuccessContent = () => {
  const { t } = usePage();

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

          <SuccessButton to="/">{t("start")}</SuccessButton>
        </SuccessCard>
      </SuccessCenterWrap>
    </>
  );
};

export default SuccessContent;
