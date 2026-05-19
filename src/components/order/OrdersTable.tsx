import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import {
  KeyboardArrowLeftRounded,
  KeyboardArrowRightRounded,
  UnfoldMoreRounded,
} from "@mui/icons-material";

import TablePhone from "@/assets/img/table-phone.webp";

import {
  BodyCell,
  BodyRow,
  DateText,
  EllipsisText,
  HeaderCell,
  MarketplaceName,
  MethodText,
  OrderText,
  PageButton,
  PageTextButton,
  PaginationInfo,
  PaginationLabel,
  PaginationLeft,
  PaginationRight,
  PaginationWrap,
  ProductCount,
  ProductExtraBadge,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductTitleRow,
  ProductWrap,
  ShopText,
  StyledRowsMenuItem,
  StyledRowsSelect,
  StyledTableContainer,
  TableArea,
  TableWrap,
} from "@/pages/dashboard/order/styled";

const OrdersTable = ({
  t,
  isLoading,
  isError,
  paginatedRows,
  page,
  setPage,
  pageNumbers,
  totalPages,
  handlePrevPage,
  handleNextPage,
  ROWS_PER_PAGE,
  totalCount,
}: any) => {
  return (
    <TableArea>
      <TableWrap>
        <StyledTableContainer>
          <Table
            stickyHeader
            sx={{
              width: "100%",
              minWidth: 980,
              tableLayout: "fixed",
            }}
          >
            <TableHead>
              <TableRow>
                <HeaderCell>{t("order_number")}</HeaderCell>

                <HeaderCell>{t("marketplace")}</HeaderCell>

                <HeaderCell>{t("product")}</HeaderCell>

                <HeaderCell>{t("shop_name")}</HeaderCell>

                <HeaderCell>{t("work_type")}</HeaderCell>

                <HeaderCell>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    {t("submitted_time")}
                    <UnfoldMoreRounded sx={{ fontSize: 16 }} />
                  </span>
                </HeaderCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={6} sx={{ py: 6 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 12,
                      }}
                    >
                      <CircularProgress size={24} />

                      <span>{t("loading")}</span>
                    </div>
                  </TableCell>
                </TableRow>
              ) : isError ? (
                <TableRow>
                  <TableCell colSpan={6}>
                    <Alert severity="error">{t("load_error")}</Alert>
                  </TableCell>
                </TableRow>
              ) : (
                paginatedRows.map((row: any) => (
                  <BodyRow key={row.id}>
                    <BodyCell>
                      <OrderText>{row.order_number}</OrderText>
                    </BodyCell>

                    <BodyCell>
                      <MarketplaceName>{row.marketplace}</MarketplaceName>
                    </BodyCell>

                    <BodyCell>
                      <ProductWrap>
                        <ProductImage>
                          <img src={TablePhone} alt={row.product_name} />
                        </ProductImage>

                        <ProductInfo>
                          <ProductTitleRow>
                            <ProductTitle>{row.product_name}</ProductTitle>

                            {row.moreCount ? (
                              <ProductExtraBadge>
                                +{row.moreCount}
                              </ProductExtraBadge>
                            ) : null}
                          </ProductTitleRow>

                          <ProductCount>
                            {row.quantity} {t("piece")}
                          </ProductCount>
                        </ProductInfo>
                      </ProductWrap>
                    </BodyCell>

                    <BodyCell>
                      <ShopText>{row.shop_name}</ShopText>
                    </BodyCell>

                    <BodyCell>
                      <MethodText>{row.work_type}</MethodText>
                    </BodyCell>

                    <BodyCell>
                      <DateText>{row.created_at}</DateText>
                    </BodyCell>
                  </BodyRow>
                ))
              )}
            </TableBody>
          </Table>
        </StyledTableContainer>

        <PaginationWrap>
          <PaginationLeft>
            <PaginationLabel>{t("showing")}</PaginationLabel>

            <StyledRowsSelect value={ROWS_PER_PAGE} size="small">
              <StyledRowsMenuItem value={13}>13</StyledRowsMenuItem>

              <StyledRowsMenuItem value={18}>18</StyledRowsMenuItem>

              <StyledRowsMenuItem value={11}>11</StyledRowsMenuItem>
            </StyledRowsSelect>

            <PaginationInfo>
              {t("of")} {totalCount}
            </PaginationInfo>
          </PaginationLeft>

          <PaginationRight>
            <PageButton disabled={page === 1} onClick={handlePrevPage}>
              <KeyboardArrowLeftRounded sx={{ fontSize: 16 }} />
            </PageButton>

            {pageNumbers.map((pageNumber: number) => (
              <PageTextButton
                key={pageNumber}
                active={page === pageNumber}
                onClick={() => setPage(pageNumber)}
              >
                {pageNumber}
              </PageTextButton>
            ))}

            {totalPages > 5 && <EllipsisText>...</EllipsisText>}

            <PageButton disabled={page === totalPages} onClick={handleNextPage}>
              <KeyboardArrowRightRounded sx={{ fontSize: 16 }} />
            </PageButton>
          </PaginationRight>
        </PaginationWrap>
      </TableWrap>
    </TableArea>
  );
};

export default OrdersTable;
