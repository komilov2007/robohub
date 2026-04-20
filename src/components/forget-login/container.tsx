import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AuthContainer = styled(Box)`
  display: flex;
  height: 100vh;
  width: 100%;
`;

export const AuthLeft = styled(Box)`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f6f8fb;
`;

export const AuthRight = styled(Box)`
  width: 50%;
  height: 100%;
`;