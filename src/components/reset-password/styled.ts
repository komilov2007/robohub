import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
export const AuthPageWrap = styled(Box)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  background: #f8fafc;
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
export const TermsText = styled(Link)({
  color: "#00524F",
});
export const LeftColumn = styled(Box)`
  flex: 0 0 50%;
  max-width: 50%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f8fafc;
  padding: 24px 40px 32px;
  box-sizing: border-box;

  @media (max-width: 1040px) {
    flex: 1 1 100%;
    max-width: 100%;
    padding: 16px 20px 24px;
  }
`;
export const RightSide = styled(Box)`
  flex: 0 0 50%;
  max-width: 50%;

  @media (max-width: 1040px) {
    display: none;
  }
`;
export const HeaderArea = styled(Box)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 40px;
  width: 100%;
`;
export const CenterArea = styled(Box)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    width: 760px;
    max-width: 100%;
    margin: 0 auto;
  }
  @media (max-width: 1040px) {
    max-width: 680px;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 24px 16px;
  }
`;
export const FormBlock = styled(Box)`
  width: 548px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const LanguageSelectWrap = styled(Box)`
  display: flex;
  align-items: center;
`;
export const LanguageSelect = styled(Select)`
  width: 155px;
  height: 36px;
  border-radius: 10px;
  background: #f5f5f5;
  .MuiOutlinedInput-notchedOutline {
    border: 1px solid #d7dfeb;
  }
  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: #d7dfeb;
  }
  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #d7dfeb;
    border-width: 1px;
  }
  .MuiSelect-select {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-top: 8px;
    padding-bottom: 8px;
    font-size: 14px;
    color: #3e4a60;
  }
`;
export const StyledMenuItem = styled(MenuItem)`
  display: flex;
  gap: 16px;
`;
export const TitleWrap = styled(Box)`
  margin-bottom: 8px;
`;
export const SubTitleWrap = styled(Box)`
  margin-bottom: 24px;
`;
export const NameRow = styled(Box)`
  width: 100%;
  display: flex;
  gap: 16px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;
export const FieldBox = styled(Box)`
  flex: 1;
`;

export const FieldWrap = styled(Box)`
  margin-bottom: 6px;
  margin-top: 16px;
`;

export const StyledTextField = styled(TextField)`
  width: 100%;
  display: block;

  .MuiOutlinedInput-root {
    height: 40px;
    border-radius: 12px;
    background: #ffffff;
    padding-left: 2px;
    padding-right: 2px;
    padding-left: 10px;
  }

  .MuiOutlinedInput-notchedOutline {
    border: 1px solid #d7dfeb;
  }

  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: #d7dfeb;
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #00524f;
    border-width: 1px;
  }

  .MuiInputBase-input {
    font-size: 14px;
    font-weight: 400;
    color: #101828;
    padding: 10px 0;
  }

  .MuiInputBase-input::placeholder {
    color: #98a2b3;
    opacity: 1;
  }

  .MuiFormHelperText-root {
    margin-left: 0;
    margin-top: 6px;
    font-size: 12px;
  }
`;

export const PasswordSection = styled(Box)`
  width: 100%;
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

export const PasswordEyeButton = styled(IconButton)`
  color: #596881;
  padding: 6px;
`;
export const Confirm = styled(Box)`
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
export const PasswordStrengthWrap = styled(Box)`
  width: 100%;
  margin-top: 12px;
`;

export const PasswordStrengthTop = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PasswordStrengthBars = styled(Box)`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
`;

export const PasswordStrengthBar = styled(Typography)<{
  level?: number;
  score?: number;
  active?: boolean;
}>`
  height: 4px;
  border-radius: 999px;
  background: ${({ level, score }) => {
    if (!score || score < (level || 0)) return "#D7DFEB";

    if (score === 1) return "#DF1C41";
    if (score === 2) return "#f59e0b";
    if (score === 3) return "#00524F";
    return "#00524F";
  }};
`;
export const PasswordStrengthText = styled(Typography)<{
  score?: number;
}>`
  font-size: 12px;
  font-weight: 500;

  color: ${({ score }) => {
    if (!score) return "#9CA3AF";
    if (score === 1) return "#DF1C41";
    if (score === 2) return "#f59e0b";
    if (score === 3) return "#00524F";
    return "#00524F";
  }};
`;

export const PasswordRulesWrap = styled(Box)`
  width: 100%;
  margin-top: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  row-gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const PasswordRuleItem = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const PasswordRuleDot = styled(Box)<{ active?: boolean }>`
  width: 12px;
  height: 12px;
  min-width: 12px;
  border-radius: 50%;
  background: ${({ active }) => (active ? "#00524F" : "#D7DFEB")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PasswordRuleText = styled(Typography)<{ active?: boolean }>`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: ${({ active }) => (active ? "#596881" : "#98A2B3")};
`;
export const PageWrap = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const LeftSide = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100vh",
}));

export const FormOuter = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  minHeight: "100vh",
  padding: "20px",
  width: "600px",
}));

export const ContentWrap = styled(Box)(() => ({}));

export const PageTitle = styled(Typography)(() => ({
  fontWeight: 600,
  fontFamily: "inter",
  fontSize: "32px",
}));

export const PageDescription = styled(Typography)(() => ({
  fontWeight: 400,
  color: "#596881",
  fontFamily: "inter",
}));

export const SubmitWrap = styled(Box)(() => ({
  marginTop: "30px",
}));
export const AgreementWrap = styled(Box)`
  margin-top: 16px;
  margin-bottom: 12px;
`;
export const SubmitButton = styled(Button)`
  position: relative;
  width: 100%;
  height: 40px;
  margin-top: 12px;
  margin-bottom: 12px;
  border-radius: 10px;
  text-transform: none;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  background:
    linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0)
    ),
    #00524f;
  box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.4);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 2px);
    height: 1.5px;
    background: rgba(255, 255, 255, 0.33);
    border-top-left-radius: 999px;
    border-top-right-radius: 999px;
  }

  &:hover {
    background:
      linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0)
      ),
      #00524f;
    box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.4);
  }
`;

export const BottomTextWrap = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  flex-wrap: wrap;
  text-align: center;
`;

export const BottomInlineText = styled(Typography)`
  cursor: pointer;
`;
export const FooterWrap = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;

  color: #7d879c;
  @media (max-width: 350px) {
    display: flex;
    font-size: 1px;
  }
`;
export const FooterInner = styled(Box)`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 1px;
`;
