import Box from '@mui/material/Box';
import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

export const PageWrap = styled(Box)`
  width: 100%;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: stretch;
  background: #f8f8f8;
  overflow: hidden;
  box-sizing: border-box;
  margin-top: -10px;
`;

export const LeftSide = styled(Box)`
  flex: 1;
  min-height: 100vh;
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 20px 16px;
  }

  @media (max-width: 768px) {
    padding: 16px 12px;
  }
`;

export const RightSide = styled(Box)`
  width: 50%;
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  padding: 8px;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const TopBar = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PlusButton = styled(IconButton)`
  width: 20px;
  height: 20px;
  border: 1px solid #d0d5dd;
  border-radius: 6px;
  color: #98a2b3;
`;

export const LangSelect = styled(Select)`
  height: 30px;
  min-width: 96px;
  background: #ffffff;
  border-radius: 8px;
  font-size: 12px;

  .MuiSelect-select {
    padding: 6px 28px 6px 10px;
    display: flex;
    align-items: center;
  }

  fieldset {
    border-color: #eaecf0;
  }
`;

export const CenterWrap = styled(Box)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 0;

  @media (max-width: 768px) {
    padding: 16px 0;
  }
`;

export const FormWrap = styled(Box)`
  width: 100%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Title = styled(Typography)`
  font-size: 28px;
  font-weight: 700;
  line-height: 34px;
  color: #101828;
  margin-top: 24px;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 30px;
    margin-top: 16px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
    line-height: 28px;
  }
`;

export const Description = styled(Typography)`
  font-size: 12px;
  line-height: 18px;
  color: #667085;
  margin-top: 8px;
  max-width: 320px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const OtpRow = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 26px;
  margin-bottom: 24px;
  flex-wrap: nowrap;

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

export const OtpInput = styled('input')`
  width: 38px;
  height: 38px;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  background: #ffffff;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: #101828;
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-color: #0b6b61;
    box-shadow: 0 0 0 2px rgba(11, 107, 97, 0.12);
  }

  &:disabled {
    background: #f2f4f7;
    color: #98a2b3;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    width: 34px;
    height: 34px;
    font-size: 14px;
  }
`;

export const Arrow = styled(IconButton)`
  width: 40px;
  height: 40px;
  margin-bottom: 24px;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  height: 36px;
  border-radius: 6px;
  background: #0b6b61;
  color: #ffffff;
  text-transform: none;
  font-size: 13px;
  font-weight: 500;
  box-shadow: none;

  &:hover {
    background: #09584f;
    box-shadow: none;
  }

  &:disabled {
    background: #9ec8c2;
    color: #ffffff;
  }
`;

export const ResendText = styled(Typography)`
  width: 100%;
  text-align: center;
  margin-top: 16px;
  font-size: 12px;
  line-height: 18px;
  color: #98a2b3;
`;

export const TimeText = styled('span')`
  color: #0b6b61;
  font-weight: 600;
`;

export const Footer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 18px;
  align-items: center;
  padding-top: 16px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const FooterText = styled(Typography)`
  font-size: 10px;
  color: #98a2b3;
  line-height: 14px;
`;