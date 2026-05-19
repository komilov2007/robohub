import { ThemeProvider } from "@mui/material";
import { memo } from "react";

import theme from "@/theme/theme";

import { usePage } from "./usePage";

import {
  CardWrapper,
  HeaderBar,
  HeaderTitle,
  ImportLink,
  ImportText,
  PageBg,
  PageWrapper,
} from "./styled";

import IconImport from "@/assets/icons/icon-import.svg?react";
import WarehouseToolbar from "@/components/were-house/WarehouseToolbar";
import WarehouseTable from "@/components/were-house/WarehouseTable";
import WarehousePagination from "@/components/were-house/WarehousePagination";

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
          <HeaderTitle>Orders</HeaderTitle>

          <ImportLink to="/">
            <IconImport />
            <ImportText>Import excel file</ImportText>
          </ImportLink>
        </HeaderBar>

        <WarehouseToolbar
          modal={modal}
          control={control}
          handleCloseModal={handleCloseModal}
          handleOpenModal={handleOpenModal}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />

        <PageWrapper>
          <CardWrapper>
            <WarehouseTable
              tableItems={tableItems}
              quantities={quantities}
              setQuantity={setQuantity}
            />

            <WarehousePagination
              page={page}
              setPage={setPage}
              rowsPerPage={rowsPerPage}
              handleChangeRowsPerPage={handleChangeRowsPerPage}
              totalCount={totalCount}
              totalPages={totalPages}
              pageNumbers={pageNumbers}
              handlePrevPage={handlePrevPage}
              handleNextPage={handleNextPage}
            />
          </CardWrapper>
        </PageWrapper>
      </PageBg>
    </ThemeProvider>
  );
};

export default memo(WereHouse);
