import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";
import IconUzum from "@/assets/icons/icon-uzum.svg?react";
import { usePage } from "./usePage";
import {
  Content,
  CountBadge,
  DetailCard,
  DetailLabel,
  DetailRow,
  DetailTitle,
  DetailValue,
  EllipsisText,
  FilterButton,
  Header,
  MarketCell,
  MissingText,
  Page,
  ProductCell,
  ProductImg,
  ProductTexts,
  ReplyBox,
  ReplyInput,
  ReviewMiniCard,
  ReviewPanel,
  SearchBox,
  SearchInput,
  SendButton,
  Shortcut,
  SmallMuted,
  Stars,
  TabButton,
  TableBody,
  TableCard,
  TableHeader,
  TableRow,
  TabsWrap,
  Td,
  Th,
  Title,
  Toolbar,
} from "./styled";

const RatingStars = ({ value }: { value: number }) => {
  return (
    <Stars>
      {Array.from({ length: 5 }).map((_, index) =>
        index < value ? (
          <StarRoundedIcon key={index} />
        ) : (
          <StarBorderRoundedIcon key={index} />
        ),
      )}
    </Stars>
  );
};

export default function CommentPage() {
  const {
    t,
    tabs,
    reviews,
    activeTab,
    selectedId,
    selectedReview,
    search,
    reply,
    setReply,
    setSearch,
    setActiveTab,
    setSelectedId,
    handleSend,
  } = usePage();

  return (
    <Page>
      <Header>
        <Title>{t("review_title")}</Title>
      </Header>

      <TabsWrap>
        {tabs.map((tab) => (
          <TabButton
            key={tab.key}
            active={activeTab === tab.key}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
            <CountBadge active={activeTab === tab.key}>{tab.count}</CountBadge>
          </TabButton>
        ))}
      </TabsWrap>

      <Toolbar>
        <SearchBox>
          <SearchRoundedIcon sx={{ fontSize: 19, color: "#8EA0B8" }} />
          <SearchInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t("review_search_placeholder")}
          />
          <Shortcut>⌘ + K</Shortcut>
        </SearchBox>

        <FilterButton startIcon={<TuneRoundedIcon sx={{ fontSize: 17 }} />}>
          {t("review_filter")}
        </FilterButton>
      </Toolbar>

      <Content>
        <TableCard>
          <TableHeader>
            <Th>{t("review_table_marketplace")}</Th>
            <Th>{t("review_table_product")}</Th>
            <Th>{t("review_table_time")}</Th>
            <Th>{t("review_table_rating_comment")}</Th>
          </TableHeader>

          <TableBody>
            {reviews.map((item) => (
              <TableRow
                key={item.id}
                selected={selectedId === item.id}
                onClick={() => setSelectedId(item.id)}
              >
                <Td>
                  <MarketCell>
                    <IconUzum />
                    {item.marketplace}
                  </MarketCell>
                </Td>

                <Td>
                  <ProductCell>
                    <ProductImg src={item.image} alt={item.productName} />
                    <ProductTexts>
                      <EllipsisText>{item.productName}</EllipsisText>
                      <SmallMuted>{item.productId}</SmallMuted>
                    </ProductTexts>
                  </ProductCell>
                </Td>

                <Td>
                  {item.time}; {item.date}
                </Td>

                <Td sx={{ flexDirection: "column", alignItems: "flex-start" }}>
                  <EllipsisText sx={{ width: "100%" }}>
                    {item.comment}
                  </EllipsisText>
                  <RatingStars value={item.rating} />
                </Td>
              </TableRow>
            ))}
          </TableBody>
        </TableCard>

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

                <SmallMuted sx={{ marginTop: "4px" }}>
                  {t("review_detail_rating")}:
                  <StarRoundedIcon
                    sx={{
                      fontSize: 15,
                      color: "#F5A623",
                      verticalAlign: "middle",
                      marginLeft: "5px",
                    }}
                  />
                  {selectedReview.rating}.3
                </SmallMuted>

                <SmallMuted sx={{ marginTop: "4px" }}>
                  {t("review_detail_shop")}:{" "}
                  <b style={{ color: "#101828" }}>{selectedReview.shop}</b>
                  <StarRoundedIcon
                    sx={{
                      fontSize: 15,
                      color: "#F5A623",
                      verticalAlign: "middle",
                      marginLeft: "5px",
                    }}
                  />
                  {selectedReview.shopRating}
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
              <DetailLabel>{t("review_detail_order_finished")}:</DetailLabel>
              <DetailValue>{selectedReview.orderFinished}</DetailValue>
            </DetailRow>

            <DetailRow>
              <DetailLabel>{t("review_detail_review_left")}:</DetailLabel>
              <DetailValue>
                {selectedReview.time}; {selectedReview.date}
              </DetailValue>
            </DetailRow>

            <DetailRow>
              <DetailLabel>{t("review_detail_sku")}:</DetailLabel>
              <DetailValue>{selectedReview.sku}</DetailValue>
            </DetailRow>

            <DetailRow>
              <DetailLabel>{t("review_detail_review_id")}:</DetailLabel>
              <DetailValue>{selectedReview.reviewId}</DetailValue>
            </DetailRow>

            <DetailRow>
              <DetailLabel>{t("review_detail_client")}:</DetailLabel>
              <DetailValue>{selectedReview.client}</DetailValue>
            </DetailRow>

            <DetailRow>
              <DetailLabel>{t("review_detail_rating_label")}:</DetailLabel>
              <DetailValue>
                <RatingStars value={selectedReview.rating} />
              </DetailValue>
            </DetailRow>

            <DetailRow>
              <DetailLabel>{t("review_detail_comment")}:</DetailLabel>
              <MissingText>{t("review_detail_missing")}</MissingText>
            </DetailRow>

            <DetailRow>
              <DetailLabel>{t("review_detail_image")}:</DetailLabel>
              <MissingText>{t("review_detail_missing")}</MissingText>
            </DetailRow>
          </DetailCard>

          <ReplyBox>
            <ReplyInput
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              placeholder={t("review_reply_placeholder")}
            />

            <InsertEmoticonOutlinedIcon
              sx={{ fontSize: 20, color: "#667085" }}
            />
            <AttachFileRoundedIcon sx={{ fontSize: 20, color: "#667085" }} />

            <SendButton onClick={handleSend}>{t("review_send")}</SendButton>
          </ReplyBox>
        </ReviewPanel>
      </Content>
    </Page>
  );
}
