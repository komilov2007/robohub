import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
export const TermsText = styled(Link)({
  color: "#00524F",
});

export const AuthPageWrap = styled(Box)`
  width: 100%;
  min-height: 100%;
  display: flex;
  background: transparent;
  overflow: visible;
  box-sizing: border-box;

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

export const LeftColumn = styled(Box)`
  width: min(100%, 520px);
  min-height: auto;
  display: flex;
  flex-direction: column;
  background: transparent;
  padding: 0;
  box-sizing: border-box;
  margin: 0 auto;
  overflow: visible;

  @media (max-width: 768px) {
    width: min(100%, 430px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const FormBlock = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;

  @media (max-width: 768px) {
    gap: 8px;
    transform: none;
  }

  @media (max-width: 480px) {
    transform: none;
  }
`;
export const RightSide = styled(Box)`
  flex: 0 0 50%;
  max-width: 50%;
  height: 100dvh;
  overflow: hidden;
  padding: clamp(10px, 16px);
  box-sizing: border-box;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const HeaderArea = styled(Box)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 34px;
  flex-shrink: 0;
`;
export const CenterArea = styled(Box)`
  flex: 1;
  min-height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const LanguageSelectWrap = styled(Box)`
  display: flex;
  align-items: center;
`;

export const LanguageSelect = styled(Select)`
  width: 140px;
  height: 34px;
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
    font-size: 13px;
    color: #3e4a60;
  }
`;
export const StyledMenuItem = styled(MenuItem)`
  display: flex;
  gap: 12px;
  font-size: 13px;
`;
export const TitleWrap = styled(Box)`
  margin-bottom: 4px;
`;
export const SubTitleWrap = styled(Box)`
  @media (max-height: 820px) {
    margin-bottom: 8px;
  }
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
  margin-bottom: 4px;
  margin-top: 10px;

  @media (max-height: 820px) {
    margin-top: 6px;
  }
`;

export const StyledTextField = styled(TextField)`
  width: 100%;
  display: block;

  .MuiOutlinedInput-root {
    height: 38px;
    border-radius: 10px;
    background: #ffffff;
    padding-left: 10px;
    padding-right: 10px;

    @media (max-height: 820px) {
      height: 34px;
    }
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
    font-size: 13px;
    font-weight: 400;
    color: #101828;
    padding: 8px 0;
  }

  .MuiInputBase-input::placeholder {
    color: #98a2b3;
    opacity: 1;
  }

  .MuiFormHelperText-root {
    margin-left: 0;
    margin-top: 4px;
    font-size: 10px;
  }
`;

export const PasswordSection = styled(Box)`
  width: 100%;
`;

export const PasswordEyeButton = styled(IconButton)`
  color: #596881;
  padding: 4px;
`;

export const PasswordStrengthWrap = styled(Box)`
  width: 100%;
  margin-top: 8px;
`;

export const PasswordStrengthTop = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
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
}>`
  height: 4px;
  border-radius: 999px;

  background: ${({ level, score }) => {
    if (!score || score < (level || 0)) return "#D7DFEB";

    if (score === 1) return "#DF1C41";
    if (score === 2) return "#f59e0b";

    return "#00524F";
  }};
`;

export const PasswordStrengthText = styled(Typography)<{
  score?: number;
}>`
  font-size: 11px;
  font-weight: 500;

  color: ${({ score }) => {
    if (!score) return "#9CA3AF";
    if (score === 1) return "#DF1C41";
    if (score === 2) return "#f59e0b";

    return "#00524F";
  }};
`;

export const PasswordRulesWrap = styled(Box)`
  width: 100%;
  margin-top: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 14px;
  row-gap: 6px;

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
  width: 10px;
  height: 10px;
  min-width: 10px;
  border-radius: 50%;
  background: ${({ active }) => (active ? "#00524F" : "#D7DFEB")};
`;

export const PasswordRuleText = styled(Typography)<{
  active?: boolean;
}>`
  font-size: 11px;
  line-height: 15px;
  font-weight: 400;
  color: ${({ active }) => (active ? "#596881" : "#98A2B3")};
`;

export const AgreementWrap = styled(Box)`
  margin-top: 8px;
  margin-bottom: 6px;
`;

export const SubmitButton = styled(Button)`
  position: relative;
  width: 100%;
  height: 38px;
  margin-top: 8px;
  margin-bottom: 8px;
  border-radius: 10px;
  text-transform: none;
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;

  background:
    linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0)
    ),
    #00524f;

  box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.4);

  &:hover {
    background:
      linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0)
      ),
      #00524f;
  }

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

  @media (max-height: 820px) {
    height: 34px;
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
  font-size: 13px;
`;
export const FooterWrap = styled(Box)`
  display: flex;
  justify-content: center;
  color: #7d879c;
  width: 100%;
  padding: 12px 0;

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

export const FooterInner = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
  text-align: center;

  font-size: 13px;

  @media (max-width: 768px) {
    gap: 14px;
    font-size: 2px;
  }

  @media (max-width: 480px) {
    gap: 10px;
    font-size: 1px;
  }

  @media (max-width: 360px) {
    flex-direction: row;
    gap: 6px;
    font-size: 1px;
  }
`;
export const PrivacyText = styled(Link)({
  fontSize: "13px",
  textDecoration: "none",
  color: "#7d879c",
  "&:hover": {
    color: "#00524F",
    textDecoration: "underline",
  },
});
