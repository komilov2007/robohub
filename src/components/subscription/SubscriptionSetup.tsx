import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

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
  Counter,
  CounterButton,
  CounterValue,
  MarketplaceCard,
  MarketplaceDescription,
  MarketplaceGrid,
  MarketplaceTitle,
  SectionHeader,
  SectionTitle,
  Step,
} from "@/pages/admin/subscription/styled";

type Props = {
  marketplaces: any[];
  handleCounter: (id: string, type: "increment" | "decrement") => void;
};

const SubscriptionSetup = ({ marketplaces, handleCounter }: Props) => {
  const { t } = useTranslation();

  return (
    <>
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
                {item.features.map((feature: string) => (
                  <CardFeature key={feature}>
                    <CardFeatureIcon>✓</CardFeatureIcon>

                    <CardFeatureText>{t(feature)}</CardFeatureText>
                  </CardFeature>
                ))}
              </CardFeatures>
            </CardContent>

            <CardBottom>
              <Box>
                <CardSectionLabel>{t("subscription_stores")}</CardSectionLabel>

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
                <CardSectionLabel>{t("subscription_extra")}</CardSectionLabel>

                <CardSectionValue>{item.bonus}</CardSectionValue>
              </CardRight>
            </CardBottom>
          </MarketplaceCard>
        ))}
      </MarketplaceGrid>
    </>
  );
};

export default SubscriptionSetup;
