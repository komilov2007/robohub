import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

export const PageWrap = styled(Box)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8fafc;
`;

export const FormWrap = styled(Box)`
  width: 420px;
  background: #fff;
  padding: 32px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
`;

export const Description = styled(Typography)`
  font-size: 14px;
  color: #98a2b3;
  margin-bottom: 20px;
`;

export const FieldWrap = styled(Box)`
  margin-top: 16px;
  margin-bottom: 6px;
`;

export const StyledTextField = styled(TextField)`
  width: 100%;
  .MuiOutlinedInput-root {
    height: 42px;
    border-radius: 10px;
  }
`;

export const PasswordEyeButton = styled(IconButton)`
  color: #596881;
`;

export const StrengthBar = styled(Box)<{ active: boolean }>`
  flex: 1;
  height: 4px;
  border-radius: 999px;
  background: ${({ active }) => (active ? "#00524F" : "#D7DFEB")};
`;

export const RuleWrap = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 10px;
`;

export const RuleItem = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const RuleDot = styled(Box)<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ active }) => (active ? "#00524F" : "#D7DFEB")};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 8px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
  height: 42px;
  border-radius: 10px;
  background: #00524f;
  color: white;
  text-transform: none;
`;
