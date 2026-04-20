import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import CircularProgress from '@mui/material/CircularProgress';
import LoadingButton from '@mui/lab/LoadingButton';
import { Select } from '@mui/material';

export const Container = styled('form')<{ isLogin: boolean }>`
  flex: 1;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  box-sizing: border-box;
`;

export const LoginFormCenter = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const LoginFormOptions = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AutofillOverride = styled('div')`
  display: contents;

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  select:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
    box-shadow: 0 0 0px 1000px transparent inset !important;
    -webkit-text-fill-color: #000 !important;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const StyledTextField = styled(TextField)`
  width: 100%;

  & .MuiOutlinedInput-root {
    height: 40px;
    border-radius: 12px;
    font-size: 14px;
    background-color: white;

    &.Mui-focused fieldset {
      border-color: #60788f;
      box-shadow: 0px 0px 3px #60788f;
    }
  }
`;

export const FieldLabel = styled(Typography)`
  color: #111625;
  margin-bottom: 3px;
  font-size: 14px;
`;

export const StyledMenuItem = styled(MenuItem)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Loader = styled(CircularProgress)<{ isLogin: boolean }>(
  ({ isLogin }) => ({
    color: isLogin ? 'gray' : 'blue',
  })
);

export const StyledLoginButton = styled(LoadingButton)`
  width: 100%;
  min-height: 40px;
  border-radius: 12px;
  text-transform: none;
  box-shadow: none;

  &:hover {
    box-shadow: none;
  }
`;

export const RightWrapper = styled(Box)`
  width: 100%;
  height: 100vh;
  border: none;
  padding: 16px;
`;

export const RightCard = styled(Box)`
  background: linear-gradient(to bottom, #00524f, #0f8484);
  width: 100%;
  height: 100%;
  border-radius: 15px;
  padding: 40px 55px;
`;

export const RightContent = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  overflow: hidden;
  min-height: 0;
`;

export const LogoWrapper = styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const LogoBox = styled(Box)``;

export const TitleBlock = styled(Box)``;

export const ImageWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const StyledImage = styled('img')`
  width: 70%;
`;

export const LoginRightLogoText = styled(Typography)`
  font-size: 42px !important;
  font-weight: 600;
  mt: '-10px';
  color: #b8ffb0;
`;

export const LoginRightTitle = styled(Typography)`
  color: white;
  font-weight: 600;

  font-size: 32px !important;
`;
export const LoginRightText = styled(Typography)`
  color: white;
`;

export const LoginRightTextBtm = styled(Typography)`
  color: white;
`;

export const LoginLeftNoAcc = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const LanguageSelectWrap = styled(Box)`
  display: flex;
  justify-content: flex-end;
  `;

export  const LanguageSelect = styled(Select)`
  height: 36px;
  border-radius: 8px;
  background-color: #F5F5F5;
  border: #E4E4E4 solid 1px;
  '&::before': {
    border: 'none',
  },
`;


export const LoginOuter = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const LoginTitleWrap = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const LoginFieldsWrap = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FooterWrap = styled(Box)`
  display: flex;
  justify-content: center;
  text-size: 10px !important;  
  color: #7d879c;
`;

export const FooterInner = styled(Box)`
  display: flex;
  text-size: 10px !important;  

  gap: 24px;
`;
