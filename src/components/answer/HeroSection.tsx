import Box from "@mui/material/Box";

import IconAi from "@/assets/icons/icon-answer.svg?react";

import {
  HeroBadge,
  HeroCard,
  HeroDescription,
  HeroIcon,
  HeroLeft,
  HeroTitle,
  Dot,
} from "./styled";

const HeroSection = ({ t, activeCount }: any) => {
  return (
    <HeroCard>
      <HeroLeft>
        <HeroIcon>
          <IconAi />
        </HeroIcon>

        <Box>
          <HeroTitle>{t("answer_page_hero_title")}</HeroTitle>

          <HeroDescription>{t("answer_page_hero_description")}</HeroDescription>
        </Box>
      </HeroLeft>

      <HeroBadge>
        <Dot
          sx={{
            background: "#68dfcd",
            marginRight: 1,
          }}
        />
        5 dan {activeCount}
      </HeroBadge>
    </HeroCard>
  );
};

export default HeroSection;
