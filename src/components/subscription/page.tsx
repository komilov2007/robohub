// page.tsx

import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import IconClick from "@/assets/icons/icon-click.png";
import IconPayme from "@/assets/icons/icon-payme.png";
import IconUzumBank from "@/assets/icons/icon-uzum-bank.png";
import { usePage } from "./usePage";
import IconUzum from "@/assets/icons/icon-uzum.svg?react";
import IconOzon from "@/assets/icons/icon-ozon.svg?react";
import IconWb from "@/assets/icons/icon-wb.svg?react";
import IconYandex from "@/assets/icons/icon-yandex.svg?react";
import {
  CardBottom,
  CardContent,
  CardFeature,
  CardFeatureIcon,
  CardFeatureText,
  CardFeatures,
  CardIcon,
  CardRight,
  CardSectionLabel,
  CardSectionValue,
  Content,
  Counter,
  CounterButton,
  CounterValue,
  Description,
  Divider,
  GreenCard,
  GreenLeft,
  GreenText,
  GreenTitle,
  Header,
  MainGrid,
  MarketplaceCard,
  MarketplaceDescription,
  MarketplaceGrid,
  MarketplaceTitle,
  PageWrapper,
  PayButton,
  PaymentClose,
  PaymentDescription,
  PaymentDialog,
  PaymentDialogContent,
  PaymentEmoji,
  PaymentMethods,
  PaymentHeader,
  PaymentTitle,
  PaymentTop,
  PeriodButton,
  PeriodTabs,
  PriceLabel,
  PriceSide,
  PriceValue,
  SectionHeader,
  SectionHeaders,
  SectionTitle,
  Step,
  SummaryCard,
  SummaryRow,
  SummaryText,
  SummaryTitle,
  SummaryValue,
  Title,
  TotalPrice,
  PaymentMethod,
  PaymentBackButton,
  PaymentSubmitButton,
  PaymentMethodLeft,
  PaymentBottom,
} from "./styled";
import {
  AutoAwesomeRounded,
  CheckCircleRounded,
  CloseRounded,
  RadioButtonUncheckedRounded,
} from "@mui/icons-material";

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
            <SectionHeader>
              <Step>2</Step>

              <SectionTitle>{t("subscription_setup")}</SectionTitle>
            </SectionHeader>

            <MarketplaceGrid>
              {marketplaces.map((item) => (
                <MarketplaceCard
                  key={item.id}
                  gradient={item.gradient}
                  sx={{
                    position: "relative",

                    background: item.gradient,

                    overflow: "hidden",

                    "&::before": {
                      content: '""',

                      position: "absolute",

                      inset: 0,

                      backgroundImage: "url('/pattern.png')",
                      transform: "rotate(180deg)",

                      backgroundRepeat: "no-repeat",

                      backgroundPosition: "top right",

                      backgroundSize: "cover",

                      opacity: 0.07,

                      pointerEvents: "none",

                      zIndex: 0,
                    },

                    "& > *": {
                      position: "relative",

                      zIndex: 1,
                    },
                  }}
                >
                  <CardContent>
                    <CardIcon type={item.id}>
                      {item.id === "wildberries" ? (
                        <IconWb />
                      ) : item.id === "ozon" ? (
                        <IconOzon />
                      ) : item.id === "yandex" ? (
                        <IconYandex />
                      ) : (
                        <IconUzum />
                      )}
                    </CardIcon>

                    <MarketplaceTitle>{item.title}</MarketplaceTitle>

                    <MarketplaceDescription>
                      {t(item.description)}
                    </MarketplaceDescription>

                    <CardFeatures>
                      {item.features.map((feature) => (
                        <CardFeature key={feature}>
                          <CardFeatureIcon>✓</CardFeatureIcon>

                          <CardFeatureText>{t(feature)}</CardFeatureText>
                        </CardFeature>
                      ))}
                    </CardFeatures>
                  </CardContent>

                  <CardBottom>
                    <Box>
                      <CardSectionLabel>
                        {t("subscription_stores")}
                      </CardSectionLabel>

                      <Counter>
                        <CounterButton
                          onClick={() => handleCounter(item.id, "decrement")}
                        >
                          -
                        </CounterButton>

                        <CounterValue>{item.stores}</CounterValue>

                        <CounterButton
                          onClick={() => handleCounter(item.id, "increment")}
                        >
                          +
                        </CounterButton>
                      </Counter>
                    </Box>

                    <CardRight>
                      <CardSectionLabel>
                        {t("subscription_extra")}
                      </CardSectionLabel>

                      <CardSectionValue>{item.bonus}</CardSectionValue>
                    </CardRight>
                  </CardBottom>
                </MarketplaceCard>
              ))}
            </MarketplaceGrid>
          </Box>

          <Box>
            <SectionHeader>
              <Step>3</Step>

              <SectionTitle>{t("subscription_checkout")}</SectionTitle>
            </SectionHeader>

            <SummaryCard>
              <SummaryTitle>{t("subscription_order_summary")}</SummaryTitle>
              <SummaryRow>
                <SummaryText>{t("subscription_monthly")}</SummaryText>

                <SummaryValue>{monthlyPrice.toLocaleString()} UZS</SummaryValue>
              </SummaryRow>
              <SummaryRow>
                <SummaryText>{t("subscription_extra_shops")}</SummaryText>

                <SummaryValue>
                  +{additionalPrice.toLocaleString()} UZS
                </SummaryValue>
              </SummaryRow>
              <Divider />
              <SummaryText>{t("subscription_total")}</SummaryText>
              <TotalPrice>{totalPrice.toLocaleString()} UZS</TotalPrice>
              <SummaryText>{t("summary_period", { period })}</SummaryText>
              <PayButton onClick={handleOpenPayment}>
                {t("subscription_continue")}
              </PayButton>
              <PaymentDialog open={paymentModal} onClose={handleClosePayment}>
                <PaymentDialogContent>
                  <PaymentTop>
                    <PaymentClose
                      onClick={(e) => {
                        e.stopPropagation();

                        handleClosePayment();
                      }}
                    >
                      <CloseRounded />
                    </PaymentClose>

                    <PaymentHeader>
                      <PaymentEmoji>
                        <AutoAwesomeRounded
                          sx={{
                            position: "absolute",

                            top: -50,

                            right: -30,

                            transform: "rotate(18deg)",

                            fontSize: {
                              xs: 170,
                              sm: 220,
                            },

                            color: "rgba(234,179,8,0.08)",

                            zIndex: 0,

                            pointerEvents: "none",
                          }}
                        />
                      </PaymentEmoji>

                      <PaymentTitle>
                        {t("subscription_payment_title")}
                      </PaymentTitle>

                      <PaymentDescription>
                        {t("subscription_payment_desc")}
                      </PaymentDescription>
                    </PaymentHeader>

                    <PaymentMethods>
                      {[
                        {
                          id: "uzum",

                          icon: (
                            <img
                              src={IconUzumBank}
                              alt="uzum"
                              style={{
                                width: 118,
                                height: 78,

                                objectFit: "contain",
                              }}
                            />
                          ),
                        },
                        {
                          id: "click",

                          icon: (
                            <img
                              src={IconClick}
                              alt="click"
                              style={{
                                width: 118,
                                height: 78,

                                objectFit: "contain",
                              }}
                            />
                          ),
                        },

                        {
                          id: "payme",

                          icon: (
                            <img
                              src={IconPayme}
                              alt="payme"
                              style={{
                                width: 118,
                                height: 68,
                                objectFit: "contain",
                              }}
                            />
                          ),
                        },
                      ].map((item) => {
                        const active = selectedPayment === item.id;

                        return (
                          <PaymentMethod
                            key={item.id}
                            active={active}
                            onClick={() => handleSelectPayment(item.id)}
                          >
                            <PaymentMethodLeft>{item.icon}</PaymentMethodLeft>

                            {active ? (
                              <CheckCircleRounded
                                sx={{
                                  color: "#015856",
                                }}
                              />
                            ) : (
                              <RadioButtonUncheckedRounded
                                sx={{
                                  color: "#98A2B3",
                                }}
                              />
                            )}
                          </PaymentMethod>
                        );
                      })}
                    </PaymentMethods>
                  </PaymentTop>

                  <PaymentBottom>
                    <PaymentBackButton onClick={handleClosePayment}>
                      {t("subscription_back")}
                    </PaymentBackButton>

                    <PaymentSubmitButton>
                      {t("subscription_pay")}
                    </PaymentSubmitButton>
                  </PaymentBottom>
                </PaymentDialogContent>
              </PaymentDialog>
            </SummaryCard>
          </Box>
        </MainGrid>
      </Content>
    </PageWrapper>
  );
}
