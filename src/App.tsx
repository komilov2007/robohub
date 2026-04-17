import { Routes, Route } from 'react-router-dom';
import { Box, Container, useMediaQuery } from '@mui/material';
import LoginLeft from './components/login/page';
import Home from './components/home/home';
import { LoginRight } from './components/login/loginright';

const LoginPage = () => {
  const isMobile = useMediaQuery('(max-width:768px)');
  return (
    <Container maxWidth={false} disableGutters>
      <Box
        sx={{
          display: 'flex',
          height: '100vh',
          width: '100%',
        }}
      >
        <LoginLeft />
        {!isMobile && <LoginRight />}
      </Box>
    </Container>
  );
};

const Dashboard = () => {
  return <h1>Dashboard sahifasi</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* <Route path="/register" element={<Register />} /> */}
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
