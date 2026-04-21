import { Box, Button, IconButton, InputBase, Pagination, TableCell, TableContainer, TableHead, TableRow, styled } from '@mui/material'

export const PageWrapper = styled(Box)({
  width: '100%',
  minHeight: '100vh',
  background: '#f5f7fb',
  padding: '16px',
  boxSizing: 'border-box',
})

export const ContentCard = styled(Box)({
  width: '100%',
  background: '#ffffff',
  border: '1px solid #dfe5ec',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 1px 2px rgba(16, 24, 40, 0.04)',
})

export const Header = styled(Box)({
  padding: '14px 18px',
  borderBottom: '1px solid #e6ebf1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '12px',
})

export const Title = styled(Box)({
  fontSize: '22px',
  lineHeight: 1.2,
  fontWeight: 700,
  color: '#1f2937',
})

export const ImportButton = styled(Button)({
  minWidth: '156px',
  height: '38px',
  textTransform: 'none',
  borderRadius: '10px',
  background: '#00695c',
  color: '#fff',
  fontWeight: 600,
  boxShadow: 'none',
  padding: '0 16px',
  '&:hover': {
    background: '#005247',
    boxShadow: 'none',
  },
})

export const Toolbar = styled(Box)({
  padding: '14px 16px',
  borderBottom: '1px solid #e6ebf1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '16px',
  flexWrap: 'wrap',
})

export const LeftTools = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  flexWrap: 'wrap',
})

export const RightTools = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  flexWrap: 'wrap',
  marginLeft: 'auto',
})

export const SearchBox = styled(Box)({
  width: '530px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  border: '1px solid #d9e0e7',
  borderRadius: '10px',
  background: '#fff',
  padding: '0 14px',
  boxSizing: 'border-box',
})

export const SearchInput = styled(InputBase)({
  flex: 1,
  fontSize: '14px',
  color: '#344054',
  '& input::placeholder': {
    color: '#98a2b3',
    opacity: 1,
  },
})

export const ToolButton = styled(Button)({
  height: '40px',
  minWidth: '96px',
  borderRadius: '10px',
  border: '1px solid #d9e0e7',
  background: '#fff',
  color: '#344054',
  textTransform: 'none',
  fontSize: '14px',
  fontWeight: 500,
  boxShadow: 'none',
  padding: '0 14px',
  '&:hover': {
    background: '#f9fafb',
    borderColor: '#cfd8e3',
    boxShadow: 'none',
  },
})

export const HotkeyBox = styled(Box)({
  minWidth: '48px',
  height: '24px',
  borderRadius: '8px',
  border: '1px solid #e4e7ec',
  background: '#f8fafc',
  color: '#667085',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '12px',
  fontWeight: 600,
})

export const StyledTableContainer = styled(TableContainer)({
  width: '100%',
  overflowX: 'auto',
})

export const StyledHead = styled(TableHead)({
  background: '#f8fafc',
})

export const StyledHeadRow = styled(TableRow)({
  '& .MuiTableCell-root': {
    borderBottom: '1px solid #e6ebf1',
  },
})

export const HeadCell = styled(TableCell)({
  padding: '12px 12px',
  fontSize: '13px',
  fontWeight: 600,
  color: '#667085',
  whiteSpace: 'nowrap',
  background: '#f8fafc',
})

export const BodyCell = styled(TableCell)({
  padding: '8px 12px',
  fontSize: '13px',
  color: '#344054',
  borderBottom: '1px solid #e6ebf1',
  verticalAlign: 'middle',
})

export const GroupRow = styled(TableRow)({
  background: '#f9fafb',
  '& .MuiTableCell-root': {
    borderBottom: '1px solid #e6ebf1',
    paddingTop: '10px',
    paddingBottom: '10px',
  },
})

export const GroupTitle = styled(Box)({
  fontSize: '13px',
  fontWeight: 700,
  color: '#344054',
  textTransform: 'uppercase',
})

export const ProductCell = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  minWidth: 0,
})

export const ProductImage = styled('img')({
  width: '22px',
  height: '22px',
  borderRadius: '4px',
  objectFit: 'cover',
  border: '1px solid #d0d5dd',
  flexShrink: 0,
})

export const ProductName = styled(Box)({
  fontSize: '13px',
  color: '#344054',
  lineHeight: 1.35,
})

export const QuantityInput = styled(InputBase)({
  width: '96px',
  height: '34px',
  border: '1px solid #d0d5dd',
  borderRadius: '6px',
  background: '#fff',
  padding: '0 10px',
  fontSize: '13px',
  color: '#344054',
  '& input': {
    textAlign: 'left',
  },
})

export const Footer = styled(Box)({
  height: '56px',
  padding: '0 16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '16px',
})

export const FooterLeft = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: '#667085',
  fontSize: '13px',
})

export const RowsButton = styled(Button)({
  minWidth: '62px',
  height: '32px',
  borderRadius: '8px',
  border: '1px solid #d0d5dd',
  background: '#fff',
  color: '#344054',
  textTransform: 'none',
  fontSize: '13px',
  fontWeight: 500,
  boxShadow: 'none',
})

export const FooterRight = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
})

export const PageText = styled(Box)({
  fontSize: '13px',
  color: '#667085',
})

export const ArrowButton = styled(IconButton)({
  width: '28px',
  height: '28px',
  borderRadius: '6px',
  color: '#667085',
})

export const StyledPagination = styled(Pagination)({
  '& .MuiPagination-ul': {
    gap: '2px',
  },
  '& .MuiPaginationItem-root': {
    minWidth: '28px',
    height: '28px',
    borderRadius: '6px',
    fontSize: '13px',
    color: '#667085',
  },
  '& .Mui-selected': {
    background: '#eef2ff',
    color: '#3538cd',
    fontWeight: 600,
  },
})