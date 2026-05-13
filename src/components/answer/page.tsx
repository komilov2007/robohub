// page.tsx

import { useState } from "react";

import StarRoundedIcon from "@mui/icons-material/StarRounded";

import { Box } from "@mui/material";

import { useTranslation } from "react-i18next";

import { usePage } from "./usePage";

import {
  CancelButton,
  CardDescription,
  CardLeft,
  CardTitle,
  CardTop,
  Content,
  Dot,
  Footer,
  FooterButton,
  FooterContent,
  FooterLeft,
  FooterText,
  Header,
  HeaderHelp,
  HeaderTitle,
  HeroBadge,
  HeroCard,
  HeroDescription,
  HeroIcon,
  HeroLeft,
  HeroTitle,
  LeftBorder,
  Main,
  NumberBadge,
  OpenBadge,
  PageWrapper,
  ReviewCard,
  Row,
  SaveButton,
  StarsRow,
  StyledTextField,
  SwitchIcon,
  SwitchRow,
  TextAreaTitle,
  TextAreaWrap,
  TextCount,
} from "./styled";
import IconAi from "@/assets/icons/icon-answer.svg?react";
export default function Page() {
  const { t } = useTranslation();

  const { reviews } = usePage();

  const [activeItems, setActiveItems] = useState<number[]>([]);

  const handleToggle = (id: number) => {
    setActiveItems((prev) => {
      const exists = prev.includes(id);

      if (exists) {
        return prev.filter((item) => item !== id);
      }

      return [...prev, id];
    });
  };

  const activeCount = activeItems.length;

  return (
    <PageWrapper>
      <Header>
        <HeaderTitle>{t("answer_page_title")}</HeaderTitle>

        <HeaderHelp>{t("answer_page_help")}</HeaderHelp>
      </Header>

      <Main>
        <Content>
          <HeroCard>
            <HeroLeft>
              <HeroIcon>
                <IconAi />
              </HeroIcon>
              <Box>
                <HeroTitle>{t("answer_page_hero_title")}</HeroTitle>

                <HeroDescription>
                  {t("answer_page_hero_description")}
                </HeroDescription>
              </Box>
            </HeroLeft>

            <HeroBadge>
              <Dot sx={{ background: "#68dfcd", marginRight: 1 }} /> 5 dan{" "}
              {activeCount}
            </HeroBadge>
          </HeroCard>

          {reviews.map((item) => {
            const isActive = activeItems.includes(item.id);

            return (
              <ReviewCard key={item.id}>
                <LeftBorder bordercolor={item.border} />

                <CardTop>
                  <CardLeft>
                    <NumberBadge bgcolor={item.bg} textcolor={item.color}>
                      {item.id}
                    </NumberBadge>

                    <Box>
                      <StarsRow>
                        <CardTitle>{t(item.title)}</CardTitle>

                        <Row>
                          {Array.from({
                            length: 5,
                          }).map((_, index) => (
                            <StarRoundedIcon
                              key={index}
                              sx={{
                                fontSize: 18,

                                color:
                                  index < item.stars ? item.color : "#D0D5DD",
                              }}
                            />
                          ))}
                        </Row>
                      </StarsRow>

                      <CardDescription>{t(item.description)}</CardDescription>
                    </Box>
                  </CardLeft>

                  <SwitchRow>
                    <OpenBadge active={isActive}>
                      <Dot active={isActive} />

                      {isActive
                        ? t("answer_page_active_status")
                        : t("answer_page_open")}
                    </OpenBadge>

                    <SwitchIcon
                      active={isActive}
                      checked={isActive}
                      onChange={() => handleToggle(item.id)}
                      sx={{}}
                    />
                  </SwitchRow>
                </CardTop>

                <TextAreaWrap>
                  <TextAreaTitle>{t("answer_page_text")}</TextAreaTitle>

                  <StyledTextField
                    fullWidth
                    multiline
                    rows={3}
                    placeholder={t(item.placeholder)}
                  />

                  <TextCount>0 / 500</TextCount>
                </TextAreaWrap>
              </ReviewCard>
            );
          })}
        </Content>
      </Main>

      <Footer>
        <FooterContent>
          <FooterLeft>
            <FooterText>5 / {activeCount}</FooterText>
          </FooterLeft>

          <FooterButton>
            <CancelButton variant="outlined">{t("cancel")}</CancelButton>

            <SaveButton variant="contained">{t("save_changes")}</SaveButton>
          </FooterButton>
        </FooterContent>
      </Footer>
    </PageWrapper>
  );
}
