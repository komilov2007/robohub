import StarRoundedIcon from "@mui/icons-material/StarRounded";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";

import IconUzum from "@/assets/icons/icon-uzum.svg?react";

import {
  DetailCard,
  DetailLabel,
  DetailRow,
  DetailTitle,
  DetailValue,
  EllipsisText,
  MarketCell,
  MissingText,
  ProductImg,
  ProductTexts,
  ReplyBox,
  ReplyInput,
  ReviewMiniCard,
  ReviewPanel,
  SendButton,
  SmallMuted,
} from "@/pages/admin/comment/styled";

const ReviewDetails = ({
  selectedReview,
  reply,
  setReply,
  handleSend,
  t,
}: any) => {
  return (
    <ReviewPanel>
      <DetailCard>
        <DetailTitle>{t("review_detail_title")}</DetailTitle>

        <ReviewMiniCard>
          <ProductImg
            src={selectedReview.image}
            alt={selectedReview.productName}
          />

          <ProductTexts>
            <EllipsisText sx={{ fontWeight: 800 }}>
              {selectedReview.productName}
            </EllipsisText>

            <SmallMuted>{selectedReview.productId}</SmallMuted>

            <SmallMuted sx={{ mt: "4px" }}>
              {t("review_detail_shop")}:
              <b style={{ color: "#101828" }}>{selectedReview.shop}</b>
            </SmallMuted>
          </ProductTexts>
        </ReviewMiniCard>

        <DetailRow>
          <DetailLabel>{t("review_detail_platform")}:</DetailLabel>

          <DetailValue>
            <MarketCell sx={{ justifyContent: "flex-end" }}>
              <IconUzum />
              {selectedReview.marketplace}
            </MarketCell>
          </DetailValue>
        </DetailRow>

        <DetailRow>
          <DetailLabel>{t("review_detail_client")}:</DetailLabel>

          <DetailValue>{selectedReview.client}</DetailValue>
        </DetailRow>

        <DetailRow>
          <DetailLabel>{t("review_detail_rating_label")}:</DetailLabel>

          <DetailValue>
            <StarRoundedIcon
              sx={{
                fontSize: 16,
                color: "#F5A623",
              }}
            />
            {selectedReview.rating}
          </DetailValue>
        </DetailRow>

        <DetailRow>
          <DetailLabel>{t("review_detail_comment")}:</DetailLabel>

          <MissingText>{t("review_detail_missing")}</MissingText>
        </DetailRow>
      </DetailCard>

      <ReplyBox>
        <ReplyInput
          value={reply}
          placeholder={t("review_reply_placeholder")}
          onChange={(e) => setReply(e.target.value)}
        />

        <InsertEmoticonOutlinedIcon
          sx={{
            fontSize: 20,
            color: "#667085",
          }}
        />

        <AttachFileRoundedIcon
          sx={{
            fontSize: 20,
            color: "#667085",
          }}
        />

        <SendButton onClick={handleSend}>{t("review_send")}</SendButton>
      </ReplyBox>
    </ReviewPanel>
  );
};

export default ReviewDetails;
