import { useTranslation } from "react-i18next";
import { Close, UnfoldMoreRounded } from "@mui/icons-material";
import { SearchRounded } from "@mui/icons-material";
import { KeyboardArrowRightRounded } from "@mui/icons-material";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";
import IconFilterOrder from "@/assets/icons/icon-filter-order.svg?react";
import TablePhone from "@/assets/img/table-phone.webp";
import IconFilter from "@/assets/icons/icon-filter.svg?react";

import { usePage } from "./usePage";
import {
  DashboardWrap,
  ContentWrap,
  OrdersContainer,
  OrdersCard,
  TitleRow,
  TitleText,
  TabsRow,
  TabItem,
  TabText,
  TabCount,
  ToolbarRow,
  SearchBox,
  SearchInput,
  ShortcutText,
  FilterButton,
  TableArea,
  TableWrap,
  StyledTableContainer,
  HeaderCell,
  BodyRow,
  BodyCell,
  OrderText,
  MarketplaceName,
  ProductWrap,
  ProductImage,
  ProductInfo,
  ProductTitleRow,
  ProductTitle,
  ProductExtraBadge,
  ProductCount,
  ShopText,
  MethodText,
  DateText,
  PaginationWrap,
  PaginationLeft,
  PaginationLabel,
  StyledRowsSelect,
  StyledRowsMenuItem,
  PaginationInfo,
  PaginationRight,
  PageButton,
  PageTextButton,
  EllipsisText,
  InputIcon,
  FilterModalWrapper,
  FilterContainer,
  FilterHeader,
  FilterHeaderText,
  FilterBody,
  FilterSidebar,
  FilterSidebarItem,
  FilterContent,
  FilterIconBox,
  FilterFooter,
  FilterCancelButton,
  FilterApplyButton,
} from "./styled";
import { Box, IconButton, ThemeProvider } from "@mui/material";
import theme from "@/theme/theme";

const OrdersPage = () => {
  const { t } = useTranslation();

  const {
    search,
    setSearch,
    page,
    setPage,
    activeTab,
    setActiveTab,
    tabs,
    paginatedRows,
    totalCount,
    totalPages,
    pageNumbers,
    handlePrevPage,
    handleNextPage,
    ROWS_PER_PAGE,
    isLoading,
    isOpen,
    isError,
    open,
    close,
    filterItems,
  } = usePage();

  return (
    <ThemeProvider theme={theme}>
      <DashboardWrap>
        <ContentWrap>
          <OrdersContainer>
            <OrdersCard>
              <TitleRow>
                <TitleText>{t("orders_title")}</TitleText>
              </TitleRow>

              <TabsRow>
                {tabs.map((tab) => {
                  const active = activeTab === tab.id;

                  return (
                    <TabItem
                      key={tab.id}
                      active={active}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      <TabText active={active}>{t(tab.label)}</TabText>
                      <TabCount active={active}>{tab.count}</TabCount>
                    </TabItem>
                  );
                })}
              </TabsRow>

              <ToolbarRow>
                <SearchBox>
                  <SearchRounded sx={{ fontSize: 18, color: "#98A2B3" }} />

                  <SearchInput
                    placeholder={t("search_placeholder")}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />

                  <ShortcutText>
                    <KeyboardCommandKeyIcon />
                    <InputIcon>+K</InputIcon>
                  </ShortcutText>
                </SearchBox>
                <FilterButton onClick={open}>
                  <IconFilter /> {t("filter")}
                </FilterButton>
              </ToolbarRow>

              <FilterModalWrapper open={isOpen} onClose={close}>
                <FilterContainer>
                  <FilterHeader>
                    <FilterHeaderText>
                      <h3 style={{ margin: 0 }}>Filtrlar</h3>
                      <p style={{ margin: 0, fontSize: 12, color: "#777" }}>
                        Bu yerda tanlangan filtrlaringiz asosida natijani
                        ko‘ring
                      </p>
                    </FilterHeaderText>

                    <IconButton onClick={close}>
                      <Close />
                    </IconButton>
                  </FilterHeader>

                  <FilterBody>
                    <FilterSidebar>
                      {filterItems.map((item, i) => (
                        <FilterSidebarItem key={i}>
                          {item.icon}
                          {item.label}
                        </FilterSidebarItem>
                      ))}
                    </FilterSidebar>

                    <FilterContent>
                      <Box />
                      <FilterIconBox>
                        <IconFilterOrder />
                      </FilterIconBox>

                      <h3 style={{ margin: 0 }}>Filtrni tanlang</h3>
                      <p style={{ color: "#777", fontSize: 13 }}>
                        Natijalarni ko‘rish uchun chap paneldan filtrni tanlang.
                      </p>
                    </FilterContent>
                  </FilterBody>

                  <FilterFooter>
                    <FilterCancelButton vocab="editBtn" onClick={close}>
                      Bekor qilish
                    </FilterCancelButton>

                    <FilterApplyButton vocab="shareBtn">
                      Filtrlarni qo‘llash
                    </FilterApplyButton>
                  </FilterFooter>
                </FilterContainer>
              </FilterModalWrapper>

              <TableArea>
                <TableWrap>
                  <StyledTableContainer>
                    <Table
                      stickyHeader
                      sx={{
                        tableLayout: "fixed",
                        width: "100%",
                        minWidth: 980,
                        borderCollapse: "separate",
                        borderSpacing: 0,
                      }}
                    >
                      <TableHead>
                        <TableRow>
                          <HeaderCell sx={{ minWidth: 150 }}>
                            {t("order_number")}
                          </HeaderCell>

                          <HeaderCell sx={{ minWidth: 150 }}>
                            {t("marketplace")}
                          </HeaderCell>

                          <HeaderCell sx={{ minWidth: 300 }}>
                            {t("product")}
                          </HeaderCell>

                          <HeaderCell sx={{ minWidth: 150 }}>
                            {t("shop_name")}
                          </HeaderCell>

                          <HeaderCell sx={{ minWidth: 110 }}>
                            {t("work_type")}
                          </HeaderCell>

                          <HeaderCell sx={{ minWidth: 160 }}>
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
                            <TableCell
                              colSpan={6}
                              sx={{ borderBottom: "none", py: 6 }}
                            >
                              <div
                                style={{
                                  width: "100%",
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
                            <TableCell
                              colSpan={6}
                              sx={{ borderBottom: "none", p: 2 }}
                            >
                              <Alert severity="error">{t("load_error")}</Alert>
                            </TableCell>
                          </TableRow>
                        ) : paginatedRows.length === 0 ? (
                          <TableRow>
                            <TableCell
                              colSpan={6}
                              sx={{
                                borderBottom: "none",
                                textAlign: "center",
                                py: 6,
                                color: "#667085",
                              }}
                            >
                              {t("no_data")}
                            </TableCell>
                          </TableRow>
                        ) : (
                          paginatedRows.map((row) => (
                            <BodyRow key={row.id}>
                              <BodyCell>
                                <OrderText>{row.order_number}</OrderText>
                              </BodyCell>

                              <BodyCell>
                                <MarketplaceName>
                                  {row.marketplace}
                                </MarketplaceName>
                              </BodyCell>

                              <BodyCell>
                                <ProductWrap>
                                  <ProductImage>
                                    <img
                                      src={TablePhone}
                                      alt={row.product_name}
                                    />
                                  </ProductImage>

                                  <ProductInfo>
                                    <ProductTitleRow>
                                      <ProductTitle>
                                        {row.product_name}
                                      </ProductTitle>

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
                        <StyledRowsMenuItem value={14}>14</StyledRowsMenuItem>
                      </StyledRowsSelect>

                      <PaginationInfo>
                        {t("of")} {totalCount}
                      </PaginationInfo>
                    </PaginationLeft>

                    <PaginationRight>
                      <PageButton
                        onClick={handlePrevPage}
                        disabled={page === 1}
                      >
                        <KeyboardArrowLeftRounded sx={{ fontSize: 16 }} />
                      </PageButton>

                      {pageNumbers.map((pageNumber) => (
                        <PageTextButton
                          key={pageNumber}
                          active={page === pageNumber}
                          onClick={() => setPage(pageNumber)}
                        >
                          {pageNumber}
                        </PageTextButton>
                      ))}

                      {totalPages > 5 && <EllipsisText>...</EllipsisText>}

                      <PageButton
                        onClick={handleNextPage}
                        disabled={page === totalPages}
                      >
                        <KeyboardArrowRightRounded sx={{ fontSize: 16 }} />
                      </PageButton>
                    </PaginationRight>
                  </PaginationWrap>
                </TableWrap>
              </TableArea>
            </OrdersCard>
          </OrdersContainer>
        </ContentWrap>
      </DashboardWrap>
    </ThemeProvider>
  );
};

export default OrdersPage;
