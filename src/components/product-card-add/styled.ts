

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import InputBase from '@mui/material/InputBase';
import { Link } from 'react-router-dom';

export const PageWrapper = styled(Box)({
  minHeight: '100vh',
  backgroundColor: '#F5F7FA',
  padding: '12px 12px 24px',
  boxSizing: 'border-box',
  fontFamily: 'Inter, sans-serif',
    paddingLeft: '34px', // 252 + 12
});

export const TopBar = styled(Box)({
  position: 'fixed',
  top: 0,
  left: '252px',
  width: 'calc(100% - 252px)',
  height: '74px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 12px',
  boxSizing: 'border-box',
  background: '#FFFFFF',
  zIndex: 1000,
  borderBottom: '1px solid #E4E7EC',
  '@media (max-width: 1000px)': {
    left: 0,
    width: '100%',
  },
});

export const BreadcrumbsRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

export const BackButton = styled(Button)({
  minWidth: '20px',
  width: '20px',
  height: '20px',
  borderRadius: '8px',
  padding: 0,
  marginLeft: '10px',
  marginTop: '20px',
});

export const BreadcrumbText = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  lineHeight: '16px',
  color: '#8796AF',
  fontWeight: 600,
});

export const StrongHead = styled(Typography)({
  lineHeight: '16px',
  color: '#000000',
  fontWeight: 600,
  fontFamily: 'Inter, sans-serif',
});

export const StrongHeadLink = styled(Link)({
  lineHeight: '16px',
  color: '#8796AF',
  fontWeight: 600,
  textDecoration: 'none',
  fontFamily: 'Inter, sans-serif',
  marginLeft:'10px'
});

export const SubmitButton = styled(Button)({
  height: '30px',
  borderRadius: '8px',
  padding: '0 12px',
  textTransform: 'none',
  fontSize: '12px',
  fontWeight: 600,
  color: '#98A2B3',
  backgroundColor: '#F2F4F7',
  boxShadow: 'none',
});

export const ContentLayout = styled(Box)({
  display: 'block',
  width: '100%',
});

export const Sidebar = styled(Box)({
  position: 'fixed',
  top: '90px',
  left: '265px',
  width: '264px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  zIndex: 20,
  '@media (max-width: 1000px)': {
    position: 'static',
    width: '100%',
  },
});

export const SidebarCard = styled(Card)({
  borderRadius: '10px',
  border: '1px solid #D0D5DD',
  boxShadow: 'none',
  backgroundColor: '#FFFFFF',
  padding: '10px',
  width: '264px',
  boxSizing: 'border-box',
  '@media (max-width: 1000px)': {
    width: '100%',
  },
});

export const SidebarTitle = styled(Typography)({
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: 600,
  color: '#101828',
});

export const SidebarDescription = styled(Typography)({
  marginTop: '2px',
  fontSize: '11px',
  lineHeight: '15px',
  color: '#98A2B3',
});

export const StepList = styled(Box)({
  marginTop: '12px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const StepRow = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '30px 1fr',
  gap: '8px',
  alignItems: 'start',
});
export const StepBorder = styled(Box)<{ active?: boolean }>(({ active }) => ({
  position: 'relative',
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  border: active ? '1px solid #00524F' : '1px solid #98A2B3',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&::after': {
    content: '""',
    position: 'absolute',
    top: '30px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '2px',
    height: '10px',
    backgroundColor: '#98A2B3',
  },

  '&:last-of-type::after': {
    display: 'none',
  },
}));

export const StepCircle = styled(Box)({
  width: '23px',
  height: '23px',
  borderRadius: '50%',
  backgroundColor: '#EFF3F8',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '11px',
  fontWeight: 700,
});

export const StepContent = styled(Box)({
  marginLeft: '10px',
});

export const StepCaption = styled(Typography)({
  fontSize: '10px',
  lineHeight: '14px',
  color: '#98A2B3',
});

export const StepLabel = styled(Typography)({
  fontSize: '13px',
  lineHeight: '18px',
  fontWeight: 500,
  color: '#667085',
});

export const VideoButton = styled(Button)({
  marginTop: '12px',
  width: '100%',
  height: '34px',
  borderRadius: '8px',
  textTransform: 'none',
  fontSize: '12px',
  fontWeight: 600,
  color: '#FFFFFF',
  backgroundColor: '#0B6E69',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#095B57',
    boxShadow: 'none',
  },
});

export const MainColumn = styled(Box)({
  marginLeft: '255px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  minWidth: 0,
  '@media (max-width: 1000px)': {
    marginLeft: 0,
  },
  marginTop:'78px'
});

export const SectionCard = styled(Card)({
  borderRadius: '8px',
  border: '1px solid #DDE3EA',
  boxShadow: 'none',
  backgroundColor: '#FFFFFF',
  overflow: 'hidden',
});

export const SectionHeader = styled(Box)({
  minHeight: '34px',
  padding: '0 10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px solid #E9EEF3',
  backgroundColor: '#F7F9FC',
});

export const SectionTitle = styled(Typography)({
  fontSize: '12px',
  lineHeight: '16px',
  fontWeight: 600,
  color: '#101828',
});

export const GenerateButton = styled(Button)({
  minWidth: '94px',
  height: '24px',
  borderRadius: '6px',
  padding: '0 8px',
  textTransform: 'none',
  fontSize: '10px',
  fontWeight: 600,
  color: '#FFFFFF',
  backgroundColor: '#0B6E69',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#095B57',
    boxShadow: 'none',
  },
});

export const SectionBody = styled(Box)({
  padding: '10px',
});

export const FieldBlock = styled(Box)({
  width: '100%',
  '& + &': {
    marginTop: '12px',
  },
});

export const FieldLabel = styled(Typography)({
  marginBottom: '6px',
  fontSize: '11px',
  lineHeight: '14px',
  color: '#344054',
});

export const HintText = styled(Typography)({
  marginTop: '-2px',
  marginBottom: '8px',
  fontSize: '11px',
  lineHeight: '15px',
  color: '#98A2B3',
});

export const RequiredMark = styled('span')({
  color: '#F04438',
});

export const MarketplaceList = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const MarketplaceItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const StyledCheckbox = styled(Checkbox)({
  padding: 0,
  color: '#D0D5DD',
  '&.Mui-checked': {
    color: '#00524F',
  },
  '&.MuiCheckbox-indeterminate': {
    color: '#00524F',
  },
});

export const MarketplaceName = styled(Typography)({
  fontSize: '13px',
  lineHeight: '18px',
  color: '#344054',
});

export const MarketplaceBadge = styled(Box)<{ tone?: 'link' | 'share' }>(({ tone }) => ({
  height: '18px',
  padding: '0 6px',
  borderRadius: '999px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '10px',
  fontWeight: 700,
  ...(tone === 'share'
    ? {
        color: '#FFFFFF',
        backgroundColor: '#0B6E69',
      }
    : {
        color: '#155EEF',
        backgroundColor: '#EFF8FF',
      }),
}));

export const MarktPlace = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '12px',
});

export const MarktBtn = styled(Typography)({
  background: '#00524F',
  padding: '2px 6px',
  fontSize: '12px',
  color: 'white',
  borderRadius: '10px',
});

export const Spacer12 = styled(Box)({
  height: '12px',
});

export const RichToolbar = styled(Box)({
  height: '28px',
  border: '1px solid #D0D5DD',
  borderBottom: 'none',
  borderTopLeftRadius: '6px',
  borderTopRightRadius: '6px',
  backgroundColor: '#F9FAFB',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '0 8px',
  overflowX: 'auto',
});

export const ToolbarText = styled(Typography)({
  fontSize: '10px',
  lineHeight: '12px',
  color: '#667085',
  whiteSpace: 'nowrap',
});

export const RichInput = styled(InputBase)({
  width: '100%',
  border: '1px solid #D0D5DD',
  borderBottomLeftRadius: '6px',
  borderBottomRightRadius: '6px',
  alignItems: 'flex-start',
  padding: '10px',
  '& textarea': {
    minHeight: '120px !important',
    fontSize: '11px',
    lineHeight: '16px',
    color: '#101828',
  },
  '& textarea::placeholder': {
    color: '#98A2B3',
    opacity: 1,
  },
});

export const UploadArea = styled(Box)({
  width: '100%',
  minHeight: '86px',
  border: '1px dashed #C9D3DF',
  borderRadius: '6px',
  backgroundColor: '#FCFDFD',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '12px',
  boxSizing: 'border-box',
  cursor: 'pointer',
});

export const UploadIconWrap = styled(Box)({
  width: '22px',
  height: '22px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#0B6E69',
  marginBottom: '6px',
});

export const UploadTitle = styled(Typography)({
  fontSize: '10px',
  lineHeight: '14px',
  color: '#344054',
  fontWeight: 600,
});

export const UploadDescription = styled(Typography)({
  marginTop: '2px',
  fontSize: '10px',
  lineHeight: '14px',
  color: '#98A2B3',
});

export const HiddenFileInput = styled('input')({
  display: 'none',
});

export const MediaPreviewRow = styled(Box)({
  display: 'flex',
  gap: '8px',
  flexWrap: 'wrap',
  marginTop: '10px',
});

export const MediaThumb = styled(Box)<{ image?: string }>(({ image }) => ({
  width: '44px',
  height: '64px',
  borderRadius: '4px',
  border: '1px solid #D0D5DD',
  backgroundColor: '#F5F7FA',
  backgroundImage: image ? `url(${image})` : 'none',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  overflow: 'hidden',
}));

export const PlusThumb = styled(Box)({
  width: '44px',
  height: '64px',
  borderRadius: '4px',
  border: '1px dashed #C9D3DF',
  backgroundColor: '#FCFDFD',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#98A2B3',
  fontSize: '24px',
  cursor: 'pointer',
});

export const StyledTextField = styled(TextField)({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    minHeight: '32px',
    borderRadius: '6px',
    backgroundColor: '#FFFFFF',
    '& fieldset': {
      borderColor: '#D0D5DD',
    },
    '&:hover fieldset': {
      borderColor: '#BFC9D5',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0B6E69',
      borderWidth: '1px',
    },
  },
  '& .MuiInputBase-input': {
    fontSize: '11px',
    lineHeight: '14px',
    padding: '8px 10px',
    color: '#101828',
  },
  '& .MuiInputBase-input::placeholder': {
    color: '#98A2B3',
    opacity: 1,
  },
});

export const StyledFormControl = styled(FormControl)({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    minHeight: '32px',
    borderRadius: '6px',
    '& fieldset': {
      borderColor: '#D0D5DD',
    },
    '&:hover fieldset': {
      borderColor: '#BFC9D5',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0B6E69',
    },
  },
  '& .MuiSelect-select': {
    padding: '8px 10px',
    fontSize: '11px',
    lineHeight: '14px',
    color: '#101828',
  },
});

export const StyledInputLabel = styled(InputLabel)({
  fontSize: '11px',
});

export const StyledSelect = styled(Select)({});
export const StyledMenuItem = styled(MenuItem)({});