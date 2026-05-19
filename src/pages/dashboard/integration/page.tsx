import { memo } from "react";

import { ThemeProvider } from "@mui/material";

import { useOutletContext } from "react-router-dom";

import { useTranslation } from "react-i18next";

import theme from "@/theme/theme";

import { usePage } from "./usePage";

import { ContentStack, HeaderTitle, PageWrapper } from "./styled";
import IntegrationBanner from "@/components/integration/IntegrationBanner";
import IntegrationSections from "@/components/integration/IntegrationSections";
import IntegrationModal from "@/components/integration/IntegrationModal";

const Integration = () => {
  const { t } = useTranslation();

  const { collapsed } = useOutletContext<{
    collapsed: boolean;
  }>();

  const data = usePage();

  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <HeaderTitle collapsed={collapsed}>
          {t("integration_title")}
        </HeaderTitle>

        <IntegrationBanner t={t} />

        <ContentStack>
          <IntegrationSections {...data} t={t} />
        </ContentStack>

        <IntegrationModal {...data} t={t} />
      </PageWrapper>
    </ThemeProvider>
  );
};

export default memo(Integration);
