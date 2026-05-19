import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";

import IconUzum from "@/assets/icons/icon-uzum.svg?react";

import {
  EllipsisText,
  MarketCell,
  ProductCell,
  ProductImg,
  ProductTexts,
  SmallMuted,
  Stars,
  TableBody,
  TableCard,
  TableHeader,
  TableRow,
  Td,
  Th,
} from "@/pages/dashboard/comment/styled";

const RatingStars = ({ value }: any) => {
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

const ReviewsTable = ({ reviews, selectedId, setSelectedId, t }: any) => {
  return (
    <TableCard>
      <TableHeader>
        <Th>{t("review_table_marketplace")}</Th>
        <Th>{t("review_table_product")}</Th>
        <Th>{t("review_table_time")}</Th>
        <Th>{t("review_table_rating_comment")}</Th>
      </TableHeader>

      <TableBody>
        {reviews.map((item: any) => (
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

            <Td
              sx={{
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <EllipsisText sx={{ width: "100%" }}>{item.comment}</EllipsisText>

              <RatingStars value={item.rating} />
            </Td>
          </TableRow>
        ))}
      </TableBody>
    </TableCard>
  );
};

export default ReviewsTable;
