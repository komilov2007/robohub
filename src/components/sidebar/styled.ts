import { Box,  Button,  IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

type ActiveProps = {
  active?: boolean;
};

type CollapsedProps = {
  collapsed?: boolean;
};

export const SidebarWrap = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'collapsed',
})<{ collapsed?: boolean }>(({ collapsed }) => ({
  width: collapsed ? 84 : 260,
  minWidth: collapsed ? 84 : 250,
  maxWidth: collapsed ? 84 : 250,
  height: '100vh',
  background: '#005F56',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'width 0.3s ease, min-width 0.3s ease, max-width 0.3s ease',
  padding:'10px'
}))


export const GlowShape = styled(Box)(() => ({
  position: 'absolute',
  top: 60,
  left: '50%',
  transform: 'translateX(-50%)',
  width: 200,
  height: 160,
  borderRadius: 16,
  background: 'rgba(255,255,255,0.10)',
}));


export const ContentWrap = styled(Box)(() => ({
  position: 'relative',
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 20px',
}));



export const TopArea = styled(Box)<{ collapsed?: boolean }>(
  ({ collapsed }) => ({
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: collapsed ? 'center' : 'space-between',
    marginBottom: 24,
    width: '100%',
  })
);
export const BrandWrap = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'collapsed',
})<CollapsedProps>(({ collapsed }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: collapsed ? 0 : 8,
  minWidth: 10,
  padding:'10px',
  justifyContent: collapsed ? 'center' : 'space-between',
  width: collapsed ? '100%' : 'auto',
}));

export const BrandLogo = styled(Box)(() => ({
  width: 33,
  height: 18,
  position: 'relative',
  flexShrink: 0,
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: 999,
    background: '#A7F3A0',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    width: 11,
    height: 11,
    borderRadius: '50%',
    background: '#005F56',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '-10px 0 0 #005F56, 10px 0 0 #005F56',
  },
}));

export const BrandText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'collapsed',
})<CollapsedProps>(({ collapsed }) => ({
  color: '#A7F3A0',
  fontSize: 17,
  fontWeight: 700,
  lineHeight: '22px',
  whiteSpace: 'nowrap',
  opacity: collapsed ? 0 : 1,
  width: collapsed ? 0 : 'auto',
  overflow: 'hidden',
  transition: 'all 0.25s ease',
}));

export const ToggleButton = styled(IconButton)(() => ({

  color: '#D1FAE5',
  background: 'transparent',
  flexShrink: 0,
  '&:hover': {
    background: 'rgba(255,255,255,0.06)',
  },
}));

export const MenuWrap = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
}));

export const MenuItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'collapsed',
})<ActiveProps & CollapsedProps>(({ active, collapsed }) => ({
  height: 45,
  borderRadius: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: collapsed ? 'center' : 'flex-start',
  gap: collapsed ? 0 : 10,
  padding: collapsed ? '0 8px' : '0 12px',
  cursor: 'pointer',
  userSelect: 'none',
  background: active ? 'rgba(255,255,255,0.08)' : 'transparent',
  border: active ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
  transition: 'all 0.2s ease',
  '&:hover': {
    background: active ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.04)',
  },
}));

export const MenuIconWrap = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active',
})<ActiveProps>(({ active }) => ({
  color: active ? '#C8F29B' : '#C7D5D3',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  '& svg': {
    fontSize: 18,
  },
}));

export const MenuText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'collapsed',
})<ActiveProps & CollapsedProps>(({ active, collapsed }) => ({
  color: active ? '#DDF7B7' : '#C5CFDD',
  fontSize: 14,
  fontWeight: 500,
  fontFamily: 'inter',
  lineHeight: '20px',
  whiteSpace: 'nowrap',
  opacity: collapsed ? 0 : 1,
  width: collapsed ? 0 : 'auto',
  overflow: 'hidden',
  transition: 'all 0.25s ease',
}));

export const BottomArea = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
}));

export const NotificationsRow = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'collapsed',
})<CollapsedProps>(({ collapsed }) => ({
  height: 36,
  display: 'flex',
  alignItems: 'center',
  justifyContent: collapsed ? 'center' : 'space-between',
  padding: collapsed ? '0 8px' : '0 12px',
  borderRadius: 8,
  cursor: 'pointer',
  color: '#D7E5E2',
  '&:hover': {
    background: 'rgba(255,255,255,0.04)',
  },
}));

export const NotificationsLeft = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  minWidth: 0,
}));

export const NotificationsText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'collapsed',
})<CollapsedProps>(({ collapsed }) => ({
  fontSize: 14,
  lineHeight: '20px',
  color: '#D7E5E2',
  whiteSpace: 'nowrap',
  opacity: collapsed ? 0 : 1,
  width: collapsed ? 0 : 'auto',
  overflow: 'hidden',
  transition: 'all 0.25s ease',
}));

export const Badge = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'collapsed',
})<CollapsedProps>(({ collapsed }) => ({
  minWidth: 18,
  height: 18,
  borderRadius: 999,
  background: '#FACC15',
  color: '#1F2937',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 11,
  fontWeight: 700,
  flexShrink: 0,
  marginLeft: collapsed ? 0 : 8,
}));

export const UserCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'collapsed',
})<CollapsedProps>(({ collapsed }) => ({
  minHeight: 50,
  borderRadius: 8,
  background: 'rgba(255,255,255,0.08)',
  border: '1px solid rgba(255,255,255,0.04)',
  display: 'flex',
  alignItems: 'center',
  gap: collapsed ? 0 : 10,
  padding: collapsed ? '8px' : '8px 10px',
  justifyContent: collapsed ? 'center' : 'flex-start',
}));

export const AvatarWrap = styled(Box)(() => ({
  width: 28,
  height: 28,
  borderRadius: '50%',
  overflow: 'hidden',
  flexShrink: 0,
  background: '#E5E7EB',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
}));

export const UserInfo = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'collapsed',
})<CollapsedProps>(({ collapsed }) => ({
  minWidth: 0,
  opacity: collapsed ? 0 : 1,
  width: collapsed ? 0 : 'auto',
  overflow: 'hidden',
  transition: 'all 0.25s ease',
}));

export const UserName = styled(Typography)(() => ({
  color: '#FFFFFF',
  fontSize: 13,
  fontWeight: 600,
  lineHeight: '18px',
  whiteSpace: 'nowrap',
}));

export const UserPhone = styled(Typography)(() => ({
  color: '#B8CECB',
  fontSize: 12,
  fontWeight: 400,
  lineHeight: '16px',
  whiteSpace: 'nowrap',
}));


export const CardWrap = styled(Box)(() => ({
  width: '100%',
  maxWidth: 252,
  marginTop:60,
  height:300,
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  paddingBottom:'15px',
  borderBottom:'1px solid #cac6c633',
  marginBottom:'-40px'
}));

export const GlassBlock = styled(Box)(() => ({
  width: '100%',
  height: 256,
  borderRadius: 16,
    background:'#1F6764',

  border: '1px solid rgba(255, 255, 255, 0.08)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  boxSizing: 'border-box',
  padding: '142px 14px 14px 14px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const PhoneImage = styled('img')(() => ({
  position: 'absolute',
  top: '-25px',
  left: '40%',
  transform: 'translateX(-50%)',
  width: 166,
  height: 187,
  zIndex: 2,
}));

export const Title = styled(Typography)(() => ({
  fontSize: '14px',
  lineHeight: '100%',
  fontWeight: 700,
  color: '#FFFFFF',
  textAlign: 'center',
  marginBottom: 8,
  marginTop:0,
  fontFamily: 'inter',
}));

export const Description = styled(Typography)(() => ({
  fontSize: '12px',
  lineHeight: '100%',
  fontWeight: 400,
  opacity:'70%',
  color: 'white',
  textAlign: 'center',
  marginBottom: 10,
  fontFamily:'inter',
  zIndex: 20,

}));

export const InstallButton = styled(Button)(() => ({
  width: '100%',
  height: 44,
  borderRadius: 12,
  background: '#B7F08A',
  color: '#00524F',
  fontFamily:'inter',
  textTransform: 'none',
  fontSize: '14px',
  lineHeight: '18px',
  fontWeight: 600,
  boxShadow: 'none',
  '&:hover': {
    background: '#B7F08A',
    boxShadow: 'none',
  },
}));