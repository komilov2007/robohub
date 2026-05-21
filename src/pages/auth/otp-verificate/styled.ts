import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

export const PageWrap = styled(Box)`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
  box-sizing: border-box;
`;

export const CenterWrap = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormWrap = styled(Box)`
  width: 100%;
  max-width: 420px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 380px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

export const Arrow = styled(IconButton)`
  width: 40px;
  height: 40px;

  margin-bottom: 24px;

  border: 1px solid #d0d5dd;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #101828;
  background: #ffffff;

  &:hover {
    background: #f9fafb;
  }
`;

export const Title = styled(Typography)`
  width: 100%;

  font-size: 28px;
  font-weight: 700;
  line-height: 34px;

  text-align: center;

  color: #101828;

  margin-top: 12px;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 30px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
    line-height: 28px;
  }
`;

export const Description = styled(Typography)`
  width: 100%;
  max-width: 340px;

  margin-top: 10px;
  margin-bottom: 4px;

  text-align: center;

  font-size: 13px;
  line-height: 20px;

  color: #667085;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const OtpRow = styled(Box)`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  margin-top: 28px;
  margin-bottom: 24px;

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

export const OtpInput = styled("input")`
  width: 44px;
  height: 44px;

  border: 1px solid #d0d5dd;
  border-radius: 10px;

  background: #ffffff;

  text-align: center;

  font-size: 16px;
  font-weight: 600;

  color: #101828;

  outline: none;
  box-sizing: border-box;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:focus {
    border-color: #0b6b61;
    box-shadow: 0 0 0 3px rgba(11, 107, 97, 0.12);
  }

  &:disabled {
    background: #f2f4f7;
    color: #98a2b3;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    width: 38px;
    height: 38px;
    font-size: 14px;
  }
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  height: 40px;

  margin-top: 4px;

  border-radius: 10px;

  background:
    linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0)
    ),
    #00524f;

  color: #ffffff;

  text-transform: none;

  font-size: 14px;
  font-weight: 600;

  box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.35);

  &:hover {
    background:
      linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0)
      ),
      #004542;
  }

  &:disabled {
    background: #9ec8c2;
    color: #ffffff;
  }
`;

export const ResendText = styled(Typography)`
  width: 100%;

  margin-top: 18px;

  text-align: center;

  font-size: 12px;
  line-height: 18px;

  color: #98a2b3;
`;

export const TimeText = styled("span")`
  color: #0b6b61;
  font-weight: 600;
`;
