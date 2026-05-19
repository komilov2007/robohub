import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

import {
  ArrowButton,
  Dots,
  Footer,
  FooterLeft,
  FooterRight,
  FooterText,
  PageButton,
  RowsPerPageControl,
  StyledMenuItem,
  StyledSelect,
} from "@/pages/dashboard/were-house/styled";

type Props = {
  page: number;
  setPage: (page: number) => void;
  rowsPerPage: number;
  handleChangeRowsPerPage: (value: number) => void;
  totalCount: number;
  totalPages: number;
  pageNumbers: number[];
  handlePrevPage: () => void;
  handleNextPage: () => void;
};

const WarehousePagination = ({
  page,
  setPage,
  rowsPerPage,
  handleChangeRowsPerPage,
  totalCount,
  totalPages,
  pageNumbers,
  handlePrevPage,
  handleNextPage,
}: Props) => {
  return (
    <Footer>
      <FooterLeft>
        <FooterText>Showing</FooterText>

        <RowsPerPageControl size="small">
          <StyledSelect
            value={rowsPerPage}
            onChange={(e) => handleChangeRowsPerPage(Number(e.target.value))}
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

        <ArrowButton onClick={handleNextPage} disabled={page === totalPages}>
          <KeyboardArrowRightRoundedIcon sx={{ fontSize: 16 }} />
        </ArrowButton>
      </FooterRight>
    </Footer>
  );
};

export default WarehousePagination;
