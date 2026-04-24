import {
  RightWrapper,
  RightCard,
  RightContent,
  LogoWrapper,
  LogoBox,
  TitleBlock,
  DashedCircle,
  LoginRightLogoText,
  LoginRightTitle,
  LoginRightText,
  LoginRightTextBtm,
  HeroWrapper,
  CenterLogo,
  LogoBubble,
  LinesSvg,
} from "./style";
import { useTranslation } from "react-i18next";
import IconRobohub from "@/assets/icons/icon-robohub.svg?react";
import IconRobosell from "@/assets/icons/icon-robosell-login.svg?react";
import IconOzon from "@/assets/icons/icon-ozon.svg?react";
import IconWb from "@/assets/icons/icon-wb.svg?react";
import IconUzum from "@/assets/icons/icon-uzum-login.svg?react";
import IconMarket from "@/assets/icons/icon-market.svg?react";
import IconRed from "@/assets/icons/icon-family.svg?react";
import Logo from "@/assets/icons/logo.svg?react";
export const LoginRight = () => {
  const { t } = useTranslation();
  return (
    <RightWrapper>
      <RightCard>
        <RightContent>
          <LogoWrapper>
            <LogoBox>
              <Logo />
            </LogoBox>
            <LoginRightLogoText>robohub</LoginRightLogoText>
          </LogoWrapper>

          <TitleBlock>
            <LoginRightTitle>{t("r_title")}</LoginRightTitle>
            <LoginRightText>{t("r_text")}</LoginRightText>
          </TitleBlock>

          <HeroWrapper>
            <LinesSvg
              viewBox="0 0 800 548"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M147 225 C202 205 197 169 260 228 C290 255 326 213 377 224" />
              <path d="M327 151 C395 167 360 207 409 207" />
              <path d="M426 207 C468 116 441 83 487 83" />
              <path d="M460 205 C555 170 583 165 628 200" />
              <path d="M490 235 C555 225 583 245 628 285" />{" "}
              <path d="M410 365 C478 386 449 447 514 428" />
              <path d="M331 343 C268 353 269 399 221 421" />
              <path d="M325 281 C267 290 298 335 239 335" />
            </LinesSvg>

            <CenterLogo>
              <IconRobohub />
            </CenterLogo>

            <LogoBubble className="bubble robosell">
              <DashedCircle />
              <IconRobosell />
            </LogoBubble>

            <LogoBubble className="bubble m-top">
              <DashedCircle />
              <IconMarket />
            </LogoBubble>

            <LogoBubble className="bubble wb">
              <DashedCircle />
              <IconWb />
            </LogoBubble>

            <LogoBubble className="bubble ozon-big">
              <DashedCircle />
              <IconOzon />
            </LogoBubble>

            <LogoBubble className="bubble uzum-big">
              <DashedCircle />
              <IconUzum />
            </LogoBubble>

            <LogoBubble className="bubble red">
              <DashedCircle />
              <IconRed />
            </LogoBubble>

            <LogoBubble className="bubble ozon-small">
              <DashedCircle />
              <IconOzon />
            </LogoBubble>

            <LogoBubble className="bubble uzum-small">
              <DashedCircle />
              <IconUzum />
            </LogoBubble>

            <LogoBubble className="bubble m-small">
              <DashedCircle />
              <IconMarket />
            </LogoBubble>
          </HeroWrapper>
          <LoginRightTextBtm>{t("r_text_btm")}</LoginRightTextBtm>
        </RightContent>
      </RightCard>
    </RightWrapper>
  );
};
