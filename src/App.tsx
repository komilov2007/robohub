import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import LoginLeft from './components/LoginLeft';
import LoginRight from './components/LoginRight';

const LoginPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '95vh', // butun ekran
        width: '100%',
        overflow: 'auto', // kerak bo‘lsa scroll ishlaydi
      }}
    >
      <LoginLeft />
      <LoginRight />
    </Box>
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
    </Routes>
  );
}

export default App;
