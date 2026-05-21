import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
export const AuthPageWrap = styled(Box)`
  width: 100%;
  min-height: auto;
  display: flex;
  justify-content: center;
  background: transparent;
  overflow: visible;
`;

export const LeftColumn = styled(Box)`
  width: min(100%, 540px);
  max-width: 540px;
  min-height: auto;
  display: flex;
  flex-direction: column;
  background: transparent;
  padding: 0;
  box-sizing: border-box;
  margin: 0 auto;

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

  @media (max-width: 550px) {
    width: 100%;
    max-width: 400px;
  }

  @media (max-width: 420px) {
    max-width: 350px;
  }

  @media (max-width: 350px) {
    max-width: 280px;
  }
`;

export const CenterArea = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormBlock = styled("form")`
  width: 100%;
  max-width: 540px;
  display: flex;
  flex-direction: column;

  @media (max-width: 550px) {
    max-width: 400px;
  }

  @media (max-width: 420px) {
    max-width: 350px;
  }

  @media (max-width: 350px) {
    max-width: 280px;
  }
`;
export const AuthRightSide = styled(Box)`
  flex: 0 0 50%;
  max-width: 50%;
  @media (max-width: 970px) {
    display: none;
  }
`;
export const HeaderArea = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
}));

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
export const LanguageSelectWrap = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
}));
export const LanguageSelect = styled(Select)`
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
  @media (max-width: 350px) {
    font-size: 14px;
  }
`;
export const SubmitButton = styled(Button)`
  position: relative;
  width: 100%;
  height: 40px;
  margin-top: 30px;
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
