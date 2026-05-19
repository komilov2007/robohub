import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { useNavigate } from "react-router-dom";

import IconStar from "@/assets/icons/icon-star.svg?react";

import {
  CardTop,
  Grid,
  MarketName,
  MarketRow,
  MarketsColumn,
  MarketsWrapper,
  MiniBadge,
  PlatformTab,
  PlatformTabs,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductMain,
  ProductMeta,
  ProductName,
  ProductPrice,
  StatDivider,
  StatItem,
  StatLabel,
  StatsBox,
  StatsRow,
  StatTop,
  StatValue,
  StatusBadge,
  StatusRow,
  TopRightAction,
} from "@/pages/admin/product/styled";

const ProductsGrid = ({ filteredProducts, t }: any) => {
  const navigate = useNavigate();

  return (
    <Grid>
      {filteredProducts.map((item: any) => {
        const leftColumn = item.platforms.slice(0, 3);

        const rightColumn = item.platforms.slice(3);

        return (
          <ProductCard key={item.id}>
            <CardTop>
              <ProductMain>
                <ProductImage src={item.image} alt={item.name} />

                <ProductInfo>
                  <StatusRow>
                    <StatusBadge status={item.status}>
                      {t("status")}: {item.status}
                    </StatusBadge>
                  </StatusRow>

                  <ProductName>{item.name}</ProductName>

                  <ProductMeta>
                    {t("product_id")}: {item.articleId}
                    &nbsp;&nbsp;
                    {t("sku")}: {item.sku}
                  </ProductMeta>

                  <ProductPrice>
                    {t("price")}: {item.price}
                  </ProductPrice>

                  <MarketsWrapper>
                    <MarketsColumn>
                      {leftColumn.map((platform: any, index: number) => {
                        const isShareButton = platform.status === "Ulash";

                        return (
                          <MarketRow key={`${platform.name}-${index}`}>
                            <MarketName>{platform.name}</MarketName>

                            <MiniBadge
                              tone={platform.tone}
                              sx={{
                                borderRadius: "10px",
                                padding: "1px 6px",
                                fontSize: "12px",
                                cursor: isShareButton ? "pointer" : "default",
                              }}
                              onClick={() => {
                                if (isShareButton) {
                                  navigate("/admin/integration");
                                }
                              }}
                            >
                              {isShareButton ? t("share") : platform.status}
                            </MiniBadge>
                          </MarketRow>
                        );
                      })}
                    </MarketsColumn>

                    <MarketsColumn>
                      {rightColumn.map((platform: any, index: number) => {
                        const isShareButton = platform.status === "Ulash";

                        return (
                          <MarketRow key={`${platform.name}-${index}`}>
                            <MarketName>{platform.name}</MarketName>

                            <MiniBadge
                              tone={platform.tone}
                              sx={{
                                borderRadius: "10px",
                                padding: "2px 6px",
                                fontSize: "12px",
                                cursor: isShareButton ? "pointer" : "default",
                              }}
                              onClick={() => {
                                if (isShareButton) {
                                  navigate("/admin/integration");
                                }
                              }}
                            >
                              {isShareButton ? t("share") : platform.status}
                            </MiniBadge>
                          </MarketRow>
                        );
                      })}
                    </MarketsColumn>
                  </MarketsWrapper>

                  <PlatformTabs>
                    <PlatformTab>Ozon</PlatformTab>

                    <PlatformTab active>Wildberries</PlatformTab>

                    <PlatformTab>Uzum Market</PlatformTab>
                  </PlatformTabs>

                  <StatsBox>
                    <StatsRow>
                      <StatItem>
                        <StatTop>
                          <IconStar />

                          <StatValue>{item.stats.rating}</StatValue>
                        </StatTop>

                        <StatLabel>{t("rating")}</StatLabel>

                        <StatDivider />
                      </StatItem>

                      <StatItem>
                        <StatTop>
                          <StatValue>{item.stats.views}</StatValue>
                        </StatTop>

                        <StatLabel>{t("views")}</StatLabel>

                        <StatDivider />
                      </StatItem>

                      <StatItem>
                        <StatTop>
                          <StatValue>{item.stats.conversion}</StatValue>
                        </StatTop>

                        <StatLabel>{t("conversion")}</StatLabel>

                        <StatDivider />
                      </StatItem>

                      <StatItem>
                        <StatTop>
                          <StatValue>{item.stats.sold}</StatValue>
                        </StatTop>

                        <StatLabel>{t("sold")}</StatLabel>

                        <StatDivider />
                      </StatItem>

                      <StatItem>
                        <StatTop>
                          <StatValue>{item.stats.returned}</StatValue>
                        </StatTop>

                        <StatLabel>{t("returned")}</StatLabel>

                        <StatDivider />
                      </StatItem>

                      <StatItem>
                        <StatTop>
                          <StatValue>{item.stats.invalid}</StatValue>
                        </StatTop>

                        <StatLabel>{t("invalid")}</StatLabel>
                      </StatItem>
                    </StatsRow>
                  </StatsBox>
                </ProductInfo>
              </ProductMain>

              <TopRightAction>
                <MoreHorizIcon style={{ fontSize: 18 }} />
              </TopRightAction>
            </CardTop>
          </ProductCard>
        );
      })}
    </Grid>
  );
};

export default ProductsGrid;
