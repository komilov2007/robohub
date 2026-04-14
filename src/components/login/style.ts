import { styled } from '@mui/material/styles';
import {
  Box,
  TextField,
  Typography,
  MenuItem,
  CircularProgress,
} from '@mui/material';
export const Container = styled('form')<{ isLogin: boolean }>`
  flex: 1;
  height: 100vh;
  width: 50%;
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
    -webkit-box-shadow: 0 0 0px 1000px none inset !important;
    box-shadow: 0 0 0px 1000px none inset !important;
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
  color: #596881;
  margin-bottom: 3px;
  font-size: 14px;
`;
export const StyledMenuItem = styled(MenuItem)`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const Loader = styled(CircularProgress)<{ isLogin: Boolean }>(
  ({ isLogin }) => ({
    color: isLogin ? 'gray' : 'blue',
  })
);
