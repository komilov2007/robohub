// page.tsx

import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";

import {
  PageWrapper,
  GradientBlur,
  ContentCard,
  CodeText,
  Title,
  Description,
  Actions,
  PrimaryButton,
  SecondaryButton,
  GlowCircle,
  SmallBadge,
  ContentWrap,
} from "./styled";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <GradientBlur />
      <GlowCircle top="-120px" left="-120px" />
      <GlowCircle bottom="-140px" right="-140px" />

      <ContentCard>
        <SmallBadge>ERROR</SmallBadge>

        <ContentWrap>
          <CodeText>404</CodeText>

          <Title>{t("not_found_title")}</Title>

          <Description>{t("not_found_description")}</Description>

          <Actions>
            <PrimaryButton
              variant="contained"
              startIcon={<DashboardRoundedIcon />}
              onClick={() => navigate("/admin/dashboard")}
            >
              {t("not_found_home")}
            </PrimaryButton>

            <SecondaryButton
              variant="outlined"
              startIcon={<ArrowBackRoundedIcon />}
              onClick={() => navigate(-1)}
            >
              {t("not_found_back")}
            </SecondaryButton>
          </Actions>
        </ContentWrap>
      </ContentCard>
    </PageWrapper>
  );
};

export default NotFoundPage;
