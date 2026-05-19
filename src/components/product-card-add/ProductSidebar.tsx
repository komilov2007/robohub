import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

import IconSku from "@/assets/icons/icon-sku.svg?react";
import IconSee from "@/assets/icons/icon-see.svg?react";
import Iconbox from "@/assets/icons/icon-add-box.svg?react";

import {
  SidebarCard,
  SidebarDescription,
  SidebarTitle,
  StepBorder,
  StepCaption,
  StepCircle,
  StepContent,
  StepLabel,
  StepList,
  StepRow,
  VideoButton,
} from "@/pages/dashboard/product-card-add/styled";

const ProductSidebar = ({ t }: any) => {
  return (
    <>
      <SidebarCard>
        <SidebarTitle>{t("create_product_card_title")}</SidebarTitle>

        <SidebarDescription>
          {t("create_product_card_description")}
        </SidebarDescription>

        <StepList>
          <StepRow>
            <StepBorder
              sx={{
                border: "1px solid #00524F",
              }}
            >
              <StepCircle
                sx={{
                  background: "#00524F",
                }}
              >
                <Iconbox />
              </StepCircle>
            </StepBorder>

            <StepContent>
              <StepCaption>{t("step_1")}</StepCaption>

              <StepLabel
                sx={{
                  color: "#00524F",
                }}
              >
                {t("product_card")}
              </StepLabel>
            </StepContent>
          </StepRow>

          <StepRow>
            <StepBorder>
              <StepCircle>
                <IconSku />
              </StepCircle>
            </StepBorder>

            <StepContent>
              <StepCaption>{t("step_2")}</StepCaption>

              <StepLabel>{t("prices_and_sku")}</StepLabel>
            </StepContent>
          </StepRow>

          <StepRow>
            <StepBorder>
              <StepCircle>
                <IconSee />
              </StepCircle>
            </StepBorder>

            <StepContent>
              <StepCaption>{t("step_3")}</StepCaption>

              <StepLabel>{t("review")}</StepLabel>
            </StepContent>
          </StepRow>
        </StepList>
      </SidebarCard>

      <SidebarCard>
        <SidebarTitle>{t("product_card_guide_title")}</SidebarTitle>

        <SidebarDescription>
          {t("product_card_guide_description")}
        </SidebarDescription>

        <VideoButton startIcon={<PlayArrowRoundedIcon />}>
          {t("watch_video")}
        </VideoButton>
      </SidebarCard>
    </>
  );
};

export default ProductSidebar;
