import { Box } from '@mui/material';
import { memo } from 'react';

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <h2>welcome Home</h2>
    </Box>
  );
};

export default memo(Home);
