import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const AuthPageWrap = styled(Box)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  background: #f8fafc;
  
`;

export const LeftColumn = styled(Box)`
  width: 50%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f8fafc;
  padding: 24px 40px 32px;


  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  select:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
    box-shadow: 0 0 0px 1000px transparent inset !important;
    -webkit-text-fill-color: #000 !important;
    transition: background-color 5000s ease-in-out 0s;
`;

export const AuthRightSide = styled(Box)`
  width: 50%;
  min-height: 100vh;
`;

export const HeaderArea = styled(Box)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 40px;
`;

export const CenterArea = styled(Box)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormBlock = styled(Box)`
  width: 464px;
  display: flex;
  flex-direction: column;
`;

export const BackButton = styled(Button)`
  width: 40px;
  min-width: 40px;
  height: 40px;
  padding: 0;
  border: 1px solid #d7dfeb;
  border-radius: 10px;
  background: transparent;
  box-shadow: none;
  color: #101828;
  margin-bottom: 32px;

  &:hover {
    background: transparent;
    box-shadow: none;
  }
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

export const StyledMenuItem = styled(MenuItem)`
  font-size: 14px;
  display: flex;
  gap: 10px;
  `;

export const TitleWrap = styled(Box)`
  margin-bottom: 8px;
`;

export const SubTitleWrap = styled(Box)`
  margin-bottom: 24px;
`;

export const FieldWrap = styled(Box)`
  margin-bottom: 6px;
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

export const SubmitButton = styled(Button)`
  position: relative;
  width: 464px;
  height: 40px;
  margin-top: 20px;
  margin-bottom: 12px;
  border-radius: 10px;
  text-transform: none;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  background:
    linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0)),
    #00524f;
  box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.4);
  }
`;

export const BottomTextWrap = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const BottomInlineText = styled(Typography)`
  cursor: pointer;
`;