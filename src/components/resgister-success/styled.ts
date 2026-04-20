import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const SuccessContainer = styled(Box)(() => ({
  display: 'flex',
}));

export const SuccessLeftSide = styled(Box)(() => ({
  width: '100%',
  padding: '20px',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  gap: '120px',
  justifyContent: 'space-between',
}));

export const SuccessEmptyBox = styled(Box)(() => ({
  width: '100%',
}));

export const SuccessCenterWrap = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '-450px',
}));

export const SuccessCard = styled(Stack)(() => ({
  width: '100%',
  maxWidth: '370px',
  display: 'flex',
  paddingTop: '80px',
  paddingBottom: '80px',
}));

export const SuccessIconBox = styled(Box)(() => ({
  width: 52,
  height: 52,
  marginLeft: 'calc(50% - 26px)',
  borderRadius: '14px',
  background: 'linear-gradient(180deg, #6EE7A8 0%, #22C55E 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0px 8px 18px rgba(34, 197, 94, 0.28)',
  marginBottom: '28px',
}));

export const SuccessTitle = styled(Typography)(() => ({
  fontSize: '28px',
  lineHeight: '36px',
  fontWeight: 700,
  color: '#111827',
  textAlign: 'center',
  marginBottom: '10px',
}));

export const SuccessDescription = styled(Typography)(() => ({
  maxWidth: '360px',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 400,
  color: '#64748B',
  textAlign: 'center',
  marginBottom: '28px',
}));

export const SuccessButton = styled(Link)(() => ({
  height: '48px',
  borderRadius: '10px',
  fontSize: '16px',
  fontWeight: 500,
  color: '#FFFFFF',
  background: 'linear-gradient(180deg, #0F766E 0%, #115E59 100%)',
  boxShadow: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  '&:hover': {
    background: 'linear-gradient(180deg, #0F766E 0%, #115E59 100%)',
    boxShadow: 'none',
  },
}));

export const SuccessRightSide = styled(Box)(() => ({
  display: 'flex',
}));