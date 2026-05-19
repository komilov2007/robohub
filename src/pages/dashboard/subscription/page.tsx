import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

import { usePage } from "./usePage";

import {
  Content,
  Description,
  GreenCard,
  GreenLeft,
  GreenText,
  GreenTitle,
  Header,
  MainGrid,
  PageWrapper,
  PeriodButton,
  PeriodTabs,
  PriceLabel,
  PriceSide,
  PriceValue,
  SectionHeaders,
  SectionTitle,
  Step,
  Title,
} from "./styled";
import SubscriptionSetup from "@/components/subscription/SubscriptionSetup";
import SubscriptionSummary from "@/components/subscription/SubscriptionSummary";

export default function SubscriptionPage() {
  const { t } = useTranslation();

  const {
    marketplaces,
    period,
    additionalPrice,
    totalPrice,
    monthlyPrice,
    handleCounter,
    handlePeriod,
    paymentModal,
    selectedPayment,
    handleOpenPayment,
    handleClosePayment,
    handleSelectPayment,
  } = usePage();

  return (
    <PageWrapper>
      <Content>
        <Header>
          <Title>{t("subscription_title")}</Title>

          <Description>{t("subscription_description")}</Description>
        </Header>

        <SectionHeaders>
          <Step>1</Step>

          <SectionTitle>{t("subscription_period")}</SectionTitle>
        </SectionHeaders>

        <PeriodTabs>
          <PeriodButton active={period === 3} onClick={() => handlePeriod(3)}>
            {t("subscription_3_months")}
          </PeriodButton>

          <PeriodButton active={period === 6} onClick={() => handlePeriod(6)}>
            {t("subscription_6_months")}
          </PeriodButton>

          <PeriodButton active={period === 12} onClick={() => handlePeriod(12)}>
            {t("subscription_12_months")}
          </PeriodButton>
        </PeriodTabs>

        <GreenCard>
          <GreenLeft>
            <GreenTitle>{t("subscription_all_marketplaces")}</GreenTitle>

            <GreenText>{t("subscription_all_marketplaces_desc")}</GreenText>
          </GreenLeft>

          <PriceSide>
            <PriceLabel>{t("subscription_base_price")}</PriceLabel>

            <PriceValue>{monthlyPrice.toLocaleString()} UZS</PriceValue>
          </PriceSide>
        </GreenCard>

        <MainGrid>
          <Box>
            <SubscriptionSetup
              marketplaces={marketplaces}
              handleCounter={handleCounter}
            />
          </Box>

          <Box>
            <SubscriptionSummary
              period={period}
              monthlyPrice={monthlyPrice}
              additionalPrice={additionalPrice}
              totalPrice={totalPrice}
              paymentModal={paymentModal}
              selectedPayment={selectedPayment}
              handleOpenPayment={handleOpenPayment}
              handleClosePayment={handleClosePayment}
              handleSelectPayment={handleSelectPayment}
            />
          </Box>
        </MainGrid>
      </Content>
    </PageWrapper>
  );
}
