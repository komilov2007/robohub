import StarRoundedIcon from "@mui/icons-material/StarRounded";

import Box from "@mui/material/Box";

import {
  CardDescription,
  CardLeft,
  CardTitle,
  CardTop,
  Dot,
  LeftBorder,
  NumberBadge,
  OpenBadge,
  ReviewCard,
  Row,
  StarsRow,
  StyledTextField,
  SwitchIcon,
  SwitchRow,
  TextAreaTitle,
  TextAreaWrap,
  TextCount,
} from "./styled";

const ReviewCardItem = ({ item, isActive, onToggle, t }: any) => {
  return (
    <ReviewCard>
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
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarRoundedIcon
                    key={index}
                    sx={{
                      fontSize: 18,
                      color: index < item.stars ? item.color : "#D0D5DD",
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

            {isActive ? t("answer_page_active_status") : t("answer_page_open")}
          </OpenBadge>

          <SwitchIcon
            active={isActive}
            checked={isActive}
            onChange={onToggle}
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
};

export default ReviewCardItem;
