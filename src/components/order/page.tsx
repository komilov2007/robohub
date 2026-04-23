import {UnfoldMoreRounded,} from '@mui/icons-material'
import {SearchRounded} from '@mui/icons-material'
import {KeyboardArrowRightRounded} from '@mui/icons-material'
import {KeyboardArrowLeftRounded} from '@mui/icons-material'
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TablePhone from '@/assets/img/table-phone.webp'
import { usePage } from './usePage'
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import {  DashboardWrap,  ContentWrap,  OrdersContainer,  OrdersCard,  TitleRow,  TitleText,  TabsRow,  TabItem,  TabText,  TabCount,  ToolbarRow,  SearchBox,  SearchInput,  ShortcutText,  FilterButton,  TableArea,  TableWrap,  StyledTableContainer,  HeaderCell,  BodyRow,  BodyCell,  OrderText,  MarketplaceName,  ProductWrap,  ProductImage,  ProductInfo,  ProductTitleRow,  ProductTitle,  ProductExtraBadge,  ProductCount,  ShopText,  MethodText,  DateText,  PaginationWrap,  PaginationLeft,  PaginationLabel,  StyledRowsSelect,  StyledRowsMenuItem,  PaginationInfo,  PaginationRight,  PageButton,  PageTextButton,  EllipsisText,  InputIcon,} from './styled'
import IconFilter from '@/assets/icons/icon-filter.svg?react'
const OrdersPage = () => {
 const { search, setSearch, page, setPage, activeTab, setActiveTab, tabs, paginatedRows, totalCount, totalPages, pageNumbers, handlePrevPage, handleNextPage, ROWS_PER_PAGE, isLoading, isError,} = usePage()
  return (
    <DashboardWrap>
      <ContentWrap>
        <OrdersContainer>
          <OrdersCard>
            <TitleRow>
              <TitleText>Buyurtmalar</TitleText>
            </TitleRow>
            <TabsRow>
              {tabs.map((tab) => {
                const active = activeTab === tab.id
                return (
                  <TabItem
                    key={tab.id}
                    active={active}
                    onClick={() => setActiveTab(tab.id)} >
                    <TabText active={active}>{tab.label}</TabText>
                    <TabCount active={active}>{tab.count}</TabCount>
                  </TabItem>
                )})}
            </TabsRow>
            <ToolbarRow>
              <SearchBox>
                <SearchRounded sx={{ fontSize: 18, color: '#98A2B3' }} />
                <SearchInput
                  placeholder="Qidirish"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)} />
                <ShortcutText>
                  <KeyboardCommandKeyIcon />
                  <InputIcon>+K</InputIcon>
                </ShortcutText>
              </SearchBox>
              <FilterButton><IconFilter/> Filter </FilterButton>
            </ToolbarRow>
            <TableArea>
              <TableWrap>
                <StyledTableContainer>
                  <Table
                    stickyHeader
                    sx={{
                      tableLayout: 'fixed',
                      width: '100%',
                      minWidth: 980,
                      borderCollapse: 'separate',
                      borderSpacing: 0,
                    }}>
                    <TableHead>
                      <TableRow>
                        <HeaderCell sx={{ minWidth: 150 }}>
                          Buyurtma raqami
                        </HeaderCell>
                        <HeaderCell sx={{ minWidth: 150 }}>
                          Marketplace
                        </HeaderCell>
                        <HeaderCell sx={{ minWidth: 300 }}>Tovar</HeaderCell>
                        <HeaderCell sx={{ minWidth: 150 }}>
                          Do&apos;kon nomi
                        </HeaderCell>
                        <HeaderCell sx={{ minWidth: 110 }}>
                          Ishlash usuli
                        </HeaderCell>
                        <HeaderCell sx={{ minWidth: 160 }}>
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 4,
                            }}>
                            Topshirilgan vaqti
                            <UnfoldMoreRounded sx={{ fontSize: 16 }} />
                          </span>
                        </HeaderCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {isLoading ? (
                        <TableRow>
                          <TableCell colSpan={6} sx={{ borderBottom: 'none', py: 6 }}>
                            <div
                              style={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 12,
                              }}>
                              <CircularProgress size={24} />
                              <span>Yuklanmoqda...</span>
                            </div>
                          </TableCell>
                        </TableRow>
                      ) : isError ? (
                        <TableRow>
                          <TableCell colSpan={6} sx={{ borderBottom: 'none', p: 2 }}>
                            <Alert severity="error">
                              Malumotlarni yuklashda xatolik yuz berdi
                            </Alert>
                          </TableCell>
                        </TableRow>
                      ) : paginatedRows.length === 0 ? (
                        <TableRow>
                          <TableCell
                            colSpan={6}
                            sx={{
                              borderBottom: 'none',
                              textAlign: 'center',
                              py: 6,
                              color: '#667085',
                            }}>
                            Malumot topilmadi
                          </TableCell>
                        </TableRow>
                      ) : (
                        paginatedRows.map((row) => (
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
                                  <ProductCount>{row.quantity} dona</ProductCount>
                                </ProductInfo>
                              </ProductWrap>
                            </BodyCell>
                            <BodyCell><ShopText>{row.shop_name}</ShopText> </BodyCell>
                            <BodyCell><MethodText>{row.work_type}</MethodText></BodyCell>
                            <BodyCell><DateText>{row.created_at}</DateText></BodyCell>
                          </BodyRow>)))}
                    </TableBody>
                  </Table>
                </StyledTableContainer>

                <PaginationWrap>
                  <PaginationLeft>
                    <PaginationLabel>Showing</PaginationLabel>
                    <StyledRowsSelect value={ROWS_PER_PAGE} size="small">
                      <StyledRowsMenuItem value={14}>14</StyledRowsMenuItem>
                    </StyledRowsSelect>
                    <PaginationInfo>of {totalCount}</PaginationInfo>
                  </PaginationLeft>
                  
                  <PaginationRight>
                    <PageButton onClick={handlePrevPage} disabled={page === 1}>
                      <KeyboardArrowLeftRounded sx={{ fontSize: 16 }} />
                    </PageButton>
                    {pageNumbers.map((pageNumber) => (
                      <PageTextButton key={pageNumber} active={page === pageNumber}
                        onClick={() => setPage(pageNumber)}> {pageNumber}</PageTextButton> ))}
                    {totalPages > 5 && <EllipsisText>...</EllipsisText>}
                    <PageButton
                      onClick={handleNextPage}
                      disabled={page === totalPages}>
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
  )}
export default OrdersPage