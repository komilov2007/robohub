import { InputAdornment, TableBody, ThemeProvider } from "@mui/material";
import { memo } from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

import IconMapping from "@/assets/icons/icon-mapping.svg?react";
import IconManual from "@/assets/icons/icon-manual.svg?react";
import IconBasket from "@/assets/icons/icon-basket.svg?react";
import IconImport from "@/assets/icons/icon-import.svg?react";
import IconFilter from "@/assets/icons/icon-filter.svg?react";
import IconCancel from "@/assets/icons/icon-cancel.svg?react";
import IconInfo from "@/assets/icons/icon-info.svg?react";

import { InputIcon } from "../order/styled";
import theme from "@/theme/theme";
import { usePage } from "./usePage";
import { StyledField, StyledInput } from "./styled";
import {
  ArrowButton,
  BodyCell,
  BodyRow,
  CardWrapper,
  Dots,
  FilterAction,
  Footer,
  FooterLeft,
  FooterRight,
  FooterText,
  GroupCell,
  GroupRow,
  HeaderBar,
  HeaderCell,
  HeaderTitle,
  ImportLink,
  ImportText,
  ModalCancelButton,
  ModalCard,
  ModalCloseButton,
  ModalFieldSection,
  ModalFieldTitle,
  ModalFooter,
  ModalHeader,
  ModalInfoBox,
  ModalInfoIconWrap,
  ModalInfoText,
  ModalSaveButton,
  ModalTitle,
  PageBg,
  PageButton,
  PageWrapper,
  ProductCellWrap,
  ProductImage,
  ProductText,
  QuantityInput,
  RowsPerPageControl,
  SortHeaderWrap,
  StyledHeaderRow,
  StyledMenuItem,
  StyledModal,
  StyledSelect,
  StyledTable,
  StyledTableContainer,
  StyledTableHead,
  ToolbarAction,
  ToolbarLink,
  ToolbarLeft,
  ToolbarRight,
  ToolbarSection,
} from "./styled";
import { Controller } from "react-hook-form";

const WereHouse = () => {
  const {
    page,
    setPage,
    rowsPerPage,
    handleChangeRowsPerPage,
    totalCount,
    totalPages,
    pageNumbers,
    handlePrevPage,
    handleNextPage,
    tableItems,
    quantities,
    setQuantity,
    modal,
    handleCloseModal,
    handleOpenModal,
    handleSubmit,
    control,
    onSubmit,
  } = usePage();

  return (
    <ThemeProvider theme={theme}>
      <PageBg>
        <HeaderBar>
          <HeaderTitle>Buyurtmalar</HeaderTitle>

          <ImportLink to="/">
            <IconImport />
            <ImportText>Import exel fayl</ImportText>
          </ImportLink>
        </HeaderBar>

        <ToolbarSection>
          <ToolbarLeft>
            <StyledInput
              placeholder="Qidirish..."
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <KeyboardCommandKeyIcon />
                  <InputIcon>+K</InputIcon>
                </InputAdornment>
              }
            />

            <FilterAction>
              <IconFilter />
              Filter
            </FilterAction>
          </ToolbarLeft>

          <ToolbarRight>
            <ToolbarLink to="/">
              <IconMapping />
              Mapping
            </ToolbarLink>

            <ToolbarLink to="/">
              <IconManual />
              Qo'llanma
            </ToolbarLink>

            <ToolbarAction onClick={handleOpenModal}>
              <IconBasket />
              Stoplist
            </ToolbarAction>
          </ToolbarRight>

          <StyledModal
            open={modal.value}
            onSubmit={handleSubmit(onSubmit)}
            onClose={handleCloseModal}
          >
            <ModalCard>
              <ModalHeader>
                <ModalTitle>Stoplist</ModalTitle>

                <ModalCloseButton onClick={handleCloseModal}>
                  <IconCancel />
                </ModalCloseButton>
              </ModalHeader>

              <ModalInfoBox>
                <ModalInfoIconWrap>
                  <IconInfo />
                </ModalInfoIconWrap>

                <ModalInfoText>
                  Stoplist — bu minimal miqdordan kam qolgan yoki sotuv uchun
                  vaqtincha to‘xtatilgan tovarlar ro‘yxati. Ushbu ro‘yxat ombor
                  zaxirasini nazorat qilish, yetishmayotgan mahsulotlarni
                  aniqlash va ortiqcha chiqimlarning oldini olish uchun xizmat
                  qiladi.
                </ModalInfoText>
              </ModalInfoBox>

              <ModalFieldSection>
                <ModalFieldTitle>Minimal miqdor</ModalFieldTitle>
                <Controller
                  control={control}
                  name="text"
                  render={({ field }) => (
                    <StyledField
                      {...field}
                      placeholder="Stoplist uchun minimal miqdor kiriting"
                    />
                  )}
                ></Controller>
              </ModalFieldSection>

              <ModalFooter>
                <ModalCancelButton onClick={handleCloseModal}>
                  Yopish
                </ModalCancelButton>

                <ModalSaveButton
                  variant="contained"
                  vocab="loginBtn"
                  type="submit"
                  onClick={handleSubmit(onSubmit)}
                >
                  Saqlash
                </ModalSaveButton>
              </ModalFooter>
            </ModalCard>
          </StyledModal>
        </ToolbarSection>

        <PageWrapper>
          <CardWrapper>
            <StyledTableContainer>
              <StyledTable>
                <StyledTableHead>
                  <StyledHeaderRow>
                    <HeaderCell sx={{ width: "380px" }}>
                      Mahsulot nomi
                    </HeaderCell>
                    <HeaderCell sx={{ width: "150px" }}>SKU</HeaderCell>
                    <HeaderCell sx={{ width: "160px" }}>IKPU</HeaderCell>

                    <HeaderCell sx={{ width: "120px" }}>
                      <SortHeaderWrap>
                        Kirish narxi
                        <KeyboardArrowUpRoundedIcon
                          sx={{ fontSize: 14, color: "#98A2B3" }}
                        />
                      </SortHeaderWrap>
                    </HeaderCell>

                    <HeaderCell sx={{ width: "120px" }}>
                      <SortHeaderWrap>
                        Sotuv narxi
                        <KeyboardArrowUpRoundedIcon
                          sx={{ fontSize: 14, color: "#98A2B3" }}
                        />
                      </SortHeaderWrap>
                    </HeaderCell>

                    <HeaderCell sx={{ width: "120px" }}>
                      <SortHeaderWrap>
                        Soni
                        <KeyboardArrowUpRoundedIcon
                          sx={{ fontSize: 14, color: "#98A2B3" }}
                        />
                      </SortHeaderWrap>
                    </HeaderCell>

                    <HeaderCell sx={{ width: "160px" }}>
                      <SortHeaderWrap>
                        Qo'shilgan vaqti
                        <KeyboardArrowUpRoundedIcon
                          sx={{ fontSize: 14, color: "#98A2B3" }}
                        />
                      </SortHeaderWrap>
                    </HeaderCell>
                  </StyledHeaderRow>
                </StyledTableHead>

                <TableBody>
                  {tableItems.map((item, index) => {
                    if (item.type === "group") {
                      return (
                        <GroupRow key={`group-${item.group}-${index}`}>
                          <GroupCell colSpan={7}>{item.group}</GroupCell>
                        </GroupRow>
                      );
                    }

                    const row = item.row!;

                    return (
                      <BodyRow key={row.id}>
                        <BodyCell>
                          <ProductCellWrap>
                            <ProductImage
                              src={row.image}
                              alt={row.productName}
                            />
                            <ProductText>{row.productName}</ProductText>
                          </ProductCellWrap>
                        </BodyCell>

                        <BodyCell>{row.sku}</BodyCell>
                        <BodyCell>{row.ikpu}</BodyCell>
                        <BodyCell>{row.buyPrice}</BodyCell>
                        <BodyCell>{row.sellPrice}</BodyCell>

                        <BodyCell>
                          <QuantityInput
                            value={quantities[row.id] ?? 0}
                            onChange={(e) =>
                              setQuantity(row.id, e.target.value)
                            }
                          />
                        </BodyCell>

                        <BodyCell>{row.addedAt}</BodyCell>
                      </BodyRow>
                    );
                  })}
                </TableBody>
              </StyledTable>
            </StyledTableContainer>

            <Footer>
              <FooterLeft>
                <FooterText>Showing</FooterText>

                <RowsPerPageControl size="small">
                  <StyledSelect
                    value={rowsPerPage}
                    onChange={(e) =>
                      handleChangeRowsPerPage(Number(e.target.value))
                    }
                    IconComponent={KeyboardArrowDownRoundedIcon}
                  >
                    <StyledMenuItem value={5}>5</StyledMenuItem>
                    <StyledMenuItem value={10}>10</StyledMenuItem>
                    <StyledMenuItem value={15}>15</StyledMenuItem>
                    <StyledMenuItem value={20}>20</StyledMenuItem>
                  </StyledSelect>
                </RowsPerPageControl>

                <FooterText>of {totalCount}</FooterText>
              </FooterLeft>

              <FooterRight>
                <ArrowButton onClick={handlePrevPage} disabled={page === 1}>
                  <KeyboardArrowLeftRoundedIcon sx={{ fontSize: 16 }} />
                </ArrowButton>

                {pageNumbers[0] > 1 ? (
                  <>
                    <PageButton onClick={() => setPage(1)}>1</PageButton>
                    <Dots>...</Dots>
                  </>
                ) : null}

                {pageNumbers.map((pageNumber) => (
                  <PageButton
                    key={pageNumber}
                    active={pageNumber === page}
                    onClick={() => setPage(pageNumber)}
                  >
                    {pageNumber}
                  </PageButton>
                ))}

                {pageNumbers[pageNumbers.length - 1] < totalPages ? (
                  <>
                    <Dots>...</Dots>
                    <PageButton onClick={() => setPage(totalPages)}>
                      {totalPages}
                    </PageButton>
                  </>
                ) : null}

                <ArrowButton
                  onClick={handleNextPage}
                  disabled={page === totalPages}
                >
                  <KeyboardArrowRightRoundedIcon sx={{ fontSize: 16 }} />
                </ArrowButton>
              </FooterRight>
            </Footer>
          </CardWrapper>
        </PageWrapper>
      </PageBg>
    </ThemeProvider>
  );
};

export default memo(WereHouse);
