import { Button } from "@mui/material";

import SidebarPhone from "@/assets/img/sidebar-phone.png";

import {
  PromoCard,
  PromoContent,
  PromoDescription,
  PromoImage,
  PromoText,
  PromoTitle,
} from "@/pages/dashboard/integration/styled";

const IntegrationBanner = ({ t }: any) => {
  return (
    <PromoCard>
      <PromoContent>
        <PromoImage src={SidebarPhone} alt={t("sidebar_card_title")} />

        <PromoText>
          <PromoTitle>{t("sidebar_card_title")}</PromoTitle>

          <PromoDescription>{t("sidebar_card_description")}</PromoDescription>
        </PromoText>
      </PromoContent>

      <Button vocab="shareBtn">{t("sidebar_card_button")}</Button>
    </PromoCard>
  );
};

export default IntegrationBanner;
