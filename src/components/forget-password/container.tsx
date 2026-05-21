import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AuthContainer = styled(Box)`
  display: flex;
  height: 100vh;
  width: 100%;
`;

export const AuthLeft = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f6f8fb;
  @media (max-width: 939px) {
    width: 100%;
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const AuthRight = styled(Box)`
  width: 100%;
  height: 100%;
`;
