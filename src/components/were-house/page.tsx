import { InputAdornment, TableBody, ThemeProvider } from "@mui/material";
import { memo } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

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
          <HeaderTitle>{t("orders_title")}</HeaderTitle>

          <ImportLink to="/">
            <IconImport />
            <ImportText>{t("import_excel_file")}</ImportText>
          </ImportLink>
        </HeaderBar>

        <ToolbarSection>
          <ToolbarLeft>
            <StyledInput
              placeholder={t("search_placeholder_dots")}
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
              {t("filter")}
            </FilterAction>
          </ToolbarLeft>

          <ToolbarRight>
            <ToolbarLink to="/">
              <IconMapping />
              {t("mapping")}
            </ToolbarLink>

            <ToolbarLink to="/">
              <IconManual />
              {t("manual")}
            </ToolbarLink>

            <ToolbarAction onClick={handleOpenModal}>
              <IconBasket />
              {t("stoplist")}
            </ToolbarAction>
          </ToolbarRight>

          <StyledModal
            open={modal.value}
            onSubmit={handleSubmit(onSubmit)}
            onClose={handleCloseModal}
          >
            <ModalCard>
              <ModalHeader>
                <ModalTitle>{t("stoplist")}</ModalTitle>

                <ModalCloseButton onClick={handleCloseModal}>
                  <IconCancel />
                </ModalCloseButton>
              </ModalHeader>

              <ModalInfoBox>
                <ModalInfoIconWrap>
                  <IconInfo />
                </ModalInfoIconWrap>

                <ModalInfoText>{t("stoplist_description")}</ModalInfoText>
              </ModalInfoBox>

              <ModalFieldSection>
                <ModalFieldTitle>{t("minimum_quantity")}</ModalFieldTitle>

                <Controller
                  control={control}
                  name="text"
                  render={({ field }) => (
                    <StyledField
                      {...field}
                      placeholder={t("enter_stoplist_min_quantity")}
                    />
                  )}
                />
              </ModalFieldSection>

              <ModalFooter>
                <ModalCancelButton onClick={handleCloseModal}>
                  {t("close")}
                </ModalCancelButton>

                <ModalSaveButton
                  variant="contained"
                  vocab="loginBtn"
                  type="submit"
                  onClick={handleSubmit(onSubmit)}
                >
                  {t("save")}
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
                      {t("product_name")}
                    </HeaderCell>

                    <HeaderCell sx={{ width: "150px" }}>{t("sku")}</HeaderCell>

                    <HeaderCell sx={{ width: "160px" }}>{t("ikpu")}</HeaderCell>

                    <HeaderCell sx={{ width: "120px" }}>
                      <SortHeaderWrap>
                        {t("purchase_price")}
                        <KeyboardArrowUpRoundedIcon
                          sx={{ fontSize: 14, color: "#98A2B3" }}
                        />
                      </SortHeaderWrap>
                    </HeaderCell>

                    <HeaderCell sx={{ width: "120px" }}>
                      <SortHeaderWrap>
                        {t("sale_price")}
                        <KeyboardArrowUpRoundedIcon
                          sx={{ fontSize: 14, color: "#98A2B3" }}
                        />
                      </SortHeaderWrap>
                    </HeaderCell>

                    <HeaderCell sx={{ width: "120px" }}>
                      <SortHeaderWrap>
                        {t("quantity")}
                        <KeyboardArrowUpRoundedIcon
                          sx={{ fontSize: 14, color: "#98A2B3" }}
                        />
                      </SortHeaderWrap>
                    </HeaderCell>

                    <HeaderCell sx={{ width: "160px" }}>
                      <SortHeaderWrap>
                        {t("added_time")}
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
                <FooterText>{t("showing")}</FooterText>

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

                <FooterText>
                  {t("of")} {totalCount}
                </FooterText>
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
